import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create Supabase client
// Handle missing credentials gracefully to prevent app crash
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        auth: {
            signUp: async () => ({ data: null, error: { message: "Supabase not configured" } }),
            signInWithPassword: async () => ({ data: null, error: { message: "Supabase not configured" } }),
            signOut: async () => ({ error: null }),
            getUser: async () => ({ data: { user: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
        },
        from: () => ({
            select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
            upsert: async () => ({ data: null, error: null }),
        })
    }

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing. Authentication will not work.')
}