<template>
    <NavigationBar ref="header"></NavigationBar>
    <main ref="pageContent">
        <BannerView></BannerView>
        <ParkCarroussel></ParkCarroussel>
    </main>
</template>





<script>
import NavigationBar from './components/NavigationBar.vue'
import BannerView from './components/BannerView.vue'
import ParkCarroussel from './components/ParkCarroussel.vue'


export default {
    name: 'App',
    
    components: {
        NavigationBar, BannerView, ParkCarroussel
    },

    methods: {
        addPaddingOnLoad() {
            // To prevent the content of the page to be bellow the header
            const headerHeight = this.$refs.header.$el.offsetHeight;
            this.$refs.pageContent.style.paddingTop = headerHeight + 'px';
        }
    },

    mounted() {
        this.addPaddingOnLoad();
    },

    updated() {
        this.addPaddingOnLoad();
    }
}
</script>





<style>
@import "./styles/style.css";
</style>
