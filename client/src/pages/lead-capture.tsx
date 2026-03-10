import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Check, Star, Users, TrendingUp, Shield, Clock, Award, ArrowRight, CheckCircle, Phone
} from "lucide-react";
import { useState } from "react";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type LeadForm = z.infer<typeof leadSchema>;

const benefits = [
  "Free 30-minute strategy session with our experts",
  "Custom lead generation blueprint for your project",
  "Competitor analysis for your micro-market",
  "Recommended ad budget and expected ROI",
  "No obligation, no pressure",
];

const socialProof = [
  { value: "2,400+", label: "Leads Generated" },
  { value: "₹850Cr+", label: "Sales Enabled" },
  { value: "120+", label: "Happy Builders" },
  { value: "5 Star", label: "Avg. Client Rating" },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Prestige Spaces",
    text: "Booked a strategy call on Monday, campaigns were live by Friday. 340 leads in 45 days.",
    avatar: "RS",
  },
  {
    name: "Priya Malhotra",
    role: "Marketing Head, Skyline Developers",
    text: "The strategy call alone gave us 3 ideas we implemented immediately. Worth every minute.",
    avatar: "PM",
  },
];

export default function LeadCapture() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: LeadForm) => {
      const res = await apiRequest("POST", "/api/leads", {
        ...data,
        source: "lead-capture-page",
      });
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or WhatsApp us directly.",
      });
    },
  });

  return (
    <div className="min-h-screen bg-[#060e1f]">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(circle at 20% 80%, rgba(196,146,31,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,146,31,0.2) 0%, transparent 50%)` }}
      />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel — Value Proposition */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-32 pb-12 lg:py-24">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-white font-bold font-serif">R</span>
              </div>
              <span className="text-white text-xl font-bold font-serif">Realtical</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#e8b84b]/15 border border-[#e8b84b]/30 text-[#e8b84b] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Award size={10} />
              Free Strategy Session
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight mb-5">
              Get Your Free{" "}
              <span className="text-[#e8b84b]">Property Lead</span>{" "}
              Generation Blueprint
            </h1>

            <p className="text-white/90 text-base leading-relaxed mb-8">
              In 30 minutes, our experts will analyze your project and give you a custom roadmap to generate consistent, qualified leads — no obligation.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e8b84b] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-[#0a1628]" />
                  </div>
                  <span className="text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {socialProof.map(({ value, label }) => (
                <div key={label} className="bg-white/8 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-[#e8b84b] text-lg font-bold font-serif">{value}</div>
                  <div className="text-white/80 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {testimonials.map(({ name, role, text, avatar }) => (
                <div key={name} className="bg-white/6 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={10} className="text-[#e8b84b] fill-[#e8b84b]" />
                    ))}
                  </div>
                  <p className="text-white/85 text-xs leading-relaxed mb-3 italic">"{text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-white text-xs font-bold">
                      {avatar}
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">{name}</div>
                      <div className="text-[#e8b84b]/80 text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="lg:w-1/2 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-24">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold font-serif text-[#0d1b38] mb-3">
                  You're All Set!
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team will contact you within 2 hours to schedule your free strategy call. Check your email for confirmation.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-[#0d1b38] mb-1">What happens next?</p>
                  <div className="space-y-2 text-left">
                    {[
                      "1. Our team reviews your details",
                      "2. We call you to confirm the session time",
                      "3. 30-min strategy call on your preferred date",
                      "4. You receive your custom lead gen blueprint",
                    ].map((step) => (
                      <div key={step} className="text-muted-foreground text-xs flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I%20just%20submitted%20my%20details%20for%20a%20strategy%20call.%20Looking%20forward%20to%20speaking!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1da851] transition-colors justify-center text-sm"
                >
                  <Phone size={16} />
                  Also message us on WhatsApp
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold font-serif text-[#0d1b38] mb-1">
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Fill in your details and we'll reach out within 2 hours.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              Your Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-lead-name"
                                placeholder="Rajesh Sharma"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-lead-email"
                                type="email"
                                placeholder="you@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              Phone *
                            </FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-lead-phone"
                                placeholder="+91 98765 43210"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Company / Project Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-lead-company"
                              placeholder="Prestige Spaces / Skyline Heights"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              Project Type
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-lead-project-type">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="luxury-apartments">Luxury Apartments</SelectItem>
                                <SelectItem value="mid-segment">Mid-Segment Apartments</SelectItem>
                                <SelectItem value="affordable">Affordable Housing</SelectItem>
                                <SelectItem value="villa-plots">Villa / Plotted</SelectItem>
                                <SelectItem value="commercial">Commercial</SelectItem>
                                <SelectItem value="mixed-use">Mixed Use</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              Monthly Ad Budget
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-lead-budget">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-1L">Under ₹1 Lakh</SelectItem>
                                <SelectItem value="1L-3L">₹1–3 Lakhs</SelectItem>
                                <SelectItem value="3L-5L">₹3–5 Lakhs</SelectItem>
                                <SelectItem value="5L-10L">₹5–10 Lakhs</SelectItem>
                                <SelectItem value="above-10L">Above ₹10 Lakhs</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Tell Us About Your Challenge
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              data-testid="textarea-lead-message"
                              placeholder="E.g. We're launching a luxury tower in Pune and need 200 qualified leads/month..."
                              className="resize-none min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      data-testid="button-lead-submit"
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full gold-gradient text-white border-0 font-semibold py-5 text-base"
                    >
                      {mutation.isPending ? (
                        "Submitting..."
                      ) : (
                        <>
                          Book My Free Strategy Call
                          <ArrowRight className="ml-2" size={18} />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-4 pt-1">
                      {[
                        { icon: Shield, text: "100% Confidential" },
                        { icon: Clock, text: "Response in 2 hours" },
                        { icon: Award, text: "No Obligation" },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Icon size={11} className="text-primary" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
