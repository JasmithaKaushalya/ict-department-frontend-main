import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/uwu-logo.png";
import loginPanelContent from "../../../data/login/loginPanelContent";

function LoginFeatures({ role }) {
  const content = loginPanelContent[role];

  return (
    <div className="bg-blue-700 text-white rounded-3xl p-10 h-full flex flex-col justify-between">
      <div>
        <img src={logo} alt="UWU Logo" className="w-16 h-16 object-contain" />

        <p className="mt-4 text-blue-100 text-sm">
          Department of ICT — Uva Wellassa University
        </p>

        <div key={role} className="animate-fade">
          <h2 className="mt-6 text-2xl font-bold leading-snug">
            {content.title}
          </h2>

          <p className="mt-5 text-blue-100 leading-7">{content.description}</p>

          <ul className="mt-8 space-y-3">
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-blue-500">
        <p className="text-sm font-semibold">Need Help?</p>

        <Link
          to="/contact"
          className="mt-2 flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
        >
          <Phone className="h-4 w-4" />
          Contact ICT Department
        </Link>
      </div>
    </div>
  );
}

export default LoginFeatures;
