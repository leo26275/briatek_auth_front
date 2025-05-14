import { z } from "zod";
import { SunMedium } from "lucide-react";
// components
import AuthForm from "@/features/auth/components/AuthForm";
// schemas
import type { authFormSchema } from "@/data/schemas";

const LoginPage = () => {
  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    console.log(values);
  };

  const updateTheme = () => {
    console.log("theme");
  };

  const onGoToLandingPage = () => {
    console.log("link");
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
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full sm:max-w-lg">
            {/* form container */}
            <div className="relative bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-secondary dark:border-gray-700 z-10">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div
                  className="text-center text-2xl font-bold text-white transition-colors duration-300 cursor-pointer"
                  onClick={onGoToLandingPage}
                >
                  Br<span className="text-custom-green">ia</span>tek
                </div>

                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Inicia sesión en tu cuenta
                </h1>

                {/* form */}
                <AuthForm onSubmit={onSubmit} />
              </div>
            </div>

            {/* image */}
            <div className="hidden lg:flex lg:absolute lg:-top-1 lg:-right-35 h-full">
              <img
                src="./src/assets/svg/IA.svg"
                className="text-transparent max-h-full"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
