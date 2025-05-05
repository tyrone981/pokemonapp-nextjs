"use client"
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { useState } from "react";
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import { toastConfig } from "@/utils/constants";
import emailjs from '@emailjs/browser';


const Page = () => {
    
    const form = useRef();
    const handleSendEmail =()=>{
        emailjs
      .sendForm('service_026tpgc', 'template_9si7r5p', form.current, {
        publicKey: 'nmp7Xsi-qtJWHRBX_',
      })
      .then(
        () => {
            toast.success('Email sent successfully!!', toastConfig)
        },
        (error) => {
            toast.error('Something went wrong', toastConfig)
        },
      );
    }
    return (
        <>
            <NavbarComponent />
            <ToastContainer />
            <div className="h-screen flex justify-center items-center py-13 px-40 ">
              <section className='bg-gray-100 flex gap-5 justify-center items-center mt-15 rounded-lg backdrop-blur-md shadow-2xl h-[95%]'>

            <div className="bg-blue-800 text-gray-200 py-10 px-8  w-90 rounded-md h-full relative">

                <div className="w-56 h-56 absolute  rounded-full z-0 left-[20%] top-[1%] bg-gradient-to-r from-blue-800 to-purple-800"></div>
                <div className="w-15 h-15 absolute  rounded-full z-0 right-[-.1%] top-[2%] bg-gradient-to-l from-blue-800 to-purple-800"></div>
                <div className="w-46 h-46 absolute  rounded-full z-0 left-[5%] top-[60%] bg-gradient-to-l from-blue-800 to-purple-800"></div>
                <div className="w-36 h-36 absolute  rounded-full z-0 left-[60%] top-[45%] bg-gradient-to-r from-blue-800 to-purple-800"></div>

                <h1 className="text-4xl relative z-[1px] text-white">Reach Out</h1>
                <p className="py-5 w-90 relative z-[1px]">We provide solutions to your problems.<br />Don't worry, we won't span.</p>

                <div className="flex flex-col gap-8 justify-left relative z-[1px]">
                    <div className="flex gap-3 items-center">
                        <MdLocationPin  size={30} className=""/>
                        <p><span>Adress:</span> Plo Alto, Mountain View, 303030</p>
                    </div>

                    <div  className="flex gap-3 items-center">
                        <RiMailSendFill  size={23} className=""/>
                        <p><span>Email:</span> pokemon@yahoo.com</p>
                    </div>

                    <div  className="flex gap-3 items-center">
                        <MdPhone  size={23} className=""/>
                        <p><span>Phone:</span> (+237) 670 167 299</p>
                    </div>
                </div>
            </div>

            <form ref={form} className="h-full py-10 px-5">
                <h1 className="py-2 text-2xl">Send us a message</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-300">
                        <label className="pl-4 py-2 text-sm">First Name</label>
                        <input name="firstName" className="pl-4 outline-none text-gray-700 rounded-md" type='text' placeholder='Anna' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-300 ">
                        <label className="pl-4 py-2 text-sm">Last Name</label>
                        <input name="lastName" className="pl-4 outline-none text-gray-700" type='text' placeholder='Eyong' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-300">
                        <label className="pl-4 py-2 text-sm">Email</label>
                        <input name="email" className="pl-4 outline-none text-gray-700" type='text' placeholder='example@gmail.com' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-300">
                        <label className="pl-4 py-2 text-sm">Phone</label>
                        <input name="phone" className="pl-4 outline-none text-gray-700" type='text' placeholder='+237 670 167 299' />
                    </div>

                </div>

                <div className="flex flex-col shadow-md py-2 roumded-md border-1 border-gray-300 mt-4">
                    <label className="pl-4 py-4 text-sm">Write your message here</label>
                    <textarea name="message" className="pl-4 outline-none text-gray-700" placeholder='Message'></textarea>
                </div>
                    <button type="button" onClick={()=>handleSendEmail()} className="bg-purple-800 mt-4 text-white py-3 px-5 rounded-lg cursor-pointer hover:bg-purple-500">Send Message</button>
            </form>

        </section>
</div>
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; 2023 Pokemon. All rights reserved.</p>
        </footer>
        
        </>
    )
}

export default Page;