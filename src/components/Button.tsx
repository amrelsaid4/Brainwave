import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import "../index.css";

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  onClick,
  children,
  px,
  white = false,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-violet-300 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
  const reanderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? reanderLink() : renderButton();
};

export default Button;
