<template>
    <div class="card">
        <img src="../assets/disneyland-park.jpg">
        <div class="title">
            <h4>Disneyland Park</h4>
        </div>
    </div>
</template>





<script>

</script>





<style scoped>
.card {
    position: relative;
    display: flex;
    height: 18.75rem;
    justify-content: center;
    overflow: hidden;

    border-radius: 8px;
}

.card img {
    flex: 1 0 0;
    align-self: stretch;
    height: 18.75rem;
    object-fit: cover;
}

.card .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    bottom: 0;
    flex: 1 0 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%);
}

.card h4 {
    padding: 16px;
}
</style>