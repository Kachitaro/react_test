import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode, useEffect } from "react";
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
  const { handleSubmit, reset, formState } = methods;
  const { isSubmitted } = formState;

  useEffect(() => {
    if (redirect && isSubmitted) {
      navigator(redirect);
    }
    reset();
  }, [isSubmitted, redirect, reset, navigator]);

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: "10px",
        }}
        onSubmit={handleSubmit(onSubmit)}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
