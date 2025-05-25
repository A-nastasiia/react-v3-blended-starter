import style from "./Loader.module.css";
import { ClipLoader } from "react-spinners"; 

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <ClipLoader size={50} color="#ffffff" /> {/* Тут додаємо спінер */}
    </div>
  );
}