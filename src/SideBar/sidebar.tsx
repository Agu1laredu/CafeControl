import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '../app/components/auth-button-server'
import { redirect } from 'next/navigation'
import Logo from '../app/Img/Logo.png'
import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
export default async function Home() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    // getSession es un hook de supabase para verificar el inisio de session
    // el cual guardamos en la constante session
    if (session === null) {
        // en este if hacemos la verificacion del inicio de session, si es nulo
        // redirigimos al componente login negando el accedo a los datos del usuario
        redirect('/login')
    }

    // const { data: post } = await supabase.from('post').select('*')
    // Con esta constante hacemos el llamado a la api de supabase
    // Lo guardamos en la variable post , le decimos que queremos datos de la columna nombrada post
    // y utilizamos select para llamar el tipo de datos que queremos , en este caso usamos  * para indicar que quremos todos ellos
    return (
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
    )
}