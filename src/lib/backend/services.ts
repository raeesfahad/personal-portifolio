
import pb from "./pocketbase"
import supabase from "./supabase";

interface Message {
  success: boolean
}

export async function postForm(data: { first_name: string, last_name: string, email: string, message: string }): Promise<{ success: boolean }> {

  try {
    await pb.collection('contact').create(data);
    return { success: true };
  } catch (e) {

    return { success: false }
  }

}

export async function postFormSupabase(data: {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean }> {

  const { error } = await supabase
      .from('contact') 
      .insert([data]);

  if (error) {
      console.error("Error inserting data into Supabase:", error);
      return { success: false };
  }

  // If no error, return success
  return { success: true };
}


export { type Message }