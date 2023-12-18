import { useNavigate } from "react-router-dom";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorButtonContainer
} from "../../components/shared-components/error-image/error-image.styles";
import ErrorImage from "../../components/shared-components/error-image/error-image.png";
import CustomButton from "../../components/shared-components/custom-button/custom-button.component";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={ErrorImage} />
      <ErrorImageText>Sorry, page not found.</ErrorImageText>
      <ErrorButtonContainer>
        <CustomButton onClick={() => navigate("/")}>Home</CustomButton>
      </ErrorButtonContainer>
    </ErrorImageOverlay>
  );
};

export default NotFound;
