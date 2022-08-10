<template>
    <div>
        <BlockHuntHeader text="Create A Cache"/>
        <div class="pageFormat">
            <div class="content">
                <div>Had fun caching?</div>
                <div>Participate in the growth of blockhunt by adding your own cache and making other crypto-cachers look for it.</div>
                <div>It's very simple:</div>
            </div>
            <div class="createCacheSteps">
                <div>
                    <p class="stepTitle">Print a QR code on a sticker</p>
                </div>
                <div>
                    <p class="stepTitle">Stick it somewhere hard to find</p>
                </div>
                <div>
                    <p class="stepTitle">Scan it</p>
                </div>
                <div>
                    <p class="stepTitle">Give it a name</p>
                    <p class="stepDescription">In most cases, users like to give a name that reveals a clue to where the cache is hidden.</p>
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

export default {
    components: {
        BottomNavComponent,
        BlockHuntHeader,
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
