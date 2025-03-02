import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://fstlvgekvjbyfgsfdses.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdGx2Z2VrdmpieWZnc2Zkc2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NDAyNjksImV4cCI6MjA1NjUxNjI2OX0.RQ_xgXu-wfLI9uzxC036EiotoCLfcdKcIWJcWH4F298')


export default supabase