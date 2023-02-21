<template lang="">
   <!-- v-if - якщо умова true - відобразиться список постів -->
   <!-- <div v-if="posts.length > 0"> -->
<!-- замінили на v-show для гнучкості, бо при v-if - елемент повістю видаляється з ДОМ дерева-->
   <div v-show="posts.length > 0">
      <h3>Список постів</h3>
      <!--: - більш короткий запис v-bind:-->
      <!--передали сюди список постів як пропс, а далі вже пропс - це окремий пост-->
      <transition-group name="p-list" tag="div">
         <post-item :key="post.id" v-for="post in posts" :post="post" @remove="$emit('remove', post)"/>
      </transition-group>
   </div>
   <!-- v-if - якщо умова false - відобразиться v-else (також може бути v-else-if, але v-else буде останьою)-->
   <!-- <h2 v-else style="color: red"> -->
   <h2 v-show="posts.length === 0" style="color: red">
      Список постів пустий
   </h2>
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
.p-list-item {
   display: inline-block;
   margin-right: 10px;
}

.p-list-enter-active,
.p-list-leave-active {
   transition: all 0.4s ease;
}

.p-list-enter-from,
.p-list-leave-to {
   opacity: 0;
   transform: translateX(130px);
}

.p-list-move {
   transition: transform 0.4s ease;
}
</style>