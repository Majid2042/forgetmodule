import { FormField, OnChange } from "./types";
import TextField from "@mui/material/TextField";
import FormErrors from "./FormErrors";

type FormProps = {
    fields: FormField[];
    data: any;
    onChange: OnChange;
    errors?: string[] | string;
};

export default function Form({ fields, data, onChange, errors }: FormProps) {
    return (
        <div className="form">
            <FormErrors errors={errors} />
            {fields.map((field, index) => (
                <div key={index} className="form-control">
                    <TextField
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        value={(data as any)[field.name]}
                        fullWidth
                        onChange={(e) => onChange(field.name, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}
