import { createClient } from '@supabase/supabase-js';

// Validate environment variables are present before creating client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing environment variable: VITE_SUPABASE_URL');
}

if (!supabaseAnonKey) {
  throw new Error('Missing environment variable: VITE_SUPABASE_ANON_KEY');
}

// Validate URL format
if (!supabaseUrl.startsWith('https://')) {
  throw new Error('VITE_SUPABASE_URL must start with https://');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,      // Automatically refresh session tokens
    persistSession: true,        // Persist session across page reloads
    detectSessionInUrl: true,    // Handle auth redirects (e.g. email confirmation)
  },
});
