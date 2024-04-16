import { RxAvatar } from "react-icons/rx";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import Logo from '../app/Img/Logo.png'

export default async function Home () {
 
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if  ( session  === null ) {
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
            <section className="w-4 bg-black border">
                <li  className="text-3xl font-bold underline">
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
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </main>
  )
}
