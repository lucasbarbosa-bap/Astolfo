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
    button {
        position: absolute;
        top: 0px;          
        right: 0px;        
        z-index: 10;
    }

    figure{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 95vh;
        height: 95vh;
        z-index: 999;

        background-color: rgba(152, 38, 76, 0.863);

        border-radius: 10px;
        margin: 0;
    }

    figure img{
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    @media (max-width: 900px){
        figure{
            width: 90vw;
            height: auto;
            padding: 40px 0;
        }
    }
</style>