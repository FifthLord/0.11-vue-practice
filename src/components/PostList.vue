<template lang="">
   <div>
      <h3>Список користувачів</h3>
      <!--: - більш короткий запис v-bind:-->
      <!--передали сюди список постів як пропс, а далі вже пропс - це окремий пост-->
      <post-item v-for="post in posts" :post="post"/>
   </div>
</template>
<script>
import PostItem from '@/components/PostItem.vue';
export default {
   components: { PostItem },
   props: {
      posts: {
         type: Array,
         required: true,
      }
   }
}
</script>

<style scoped>

</style>