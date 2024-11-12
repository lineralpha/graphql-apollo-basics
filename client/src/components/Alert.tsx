import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
};

export const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary">
      {children}
    </div>);
};
