export const state = () => ({
    notificationMessage: '',
    isMainOverlayVisible: false
})

export const mutations = {
    addNotificationMessage(state, message) {
        state.notificationMessage = message
    },

    removeNotificationMessage(state) {
        state.notificationMessage = ''
    },

    modifyMainOverlay(state, isVisible = true) {
        state.isMainOverlayVisible = isVisible
    }
}
