const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})

// Project done by Thaïs Bordessoul and Matthéo Buffey for Advanced Web Programming class at ILAC
