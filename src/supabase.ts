import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wugussgxgtveixyxjrvr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1Z3Vzc2d4Z3R2ZWl4eXhqcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNjQ2OTIsImV4cCI6MjA0MTY0MDY5Mn0.V2zpKfBJgdDVXDNQH4Tgdu3beOtrajNdCDJxR8AmHug'
export const supabase = createClient(supabaseUrl, supabaseKey)