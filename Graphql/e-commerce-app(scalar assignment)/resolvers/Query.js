const {db} = require("../db")


exports.Query={
    hello: () =>{
        return []
    },
    // numberofAnimals: () => {
    //     return 10;
    // },
    // price: () =>{
    //     return 234.123;
    // },
    // isCool:() => {
    //     return false;
    // }
    products: (parent,{filter}, {db}) =>{
        let filteredProducts = db.products;

        if(filter){
            const {onSale, avgRating} = filter
            if(onSale){
                filteredProducts= filteredProducts.filter(product => product.onSale)
            }

            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating=0;
                    let numberOfReviews=0;
                    db.reviews.forEach(review => {
                        if(review.productId === product.id){ 
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating/numberOfReviews;
                    console.log(avgProductRating, product.name);
                    return avgProductRating >= avgRating;
                });
            }
        }

        return filteredProducts;
    },
    product:(parent,args, {db}) => {
        console.log(args)
        const {id}  =args;
        return db.products.find(product => product.id === id)
        
    },
    categories:(parent,args, {db}) => db.categories,
    category:(parent, args, {categories}) => {
        const {id} = args
        return db.categories.find(category => category.id === id)     

    }
};