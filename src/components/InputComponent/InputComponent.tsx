import { Input, InputIcon, InputSection } from "./style";

type InputProps = {
    placeholder: string;
    icon: string;
    isPassword?: boolean;
}

export default function InputComponent({placeholder, icon, isPassword} : InputProps) {
    return(
        <InputSection>
            <InputIcon src={icon} />
            <Input type={(isPassword) ? "password" : ""} placeholder={placeholder} />
        </InputSection>
    );
}