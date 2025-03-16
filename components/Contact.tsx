import Link from "next/link";
import React from "react";
import Heading from "./Common/Heading";

const Contact = () => {
  return (
    <section id="contact" className="py-[20px] sm:py-[50px] md:py-[80px]">
      <div className="px-[20px] sm:px-[50px]  mx-auto max-w-[1200px]">
        <Heading text={"CONTACT / KONTAKT"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="text-[21px] font-[300] leading-[1.4] text-[#626262]">
            <div className="mb-[20px]">
              <p className="flex items-center gap-2">
                <span className="font-[700]">Phone: </span>
                <Link
                  href={"tel:+43 1 92 92 150"}
                  target="_blank"
                  className="text-[#626262]"
                >
                  {" "}
                  <span>+43 1 92 92 150</span>
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-[700]">Email: </span>
                <Link
                  href={"mailto:office@alibarbershop.at"}
                  target="_blank"
                  className="text-[#626262]"
                >
                  {" "}
                  <span>office@alibarbershop.at</span>
                </Link>
              </p>
            </div>
            <div className="mb-[20px] flex flex-col">
              <p className="font-[700]">Open Hours / Öffnungszeiten:</p>
              <p>MONDAY-FRIDAY / MONTAG-FREITAG: 09:00 – 19:00</p>
              <p>SATURDAY / SAMSTAG: 8:00 – 18:00</p>
              <p>SUNDAY / SONNTAG: CLOSED / GESCHLOSSEN</p>
            </div>
            <div className="mb-[20px] flex flex-col">
              <p className="font-[700]">Address / Anschrift:</p>
              <p>Ali Barber Shop</p>
              <p>Amerlingstraße 4</p>
              <p>1060 Vienna</p>
              <Link
                href={"https://maps.app.goo.gl/nWsY8XJ8piX3tjur9"}
                className="font-[700]"
              >
                See Google Map
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 mb-[10px]">
            <div className="w-full  flex flex-col text-[#626262]">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name*"
                  className="border-[1px] border-[#dfdfdf] min-h-[42px] focus:border-[#989898] transition-all duration-500 ease-in-out tracking-[1px] text-[11px] outline-none py-[8px] px-[15px] mb-[20px] w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email*"
                  className="border-[1px] border-[#dfdfdf] min-h-[42px] focus:border-[#989898] transition-all duration-500 ease-in-out tracking-[1px] text-[11px] outline-none py-[8px] px-[15px] mb-[20px] w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  className="border-[1px] border-[#dfdfdf] min-h-[42px] focus:border-[#989898] transition-all duration-500 ease-in-out tracking-[1px] text-[11px] outline-none py-[8px] px-[15px] mb-[20px] w-full"
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  id="messagebox"
                  placeholder="Message / Nachricht*"
                  className="border-[1px] border-[#dfdfdf] min-h-[160px] resize-none focus:border-[#989898] transition-all duration-500 ease-in-out tracking-[1px] text-[11px] outline-none py-[8px] px-[15px] mb-[20px] w-full"
                ></textarea>
              </div>
              <div>
                <p className="text-[13px] leading-[23px]">
                  <span className="font-[700] text-red-600">Attention!</span>{" "}
                  Booking appointments via contact form{" "}
                  <span className="font-[700] ">is not possible!</span> /
                  Terminvereinbarungen sind über das Kontaktformular{" "}
                  <span className="font-[700] ">nicht möglich!</span>{" "}
                </p>
              </div>
              <div className="">
                <button className="bg-black border-[2px] hover:bg-transparent hover:text-black transition-all ease-in-out duration-500 mt-4 border-black text-white pt-[7px] pb-[8px] px-[20px] uppercase tracking-[1px] font-[600] text-[14px] leading-[1.4] font-roboto cursor-pointer">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
