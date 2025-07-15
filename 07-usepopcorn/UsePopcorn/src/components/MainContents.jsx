import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const MainContents = ({ movies, loading }) => {
  return (
    <main className="main">
      <ListBox movies={movies} loading={loading} />
      <WatchedBox />
    </main>
  );
};

export default MainContents;
