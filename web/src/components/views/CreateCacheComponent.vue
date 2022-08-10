<template v-if="nftsList">
    <div class="view">
        <BlockHuntHeader text="Create your own cache hunt"/>
        <div class="pageFormat text-center">
            <div class="content">
                <div>Participate in the growth of blockhunt by adding your own cache and making other crypto-cachers look for it</div>
                <div>It's very simple:</div>
            </div>
            <div class="createCacheSteps">
                <div>
                    <p class="stepTitle">First, give your cache a name:</p>
                    <v-text-field :v-model="name" label="cache name"></v-text-field>
                </div>
                <div>
                    <p class="stepTitle">Second, describe your cache hunt:</p>
                    <v-textarea :v-model="description" label="cache description" rows="3"></v-textarea>
                </div>
                <div>
                    <p class="stepTitle">Finally, pick an NTF to put in the cache:</p>
                    <NFTsCarousel :nfts="nftsList" @selectedNFT="changeSelectedNFT"/>
                </div>
            </div>
            <div class="align-right hacky_fix">
                <v-btn @click="createCache">Create cache</v-btn>
            </div>
            
        </div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from '.././BottomNavComponent.vue'
import BlockHuntHeader from ".././BlockHuntHeader.vue"
import NFTsCarousel from ".././NFTsCarousel.vue"

import { getNFTData, createNewCache } from '@/utils/altura';

export default {
    components: {
        BottomNavComponent,
        BlockHuntHeader,
        NFTsCarousel,
    },
    async created() {
        const res = await getNFTData('0x6c8553317be866f283a3a0de25f9b63cfa76bf66');
        console.log(res);
        this.nftsList = res;
    },
    data() {
        return {
            nftsList: null,
            name: "",
            description: "",
            selectedNFT: undefined
        }
    },
    methods: {
        changeSelectedNFT(e){
            this.selectedNFT = e.nft;
        },
        createCache() {
            createNewCache();
            // navigator.geolocation.getCurrentPosition( () => {
                
            //     // createNewCache({ name: this.name, description: this.description, nft: this.selectedNFT ,lat: pos.coords.latitude, long: pos.coords.longitude })
            // })
        }
    }

}
</script>

<style scoped>
.content > div {
    margin: 10px 0px;
}
.content {
    padding-bottom: 10px;
}
.createCacheSteps > div {
    margin: 10px 0px;
}
.stepTitle {
    font-size: 16px;
}
.stepDescription {
    font-size: 12px;
    padding: 6px;
}
.align-right{
    display: flex;
    justify-content: right;
}
.text-center{
    text-align: center;
}
.hacky_fix{
    padding-bottom: 50px;
}
</style>
