import { index } from "drizzle-orm/mysql-core";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async  function HomePage() {
  const images = await db.query.images.findMany(
   { orderBy:(model , {desc}) => desc(model.id)}
  )
  
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
