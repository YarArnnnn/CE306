import React from "react";
import type { Skill } from "./types";

const pill: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: 999,
  padding: "4px 10px",
  marginRight: 6,
  marginBottom: 6,
  display: "inline-block",
  fontSize: 13,
};

const SkillTag = ({ name, level }: Skill) => {
  return <span style={pill}>{level ? `${name} (${level})` : name}</span>;
};

export default SkillTag;
