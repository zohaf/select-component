import { Select } from "./components/Select";
import style from "./app.module.scss";
import { useState } from "react";

const optionsDumy = [
  {
    value: 1,
    label: "one",
  },
  {
    value: 2,
    label: "two",
  },
  {
    value: 3,
    label: "three",
  },
  {
    value: 4,
    label: "four",
  },
];

function App() {
  const [value, setValue] = useState<typeof optionsDumy[0] | undefined>(
    optionsDumy[0]
  );

  return (
    <div className={style.container}>
      <Select
        options={optionsDumy}
        value={value}
        onChange={(option) => {
          setValue(option);
        }}
      />
    </div>
  );
}

export default App;
