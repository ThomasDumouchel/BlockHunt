<template>
    <div class="carousel">
        <v-card class="nftCard" v-for="nft in nfts" :key="nft.index">
            <NFTCard :img="nft.imgLink" :name="nft.name" :description="nft.description" :autor="nft.autor" :id="nft.index"/>
        </v-card>
    </div>
</template>

<script>
import NFTCard from './NFTCard.vue'

export default {
    props: [ "nfts" ],
    components:{
        NFTCard,
    },
    data() {
        return {
            
        }
    }
};
</script>

<style>
.carousel{
    display: flex;
    margin: 10px;
    overflow-x: auto;
    white-space: nowrap;
}
.nftCard{
    margin: 10px;
}
</style>