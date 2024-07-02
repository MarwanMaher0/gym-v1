<template>
    <section class="plan-section ptb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8 text-center">
                    <div class="section-header">
                        <h2 class="section-title">OUR <span>MEMBERSHIP</span> PLAN</h2>
                        <p>Fight School has specialized in martial arts since 1986 and has one of the most innovative
                            programs in the nation.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <nav class="plan-tab">
                        <span :class="{ active: !isYearly }" @click="isYearly = false"
                            class="monthly_tab_title">Monthly</span>

                        <span :class="{ active: isYearly }" @click="isYearly = true"
                            class="annual_tab_title">Yearly</span>
                    </nav>
                </div>
            </div>
            <div v-if="!isYearly" class="plan-area change-subs-duration">
                <div class="row justify-content-center mb-30-none">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 mb-30" v-for="(plan, index) in monthlyPlans"
                        :key="index">
                        <div class="plan-item" :class="{ active: plan.popular }">
                            <span v-if="plan.popular" class="plan-badge-top">POPULAR</span>
                            <div class="plan-content">
                                <div class="plan-header">
                                    <div class="plan-badge-area">
                                        <span class="plan-badge red">{{ plan.type }}</span>
                                    </div>
                                    <p>{{ plan.description }}</p>
                                </div>
                                <div class="plan-price-area">
                                    <h2 class="price-title"><sup>$</sup>{{ plan.price }}<sub>/month</sub></h2>
                                </div>
                                <ul class="plan-list">
                                    <li v-for="(feature, fIndex) in plan.features" :key="fIndex">{{ feature }}</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a href="">
                                    <h3 class="title">GO {{ plan.type.toUpperCase() }}</h3>

                                </a>
                            </div>
                            <div class="plan-overlay">
                                <img src="@/assets/images/element/element-25.png" alt="element">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="plan-area change-subs-duration">
                <div class="row justify-content-center mb-30-none">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 mb-30" v-for="(plan, index) in yearlyPlans"
                        :key="index">
                        <div class="plan-item" :class="{ active: plan.popular }">
                            <span v-if="plan.popular" class="plan-badge-top">POPULAR</span>
                            <div class="plan-content">
                                <div class="plan-header">
                                    <div class="plan-badge-area">
                                        <span class="plan-badge red">{{ plan.type }}</span>
                                    </div>
                                    <p>{{ plan.description }}</p>
                                </div>
                                <div class="plan-price-area">
                                    <h2 class="price-title"><sup>$</sup>{{ plan.price }}<sub>/year</sub></h2>
                                </div>
                                <ul class="plan-list">
                                    <li v-for="(feature, fIndex) in plan.features" :key="fIndex">{{ feature }}</li>
                                </ul>
                            </div>
                            <div class="plan-footer">
                                <a href="">
                                    <h3 class="title">GO {{ plan.type.toUpperCase() }}</h3>

                                </a>
                            </div>
                            <div class="plan-overlay">
                                <img src="@/assets/images/element/element-25.png" alt="element">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isYearly = ref(false);

const monthlyPlans = [
    {
        type: 'Basic',
        description: 'Access to all classes & membership',
        price: 39,
        features: ['Fifo – Fly In / Fly Out', 'No Contract', 'Shirt & Pants'],
        popular: false
    },
    {
        type: 'Pro',
        description: 'Access to all classes & membership',
        price: 49,
        features: ['Membership', 'Unlimited Training', 'Access to all classes'],
        popular: true
    },
    {
        type: 'Elite',
        description: 'Access to all classes & membership',
        price: 59,
        features: ['Fifo – Fly In / Fly Out', 'Train 24 hrs/day', 'Glovers & Fightgear'],
        popular: false
    }
];

const yearlyPlans = [
    {
        type: 'Basic',
        description: 'Access to all classes & membership',
        price: 49,
        features: ['Fifo – Fly In / Fly Out', 'No Contract', 'Shirt & Pants'],
        popular: false
    },
    {
        type: 'Pro',
        description: 'Access to all classes & membership',
        price: 59,
        features: ['Membership', 'Unlimited Training', 'Access to all classes'],
        popular: true
    },
    {
        type: 'Elite',
        description: 'Access to all classes & membership',
        price: 79,
        features: ['Fifo – Fly In / Fly Out', 'Train 24 hrs/day', 'Glovers & Fightgear'],
        popular: false
    }
];
</script>

<style>
.plan-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.plan-tab span {
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
}

.plan-tab .active {
    background-color: #f00;
    color: #fff;
}
</style>