import { useMemo, useState } from "react";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { TUserFiltered } from "./utils/types.ts";

export default function App() {
  const [searchedUsers, setSearchedUsers] = useState<TUserFiltered[]>([]);
  const value = useMemo(
    () => ({ searchedUsers, setSearchedUsers }),
    [searchedUsers],
  );

  return (
    <SearchContext.Provider value={value}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
