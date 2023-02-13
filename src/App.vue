
<!-- template для написання розмітки - це шаблон, структура компоненту -->
<template>
   <!--@ - більш короткий запис v-on:-->
   <!--{{ }} - спеціальний синтаксис "інтерполяція"-->
   <!-- <div><strong>Назва: </strong>Пост про JS</div>
         <div><strong>Опис: </strong>JS - мова програмування</div> -->
   <div class="app">
      <form class="post-form" @submit.prevent>
         <h4>Створення посту</h4>
         <input v-bind:value="title" @input="title = $event.target.value" class="post-input" type="text" placeholder="Назва" />
         <input v-bind:value="body" @input="body = $event.target.value" class="post-input" type="text" placeholder="Опис" />
         <button class="post-btn btn" @click="createPost">Створити</button>
      </form>
      <div class="post" v-for="post in posts">
         <div><strong>Назва: </strong>{{ post.title }}</div>
         <div><strong>Опис: </strong>{{ post.body }}</div>
      </div>
   </div>
</template>

<!-- script для написпання скриптів, функцій, коду компоненту -->
<script>
// за зомовчуванням ми повинні єкспортувати об'єкт, всі інше це лише цукор
export default {
   //об'єкти з даними - моделі
   data() {
      return {
         posts: [
            { id: 1, title: 'JS', body: 'опис посту' },
            { id: 2, title: 'JS 2', body: 'опис посту 2' },
            { id: 3, title: 'JS 3', body: 'опис посту 3' },
         ],
         title: '',
         body: '',
      }
   },
   //методи для роботи з даними
   methods: {
      createPost() {
         const newPost = {
            id: Date.now(),
            title: this.title,
            body: this.body,
         }
         this.posts.push(newPost);
         this.title = '';
         this.body = '';
      },
      inputValue(event) {
         this.title = event.target.value;
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

.btn {
   align-self: flex-end;
   margin-top: 15px;
   padding: 10px 15px;
   background: none;
   color: teal;
   border: 1px solid teal;
   cursor: pointer;
}

.post-form {
   display: flex;
   flex-direction: column;
}

.post-input {
   width: 100%;
   border: 1px solid teal;
   padding: 10px 15px;
   margin-top: 15px;
}

.post {
   margin-top: 15px;
   padding: 15px;
   border: 2px solid teal;
}
</style>