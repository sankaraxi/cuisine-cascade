import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import {render} from "@testing-library/react"
 

it("",()=>{
    render(
        <Provider store={appStore}>
            <Header />
        </Provider>
    
);
})