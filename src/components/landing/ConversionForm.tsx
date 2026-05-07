"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ScrollReveal } from "./motion";
import {
  ConsultationFormData,
  consultationSchema,
} from "@/lib/consultation-schema";
import clsx from "clsx";

const industries = [
  "Hospitality",
  "FinTech",
  "Interior Design",
  "Media & Broadcasting",
  "Retail & E-Commerce",
  "Real Estate",
  "Logistics",
  "Manufacturing",
  "Education",
  "Energy",
  "Other",
];

const services = [
  "Strategic Branding",
  "Enterprise ERP",
  "SaaS Platform",
  "AI Marketing",
  "Full-Stack Transformation",
];

const targets = [
  "Increase Revenue",
  "Reduce Operational Costs",
  "Scale to New Markets",
  "Launch a Product",
  "Modernise Existing Systems",
];

export default function ConversionForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    watch,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: "onTouched",
  });
  const messageVal = watch("message") ?? "";
  const onSubmit = async (data: ConsultationFormData) => {
    console.log(data);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      reset();
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Begin
              </div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Configure Your
                <br />
                Solution<span className="text-primary">.</span>
              </h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-md font-light">
                Tell us about your business. Our team will analyse your
                requirements and deliver a strategic roadmap within 48 hours.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { label: "Response Time", value: "< 48 Hours" },
                  { label: "Initial Consultation", value: "Complimentary" },
                  { label: "NDA Provided", value: "Standard" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-border/30"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-inter text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-inter text-2xl font-semibold text-foreground mb-3">
                  Consultation Initiated
                </h3>
                <p className="font-inter text-sm text-muted-foreground max-w-sm">
                  Our team will analyse your requirements and reach out within
                  48 hours with a strategic proposal tailored to your industry.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  // Solution Configuration Terminal
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="Full name"
                      className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.fullName ? "border-destructive" : "border-border/50"}`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Email Address*
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="work@company.com"
                      className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.email ? "border-destructive" : "border-border/50"}`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Phone Number
                  </label>

                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.phone ? "border-destructive" : "border-border/50"}`}
                  />

                  {errors.phone && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white/70 text-xs font-medium mb-1.5">
                    What can we help with?{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.service ? "border-destructive" : "border-border/50"}`}
                  >
                    <option value="" disabled selected>
                      Select a service…
                    </option>
                    <option className="text-black" value="erp">
                      ERP Solutions
                    </option>
                    <option className="text-black" value="saas">
                      SaaS Platform
                    </option>
                    <option className="text-black" value="iot">
                      IoT Systems
                    </option>
                    <option className="text-black" value="data-analytics">
                      Data & Analytics
                    </option>
                    <option className="text-black" value="ai">
                      AI Integration
                    </option>
                    <option className="text-black" value="cybersecurity">
                      Cybersecurity
                    </option>
                    <option className="text-black" value="other">
                      Other / General Enquiry
                    </option>
                  </select>
                  {errors.service && touchedFields.service && (
                    <p className="error-msg">
                      <AlertCircle size={11} />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Budget Range
                  </label>

                  <select
                    {...register("budget")}
                    defaultValue=""
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.budget ? "border-destructive" : "border-border/50"}`}
                  >
                    <option value="">Not specified</option>
                    <option className="text-black" value="under-1m">
                      Under ₦1 million
                    </option>
                    <option className="text-black" value="1m-5m">
                      ₦1M – ₦5M
                    </option>
                    <option className="text-black" value="5m-20m">
                      ₦5M – ₦20M
                    </option>
                    <option className="text-black" value="20m-plus">
                      ₦20M+
                    </option>
                    <option className="text-black" value="not-sure">
                      Not sure yet
                    </option>
                  </select>

                  {errors.budget && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/70 text-xs font-medium mb-1.5">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements…"
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.message ? "border-destructive" : "border-border/50"}`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && touchedFields.message ? (
                      <p className="error-msg">
                        <AlertCircle size={11} />
                        {errors.message.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span
                      className={clsx(
                        "text-xs",
                        messageVal.length > 1800
                          ? "text-red-400"
                          : "text-white/30",
                      )}
                    >
                      {messageVal.length}/2000
                    </span>
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register("consent")}
                      type="checkbox"
                      className="mt-1 accent-primary"
                    />

                    <span className="font-inter text-sm text-muted-foreground leading-relaxed">
                      I agree to be contacted by the Advantage team regarding my
                      enquiry.
                    </span>
                  </label>

                  {errors.consent && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Submit Configuration <ArrowUpRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
