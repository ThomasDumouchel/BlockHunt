<template>
    <div class="login">
        <h1>Login page</h1>
        <v-btn @click="signInUser()">
            <router-link to = "/geoLocation">Login</router-link>
        </v-btn>
    </div>
</template>

<script>
const { Altura } = require("@altura/altura-js")
const altura = new Altura(process.env.VUE_APP_API_KEY);

altura.getCollection('0x73ed40f253d10764b9bf8c4e8f2dc3312a940fdd').then(console.log);

export default {
    name: "LoginPage",
    props: {
        
    },
    data() {
        return {

        }
    },
    methods:{
        signInUser(){
            this.$router.push('')
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
