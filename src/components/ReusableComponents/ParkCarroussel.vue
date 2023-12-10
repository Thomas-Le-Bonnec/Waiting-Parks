<template>
    <section>
        <h2>France</h2>

        <div class="carroussel">
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
            <ParkCard></ParkCard>
        </div>
    </section>
</template>





<script>
import ParkCard from './ParkCard.vue'


export default {
    name: 'App',
    
    components: {
        ParkCard
    },
}
</script>





<style>
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