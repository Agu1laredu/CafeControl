import { AiTwotoneHome } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import Link from "next/link";
import { AuthButtonServer } from "../auth-button-server";

export default function Sidebar() {


    return (
        <div className="lg:w-64 lg:flex-none lg:order-1">
            <nav className="flex-1 overflow-y-auto">
                <ul className="p-2 space-y-2">
                    <Link href="/">
                        <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                            <AiTwotoneHome className="w-5 h-5 mr-3" />
                            <span>INICIO</span>
                        </li>
                    </Link>
                    <Link href="/facturacion">
                        <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                            <FaMoneyCheckDollar className="w-5 h-5 mr-3" />
                            <span>FACTURACIÓN</span>
                        </li>
                    </Link>
                    <Link href="/inventario">
                        <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                            <MdInventory className="w-5 h-5 mr-3" />
                            <span>INVENTARIO</span>
                        </li>
                    </Link>
                    <Link href="/reportes">
                        <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                            <TbReportSearch className="w-5 h-5 mr-3" />
                            <span>REPORTES</span>
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className="p-4">
                <AuthButtonServer />
            </div>
        </div>
    )
}
