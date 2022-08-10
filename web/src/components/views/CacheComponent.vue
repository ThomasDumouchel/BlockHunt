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
        const res = await getNFTData('0x73ed40f253d10764b9bf8c4e8f2dc3312a940fdd');
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