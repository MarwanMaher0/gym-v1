<template>
    <Header />
    <div>
        <banner :title="'Our Coaches'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Coaches</li>
                </ol>
            </nav>
        </div>
        <section class="trainer-section trainer-section--style trainer-section--style-two ptb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 text-center">
                        <div class="section-header">
                            <h2 class="section-title">OUR <span>EXPERT</span> COACHES</h2>
                            <p>Meet our expert coaches who will help you achieve your fitness goals.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="grid">
                        <div v-for="coach in coaches" :key="coach.id" class="grid-item trainer">
                            <div class="trainer-item">
                                <div class="trainer-thumb">
                                    <img :src="coach.picture || picture" alt="coach">
                                    <div class="trainer-overlay">
                                        <div class="share-area">
                                            <div class="share-icon">
                                                <i class="fas fa-share-alt"></i>
                                            </div>
                                            <ul class="social-list">
                                                <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
                                                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="trainer-content">
                                    <h3 class="title">
                                        <RouterLink :to="`/CoachDetails/${coach.id}`">{{ coach.name }}</RouterLink>
                                    </h3>
                                    <span class="sub-title line-clamp-2">{{ coach.bio }}</span>
                                </div>
                            </div>
                        </div>

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
import { ref } from 'vue';

const coaches = ref([]);

axios.get('/api/recipe/coaches/')
    .then(response => {
        coaches.value = response.data;
    })
    .catch(error => {
        console.error('Error fetching coaches:', error);
    });
</script>


<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;

}

.grid-item {
    width: 90%;
}

.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>