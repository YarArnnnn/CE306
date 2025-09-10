import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import type { UserData } from "./types";

const users: UserData[] = [
  {
    id: 1,
    name: "Tum",
    email: "TumFatherOfTitle@gmail.com.",
    isOnline: true,
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Beginner" },
    ],
  },
  {
    id: 2,
    name: "T",
    email: "TeeFaterOfGus@gmail.com",
    isOnline: false,
    skills: [{ name: "Node.js", level: "Advanced" }],
  },
  {
    id: 3,
    name: "AiAuanBoss",
    email: "FanIBossDoneGUU@gmail.com",
    isOnline: true,
    skills: [
      { name: "HTML" },
      { name: "CSS", level: "Intermediate" },
    ],
  },
];

function App() {
  const handleViewDetails = (id: string | number) => {
    alert(`Viewing details for user ID: ${id}`);
  };

  return (
    <div style={{ padding: 32, background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>User Profile Cards</h1>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {users.map((u) => (
          <UserProfileCard key={u.id} user={u} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
}

export default App;
