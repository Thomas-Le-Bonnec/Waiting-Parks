<template>
    <BannerView title="Favorites"></BannerView>
    <div v-if="countries?.length == 0">
        <section>
            <h2>You have no favorites yet</h2>
            <!-- add empty view to make page at least full -->
            <div class="empty"></div>
        </section>
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
                let parks = country.parks.filter(park => this.favorites.includes(park.name));
                if (parks.length > 0) {
                    return {
                        name: country.name,
                        parks: parks
                    }
                } else {
                    return null;
                }
            }).filter(country => {
                return country != null;
            });
        }
    },

    mounted() {
        console.log(this.parksByCountries);
        console.log("favorites", this.countries);
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

section .empty {
    width: 12.5rem;
    height: 12.5rem;
}
</style>