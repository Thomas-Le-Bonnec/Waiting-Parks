<template>
    <div id="banner">
        <img :src="image">
        <h1>{{ title }}</h1>
    </div>
</template>





<script>
export default {
    props: {
        image: String,
        title: String
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