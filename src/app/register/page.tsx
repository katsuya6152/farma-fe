import AuthForm from "../components/Auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Register</h1>
        <AuthForm isLogin={false} />
      </div>
    </div>
  );
}
