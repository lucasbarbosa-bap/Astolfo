<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const tagAtual = ref("")
const listaSugestoes = ref([])

function fazerPesquisa() {
    console.log("Pesquisando por:", tagAtual.value);

    router.push({ path:'/post', query: {tag: tagAtual.value}})

    tagAtual.value = ""
}

async function buscarSugestoes() {
    if(tagAtual.value.length > 2) {
        const apiSugestoes = await fetch(`/api/safebooru?page=dapi&s=tag&q=index&json=1&limit=5&name_pattern=${tagAtual.value}%`)
        const sugestoesXml = await apiSugestoes.text()

        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(sugestoesXml, "text/xml")

        const tagsRetornadas = xmlDoc.getElementsByTagName("tag")

        listaSugestoes.value = Array.from(tagsRetornadas).map(tag => tag.getAttribute("name"))

        console.log("Procurando a merda da sugestão...")
    } else {
        listaSugestoes.value = []
    }
    
}

function selecionarSugestao(femboySugerido) {
    tagAtual.value = femboySugerido

    listaSugestoes.value = []
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
            <input type="text" v-model="tagAtual" @input="buscarSugestoes" placeholder="Digite a Tag (Ex: illyasviel_von_einzbern )">
            <div v-if="listaSugestoes.length > 0" class="dropdownPesquisas">
                <p v-for="sugestao in listaSugestoes" @click="selecionarSugestao(sugestao)">{{ sugestao }}</p>
            </div>
            <button type="button" @click="fazerPesquisa">Search</button>
        </search>
            
    </header>
</template>