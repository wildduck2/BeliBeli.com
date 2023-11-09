import Stripe from "stripe";

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Mandate;
}

export interface Price {
  id: string;
  product?: string;
  active?: boolean;
  discription?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trail_days?: number | null;
  metadat?: Stripe.Mandate;
  products?: Product;
}

export interface Payment {
  id: string;
  user_id: string;
  status: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string;
  quantity?: string;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancele_at?: string;
  canceled_at?: string;
  prices?: Price;
}
