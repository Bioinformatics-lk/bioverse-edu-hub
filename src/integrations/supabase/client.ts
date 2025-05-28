
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cvbnkrpwzejhbrctzjvc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Ym5rcnB3emVqaGJyY3R6anZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDg5MDcsImV4cCI6MjA2Mzk4NDkwN30.GXsm1H7qUtAR3-pCU6JY64r7BJz6WDmryPs1pyIxkoQ'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
