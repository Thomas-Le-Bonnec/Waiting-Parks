<template>
    <div class="amusement-park-ticket">
        <div class="ticket-image">
            <img :src="require('@/assets/' + selectedTicket.image + '')" :alt="selectedTicket.title" />
        </div>
        <div class="ticket-details">
            <h2>{{ ticket.title }}</h2>
            <p>{{ ticket.description }}</p>
            <h4>Ticket Options</h4>
            <p>{{ selectedTicket.description }}</p>
            <label>Select Ticket Price:</label>
            <div class="price-options">
                <label v-for="option in ticketOptions" :key="option.price" class="price-option">
                    <input type="radio" :value="option.price" v-model="selectedPrice" @change="updateImage" />{{ option.name
                    }}
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
            ticketOptions: [],
            selectedPrice: 0,
        };
    },
    created() {
        this.initializeTicketOptions();
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

        initializeTicketOptions() {
            this.ticketOptions = [
                { price: this.ticket.base_price, image: `ticket_${this.ticket.name}_regular.png`, title: 'Regular Ticket', description: `Regular Ticket to ${this.ticket.title}.`, name: 'regular' },
                { price: this.ticket.base_price + 10, image: `ticket_${this.ticket.name}_vip.png`, title: 'VIP Ticket', description: `VIP  Ticket to ${this.ticket.title}.`, name: 'vip' },
                { price: this.ticket.base_price + 20, image: `ticket_${this.ticket.name}_fast_pass.png`, title: 'Fast Pass Ticket', description: `Fast Pass Ticket to  Ticket to ${this.ticket.title}.`, name: 'fast-pass' },
            ];

            // Set the initial selected price
            this.selectedPrice = this.ticket.base_price;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
@import '../../styles/responsive.scss';


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

h4 {
    margin-top: 20px;
    color: #666;
    text-align: left;
}
</style>
