import React from "react";
export function Footer() {
return (
<footer>
    <ul className="nav justify-content-center border-top mt-4 pb-3">
      <li className="nav-item"> <a className="nav-link px-2 text-muted">Samir Rodriguez</a></li>
      <li className="nav-item"><a href="https://github.com/samirr2502/startup" className="nav-link px-2 text-muted">Github</a></li>
    </ul>
    <p className="text-center text-muted">&copy; 2024 C, Inc</p>
  </footer>
);
}