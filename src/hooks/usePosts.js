import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
   const posts = ref([])
   const totalPages = ref(0)
   const isPostsLoading = ref(true)
   const fetching = async () => {
      try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
               _page: this.page,
            }
         });
         totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
         posts.value = response.data;
      } catch (e) {
         console.log("Помилка");
      } finally {
         isPostsLoading.value = false;
      }
   }

   onMounted(fetching)
   return {
      posts, totalPages, isPostsLoading
   }
}