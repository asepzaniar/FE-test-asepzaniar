import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700 font-ubuntu">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}