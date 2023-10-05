import { Product } from "@/features/responses/types"

const Card = (props: Product) => {
    const {id, title, description, price, category, addToCart: addToCart, removeFromCart: removeFromCart} = props

    const handleAddToCart = () => {
        addToCart?.(id, title, price)
    }

    const handleRemoveFromCart = () => {
        removeFromCart?.(id)
    }
    return(
        <article className="border-2 border-solid m-5 p-5 w-1/3 flex flex-col">
        <header className="text-sm w-fit self-end bg-gray-100 px-3 py-1">{category}</header>

        <h3 className="text-lg my-2 font-bold underline">{title}</h3>
        <p className="">Beskrivelse: <br />
        {description}</p>
        <p>Pris: {price} Kroner</p>
        {addToCart ? <button onClick={handleAddToCart} className="border border-solid">Legg vare i handlevogn</button> : null}
        </article>
    )
}

export default Card