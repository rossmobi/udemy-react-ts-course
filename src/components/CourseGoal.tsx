import { type PropsWithChildren } from "react";

interface Goal {
  title: string;
  description: string;
}

// Object destructuring syntax example
export default function CourseGoal({title, description}: PropsWithChildren<Goal>) {

  return (<article>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <button>Delete</button>
  </article>);
}