import React from "react";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CommonButton;
