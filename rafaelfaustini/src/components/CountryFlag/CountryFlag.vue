<template>
    <div class="flag">
      <transition name="fade" mode="out-in">
        <img class="flag-icon" v-if="showBrasilFlag" src="/img/header/brasil.svg" alt="" :key="0" />
        <img class="flag-icon" v-if="showItaliaFlag" src="/img/header/italia.svg" alt="" :key="1"/>
        <img class="flag-icon" v-if="showPortugalFlag" src="/img/header/portugal.svg" alt="" :key="2"/>
      </transition>

    </div>
</template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import CountryFlagEnum from './enum/CountryFlagEnum';
  
  export default Vue.extend({
    name: 'CountryFlag',
    props: {
        defaultFlag: Number as PropType<CountryFlagEnum>,
        slideAnimation: Boolean,
        slideInterval: Number
    },
    data() {
      return {
        currentFlag: CountryFlagEnum.Brasil as CountryFlagEnum,
      }
    },
    computed: {
      showBrasilFlag: function() : boolean {
        return this.currentFlag == CountryFlagEnum.Brasil;
      },
      showItaliaFlag: function() : boolean {
        return this.currentFlag == CountryFlagEnum.Italia;
      },
      showPortugalFlag: function() : boolean {
        return this.currentFlag == CountryFlagEnum.Portugal;
      },
    },
    mounted() {
      this.currentFlag = this.defaultFlag || CountryFlagEnum.Brasil;

      if(this.slideAnimation) {
        setInterval(this.updateFlag, this.slideInterval * 1000)
      }
    },

    methods: {
      updateFlag() {
        console.log("teste")
        let totalFlags = Object.keys(CountryFlagEnum).length  / 2; 
        this.currentFlag = ((this.currentFlag + 1) % totalFlags);
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .flag {
    .flag-icon {
      display: inline;
      margin: 10px;
      width: 1em;
      height: 1em;
      vertical-align: middle;
  }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  display: none;
}


  </style>
  