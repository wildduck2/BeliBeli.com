import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { AuthError, User } from '@supabase/supabase-js';
import { getUserDispatch } from '@/context/Data';
import { useDispatch } from 'react-redux';

export interface UserData {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  confirmed_at: string;
  created_at: string;
  identities: Identity[];
  last_sign_in_at: string;
  phone: string;
  updated_at: string;
  user_metadata: UserMetadata;
}

export interface Identity {
  created_at: string;
  id: string;
  identity_data: IdentityData;
  last_sign_in_at: string;
  provider: string;
  updated_at: string;
  user_id: string;
}

export interface IdentityData {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface UserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}

const useUser = ({ signedout }: { signedout: boolean }) => {
  const [session, setSession] = useState<User>();
  const [error, setError] = useState<AuthError>();
  const dipatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (data.user) {
          setSession(data.user as User);
          dipatch(getUserDispatch(data.user as User));
        }

        if (error) {
          setError(error);
        }
      } catch (error) {
        throw new Error(error as string);
      }
    };
    fn();
  }, [signedout]);

  return [session, error] as const;
};

export default useUser;
