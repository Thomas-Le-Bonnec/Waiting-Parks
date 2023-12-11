<template>
    <section v-if="cartItems.length != 0">
        <h3>Cart</h3>

        <div v-for="cartItem in cartItems" :key="cartItem.id()" class="cartItem">
            <div class="informations">
                <h3>{{ cartItem.parkName }}</h3>
                <p class="description">{{ cartItem.email }}</p>
                <p>{{ cartItem.name }}</p>
            </div>

            <div class="priceAndDelete">
                <div class="price">
                    <h3>{{ cartItem.price }}$</h3>
                    <p>{{ cartItem.option }}</p>
                </div>

                <button @click="deleteCartItem(cartItem.id())"><img src="../../assets/trash.svg"></button>
            </div>
        </div>
    </section>

    <section v-else>
        <h3>Cart</h3>
        <p class="description">Nothing. The desert.</p>
    </section>
</template>





<script>
import { CartItem } from '../../data/cart';

export default {
    props: {
        cartItems: [CartItem]
    },

    methods: {
        deleteCartItem(id) {
            const index = this.cartItems.findIndex(objet => objet.id() === id)
            
            this.$emit("deleteCartItem", index)
        }
    },

    created() {
        console.log(this.cartItems)
    }
}
</script>





<style scoped>
section {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid #E1E1E1;
    background: #FFF;
}

.cartItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.priceAndDelete {
    display: flex;
    align-items: center;
    gap: 24px;
}

.price {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    background-color: #FFF;
}
</style>