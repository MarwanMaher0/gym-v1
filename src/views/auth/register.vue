<template>
    <Header />
    <banner :title="'SIGN-UP'" />

    <div class="breadcrumb-area">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Sign-UP</li>
            </ol>
        </nav>
    </div>
    <div>
        <section class="account-section ptb-120">
            <div class="account-element-one my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assets/assets/images/element/element-1.png" alt="element">
            </div>
            <div class="account-element-two my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assets/assets/images/element/element-2.png" alt="element">
            </div>
            <div class="container">
                <div class="row justify-content-center mb-10-none">
                    <div class="col-xl-5 col-lg-6 col-md-8">
                        <div class="account-form-area">
                            <h3 class="title">CREATE YOUR ACCOUNT</h3>
                            <form @submit.prevent="register" class="account-form">
                                <div class="row justify-content-center mb-20-none">
                                    <div class="col-xl-12 form-group">
                                        <label>Your Name</label>
                                        <input type="text" class="form--control" placeholder="Example Example"
                                            v-model="form.name">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Enter Email</label>
                                        <input type="email" class="form--control" placeholder="example@email.com"
                                            v-model="form.email">
                                    </div>
                                    <!-- ----------------------------- -->
                                    <div class="col-xl-12 form-group">
                                        <label>Age</label>
                                        <input type="number" class="form--control" placeholder="Enter your age"
                                            v-model="form.age">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Weight</label>
                                        <input type="number" class="form--control" placeholder="Enter your weight in kg"
                                            v-model="form.weight">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Height</label>
                                        <input type="number" class="form--control" placeholder="Enter your height in cm"
                                            v-model="form.height">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Phone</label>
                                        <input type="tel" class="form--control" placeholder="Enter your phone number"
                                            v-model="form.phone">
                                    </div>
                                    <!-- -------------------------- -->
                                    <div class="col-xl-12 form-group">
                                        <label>Enter Password</label>
                                        <input type="password" class="form--control" placeholder="****************"
                                            v-model="form.password">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Re-Enter Password</label>
                                        <input type="password" class="form--control" placeholder="****************">
                                        <!-- Consider adding a v-model for a password confirmation field if needed -->
                                    </div>
                                    <div class="col-xl-12 form-group text-center">
                                        <button type="submit" class="btn--base">Sign-up <i
                                                class="fas fa-arrow-right ml-2"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="account-change-area">
                            <p>Already have an account? <RouterLink to="/login">Sign-In</RouterLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer />
</template>
<script setup>
import Header from '@/components/auth/header.vue';
import Footer from '@/components/home/footer.vue';
import banner from '@/components/auth/banner.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

let form = {
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    phone: '',
    password: '',

};


const register = () => {
    axios.post('/api/user/create/', {
        email: form.email,
        name: form.name,
        age: form.age,
        weight: form.weight,
        height: form.height,
        phone: form.phone,
        password: form.password,
    })
        .then(response => {
            console.log('Successful registration:', response.data);
            // Optionally redirect to login or another page
        })
        .catch(error => {
            console.error('Error registering user:', error);
            // Handle error, display error message to user
        });
}






</script>