'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { BsEmojiLaughingFill } from "react-icons/bs";


export default function WithoutModalDemo() {
    const [visible, setVisible] = useState<boolean>(false);


    return (
        <div className="card flex justify-content-center">
            <Button icon="pi pi-external-link" onClick={() => setVisible(true)}>
                <div className="flex align-items-center  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer  ">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                    <span className="font-bold text-bluegray-50 ml-4">Mariela Saez</span>
                </div>
            </Button>
            <Dialog className="flex align-items-center  bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-5 cursor-pointer" visible={visible} modal={false} style={{ width: '50%' }} onHide={() => setVisible(false)}>
                <div className="  ">
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="p-2 space-y-2">
                            {/* <Link className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer" href={""}>
                                <AiTwotoneHome className="w-5 h-5 mr-3" />
                                <span>INICIO</span>
                            </Link> */}
                            <Link href="/">
                                <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                                    <BsEmojiLaughingFill className="w-5 h-5 mr-3" />
                                    <span>PERFIL</span>
                                </li>
                            </Link>
                            <Link href="/facturacion">
                                <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                                    <RiMoneyDollarBoxLine className="w-5 h-5 mr-3" />
                                    <span>FINANZAS</span>
                                </li>
                            </Link>
                            <Link href="/inventario">
                                <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                                    <GiMoneyStack className="w-5 h-5 mr-3" />
                                    <span>PAGOS REALIZADOS </span>
                                </li>
                            </Link>
                            <Link href="/reportes">
                                <li className="font-bold flex items-center pl-4 py-2 text-base hover:bg-blue-700 cursor-pointer">
                                    <HiDocumentReport className="w-5 h-5 mr-3" />
                                    <span>REPORTES CONTABLES</span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </Dialog>
        </div>
    )
}