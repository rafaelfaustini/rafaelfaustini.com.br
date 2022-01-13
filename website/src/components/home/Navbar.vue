<template>
  <header class="menu-bg">
    <div class="menu">
        <div class="menu-logo">
            <a>{{$t('home.navbar.brand')}} </a>
        </div>
        <nav>
            <ul>
                <li><a href="#header">{{$t('home.navbar.home')}}</a></li>
                <li><a href="#about">{{$t('home.navbar.about')}}</a></li>
                <li><a href="#portfolio">{{$t('home.navbar.projects')}}</a></li>
                <li><a href="/blog">{{$t('home.navbar.blog')}}</a></li>
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
export default {
  name: 'Navbar',
}
</script>