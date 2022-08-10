<template>
    <div>
        <div>
            <gmap-map
            :zoom="14"
            :center="center"
            style="width: 100%; height: 600px"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in locationMarkers"
                :position="m.position"
                @click="center = m.position"
            ></gmap-marker>
        </gmap-map>
        </div>
        
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from './BottomNavComponent.vue'
import { getMapsData } from '@/utils/altura';

export default {
    name: "AddGoogleMap",
    components:{
        BottomNavComponent,
    },
    async created() {
        const res = await getMapsData('0x73ed40f253d10764b9bf8c4e8f2dc3312a940fdd');
        console.log(res);
        // this.pinsList = res;
        this.initMarker({lat: 39, lng: -100});
    },
    data() {
        return {
            center: {
                lat: 39.7837304,
                lng: -100.4458825,
            },
            locationMarkers: [],
            locPlaces: [],
            existingPlace: null,
        };
    },

    mounted() {
        this.locateGeoLocation();
    },

    methods: {
        initMarker(loc) {
            this.existingPlace = loc;
        },
        addLocationMarker() {
            if (this.existingPlace) {
                const marker = {
                    lat: this.existingPlace.geometry.location.lat(),
                    lng: this.existingPlace.geometry.location.lng(),
                };
                this.locationMarkers.push({ position: marker });
                this.locPlaces.push(this.existingPlace);
                this.center = marker;
                this.existingPlace = null;
            }
        },
        locateGeoLocation: function () {
            navigator.geolocation.getCurrentPosition((res) => {
                this.center = {
                    lat: res.coords.latitude,
                    lng: res.coords.longitude,
                };
            });
        },
    },
};
</script>