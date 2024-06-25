<template>
    <header class="header-section header-section-two  header-section-three">
        <div class="header">
            <div class="header-bottom-area">
                <div class="container-fluid">
                    <div class="header-menu-content">
                        <nav class="navbar navbar-expand-xl p-0">
                            <router-link to="/" class="site-logo site-title">
                                <img src="/src/assets/assets/images/logo-2.png" alt="site-logo">
                            </router-link>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="fas fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu">
                                    <li class="menu_has_children">
                                        <router-link to="/">HOME</router-link>
                                    </li>
                                    <li><router-link to="/about">ABOUT US</router-link></li>
                                    <li class="menu_has_children">
                                        <a href="#0">TRAINING</a>
                                        <ul class="sub-menu">
                                            <li><router-link to="/training">TRAINING</router-link></li>
                                            <li><router-link to="/training-details">TRAINING DETAILS</router-link></li>
                                        </ul>
                                    </li>
                                    <!-- Other menu items using router-link -->
                                </ul>
                                <div class="header-right">
                                    <div class="header-action-area">
                                        <div class="header-action">
                                            <router-link to="/apply" class="btn--base">APPLY NOW <i
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