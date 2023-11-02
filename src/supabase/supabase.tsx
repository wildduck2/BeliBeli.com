import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const PROJECT_URL = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const PROJECT_ANON_API_KEY = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(
  PROJECT_URL!,
  PROJECT_ANON_API_KEY!,
);

