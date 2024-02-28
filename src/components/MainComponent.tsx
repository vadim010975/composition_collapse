import { useState, FC, PropsWithChildren } from "react";
import Container from "./Container";

const MainComponent: FC<PropsWithChildren> = ({ children }) => {

  const [state, setState] = useState({collapsedLabel: false, expandedLabel: true});

  const handleClick = (name: string) => {
    name === "first" ?
    setState({...state, collapsedLabel: !state.collapsedLabel}) :
    setState({...state, expandedLabel: !state.expandedLabel});
  }

  return (
    <div className="main">
      <Container handleClick={handleClick} collapsedLabel={state.collapsedLabel} expandedLabel={state.expandedLabel}>
        {children}
      </Container>
    </div>
  );
}

export default MainComponent;