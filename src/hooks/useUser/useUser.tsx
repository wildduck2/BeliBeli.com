import React from "react";
import { Payment } from "../../types/types";

import { Database} from "../../types/types_db.ts";

type UserContextType = {
  accesToken: string;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  payment: Payment | null;
};

const useUser = () => {
  return <div>useUser</div>;
};

export default useUser;
