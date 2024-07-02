<template>
    <Header />
    <div>
        <banner :title="'BMI'" />
        <div class="breadcrumb-area">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">BMI</li>
                </ol>
            </nav>
        </div>
        <section
            class="account-widget-section account-widget-section-two account-widget-section--style account-widget-section--style-two pt-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="account-widget-form-area">
                            <div class="row justify-content-center">
                                <div class="col-xl-10 col-lg-12 text-center">
                                    <div class="section-header">
                                        <h2 class="section-title">Calculate <span>Your</span> BMI <span>Today!</span>
                                        </h2>
                                        <p>Use this form to calculate your Body Mass Index (BMI).</p>
                                    </div>
                                </div>
                            </div>
                            <form class="account-widget-form" @submit.prevent="calculateBMI">
                                <div class="row justify-content-center mb-20-none">
                                    <div class="col-xl-6 col-lg-6 form-group">
                                        <label>Enter Age</label>
                                        <input type="number" v-model="form.age" class="form--control" placeholder="Age"
                                            required>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 form-group">
                                        <label>Select Gender</label>
                                        <select v-model="form.gender" class="form--control" required>
                                            <option value="" disabled>Select Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 form-group">
                                        <label>Enter Height (cm)</label>
                                        <input type="number" v-model="form.height" class="form--control"
                                            placeholder="Height in cm" required>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 form-group">
                                        <label>Enter Weight (kg)</label>
                                        <input type="number" v-model="form.weight" class="form--control"
                                            placeholder="Weight in kg" required>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 form-group">
                                        <label>Select Activity Level</label>
                                        <select v-model="form.activity_level" class="form--control" required>
                                            <option value="" disabled>Select Activity Level</option>
                                            <option value="Lightly active">Lightly active</option>
                                            <option value="Sedentary">Sedentary</option>
                                            <option value="Moderately active">Moderately active</option>
                                            <option value="Very active">Very active</option>
                                            <option value="Super active">Super active</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12 form-group text-center">
                                        <button type="submit" class="btn--base mt-20">Calculate BMI <i
                                                class="fas fa-arrow-right ml-2"></i></button>
                                    </div>
                                </div>
                            </form>
                            <div v-if="bmiResult">
                                <h3 class="mt-4">Your BMI: {{ bmiResult.bmi }}</h3>
                                <p>{{ bmiResult.interpretation }}</p>
                                <p>Your Caloric Needs: {{ bmiResult.caloricNeeds }}</p>
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
import axios from 'axios';
import { reactive, ref } from 'vue';

const form = reactive({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activity_level: ''  // Add activity_level here
});

const bmiResult = ref(null);

const calculateBMI = () => {
    const heightInMeters = form.height / 100;
    const bmi = (form.weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Create FormData object and append data
    const formData = new FormData();
    formData.append('age', form.age);
    formData.append('gender', form.gender);
    formData.append('height', form.height);
    formData.append('weight', form.weight);
    formData.append('activity_level', form.activity_level);  // Append activity_level

    // Send a PATCH request with the FormData
    axios.patch('/api/user/me/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log('Successful BMI calculation:', response.data);
            bmiResult.value = {
                bmi: bmi,
                interpretation: response.data.bmi_interpretation,
                caloricNeeds: response.data.caloric_needs
            };
        })
        .catch(error => {
            console.error('Error calculating BMI:', error);
            alert('Failed to calculate BMI. Please try again.');
        });
}
</script>

<style scoped></style>
