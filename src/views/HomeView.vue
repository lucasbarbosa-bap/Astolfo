<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import ImageModal from '@/components/ImageModal.vue';
import { ref } from 'vue';


const mostrar = ref(false)

function mostrarIbuki() {
  mostrar.value = !mostrar.value

  console.log(mostrar.value)
}
</script>

<template>
  <main>
    <h2>Home teste</h2>
    <button @click="mostrarIbuki"> IBUKI MIODA</button>
    <ImageModal v-if="mostrar === true" @fechar="mostrar = false" />
  </main>
</template>
