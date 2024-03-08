import { useMemo, useState } from "react";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { TUserFiltered } from "./utils/types.ts";
import { SearchFormContext } from "./components/SearchForm/SearchFormContext.ts";

export default function App() {
  const [searchedUsers, setSearchedUsers] = useState<TUserFiltered[]>([]);
  const value = useMemo(
    () => ({ searchedUsers, setSearchedUsers }),
    [searchedUsers],
  );
  const [isLoading, setLoading] = useState(false);
  const loadingValue = useMemo(() => ({ isLoading, setLoading }), [isLoading]);

  return (
    <SearchContext.Provider value={value}>
      <SearchFormContext.Provider value={loadingValue}>
        <SearchForm />
        <SearchResults />
      </SearchFormContext.Provider>
    </SearchContext.Provider>
  );
}
