<!-- template для написання розмітки - це шаблон, структура компоненту -->
<template>
   <div>
      <div>
         <button v-on:click="addLike">Like</button>
         <!--@ - більш короткий запис v-on:-->
         <button @click="addDislike">Dislike</button>
      </div>
      <!--{{ }} - спеціальний синтаксис "інтерполяція"-->
      <div>кількість лайків - {{ likes }}</div>
      <div>кількість дизлайків - {{ dislikes }}</div>
   </div>
</template>

<!-- script для написпання скриптів, функцій, коду компоненту -->
<script>
// за зомовчуванням ми повинні єкспортувати об'єкт, всі інше це лише цукор
export default {
   //об'єкти з даними
   data() {
      return {
         likes: 0,
         dislikes: 0,
      }
   },
   //методи для роботи з даними
   methods: {
      addLike() {
         //тут напряму звернули до likes, пропустивши data
         this.likes += 1;
      },
      addDislike() {
         this.dislikes += 1;
      },
   }
}
</script>

<style>

</style>