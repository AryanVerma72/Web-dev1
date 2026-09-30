"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async()=>{
    let data = {
      name: "Aryan",
      role: "Coder"
    }
    let a = await fetch("/api/add" , {
      method: "POST", headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      I am Home
      <Image className="mx-auto " width={100} height={100} src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="" />
      <h1>Next.js Api routes demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
