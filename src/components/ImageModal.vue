<script setup>
defineProps('')

const emit = defineEmits(['fechar'])
</script>

<template>
    <figure>
        <button @click="() => {emit('fechar')}">X</button>
        <img src="/Ibuki_Mioda_Halfbody_Sprite_29.png" alt="">
    </figure>
</template>

<style scoped>
    button{
        display: flex;
        margin-left: auto;
    }
    figure{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;

        width: 100vh;
        height: 100vh;
        background-color: aqua;
    }

    figure img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>