import {UserProps} from "../interfaces.ts";

function User({ html_url, avatar_url, login}: UserProps){
    return (
        <a href={html_url} target="_blank" className="option">
            <img src={avatar_url} alt={`${login}'s avatar`}/>
            <option value={login}>
                {login}
                &#8599;
            </option>
        </a>
    )
}

export default User;