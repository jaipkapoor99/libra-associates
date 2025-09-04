import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Landmark, Shield, Users } from "lucide-react";

export const About = () => {
  return (
    <main className="animate-fade-in container mx-auto p-4 md:p-8">
      <Card className="text-center my-8 md:my-12 border-none shadow-none bg-transparent">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl md:text-5xl font-bold tracking-tight">
            Libra Associates
          </CardTitle>
          <CardDescription className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            "Where The Mind Is Without Fear And The Head Is Held High..!"
            <br />- Rabindranath Tagore
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle>Our Identity</CardTitle>
            <CardDescription>Justice, Balance, and Empowerment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <CardDescription className="text-base leading-relaxed">
              The identity of Libra Associates is meticulously crafted, beginning
              with its name. The choice of "Libra," represented by the scales,
              immediately evokes the core tenets of justice, balance, and
              fairness.
            </CardDescription>
            <CardDescription className="text-base leading-relaxed">
              This is powerfully reinforced by our motto, a quote from
              Rabindranath Tagore, which elevates our mission beyond mere legal
              transactions. It suggests a philosophy of empowerment, assuring
              clients that they will not only receive sound legal counsel but
              will also be equipped to face their challenges with confidence and
              dignity.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Meet Our Principal</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="Adv Neelam Alwin George" />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <CardTitle className="text-lg">Adv. Neelam Alwin George, LL.M</CardTitle>
            <CardDescription className="text-center leading-relaxed">
              With an advanced level of legal education, specialized
              knowledge, and decades of experience, Adv. George helms the firm, ensuring a commitment to
              ethical principles and client-focused accessibility.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 shadow-lg">
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>Specialized Expertise in Property Law</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Landmark className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <CardTitle className="text-base">Legal Consultancy for Home Loans</CardTitle>
                  <CardDescription>
                    Ensuring clarity and security in complex financial agreements.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Home className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <CardTitle className="text-base">Property Documents for Individuals & Builder Schemes</CardTitle>
                  <CardDescription>
                    Meticulously handling all critical property transactions, including Sale Deeds, Wills, and Power of Attorney.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <CardTitle className="text-base">Mediation & Conciliation for Property Disputes</CardTitle>
                  <CardDescription>
                    Offering expert alternative dispute resolution to avoid lengthy court battles.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/20">
              <CardContent className="flex items-start gap-4 p-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <CardTitle className="text-base">Training & Development</CardTitle>
                  <CardDescription>
                    Empowering our clients and community with specialized training on the legal aspects of home loans.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
