<template>
    <div class="placeholder-image" :style="backgroundColorStyle">
        <div class="wrapper">
            <p class="placeholder-text">{{ text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PlaceHolderImage',
  props: {
      text: String,
      color: String,
  },
  components: {
  },
  computed: {
    backgroundColorStyle() : string {
        return `background-color: ${this.backgroundColor}`;
    }
  },
  data() {
    return {
        predefinedColors: [
            "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f39c12", "#d35400", "#c0392b", "#d63031", "#05c46b"
        ],
        backgroundColor: ""
    }
  },
  methods: {
    getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomColor() {
        const colorsQuantity = this.predefinedColors.length;
        const randomIndex = this.getRandomIntInclusive(0, colorsQuantity-1);
        return this.predefinedColors[randomIndex];
    }
  },
  mounted() {
    this.backgroundColor = this.color;
    if(!this.color) {
        this.backgroundColor = this.getRandomColor();
    }
  },
});
</script>

<style scoped lang="scss">
    .placeholder-image {
        max-width: 600px;

        .wrapper {
            height: 350px;
            width: 1000px;
            max-width: 100%;
            max-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .placeholder-text {
                font-size: 3em;
                text-align: center;
                color: #fff;
            }
        }
    }
</style>
