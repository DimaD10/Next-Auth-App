
import styles from "./style.module.scss"

interface OverlayProps {
  info: string;
}

const Overlay = ({ info }: OverlayProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.body}>
        <div className={styles.info}>{info}</div>

        <div className={styles.spin}></div>
      </div>
    </div>
  );
};

export default Overlay;
