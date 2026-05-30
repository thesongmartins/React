<<<<<<< HEAD
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();

=======
import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
>>>>>>> d416441cbe365b2a986f8471e7819c74b33293ba
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position: {lat} {lng}
      </h1>
    </div>
  );
}
export default Map;
