import { FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active, ...props }) => {
  const classes = cn(styles["button"], { [styles.pending]: active });
  return (
    <button className={classes} {...props}>
      <span>{children}</span>
    </button>
  );
};
