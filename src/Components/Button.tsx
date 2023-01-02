import React, {ReactNode} from "react";

const Button = ({
  value,
  onClick,
  isDisabled = false,
  icon,
    className
}: {
  isDisabled?: boolean;
  value?: string;
  onClick: (e?: any) => void;
  icon?: ReactNode;
  className?: string
}) => {
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {icon ? icon : null}
      {value}
    </button>
  );
};

export default Button;
