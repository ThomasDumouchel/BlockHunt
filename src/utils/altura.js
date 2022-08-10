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
        
        for (var i = 0; i < res.count; i++) {
            
            cards.push({
                img: 'test_img',
                name: 'test_name',
                description: 'test_desc',
                autor: 'test_aut',
                index: String(i),
            });       

        }

        return cards
    });

}

export {getNFTData};