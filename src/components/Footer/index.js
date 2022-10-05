import Disclosure from "../Disclosure";
import React from "react";
import Button from "../Button";

const socials = ["ig", "fb", "tw", "li", "yb"];
const moreLinks = [
  { id: "advertiser", content: "Advertising Terms and Conditions" },
  { id: "platform", content: "Platform Terms and Conditions" },
  { id: "policy", content: "Privacy Policy" },
];

export default function index({ data }) {
  return (
    <footer>
      <div className="px-4 py-6 flex flex-col lg:px-[60px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-[40px] lg:pb-6">
          {/* logo and contact */}
          <div className="flex-1">
            <img
              src="/images/footer-logo.png"
              className="w-[150px] lg:w-[300px]"
            />
            <div className="flex flex-col gap-y-4 mt-4">
              <div className="flex items-center">
                <img src="/images/location.png" className="w-4 h-4" />
                <p className="flex-1 text-xs text-blackText text-center">
                  71 Ayer Rajah Crescent, #06-14, Singapore 139951
                </p>
              </div>
              <div className="flex items-center">
                <img src="/images/phone.png" className="w-4 h-4" />
                <p className="flex-1 text-xs text-blackText text-center">
                  +65 8808 7905
                </p>
              </div>
              <div className="flex items-center">
                <img src="/images/email.png" className="w-4 h-4" />
                <p className="flex-1 text-xs text-blackText text-center">
                  hello@carbuyer.com.sg
                </p>
              </div>
            </div>
          </div>
          {/* disclosures/ urls */}
          <div className="mt-6 flex-1">
            <div className="lg:hidden">
              {data.map((d) => (
                <Disclosure key={d.id} item={d} />
              ))}
            </div>
            <div className="hidden lg:flex lg:gap-x-[30px]">
              {data.map((d) => (
                <div key={d.id} className="">
                  <label className="font-semibold">{d.label}</label>
                  <ul className="flex flex-col gap-y-3 mt-3 text-lightGray">
                    {d.subs.map((s) => (
                      <li>
                        <a href={`#${s}`}>{s}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* socials */}
          <div className="mt-6 flex-1">
            <p className="text-sm text-blackText">
              Get the <span className="text-buttonRed">latest</span> automotive
              news sent to your inbox!
            </p>
            <div className="mt-2 w-full flex">
              <input
                name="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-tl-md rounded-bl-md h-10 text-sm px-4"
              />
              <Button
                type="red"
                label="Subscribe"
                className="rounded-none rounded-tr-md rounded-br-md px-4 py-2"
              />
            </div>

            <div className="mt-6 flex items-center">
              <p className="text-sm text-blackText">Follow us</p>
              <div className="flex items-center gap-x-2 ml-8">
                {socials.map((s) => (
                  <img key={s} src={`/images/${s}.png`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* others */}
        <div className="lg:border-t border-gray-200 lg:py-6 lg:flex justify-between">
          <div>
            <ul className="hidden lg:flex items-center gap-x-4">
              {moreLinks.map((l) => (
                <li key={l.id} className="text-sm text-blackText">
                  <a href={`#${l.id}`}> {l.content}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-2 mt-6">
              <img src="/images/ucars.png" className="h-4 lg:" />
              <span className="text-[10px] text-lightGray text-center lg:text-sm">
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                owned by UCARS Pte Ltd
              </span>
            </div>
          </div>
          <div className="hidden lg:block text-sm text-popoverText">
            © 2022. All rights reserved.
          </div>
        </div>
      </div>
      <div className="bg-blackText h-12 text-white text-sm flex items-center justify-center lg:hidden">
        © 2022. All rights reserved.
      </div>
    </footer>
  );
}
