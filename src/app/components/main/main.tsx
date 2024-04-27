import clsx from "clsx";
import styles from "./style.module.scss";
import { type PropsWithChildren } from "react";

export function MainSection({ children }: PropsWithChildren) {
  return (
    <div className={clsx(styles.main, "main")}>
      <div className={clsx(styles.container, "container")}>
        {children}
      </div>
    </div>
  );
}
