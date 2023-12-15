import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Root from "./pages/root/root.page";
import { GlobalStyle, GlobalVariables } from "./utils/global.style";

const NotFound = lazy(() => import("./pages/not-found/not-found.page"));
const Payouts = lazy(() => import("./pages/payouts/payouts.page"));

function App() {
  return (
    <ThemeProvider theme={GlobalVariables}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Payouts />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
