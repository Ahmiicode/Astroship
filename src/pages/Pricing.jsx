import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Personal",
      price: "Free",
      description: "Lifetime free",
      features: [
        "Up to 3 users",
        "Unlimited Pages",
        "Astro Sub domain",
        "Basic Integrations",
        "Community Support",
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      title: "Startup",
      price: "$19",
      description: "Per month",
      features: [
        "All Free Features",
        "Up to 20 users",
        "20 Custom domains",
        "Unlimited Collaborators",
        "Advanced Integrations",
        "Priority Support",
      ],
      buttonText: "Get Started",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions",
      features: [
        "All Pro Features",
        "Unlimited Custom domains",
        "99.99% Uptime SLA",
        "SAML & SSO Integration",
        "Dedicated Account Manager",
        "24/7 Phone Support",
      ],
      buttonText: "Contact us",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12 text-slate-900">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-gray-600">
          Simple & Predictable pricing. No Surprises.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-8 shadow-sm transition-all ${
              plan.highlighted
                ? "border-black bg-black text-white scale-105"
                : "bg-white border-gray-200 text-slate-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p
              className={`${
                plan.highlighted ? "text-gray-300" : "text-gray-500"
              } mb-6`}
            >
              {plan.description}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ✔
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full px-4 py-3 rounded font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-black text-white hover:bg-slate-800"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
