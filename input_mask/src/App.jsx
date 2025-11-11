import { useState } from "react";
import { cities } from "./cities.js";
import Input from "./main.jsx";

function App() {
  const [hint, setHint] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    let findCity = null;
    if (value) {
      const firstLetter = value[0].toUpperCase();
      const newSearch = `${firstLetter}${value.slice(1)}`;
      findCity = cities.find((item) => item.startsWith(newSearch));
      setSearch(newSearch);
      setHint(findCity);
    } else {
      setSearch("");
      setHint("");
    }

    if (value.includes(" ")) {
      const secondLetter = value.split(" ").map((item) => {
        if (item) {
          const newItem = item.split("");
          newItem.splice(0, 1, item[0].toUpperCase());
          findCity = cities.find((items) => items.includes(newItem.join("")));
          return newItem.join("");
        }
      });
      setHint(findCity);
      setSearch(secondLetter.join(" "));
    }
  };

  return (
    <div>
      <Input search={search} handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
