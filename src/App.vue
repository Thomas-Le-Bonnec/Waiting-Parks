<template>
    <NavigationBar ref="header"></NavigationBar>
    <main ref="pageContent">
        <RouterView></RouterView>
    </main>
    <FooterView></FooterView>
</template>





<script>
import FooterView from './components/ReusableComponents/FooterView.vue';
import NavigationBar from './components/ReusableComponents/NavigationBar.vue';


export default {
    name: 'App',

    components: {
        NavigationBar,
        FooterView
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
