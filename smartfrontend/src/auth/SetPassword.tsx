import React from "react";
import { useParams, useHistory } from "react-router-dom";
import GuestLayout from "../components/GuestLayout";
import { SetPasswordDto } from "../dto";
import AuthService from "../services/auth.service";
import Form from "../Form";
import Button from "@mui/material/Button";

export default function SetPassword() {
    const { otp } = useParams<{ otp: string }>();
    const email = getEmailParams();
    const [data, setData] = React.useState<SetPasswordDto>({
        otp,
        email,
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = React.useState<string[]>([]);
    const history = useHistory();
    const handleChange = (key: string, value: any) =>
        setData((data) => ({ ...data, [key]: value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            setErrors(["Passwords don't match"]);
            return;
        }

        AuthService.setPassword(data)
            .then(() => history.push("/signup-complete"))
            .catch((res) => setErrors(res.errors));
    };

    return (
        <GuestLayout title="Set Password">
            <form onSubmit={handleSubmit}>
                <Form
                    data={data}
                    fields={fields}
                    onChange={handleChange}
                    errors={errors}
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </GuestLayout>
    );
}

const getEmailParams = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("email") || "";
};

const fields = [
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
];
