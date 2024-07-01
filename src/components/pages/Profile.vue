<template>
    <div class="profile-section">
        <div class="container">
            <div class="profile-card">
                <h3 class="title">General Information</h3>
                <div v-if="user" class="profile-grid">

                    <div class="profile-picture">
                        <img :src="user.picture" alt="Profile Picture">
                        <div class=""></div>
                    </div>

                    <div class="profile-details">
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" v-model="user.name" placeholder="Full Name">
                        </div>

                        <div class="form-group">
                            <label for="location">Location</label>
                            <input type="text" id="location" v-model="user.location" placeholder="Location">
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="user.email" placeholder="Email">
                        </div>

                        <div class="form-group form-check-group">
                            <input type="checkbox" id="defaultAddress" v-model="user.defaultAddress">
                            <label for="defaultAddress">Make this my default address</label>
                        </div>

                        <button class="btn--base" @click="saveProfile">Save</button>
                    </div>

                    <div class="profile-details">
                        <div class="form-group">
                            <label for="profession">Profession</label>
                            <input type="text" id="profession" v-model="user.profession" placeholder="Profession">
                        </div>

                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" v-model="user.address" placeholder="Address">
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" v-model="user.phone" placeholder="Phone">
                        </div>



                    </div>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref(null);

const fetchUserProfile = async () => {
    try {
        const response = await axios.get('/api/user/me/', {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        user.value = response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

const saveProfile = async () => {
    try {
        await axios.post('/api/user/me/', user.value, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        alert('Profile saved successfully');
    } catch (error) {
        console.error('Error saving profile:', error);
    }
};

onMounted(() => {
    fetchUserProfile();
});
</script>

<style scoped>
/* General styling */
.profile-section {
    padding: 20px;
    background-color: #f9fafb;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

/* Card styling */
.profile-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

/* Title styling */
.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}

/* Grid layout */
.profile-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    gap: 20px;
}

/* Profile picture styling */
.profile-picture {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-picture img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #007bff;
}

/* Form group styling */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 14px;
    color: #333;
}

/* Checkbox styling */
.form-group input[type="checkbox"] {
    width: auto;
    margin-right: 5px;
}

/* Save button styling */
.save-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.save-button:hover {
    background-color: #ea5455;
}

.form-check-group {
    display: flex;
    align-items: baseline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .profile-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .profile-picture img {
        width: 100px;
        height: 100px;
    }
}
</style>
