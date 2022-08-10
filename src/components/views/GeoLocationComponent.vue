<template>
    <div class="view">
        <BlockHuntHeader text="Get Caching"/>
        <AddGoogleMap/>
    </div>
    
</template>

<script>
import AddGoogleMap from '.././AddGoogleMap.vue'
import BlockHuntHeader from '.././BlockHuntHeader.vue'

export default {
    components:{
        AddGoogleMap,
        BlockHuntHeader,
    },
    data() {
        return {

        }
    }


};
</script>

<style scoped>

</style>