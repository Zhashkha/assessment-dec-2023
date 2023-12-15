import { HTMLAttributes, ReactNode } from "react";
import { CustomButtonContainer } from "./custom-button.styles";

interface CustomButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
