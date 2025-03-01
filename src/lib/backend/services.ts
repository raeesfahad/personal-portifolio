
import pb from "./pocketbase"



export async function postForm(data : FormData): Promise<{}> {


    await pb.collection('contact').create(data);

    return { success: true };
}