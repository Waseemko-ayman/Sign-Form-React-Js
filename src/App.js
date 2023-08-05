import MainLayout from "./Components/MainLayout";
import { ROLES } from "./Constants";
import { useAuthContext } from "./Context/AuthContext";
import { useThemeContext } from "./Context/ThemeContext";
import GamersPage from "./Pages/GamersPage";
import HomePage from "./Pages/HomePage";

function App() {
  const { role } = useAuthContext();
  const {theme} = useThemeContext();
  return (
    <div className="App" data-theme={theme}>
      {role === ROLES.GUEST ? (
        <GamersPage />
      ) : (
        <MainLayout>
          <HomePage />
        </MainLayout> 
      )}
    </div>
  );
}

export default App;