
<template>
   <div>
      <h1>Сторінка з постами</h1>
      <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Пошук..." />
      <div class="app__btns">
         <my-button @click="showDialog">Створити пост</my-button>
         <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
      </div>
      <my-dialog v-model:show="dialogVisible">
         <post-form @create="createPost" />
      </my-dialog>
      <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <div v-else>Йде завантаження...</div>
      <div v-intersection="loadMorePosts" class="observer"></div>
   </div>
</template>
   
<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
   components: {
      PostForm, PostList
   },
   data() {
      return {
         dialogVisible: false,
      }
   },

   methods: {
      ...mapMutations({
         setPage: 'post/setPage',
         setSearchQuery: 'post/setSearchQuery',
         setSelectedSort: 'post/setSelectedSort'
      }),
      ...mapActions({
         loadMorePosts: 'post/loadMorePosts',
         fetchPosts: 'post/fetchPosts'
      }),
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
   },
   mounted() {
      this.fetchPosts();
   },
   computed: {
      ...mapState({
         posts: state => state.post.posts,
         isPostsLoading: state => state.post.isPostsLoading,
         selectedSort: state => state.post.selectedSort,
         searchQuery: state => state.post.searchQuery,
         page: state => state.post.page,
         limit: state => state.post.limit,
         totalPages: state => state.post.totalPages,
         sortOptions: state => state.post.sortOptions
      }),
      ...mapGetters({
         sortedPosts: 'post/sortedPosts',
         sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
      })
   },
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