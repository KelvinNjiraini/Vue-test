<template>
    <section class="current-mail" v-if="mailData">
        <a href="#" role="button" class="btn-close" @click.prevent="closeMail">Close</a>
        <div class="actions">
            <button class="btn">Mark as read (r)</button>
            <button class="btn">Archive(a)</button>
        </div>
        <div class="current-mail__content">
            <h4 class="current-mail__title heading--main">
                {{ mailData?.title }}
            </h4>
            <p class="current-mail__description">
                {{ mailData?.description }}
            </p>
        </div>
    </section>
</template>

<script>
import { mapStores } from 'pinia'
import { useGeneralStore } from './../stores/index'
export default {
    data() {
        return {
            mailData: null
        }
    },

    computed: {
        ...mapStores(useGeneralStore)
    },

    methods: {
        closeMail() {
            this.generalStore.currentMail = null
        }
    },

    created() {
        if (this.generalStore.currentMail) {
            this.mailData = this.generalStore.currentMail
        }
    }
}
</script>
<style lang="scss" scoped>
.current-mail {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    z-index: 100;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: white;

    &::after {
        content: '';

        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        // background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    &__title {
        margin-bottom: 2rem;
    }
}
</style>
