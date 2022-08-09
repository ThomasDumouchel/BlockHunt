<template>
    <div>
        <v-card :v-for="nfts in nftsList"></v-card>
    </div>
</template>

<script>
export default {
    props: [ "nftsList" ]
};
</script>

<style>

</style>