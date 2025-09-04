import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Pin } from "lucide-react";

export const Contact = () => {
  return (
    <main className="animate-fade-in container mx-auto p-4 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Get in Touch</CardTitle>
          <CardDescription className="text-base">
            We are available for consultations and inquiries. Please feel free to reach out to us.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://wa.me/919890624103" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" /> Contact on WhatsApp
              </Button>
            </a>
            <a href="mailto:neelamalwingeorge@yahoo.co.in" className="w-full">
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </Button>
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Pin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <CardTitle className="text-base">Address</CardTitle>
                  <CardDescription>
                    S-3, S-7 Hemant Building, Rudrasen Complex, New Mankapur, Nagpur - 440030
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <CardTitle className="text-base">Phone</CardTitle>
                  <CardDescription>
                    +91 9890624103 / +91 9561097103
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <CardTitle className="text-base">Email</CardTitle>
                  <CardDescription>
                    neelamalwingeorge@yahoo.co.in / associateslibra@yahoo.co.in
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
