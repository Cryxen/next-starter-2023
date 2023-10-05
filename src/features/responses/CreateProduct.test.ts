import { createProducts, getRandomId } from "./CreateProduct"
import { Faker, Product } from "./types"

const fakerMock: Faker = {
  id: getRandomId,
  title: () => "Test product",
  description: () => "Description of test product",
  price: () => 42,
  category: () => "Mock products",
}

describe.only("Create products", () => {
  it("should create products", () => {
    const products = createProducts({ count: 10, faker: fakerMock })
    expect(products.size).toBe(10)
  })

  it("should have correct data", () => {
    const products = createProducts({ count: 10, faker: fakerMock })
    const firstResponse = Array.from(products.values())[0]

    expect(firstResponse.title).toBe("Test product")
    expect(firstResponse.description).toBe("Description of test product")
    expect(firstResponse.price).toBe(42)
    expect(firstResponse.category).toBe("Mock products")
  })

  it("should add to existing list", () => {
    const initialProducts = new Map<string, Product>([
      [
        "product-initial",
        {
          id: 0,
          title: "Initial title",
          description: "initial description",
          price: 24,
          category: "Initial category",
        },
      ],
    ])
    const products = createProducts({
      existingProducts: initialProducts,
      count: 10,
      faker: fakerMock,
    })
    expect(products.size).toBe(11)
  })
  it("should fail if no product can be added", () => {
    expect(() => createProducts({ count: 0, faker: fakerMock })).toThrowError(
      "No product added",
    )
  })
})
