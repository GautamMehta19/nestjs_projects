'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function BlogListComponent({ getAllBlogs }) {


    const router = useRouter()
    useEffect(() => {
        router.refresh()
    })

    async function handleDelete(getCurrentBlogId) {

        const response = await fetch(`http://localhost:3000/api/blog/delete-blog/?id=${getCurrentBlogId}`, {
            method: 'DELETE',
        })
        const result = await response.json()
        if (result?.status) router.refresh()
    }

    return <div>
        BlogListComponent
        {
            getAllBlogs && getAllBlogs.length > 0 ?
                getAllBlogs.map(blogItem =>
                    <div key={blogItem._id}>
                        <p>{blogItem.item}</p>
                        <p>{blogItem.description}</p>
                        <button onClick={() => handleDelete(blogItem._id)}>Delete Blog itme</button>
                        <button onClick={() => router.push(`/blog-list/${blogItem._id}`)}>View Blog Details</button>
                    </div>
                )
                : <h1>no blog available</h1>
        }
    </div>
}