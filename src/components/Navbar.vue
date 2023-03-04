<template>
   <div class="navbar">
      <div @click="$router.push('/')" style="cursor: pointer;">Назва сайту</div>
      <div class="navbar__btns">
         <my-button @click="$router.push('/posts')">Пости</my-button>
         <my-button @click="$router.push('/about')" style="margin-left: 5px;">Про сайт</my-button>
         <my-button @click="$router.push('/store')" style="margin-left: 5px;">PostPageVuex</my-button>
         <my-button @click="$router.push('/composition')" style="margin-left: 5px;">PostPageComposition</my-button>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.navbar {
   height: 50px;
   background-color: lightgrey;
   box-shadow: 2px 2px 4px grey;
   display: flex;
   align-items: center;
   padding: 0 15px;
}

.navbar__btns {
   margin-left: auto;
}
</style>