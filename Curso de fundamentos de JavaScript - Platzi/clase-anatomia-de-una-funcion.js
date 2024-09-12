function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    
    return priceWithDiscount
}

const originalPrice = 100
const finalPrice = calculateDiscountedPrice (originalPrice, discountPercentage)
const discountedPercentage = 20


console.log('Original price: $' + originalPrice)
console.log('Discount:' + discountPercentage + '%')
console.log('Price with discount : $' + finalPrice)