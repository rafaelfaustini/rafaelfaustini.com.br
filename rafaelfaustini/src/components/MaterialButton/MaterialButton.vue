<template>
   <button 
   class="btn"
   :class="{ 'btn-primary': isPrimary, 'btn-primary-outline': isPrimaryOutline, 
    'btn-secondary': isSecondary, 'btn-secondary-outline': isSecondaryOutline, 
    'btn-lg': isLargeSize }"
    @click="executeButtonAction"
   >{{ text }}</button>
</template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import ButtonSizeEnum from './enum/ButtonSizeEnum';
  import ButtonColorEnum from './enum/ButtonColorEnum';
  
  export default Vue.extend({
    name: 'MaterialButton',
    props: {
        text: String,
        color: String as PropType<ButtonColorEnum>,
        size: String as PropType<ButtonSizeEnum>,
        href: String,
        onClick: Function,
    },
    computed: {
        isPrimary: function() : boolean {
            return this.color == ButtonColorEnum.Primary;
        },
        isPrimaryOutline: function() : boolean {
            return this.color == ButtonColorEnum.PrimaryOutline;
        },
        isSecondary: function() : boolean {
            return this.color == ButtonColorEnum.Secondary;
        },
        isSecondaryOutline: function() : boolean {
            return this.color == ButtonColorEnum.SecondaryOutline;
        },
        isLargeSize: function() : boolean {
            return this.size == ButtonSizeEnum.Large;
        }
    },
    methods: {
        executeButtonAction() {
            if(this.onClick) {
                this.onClick;
            }
            if(this.href) {
                window.open(this.href, '_blank');
            }
        }
    },
    components: {
        
    }
  });
  </script>
  
  <style scoped lang="scss">
  .btn {
    position: relative;
    display: inline-block;
    padding: 0.7em 1rem;
    margin: 1em 0em;
    border: 0;
    background-color: #fff;
    transition: .6s ease-in-out;
    outline: none;
    border-radius: 5px;
    font-weight: 600;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    }
   }

    .btn-primary {
        color: #fff;
        background-color: $secondary-color;
    }

    .btn-primary-outline {
        background-color: transparent;
        color: #222;
        border: 1px solid $secondary-color; 
    }

    .btn-secondary {
        color: #fff;
        background-color: $primary-color;
    }

    .btn-secondary-outline {
        background-color: transparent;
        color: #222;
        border: 1px solid $primary-color; 
    }

    .btn-lg {
        font-size: 21px;
        padding: 1em 1.2rem;
    }

  </style>
  