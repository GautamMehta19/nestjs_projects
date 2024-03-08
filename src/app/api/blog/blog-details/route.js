import ConnectToDatabase from "@/database"

export async function GET(){
    try{
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
        const getById = await BlogModel.findById(currentBlogId)
        if (getById) {
            return NextResponse.json({
                status: true,
                message: 'successfully delete',
                statusCode: 200,
                data: getById
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