import ConnectToDatabase from "@/database"
import BlogModel from "@/models/BlogModel"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await ConnectToDatabase()

        const get = await BlogModel.find()
        if (get && get.length) {
            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: `sucessfully added blog`,
                data: get
            })
        }
        else {
            return NextResponse.json({
                status: false,
                message: 'soming wrong while creation with data',
            })
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            status: false,
            message: err.message,
            statusCode: 500,
        })
    }
}