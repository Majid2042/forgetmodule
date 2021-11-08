import GuestLayout from "./components/GuestLayout";
import Form from "./Form";
import Button from "@mui/material/Button";
import React from "react";
import AuthService from "./services/auth.service";
import { SignupDto } from "./dto";
import { useHistory } from "react-router-dom";

function initSignupData(): SignupDto {
    return {
        firstName: "",
        lastName: "",
        email: "",
    };
}

export default function Signup() {
    const [signupData, setSignupData] = React.useState<SignupDto>(
        initSignupData(),
    );
    const [errors, setErrors] = React.useState<string[]>();

    const history = useHistory();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.signup(signupData)
            .then(() => history.push("/wait-for-confirmation"))
            .catch((res) => setErrors(res.errors));
    };

    const handleChange = (name: string, value: any) =>
        setSignupData((data) => ({ ...data, [name]: value }));

    return (
        <GuestLayout title="Sign Up">
            <form onSubmit={handleSubmit}>
                <Form
                    errors={errors}
                    fields={fields}
                    data={signupData}
                    onChange={handleChange}
                />
                <div className="button-panel">
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}

const fields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
];
