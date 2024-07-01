<template>
    <Header />
    <div>
        <banner :title="'Coach Details'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item">
                        <RouterLink to="/coaches">Coaches</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ coach?.name }}</li>
                </ol>
            </nav>
        </div>
        <section class="trainer-section trainer-details-section ptb-120">

            <div class="container">
                <div class="row justify-content-center align-items-center mb-30-none">
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="about-thumb">
                            <img :src="coach?.picture || picture" alt="about">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="trainer-about-content-area">
                            <div class="trainer-about-header">
                                <h2 class="title">{{ coach?.name || 'Randall Schwartz' }}</h2>
                                <span class="sub-title">{{ coach?.bio || "Women's Trainer" }}</span>
                                <div class="ratings">
                                    <span><i class="fas fa-star"></i> 4.50 (09)</span>
                                </div>
                            </div>
                            <div class="trainer-about-body">
                                <p>{{ coach?.description || 'There were twelve rules in all, and they specified that' }}
                                </p>
                            </div>
                            <div class="trainer-about-footer">
                                <ul class="trainer-about-list">
                                    <li>
                                        <img src="@/assets/images/icon/icon-42.png" alt="icon">
                                        <span>{{ coach?.phone || '+1 (900) 696 3600' }}</span>
                                    </li>
                                    <li>
                                        <img src="@/assets/images/icon/icon-43.png" alt="icon">
                                        <span>{{ coach?.email || 'sword@yahoo.com' }}</span>
                                    </li>
                                </ul>
                                <div class="trainer-about-social-area">
                                    <ul class="trainer-about-social">
                                        <li><a href="#0"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#0"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#0"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#0"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-widget-area">
                    <h3 class="widget-title">ABOUT ME</h3>
                    <p>{{ coach?.about || 'Driving is a skill many of us desire but do not possess. The good news here'
                        }}</p>
                    <p>{{ coach?.aboutExtended || 'If you are looking to learn how to drive. Sed ut perspiciatis, unde'
                        }}</p>
                    <div class="about-widget-thumb">
                        <img src="@/assets/images/bg/bg-20.png" alt="bg">

                    </div>
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
import { useRoute } from 'vue-router';

const route = useRoute();
const coach = ref(null);

onMounted(() => {
    const id = route.params.id;
    axios.get(`/api/recipe/coaches/${id}/`)
        .then(response => {
            coach.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching coach details:', error);
        });
});
</script>

<style scoped>
.trainer-section {
    position: relative;
}

.trainer-details-element-one,
.trainer-details-element-two {
    position: absolute;
    z-index: -1;
}

.trainer-details-element-one {
    top: 10%;
    left: 5%;
}

.trainer-details-element-two {
    bottom: 10%;
    right: 5%;
}

.about-thumb img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.trainer-about-content-area {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
}

.trainer-about-header .title {
    font-size: 2rem;
    font-weight: bold;
}

.trainer-about-header .sub-title {
    color: #666;
    font-size: 1.2rem;
    margin-top: 5px;
}

.trainer-about-body {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.6;
}

.trainer-about-footer {
    margin-top: 20px;
}

.trainer-about-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.trainer-about-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.trainer-about-list li img {
    margin-right: 10px;
}

.trainer-about-social-area {
    margin-top: 20px;
}

.trainer-about-social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
}

.trainer-about-social li {
    list-style: none;
}

.trainer-about-social li a {
    color: #333;
    font-size: 1.2rem;
    transition: color 0.3s;
}

.trainer-about-social li a:hover {
    color: #007bff;
}

.about-widget-area {
    margin-top: 40px;
    text-align: left;
}

.about-widget-area .widget-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.about-widget-area p {
    margin-bottom: 20px;
    line-height: 1.6;
}

.about-widget-thumb {
    position: relative;
}

.about-widget-thumb img {
    max-width: 100%;
    border-radius: 10px;
}

.about-widget-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.video-icon {
    font-size: 2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 10px 15px;
}
</style>
