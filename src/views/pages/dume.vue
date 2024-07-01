<template>
    <div class="p-5 bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto">
            <div class="bg-white shadow-md rounded-lg p-8">
                <h3 class="text-2xl font-semibold mb-6">General Information</h3>
                <form class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-center justify-center col-span-1 sm:col-span-2 mb-6">
                        <img src="https://via.placeholder.com/100" alt="Profile Picture"
                            class="w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
                    </div>
                    <div class="col-span-1">
                        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input id="name" type="text" placeholder="Jimmy Turner"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="profession" class="block text-sm font-medium text-gray-700">Profession</label>
                        <input id="profession" type="text" placeholder="Web Developer"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                        <select id="country" class="mt-1 form-select w-full border border-gray-300 rounded-md">
                            <option>All Countries</option>
                            <option selected>United States</option>
                            <option>India</option>
                            <option>Japan</option>
                            <option>China</option>
                            <option>Brazil</option>
                            <option>Norway</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <div class="col-span-1">
                        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                        <input id="address" type="text" placeholder="New York"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                        <input id="location" type="text" placeholder="Location"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                        <input id="phone" type="text" placeholder="+1 (530) 555-12121"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email" type="email" placeholder="Jimmy@gmail.com"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label for="web" class="block text-sm font-medium text-gray-700">Website</label>
                        <input id="web" type="text" placeholder="Enter URL"
                            class="mt-1 form-input w-full border border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-1">
                        <label class="inline-flex items-center mt-1">
                            <input type="checkbox" class="form-checkbox border-gray-300 rounded-md">
                            <span class="ml-2 text-sm text-gray-700">Make this my default address</span>
                        </label>
                    </div>
                    <div class="col-span-1 sm:col-span-2 flex justify-end mt-4">
                        <button type="button"
                            class="btn btn-primary px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';


import IconHome from '@/components/icons/icon-home.vue';
import IconDollarSignCircle from '@/components/icons/icon-dollar-sign-circle.vue';
import IconLinkedin from '@/components/icons/icon-linkedin.vue';
import IconFacebook from '@/components/icons/icon-facebook.vue';
import IconGithub from '@/components/icons/icon-github.vue';
import IconUser from '@/components/icons/icon-user.vue';


import IconPhone from '@/components/icons/icon-phone.vue';
import IconTwitter from '@/components/icons/icon-twitter.vue';


</script>
<style scoped>
/* Panel */
.panel {
    @apply relative rounded-md bg-white p-5 shadow;
}
</style>