<template>
    <div class="carousel">
        <div v-for="nft in nfts" :key="nft.index" @click="selectNFT(nft)" :class="{ nftCard: true, selected: nft.active }">
            <NFTCard :img="nft.img" :name="nft.name" :description="nft.description" :autor="nft.autor" :index="nft.index"/>
        </div>
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
    padding: 25px 10px;
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