import styles from "../styles.module.css";

function Home() {
  return (
    <div className={styles.mainbody}>
      <h1 className={styles.headText}>Welcome  to StarDB</h1> 
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
      <div className={styles.gradientbg}></div>
    </div>
    
    
    );
}

export default Home;
