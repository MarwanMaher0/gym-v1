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

    <registerForm />


    <Footer />
</template>

<script setup>
import Header from '@/components/auth/header.vue';
import Footer from '@/components/home/footer.vue';
import banner from '@/components/auth/banner.vue';
import registerForm from '@/components/auth/registerForm.vue';


</script>
