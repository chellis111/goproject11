class product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class shopingCartItems{
    constructor(items){
        this.items = items;
    };
    
    addCartItems(items) {
        return this.items.push(items);
    };

    incrementCardItemQuantity(id) {
        const itemIndex = this.items.findIndex((item) => item.id ===id);
        if (itemIndex >= 0){
            this.items[itemIndex].quantity += 1;

            return this.items;
        }

        return "items does not exists";
    };

    decrementCartItemQuantity(id) {
        const itemIndex = this.items.findIndex((item) => item.id ===id);
        if (itemIndex >= 0){
            this.items[itemIndex].quantity -= 1;

            return this.items;
        }

        return "items does not exists";
    }

    calculateTotalPrice(){
        let totalPrice = 0;
        for (let item of this.items){
            totalPrice += item.price * itemquantity 
        }

        return totalPrice;
    };

    deleteCartItem(id) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
            return this.items;
        }

        return "Item does not exist";
    }
};

const product1 = new product("p1", "chips", 4000, 0);
const product2 = new product("p2", "munch'it", 50, 0);
const product3 = new product("p3", "biscuit", 2000, 0);

const shopingCartItems = new shopingCartItems([product1, product2, product3]);

