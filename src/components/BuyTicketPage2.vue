<template>
    <SubviewBanner :image="require('@/assets/' + 'ticket-image.jpg' + '')" title="Buy a Ticket"></SubviewBanner>
    <CartView :cartItems="cart" @delete-cart-item="deleteCartItem"></CartView>
    <BuyTicketView @new-cart-item="newCartItem"></BuyTicketView>
</template>





<script>
import BuyTicketView from './BuyTicket/BuyTicketView.vue';
import CartView from './BuyTicket/CartView.vue';
import SubviewBanner from './ReusableComponents/SubviewBanner.vue';

export default {
    components: {
        BuyTicketView, CartView, SubviewBanner
    },

    data() {
        return {
            cart: []
        }
    },

    methods: {
        newCartItem(cartItem) {
            this.cart.push(cartItem);
        },

        deleteCartItem(index) {
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        }
    }
}
</script>




<style>
</style>