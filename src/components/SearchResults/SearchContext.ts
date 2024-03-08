import React, { createContext } from "react";
import { TUserFiltered } from "../../utils/types.ts";

export type TSearchContext = {
  searchedUsers: TUserFiltered[];
  setSearchedUsers?: React.Dispatch<React.SetStateAction<TUserFiltered[]>>;
};
export const SearchContext = createContext<TSearchContext>({
  searchedUsers: [],
});
