<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const tagAtual = ref("")

function fazerPesquisa() {
    console.log("Pesquisando por:", tagAtual.value);

    router.push({ path:'/post', query: {tag: tagAtual.value}})

    tagAtual.value = ""
}

</script>

<template>
    <header>
        <h1><strong>Astolfo34</strong></h1>

        <figure v-if="route.path === '/'">
            <img src="/astolfo.png" alt="">
            <figcaption>Astolfo 34 : If it's Astolfo there is porn of it. If not, start uploading.</figcaption>
        </figure>

        <nav>
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/post">Post</RouterLink></li>
            </ul>
        </nav>
        
        <search>
            <input type="text" v-model="tagAtual" placeholder="Digite a Tag (Ex: illyasviel_von_einzbern )">
            <button type="button" @click="fazerPesquisa">Search</button>
        </search>
            
    </header>
</template>