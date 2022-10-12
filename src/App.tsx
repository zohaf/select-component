import { Select } from "./components/Select";
import style from "./app.module.scss";

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
  return (
    <div className={style.container}>
      <Select options={optionsDumy} />
    </div>
  );
}

export default App;
