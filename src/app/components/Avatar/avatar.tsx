'use client'
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';

export default function CustomDemo() {
    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50">Amy Elsner</span>
            </div>
        </React.Fragment>
    );

    return (
        <div className="card p-2 bg-blue-600 border-r text-white shadow-2 rounded-md border cursor-pointer border-gray-600" style={{ borderRadius: '3rem' }}>
            <Toolbar end={endContent} className=" shadow-2 justify-center" />
        </div>
    );
}
