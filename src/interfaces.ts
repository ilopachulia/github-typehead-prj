
export interface InputProps {
    value: string;
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UserProps {
    id?: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

