<template>
   <button class="post-btn btn">
      <slot></slot>
   </button>
</template>

<script>
export default {
   name: 'my-button'
}
</script>

<style lang="css" scoped>
.btn {
   padding: 10px 15px;
   background: none;
   color: teal;
   border: 1px solid teal;
   cursor: pointer;
}
</style>