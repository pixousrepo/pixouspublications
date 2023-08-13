import React from "react";

const SiteFooter = () => {
  return (
    <footer>
      <div className="bg-neutral-100">
        <div className="py-7 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="text-center py-5 border-b-gray-300 border-b-[1px] sm:border-b-0 w-full sm:w-auto flex justify-center">
            <img
              className="w-[150px] sm:w-[170px]"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <div className="py-5 text-gray-500">
            <p>Pixous publication</p>
            <p>TC 31/298</p>
            <p>Building No: 170, Nr. Airport domestic terminal,</p>
            <p>Trivandrum, Kerala 695024</p>
            <p>Email: editor@pixouspublication.com</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="py-8 text-sm text-center">
            Pixous Publications © 2023. All rights reservedd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
