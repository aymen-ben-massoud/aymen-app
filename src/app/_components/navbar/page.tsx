 "use client"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function NavBar(){
const router = useRouter()
    return(
        <nav className="bg-black text-white flex justify-between text-xl content-baseline"> 
        <h1 className="m-2">Navbar</h1> 
       <div className="m-3">
      <UploadButton endpoint="imageUploader" onClientUploadComplete={()=> {
        router.refresh()
      }}  />
       </div>
         </nav> 
          )
}