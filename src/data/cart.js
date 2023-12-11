class CartItem {
    constructor(parkName, option, price, name, email) {
        this.parkName = parkName
        this.option = option
        this.price = price
        this.name = name
        this.email = email
    }

    id() {
        return (this.parkName + this.option + this.price + this.name + this.email)
    }
}

export { CartItem }