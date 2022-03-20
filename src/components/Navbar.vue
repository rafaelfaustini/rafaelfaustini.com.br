<template>
    <header class="menu-bg">
        <div class="menu">
            <div class="menu-logo">
                <a>{{ $t('home.navbar.brand') }} </a>
                <span class="env badge clickable complementary_background secondary_text" v-if="this.env == 'production'" @click="redirectGithub">{{ this.version }}</span>
                <span class="env badge complementary_background secondary_text" v-else>{{ env }}</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">{{ $t('home.navbar.home') }}</router-link>
                    </li>
                    <li>
                        <a href="#about">{{ $t('home.navbar.about') }}</a>
                    </li>
                    <li>
                        <a href="#about">{{ $t('home.navbar.projects') }}</a>
                    </li>
                    <li>
                        <a href="/blog">{{ $t('home.navbar.blog') }}</a>
                    </li>
                    <li>
                        <a class="seletor">
                            <img loading="lazy" v-if="$i18n.locale == 'pt-BR'" @click="$i18n.locale = 'en'" src="@/assets/images/english.svg" :alt="$t('home.navbar.seletor.img.alt')" />
                            <img loading="lazy" v-if="$i18n.locale == 'en'" @click="$i18n.locale = 'pt-BR'" src="@/assets/images/brasil.svg" :alt="$t('home.navbar.seletor.img.alt')" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { version } from '../../package';

export default {
    name: 'Navbar',
    methods: {
        redirectGithub() {
            window.location.href = 'https://github.com/rafaelfaustini';
        },
    },
    computed: {
        version() {
            return version;
        },
        env() {
            return process.env.VUE_APP_ENV;
        },
    },
};
</script>
