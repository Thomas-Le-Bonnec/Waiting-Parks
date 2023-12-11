<template>
    <SubviewBanner :image="require('@/assets/' + 'ticket-image.jpg' + '')" title="Buy a Ticket" :isPark="false">
    </SubviewBanner>
    <CartView :cartItems="cart" @delete-cart-item="deleteCartItem"></CartView>
    <BuyTicketView @new-cart-item="newCartItem"></BuyTicketView>
    <AddCommentView @new-comment="newComment"></AddCommentView>

    <div v-for="comment in comments" :key="comment.id()">
        <CommentCell :comment="comment"></CommentCell>
    </div>
</template>





<script>
import AddCommentView from './BuyTicket/AddCommentView.vue';
import BuyTicketView from './BuyTicket/BuyTicketView.vue';
import CartView from './BuyTicket/CartView.vue';
import CommentCell from './BuyTicket/CommentCell.vue';
import SubviewBanner from './ReusableComponents/SubviewBanner.vue';

export default {
    components: {
        BuyTicketView, CartView, SubviewBanner, AddCommentView,
        CommentCell
    },

    data() {
        return {
            cart: [],
            comments: []
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
        },

        newComment(comment) {
            this.comments.push(comment);
        }
    }
}
</script>




<style></style>