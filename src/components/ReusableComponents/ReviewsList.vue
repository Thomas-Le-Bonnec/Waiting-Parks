<!-- ReviewsList.vue -->

<template>
    <div class="reviews">
        <h2>Customer Reviews</h2>
        <ul>
            <li v-for="review in reviews" :key="review.id" class="review-item">
                <div class="review-header">
                    <span class="review-rating">Rating: {{ review.rating }}/5</span>
                    <span class="review-author">{{ review.name }}</span>
                </div>
                <p>{{ review.content }}</p>
            </li>
        </ul>
        <div v-if="reviews.length === 0" class="no-reviews">No reviews yet.</div>
    </div>
</template>
  
<script>
export default {
    props: {
        reviews: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
  
<style lang="scss" scoped>
@import '../../styles/main.scss';
@import '../../styles/responsive.scss';
</style>
  