import { FC } from "react";

type ButtonProps = {
  handleClick: (name: string) => void,
  name: string,
}


const Button: FC<ButtonProps> = ({ handleClick, name }) => {

  return (
    <>
      <button onClick={() => handleClick(name)} className="button">Click me</button>
    </>
  )
}

export default Button;
