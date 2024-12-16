import { PostProvider } from "./providers/PostTech";
import { UserProvider } from "./providers/UserTechContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <PostProvider>
          <RoutesMain />
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;





