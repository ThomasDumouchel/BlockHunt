<template>
    <v-bottom-navigation class="bottomNav" color="primary">
        <v-btn to="/geoLocation">
            <span>Get Caching</span>
        </v-btn>
        
        <v-btn to="/cache">
            <span>My nfts + cache</span>
        </v-btn>

        <v-btn to="/createCache">
            <span>Create Cache</span>
        </v-btn>

        <v-btn to="/leaderboard">
            <span>Leaderboard</span>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style scoped>
.bottomNav {
    width: 100%;
    height: 60px;

    flex-shrink: 0;
}
</style>