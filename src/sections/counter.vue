<template>
    <main class="text-center py-10 px-5 bg-gray-100">
        <p class="text-xl">
            Current Unique Visitors: <strong>{{ count }}</strong>
        </p>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASEapiKey,
    authDomain: import.meta.env.VITE_FIREBASEauthDomain,
    projectId: import.meta.env.VITE_FIREBASEprojectId,
    storageBucket: import.meta.env.VITE_FIREBASEstorageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASEmessagingSenderId,
    appId: import.meta.env.VITE_FIREBASEappId,
    measurementId: import.meta.env.VITE_FIREBASEmeasurementId,
}



const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


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
