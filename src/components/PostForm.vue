<template lang="">
   <form class="post-form" @submit.prevent>
         <h4>Створення посту</h4>
<!--"v-model=" -короткий запис "v-bind:value="+"@input="* = $event.target.value""-->
         <input v-model="post.title" class="post-input" type="text" placeholder="Назва" />
         <input v-bind:value="post.body" @input="post.body = $event.target.value" class="post-input" type="text" placeholder="Опис" />
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
         // функція $emit - створення події на яку "підпишеться" батьківський компонент (аналог event) 
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

.post-input {
   width: 100%;
   border: 1px solid teal;
   padding: 10px 15px;
   margin-top: 15px;
}
</style>