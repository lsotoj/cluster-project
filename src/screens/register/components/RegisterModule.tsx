import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { InputRegisterForm } from "@/types";
import { InputText } from "@/components";
import { Card, CardHeader, Grid } from "@mui/material";

export const RegisterModule = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InputRegisterForm>({
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      phone: "",
    },
  });

  const fixedProps = {
    formControl: control,
    formErrors: errors,
    formRules: {
      required: true,
    },
  };

  const onSubmit: SubmitHandler<InputRegisterForm> = (data) =>
    console.log(data);

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 "
      >
        <InputText
          {...fixedProps}
          inputName="name"
          errorMessage="Please, enter a name"
          inputLabel="Name"
        />

        <InputText
          {...fixedProps}
          inputName="email"
          errorMessage="enter an email"
          inputLabel="e-mail"
          formRules={{
            required: true,
            pattern: {
              value: "/[a-z0-9]+@[a-z]+.[a-z]{2,3}/",
              message: "Invalid email address",
            },
          }}
        />

        <InputText
          {...fixedProps}
          inputName="userName"
          errorMessage="Please, enter an username"
          inputLabel="Username"
        />
        <InputText
          {...fixedProps}
          inputName="phone"
          errorMessage="Please, enter a phone number"
          inputLabel="Phone"
        />
        <Card variant="outlined">
          <CardHeader subheader="Address" />
          <div className="container p-2 gap-1 grid grid-cols-2">
            <InputText
              {...fixedProps}
              inputName="street"
              errorMessage="Enter a street name"
              inputLabel="Street"
            />
            <InputText
              {...fixedProps}
              inputName="suite"
              errorMessage="Enter a suite name"
              inputLabel="Suite"
            />
            <InputText
              {...fixedProps}
              inputName="city"
              errorMessage="Enter a city name"
              inputLabel="City"
            />
            <InputText
              {...fixedProps}
              inputName="zipCode"
              errorMessage="Enter a zip code number"
              inputLabel="ZipCode"
            />
            <InputText
              {...fixedProps}
              inputName="lat"
              errorMessage="Enter latitude"
              inputLabel="Latitude"
            />
            <InputText
              {...fixedProps}
              inputName="lng"
              errorMessage="Enter longitude"
              inputLabel="Longitude"
            />
          </div>
        </Card>

        <Card variant="outlined">
          <CardHeader subheader="Company" />
          <div className="container p-2 gap-1 grid grid-cols-2">
            <InputText
              {...fixedProps}
              inputName="name"
              errorMessage="Enter a company name"
              inputLabel="Name"
            />
            <InputText
              {...fixedProps}
              inputName="catchPhrase"
              errorMessage="Enter catch phrase"
              inputLabel="Catch Phrase"
            />
            <InputText
              {...fixedProps}
              inputName="bs"
              errorMessage="Enter the business service"
              inputLabel="Business service"
            />
          </div>
        </Card>

        <InputText
          {...fixedProps}
          inputName="website"
          errorMessage="Enter the website"
          inputLabel="website"
        />

        <input
          type="submit"
          className="bg-dark-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full col-span-2 w-1/3 justify-self-center"
        />
      </form>
    </div>
  );
};
