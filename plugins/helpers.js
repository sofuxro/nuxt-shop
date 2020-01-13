export default ({ app }, inject) => {
    inject('priceFormat', (price, hasFraction = true) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: hasFraction ? 2 : 0
        }).format(price)
    )
}
