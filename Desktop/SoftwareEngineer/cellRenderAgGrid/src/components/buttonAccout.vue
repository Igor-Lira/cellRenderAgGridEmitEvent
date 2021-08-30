<template>
  <button @click="handleClick">click me</button>
</template>

<script>
import {pushUpdateComponentCount} from '../store/myStorage'; 

export default {
  setup(){
   function handleClick (){
    console.log (`I'm the children and I'm calling it, I hope I call my parent :(`)
    pushUpdateComponentCount();
   }
   return {
     handleClick
   } 
  }

}
</script>

<style>

</style>