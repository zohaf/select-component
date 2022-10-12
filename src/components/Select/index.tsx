import style from "./select.module.scss";

type SelectOption = {
  value: any;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <div tabIndex={0} className={style.container}>
      <span className={style.value}>value</span>
      <button className={style["clear-btn"]}>&times;</button>
      <div className={style.divider}></div>
      <div className={style.caret}></div>
      <ul className={`${style.options} ${style.show}`}>
        {options.map((option) => (
          <li className={style.option} key={option.value}>
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
