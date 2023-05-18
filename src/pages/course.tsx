import React, { useState } from "react";

const Course = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavigateionBar />
    </div>
  );
};

export default Course;

export const NavigateionBar = () => {
  const [user, setUser] = useState<{
    username: string;
    email: string;
  } | null>(null);
  return (
    <nav>
      <ul>{user ? <li>{user.username}</li> : <li>Login with GitHub</li>}</ul>
    </nav>
  );
};
