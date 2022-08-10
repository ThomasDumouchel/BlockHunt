<template>
    <div class="view">
        <BlockHuntHeader text="Create your own cache hunt"/>
        <div class="pageFormat">
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
                    <p class="stepTitle">Finally, pick an NTF to put in it:</p>
                    <NFTsCarousel nfts=""/>
                </div>
            </div>
            <div class="align-right">
                <v-btn>Create cache</v-btn>
            </div>
            
        </div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from '.././BottomNavComponent.vue'
import BlockHuntHeader from ".././BlockHuntHeader.vue"
import NFTsCarousel from ".././NFTsCarousel.vue"

export default {
    components: {
        BottomNavComponent,
        BlockHuntHeader,
        NFTsCarousel,
    },
    data() {
        return {
            name: "",
            description: "",
        }
    }

}
</script>

<style scoped>
.content > div {
    margin: 10px 0px;
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

</style>
