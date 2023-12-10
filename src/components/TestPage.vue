<template>
    <div>
        <TicketTotal :total="total" @reset-cart="resetCart"/>
        <AmusementParkTicketContainer @ticket-purchased="handleTicketPurchase"/>
      <ReviewForm @review-submitted="handleReviewSubmission" />
      <Reviews :reviews="reviews" />
    </div>
  </template>
  
  <script>
  import AmusementParkTicketContainer from './ReusableComponents/AmusementParkTicketContainer.vue';
    import TicketTotal from './ReusableComponents/TicketTotal.vue';
import ReviewForm from './ReusableComponents/ReviewForm.vue';
  import Reviews from './ReusableComponents/ReviewsList.vue';
  
  export default {
    components: {
    ReviewForm,
    Reviews,
    AmusementParkTicketContainer,
    TicketTotal
},
    data() {
      return {
        reviews: [],
        total: 0,
      };
    },
    methods: {
      handleReviewSubmission(review) {
        // Handle the submitted review and update the reviews array
        this.reviews.push(review);
      },
      handleTicketPurchase(price) {
      // Update the total when a ticket is purchased
      this.total += price;
    },
        resetCart() {
            // Reset the total when the cart is reset
            this.total = 0;
        },
    },
  };
  </script>
  