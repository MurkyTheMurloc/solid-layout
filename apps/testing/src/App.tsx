
import {Stack} from "solid-layout";
import  "./App.css";
function App() {


  return (
      <><Stack gap={"6rem"} direction={"row"}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </Stack>
          <Stack gap={"1rem"} direction={"column"}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </Stack></>
  );
}

export default App
