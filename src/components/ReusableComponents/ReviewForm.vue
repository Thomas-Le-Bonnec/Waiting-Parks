<!-- ReviewForm.vue -->

<template>
    <form @submit.prevent="submitReview">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="review.name" required />
  
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="review.email" required />
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model="review.rating" required>
        <option value="5">5 stars</option>
        <option value="4">4 stars</option>
        <option value="3">3 stars</option>
        <option value="2">2 stars</option>
        <option value="1">1 star</option>
      </select>
  
      <label for="content">Review:</label>
      <textarea id="content" v-model="review.content" required></textarea>
  
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
  