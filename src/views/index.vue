<template>
    <div>
        <Header />
        <Banner />
        <Feature />
        <!-- <Training /> -->
        <About id="ABOUT" />
        <schedule id="TRAINING" />
        <Footer id="foter" />
        <ScrollToTop />

    </div>
</template>

<style scoped>
/* Additional custom styles */
</style>

<script setup>
import Feature from '@/components/home/feature.vue'
import Training from '@/components/home/training.vue'
import ScrollToTop from '@/components/home/scrollToTop.vue'
import Header from '@/components/home/header.vue'
import Footer from '@/components/home/footer.vue'
import Banner from '@/components/home/banner.vue'
import About from '@/components/home/about-section.vue'
import schedule from '@/components/home/schedule.vue'

</script>