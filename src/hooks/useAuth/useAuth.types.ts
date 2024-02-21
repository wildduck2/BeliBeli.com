import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction } from 'redux';
import { Provider } from '@supabase/supabase-js';

export interface useAuthEmailProps extends useAuthProviderProps {
  fullNameValue?: string;
  email: string;
  password: string;
  notChecked?: boolean;
}

export interface useAuthProviderProps {
  dispatch: Dispatch<AnyAction>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailValid: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
  route: NavigateFunction;
  provider?: Provider;
}
