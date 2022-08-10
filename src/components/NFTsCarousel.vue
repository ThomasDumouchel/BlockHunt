<template>
    <div>
        <v-card :v-for="nfts in nftsList">
            <NFTCard img="" name="" description="" id="" price="" time="" autor="" avatar=""/>
        </v-card>
    </div>
</template>

<script>
import NFTCard from './NFTCard.vue'

export default {
    props: [ "nftsList" ],
    components:{
        NFTCard,
    },
    data() {
        return {
            items: [
                {
                    imgLink: "",
                    name: "",
                    description: "",
                    price: "",
                    autor: ""

                }
            ]
        }
    }
};
</script>

<style>

</style>