<template>
    <header class="header-section">
        <div class="header">
            <div class="header-bottom-area">
                <div class="container-fluid">
                    <div class="header-menu-content">
                        <nav class="navbar navbar-expand-xl p-0">
                            <router-link to="/" class="site-logo site-title">
                                <img src="@/assets/assets/images/logo.png" alt="site-logo">
                            </router-link>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="fas fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu mr-auto">
                                    <li class="menu_has_children">
                                        <a href="#0">
                                            <div class="toggle-menu">
                                                <div class="toggle-wrapper">
                                                    <div class="toggle-bar">
                                                        <div class="toggle">
                                                            <div class="element section--bg"></div>
                                                        </div>
                                                        <div class="toggle">
                                                            <div class="element"></div>
                                                        </div>
                                                    </div>
                                                    <div class="toggle-bar">
                                                        <div class="toggle">
                                                            <div class="element"></div>
                                                        </div>
                                                        <div class="toggle">
                                                            <div class="element"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                MENU
                                            </div>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="menu_has_children">
                                                <router-link to="/">HOME</router-link>

                                            </li>
                                            <li><router-link to="/about">ABOUT US</router-link></li>
                                            <li class="menu_has_children">
                                                <a href="#0">TRAINING</a>
                                                <ul class="sub-menu">
                                                    <li><router-link to="/training">TRAINING</router-link></li>
                                                    <li><router-link to="/training-details">TRAINING
                                                            DETAILS</router-link></li>
                                                </ul>
                                            </li>
                                            <li class="menu_has_children">
                                                <a href="#0">PAGES</a>
                                                <ul class="sub-menu">
                                                    <li><router-link to="/event">EVENTS</router-link></li>
                                                    <li><router-link to="/event-details">EVENT DETAILS</router-link>
                                                    </li>
                                                    <li><router-link to="/plan">PRICING PLAN</router-link></li>
                                                    <li><router-link to="/faq">FAQ</router-link></li>
                                                    <li><router-link to="/gallery">GALLERY</router-link></li>
                                                    <li><router-link to="/apply">APPLY</router-link></li>
                                                    <li><router-link to="/register">SIGN UP</router-link></li>
                                                    <li><router-link to="/login">SIGN IN</router-link></li>
                                                    <li><router-link to="/404">404 PAGE</router-link></li>
                                                </ul>
                                            </li>
                                            <li class="menu_has_children">
                                                <router-link to="/master">MASTERS</router-link>
                                                <ul class="sub-menu">
                                                    <li><router-link to="/master-details">MASTERS DETAILS</router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu_has_children">
                                                <router-link to="/blog">NEWS</router-link>
                                                <ul class="sub-menu">
                                                    <li><router-link to="/blog-classic">NEWS CLASSIC</router-link></li>
                                                    <li><router-link to="/blog-details">NEWS DETAILS</router-link></li>
                                                </ul>
                                            </li>
                                            <li><router-link to="/contact">CONTACT US</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link to="/training">TRAINING</router-link></li>
                                </ul>
                                <div class="header-right">
                                    <div class="header-links-area">
                                        <ul class="header-links">
                                            <li>
                                                <h5 class="title">Call Us Free</h5>
                                                <span class="sub-title"><a href="tel:+65325936523">+65 3259
                                                        36523</a></span>
                                            </li>
                                            <li>
                                                <h5 class="title">Address</h5>
                                                <span class="sub-title">123, New Lenox Chicago, IL 60606</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="header-action-area">
                                        <div class="header-action">
                                            <router-link to="/contact" class="btn--base">GET IN TOUCH <i
                                                    class="fas fa-arrow-right ml-2"></i></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
// Import any components or define setup as needed
</script>

<style>
/* Define styles as needed */
</style>
