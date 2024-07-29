import { useState } from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
} from "tw-elements-react";

const DropDown = ({ size, setSize }) => {
  return (
    <TEDropdown className="flex justify-center">
      <TEDropdownToggle className="flex items-center whitespace-nowrap border-b-2 border-black w-full ">
        {size}
        <span className="ml-2 [&>svg]:w-5 w-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </TEDropdownToggle>
      <TEDropdownMenu className="w-full">
        <TEDropdownItem preventCloseOnClick>
          <p className="pointer-events-none cursor-auto text-neutral-400 block w-full min-w-[160px] whitespace-nowrap bg-black px-4 py-2 text-sm text-left font-normal hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Normal Sizes
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("S/Normal");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            S
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("M/Normal");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            M
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("L/Normal");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            L
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("XL/Normal");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            XL
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("XXL/Normal");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            XXL
          </p>
        </TEDropdownItem>

        <TEDropdownItem preventCloseOnClick>
          <p className="pointer-events-none cursor-auto text-neutral-400 block w-full min-w-[160px] whitespace-nowrap bg-black px-4 py-2 text-sm text-left font-normal hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Short Sizes
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("S/Short");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            S
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("M/Short");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            M
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("L/Short");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            L
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("XL/Short");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            XL
          </p>
        </TEDropdownItem>
        <TEDropdownItem className="text-black">
          <p
            onClick={() => {
              setSize("XXL/Short");
            }}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap p-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            XXL
          </p>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
};

export default DropDown;
