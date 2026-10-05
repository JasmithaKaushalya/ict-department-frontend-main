import Badge from "../../common/Badge";
import { Lock } from "lucide-react";

function LoginHero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-sky-500 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <Lock className="h-8 w-8 text-white" />
        </div>
        <Badge>Secure Access</Badge>

        <h1 className="mt-6 text-4xl lg:text-5xl font-bold">
          Student & Administrator Login
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-blue-100 text-lg leading-8">
          Sign in to access your personalized dashboard, academic records,
          course materials, announcements, and other department services.
        </p>
      </div>
    </section>
  );
}

export default LoginHero;
