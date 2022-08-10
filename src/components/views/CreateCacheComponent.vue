<template>
    <div>
        <div class="pageFormat">
            <p>Had fun caching? Participate in the growth of blockhunt by adding your own cache and making other crypto-cachers look for it.</p>
            <p>It's very simple:</p>
            <ul>
                <li>Print a QR code</li>
                <li>Scan it</li>
                <li></li>
            </ul>
            <v-btn>Create cache</v-btn>
        </div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from '.././BottomNavComponent.vue'

export default {
    components: {
        BottomNavComponent,
    }

}
</script>

<style scoped>
.pageFormat{
    padding: 20px;
}
</style>
