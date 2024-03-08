import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { SearchFormContext } from "../SearchForm/SearchFormContext.ts";
import Loader from "../Loader/Loader.tsx";

export function SearchResults() {
  const { searchedUsers } = useContext(SearchContext);
  const { isLoading } = useContext(SearchFormContext);

  return (
    <div className="usersList">
      {!searchedUsers.length && !isLoading ? (
        <p>Введите имя пользователя в поисковую строку и нажмите Enter</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        searchedUsers.map((user) => <UserCard key={user.id} {...user} />)
      )}
    </div>
  );
}
