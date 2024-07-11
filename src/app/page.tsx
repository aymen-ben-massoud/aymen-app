import { eq } from "drizzle-orm";
import { index } from "drizzle-orm/mysql-core";
import { url } from "inspector";
import { todo } from "node:test";
import { title } from "process";
import { any, number } from "zod";
import { db } from "~/server/db";
import {   getImages} from "~/server/db/queries/queries";
import ImageContent from "./_components/imagescontent/page";




export const dynamic = "force-dynamic"

export default async  function HomePage() {
  const images = await getImages()
 
  
return(


  <ImageContent/>
)
}
