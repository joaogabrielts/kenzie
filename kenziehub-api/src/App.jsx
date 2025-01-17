

import { UserProvider } from "./providers/UserTech";
import { TechProvider } from "./providers/TechContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;





