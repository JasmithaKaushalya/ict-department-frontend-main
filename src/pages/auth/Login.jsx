import { useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import LoginFeatures from "../../components/pages/login/LoginFeatures";
import LoginForm from "../../components/pages/login/LoginForm";

function Login() {
  const [role, setRole] = useState("student");

  return (
    <PublicLayout>
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-stretch">
          <LoginFeatures role={role} />
          <LoginForm role={role} setRole={setRole} />
        </div>
      </section>
    </PublicLayout>
  );
}

export default Login;