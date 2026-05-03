<script setup>
import ImageCard from '@/components/ImageCard.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ImageModal from '@/components/ImageModal.vue';


const route = useRoute()

const gavetaFemboys = ref([])

const PaginaAtual = ref(0)

const femboySelecionado = ref('')
const modalAberto = ref(false)

async function BuscarFemboys() {
    console.log("Testando femboys");

    const RespostaApi = await fetch(`/api/safebooru?page=dapi&s=post&q=index&json=1&limit=9&tags=${route.query.tag}&pid=${PaginaAtual.value}`);

    const dados = await RespostaApi.json();

    console.log(dados);
    gavetaFemboys.value = dados

    console.log("Femboys Prontos!");
    console.log(gavetaFemboys.value[0]);
}

function avancarPagina() {
    PaginaAtual.value++;
    BuscarFemboys()
    console.log(PaginaAtual.value);
    
}

function voltarPagina() {
    if(PaginaAtual.value > 0){
        PaginaAtual.value--;
        BuscarFemboys()
        console.log(PaginaAtual.value);
    }
}

function mostrarIbuki(sla) {
    femboySelecionado.value = sla
    modalAberto.value = !modalAberto.value

    console.log("img Clicada", femboySelecionado)
}

watch(() => route.query.tag, () => {PaginaAtual.value=0; BuscarFemboys()})

onMounted(() =>
    BuscarFemboys()
)

</script>

<template>
    <main>
        <h2>Galeria de deliciosidades: </h2>
        
        <div class="Galeria_project_chika">
            <ImageCard v-for="femboy in gavetaFemboys" :key="femboy.id" :urlFemboy="femboy.sample_url" @femboyClicado="mostrarIbuki(femboy.file_url)" />
        </div>

        <div class="botoes">
                <button type="button" @click="voltarPagina" :disabled="PaginaAtual === 0">VOLTAR</button>
                <button type="button" @click="avancarPagina">AVANÇAR</button>
        </div>

        <ImageModal v-if="modalAberto" :urlFemboy="femboySelecionado" @fechar="modalAberto = false" />
    </main>
</template>