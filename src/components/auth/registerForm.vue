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
                                    <div class="grid grid-cols-2">

                                        <div class="col-xl-12 form-group">
                                            <label>Age</label>
                                            <input type="number" class="form--control" placeholder="Enter your age"
                                                v-model="form.age">
                                        </div>
                                        <div class="col-xl-12 form-group">
                                            <label for="gender">Gender</label>
                                            <select id="gender" v-model="form.gender" class="form-control">
                                                <option value="" disabled selected>Select your gender</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
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
                                            <input type="password" class="form--control" placeholder="****************"
                                                v-model="form.repassword">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 form-group">
                                        <label>Profile Picture</label>
                                        <input type="file" class="form--control" @change="handleFileUpload">
                                    </div>
                                    <div class="col-xl-12 form-group text-center">
                                        <button type="submit" class="btn--base">Sign-up <i
                                                class="fas fa-arrow-right ml-2"></i></button>
                                    </div>
                                </div>
                                <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
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
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

let form = ref({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    repassword: ''  // Add repassword field
});

let profilePicture = ref(null);
let errorMessage = ref('');

const handleFileUpload = (event) => {
    profilePicture.value = event.target.files[0];
};

const register = () => {
    // Check if passwords match
    if (form.value.password !== form.value.repassword) {
        errorMessage.value = 'Passwords do not match.';
        return;
    }

    // Check if profile picture is uploaded
    if (!profilePicture.value) {
        errorMessage.value = 'Profile picture is required.';
        return;
    }

    const formData = new FormData();
    formData.append('email', form.value.email);
    formData.append('name', form.value.name);
    formData.append('age', form.value.age);
    formData.append('gender', form.value.gender);
    formData.append('phone', form.value.phone);
    formData.append('password', form.value.password);
    formData.append('picture', profilePicture.value);

    axios.post('api/user/create/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
    })
        .then(response => {
            console.log('Successful registration:', response.data);
            router.push('/login');
        })
        .catch(error => {
            console.error('Error registering user:', error);
            errorMessage.value = 'Failed to register. Please try again.';
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
