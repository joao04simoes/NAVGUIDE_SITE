<template>
    <div class="main-container">
        <h1>Bem-vindo ao NAVGUIDE teste de deploy3</h1>
        <p>Este é o ecrã principal da aplicação.</p>

        <button @click="$router.push('/Blog')">Ir para o Blog</button>
    </div>
</template>

<style scoped>
.main-container {
    text-align: center;
    margin-top: 50px;
}

button {
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>