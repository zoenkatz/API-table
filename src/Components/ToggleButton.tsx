import React from "react";

const ToggleButton = ({
  isPressed,
  onClick,
  value,
  className,
  isDisabled,
}: {
  isPressed: boolean;
  onClick?: () => void;
  value: string;
  className?: string;
  isDisabled?: boolean;
}) => {
  return (
    <div className={`toggle-button ${className} ${isPressed ? "pressed" : ""}`}>
      <button onClick={onClick} disabled={isDisabled}>
        {value}
      </button>
    </div>
  );
};

export default ToggleButton;
