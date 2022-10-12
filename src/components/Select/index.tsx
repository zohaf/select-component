import { useEffect, useState } from "react";
import styles from "./select.module.scss";

type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    isOpen && setHighlightedIndex(0);
  }, [isOpen]);

  const clearOptions = (e: any) => {
    e.stopPropagation();
    onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };

  const isSelectedOption = (option: SelectOption) => {
    return value === option;
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button onClick={(e) => clearOptions(e)} className={styles["clear-btn"]}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.showOptions : ""}`}>
        {options.map((option, index) => (
          <li
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            className={`${styles.option} ${
              isSelectedOption(option) ? styles.selected : ""
            } ${index === highlightedIndex ? styles.highlighted : ""}`}
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// user selects an option, we write a function to handle that - called onChange
// what are we trying to do?
// user selects an option, we want to update the selected value ( either to give it back to backend or display in to the user) - so we need to update the state and use it where needed.
// onChange, takes the selected value,
// we grab the selected value, store in in state, and render it on the page
