import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  // getSession es un hook de supabase para verificar el inisio de session
  // el cual guardamos en la constante session
  if (session === null) {
  // en este if hacemos la verificacion del inicio de session, si es nulo
  // redirigimos al componente login negando el accedo a los datos del usuario
    redirect('/login')
  }

  const { data: post } = await supabase.from('post').select('*, users(*)')
  // Con esta constante hacemos el llamado a la api de supabase
  // Lo guardamos en la variable post , le decimos que queremos datos de la columna nombrada post
  // y utilizamos select para llamar el tipo de datos que queremos , en este caso usamos  * para indicar que quremos todos ellos
  return (
    <main className="Content flex min-h-screen flex-col items-center justify-between p-24" style={{ width: '50%', margin: 'auto', textAlign: 'justify' }} >
      <AuthButtonServer />
      {/* button para iniciar session con github */}
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </main>
  )
}
