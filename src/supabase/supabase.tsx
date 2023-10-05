import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const PROJECT_URL = import.meta.env.VITE_PROJECT_URL;
const PROJECT_ANON_API_KEY = import.meta.env.VITE_PROJECT_ANON_API_KEY;

export const supabase = createClient<Database>(
  PROJECT_URL!,
  PROJECT_ANON_API_KEY!,
);

// // Before 😕
// let movie: Database['public']['Tables']['movies']['Row'] = // ...
//
// // After 😍
// let movie: Tables<'movies'>
// supabase-js always returns a data object (for success), and an error object (for unsuccessful requests).
//
// These helper types provide the result types from any quer
// const query = supabase.from('movies').select(`id, title`)
// const movies: DbResult<typeof query> = await query
