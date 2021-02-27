import React from 'react' 

const RightSidebar = () => { 
  
  const [onlineUsers, setOnlineUsers] = React.useState([])

  React.useEffect(() => { 
    setOnlineUsers([
      {name:"Landon Lary"},
      {name:"Riley Robin"},
      {name:"Franklin Finlayson"},
      {name:"Willard Wahl"},
      {name:"Lowell Landwehr"},
      {name:"Darin Dore"},
      {name:"Jamar Jerrell"},
      {name:"Orville Oehler"},
      {name:"Reginald Rients"},
      {name:"Hollis Hausler"},
    ])
  },[])

  return (
    <>      
      <div className="mb-7">
        <p className="font-500 text-gray-400 text-xs">TAILWIND LABS-1</p>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <div className="online w-7 h-7 mr-3">
            <img className="w-7 h-7 rounded-full ring" src="https://randomuser.me/api/portraits/men/30.jpg" alt="simons" />
          </div>
          <span className="text-gray-400 text-sm">Simonswiss</span>
        </div>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <div className="online mr-3 w-7 h-7">
          <img className="w-7 h-7 rounded-full ring mr-3" src="https://randomuser.me/api/portraits/men/31.jpg" alt="simons" />
          </div>
          <span className="text-gray-400 text-sm">Robin</span>
        </div>
      </div>

      <div className="mb-7">
        <p className="font-500 text-gray-400 text-xs">COMMUNITY MANAGER-1</p>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <img className="w-7 h-7 rounded-full ring mr-3" src="https://randomuser.me/api/portraits/women/86.jpg" alt="simons" />
          <span className="text-gray-400 text-sm">Sophia</span>
        </div>
      </div>

      <div className="mb-7">
        <p className="font-500 text-gray-400 text-xs">CONTRIBUTOR-1</p>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <div className="online mr-3 w-7 h-7">
          <img className="w-7 h-7 rounded-full ring mr-3" src="https://randomuser.me/api/portraits/women/84.jpg" alt="simons" />
        </div>
          <span className="text-gray-400 text-sm">Juleya</span>
        </div>
      </div>

      <div className="mb-7">
        <p className="font-500 text-gray-400 text-xs">PRO-2</p>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <img className="w-7 h-7 rounded-full ring mr-3" src="https://randomuser.me/api/portraits/men/32.jpg" alt="simons" />
          <span className="text-gray-400 text-sm">Alex</span>
        </div>
        <div className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
          <img className="w-7 h-7 rounded-full ring mr-3" src="https://randomuser.me/api/portraits/men/33.jpg" alt="simons" />
          <span className="text-gray-400 text-sm">Andrew.welch</span>
        </div>
      </div>

      <div className="mb-7">
        <p className="font-500 text-gray-400 text-xs">ONLINE-10 <span className="w-2 h-2 rounded-full bg-gray-200 ring ml-2 inline-block"></span></p>

        {onlineUsers.map((user, i) => (
          <div key={i} className="cursor-pointer p-2 rounded mt-1 hover:bg-gray-700 text-gray-300 flex justify-start items-center">
            <div className="online w-7 h-7 mr-3">
              <img className="w-7 h-7 rounded-full ring online" src={`https://randomuser.me/api/portraits/men/4${i}.jpg`} alt="simons" />
            </div>
          <span className="text-gray-400 text-sm">{user.name}</span>
        </div>
        ))}


      </div>
    </>
  )
}

export default RightSidebar
