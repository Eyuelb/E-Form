import "./App.css";
import { ThemeProvider } from "./ThemeProvider";
import FormProvider from "./FormBuilder/Provider/FormContext";
import { ProvideFormBuilder } from "./FormBuilder/Provider";
function App() {
  return (
    <ThemeProvider>
      <FormProvider>
        <ProvideFormBuilder />
      </FormProvider>
      {/* <AppCompact/> */}
    </ThemeProvider>
  );
}

export default App;
