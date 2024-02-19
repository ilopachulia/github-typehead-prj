import {InputProps} from "../interfaces.ts";
function Input ({ value, type, placeholder, onChange, }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
export default Input;