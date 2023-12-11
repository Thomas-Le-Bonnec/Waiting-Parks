<template>
    <section>
        <h3>Leave a Comment</h3>

        <form :onsubmit="addComment">
            <select v-model="selectedParkName">
                <option v-for="park in parksNames" :key="park">{{ park }}</option>
            </select>

            <input type="text" v-model="name" placeholder="Name">
            <input type="text" v-model="comment" placeholder="Comment">

            <button>Leave comment</button>
        </form>
    </section>
</template>





<script>
import { Comment } from "@/data/comment.js"
import { parks, findParkByName } from "@/data/parks.js"

export default {
    data() {
        return{
            parks,
            selectedParkName: "Disneyland Park",
            name: "",
            comment: ""
        }
    },

    methods: {
        addComment(e) {
            e.preventDefault()

            if (this.name != "" && this.email != "") {

                let newComment = new Comment(this.selectedParkName, this.name, this.comment)
                this.$emit('newComment', newComment);
                this.resetInputs();
            }
        },

        resetInputs() {
            this.selectedPark = "Disneyland Park";
            this.name = "";
            this.comment = "";
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
section {
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

form {
    display: flex;
    min-width: 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
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