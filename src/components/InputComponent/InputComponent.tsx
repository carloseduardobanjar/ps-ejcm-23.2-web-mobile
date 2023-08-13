import { Input, InputIcon, InputText } from "./style";

type InputProps = {
    placeholder: string;
    icon: string;
}


export default function InputComponent({placeholder, icon} : InputProps) {
    return(
        <Input>
            <InputIcon src={icon} />
            <InputText> {placeholder} </InputText>
        </Input>
    );
}