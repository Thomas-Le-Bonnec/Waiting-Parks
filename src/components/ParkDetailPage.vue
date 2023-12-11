<template>
    <SubviewBanner :image="park.image" :title="park.name" :isPark="true"></SubviewBanner>
    <div id="waitingTimes">
        <WaitingTimeCell v-for="ride in waitingTimes" :key="ride.name" :rideName="ride.rideName"
            :waitingTime="ride.waitTime" :ago="ride.timeSinceUpdateSeconds"></WaitingTimeCell>
    </div>
</template>



<script>
import { Park, parks, findParkByName } from '@/data/parks';
import { getWaitingTimes } from '@/data/waitingTimes.js';
import SubviewBanner from './ReusableComponents/SubviewBanner.vue';
import WaitingTimeCell from './ReusableComponents/WaitingTimeCell.vue';

export default {
    components: {
        SubviewBanner,
        WaitingTimeCell
    },

    data() {
        return {
            park: Park,
            waitingTimes: []
        };
    },

    async created() {
        const parkName = this.$route.params.parkName;
        this.park = findParkByName(parks, parkName)

        if (this.park != null) {
            this.waitingTimes = await getWaitingTimes(this.park.apiURL)
        }
        console.log(this.waitingTimes)
    }
}
</script>





<style>
#waitingTimes {
    display: flex;
    padding: 24px 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}
</style>