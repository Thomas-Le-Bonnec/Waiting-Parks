<template>
    <div class="ticket-container">
      <AmusementParkTicket
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @ticket-purchased="handleTicketPurchase"
      />
    </div>
  </template>
  
  <script>
  import AmusementParkTicket from './AmusementParkTicket.vue';
  
  export default {
    components: {
      AmusementParkTicket,
    },
    data() {
      return {
        tickets: [
          { title: 'Disneyland', description: 'Disneyland Ticket' }
        ],
      };
    },
    methods: {
      handleTicketPurchase(price) {
        // Emit the event to the common parent (App.vue)
        this.$emit('ticket-purchased', price);
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../../../css/main.css';
@import '../../../css/responsive.css';
  </style>
  