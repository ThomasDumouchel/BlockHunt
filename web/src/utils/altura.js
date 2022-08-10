const { Altura } = require("@altura/altura-js")
const altura = new Altura(process.env.VUE_APP_API_KEY);

// get nft data of collection for NFTCard.vue display 
// returns list of NFTCards for NFTCarousel.vue
async function getNFTData(address) {
    // fetching items with the specified collection address only
    return altura.getItems({}, {collectionAddress: address}).then( (res) => {
        // console.log(res);

        if (res.count <= 0) { return [] }

        var cards = [];
        for (const [key, value] of Object.entries(res.items)) {
            cards.push({
                img: String(value.image),
                name: String(value.name),
                description: String(value.description),
                autor: String(value.creatorAddress),
                index: String(key),
                active: false, // default not selected 
            });       
        }
        console.log(cards)
        return cards
    });

}

export {getNFTData};