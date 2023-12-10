<!-- ReviewForm.vue -->

<template>
    <form @submit.prevent="submitReview">
        <label>
            <i class="fas fa-user"></i> Name:
            <input type="text" v-model="review.name" required />
        </label>

        <label>
            <i class="fas fa-envelope"></i> Email:
            <input type="email" v-model="review.email" required />
        </label>

        <label>
            <i class="fas fa-star"></i> Rating:
            <ul class="star-rating">
                <li v-for="star in 5" :key="star" @click="setRating(star)">
                    <i :class="starClass(star)"></i>
                </li>
            </ul>
        </label>

        <label>
            <i class="fas fa-comment"></i> Review:
            <textarea v-model="review.content" required></textarea>
        </label>

        <button type="submit">Submit Review</button>
    </form>
</template>
  
<script>
export default {
    data() {
        return {
            review: {
                name: '',
                email: '',
                rating: '5',
                content: '',
            },
        };
    },
    methods: {
        submitReview() {
            // Validation logic can be added here before emitting the event
            this.$emit('review-submitted', this.review);
            this.resetForm();
        },
        resetForm() {
            this.review = {
                name: '',
                email: '',
                rating: '5',
                content: '',
            };
        },
        setRating(rating) {
            // Set the rating when a star is clicked
            this.review.rating = rating;
        },
        starClass(star) {
            return {
                'fas fa-star': star <= this.review.rating,
                'far fa-star': star > this.review.rating,
                'star-active': star <= this.review.rating,
            };
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

input,
select,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}
</style>
  