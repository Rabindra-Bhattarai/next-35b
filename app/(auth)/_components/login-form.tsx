import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="mx-auto max-w-md border m-2 p-4 rounded">
      <div className="m-1">
        <label className="block mb-2 font-bold">Email</label>
        <input
          type="email"
          className="w-full p-1 border border-gray-300 rounded"
        />
      </div>
      <div className="m-1">
        <label className="block mb-2 font-bold">Password</label>
        <input
          type="password"
          className="w-full p-1 border border-gray-300 rounded"
        />
      </div>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded w-full">
        Login
      </button>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </div>
  );
}
