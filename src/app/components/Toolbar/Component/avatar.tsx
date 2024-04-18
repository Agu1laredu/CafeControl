
import React from 'react';
import { Avatar } from 'primereact/avatar';

export default function CustomDemo() {

    return (
        <div className="flex align-items-center  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer  ">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle"  />
                <span className="font-bold text-bluegray-50 ml-4">Mariela Saez</span>
        </div>
    );
}
        