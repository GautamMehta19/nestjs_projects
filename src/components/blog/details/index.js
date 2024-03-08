'use client'

export default async function BlogDetailsComponent({ blogDetail }) {
    return <div>
        this is blog details component
        <p>{blogDetail?.title}</p>
        <p>{blogDetail?.description}</p>
    </div>
}