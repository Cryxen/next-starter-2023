const Cart = ({productsInCart}) => {
    console.log("Inside shopping cart")
    console.log(productsInCart)
    return(
        <div>
        <p>Handlevogn:</p>
        <ul>
        {productsInCart.map((element) => (<li key={element.id}>{element.title}</li>))}
        </ul>
        </div>
    )

}
export default Cart