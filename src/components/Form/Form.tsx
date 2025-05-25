import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import type { FormEvent } from "react";

import style from "./Form.module.css";

interface Props {
  onSubmit: (query: string) => void;
}

export default function Form({ onSubmit }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const query = input.value.trim();

    if (query === "") {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    input.value = ""; 
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}