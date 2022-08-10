<template>
    <div class="carousel">
        <v-card  v-for="nft in nfts" :key="nft.index" @click="selectNFT(nft)" :class="{ selected: nft.active, nftCard: true }">
            <NFTCard :img="nft.imgLink" :name="nft.name" :description="nft.description" :autor="nft.autor" :index="nft.index"/>
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
            selectedNFT: undefined,
        }
    },
    methods: {
        selectNFT(nft){
            this.nfts.forEach(nft => {
                nft.active = false;
            });
            
            this.selectedNFT = nft;
            nft.active = true;
            console.log(nft);
            
        }
    }   
}
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
.selected {
    margin-top: -15px;
}
</style>