import { FallbackProps } from "react-error-boundary";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorButtonContainer
} from "../../shared-components/error-image/error-image.styles";
import ErrorBoundaryFallbackImage from "../../shared-components/error-image/error-image.png";
import CustomButton from "../../shared-components/custom-button/custom-button.component";

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary
}: FallbackProps) => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={ErrorBoundaryFallbackImage} />
      <ErrorImageText>Sorry, this page is missed.</ErrorImageText>
      <ErrorButtonContainer>
        <CustomButton onClick={resetErrorBoundary}>Try again</CustomButton>
      </ErrorButtonContainer>
    </ErrorImageOverlay>
  );
};

export default ErrorBoundaryFallback;
