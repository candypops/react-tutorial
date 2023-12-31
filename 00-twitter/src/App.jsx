import "./App.css";
import "./index.css";

import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "pheralb",
      name: "Pablo H.",
      isFollowing: false,
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      isFollowing: true,
    },
    {
      userName: "TMChein",
      name: "Tomas",
      isFollowing: false,
    },
  ];
  return (
    <>
      <TwitterFollowCard name="Karol G" userName="karolg" />
      <TwitterFollowCard name="Becky G" userName="beckyg" />
      <TwitterFollowCard name="Dominos" userName="dominos" />

      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            name={name}
            userName={userName}
            isFollowing={isFollowing}
          />
        );
      })}
    </>
  );
}

export default App;
