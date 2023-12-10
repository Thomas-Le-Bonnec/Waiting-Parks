<template>
    <BannerView></BannerView>
    <ParkCarroussel v-for="country in this.parksByCountries" :key="country.name" :country="country"></ParkCarroussel>
</template>





<script>
import BannerView from './ReusableComponents/BannerView.vue'
import ParkCarroussel from './ReusableComponents/ParkCarroussel.vue'


export default {
    components: {
        BannerView, ParkCarroussel
    },

    props: ['parksByCountries'],

    mounted() {
        console.log(this.parksByCountries);
    }
}

</script>





<style scoped></style>