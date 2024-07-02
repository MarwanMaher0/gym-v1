<template>
    <Header />
    <div>
        <banner :title="'Profile Details'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ profile?.name }}</li>
                </ol>
            </nav>
        </div>
        <section class="profile-section profile-details-section ptb-120">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-30-none">
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="profile-thumb">
                            <img :src="profile?.picture || picture" alt="profile">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="profile-content-area">
                            <div class="profile-header">
                                <h2 class="title">{{ profile?.name || 'User Name' }}</h2>
                                <span class="sub-title">
                                    {{ profile?.age ? `${profile.age} years old` : 'Age notavailable' }}</span>
                            </div>
                            <div class="profile-body">
                                <ul class="profile-details-list">
                                    <li>
                                        <strong>ID:</strong> {{ profile?.id || 'Not available' }}
                                    </li>
                                    <li>
                                        <strong>Email:</strong> {{ profile?.email || 'Not available' }}
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> {{ profile?.phone || 'Not available' }}
                                    </li>
                                    <li>
                                        <strong>Gender:</strong> {{ profile?.gender || 'Not available' }}
                                    </li>
                                    <li>
                                        <strong>Weight:</strong>
                                        {{ profile?.weight ? `${profile.weight} kg` : 'Notavailable' }}
                                    </li>
                                    <li>
                                        <strong>Height:</strong>
                                        {{ profile?.height ? `${profile.height} cm` : 'Notavailable' }}
                                    </li>
                                    <li>
                                        <strong>BMI Interpretation:</strong>
                                        {{ profile?.bmi_interpretation || 'Notavailable' }}
                                    </li>
                                    <li>
                                        <strong>Caloric Needs:</strong>
                                        {{ profile?.caloric_needs ? `${profile.caloric_needs} kcal` : 'Not available' }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-widget-area">
                    <h3 class="widget-title">Additional Information</h3>
                    <ul class="additional-info-list">
                        <li>
                            <strong>Body Fat Percentage:</strong> {{ profile?.body_fat_percentage || 'Not available' }}
                        </li>
                        <li>
                            <strong>Muscle Mass:</strong> {{ profile?.muscle_mass || 'Not available' }}
                        </li>
                        <li>
                            <strong>Bone Density:</strong> {{ profile?.bone_density || 'Not available' }}
                        </li>
                        <li>
                            <strong>Waist Circumference:</strong> {{ profile?.waist_circumference || 'Not available' }}
                        </li>
                        <li>
                            <strong>Hip Circumference:</strong> {{ profile?.hip_circumference || 'Not available' }}
                        </li>
                        <li>
                            <strong>Payment Start Date:</strong> {{ profile?.payment_start_date || 'Not available' }}
                        </li>
                        <li>
                            <strong>Payment End Date:</strong> {{ profile?.payment_end_date || 'Not available' }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/home/footer.vue';
import Header from '@/components/auth/header.vue';
import banner from '@/components/auth/banner.vue';
import picture from '@/assets/images/trainer/trainer-1.png';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const profile = ref(null);

onMounted(() => {
    axios.get(`/api/user/me/`)
        .then(response => {
            profile.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching profile details:', error);
        });
});
</script>

<style scoped>
.profile-section {
    position: relative;
}

.profile-thumb img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.profile-content-area {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
}

.profile-header .title {
    font-size: 2rem;
    font-weight: bold;
}

.profile-header .sub-title {
    color: #666;
    font-size: 1.2rem;
    margin-top: 5px;
}

.profile-body {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.6;
}

.profile-details-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.profile-details-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.profile-widget-area {
    margin-top: 40px;
    text-align: left;
}

.profile-widget-area .widget-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.additional-info-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.additional-info-list li {
    margin-bottom: 10px;
}
</style>
