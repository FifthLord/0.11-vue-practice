
<!-- template для написання розмітки - це шаблон, структура компоненту -->
<template>
   <!--@ - більш короткий запис v-on:-->
   <!--{{ }} - спеціальний синтаксис "інтерполяція"-->
   <!-- <div><strong>Назва: </strong>Пост про JS</div>
         <div><strong>Опис: </strong>JS - мова програмування</div> -->
   <div>
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
   //об'єкти з даними
   data() {
      return {
         posts: [
            { id: 1, title: 'JS', body: 'опис посту' },
            { id: 2, title: 'JS 2', body: 'опис посту 2' },
            { id: 3, title: 'JS 3', body: 'опис посту 3' },
         ]
      }
   },
   //методи для роботи з даними
   methods: {

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

.post {
   margin-top: 15px;
   padding: 15px;
   border: 2px solid teal;
}
</style>