import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { name: "HTML+CSS", emoji: "👶", bgColor: "red" },
  { name: "JavaScript", emoji: "💪", bgColor: "yellow" },
  { name: "Web Design", emoji: "👍", bgColor: "blue" },
  { name: "Tailwind", emoji: "💪", bgColor: "green" },
  { name: "Ruby on Rails", emoji: "💪", bgColor: "purple" },
];

function App() {
  return (
    <div className="card">
      <Avatar image="/logo512.png" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ image }) {
  return <img src={image} alt="avatar" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Madelyn Romero</h1>
      <p>
        jfsdjfbqoweinf hiowqodqw. jrioe nuoqd aoisjn irejn oodn niri qoijd.
        ifoebs ajduforep nieoed doifon pjofjofnd. oijef voj. we edf
        fdiohfowfoqnwe.
      </p>
    </div>
  );
}

function Skill({ name, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.name} emoji={skill.emoji} color={skill.bgColor} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
