import { Button } from "./style";

type ButtonProps = {
    title: string;
    functionOnClick: Function
}


export default function Input({title, functionOnClick} : ButtonProps) {
    return(
        <Button onClick={() => functionOnClick()}>
            {title}   
        </Button>
    );
}