<template lang="">
      <div class="post" v-for="post in posts">
         <div><strong>Назва: </strong>{{ post.title }}</div>
         <div><strong>Опис: </strong>{{ post.body }}</div>
      </div>
</template>
<script>
export default {
   props: {
      posts: Array,
      required: true,
   }
}
</script>

<style scoped>
.post {
   margin-top: 15px;
   padding: 15px;
   border: 2px solid teal;
}
</style>