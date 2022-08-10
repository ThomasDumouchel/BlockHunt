<template>
    <div class="login">
        <h1>Login page</h1>
        <v-btn @click="signInUser()">
            <router-link to = "/geoLocation">Login</router-link>
        </v-btn>
    </div>
</template>

<script>

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
