import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <DataContext.Provider value={userData}>
    < ProfilePage />
    </DataContext.Provider>
  )
}

export default App;