<template>
    <v-card class="header">
        {{ text }}
    </v-card>
</template>

<script>
export default {
    props: [ "text" ]

}
</script>

<style scoped>
.header{
    background-color: #15263F;
    color: white;
    padding: 10px;
    font-size: 24px;
    border-radius: 0px;
    max-height: 50px;
}
</style>