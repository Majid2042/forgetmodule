import React from "react";
import GuestLayout from "./components/GuestLayout";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Form from "./Form/index";
import { ForgotDto } from "./dto";
import AuthService from "./services/auth.service";

function initForgotData(): ForgotDto {
    return {
        email: "",
       };
}

export default function Forgot() {
    const [forgotData, setForgotData] = React.useState<ForgotDto>(initForgotData());
    const [errors, setErrors] = React.useState<string[]>();

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.forgot(forgotData)
            .then(() => history.push("/"))
            .catch((res) => setErrors(res.errors));
    };

    const handleChange = (name: string, value: any) =>
        setForgotData((data) => ({ ...data, [name]: value }));




return (
    <GuestLayout title="Reset Password">
           <form onSubmit={handleSubmit}>
                    <Form
                        errors={errors}
                        fields={fields}
                        data={forgotData}
                        onChange={handleChange}
                    />

        <div className="button-panel">
          <Button variant="contained" type="submit" fullWidth>
            Send Password Reset Link
          </Button>
        </div>
      </form>
    </GuestLayout>  
  );
}

const fields = [
    { name: "email", label: "Email", type: "email" },
];
