<template>
    <Header />
    <div>
        <banner :title="'SIGN-IN'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Sign-in</li>
                </ol>
            </nav>
        </div>
        <section class="account-section ptb-120">
            <div class="account-element-one my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assetsimages/element/element-1.png" alt="element">
            </div>
            <div class="account-element-two my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground"
                data-paroller-direction="vertical">
                <img src="/src/assetsimages/element/element-2.png" alt="element">
            </div>
            <div class="container">
                <div class="row justify-content-center mb-10-none">
                    <div class="col-xl-5 col-lg-6 col-md-8">
                        <div class="account-form-area">
                            <h3 class="title">LOG IN TO YOUR ACCOUNT</h3>
                            <form @submit.prevent="login" class="account-form">
                                <div class="row justify-content-center mb-20-none">
                                    <div class="col-xl-12 form-group">
                                        <label>User Name</label>
                                        <input type="text" class="form--control" placeholder="Example Example"
                                            v-model="form.username">
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Enter Password</label>
                                        <input type="password" class="form--control" placeholder="****************"
                                            v-model="form.password">
                                    </div>
                                    <div class="col-xl-12 form-group text-center">
                                        <button type="submit" class="btn--base">Sign-in <i
                                                class="fas fa-arrow-right ml-2"></i></button>
                                    </div>
                                </div>
                            </form>
                            <div class="forgot-password-area">
                                <p><a href="#0">Forgot your Password?</a></p>
                            </div>
                        </div>
                        <div class="account-change-area">
                            <p>Have no Account on Sword? <RouterLink to="/register">Sign-Up</RouterLink>
                            </p>
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
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

let form = {
    username: '',
    password: ''
};

const login = () => {
    axios.post('/api/user/token/', {
        email: form.username,
        password: form.password
    })
        .then(response => {
            console.log('Successful login:', response.data);
            // Redirect to dashboard or another page upon successful login
            router.push('/dashboard');
        })
        .catch(error => {
            console.error('Error logging in:', error);
            // Handle error, display error message to user
            alert('Login failed. Please check your credentials and try again.');
        });
}
</script>

<style scoped></style>
