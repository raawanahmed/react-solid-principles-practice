import React, { useState } from "react";
import { SearchInputGood } from "./SearchInputGood";
import { SearchInputBad } from "./SearchInputBad";

export function LSP() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
     <SearchInputGood value={value} onChange={handleChange} isLarge />
  );
}
