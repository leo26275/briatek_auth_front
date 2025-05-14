import BRTKButton from "@/components/common/BRTKButton";
import BRTKInput from "@/components/common/BRTKInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AuthFormProps } from "data/types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "../../../../data/schemas/index";
import { twMerge } from "tailwind-merge";

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, className }) => {
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className={twMerge(`${className}`, "w-full space-y-8")}
      >
        <BRTKInput
          name="email"
          label="Correo Electrónico"
          placeholder="example@example.com"
          control={form.control}
          isLoading={false}
        />

        <BRTKInput
          name="password"
          label="Contraseña"
          control={form.control}
          isLoading={false}
        />

        <BRTKButton type="submit" label="Iniciar Sesión" className="w-full" />
      </form>
    </Form>
  );
};

export default AuthForm;
