import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


interface Props {
  children?: React.ReactNode,
  className?: string,
}
export const CardDefault: React.FC<Props>= (props: Props) => {
  return (
    <div className={`flex flex-col  ${props.className}`}>
      {props.children}
    </div>
  );
}
