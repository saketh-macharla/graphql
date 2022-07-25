const {products} = require("../db")


exports.Category={
    products:(parent, {filter}, {db}) => {
        console.log(parent)
        const categoryId = parent.id
        
        const categoryProducts= db.products.filter(product => product.categoryId === categoryId)
        if(filter){
            if(filter.onSale === true){
                return categoryProducts.filter(product => product.onSale)
            }
        }
        return categoryProducts
    }

}