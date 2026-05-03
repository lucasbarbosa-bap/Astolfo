<script setup>
defineProps(['urlFemboy'])

const emit = defineEmits(['fechar'])
</script>

<template>
    <figure>
        <button @click="() => {emit('fechar')}">X</button>
        <img :src="urlFemboy" alt="">
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
        background-color: rgba(152, 38, 76, 0.863);
    }

    figure img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>