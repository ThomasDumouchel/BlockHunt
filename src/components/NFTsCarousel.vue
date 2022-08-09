<template>
    <div>
        <v-card :v-for="nfts in nftsList">
            
        </v-card>
    </div>
</template>

<script>
import NFTCard from './NFTCard.vue'

export default {
    props: [ "nftsList" ],
    components:{
        NFTCard,
    }
};
</script>

<style>

</style>