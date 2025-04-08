<template>
    <main class=" bg-gray-100  py-10 px-5 text-center">
        <p class="text-xl">
            Current Unique Visitors: <strong>{{ count }}</strong>
        </p>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'

//  Configuração Firebase — copia da consola Firebase > Configuração web
const firebaseConfig = {
    apiKey: "AIzaSyD-s0le6jc2qgJlgKpvxzn0zmXE_WX3kco",
    authDomain: "person-counter-e045a.firebaseapp.com",
    projectId: "person-counter-e045a",
    storageBucket: "person-counter-e045a.firebasestorage.app",
    messagingSenderId: "919072376722",
    appId: "1:919072376722:web:d6182f82dcd616bb92e34b",
    measurementId: "G-Z9Y0JBN9ZL"
}

// Inicializar Firebase e Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//  Lógica do contador
const count = ref(null)

const updateVisitorCount = async () => {
    const hasVisited = localStorage.getItem('hasVisited')
    const docRef = doc(db, 'visitors', 'counter')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        count.value = docSnap.data().count

        if (!hasVisited) {
            const newCount = count.value + 1
            await updateDoc(docRef, { count: newCount })
            localStorage.setItem('hasVisited', 'true')
            count.value = newCount
        }
    } else {
        console.error("Documento 'counter' não encontrado.")
    }
}

onMounted(() => {
    updateVisitorCount()
})
</script>

<style>
body {
    font-family: sans-serif;
    background-color: #f9fafb;
    color: #111827;
}
</style>