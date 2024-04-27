import clsx from "clsx";
import styles from "./style.module.scss";

import { Linkedin, Github } from "lucide-react";

const WEBSITE_LINK = "https://benko-cv.vercel.app/";
const LINKED_LINK = "https://www.linkedin.com/in/dmytro-dziubenko-a7285420b/";
const GITHUB_LINK = "https://github.com/DimaD10";

export function Footer() {
  return (
    <div className={clsx(styles.footer, "footer")}>
      <div className={clsx(styles.container, "container")}>
        <div className={styles.wrapper}>
          <span className={styles.privacy}>
            Created by{" "}
            <a href={WEBSITE_LINK} target="_blank">
              Benko
            </a>
          </span>

          <div className={styles.social}>
            <a href={LINKED_LINK} target="_blank">
              <Linkedin />
            </a>
            <a href={GITHUB_LINK} target="_blank">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
