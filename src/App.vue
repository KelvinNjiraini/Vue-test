<template>
    <section class="main">
        <mail-modal v-show="currentModalPresent" />
        <div class="main__nav">
            <side-bar />
        </div>
        <div class="main__content">
            <RouterView />
        </div>
    </section>
</template>

<script>
import SideBar from './../src/components/SideBar.vue'
import MailModal from './components/MailModal.vue'
import { mapStores } from 'pinia'
import { useGeneralStore } from './stores/index'
export default {
    components: {
        SideBar,
        MailModal
    },
    computed: {
        ...mapStores(useGeneralStore),

        currentModalPresent() {
            return !!this.generalStore.currentMail
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    border: black 1rem solid;
    min-height: 100vh;

    &__nav {
        flex: 0 0 20%;
    }

    &__content {
        flex-grow: 1;
    }
}
</style>
