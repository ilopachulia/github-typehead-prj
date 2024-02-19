import Input from "../ui/Input.tsx";
import {ChangeEvent, useState} from "react";
import {fetchUsers} from "../api/usersApi.ts";
import {UserProps} from "../interfaces.ts";
import User from "./User.tsx";

function SearchBox() {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<UserProps[]>([]);
    console.log(users)
    function onSearchHandler(evt: ChangeEvent<HTMLInputElement>) {
        setSearch(evt.target.value);
            fetchUsers(search, 1, 10, "login", "asc")
                .then((data) => {
                    setUsers(data);
                });
    }
    return (
        <div>
            <Input type="text" placeholder="Search for github users" value={search} onChange={onSearchHandler}/>
            {users?.map(({id, login, avatar_url, html_url}: UserProps) => (
               <User
                   id={id}
                   login={login}
                   avatar_url={avatar_url}
                   html_url={html_url}
               />
            ))}
        </div>
    );
}

export default SearchBox;
