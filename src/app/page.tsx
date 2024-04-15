import { RxAvatar } from "react-icons/rx";
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SideBar from '../sideBar/sidebar'

export default async function SidebarComponent () {

  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  
  // getSession es un hook de supabase para verificar el inicio de session
  // el cual guardamos en la constante session
  if (session === null) {
      // en este if hacemos la verificacion del inicio de session, si es nulo
      // redirigimos al componente login negando el accedo a los datos del usuario
      redirect('/login')
  } 
  return (
    <main  className="Content flex min-h-screen flex-col items-center justify-between p-24" > 
     <section className='dashboardContent'>
      <input className='Search' type="text" placeholder='Buscar'/>
      <div className='Avatar'>
      <RxAvatar style={{fontSize: '40px', cursor: 'pointer'}}/>
      </div> 
      </section>
      < SideBar />
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </main>
  )
}
