export const state = () => ({
    notificationMessage: ''
})

export const mutations = {
    addNotificationMessage(state, message) {
        state.notificationMessage = message
    },

    removeNotificationMessage(state) {
        state.notificationMessage = ''
    }
}
