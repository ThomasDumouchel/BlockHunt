<template>
    <div>
        <div class="pageFormat"></div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from ".././BottomNavComponent.vue"
export default {
    components: {
        BottomNavComponent,
    }

}
</script>

<style>
.pageFormat{
    padding: 20px;
}
</style>