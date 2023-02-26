<template>
   <div class="post">
      <div>
         <div><strong>Номер посту:</strong>{{ post.id }}</div>
         <div><strong>Назва: </strong>{{ post.title }}</div>
         <div><strong>Опис: </strong>{{ post.body }}</div>
      </div>
      <div class="post__btns">
         <my-button @click="$router.push(`/posts/${post.id}`)">Відкрити</my-button>
         <my-button @click="$emit('remove', post)" style="margin-left: 5px;">Видалити</my-button>
      </div>
   </div>
</template>

<script>
//тепер гнопка глобально зареестрована й цей імпорт вже не потрібний
// import MyButton from '@/components/UI/MyButton.vue';
export default {
   // components: { MyButton },
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
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.post__btns {
   display: flex;
}
</style>