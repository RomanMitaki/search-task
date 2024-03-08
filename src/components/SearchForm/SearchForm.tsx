import "./styles.css";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { getUsersSearched } from "../../utils/api.ts";
import { SearchContext } from "../SearchResults/SearchContext.ts";
import { SearchFormContext } from "./SearchFormContext.ts";

export function SearchForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setSearchedUsers } = useContext(SearchContext);
  const { setLoading } = useContext(SearchFormContext);

  const fetchUsers = async () => {
    setLoading && setLoading(true);
    setError(null);
    try {
      const data = await getUsersSearched(3, value);
      if (data && setSearchedUsers) setSearchedUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown Error");
      console.log(error);
    } finally {
      setLoading && setLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Необходимо указать параметры поиска");
      return;
    }
    fetchUsers();
  };

  return (
    <div className="searchForm">
      <form method="get" onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchField"
          name={"searchInput"}
          value={value || ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
