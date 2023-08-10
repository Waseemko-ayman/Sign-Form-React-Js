import { useThemeContext } from "./Context/ThemeContext";
import useAuth from "./Hook/useAuth";
import Router from "./router";

function App() {
  const { theme } = useThemeContext();
  const { isLoading } = useAuth();

  return (
    <div className="App" data-theme={theme}>
      {isLoading ? (
        <h1
          style={{
            textAlign: "center",
            margin: 20,
            color: "white",
            fontFamily: "Gilroy, sans-serif",
          }}
        >
          Loading...
        </h1>
      ) : (
        <Router />
      )}
      {/* <Router /> */}
    </div>
  );
}

export default App;
