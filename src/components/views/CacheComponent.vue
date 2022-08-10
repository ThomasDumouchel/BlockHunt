<template>
    <div>
        <NFTsCarousel :nfts="nftsList"/>
        <BottomNavComponent/>
    </div>
</template>@/components/BottomNavComponent.vue

<script>
import BottomNavComponent from '@/components/BottomNavComponent.vue'
import NFTsCarousel from '@/components/NFTsCarousel.vue'



export default {
    components: {
        BottomNavComponent,
        NFTsCarousel,
    }

}
</script>

<style>

</style>