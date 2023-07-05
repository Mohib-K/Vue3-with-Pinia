import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// COMPOSITE API Way of Writing Store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // ref act as state
  const doubleCount = computed(() => count.value * 2) // acts as a getter 
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, doubleCount, increment,decrement }
})

// OPTIONS API Way of Writing Store

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     }
//   },
//   getters:{
//     doubleCount:(state) =>{
//       return state.count * 2;
//     }
//   }
// })

