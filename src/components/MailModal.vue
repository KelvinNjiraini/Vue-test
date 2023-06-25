<template>
    <teleport to="body">
        <section class="mail-modal">
            <div class="mail-modal__backdrop" v-if="mailData" @click="closeMail"></div>
            <transition name="dialog" appear>
                <dialog class="mail-modal__dialog" v-if="!!mailData" open>
                    <div class="btn-close" @click="closeMail">Close</div>
                    <div class="actions">
                        <button class="btn">Mark as read (r)</button>
                        <button class="btn">Archive(a)</button>
                    </div>
                    <div class="mail-modal__content">
                        <h4 class="mail-modal__title heading--main">
                            {{ mailData?.title }}
                        </h4>
                        <p class="mail-modal__description">
                            {{ mailData?.description }}
                        </p>
                    </div>
                </dialog>
            </transition>
        </section>
    </teleport>
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
.mail-modal {
    &__dialog {
        position: fixed;
        top: 0;
        right: 0;
        width: 40%;
        height: 100vh;
        z-index: 100;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 2rem;
        margin: 0;
        overflow: hidden;
        background-color: white;
        inset-inline-start: unset; //allows dialog box to stop being restricted to the left
    }

    &__backdrop {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    &__title {
        margin-bottom: 2rem;
    }
}

.dialog-enter-from,
.dialog-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

.dialog-enter-active {
    transition: all 0.3s ease-out;
}

.dialog-leave-active {
    transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
