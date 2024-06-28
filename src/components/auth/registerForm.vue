<template>
    <div class="">
        <section class="account-section ptb-120">
            <div class="account-element-one my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assets/images/element/element-1.png" alt="element">
            </div>
            <div class="account-element-two my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assets/images/element/element-1.png" alt="element">
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

                                    <div class="col-xl-12 form-group">
                                        <label>Age</label>
                                        <input type="number" class="form--control" placeholder="Enter your age"
                                            v-model="form.age">
                                    </div>
                                    <div class="grid grid-cols-2">

                                        <div class="col-xl-12 form-group">
                                            <label>Weight</label>
                                            <input type="number" class="form--control" placeholder="weight in kg"
                                                v-model="form.weight">
                                        </div>
                                        <div class="col-xl-12 form-group">
                                            <label>Height</label>
                                            <input type="number" class="form--control" placeholder="height in cm"
                                                v-model="form.height">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Phone</label>
                                        <input type="tel" class="form--control" placeholder="Enter your phone number"
                                            v-model="form.phone">
                                    </div>


                                    <div class="grid grid-cols-2">

                                        <div class="col-xl-12 form-group">
                                            <label>Enter Password</label>
                                            <input type="password" class="form--control" placeholder="****************"
                                                v-model="form.password">
                                        </div>
                                        <div class="col-xl-12 form-group">
                                            <label>Re-Enter Password</label>
                                            <input type="password" class="form--control" placeholder="****************">
                                        </div>
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

</template>
<script setup>

import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

let form = {
    name: '',
    age: '',
    height: '',
    weight: '',
    email: '',
    phone: '',
    password: '',

};


const register = () => {
    axios.post('api/user/create/', {
        email: form.email,
        name: form.name,
        age: form.age,
        weight: form.weight,
        height: form.height,
        phone: form.phone,


        password: form.password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
        .then(response => {
            console.log('Successful registration:', response.data);
            router.push('/login');
        })
        .catch(error => {
            console.error('Error registering user:', error);
        });
};


</script>
<style>
.grid {
    display: grid;
}

.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
}
</style>