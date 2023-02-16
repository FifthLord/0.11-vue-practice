<template lang="">
   <form class="post-form" @submit.prevent>
         <h4>Створення посту</h4>
<!--"v-model=" -короткий запис "v-bind:value="+"@input="* = $event.target.value""-->
<!--"v-model:value=" де "value" - це назва нашого пропсу, якщо просто "v-model="", то по замовчуваню буде "modelValue"-->
         <my-input v-model="post.title" type="text" placeholder="Назва" />
         <my-input v-model="post.body" type="text" placeholder="Опис" />
         <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Створити</my-button>
      </form>
</template>
<script>

export default {
   data() {
      return {
         post: {
            title: '',
            body: '',
         },
      }
   },
   methods: {
      createPost() {
         // створення унікального ІД
         this.post.id = Date.now();
         // функція $emit - створення події на яку "підпишеться" батьківський компонент через v-model(аналог event) 
         // перший параметр - це завжди назва "події", 
         // натупні - це аргументи функції які будуть передані батьківському компоненту
         this.$emit('create', this.post);
         this.post = {
            // обнулення полів вводу
            title: '',
            body: '',
         };
      },
   },
}
</script>
<style scoped>
.post-form {
   display: flex;
   flex-direction: column;
}
</style>