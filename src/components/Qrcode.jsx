import React from "react";

export default function qrcode() {
  return (
    <div>
      <div className=" bg-white w-[20rem] h-[31.0625rem] p-4 rounded-lg font-out">
        <div className="">
          <img
            src="../images/image-qr-code.png"
            className=" rounded-lg"
            alt="qrcode"
          />
        </div>
        <h1 className=" text-[1.375rem] mt-5 font-bold text-center">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7D889E] text-[0.9375rem] p-3 mx-2 text-center tracking-[0.01175rem]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
