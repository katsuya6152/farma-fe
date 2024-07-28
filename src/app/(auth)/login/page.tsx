import AuthForm from "@/app/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <AuthForm isLogin={true} />
      </div>
    </div>
  );
}
