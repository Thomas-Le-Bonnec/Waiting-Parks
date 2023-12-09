<template>
    <header>
        <div class="link">
            <h5>Waiting Parks</h5>
        </div>
        <div class="link">
            <h5>My Favorite Parks</h5>
        </div>
    </header>
</template>





<script>

</script>





<style scoped>

header {
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    padding: 0.5rem 1.5rem;
    align-items: flex-start;
    gap: 16px;
    width: 100%;

    background: var(--background-10);
    backdrop-filter: blur(10px);
}


.link {
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 4px;
}

</style>