"use client";

import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCcw } from "lucide-react";
import { AuthFormData } from "@/types/Auth";
import { auth } from "@/lib/api";

interface AuthFormProps {
  isLogin: boolean;
}

interface LoginResponse {
  jwt: string;
}

interface RegistrationResponse {
  message: string;
}

interface ErrorResponse {
  message: string;
}

const schema = z.object({
  username: z.string().min(1).optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    const response = await auth(data, isLogin);

    if (response.ok) {
      if (isLogin) {
        const result: LoginResponse = await response.json();
        localStorage.setItem("token", result.jwt);
        router.push("/dashboard");
      } else {
        const result: RegistrationResponse = await response.json();
        alert("Registration successful!");
        router.push("/login");
      }
    } else {
      const error: ErrorResponse = await response.json();
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {!isLogin && (
        <>
          <label htmlFor="username">Username</label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                id="username"
                type="text"
                {...field}
                title={errors.username?.message}
              />
            )}
          />
        </>
      )}
      <label htmlFor="email">Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <Input id="email" type="email" {...field} />
            {errors.email && <div>{errors.email?.message}</div>}
          </>
        )}
      />
      <label htmlFor="password" className="">
        Password
      </label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input id="password" type="password" {...field} />
            {errors.email && <div>{errors.password?.message}</div>}
          </>
        )}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
        ) : isLogin ? (
          "Login"
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default AuthForm;
