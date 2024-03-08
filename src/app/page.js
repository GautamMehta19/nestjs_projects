'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col p-8">
     <h1 className="font-bold text-lg">Next JS Blog</h1>
     <div>
      <button onClick={()=>router.push('/blog-list')}>visit all blogs</button>
      <button onClick={()=>router.push('/add-blog')}>add new blogs</button>
     </div>
    </main>
  );
}
