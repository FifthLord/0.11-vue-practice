
<!-- template для написання розмітки - це шаблон, структура компоненту -->
<!--@ - більш короткий запис v-on:-->
   <!--: - більш короткий запис v-bind:-->
   <!--{{ }} - спеціальний синтаксис "інтерполяція" (аналог ${})-->
<template>
   <div class="app">
      <h1>Сторінка з постами</h1>
      <my-button @click="showDialog" style="margin: 15px 0;">Створити пост</my-button>
      <my-dialog v-model:show="dialogVisible">
         <post-form @create="createPost" />
      </my-dialog>
      <post-list :posts="posts" @remove="removePost" />
   </div>
</template>

<!-- script для написпання скриптів, функцій, коду компоненту -->
<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';
// за зомовчуванням ми повинні єкспортувати об'єкт, всі інше це лише цукор
export default {
   components: {
      PostForm, PostList
   },
   //об'єкти з даними - моделі
   data() {
      return {
         posts: [],
         dialogVisible: false,
      }
   },
   //методи для роботи з даними
   methods: {
      createPost(post) {
         this.posts.push(post);
         this.dialogVisible = false;
      },
      removePost(post) {
         this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
         this.dialogVisible = true;
      },
      //робимо запит на сервер, отримуємо об'єкт з полем data - додаємо це це в posts.
      async fetchPosts() {
         // response - традиційно результат запиту на сервер.
         try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.posts = response.data;
         } catch (e) {
            console.log("Помилка");
         }
      },
      //хук mounted буде виконуватися після того як компонент був "змонтований" (див. життевий цикл компоненту)
      //в данному випадку він викликає запит на сервер за постами
      mounted() {
         this.fetchPosts();
      },
   },
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