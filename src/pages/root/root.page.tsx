import { Fragment, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ErrorBoundaryFallback from "../../components/general-components/error-boundary-fallback/error-boundary-fallback.component";
import Spinner from "../../components/general-components/spinner/spinner.component";

const Root = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Root;
