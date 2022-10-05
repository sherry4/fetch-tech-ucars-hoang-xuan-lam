import React from "react";

export default function index() {
  return (
    <header className="hidden lg:flex px-[60px] py-4 justify-between">
      <div className="flex">
        <div className="flex items-start gap-x-2 pr-6 border-r border-gray-200">
          <img src="/images/location.png" className="w-5 h-5" />
          <div>
            <p className="text-sm text-blackText">
              71 Ayer Rajah Crescent, #06-14
            </p>
            <p className="text-sm text-blackText">Singapore 139951</p>
          </div>
        </div>
        <div className="flex items-start gap-x-2 pl-6">
          <img src="/images/email.png" className="w-5 h-5" />
          <div>
            <p className="text-sm text-blackText">Email us at</p>
            <p className="text-sm text-blackText">hello@carbuyer.com.sg</p>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-x-2">
        <img src="/images/phone.png" className="w-5 h-5" />
        <div>
          <p className="text-sm text-blackText">+65 8808 7905</p>
          <p className="text-sm text-blackText">+7 (700) 51 51 518</p>
        </div>
      </div>
    </header>
  );
}
