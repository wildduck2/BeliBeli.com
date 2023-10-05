import React, { ReactNode, useState } from "react";

import { Database } from "../types/types_db";

import { cretateClientComponentClient } from "@supabase/auth-helpers-react";

interface SupabaseProviderTypes {
  children: ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderTypes> = ({ children }) => {
  const [supabaseClient] = useState<>(() => {
    createBroweserSupabaseClient;
  });

  return <div>SupabaseProvider</div>;
};

export default SupabaseProvider;
