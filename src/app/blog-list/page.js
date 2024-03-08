import BlogListComponent from "@/components/blog/list";


async function FetchAllBlogs() {
    const response = await fetch(`http://localhost:3000/api/blog/get-all-blogs`, {
        method: 'GET',
        cache: 'no-store'
    })
    const result = await response.json()
    if (result?.status) {
        return result.data
    }
}


export default async function BlogList() {

    const getAllBlogs = await FetchAllBlogs()
    console.log(getAllBlogs)
    return <div>
        <h1 className="font-bold text-lg">Blog List</h1>
        <BlogListComponent getAllBlogs={getAllBlogs}/>
    </div>
}