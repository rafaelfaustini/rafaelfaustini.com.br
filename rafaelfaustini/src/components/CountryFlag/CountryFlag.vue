<template>
    <div class="flag">
      <transition name="fade" mode="out-in">
        <img class="flag-icon" v-if="showBrasilFlag" src="https://hatscripts.github.io/circle-flags/flags/br.svg" alt="" :key="0" />
        <img class="flag-icon" v-if="showItaliaFlag" src="https://hatscripts.github.io/circle-flags/flags/it.svg" alt="" :key="1"/>
        <img class="flag-icon" v-if="showPortugalFlag" src="https://hatscripts.github.io/circle-flags/flags/pt.svg" alt="" :key="2"/>
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
        let totalFlags = Object.keys(CountryFlagEnum).length  / 2; 
        this.currentFlag = ((this.currentFlag + 1) % totalFlags);
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .flag {
    display: flex;
    align-items: center;
    width: 1em;
    height: 0.75em;

    .flag-icon {
      display: inline;
      width: 100%;
      height: 100%;
      border-radius: 10px;
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
  