import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => {
        return {
            mails: [
                {
                    id: 'dvsr1',
                    title: 'Your 7-figure plan goes bye-bye at midnight',
                    description:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quod iste veritatis voluptate, commodi corporis eaque harum quas ea sit exercitationem praesentium facere, blanditiis architecto!',
                    isRead: false
                },
                {
                    id: '2vgbg',
                    title: '[WEEKEND ONLY] Get this now before',
                    description:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quod iste veritatis voluptate, commodi corporis eaque harum quas ea sit exercitationem praesentium facere, blanditiis architecto!',
                    isRead: false
                },
                {
                    id: 'ifnr7',
                    title: 'Uh-oh, your prescription is expiring',
                    description:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quod iste veritatis voluptate, commodi corporis eaque harum quas ea sit exercitationem praesentium facere, blanditiis architecto!',
                    isRead: false
                }
            ],
            archived: [],
            currentMail: null
        }
    },
    actions: {
        openMailModal(id) {
            const mail = this.mails.find((x) => x.id == id)
            mail.isRead = true
            this.currentMail = mail
        }
    }
    // persist: true
})
