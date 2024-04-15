
import { AuthButtonServer } from '../app/components/auth-button-server'
import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import Logo from '../app/Img/Logo.png'


export default async function Home() {
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