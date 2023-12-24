<template>
    <HeaderComponent />
    <div class="pageContent">
        <RouterView />
    </div>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: { HeaderComponent, FooterComponent },
};
</script>

<style scoped>
.pageContent {
    max-width: 75rem;
    margin: 3rem auto;
}
</style>
