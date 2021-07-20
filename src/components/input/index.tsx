import { InputContainer } from "./styles";

interface IInputTypes {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: () => void;
}

export const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
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
      />
    </InputContainer>
  );
};
