import React, { createContext } from "react";

export type TSearchFormContext = {
  isLoading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SearchFormContext = createContext<TSearchFormContext>({
  isLoading: false,
});
