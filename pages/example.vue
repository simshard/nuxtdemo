<template>
    <div>
    <div><h1>this is example page</h1> </div>
     <hr>
     <Counter />
   
    <div>
    <span>Mouse Coords</span>
    x: {{ x }}
    y: {{ y }}
    </div>


    
  <div>
<span>Users 1 local - client side</span>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
  <div>
<span>Users 2 ServerSide Async</span>
    <ul>
      <li v-for="user in users2" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>

  <div>
<span>Users 3 ServerSide Await useFetch</span>
    <ul>
      <li v-for="user in users3" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>

  <div>
  <span>User One</span>
    {{ user.name }}
  </div>
    </div>
</template>
<script setup>
 const {x,y} = useMouse()
 const users = ref([])
  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => users.value = data)
  })
  const { data: users2 } = await useAsyncData('users2', () => $fetch('https://jsonplaceholder.typicode.com/users'))
  const { data : users3 } = await useFetch('https://jsonplaceholder.typicode.com/users')
  
  const { data : user } = await useFetch('https://jsonplaceholder.typicode.com/users/1' ,{ pick: ['id', 'name'] })

</script>