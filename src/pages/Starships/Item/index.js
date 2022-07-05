import { useParams } from "react-router-dom";
import { getStarshipsItem } from "../../../api";
import { useState, useEffect } from "react";
import Image from "../../../components/Image";
import styles from "../../styles.module.css";

function StarshipsItem() {
  const { id } = useParams();
  const [starship, setStarship] = useState();

  useEffect(() => {
    getStarshipsItem(id).then((data) => {
      setStarship(data);
    });
  }, [id]);

  return (
    <div className={styles.mainbody}>
      
      {starship && (
        <div>
          <h1 className={styles.headText}>{starship.name}</h1> 
        
          <div className={styles.shipInfo}>
            <Image className={styles.shipImg} id={id} />
            <div className={styles.shipData}>
              <div className={styles.boldText2}><span className={styles.whiteText}>Model:</span> {starship.model}</div>
              <div className={styles.boldText2}><span className={styles.whiteText}>Name:</span> {starship.name}</div>
              <div className={styles.boldText2}><span className={styles.whiteText}>Length:</span> {starship.length}</div>
              <div className={styles.boldText2}><span className={styles.whiteText}>Cost:</span> ${starship.cost_in_credits}</div>
              <div className={styles.boldText2}><span className={styles.whiteText}>Created:</span> {starship.created.substr(0, 10)}</div>
            </div>
          </div>

          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
        
        </div>
      )}
    </div>
  );
}

export default StarshipsItem;
