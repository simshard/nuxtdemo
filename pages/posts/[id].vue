<template>
    <div class="container mx-auto w-1/2 py-8">
      <Title>{{ $route.params.id }} | {{ title }}</Title>
      <h3 class="text-3xl font-bold">
        <NuxtLink :to="`/posts/1`">Title of Post</NuxtLink>
      </h3>
      <div class="post-meta text-gray-700 flex items-center space-x-2">
        <div>Feb 2, 2022</div>
        <div>&middot;</div>
        <div>Andre Madarang</div>
      </div>
      <div class="post-content mt-4">
        <span class="text-emerald-500 font-black ">{{ $route.params.id }}</span> Esse aute pariatur magna veniam do ex labore est. Elit aute in adipisicing dolore cillum aute voluptate nostrud ex cupidatat nulla est. Sunt magna ut esse fugiat duis sunt incididunt eiusmod exercitation tempor magna labore.
      </div>
    </div>
  </template>
  
  <script setup>
  const title = useState('title')
  </script>