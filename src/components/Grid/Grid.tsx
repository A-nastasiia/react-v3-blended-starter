import style from "./Grid.module.css";

interface GridP {
  children: React.ReactNode
}

export default function Grid({ children }: GridP) {
  return <ul className={style.list}>{children}</ul>;
}
