import { Product } from "@/features/responses/types"

const ProductItem = (props: Product) => {
    const {id, title, description, price, category, addToCart: addToCart, removeFromCart: removeFromCart} = props

    const handleAddToCart = () => {
        addToCart?.(id, title, price)
    }

    const handleRemoveFromCart = () => {
        removeFromCart?.(id)
    }
    return(
        <article className="border-2 border-solid m-5 p-5">
        <h3 className="text-lg my-2 font-bold underline">{title}</h3>
        <p>Beskrivelse: {description}</p>
        <p>Kategori: {category}</p>
        <p>Pris: {price} Kroner</p>
        {addToCart ? <button onClick={handleAddToCart} className="border border-solid">Legg vare i handlevogn</button> : null}
        {removeFromCart ? <button onClick={handleRemoveFromCart} className="border border-solid">Fjern vare fra handlevogn</button> : null}

        </article>
    )
}

export default ProductItem