import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode } from "react";

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

export const Form = (props: FormProps) => {
  const { onSubmit, children } = props;
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleSubmits = (value: object) => {
    onSubmit(value);
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
        onSubmit={handleSubmit(handleSubmits)}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
