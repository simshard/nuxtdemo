<template>
    <div>
     <nav>
      <ul>
      <li>Custom Nav !!!</li>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/about">aboot</NuxtLink></li>
        <li><NuxtLink to="/contact">contact</NuxtLink></li>
        <li><NuxtLink to="/posts">posts</NuxtLink></li>
      </ul>
     </nav>
     <slot/>

    </div>
  </template>