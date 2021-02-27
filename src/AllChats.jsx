import React from 'react';
import AllUsers from './db/fake-users-chats.json';

const AllChats = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers(AllUsers);
  }, []);

  return (
    <div className="flex flex-col">

      {users.map((user, i) => (
        <div key={i} className="flex justify-between mb-4">

          <div className="user-picture">
            <img src={user.picture} alt="refresh" />
          </div>
            
          <div className="user-info">
            <p>
              <a className="text-indigo-300" href={user.picture}>{user.name} </a>
              <small className="text-gray-400 text-xs ml-4">
                Yesterday at {i <= 59 ? `4:${i < 10 ? '0' + i : i}` : `5:${i - 59 < 10 ? '0' + (i - 60) : i - 59}`} AM
              </small>
            </p>
            <p className="text-gray-200 font-sans mb-2">{user.message}</p>
          </div>
            
        </div> 
      ))}
          
    </div>
  );
};

export default AllChats;
