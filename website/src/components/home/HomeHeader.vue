<template>
  <section class="header" id="header">
      <div class="content">
          <div class="texts">
              <h1><img loading="lazy" :alt="$t('home.header.flags.brazil_alt')" src="@/assets/images/brasil.svg" class="flag" />{{$t('home.header.title')}}<img loading="lazy" :alt="$t('home.header.flags.italy_alt')" src="@/assets/images/italia.svg" class="flag" /></h1>
              <p>{{$t('home.header.subtitle')}}</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>