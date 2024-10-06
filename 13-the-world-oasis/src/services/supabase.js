import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mvqfiyfxgkqwbphkjvwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cWZpeWZ4Z2txd2JwaGtqdndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTEyOTgsImV4cCI6MjA0MzQ2NzI5OH0.lFE1nb5F3nHHWHoM85Cb5P2_nsUsBkAVqJFEc6Kkw8k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
