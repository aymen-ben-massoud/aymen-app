
"use server"


import { db } from "~/server/db";


export async function getImages(){

    const images = await db.query.images.findMany(
        { orderBy:(model , {desc}) => desc(model.id)}
       )
    return(
   images
    )
}





 

