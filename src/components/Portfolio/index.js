import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'memory-game',
      description: 'HTML, CSS & JS',
      link: "https://angadbatth.github.io/memory-game/",
      repo: "https://github.com/AngadBatth/memory-game"
    },
    {
      name: 'book-wise',
      description: 'Node, Express, MySQL & bcrypt',
      link: "https://mighty-garden-26521.herokuapp.com/",
      repo: "https://github.com/Saloni0412/BookWise"
    },
    {
      name: 'text-editor',
      description: 'Node, Webpack, IndexedDB, Express & Babel',
      link: "https://github.com/AngadBatth/text-editor",
      repo: "https://github.com/AngadBatth/text-editor"
    },
    {
      name: 'note-taker',
      description: 'Node & Express',
      link: "https://lit-peak-35982.herokuapp.com/",
      repo: "https://github.com/AngadBatth/note-taker"
    },
    {
      name: 'password-gen',
      description: 'HTML, CSS & JS',
      link: "https://angadbatth.github.io/random-password-generator/",
      repo: "https://github.com/AngadBatth/random-password-generator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;