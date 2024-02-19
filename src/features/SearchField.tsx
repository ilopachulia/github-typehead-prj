import Input from "../ui/Input.tsx";
import {ChangeEvent, useState} from "react";
import {fetchUsers} from "../api/usersApi.ts";
import {User} from "../interfaces.ts";

function SearchField() {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    console.log(users)
    function onSearchHandler(evt: ChangeEvent<HTMLInputElement>) {
        setSearch(evt.target.value);
        fetchUsers(search, 1, 10, "login", "asc")
            .then((data) => {
                setUsers(data);
                console.log(data);
            });
    }

    return (
        <div>
            <Input type="text" placeholder="Search" value={search} onChange={onSearchHandler}/>
            <ul>
                {users.map((user:User) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchField;
