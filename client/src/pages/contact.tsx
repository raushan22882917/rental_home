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
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const officeInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Level 12, One World Tower, BKC, Mumbai, Maharashtra 400051",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@realtical.com",
    href: "mailto:hello@realtical.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Saturday, 9 AM – 7 PM IST",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <img src="/images/about-office.png" alt="Realtical office" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/75 to-[#060e1f]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/90 via-transparent to-[#060e1f]/70" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `radial-gradient(ellipse at 50% 60%, rgba(196,146,31,0.4) 0%, transparent 55%)` }}
        />
        <div className="container-custom relative z-10 pt-32 pb-16 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-5 max-w-3xl mx-auto drop-shadow-lg">
            Let's Talk About{" "}
            <span className="text-[#e8b84b] italic">Your Project</span>
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto drop-shadow-md">
            Whether you're launching a new project or need to improve your existing marketing, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-serif text-[#0d1b38] mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team is available Monday through Saturday. For urgent inquiries, WhatsApp us directly for a faster response.
              </p>

              <div className="space-y-5 mb-8">
                {officeInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          data-testid={`link-contact-${label.toLowerCase()}`}
                          className="text-foreground text-sm hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919876543210?text=Hello!%20I'd%20like%20to%20discuss%20my%20real%20estate%20project%20with%20Realtical."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-contact-whatsapp"
                className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1da851] transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-border">
                <p className="text-sm font-bold text-[#0d1b38] mb-2">
                  Prefer a call?
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Book a free 30-minute discovery call directly on our calendar. We'll discuss your project and suggest the best approach.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-[#0d1b38] mb-3">Message Received!</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours. For faster response, WhatsApp us directly.
                  </p>
                  <Button
                    data-testid="button-send-another"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-bold font-serif text-[#0d1b38] mb-6">Send Us a Message</h3>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-contact-name"
                                  placeholder="Rajesh Sharma"
                                  className="bg-white border-border"
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
                              <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Email *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-contact-email"
                                  type="email"
                                  placeholder="rajesh@company.com"
                                  className="bg-white border-border"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Phone Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-contact-phone"
                                  placeholder="+91 98765 43210"
                                  className="bg-white border-border"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-contact-subject"
                                  placeholder="Lead generation inquiry"
                                  className="bg-white border-border"
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
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                data-testid="textarea-contact-message"
                                placeholder="Tell us about your project — location, type of development, target audience, and your main marketing challenge..."
                                className="bg-white border-border min-h-[130px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        data-testid="button-contact-submit"
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full gold-gradient text-white border-0 font-semibold py-5"
                      >
                        {mutation.isPending ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2" size={16} />
                          </>
                        )}
                      </Button>

                      <p className="text-muted-foreground text-xs text-center">
                        We respond to all inquiries within 24 business hours.
                      </p>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
