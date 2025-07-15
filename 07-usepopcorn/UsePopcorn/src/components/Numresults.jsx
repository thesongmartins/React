const Numresults = ({ movies }) => {
  return (
    <div>
      <p className="num-results">
        Found <strong>{movies ? movies.length : 0}</strong> results
      </p>
    </div>
  );
};

export default Numresults;
