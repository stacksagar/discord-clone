import React from 'react';

const LeftSidebar = () => {
  const [lsToggle, setLsToggle] = React.useState([true, false, false, true]);
  return (
    <>
      <p className="user-add flex mt-4 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 mr-2"
          viewBox="0 0 20 20"
          fill="#777777"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        welcome
      </p>

      <p className="user-add flex mt-2 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 mr-2"
          viewBox="0 0 20 20"
          fill="#777777"
        >
          <path
            fillRule="evenodd"
            d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
            clipRule="evenodd"
          />
        </svg>
        announcements
      </p>

      <p
        onClick={() =>
          setLsToggle((prev) => [!prev[0], prev[1], prev[2], prev[3]])
        }
        className={`${
          lsToggle[0] && 'active'
        } category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}
      >
        TAILWIND CSS
      </p>
      {lsToggle[0] && (
        <div>
          <p className="cursor-pointer user-add user-add-hash user-active">
            general
          </p>
          <p className="cursor-pointer user-add user-add-hash">plugins</p>
          <p className="cursor-pointer user-add user-add-hash">help</p>
          <p className="cursor-pointer user-add user-add-hash">internals</p>
        </div>
      )}

      <p
        onClick={() =>
          setLsToggle((prev) => [prev[0], !prev[1], prev[2], prev[3]])
        }
        className={`${
          lsToggle[1] && 'active'
        } category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}
      >
        TAILWIND LABS
      </p>

      {lsToggle[1] && (
        <div>
          <p className="cursor-pointer user-add user-add-hash">heroicons</p>
        </div>
      )}

      <p
        onClick={() =>
          setLsToggle((prev) => [prev[0], prev[1], !prev[2], prev[3]])
        }
        className={`${
          lsToggle[2] && 'active'
        } category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}
      >
        OFF TOPIC
      </p>

      {lsToggle[2] && (
        <div>
          <p className="cursor-pointer user-add user-add-hash">random</p>
        </div>
      )}

      <p
        onClick={() =>
          setLsToggle((prev) => [prev[0], prev[1], prev[2], !prev[3]])
        }
        className={`${
          lsToggle[3] && 'active'
        } category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}
      >
        COMMUNITY
      </p>
      {lsToggle[3] && (
        <div>
          <p className="cursor-pointer user-add user-add-hash">jobs</p>
          <p className="cursor-pointer user-add user-add-hash">showcase</p>
          <p className="cursor-pointer user-add user-add-hash">bot</p>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
