import React from "react";

import Logo from "../../components/Logo";
import Logout from "@/components/Logout";
import LogoWhite from "@/components/LogoWhite";

const HomePage = () => {
  return (
    <>
      <Logout />
      <div
        className="relative bg-cover bg-center bg-fixed h-screen w-full flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/3b65/773e/9f406cb994dbc16b049fc6a6a3382d6c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGQ70qgdBrAmjq8XM9yvgEpriMg7zqedtJORNzfzpqDGqhj0GQvKG7~BxBZyiFIlwBxOFAxDoraZwE88E64ssbHFmloagn4syVeIWH-L1btavZBO2YXxKVkR5NnJrDtFzVJz5a6gLZHXXb9LjCHMH7sLOkB7nI7htCfRGIVq5ji82P55eb56LPvpI~a9uUJuo9eJ~ljLUkmEH7yu5ruFfT9i4p-AyM58rVo9rukXHaoSIj~c9g91Ti--mLNXvFwPVyeHOsMY3ZDSF36nqfZhaoTVx6tRJATDkkFYuw54L8VHvfmPzlv3J~Kn2iMdJppaaaYQkbttiIF6Z1h2KY2t7w__")',
        }}
      >
        <div className="relative bg-white bg-opacity-85 w-full max-w-screen h-screen">
          <div className="relative bg-main h-full w-full transform rotate-30 rounded-bl-[35%] rounded-tr-[35%]">
            <div className="flex justify-center items-center  ">
              <div className="py-20 w-3/5">
                <LogoWhite />
                <div className="items-center justify-center mt-20">
                  <h1 className="text-start text-3xl font-bold text-white">
                    Welcome,
                  </h1>
                  <p className="text-3xl font-base text-white mt-5">
                    This is where your contacts live. Click the button below to
                    add a new contact
                  </p>
                  <button className="mt-10 px-5 py-2 rounded-full text-base bg-transparent border-2  bg-blue-500 text-white">
                    add your first contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
