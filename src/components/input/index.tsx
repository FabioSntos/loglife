import { InputContainer } from "./styles";

interface IInputTypes {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: any;
  required: boolean;
}

export const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  required,
}: IInputTypes) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </InputContainer>
  );
};
