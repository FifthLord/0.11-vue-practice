<template lang="">
   <form class="post-form" @submit.prevent>
         <h4>Створення посту</h4>
<!--"v-model=" -короткий запис "v-bind:value="+"@input="* = $event.target.value""-->
         <input v-model="post.title" class="post-input" type="text" placeholder="Назва" />
         <input v-bind:value="post.body" @input="post.body = $event.target.value" class="post-input" type="text" placeholder="Опис" />
         <button class="post-btn btn" @click="createPost">Створити</button>
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
         this.post.id = Date.now();
         this.$emit('create', this.post);
         this.post = {
            title: '',
            body: '',
         };
      },
   },
}
</script>
<style scoped>
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
</style>