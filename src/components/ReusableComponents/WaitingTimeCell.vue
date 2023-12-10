<template>
    <div id="cell">
        <h3>{{ rideName }}</h3>

        <div id="waiting">
            <h3 :class="waitingTimeColor">{{ waitingTime }}</h3>
            <p class="description">{{ ago }}min ago</p>
        </div>
    </div>
</template>





<script>
export default {
    props: {
        rideName: String,
        waitingTime: Number,
        ago: Number
    },

    computed: {
        waitingTimeColor() {
            if (this.waitingTime < 30) {
                return "green"
            } else if (this.waitingTime < 60) {
                return "orange"
            } else {
                return "red"
            }
        }
    }
}
</script>





<style scoped>
#cell {
    display: flex;
    padding: 0.75rem 1rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 4px;
    border: 1px solid #E1E1E1;
    background: #FFF;
}

#waiting {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.green {
    color: #18B531;
}

.orange {
    color: #EE9D00;
}

.red {
    color: #DA1919;
}
</style>