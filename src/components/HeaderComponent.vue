<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="Blog Pessoal" />
        </div>
        <nav>
            <router-link to="/">Página Inicial</router-link>
            <router-link to="/sobre">Sobre</router-link>
            <router-link to="/contato">Contato</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
};
</script>

<style scoped>
.logo {
    max-width: 75rem;
    margin: 0 auto;
    padding: 2rem;
}

.logo > img {
    display: block;
    margin: 0 auto;
}

nav {
    background: #000;
    color: #fff;
    text-align: center;
}

nav {
    display: flex;
    justify-content: center;
}

nav > a {
    color: #fff;
    text-decoration: none;
    line-height: 4rem;
    padding: 0 2rem;
    font-weight: bold;
}

nav > a:hover {
    background: #333;
}
</style>
