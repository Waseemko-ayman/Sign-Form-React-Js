import MainLayout from "./Components/MainLayout";
import { useThemeContext } from "./Context/ThemeContext";
import HomePage from "./Pages/HomePage";
// import GamersPage from "./Pages/GamersPage";

function App() {
  const {theme} = useThemeContext();
  return (
    <div className="App" data-theme={theme}>
      {/* <GamersPage /> */}
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;