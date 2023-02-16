
<!-- template для написання розмітки - це шаблон, структура компоненту -->
<template>
   <!--@ - більш короткий запис v-on:-->
   <!--: - більш короткий запис v-bind:-->
   <!--{{ }} - спеціальний синтаксис "інтерполяція" (аналог ${})-->
   <div class="app">
      <post-form @create="createPost" />
      <post-list :posts="posts" @remove="removePost" />
   </div>
</template>

<!-- script для написпання скриптів, функцій, коду компоненту -->
<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
// за зомовчуванням ми повинні єкспортувати об'єкт, всі інше це лише цукор
export default {
   components: {
      PostForm, PostList
   },
   //об'єкти з даними - моделі
   data() {
      return {
         posts: [
            { id: 1, title: 'JS', body: 'опис посту' },
            { id: 2, title: 'JS 2', body: 'опис посту 2' },
            { id: 3, title: 'JS 3', body: 'опис посту 3' },
         ],
      }
   },
   //методи для роботи з даними
   methods: {
      createPost(post) {
         this.posts.push(post);
      },
      removePost(post) {
         this.posts = this.posts.filter(p => p.id !== post.id)
      }
   }
}
</script>

<!-- флаг scoped вказує, що стилі будуть застосована тільти для "цього" компоненту, й не будуть доступні ззовні -->
<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

.app {
   padding: 20px;
}
</style>