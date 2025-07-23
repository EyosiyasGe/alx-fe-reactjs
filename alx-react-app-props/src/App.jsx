import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';
function App() {

  return (
    <UserContext.Provider value={UserContext} />
  )
}
export default App;