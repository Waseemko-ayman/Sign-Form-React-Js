import { useThemeContext } from "./Context/ThemeContext";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import Router from "./router";

function App() {
  // const { role } = useAuthContext();
  const { theme } = useThemeContext();
  return (
    <div className="App" data-theme={theme}>
      {/* <Router /> */}
      <LogInPage />
    </div>
  );
}

export default App;
