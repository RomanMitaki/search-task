import "./styles.css";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {getUsersSearched} from "../../utils/api.ts";
import {SearchContext} from "../SearchResults/SearchContext.ts";

export function SearchForm() {
    const [value, setValue] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {setSearchedUsers} = useContext(SearchContext);


    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getUsersSearched(3, value);
            if (data && setSearchedUsers) setSearchedUsers(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unknown Error");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
