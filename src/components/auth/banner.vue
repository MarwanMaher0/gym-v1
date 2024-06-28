<template>
    <section class="banner-section banner-section-two-asd inner-banner-section bg-overlay-red bg_img"
        data-background="/src/assets/images/bg/bg-10.png">
        <div class="section-logo-text">
            <span class="title">GymMaster</span>
        </div>
        <div class="container-fluid">
            <div class="row justify-content-center align-items-end mb-30-none">
                <div class="col-xl-12 col-lg-12 text-center mb-30">
                    <div class="banner-content" data-aos="fade-up" data-aos-duration="1800">
                        <h1 class="title">{{ title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.banner-section.banner-section-two-asd {
    position: relative;
    background-image: url('/src/assets/images/bg/bg-12.png');
    background-size: cover;
    background-position: center center;
    /* Add any other necessary styles */
}
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
});
</script>