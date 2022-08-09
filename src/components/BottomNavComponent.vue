<template>
    <!-- <div class="bottomNav">
        <div class="navElem">
            <h1>Nav1</h1>
        </div>
        <div class="navElem">
            <h1>Nav2</h1>
        </div>
        <div class="navElem">
            <h1>Nav3</h1>
        </div>
        <div class="navElem">
            <h1>Nav4</h1>
        </div>
    </div> -->
    <v-bottom-navigation class="bottomNav" :value="value" color="primary">
        <v-btn>
            <span>Recents</span>

            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
            <span>Favorites</span>

            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
            <span>Nearby</span>

            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style scoped>
.bottomNav {
    width: 100%;

    position: fixed;
    left: 0;
    bottom: 0;
}
</style>