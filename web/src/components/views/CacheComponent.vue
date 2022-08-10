<template v-if="nftsList">
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

import { getNFTData } from '@/utils/altura';

export default {
    name:"CacheComponent",
    components: {
        BottomNavComponent,
        NFTsCarousel,
        BlockHuntHeader,
    },
    async created() {
        const res = await getNFTData('0x6c8553317be866f283a3a0de25f9b63cfa76bf66');
        this.nftsList = res;
    },
    data() {
        return{
            nftsList: null,

        }
        
    }

}
</script>

<style scoped>

</style>