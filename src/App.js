import MainLayout from "./Components/MainLayout";
import HomePage from "./Pages/HomePage";
// import GamersPage from "./Pages/GamersPage";

function App() {
  return (
    <div>
      {/* <GamersPage /> */}
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;