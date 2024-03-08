import ConnectToDatabase from "@/database"
import BlogModel from "@/models/BlogModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await ConnectToDatabase()
        const data = await req.json()
        // let data = req.body  // if you are using express then worked

        const { title, description } = data
        console.log("title============>", title)
        console.log("description============>", description)

        const createData = await BlogModel.create(data)
        if (createData) {
            return NextResponse.json({
                status: true,
                statusCode: 201,
                message: `sucessfully added blog`,
                data: createData
            })
        }
        else {
            return NextResponse.json({
                status: false,
                message: 'soming wrong while creation with data'
            })
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            status: false,
            message: err.message
        })
    }
}