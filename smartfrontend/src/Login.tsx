import GuestLayout from "./components/GuestLayout";
import Button from "@mui/material/Button";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form/index";
import AuthService from "./services/auth.service";
import { AuthDto } from "./dto";

function initLoginData(): AuthDto {
    return {
        email: "",
        password: "",
    };
}

export default function Login() {
    const [loginData, setLoginData] = React.useState<AuthDto>(initLoginData());
    const [errors, setErrors] = React.useState<string[]>();

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.authenticate(loginData)
            .then(() => history.push("/"))
            .catch((res) => setErrors(res.errors));
    };

    const handleChange = (name: string, value: any) =>
        setLoginData((data) => ({ ...data, [name]: value }));

    return (
        <GuestLayout title="Login">
            <form onSubmit={handleSubmit}>
                <Form
                    errors={errors}
                    fields={fields}
                    data={loginData}
                    onChange={handleChange}
                />
                <div className="button-panel">
                    <div className="button-signin">
                        <Button variant="contained" type="submit">
                            Login
                        </Button>
                    </div>
                    <div className="button-signup">
                        <Button
                            variant="contained"
                            color="success"
                            href="./signup"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                <div className="forgot">
                    <p>
                        <Link to="/forgot">Forgot Password</Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}

const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
];
