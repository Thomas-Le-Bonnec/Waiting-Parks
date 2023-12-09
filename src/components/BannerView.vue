<template>
    <div id="banner">
        <img src="../assets/banner-image.jpg">
        <h1>Waiting Times in Parks</h1>
    </div>
</template>





<script>
</script>





<style>
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>