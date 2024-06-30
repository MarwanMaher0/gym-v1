<template>
    <div class="profile-section ptb-120">
        <div class="container">
            <div class="row justify-content-center mb-10-none">
                <div class="col-xl-5 col-lg-6 col-md-8">
                    <div class="profile-area">
                        <h3 class="title">Your Profile</h3>
                        <div v-if="user">
                            <div class="profile-picture">
                                <img :src="user.picture" alt="Profile Picture">
                            </div>
                            <div class="profile-details">
                                <p><strong>Name:</strong> {{ user.name }}</p>
                                <p><strong>Email:</strong> {{ user.email }}</p>
                                <p><strong>Age:</strong> {{ user.age }}</p>
                                <p><strong>Weight:</strong> {{ user.weight }} kg</p>
                                <p><strong>Height:</strong> {{ user.height }} cm</p>
                                <p><strong>Phone:</strong> {{ user.phone }}</p>
                                <p><strong>BMI Interpretation:</strong> {{ user.bmi_interpretation }}</p>
                                <p><strong>Body Fat Percentage:</strong> {{ user.body_fat_percentage }}%</p>
                                <p><strong>Muscle Mass:</strong> {{ user.muscle_mass }} kg</p>
                                <p><strong>Bone Density:</strong> {{ user.bone_density }} g/cm³</p>
                                <p><strong>Waist Circumference:</strong> {{ user.waist_circumference }} cm</p>
                                <p><strong>Hip Circumference:</strong> {{ user.hip_circumference }} cm</p>
                            </div>
                        </div>
                        <div v-else>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref(null);

const fetchUserProfile = async () => {
    try {
        const response = await axios.get('api/user/me/', {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        user.value = response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

onMounted(() => {
    fetchUserProfile();
});
</script>

<style>
.profile-section {
    padding: 60px 0;
}

.profile-area {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.profile-picture {
    text-align: center;
    margin-bottom: 20px;
}

.profile-picture img {
    max-width: 150px;
    border-radius: 50%;
}

.profile-details {
    line-height: 1.6;
}

.profile-details p {
    margin-bottom: 10px;
}

.profile-details strong {
    display: inline-block;
    width: 150px;
}
</style>
