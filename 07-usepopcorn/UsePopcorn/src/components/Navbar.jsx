import Search from "./Search";
import Logo from "./Logo";
import Numresults from "./Numresults";

const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
};

export default Navbar;

// const Navbar = ({ movies, query, setQuery }) => {
//   return (
//     <nav className="nav-bar">
//       <Logo />
//       <Search query={query} setQuery={setQuery} />
//       <Numresults movies={movies} />
//     </nav>
//   );
// };