<template>
    <div id="banner">
        <img :src="image">
        <h1>{{ title }}</h1>
        <div v-if="isPark">
            <button id="favoriteButton" class="material-icons-outlined" @click="addToFavorites()"
                style="position: absolute; top: 1.5rem; right: 2rem;">{{ buttonTitle }}</button>
        </div>
    </div>
</template>





<script>
export default {
    props: {
        image: String,
        title: String,
        isPark: Boolean,
    },

    computed: {
        buttonTitle() {
            console.log(localStorage.getItem('favorites'));
            console.log(this.title);
            console.log(localStorage.getItem('favorites').includes(this.title));
            return localStorage.getItem('favorites').includes(this.title) ? 'Remove from favorites' : 'Add to favorites';
        }
    },

    methods: {
        addToFavorites() {
            // add the title to the favorites list in the local storage
            // if the title is already in the list, remove it
            // Get the current favorites list from local storage
            let favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

            // Check if the title is already in the favorites list
            const titleIndex = favoritesList.indexOf(this.title);

            if (titleIndex === -1) {
                // If the title is not in the list, add it
                favoritesList.push(this.title);
            } else {
                // If the title is already in the list, remove it
                favoritesList.splice(titleIndex, 1);
            }

            // Update the favorites list in local storage
            console.log(favoritesList);
            localStorage.setItem('favorites', JSON.stringify(favoritesList));

            // Force re-rendering of the button
            this.$forceUpdate();
        }
    },

    mounted() {
        console.log("mounted");
    }
}
</script>





<style scoped>
#banner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 15.626rem;
    gap: 10px;
}

#banner img {
    flex: 1 0 0;
    align-self: stretch;
    height: 15.626rem;
    object-fit: cover;
}

#banner h1 {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
}
</style>