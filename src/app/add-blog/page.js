// 'use client'

// import { useRouter } from "next/router"
// import { useState } from "react"


// const initialFormData = {
//     title: '',
//     description: ''
// }

// export default function AddBlog() {

//     const [blogFormData, setBlogFormData] = useState(initialFormData)

//     const router = useRouter()
//     // console.log(blogFormData)

//     async function handleAddBlog() {
//         let responcse = await fetch('/api/blog/add-new-blog', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(blogFormData)
//         })

//         const result = await responcse.json()
//         if(result?.status){
//             setBlogFormData(initialFormData)
//             router.push('/blog-list')
//         }
//         const { status, message, data } = result;
//         console.log(status)
//         console.log("result from backend=======>", result)
//     }

//     return <div className="flex min-h-screen flex-col p-8">
//         <h1 className="font-bold text-lg mb-3">Add a New Blog</h1>
//         <div className="flex flex-col gap-4">

//             <div className="flex flex-col gap-3">
//                 <label>Enter a Blog title</label>
//                 <input className="border border-red-500 p-4 outline-none text-black" name="title" placeholder="enter blog title"
//                     value={blogFormData['title']}
//                     onChange={(e) => setBlogFormData({
//                         ...blogFormData,
//                         title: e.target.value
//                     })} />
//             </div>

//             <div className="flex flex-col gap-3">
//                 <label>Enter Blog Description</label>
//                 <textarea rows={5} className="border border-red-500 p-4 outline-none text-black" name="description" placeholder="enter blog description"
//                     value={blogFormData['description']}
//                     onChange={(e) => setBlogFormData({
//                         ...blogFormData,
//                         description: e.target.value
//                     })} />
//             </div>

//             <div>
//                 <button onClick={handleAddBlog} className="border border-red-500 p-4 bg-white text-black">Add</button>
//             </div>
//         </div>
//     </div>
// }



// components/AddBlog.js

'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const initialFormData = {
    title: '',
    description: ''
}

export default function AddBlogPage() {
    const [blogFormData, setBlogFormData] = useState(initialFormData)
    const router = useRouter()

    async function handleAddBlog() {
        try {
            const response = await fetch('/api/blog/add-new-blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogFormData)
            })

            const result = await response.json()

            if (result?.status) {
                setBlogFormData(initialFormData)
                router.push('/blog-list')
            }

            console.log('Result from backend:', result)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBlogFormData({
            ...blogFormData,
            [name]: value
        })
    }

    return (
        <div className="flex min-h-screen flex-col p-8">
            <h1 className="font-bold text-lg mb-3">Add a New Blog</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <label>Enter a Blog title</label>
                    <input
                        className="border border-red-500 p-4 outline-none text-black"
                        name="title"
                        placeholder="Enter blog title"
                        value={blogFormData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label>Enter Blog Description</label>
                    <textarea
                        rows={5}
                        className="border border-red-500 p-4 outline-none text-black"
                        name="description"
                        placeholder="Enter blog description"
                        value={blogFormData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button
                        onClick={handleAddBlog}
                        className="border border-red-500 p-4 bg-white text-black"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}



