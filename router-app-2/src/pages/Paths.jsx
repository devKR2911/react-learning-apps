import React from "react";
import { Link, Outlet } from "react-router-dom";

function Paths() {
  return (
    <div>
      <h1>Paths Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        praesentium commodi exercitationem laborum cum ipsum vero, eveniet
        voluptatibus suscipit iusto molestias eum et corporis ullam atque quas
        quisquam, labore adipisci?
      </p>
      <div>
        <Link to="frontend">
          <button>Frontend</button>
        </Link>
        <Link to="backend">
          <button>Backend</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Paths;
