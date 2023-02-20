<template><!-- <select v-model="modelValue" @change="changeOption"> -->
   <select :value="modelValue" @change="changeOption">
      <option disabled value="">Оберіть зі списку</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
         {{ option.name }}
      </option>
   </select>
</template>

<script>
export default {
   name: 'my-select',
   props: {
      modelValue: {
         type: String
      },
      options: {
         type: Array,
         //за замовчуванням значення options - пустий масив
         //пустий масив по дефолту реком. записувати так - "() => []"
         default: () => []
      }
   },
   methods: {
      changeOption(event) {
         //ще раз - в this.$emit назва події, й те, що ми "віддаємо" нагору бітьку, 
         //в якому знаходиться слухач v-model або v-bind
         this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>

<style lang="scss" scoped></style>