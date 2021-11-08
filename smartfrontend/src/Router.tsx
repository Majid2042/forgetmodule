import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Forgot from "./Forgot";
import Signup from "./Signup";
import SetPassword from "./auth/SetPassword";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/signup" component={Signup} />
                <Route path="/set-password/:otp" component={SetPassword} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
