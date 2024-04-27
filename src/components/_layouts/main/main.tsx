import { type PropsWithChildren } from "react";
import styles from "./style.module.scss";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import clsx from "clsx";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={clsx(styles.wrapper, "wrapper")}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
