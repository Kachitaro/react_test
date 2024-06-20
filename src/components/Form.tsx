import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode, useEffect } from "react";

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

export const Form = (props: FormProps) => {
  const { onSubmit, children } = props;
  const methods = useForm();
  const { handleSubmit, reset, formState } = methods;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

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
