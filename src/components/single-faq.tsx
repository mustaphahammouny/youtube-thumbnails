"use client";

import { useState } from "react";

const SingleFaq = (props: {
  children: React.ReactNode;
  index: number;
  question: string;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-4 rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
      <h2 className="mb-0" id={`heading-${props.index}`}>
        <button
          onClick={() => setVisible(!visible)}
          className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 font-bold text-left text-lg text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white"
          type="button"
          aria-controls={`collapse-${props.index}`}
        >
          {props.question}
          <span 
          className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300 ${visible ? "rotate-[-180deg]" : "rotate-0"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`collapse-${props.index}`}
        className={visible ? "show" : "hidden"}
        aria-labelledby={`heading-${props.index}`}
      >
        <div className="px-5 py-4 text-left">{props.children}</div>
      </div>
    </div>
  );
};

export default SingleFaq;
