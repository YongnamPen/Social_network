import { SAppButton } from "./AppButton.style";

interface IAppButtonProps {
  buttonText: string;
  isDisabled: boolean;
  buttonClick?: () => void;
}

export const AppButton = ({
  buttonText,
  isDisabled,
  buttonClick,
}: IAppButtonProps) => {
  return (
    <SAppButton disabled={isDisabled} onClick={buttonClick}>
      {buttonText}
    </SAppButton>
  );
};
