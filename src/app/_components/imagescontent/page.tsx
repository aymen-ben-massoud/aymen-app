import {   getImages} from "~/server/db/queries/queries";




export const dynamic = "force-dynamic"

export default async  function ImageContent() {
  const images = await getImages()
 
  
 
  return (
<main>

  <div className="flex flex-wrap justify-center ">
  
  
    {images.map((image)=> (
      <div   key={image.id }>
        <img className="divimagesstyle m-2"  src={image.url} alt="" />
        <p> {image.name} </p>
      </div>
    ))}
  </div>


</main>


  );
}