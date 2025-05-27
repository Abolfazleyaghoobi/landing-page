import React from 'react';
import { HiOutlineChatAlt2, HiOutlineClock, HiOutlineInbox } from 'react-icons/hi';

const HowItWorksSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <p className="text-sm dark:text-gray-100 text-gray-700 mb-2">Three steps. Three minutes.</p>
      <h2 className="text-3xl dark:text-gray-100 font-bold mb-10">Everything should be this easy.</h2>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Step 1 */}
        <div className="flex-1">
          <div className="text-green-500 dark:text-green-300 mb-4">
            <HiOutlineChatAlt2 className="mx-auto h-10 w-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Answer questions</h3>
          <p className="text-gray-700 text-sm dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1">
          <div className="text-orange-500 mb-4 dark:text-orange-300">
            <HiOutlineClock className="mx-auto h-10 w-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Select a quote</h3>
          <p className="text-gray-700 text-sm dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex-1">
          <div className="text-blue-700 mb-4 dark:text-blue-300">
            <HiOutlineInbox className="mx-auto h-10 w-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Get registered</h3>
          <p className="text-gray-700 text-sm dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
