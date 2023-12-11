<template>
    <BannerView title="Waiting Times in Parks"></BannerView>
    <ParkCarroussel v-for="country in this.parksByCountries" :key="country.name" :country="country"></ParkCarroussel>
</template>





<script>
import { Country } from '@/data/parks';
import BannerView from './ReusableComponents/BannerView.vue'
import ParkCarroussel from './ReusableComponents/ParkCarroussel.vue'


export default {
    components: {
        BannerView, ParkCarroussel
    },

    props: {
        parksByCountries: [Country]
    },

    mounted() {
        console.log(this.parksByCountries);
        console.log("favorites", localStorage.getItem('favorites'));
    }
}

</script>





<style scoped></style>