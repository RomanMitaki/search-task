import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { searchedUsers } = useContext(SearchContext);

  return (
    <div className="usersList">
      {searchedUsers.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
}
