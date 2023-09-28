<template>
    <div>
        <div> Counter: {{ count }}</div> 
        <div> Plus one : {{ plusOne }}</div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<script setup>
 const count =ref(0)
 const plusOne = computed(() => count.value +1)
 function increment() {
    count.value++
 }
 function decrement() {
    count.value --
 }
</script>
