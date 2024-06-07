<template>
   <div class="wrapper">
      <Header />
      <slot />
      <Footer />
   </div>
</template>

<script setup></script>

<style>
.wrapper {
   display: grid;
   grid-template-columns: 1fr;
}
</style>
