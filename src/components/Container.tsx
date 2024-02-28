import { FC, PropsWithChildren } from "react";
import Button from "./Button";
import Content from "./Content";

type ContainerProps = {
  handleClick: (name: string)=>void,
  collapsedLabel: boolean,
  expandedLabel: boolean,
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ handleClick, collapsedLabel, ...props}) => {

  return (
    <div className={collapsedLabel ? "container show" : "container"}>
      <Button name="first" handleClick={handleClick} />
      <Button name="second" handleClick={handleClick} />
      <Content {...props} />
    </div>
  );
}

export default Container;