import React from "react";
import Logo from "../../components/Logo";

import RegistrationForm from "@/components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/3b65/773e/9f406cb994dbc16b049fc6a6a3382d6c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGQ70qgdBrAmjq8XM9yvgEpriMg7zqedtJORNzfzpqDGqhj0GQvKG7~BxBZyiFIlwBxOFAxDoraZwE88E64ssbHFmloagn4syVeIWH-L1btavZBO2YXxKVkR5NnJrDtFzVJz5a6gLZHXXb9LjCHMH7sLOkB7nI7htCfRGIVq5ji82P55eb56LPvpI~a9uUJuo9eJ~ljLUkmEH7yu5ruFfT9i4p-AyM58rVo9rukXHaoSIj~c9g91Ti--mLNXvFwPVyeHOsMY3ZDSF36nqfZhaoTVx6tRJATDkkFYuw54L8VHvfmPzlv3J~Kn2iMdJppaaaYQkbttiIF6Z1h2KY2t7w__")',
      }}
    >
      <div className="absolute bg-white bg-opacity-90 w-full max-w-screen h-screen">
        <div className="flex mx-auto items-start justify-between">
          {/* Left Column */}
          <div
            className="w-1/2 h-screen rounded-r-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(8, 63, 70, 1)" }}
          >
            <div className="px-5 md:px-10 md:w-2/3 w-full">
              <h1 className="text-4xl text-white font-bold text-start my-8">
                Register Now !
              </h1>

              <RegistrationForm />

              <div className="px-2">
                <div className="fixed bottom-20 text-white ">
                  
                  <h1 className="text-md underline"> {"<"} Back to login</h1>                 
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-1/2 h-screen  ml-20 flex items-center justify-start">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
