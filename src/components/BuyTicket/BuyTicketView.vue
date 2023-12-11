<template>
    <section id="form">
        <h3>Buy a Ticket</h3>

        <div id="content">
            <img :src="selectedPark.image">

            <form :onsubmit="addToCart">
                <select v-model="selectedParkName">
                    <option v-for="park in parksNames" :key="park">{{ park }}</option>
                </select>

                <div id="picker">
                    <div>
                    <input type="radio" id="regular" value="Regular" v-model="option">
                    <label for="regular">Regular</label>
                    </div>
                    <div>
                    <input type="radio" id="fastpass" value="Fast Pass" v-model="option">
                    <label for="fastpass">Fast Pass</label>
                    </div>
                </div>

                <input type="text" v-model="name" placeholder="Name">
                <input type="text" v-model="email" placeholder="eMail">

                <button>Add to cart</button>
            </form>
        </div>
    </section>
</template>





<script>
import { CartItem } from "@/data/cart"
import { parks, findParkByName } from "../../data/parks.js"


export default {
    data() {
        return {
            parks,
            selectedParkName: "Disneyland Park",
            option: "Regular",
            name: "",
            email: ""
        }
    },

    methods: {
        addToCart(e) {
            e.preventDefault()

            if (this.name != "" && this.email != "") {
                let newCartItem = new CartItem(this.selectedParkName, this.option, this.selectedPark.price, this.name, this.email);
                this.$emit('newCartItem', newCartItem);
                this.resetInputs();
            }
        },

        resetInputs() {
            this.selectedPark = "Disneyland Park";
            this.option = "Regular";
            this.name = "";
            this.email = "";
        }
    },

    computed: {
        parksNames() {
            return (this.parks.map(park => park.name))
        },

        selectedPark() {
            return findParkByName(this.parks, this.selectedParkName)
        }
    }
}
</script>





<style scoped>
#form {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid #E1E1E1;
    background: var(--Blanc, #FFF);
}


#content {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
}

img {
    width: 300px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
}

form {
    display: flex;
    min-width: 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
}

select {
    display: flex;
    min-width: 200px;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid #8e9093;
}

#picker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

input[type="text"] {
    display: flex;
    min-width: 200px;
    padding: 12px;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    border-radius: 4px;
    border: 1px solid var(--Gris-80, #646774);
}

select, input[type="text"] {
    font-family: Avenir Next;
    font-size: 16px;
}
</style>