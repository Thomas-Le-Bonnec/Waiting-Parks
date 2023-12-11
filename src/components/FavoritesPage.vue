<template>
    <BannerView></BannerView>
    <div v-if="countries?.length === 0">
        <h2>You have no favorites yet</h2>
    </div>
    <div v-else v-for="country in countries" :key="country.name">
        <div v-if="country.parks.length > 0">
            <section>
                <h2>{{ country.name }}</h2>

                <div class="carroussel">
                    <ParkCard v-for="park in country.parks" :key="park.name" :park="park"></ParkCard>
                </div>
            </section>
        </div>
    </div>
</template>





<script>
import { Country } from '@/data/parks';
import BannerView from './ReusableComponents/BannerView.vue'
import ParkCard from './ReusableComponents/ParkCard.vue'


export default {
    components: {
        BannerView,
        ParkCard
    },

    props: {
        parksByCountries: [Country]
    },

    computed: {
        favorites() {
            return JSON.parse(localStorage.getItem('favorites')) || [];
        },
        countries() {
            return this.parksByCountries.map(country => {
                console.log("parks", country.parks.filter(park => this.favorites.includes(park.name)));
                for (let i = 0; i < country.parks.length; i++) {
                    console.log(country.parks[i].name);
                    console.log(this.favorites.includes(country.parks[i].name));
                }
                return {
                    name: country.name,
                    parks: country.parks.filter(park => this.favorites.includes(park.name))
                }
            });
        }
    },

    mounted() {
        console.log(this.parksByCountries);
        console.log("favorites", this.favorites);
    }
}

</script>





<style scoped>
section {
    display: flex;
    flex-direction: column;
    margin-inline: 2.5rem;
    margin-top: 3rem;
    gap: 1.5rem;
}

section h2 {
    margin-right: auto;
}

section .carroussel {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
    grid-gap: 2rem;
}
</style>