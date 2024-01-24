import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import './page.module.css'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from('post').select('*')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <p>Hola Twitter</p>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </main>
  )
}
