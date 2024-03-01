import './App.css'
import CourseGoal from "./components/CourseGoal.tsx";
import React from "react";

export default function App() {
  return (
    <React.StrictMode>
      <CourseGoal title={"Goal 1"} description={"One of my goals!"}/>
      {/*<CourseGoal/>*/}
      {/*<CourseGoal/>*/}
    </React.StrictMode>
  );
}

