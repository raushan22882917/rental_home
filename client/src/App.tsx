import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import LeadCapture from "@/pages/lead-capture";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/services" component={() => <Layout><Services /></Layout>} />
      <Route path="/case-studies" component={() => <Layout><CaseStudies /></Layout>} />
      <Route path="/blog" component={() => <Layout><Blog /></Layout>} />
      <Route path="/contact" component={() => <Layout><Contact /></Layout>} />
      <Route path="/lead-capture" component={() => <LeadCapture />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
