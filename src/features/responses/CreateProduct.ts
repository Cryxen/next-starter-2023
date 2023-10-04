import type { CreateProducts, Faker } from "./types";

const fakeTitles: string[] = ["Penn", "Sykkel", "Ball", "Pute"]
const fakeDescriptions: string[] = ["Svart penn",
"Blå sykkel",
"Rund ball",
"Firkantet pute"]
const fakePrices: number[] = [123, 42, 24, 33]
const fakeCategory: string[] = ["Kulepenn", "Transportmiddel", "Leke", "Soveverktøy"]

/*
    Fra undervisning - Webapp2023/webapp-03/src/features/responses/createResponse.ts
*/
// Define a function to get a random item from an array.
const getRandomItem = <T>(items: T[]) => {
    // Generate a random index within the array's length.
    const randomIndex = Math.floor(Math.random() * items.length)
  
    // Return the random item from the array.
    return items[randomIndex]
  }

  // Define a function to generate a random ID.
const getRandomId = () => {
    // Generate a random decimal number, convert it to base 36, and remove the leading "0.".
    return Math.random().toString(36).slice(2)
  }
/*
    Fra undervisning - Webapp2023/webapp-03/src/features/responses/createResponse.ts
*/

export const faker: Faker = {
    id: () => getRandomId(),
    title: () => getRandomItem(fakeTitles),
    description: () => getRandomItem(fakeDescriptions),
    price: () => getRandomItem(fakePrices),
    category: () => getRandomItem(fakeCategory)
}

const createProducts: CreateProducts = ({existingProducts, count}) => {
    const products = new Map(existingProducts)

    for (let i = 0; i < count; i++) {
        const product = {
            id: faker.id(),
            title: faker.title(),
            description: faker.description(),
            price: faker.price(),
            category: faker.category()
        }
    products.set(`product - ${i}`, product)
    }
    return products
}

export {createProducts}