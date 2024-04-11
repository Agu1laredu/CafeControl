import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '../app/components/auth-button-server'
import { redirect } from 'next/navigation'
import Logo from '../app/Img/Logo.png'
import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import { RxAvatar } from "react-icons/rx";

export default async function SidebarComponent () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  // getSession es un hook de supabase para verificar el inisio de session
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
      <div className='SideBar' >
            <img src={Logo.src} alt="Logo" className='Logo' />
            <section>
                <li >
                    <AiTwotoneHome />
                    INICIO
                </li>
                <li>
                    <FaMoneyCheckDollar />
                    FACTURACIÓN
                </li>
                <li>
                    <MdInventory />
                    INVENTARIO
                </li>
                <li>
                    <TbReportSearch />
                    REPORTES</li>
            </section>
            <AuthButtonServer />
        </div>
    
      
      {/* button para iniciar session con github */}
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </main>
  )
}
