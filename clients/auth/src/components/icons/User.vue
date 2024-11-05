<script setup>

</script>
<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1" 
    id="Capa_1" 
    x="0px" 
    y="0px" 
    viewBox="0 0 512 512" 
    style="enable-background:new 0 0 512 512;" 
    xml:space="preserve"  
    :class="className"
    :width="width"
    :height="height" 
    >
    <g>
      <circle :fill="color" cx="256" cy="128" r="128"/>
      <path :fill="color" d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default:''
    },
    width: {
      type: String,
      default: '512',//default width
    },
    height: {
      type: String,
      default: '512',//default height
    },
    color: {
      type: String,
      default: 'black' // default color
    }
  }
}
</script>