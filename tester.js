require('dotenv').config()

const { Altura } = require("@altura/altura-js")

const altura = new Altura(process.env.API_KEY);
console.log(altura)
