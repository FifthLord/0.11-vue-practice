
<template>
   <div>
      <h1>Сторінка з постами</h1>
      <my-input v-model="searchQuery" placeholder="Пошук..." />
      <div class="app__btns">
         <my-button>Створити пост</my-button>
         <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
      <my-dialog v-model:show="dialogVisible">
         <post-form />
      </my-dialog>
      <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
      <div v-else>Йде завантаження...</div>
   </div>
</template>
   
<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
   components: {
      PostForm, PostList
   },

   data() {
      return {
         dialogVisible: false,
         sortOptions: [
            { value: 'title', name: 'по назві' },
            { value: 'body', name: 'по опису' },
         ]
      }
   },
   setup(props) {
      const { posts, totalPages, isPostsLoading } = usePosts(10);
      const { sortedPosts, selectedSort } = useSortedPosts(posts);
      const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);

      return {
         posts,
         totalPages,
         isPostsLoading,
         selectedSort,
         searchQuery,
         sortedAndSearchedPosts
      }
   }
}
</script>
   
<style>
.app__btns {
   margin: 15px 0;
   display: flex;
   justify-content: space-between;
}

.p-count__wrapper {
   display: flex;
   margin-top: 15px;
   justify-content: center;
}

.p-count {
   border: 1px solid black;
   padding: 10px;
   margin: 2px;
   cursor: pointer;
}

.current-p-count {
   border: 2px solid teal;
}

.observer {
   height: 2px;
   background: teal;
}
</style>