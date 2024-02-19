import Input from "../ui/Input.tsx";
import {ChangeEvent, useState} from "react";
import {fetchUsers} from "../api/usersApi.ts";
import {UserProps} from "../interfaces.ts";
import User from "./User.tsx";

function SearchBox() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<UserProps[]>([]);
    const [error, setError] = useState(null);

    function onSearchHandler(evt: ChangeEvent<HTMLInputElement>) {
        setSearch(evt.target.value);
        fetchUsers(search, 1, 10, "login", "asc")
            .then(([error, data]) => {
                if (error) {
                    setError(error.status);
                } else {
                    setUsers(data);
                    setError(null);
                }
            });
    }

    if (error === 403) {
        return (
            <div className="modal">
                <h4>Search Limit Reached</h4>
                <p>We're unable to process your request at the moment because we've reached the GitHub search API's rate
                    limit. This is a temporary restriction to ensure fair usage of GitHub's resources.</p>
                <p>Please wait a few seconds before trying your search again. If you frequently encounter this limit,
                    consider reducing the number of searches or exploring GitHub's documentation for guidance on rate
                    limits.</p>
                <p>Thank you for your understanding.</p>
                <button onClick={() => {window.location.reload()}}>Refresh and start again!</button>
            </div>
        );
    }
    return (
        <div>
            <Input type="text" placeholder="Search for github users" value={search} onChange={onSearchHandler}/>
            {users?.map(({id, login, avatar_url, html_url}: UserProps) => (
                <User
                    key={id}
                    login={login}
                    avatar_url={avatar_url}
                    html_url={html_url}
                />
            ))}
        </div>
    );
}

export default SearchBox;
