import { url } from "inspector";
import Link from "next/link";


const imgUrl = [ "https://utfs.io/f/a7d5e7a1-2b95-4aaf-a62c-773eafd467be-21qso.jpg",
  "https://utfs.io/f/54d823fb-9145-4533-88e9-f2e329435020-21qsp.jpg",
  "https://utfs.io/f/bc9e52ed-d824-429d-bb15-7ebec3f0cf84-2dmy.jpg"
 ] 
 const images = imgUrl.map((url, index )=> ({
  url,
  id : index + 1
 }))
export default function HomePage() {
  return (
<main>

  <div className="flex flex-wrap justify-center ">
    {images.map((image)=> (
      <div   key={image.id}>
        <img className="divimagesstyle m-2"  src={image.url} alt="" />
      </div>
    ))}
  </div>
</main>

  );
}
