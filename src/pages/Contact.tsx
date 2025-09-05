import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Pin } from "lucide-react";

export const Contact = () => {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            We are available for consultations and inquiries. Please feel free
            to reach out to us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Button asChild>
              <a href="https://wa.me/919890624103" target="_blank" rel="noopener noreferrer">
                <MessageSquare /> Contact on WhatsApp
              </a>
            </Button>
            <Button asChild>
              <a href="mailto:neelamalwingeorge@yahoo.co.in">
                <Mail /> Email Us
              </a>
            </Button>
          </div>
          <div>
            <Card>
              <CardContent>
                <Pin />
                <div>
                  <CardTitle>Our Office</CardTitle>
                  <CardDescription>
                    S-3, S-7 Hemant Building, Rudrasen Complex, New Mankapur,
                    Nagpur - 440030
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Phone />
                <div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>
                    +91 9890624103 / +91 9561097103
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Mail />
                <div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>
                    neelamalwingeorge@yahoo.co.in /
                    associateslibra@yahoo.co.in
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
