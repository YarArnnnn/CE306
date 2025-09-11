import React from "react";
import SkillTag from "./SkillTag";
import type { UserData } from "./types";

interface Props {
  user: UserData;
  onViewDetails: (userId: string | number) => void;
}

const card: React.CSSProperties = {
  border: "1px solid #000000ff",
  borderRadius: 12,
  padding: 16,
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
  maxWidth: 560,
};

const avatarStyle: React.CSSProperties = {
  width: 72,
  height: 72,
  borderRadius: "50%",
  objectFit: "cover",
  background: "#515b70ff",
};

const dot = (on: boolean): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: on ? "#22c55e" : "#9ca3af",
  display: "inline-block",
  marginRight: 6,
});

const UserProfileCard = ({ user, onViewDetails }: Props) => {
  const placeholder =
    "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name);

  return (
    <div style={card}>
      <img
        src={user.avatarUrl || placeholder}
        alt={user.name}
        style={avatarStyle}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 4px" }}>{user.name}</h3>
        <p style={{ margin: "0 0 8px", }}>{user.email}</p>

        <p style={{ margin: "0 0 12px" }}>
          <span style={dot(user.isOnline)} /> {user.isOnline ? "ออนไลน์" : "ออฟไลน์"}
        </p>

        <div style={{ marginBottom: 12 }}>
          {user.skills.map((s, i) => (
            <SkillTag key={i} name={s.name} level={s.level} />
          ))}
        </div>

        <button
          onClick={() => onViewDetails(user.id)}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #81848bff",
            background: "white",
            cursor: "pointer",
          }}
        >
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
    