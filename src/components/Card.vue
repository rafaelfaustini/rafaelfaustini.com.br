<template>
  <div class="card" :data-cy="id">
      <div class="card-title">
          <h2 data-cy="current-work-title">{{title}}</h2>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: String,
    title: String, 
  },
}
</script>