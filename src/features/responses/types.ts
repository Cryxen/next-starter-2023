export type Category = {
    name: string
}

//Importer category når en får til.
export type Product = {
    id: number
    title: string
    description: string
    price: number
    category: string
    addToCart?: (id: number, title:string, price:number ) => void
    removeFromCart?: (id: number) => void
}

export type Faker = {
    id: () => {}
    title: () => {}
    description: () => {}
    price: () => {}
    category: () => {}
}

export type createProductParams = {
    count: number
    faker: Faker
    existingProducts?: Map<string, Product>
}

export type CreateProducts = (
    params: createProductParams,
) => Map<string, Product>