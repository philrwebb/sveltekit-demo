import { createClient } from '@supabase/supabase-js';

const SUPABSE_URL = 'https://cfythzsmualnnqgwhxax.supabase.co'
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDIxNDcxMCwiZXhwIjoxOTU5NzkwNzEwfQ.4f88YkUDDOMMaGms6F4R_TGhcdJV2XeeDgCcVv6atCo'

const supabase = createClient(SUPABSE_URL, SUPABASE_PUBLIC_KEY)

export default supabase