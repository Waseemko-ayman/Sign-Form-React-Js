import MainLayout from "./Components/MainLayout";
import { useThemeContext } from "./Context/ThemeContext";
import HomePage from "./Pages/HomePage";
import Router from "./router";

function App() {
  const { theme } = useThemeContext();
  return (
    <div className="App" data-theme={theme}>
      {/* <Router /> */}
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;
