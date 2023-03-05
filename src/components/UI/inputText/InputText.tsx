import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

interface InputTextProps {
  formControl: any;
  inputName: string;
  errorMessage: string;
  inputLabel: string;
  formErrors: any;
  formRules?: object;
}

export const InputText = ({
  formControl,
  inputName,
  errorMessage,
  inputLabel,
  formErrors,
  formRules,
}: InputTextProps) => {
  return (
    <div>
      <Controller
        name={inputName}
        control={formControl}
        rules={formRules}
        render={({ field }) => (
          <TextField {...field} label={inputLabel} size="small" />
        )}
      />
      <ErrorMessage
        errors={formErrors}
        name={inputName}
        message={errorMessage}
        render={({ message }) => (
          <Typography variant="subtitle2" color="error.main">
            {message}
          </Typography>
        )}
      />
    </div>
  );
};
