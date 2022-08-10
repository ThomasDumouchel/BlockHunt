<template>
    <div class="view">
        <BlockHuntHeader text="Cache found"/>
        <div class="pageFormat">
            <h3>Cache Content</h3>
            <NFTsCarousel :nfts="nftsList"/>
            <h3>Your account</h3>
            <NFTsCarousel :nfts="nftsList"/>
        </div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from '@/components/BottomNavComponent.vue'
import NFTsCarousel from '@/components/NFTsCarousel.vue'
import BlockHuntHeader from '@/components/BlockHuntHeader.vue'



export default {
    name:"CacheComponent",
    components: {
        BottomNavComponent,
        NFTsCarousel,
        BlockHuntHeader,
    },
    data() {
        return{
            nftsList: [
                {
                    imgLink: "https://www.smashbros.com/en_US/fighter/03.html",
                    name: "NFT name 1",
                    description: "NFT 1 description",
                    autor: "Me",
                    index: "1"
                },
                {
                    imgLink: "https://www.smashbros.com/en_US/fighter/03.html",
                    name: "NFT name 2",
                    description: "NFT 2 description",
                    autor: "You",
                    index: "2"
                }
            ]
        }
        
    }

}
</script>

<style scoped>

</style>