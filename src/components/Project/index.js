import React from "react";
import "./style.css";

// This file exports both the ProjectList and ProjectListItem components

export function Project({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ProjectItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
