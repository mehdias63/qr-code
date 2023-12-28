import React from "react";

export default function qrcode() {
  return (
    <div>
      <div className=" bg-white w-[20rem] h-[31.0625rem] p-4 rounded-lg">
        <div className="">
          <img src="../images/image-qr-code.png" className=" rounded-lg" />
        </div>
        <h1 className="font-bold text-[1.375rem] ml-4">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7D889E] text-[0.9375rem] p-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
