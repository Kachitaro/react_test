import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  redirect?: string;
};

export const Form = (props: FormProps) => {
  const { onSubmit, children, redirect } = props;
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();
  const handleAction = (value: object) => {
    onSubmit(value)
    if (redirect) navigate(redirect);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: "10px",
        }}
        onSubmit={handleSubmit(handleAction)}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
