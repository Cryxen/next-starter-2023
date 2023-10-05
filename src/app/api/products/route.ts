import { createProducts, faker } from "@/features/responses/CreateProduct"
import { NextResponse } from "next/server"


export function GET(){
    const products = createProducts({faker, count:20})

    return NextResponse.json(
        {data: Array.from(products.values())},
        {status: 200}
        )
}