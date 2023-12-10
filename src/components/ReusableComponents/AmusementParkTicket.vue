<template>
  <div class="amusement-park-ticket">
    <div class="ticket-image">
      <img :src="selectedTicket.image" :alt="selectedTicket.title" />
    </div>
    <div class="ticket-details">
      <h2>{{ ticket.title }}</h2>
      <p>{{ ticket.description }}</p>
      <label>Select Ticket Price:</label>
      <div class="price-options">
        <label v-for="option in ticketOptions" :key="option.price" class="price-option">
          <input
            type="radio"
            :value="option.price"
            v-model="selectedPrice"
            @change="updateImage"
          />{{ option.name }}
        </label>
      </div>
      <p class="ticket-price">Price: ${{ selectedPrice.toFixed(2) }}</p>
      <button @click="buyTicket">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ticketOptions: [
        { price: 29.99, image: 'path/to/amusement-park-image1.jpg', title: 'Regular Ticket', description: 'Regular Ticket to the Amusement Park', name: 'regular' },
        { price: 39.99, image: 'path/to/amusement-park-image2.jpg', title: 'VIP Ticket', description: 'VIP Ticket to the Amusement Park', name: 'vip' },
        { price: 49.99, image: 'path/to/amusement-park-image3.jpg', title: 'Fast Pass Ticket', description: 'Fast Pass Ticket to the Amusement Park', name: 'fast-pass' },
      ],
      selectedPrice: 29.99,
    };
  },
  computed: {
    selectedTicket() {
      return this.ticketOptions.find(option => option.price === this.selectedPrice);
    },
  },
  methods: {
    buyTicket() {
      // Emit an event to notify the parent about the ticket purchase
      this.$emit('ticket-purchased', this.selectedPrice);
    },
    updateImage() {
      // Add any additional logic you may need when the user changes the selected price
    },
  },
};
</script>

<style scoped>
@import '../../../css/main.css';
@import '../../../css/responsive.css';


label {
    display: block;
    margin-bottom: 8px;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
