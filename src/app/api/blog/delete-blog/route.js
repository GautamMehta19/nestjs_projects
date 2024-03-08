import ConnectToDatabase from "@/database"
import BlogModel from "@/models/BlogModel"
import { NextResponse } from "next/server"

export async function DELETE() {
    try {
        await ConnectToDatabase()

        const { searchParams } = new URL(req.url)
        const currentBlogId = searchParams.get('id')
        if (!currentBlogId) {
            return NextResponse.json({
                status: false,
                message: 'id is required',
                statusCode: 400,
            })
        }
        const deleteById = await BlogModel.findByIdAndDelete(currentBlogId)
        if (deleteById) {
            return NextResponse.json({
                status: true,
                message: 'successfully delete',
                statusCode: 200,
            })
        }
        return NextResponse.json({
            status: false,
            message: 'somthing went wrong'
        })

    }
    catch (err) {
        console.log(err)
        return NextResponse.json({
            status: false,
            message: err.message,
            statusCode: 500,
        })
    }
}