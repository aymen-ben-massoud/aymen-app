
import "server-only";

import { db } from "~/server/db";
import { images } from '../schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";



export async function getImages(){
    const images = await db.query.images.findMany(
        { orderBy:(model , {desc}) => desc(model.id)}
       )
    return(
   images
    )
}
export async function DeleteImage(id:number){ 
    await db.delete(images).where(eq(images.id, id ))
    revalidatePath("/")
}




 

