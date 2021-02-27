import React from 'react';
import AllChats from './AllChats';
import LeftLogos from './LeftLogos';
import LeftSidebar from './LeftSidebar';
import LongHeader from './LongHeader';
import LSFooter from './LS_Footer';
import MessageInput from './MessageInput';
import RightSidebar from './RightSidebar';

const App = () => {
  return (
    <section className="h-screen flex overflow-hidden">
      <div className="left-logos flex flex-col justify-start items-center py-3">
        {/* Import LOGOS here! */}
        <LeftLogos />
      </div>

      <div className="w-sm-screen bg-gray-500 flex flex-col justify-between">
        <div
          style={{ background: '#2f3136' }}
          className="d-header w-full cursor-pointer flex justify-center items-center py-2"
        >
          <img
            id="verified"
            className="w-5 ml-6 mr-1"
            src="https://img.icons8.com/fluent/48/000000/verified-account.png"
            alt="verified"
            title="verified"
          />
          <span style={{ fontWeight: '500' }} className="tracking-wide">
            Tailwind CSS
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="transparent"
            className="w-4 h-4 ml-auto mr-3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="left-sidebar w-full text-sm px-3">
          {/* Import Siderbar here!*/}
          <LeftSidebar />
        </div>

        <div
          style={{ background: '#292b2f' }}
          className="d-footer flex justify-between items-center bg-gray-200 w-full"
        >
          {/* Left Sidebar Footer Import here! */}
          <LSFooter />
        </div>
      </div>

      <div className="bg-gray-800 w-full">
        <div
          style={{ background: '#36393f' }}
          className="d-header flex justify-around items-center w-full"
        >
          <LongHeader />
        </div>

        <section className="messages-section w-full flex justify-between">
          <div className="flex w-full flex-col justify-between">
            <div className="messages-main w-full">
              {/* Chating all messages Import here! */}
              <AllChats />
            </div>

            <div className="bg-white w-full messages-input">
              {/* Message input field here! */}
              <MessageInput />
            </div>
          </div>

          <div className="w-sm-screen bg-gray-500 overflow-y-auto right-sidebar p-7">
            <RightSidebar />
          </div>
        </section>
      </div>
    </section>
  );
};

export default App;
