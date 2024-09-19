// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzfixdnnxdsnyehwongr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6Zml4ZG5ueGRzbnllaHdvbmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2ODkxNDgsImV4cCI6MjA0MjI2NTE0OH0.mOJ2K4YeTYiJ5OlXd6A8Bgb7c5gHvZdD3dJX6HIDzZI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;