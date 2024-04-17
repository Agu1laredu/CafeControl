
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { RxAvatar } from "react-icons/rx";
import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import Logo from '../app/Img/Logo.png'
import Graficos from './components/Charts/charts'
import GraficoMove from './components/Charts/chartsMov'

export default async function Home() {

  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }


  return (
    <main className="Content flex flex-col lg:flex-row min-h-screen items-center lg:items-stretch justify-between p-4 lg:p-24">
      <section className="dashboardContent flex h-10 lg:flex-grow lg:order-2">
        <input className="Search p-2 w-full ml-80 mr-80 rounded-md border border-gray-300" type="text" placeholder="Buscar" />
        <div className="self-end">
          <RxAvatar style={{ fontSize: '40px', cursor: 'pointer' }} />
        </div>
      </section>



      <div className="flex justify-center items-center lg:order-2  h-3/4 lg:h-full mt-40">
        <div className="flex justify-center  items-center mt-80">
          <Graficos />
        </div>
      </div>

      <div className="flex justify-center items-center lg:order-2  h-3/4 lg:h-full mt-40">
        <div className="flex justify-center  items-center mt-80">
          <GraficoMove />
        </div>
      </div>



      <div className="lg:w-64 lg:flex-none lg:order-1">
        <div className="h-full flex flex-col bg-blue-600 border-r text-white">
          <div className="flex items-center justify-between px-4 py-6">
            <img src={Logo.src} alt="Logo" className="w-20 h-20 m-auto" />
            <button className="lg:hidden">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-2 space-y-2">
              <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                <AiTwotoneHome className="w-5 h-5 mr-3" />
                <span>INICIO</span>
              </li>
              <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                <FaMoneyCheckDollar className="w-5 h-5 mr-3" />
                <span>FACTURACIÓN</span>
              </li>
              <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                <MdInventory className="w-5 h-5 mr-3" />
                <span>INVENTARIO</span>
              </li>
              <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                <TbReportSearch className="w-5 h-5 mr-3" />
                <span>REPORTES</span>
              </li>
            </ul>
          </nav>
          <div className="p-4">
            <AuthButtonServer />
          </div>
        </div>
      </div>
    </main>

  )
  {/* <pre>{JSON.stringify(post, null, 2)}</pre> */ }
}

