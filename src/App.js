import { Provider } from "react-redux";
import store from "./projects/redux/store";
// import Friends from "./projects/Friends";
// import IncreaseDecrease from "./projects/useState-project";
// import Group from "./projects/friend-animationn";
// import Counter from "./projects/react-redux";
import Chart from "./projects/shopping";

export default function App () {
    return (
        <Provider store={store}>
         {/* <Friends/> */}
         {/* <IncreaseDecrease/> */}
         {/* <Group/> */}
        {/* <Counter/> */}
        <Chart/>
        </Provider>
    )
    }
    