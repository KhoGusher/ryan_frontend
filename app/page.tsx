// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>


   <div  >
      <Link className="mr-2" href="/about">About</Link>
      <Link className="mr-2" href="/foods">Foods</Link>
      <Link className="mr-2" href="/location">Location</Link>
      <Link className="mr-2" href="/team">Team</Link>
     </div>

    <div className="items-center justify-center " >
      <h1 className="text-red-600 text-center" >Welcome to the Home Page</h1>
      <p >This is the main page of your Next.js app using the App Router.</p>
      </div>
      
    </main>
  );
}
