export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Addresses: {
        Row: {
          address: string;
          city: string;
          country: string;
          created_at: string | null;
          id: number;
          name: string;
          user_id: string;
          zipcode: string;
        };
        Insert: {
          address: string;
          city: string;
          country: string;
          created_at?: string | null;
          id?: number;
          name: string;
          user_id: string;
          zipcode: string;
        };
        Update: {
          address?: string;
          city?: string;
          country?: string;
          created_at?: string | null;
          id?: number;
          name?: string;
          user_id?: string;
          zipcode?: string;
        };
        Relationships: [];
      };
      OrderItem: {
        Row: {
          created_at: string | null;
          id: number;
          order_id: number;
          product_id: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          order_id: number;
          product_id: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          order_id?: number;
          product_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "OrderItem_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "Orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "OrderItem_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "Products";
            referencedColumns: ["id"];
          },
        ];
      };
      Orders: {
        Row: {
          address: string;
          city: string;
          country: string;
          created_at: string | null;
          id: number;
          name: string;
          stripe_id: string;
          total: number;
          user_id: string;
          zipcode: string;
        };
        Insert: {
          address: string;
          city: string;
          country: string;
          created_at?: string | null;
          id?: number;
          name: string;
          stripe_id: string;
          total: number;
          user_id: string;
          zipcode: string;
        };
        Update: {
          address?: string;
          city?: string;
          country?: string;
          created_at?: string | null;
          id?: number;
          name?: string;
          stripe_id?: string;
          total?: number;
          user_id?: string;
          zipcode?: string;
        };
        Relationships: [];
      };
      Products: {
        Row: {
          created_at: string | null;
          description: string;
          id: number;
          price: number;
          title: string;
          url: string;
        };
        Insert: {
          created_at?: string | null;
          description: string;
          id?: number;
          price: number;
          title: string;
          url: string;
        };
        Update: {
          created_at?: string | null;
          description?: string;
          id?: number;
          price?: number;
          title?: string;
          url?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

import { PostgrestError } from "@supabase/supabase-js";

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;
