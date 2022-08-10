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

async function createNewCache() {

    altura.mintAdditionalSupply(
        '0x73ed40f253d10764b9bf8c4e8f2dc3312a940fdd',
        1,
        1,
        '0x1DF3087438Cc496D62329fEBF899c71a515BCde5')
    .then((res) => {
        console.log(res)
    })

}

export {getNFTData, getMapsData, createNewCache};