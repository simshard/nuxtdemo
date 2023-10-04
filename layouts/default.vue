<template>
    <div>
    <title>Nuxt Demo App</title>
     <nav>
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/example">Example</NuxtLink></li>
        <li><NuxtLink to="/about">about</NuxtLink></li>
        <li><NuxtLink to="/contact">contact</NuxtLink></li>
        <li><NuxtLink to="/posts">posts</NuxtLink></li>
      </ul>
     </nav>
     <slot/>

    </div>
  </template>
 