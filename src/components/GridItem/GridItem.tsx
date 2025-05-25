import style from "./GridItem.module.css";

interface GridItemP {
  children: React.ReactNode
} 

export default function GridItem({ children }: GridItemP) {
  return <li className={style.item}>{children}</li>;
}
