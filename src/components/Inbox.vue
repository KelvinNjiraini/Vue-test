<template>
    <section class="container">
        <h4 class="heading--secondary">Inbox</h4>
        <h2 class="heading--main">Emails Selected ({{ selectedMails.length }})</h2>

        <div class="actions">
            <input
                type="checkbox"
                class="selector"
                name="selector"
                v-model="overallSelector"
                @change="watchMails"
                :checked="selectedMails.length === mailsList.length"
            />
            <button class="btn">Mark as read (r)</button>
            <button class="btn">Archive(a)</button>
        </div>
        <div
            class="mail"
            :class="mail.read ? 'mail--read' : ''"
            v-for="mail in mailsList"
            :key="mail.id"
            @click="openMail(mail.id)"
        >
            <div class="mail__action">
                <input
                    type="checkbox"
                    class="selector"
                    :name="mail.title"
                    :value="mail"
                    v-model="selectedMails"
                    :checked="overallSelector"
                />
            </div>
            <span class="mail__title">
                {{ mail.title }}
            </span>
        </div>
    </section>
</template>
<script>
import { mapStores } from 'pinia'
import { useGeneralStore } from './../stores/index'
export default {
    data() {
        return {
            mailsList: [],
            selectedMails: [],
            overallSelector: false
        }
    },

    computed: {
        ...mapStores(useGeneralStore)
    },
    methods: {
        openMail(id) {
            this.generalStore.openMailModal(id)
        },
        watchMails() {
            if (this.overallSelector == true) {
                this.selectedMails = this.mailsList
            } else {
                this.selectedMails = []
            }
        }
    },

    created() {
        this.mailsList = this.generalStore.mails
        console.log(this.generalStore.mails)
    }
}
</script>

<style lang="scss" scoped>
.mail {
    display: flex;
    padding: 2rem 3rem;
    margin-bottom: 3rem;
    border-radius: 5px;
    background-color: #cccc;
    cursor: pointer;

    &__action {
        margin-right: 2rem;
    }

    &--read {
        opacity: 0.5;
    }
}
</style>
