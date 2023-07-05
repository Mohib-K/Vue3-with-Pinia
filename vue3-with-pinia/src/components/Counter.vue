<template>
    <div class="wrapper">
    <h1>Counter App</h1>
     <label for="state"> counter state</label><h1 id="state">{{storeCounter.count}}</h1>
     <label for="getter"> getter</label><h1 id="getter">{{storeCounter.doubleCount}}</h1>
     <div>
     <button type="button" @click="storeCounter.increment()">+</button>
     <button type="button" @click="storeCounter.decrement()">-</button>
     </div>
    </div>
</template>

<script setup lang="ts">

import {useCounterStore} from '@/stores/counter';

const storeCounter:any = useCounterStore();

</script>