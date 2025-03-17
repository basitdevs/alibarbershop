"use client";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import default styles

const DetailsForm = () => {
  const [value, setValue] = useState("");

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px] mb-[20px] ">
        <div className=" flex flex-col w-full">
          <label
            htmlFor=""
            className="text-[#3f3f3f] mb-[5px] text-[14px]  font-[700]"
          >
            First Name
          </label>
          <input
            type="text"
            className=" py-[6px] w-full outline-none px-[7px] text-[14px] border border-[#c0c0c0] rounded-[4px]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor=""
            className="text-[#3f3f3f] mb-[5px] text-[14px]  font-[700]"
          >
            Last Name
          </label>
          <input
            type="text"
            className=" py-[6px] w-full outline-none px-[7px] text-[14px] border border-[#c0c0c0] rounded-[4px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px] mb-[20px] ">
        <div className="relative flex flex-col w-full">
          <label
            htmlFor=""
            className="text-[#3f3f3f] mb-[5px] text-[14px]  font-[700]"
          >
            Tel
          </label>
          <div
            className={` py-[6px] w-full outline-none px-[7px] text-[14px] border border-[#c0c0c0] rounded-[4px]`}
          >
            <PhoneInput
              international
              defaultCountry="AT"
              value={value}
              onChange={(val) => setValue(val || "")}
              placeholder=" "
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor=""
            className="text-[#3f3f3f] mb-[5px] text-[14px]  font-[700]"
          >
            Email
          </label>
          <input
            type="email"
            className=" py-[6px] w-full outline-none px-[7px] text-[14px] border border-[#c0c0c0] rounded-[4px]"
          />
        </div>
      </div>
      <div className="mb-[20px] ">
        <div className="relative flex flex-col w-full">
          <label
            htmlFor=""
            className="text-[#3f3f3f] mb-[5px] text-[14px]  font-[700]"
          >
            Message (optional)
          </label>
          <textarea
            name=""
            id=""
            className=" py-[6px] w-full outline-none resize-none h-[160px] px-[7px] text-[14px] border border-[#c0c0c0] rounded-[4px]"
          ></textarea>
        </div>
      </div>
      <label className="font-[700] !leading-[1] text-[14px] md:text-[16px] text-black">
        By clicking on next, you agree to the{" "}
        <Link href="#" className="text-[#626262]">
          Terms and Conditions
        </Link>{" "}
        of Ali Barber Shop.
      </label>
    </div>
  );
};

export default DetailsForm;
