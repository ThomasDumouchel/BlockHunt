require('dotenv').config();

module.exports = {
    env: {
        API_KEY: process.env.VUE_APP_API_KEY,
        GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    },
}