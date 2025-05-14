import { z } from "zod";
import { SunMedium } from "lucide-react";
// components
import AuthForm from "@/features/auth/components/AuthForm";
// schemas
import type { authFormSchema } from "data/schemas";
// images

const LoginPage = () => {
  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    console.log(values);
  };

  const updateTheme = () => {
    console.log("theme");
  };

  return (
    <section className="bg-white dark:bg-primary min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute top-5 right-5 text-custom-green cursor-pointer"
        onClick={updateTheme}
      >
        <SunMedium />
      </div>

      <div className="w-full flex max-w-7xl p-5 md:p-0">
        {/* form */}
        <div className="w-full flex items-center justify-center lg:w-1/2 z-50">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-secondary dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Inicia sesión en tu cuenta
              </h1>

              <AuthForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>

        {/* image */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-start">
          <div className="relative -mt-3 -ml-20 self-center">
            <img
              src="./src/assets/svg/IA.svg"
              className="text-transparent h-[362px]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
