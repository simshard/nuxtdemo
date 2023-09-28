<template>
    <div>
    <div>this is main page</div>
    <Counter />
    <hr>
    <div>
    x:{{ x }}
    y: {{ y }}
    </div>
    </div>
</template>
<script setup>
 const {x,y} = useMouse()
</script>