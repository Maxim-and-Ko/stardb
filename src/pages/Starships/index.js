import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStarships } from "../../api";
import styles from "../styles.module.css";
import Image from "../../components/Image";

function Starships() {
  const [inputOne, setInputOne] = useState('');
  const [starships, setStarships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data);
    });
  }, []);

  return (
    <div className={styles.mainbody}>
      <h1 className={styles.headText}>Starships</h1> 
      <input className={styles.searchInp} placeholder="Search name" type="text" value={inputOne} onChange={(event) => setInputOne(event.target.value)}/>
      <div className={styles.starslist}>

      
        {starships.map((starship) => {
          if (starship.name.includes(inputOne))
          {
            const id = starship.url.split("/").slice(-2)[0];
        
        return (
          <div
            key={id}
            className={styles.card}
            onClick={() => {
              navigate(`/starships/${id}`);
            }}
          >
            <Image id={id} />
            <div className={styles.boldText}><span className={styles.grayText}>Cost:</span> ${starship.cost_in_credits}</div>
            <div className={styles.boldText}><span className={styles.grayText}>Name:</span> {starship.name}</div>
          </div>
        );
          }
        
      })}
        </div>
    </div>
  );
}

export default Starships;
