<template>
    <div>
        <Header />
    </div>
    <div class="p-20">
        <div class="col-lg-12">
            <div class="Provides" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                <div class="nav nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link" :class="{ active: selectedTab === 'meals' }" id="v-pills-meals-tab"
                        data-bs-toggle="pill" data-bs-target="#v-pills-meals" type="button" role="tab"
                        aria-controls="v-pills-meals" :aria-selected="selectedTab === 'meals'"
                        @click="fetchData('meals')">
                        Meals
                    </button>
                    <button class="nav-link" :class="{ active: selectedTab === 'supplements' }"
                        id="v-pills-supplements-tab" data-bs-toggle="pill" data-bs-target="#v-pills-supplements"
                        type="button" role="tab" aria-controls="v-pills-supplements"
                        :aria-selected="selectedTab === 'supplements'" @click="fetchData('supplements')">
                        Supplements
                    </button>
                </div>
                <div class="like-meal">
                    <router-link to="/ecom/wishlist">Like Meals <i class="fas fa-heart"></i></router-link>

                </div>
            </div>
        </div>
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div class="row">
                <div v-for="(item, index) in items" :key="index" class="col-xl-4 col-lg-6" data-aos="flip-up"
                    data-aos-delay="200" data-aos-duration="300">
                    <div class="dish">
                        <img class="max-h-" :alt="item.title || item.name" :src="item.picture">
                        <div class="dish-foods">
                            <h3>{{ item.title || item.name }}</h3>
                            <div class="dish-icon" v-if="item.tags">
                                <div class="cafa-button">
                                    <a v-for="(tag, index) in item.tags" :key="index" href="#">{{ tag.name }}</a>
                                </div>
                                <div class="dish-icon end">

                                    <i class="info fa-solid fa-circle-info"></i>
                                    <div class="star">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <p class="line-clamp-2 ">{{ item.description }}</p>
                            <div class="price">
                                <h2>{{ item.price }}</h2>
                                <div class="qty-input" v-if="selectedTab === 'meals'">
                                    <button class="qty-count qty-count--minus" data-action="minus"
                                        type="button">-</button>
                                    <input class="product-qty" type="number" name="product-qty" min="0" value="1">
                                    <button class="qty-count qty-count--add" data-action="add" type="button">+</button>
                                </div>
                            </div>
                            <button class="button-price">Add to Basket<i class="fas fa-shopping-cart"></i></button>
                        </div>
                        <div class="dish-info" style="display: none;" v-if="selectedTab === 'meals'">
                            <i class="info2 fa-solid fa-xmark"></i>
                            <h5>{{ item.infoTitle }}</h5>
                            <div class="cafa-button">
                                <a v-for="(tag, index) in item.tags" :key="index" href="#">{{ tag.name }}</a>
                            </div>
                            <p>{{ item.description }} </p>
                            <ul class="menu-dish">
                                <li v-for="(ingredient, index) in item.ingredients" :key="index">{{ ingredient.name }}
                                </li>
                            </ul>
                        </div>

                        <div class="dish-info" style="display: none;" v-if="selectedTab === 'supplements'">
                            <i class="info2 fa-solid fa-xmark"></i>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '@/components/auth/header.vue';
import Footer from '@/components/home/footer.vue';


import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedTab = ref('meals');
const items = ref([]);

const fetchData = async (tab) => {
    selectedTab.value = tab;
    let endpoint = '';
    if (tab === 'meals') {
        endpoint = '/api/recipe/recipes/';
    } else if (tab === 'supplements') {
        endpoint = '/api/recipe/supplements/';
    }
    try {
        const response = await axios.get(endpoint);
        items.value = response.data;
    } catch (error) {
        console.error(`Error fetching ${tab}:`, error);
    }
};

onMounted(() => {
    fetchData('meals'); // Default to meals on initial load
});
</script>




<style scoped>
.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.max-h- {
    max-height: 200px;
}

.p-20 {
    padding: 180px;

}

.qty-input {
    color: #000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: hidden;
}

.qty-input .product-qty,
.qty-input .qty-count {
    background: transparent;
    color: inherit;
    font-weight: bold;
    font-size: inherit;
    border: none;
    display: inline-block;
    min-width: 0;
    height: 2.5rem;
    line-height: 1;
}

.qty-input .product-qty:focus,
.qty-input .qty-count:focus {
    outline: none;
}

.qty-input .product-qty::-webkit-outer-spin-button,
.qty-input .product-qty::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

.qty-input .qty-count {
    cursor: pointer;
    width: 2.5rem;
    font-size: 1.25em;
    text-indent: -100px;
    overflow: hidden;
    position: relative;
    border: 1px solid #e80000;
    border-radius: 8px;
}

.qty-input .qty-count:before,
.qty-input .qty-count:after {
    content: "";
    height: 2px;
    width: 10px;
    position: absolute;
    display: block;
    background: #e80000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.qty-input .qty-count--add:after {
    transform: rotate(90deg);
}

.qty-input .qty-count:disabled {
    color: #ccc;
    background: #f2f2f2;
    cursor: not-allowed;
    border-color: transparent;
}

.qty-input .qty-count:disabled:before,
.qty-input .qty-count:disabled:after {
    background: #ccc;
}

.qty-input .qty-count--add {
    color: white;
}

.qty-input {
    border-radius: 4px;
}

.price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
}

.price h2 {
    font-weight: bold;
}

.qty-input .product-qty {
    width: 50px;
    min-width: 0;
    display: inline-block;
    text-align: center;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    border: 1px solid #F2F2F2;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
    margin: 0px 10px;
    color: #363636;
}

.dish .button.button-2 {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}

.button-price {
    color: white;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #e80000;
    transition: .3s ease-in-out;
    background-color: #e80000;

}

.button-price i {
    padding-left: 20px;
}

.button-price:hover {
    background-color: transparent;
    color: #e80000;


}



/* Box shadows for various elements */
.logos-card.restaurant-page,
.Provides,
.services-card-style i,
.dish,
.author-text p,
.card-text-data.two,
.get-the-menu input[type="text"],
ul.food-dishes li,
.error-page form input[type="text"],
.join-courier {
    box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 15%);
    -webkit-box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 15%);
    -moz-box-shadow: -1px 15px 26px -4px rgba(161, 151, 151, 0.15);
}

/* Provides section styling */
.Provides {
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Active and hover states for nav-pills */
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: transparent;
    color: #e80000;
    font-size: 18px;
    font-weight: bold;
}

.nav-link:focus,
.nav-link:hover {
    color: #e80000;
}

.nav-pills .nav-link.active {
    position: relative;
}

/* Underline for active tab */
.nav-pills .nav-link.active:before {
    content: "";
    background-color: #e80000;
    height: 2px;
    width: 75%;
    position: absolute;
    top: 125%;
}

/* Default nav-link styling */
.nav-link {
    color: #363636;
    background-color: transparent;
}

/* Nav-pills link styling */
.nav-pills .nav-link {
    font-size: 18px;
    font-weight: bold;
    padding: 0 30px 0 15px;
}

/* Like meal link styling */
.like-meal a {
    font-size: 18px;
    font-weight: bold;
    color: #e80000;
    padding-right: 20px;
}

.like-meal i {
    padding-right: 10px;
}

/* Dish card styling */
.dish {
    padding: 44px;
    border-radius: 25px;
    margin-top: 40px;
    background-color: white;
}

.dish img {
    padding-bottom: 20px;
}

.dish h3 {
    font-size: 36px;
    padding-bottom: 20px;
    font-weight: bold;
}

.dish .cafa-button a {
    font-size: 14px;
}

.cafa-button a {
    padding: 5px 15px;
    border: 1px solid #e80000;
    border-radius: 10px;
    font-size: 14px;
    transition: .3s ease-in-out;
    margin: 0 2px;

}

.cafa-button a:hover {
    color: white;
    background-color: #e80000;
}

.cafa-button {
    margin-top: 15px;
    margin-bottom: 20px;
}

.dish-icon .star {
    padding-left: 15px;
}

.dish-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #F2F2F2;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}

.dish-icon.end {
    border: 0;
}

.dish-icon.end button {
    background-color: transparent;
    border: 0;
}

/* Menu dish list styling */
ul.menu-dish {
    padding-top: 10px;
    font-size: 16px;
    color: #c7c7c7;
}

.menu-dish li {
    position: relative;
    padding-top: 10px;
    padding-left: 20px;
}

/* Header styling */
header.two {
    position: relative;
    padding: 26px 0;
    height: 100px;
}

/* Bullet points for menu items */
.menu-dish li:before {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    background-color: black;
    border-radius: 80px;
    top: 56%;
    left: 0;
}

/* Dish info styling */
.dish-info h5 {
    font-size: 24px;
    font-weight: bold;
    width: 80%;
    padding-top: 27px;
}

.dish-info {
    position: relative;
}

.dish-info i {
    position: absolute;
    right: 0;
    font-size: 18px;
}
</style>
