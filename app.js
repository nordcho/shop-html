let div = document.getElementsByClassName('test')

function changeDirection(direction) {
    let contanier = document.getElementsByClassName('product_container')
    let elementOfContanier = document.getElementsByClassName('product')
    let contanierReverse = document.getElementsByClassName('product_container_reverse')
    let elementOfContanierReverse = document.getElementsByClassName('product_reverse')
    let image = document.getElementsByClassName('image')
    let price = document.getElementsByClassName('price')
    let rating = document.getElementsByClassName('rating')
    let name = document.getElementsByClassName('name_of_product')
    let productDescription = document.getElementsByClassName('product_description')
    let purchaseButton = document.getElementsByClassName('purchase_button')
    let imageReverse = document.getElementsByClassName('image_reverse')
    let priceReverse = document.getElementsByClassName('price_reverse')
    let ratingReverse = document.getElementsByClassName('rating_reverse')
    let nameReverse = document.getElementsByClassName('name_of_product_reverse')
    let productDescriptionReverse = document.getElementsByClassName('product_description_reverse')
    let purchaseButtonReverse = document.getElementsByClassName('purchase_button_reverse')

    if(contanier[0] && direction == 'column') {
    Array.from(contanier).forEach(
        contanier => {
            contanier.className = 'product_container_reverse'
        }
    )
    Array.from(elementOfContanier).forEach(
        elementOfContanier => {
            elementOfContanier.className = 'product_reverse'
        }
    )
    Array.from(image).forEach(
        image => {
            image.className = 'image_reverse'
        }
    )
    Array.from(price).forEach(
        price => {
            price.className = 'price_reverse'
        }
    )
    Array.from(rating).forEach(
        rating => {
            rating.className = 'rating_reverse'
        }
    )
    Array.from(productDescription).forEach(
        productDescription => {
            productDescription.className = 'product_description_reverse'
        }
    )
    Array.from(purchaseButton).forEach(
        purchaseButton => {
            purchaseButton.className = 'purchase_button_reverse'
        }
    )
    Array.from(name).forEach(
        name => {
            name.className = 'name_of_product_reverse'
        }
    )
    }

    else if(contanierReverse[0] && direction == 'row') {
        Array.from(contanierReverse).forEach(
            contanierReverse => {
                contanierReverse.className = 'product_container'
            }
        )
        Array.from(elementOfContanierReverse).forEach(
            elementOfContanierReverse => {
                elementOfContanierReverse.className = 'product'
            }
        )
        Array.from(imageReverse).forEach(
            imageReverse => {
                imageReverse.className = 'image'
            }
        )
        Array.from(priceReverse).forEach(
            priceReverse => {
                priceReverse.className = 'price'
            }
        )
        Array.from(ratingReverse).forEach(
            ratingReverse => {
                ratingReverse.className = 'rating'
            }
        )
        Array.from(productDescriptionReverse).forEach(
            productDescriptionReverse => {
                productDescriptionReverse.className = 'product_description'
            }
        )
        Array.from(purchaseButtonReverse).forEach(
            purchaseButtonReverse => {
                purchaseButtonReverse.className = 'purchase_button'
            }
        )
        Array.from(nameReverse).forEach(
            nameReverse => {
                nameReverse.className = 'name_of_product'
            }
        )
        }
}