"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues, defaultLeadValues } from "@/lib/formSchema";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  variant?: "modal" | "section";
  onSuccess?: () => void;
  className?: string;
}

const LeadForm = ({ variant = "section", onSuccess, className }: LeadFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: defaultLeadValues
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "/api/lead";
  const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET ?? "default";
  const shouldUseMailto = formEndpoint === "/api/lead" && deployTarget === "github-pages";

  const openMailto = (values: LeadFormValues) => {
    const subject = encodeURIComponent("Запит на розрахунок");
    const body = encodeURIComponent(
      `Ім’я: ${values.name}\nТелефон: ${values.phone}\nEmail: ${values.email || "-"}\nПослуга: ${values.service}\nОпис: ${values.description || "-"}`
    );
    const to = content.brand.email || "PLACEHOLDER_EMAIL";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (values: LeadFormValues) => {
    setToast(null);

    try {
      if (shouldUseMailto) {
        openMailto(values);
        setIsSuccess(true);
        setToast("Відкриваємо поштовий клієнт для надсилання запиту.");
        reset(defaultLeadValues);
        onSuccess?.();
        return;
      }

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
      setToast(content.contact.successText);
      reset(defaultLeadValues);
      onSuccess?.();
    } catch (error) {
      setToast("Сталася помилка. Спробуйте ще раз трохи пізніше.");
    }
  };

  return (
    <div className={cn("relative", className)}>
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 rounded-xl border border-neon-400/40 bg-night-900/80 px-4 py-3 text-sm text-neon-200"
        >
          {toast}
        </div>
      )}
      {isSuccess ? (
        <div className="rounded-2xl border border-white/10 bg-night-900/60 p-6">
          <h3 className="text-lg font-semibold text-white">{content.contact.successTitle}</h3>
          <p className="mt-2 text-sm text-slate-300">{content.contact.successText}</p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-6 rounded-full border border-neon-400/60 bg-neon-500/20 px-4 py-2 text-sm font-semibold text-neon-200 transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          >
            Створити новий запит
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              {content.contact.formFields.name}*
              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-400"
                {...register("name")}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <span className="text-xs text-magma-300">{errors.name.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              {content.contact.formFields.phone}*
              <input
                type="tel"
                className="w-full rounded-xl border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-400"
                {...register("phone")}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && (
                <span className="text-xs text-magma-300">{errors.phone.message}</span>
              )}
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              {content.contact.formFields.email}
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-400"
                {...register("email")}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <span className="text-xs text-magma-300">{errors.email.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              {content.contact.formFields.service}*
              <select
                className="w-full rounded-xl border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-400"
                {...register("service")}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="">Оберіть послугу</option>
                {content.contact.formServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="text-xs text-magma-300">{errors.service.message}</span>
              )}
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-200">
            {content.contact.formFields.description}
            <textarea
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-400"
              {...register("description")}
            />
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-200">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border border-white/10 bg-night-950/60 text-neon-400 focus:ring-neon-400"
              {...register("consent")}
              aria-invalid={Boolean(errors.consent)}
            />
            <span>{content.contact.formFields.consent}*</span>
          </label>
          {errors.consent && (
            <span className="block text-xs text-magma-300">{errors.consent.message}</span>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full rounded-full border border-neon-400/60 bg-neon-500/20 px-6 py-3 text-sm font-semibold text-neon-100 shadow-glow transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300",
              isSubmitting && "cursor-wait opacity-70"
            )}
          >
            {isSubmitting ? "Надсилання..." : content.contact.formSubmit}
          </button>
          {variant === "modal" && (
            <p className="text-xs text-slate-400">
              Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default LeadForm;
