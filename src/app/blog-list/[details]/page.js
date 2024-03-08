import BlogDetailsComponent from "@/components/blog/details";


async function fetchBlog(getCurrentId){
    const response = await fetch(`http://localhost:3000/api/blog/blog-details/?id=${getCurrentId}`,{
        method : 'GET',
        caches : 'no-store'
    })
    const result = await response.json()
    if (result?.status) {
        return result.data
    }
}
export default async function blogDetails({params}){
    console.log(params)
    const {details} = params
    const blogDetail = await fetchBlog(details)

    return <div>
        <BlogDetailsComponent blogDetail={blogDetail}/>
    </div>
}