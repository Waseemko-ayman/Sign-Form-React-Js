import { useThemeContext } from "./Context/ThemeContext";
import Router from "./router";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className="App" data-theme={theme}>
      <Router />
    </div>
  );
}

export default App;
