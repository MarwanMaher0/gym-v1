<template>
    <Header />
    <div>
        <banner :title="'Recipe Details'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item">
                        <RouterLink to="/recipes">Recipes</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ recipe?.title }}</li>
                </ol>
            </nav>
        </div>
        <section class="recipe-section recipe-details-section ptb-120">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-30-none">
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="about-thumb">
                            <img :src="recipe?.picture || picture" alt="Recipe">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 mb-30">
                        <div class="recipe-about-content-area">
                            <div class="recipe-about-header">
                                <h2 class="title">{{ recipe?.title || 'Recipe Title' }}</h2>
                                <span class="sub-title">{{ recipe?.description || 'Recipe Description' }}</span>
                                <div class="details">
                                    <span>Time: {{ recipe?.time_minutes }} minutes</span><br>
                                    <span>Price: {{ recipe?.price }}</span><br>
                                    <span>Calories: {{ recipe?.calories }}</span>
                                </div>
                            </div>
                            <div class="recipe-about-body">
                                <h3>Ingredients</h3>
                                <ul>
                                    <li v-for="ingredient in recipe?.ingredients" :key="ingredient.id">{{
                                        ingredient.name }}</li>
                                </ul>
                                <h3>Tags</h3>
                                <ul>
                                    <li v-for="tag in recipe?.tags" :key="tag.id">{{ tag.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-widget-area">
                    <h3 class="widget-title">More Information</h3>
                    <p>{{ recipe?.link || 'Recipe Link' }}</p>
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
const recipe = ref(null);

onMounted(() => {
    const id = route.params.id;
    axios.get(`/api/recipe/recipes/${id}/`)
        .then(response => {
            recipe.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching recipe details:', error);
        });
});
</script>

<style scoped>
.recipe-section {
    position: relative;
}

.recipe-details-element-one,
.recipe-details-element-two {
    position: absolute;
    z-index: -1;
}

.recipe-details-element-one {
    top: 10%;
    left: 5%;
}

.recipe-details-element-two {
    bottom: 10%;
    right: 5%;
}

.about-thumb img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.recipe-about-content-area {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
}

.recipe-about-header .title {
    font-size: 2rem;
    font-weight: bold;
}

.recipe-about-header .sub-title {
    color: #666;
    font-size: 1.2rem;
    margin-top: 5px;
}

.recipe-about-body {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.6;
}

.details {
    margin-top: 10px;
}

.recipe-about-footer {
    margin-top: 20px;
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
</style>
