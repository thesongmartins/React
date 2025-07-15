import Search from "./Search";
import Logo from "./Logo";
import Numresults from "./Numresults";

const Navbar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <Numresults movies={movies} />
    </nav>
  );
};

export default Navbar;
