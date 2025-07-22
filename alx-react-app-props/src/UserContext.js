import React , {createContext, useContext } from 'react'

const DataContext = React.createContext();

function UserContext() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <DataContext.Provider value={userData}>
      <ProfilePage />
    </DataContext.Provider>
  );
}
export default UserContext;