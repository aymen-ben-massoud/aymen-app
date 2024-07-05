import { index } from "drizzle-orm/mysql-core";
import { db } from "~/server/db";


const imgUrl = [ "https://utfs.io/f/a7d5e7a1-2b95-4aaf-a62c-773eafd467be-21qso.jpg",
  "https://utfs.io/f/54d823fb-9145-4533-88e9-f2e329435020-21qsp.jpg",
  "https://utfs.io/f/bc9e52ed-d824-429d-bb15-7ebec3f0cf84-2dmy.jpg"
 ] 
 const images = imgUrl.map((url, index )=> ({
  url,
  id : index + 1
 }))
export default async  function HomePage() {
  const posts = await db.query.posts.findMany()
  
  return (
<main>

  <div className="flex flex-wrap justify-center ">
    {posts.map((post)=> (
      <h1 className="text-xl">{post.name}</h1>
    ))}
    {images.map((image)=> (
      <div   key={image.id }>
        <img className="divimagesstyle m-2"  src={image.url} alt="" />
      </div>
    ))}
  </div>
</main>

  );
}
