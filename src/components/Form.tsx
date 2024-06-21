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
  const { onSubmit, redirect, children } = props;
  const methods = useForm();
  const navigator = useNavigate();
  const { handleSubmit, reset } = methods;

  const action = (data: object) => {
    onSubmit(data);
    if (redirect) {
      navigator(redirect);
    }
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
        onSubmit={handleSubmit(action)}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
