<template>
    <div class="total-container">
        <h2 v-if="total > 0">Cart: ${{ total.toFixed(2) }}</h2>
        <h2 v-else>Empty Cart</h2>
        <button class="reset-button" @click="resetCart">
            <!-- Use an icon for the reset button -->
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        resetCart() {
            // Emit an event to notify the parent about the ticket purchase
            this.$emit('reset-cart');
        },
    },
};
</script>

<style scoped>
@import '../../styles/main.css';
@import '../../styles/responsive.css';

.total-container {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.reset-button {
    background-color: #f44336;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.reset-button:hover {
    background-color: #d32f2f;
}
</style>
