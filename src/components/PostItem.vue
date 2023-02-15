<template>
   <!-- <div class="post" v-for="post in posts"></div> -->
   <div class="post">
      <div><strong>Назва: </strong>{{ post.title }}</div>
      <div><strong>Опис: </strong>{{ post.body }}</div>
   </div>
</template>

<script>
export default {
   props: {
      post: {
         type: Object,
         required: true,
      }
   }
}
</script>

<style lang="css" scoped>
.post {
   margin-top: 15px;
   padding: 15px;
   border: 2px solid teal;
}
</style>