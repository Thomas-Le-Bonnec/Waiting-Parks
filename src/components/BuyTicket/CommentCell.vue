<template>
    <section>
        <div id="title">
            <p class="important">{{ comment.author }}</p>
            <p class="description">{{ comment.parkName }}</p>
        </div>

        <p>{{ comment.comment }}</p>
    </section>
</template>




<script>
import { Comment } from "@/data/comment.js"


export default {
    props: {
        comment: Comment
    }
}
</script>





<style scoped>
section {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid #CECECE;
}

#title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>