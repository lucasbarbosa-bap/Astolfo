<script setup>
import ImageCard from '@/components/ImageCard.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const gavetaFemboys = ref([])

const PaginaAtual = 1

async function BuscarFemboys() {
    console.log("Testando femboys");

    const RespostaApi = await fetch(`https://corsproxy.io/?https://safebooru.org/index.php?page=dapi&s=post&q=index&json=1&limit=6&tags=${route.query.tag}&pid=${PaginaAtual}`);

    const dados = await RespostaApi.json();

    console.log(dados);
    gavetaFemboys.value = dados

    console.log("Femboys Prontos!");
    console.log(gavetaFemboys.value[0]);
}

onMounted(() =>
    BuscarFemboys()
)

</script>

<template>
    <main>
        <h2>Galeria de deliciosidades: </h2>
        
        <div class="Galeria_project_chika">
            <ImageCard v-for="femboy in gavetaFemboys" :key="femboy.id" :urlFemboy="femboy.file_url" />
        </div>
    </main>
</template>