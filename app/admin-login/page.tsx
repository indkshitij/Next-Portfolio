"use client";

import { useState, FormEvent } from "react";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";
import TriggerToast from "@/frontend/atoms/TriggerToast";
import { FiLock, FiLoader } from "react-icons/fi";
import { Input } from "@heroui/input";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/admin/auth",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        TriggerToast({
          message: "🎉 Login successful! ",
          type: "success",
        });

        localStorage.setItem("token", res.data.token);

        setTimeout(() => router.push("/admin/dashboard"), 800);
      } else {
        TriggerToast({
          message: "❌ Something went wrong.",
          type: "error",
        });
      }
    } catch (error) {
      TriggerToast({
        message: "⚠️ Login failed. Try again.",
        type: "error",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="bg-white p-8 rounded-xl shadow-xl w-[90%] sm:w-[400px] space-y-6">
        <h2 className="text-3xl text-center font-semibold text-orange-500">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <Input
              type="email"
              required
              value={email}
              placeholder="admin@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 py-5"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-700">Password</label>

            <Input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 pr-10 py-5"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white tracking-wide py-2 rounded-lg transition-all duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin text-white text-lg" />
                Logging in...
              </>
            ) : (
              <>
                <FiLock className="text-lg" />
                Login
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
