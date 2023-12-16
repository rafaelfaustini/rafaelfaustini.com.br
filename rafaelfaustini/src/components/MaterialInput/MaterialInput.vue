<template>
    <div class="md-input">
        <input @input="updateValue" data-cy="projects-search" ref="projectsSearch" required/>
        <label data-cy="projects-search-placeholder"  @click="focusSearch()">{{placeholder}}</label>
    </div>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'MaterialInput',
    props: {
        placeholder: String
    },
    computed: {

    },
    methods: {
        updateValue(event:any) {
            this.$emit('input', event.target.value)
        },
        focusSearch() {
            const searchBar : any = this.$refs.projectsSearch;
            searchBar.focus();
            
        }
    },
    components: {
        
    }
  });
  </script>
  
  <style scoped lang="scss">
.md-input{
    position: relative;
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    label {
        font-weight: 300;
        position: absolute;
        display: block;
        top: 10px;
        font-size: 1.20rem;
        transition: .3s ease-in-out;
        max-width: 100%;
        text-overflow: ellipsis;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
    }
    input{
        display: block;
        width: 100%;
        font-size: 1rem;
        height: calc(2rem + 2px);
        border: 0;
        -webkit-appearance:none;
        appearance: none;
        box-shadow: none;
        outline: none;
        color: black;
        border-bottom: rgba(0,0,0, 0.15) solid 2px;
        caret-color: $primary-color;
        transition: all ease-in 0.25s;
        &:focus {
            border-bottom: $primary-color solid 2px;
        }
        &:valid + label,
        &:focus + label {
            top: -12px;
            pointer-events: none;
            font-size: 0.85rem
        }
        &:focus + label{
            color: $primary-color;
        }
   }
}

  </style>
  