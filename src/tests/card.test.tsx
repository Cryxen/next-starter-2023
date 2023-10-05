import { fireEvent, render, screen } from "@testing-library/react"

import Card from "@/components/Card"
import { getRandomId } from "@/features/responses/CreateProduct"
import { Faker, Product } from "@/features/responses/types"

const fakerMock: Product = {
  id: 2,
  title: "Test product",
  description: "Description of test product",
  price: 42,
  category: "Mock products",
  addToCart: () => {},
}

describe("Card test", () => {
  it("should work", () => {
    expect(true).toBe(true)
  })
  it("should render component", () => {
    render(<Card {...fakerMock} />)
    expect(screen.getByRole("article")).toBeInTheDocument()
    expect(screen.getByText(fakerMock.title)).toBeInTheDocument()
    expect(
      screen.getByText(fakerMock.description, { exact: false }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(fakerMock.price, { exact: false }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(fakerMock.category, { exact: false }),
    ).toBeInTheDocument()

    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
