<template>
  <section class="about" id="about">
    <div class="content">
        <div class="about-info">
            <h1>{{ $t('home.about.title')}}</h1>
            <p v-for="paragraph in $t('home.about.paragraphs')" :key="paragraph" v-html="bind(paragraph)"></p>
        </div>
        <div class="about-img">
            <img loading="lazy" src="@/assets/images/eu.png" :alt="$t('home.about.me.alt')" />
        </div>
    </div>
    <div class="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="wave">
            <path fill="#ff5500" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,133.3C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      bind : function(elem){
        // To be remade with i18n
        return elem.replace("{age}", this.age);
      }
    }
  },
  computed: {
    age: function(){
      let currentDate = new Date();
      let birthDate = new Date("1999-04-17");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000);
      return age
    }
  },
}
</script>