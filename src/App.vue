
<!-- template для написання розмітки - це шаблон, структура компоненту -->
<!--@ - більш короткий запис v-on:-->
   <!--: - більш короткий запис v-bind:-->
   <!--{{ }} - спеціальний синтаксис "інтерполяція" (аналог ${})-->
<template>
   <div class="app">
      <h1>Сторінка з постами</h1>
      <my-input v-model="searchQuery" placeholder="Пошук..." />
      <div class="app__btns">
         <my-button @click="showDialog">Створити пост</my-button>
         <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
      <my-dialog v-model:show="dialogVisible">
         <post-form @create="createPost" />
      </my-dialog>
      <!-- <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" /> -->
      <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <div v-else>Йде завантаження...</div>
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
         isPostsLoading: false,
         selectedSort: '',
         searchQuery: '',
         sortOptions: [
            { value: 'title', name: 'по назві' },
            { value: 'body', name: 'по опису' },
         ]
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
            this.isPostsLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.posts = response.data;
         } catch (e) {
            console.log("Помилка");
         } finally {
            this.isPostsLoading = false;
         }
      },
   },
   //хук mounted буде виконуватися після того як компонент був "змонтований" (див. життевий цикл компоненту)
   //в данному випадку він викликає запит на сервер за постами
   mounted() {
      this.fetchPosts();
   },
   //використовуємо computed: sortedPosts() як звичайну змінну - вставляючи її в компонент
   //computed - майже аналог useMemo в React
   computed: {
      sortedPosts() {
         //розгортаємо в новий масив для уникнення мутації вихідного масиву
         //нижче watch через localeCompare мутує вихідний масив
         return [...this.posts].sort((post1, post2) => {
            return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
         })
      },
      //відсортований та фільтрований за пошуком масив заголовків постів
      sortedAndSearchedPosts() {
         return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
   },
   //функція наглядач яка знаходитсья у watch має мати таку ж назву як й 
   //модель за якою "наблюдаємо" - параметром вона приймає нове значення моделі
   //watch - аналог useEffect в React
   // watch: {
   // selectedSort(newValue) {
   //    this.posts.sort((post1, post2) => {
   //       return post1[newValue]?.localeCompare(post2[newValue])
   //    })
   // }
   //,deep: true - глубоке відстеження, коли потрібно реагувати на бідь-яку зміну в моделі.
   //наприклад якщо модель - об'єкт.
   // }
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

.app__btns {
   margin: 15px 0;
   display: flex;
   justify-content: space-between;
}
</style>