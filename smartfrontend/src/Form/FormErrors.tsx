import Alert from "@mui/material/Alert";

type FormErrorsProps = {
    errors?: string[] | string;
};

export default function FormErrors({ errors }: FormErrorsProps) {
    if (!errors) return <span />;
    return (
        <div className="form-errors">
            {(typeof errors === "string" ? [errors] : errors).map(
                (error, index) => (
                    <Alert severity="error" key={index}>
                        {error}
                    </Alert>
                ),
            )}
        </div>
    );
}
