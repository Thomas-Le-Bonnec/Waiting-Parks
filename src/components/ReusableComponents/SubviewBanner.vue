<template>
    <div id="banner">
        <img :src="park.image">
        <h1>{{ park.name }}</h1>
    </div>
</template>





<script>
import { Park } from '@/data/parks';

export default {
    props: {
        park: Park
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