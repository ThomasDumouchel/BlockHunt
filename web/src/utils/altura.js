/* eslint-disable */
const { Altura } = require("@altura/altura-js")
const altura = new Altura(process.env.VUE_APP_API_KEY);

// get nft data of collection for NFTCard.vue display 
// returns list of NFTCards for NFTCarousel.vue
async function getNFTData(address) {
    // fetching items with the specified collection address only
    return altura.getItems({}, {collectionAddress: address}).then( (res) => {
        console.log(res);

        if (res.count <= 0) { return [] }

        var cards = [];
        for (const [key, value] of Object.entries(res.items)) {
            cards.push({
                img: String(value.image),
                name: String(value.name),
                description: String(value.description),
                autor: String(value.creatorAddress).slice(0,4) + "..." + String(value.creatorAddress).slice(-4),
                index: String(key),
                active: false, // default not selected 
            });       
        }
        // console.log(cards)
        return cards
    });
}

async function getMapsData(address) {
    return altura.getItems({}, {collectionAddress: address}).then( (res) => {
        // console.log(res)
        if (res.count <= 0) { return [] }

        // // {name, lat, long}
        var pins = []; 
        for (const [key, value] of Object.entries(res.items)) {
            if (value.properties.length > 0) {
                pins.push({
                    position: {
                        lat: Number(value.properties[0].value),
                        lng: Number(value.properties[1].value)
                    },
                });
            }
        }
        // console.log(pins)
        return pins
    });
}


export {getNFTData, getMapsData};