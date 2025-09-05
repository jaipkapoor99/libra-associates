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
    <main>
      <Card>
        <CardHeader>
          <CardTitle>
            Libra Associates
          </CardTitle>
          <CardDescription>
            "Where The Mind Is Without Fear And The Head Is Held High..!"
            <br />- Rabindranath Tagore
          </CardDescription>
        </CardHeader>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Our Identity</CardTitle>
            <CardDescription>Justice, Balance, and Empowerment</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>
              At Libra Associates, our identity is rooted in the principles of
              justice, balance, and fairness—symbolized by our name, Libra, and
              its representation of the scales.
            </CardDescription>
            <CardDescription>
              Our motto, inspired by Rabindranath Tagore, reflects our
              commitment to empowering clients, providing them with the
              confidence and dignity to navigate their legal challenges.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meet Our Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle>Adv. Neelam Alwin George, LL.M</CardTitle>
            <CardDescription>
              Adv. George leads our firm with a wealth of specialized
              knowledge, decades of experience, and a steadfast commitment to
              ethical, client-focused legal practice.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>Specialized Expertise in Property Law</CardDescription>
          </CardHeader>
          <CardContent>
            <Card>
              <CardContent>
                <Landmark />
                <div>
                  <CardTitle>Legal Consultancy for Home Loans</CardTitle>
                  <CardDescription>
                    Expert guidance to.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Home />
                <div>
                  <CardTitle>Property Documents</CardTitle>
                  <CardDescription>
                    Meticulous handling of all critical property
                    transactions, from Sale Deeds to Wills.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Shield />
                <div>
                  <CardTitle>Mediation & Conciliation</CardTitle>
                  <CardDescription>
                    Alternative dispute resolution to avoid lengthy and costly
                    court battles.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Users />
                <div>
                  <CardTitle>Training & Development</CardTitle>
                  <CardDescription>
                    Specialized training on the legal aspects of home loans to
                    empower our clients.
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
