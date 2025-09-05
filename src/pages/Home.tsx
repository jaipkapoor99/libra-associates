import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home as HomeIcon, Landmark, Shield, Users } from "lucide-react";

export const Home = () => {
  return (
    <main className="space-y-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600 drop-shadow-sm">
            Libra Associates
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 italic">
            "Where The Mind Is Without Fear And The Head Is Held High..!"
            <br />- Rabindranath Tagore
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-600 drop-shadow-sm">Our Identity</CardTitle>
            <CardDescription className="text-md text-gray-600">Justice, Balance, and Empowerment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              At Libra Associates, our identity is rooted in the principles of
              justice, balance, and fairness—symbolized by our name, Libra, and
              its representation of the scales.
            </p>
            <p className="text-gray-700">
              Our motto, inspired by Rabindranath Tagore, reflects our
              commitment to empowering clients, providing them with the
              confidence and dignity to navigate their legal challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Meet Our Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold text-blue-600 drop-shadow-sm">Adv. Neelam Alwin George, LL.M</h3>
            <p className="text-gray-700 mt-2">
              Adv. George leads our firm with a wealth of specialized
              knowledge, decades of experience, and a steadfast commitment to
              ethical, client-focused legal practice.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600 drop-shadow-sm">Our Services</CardTitle>
          <CardDescription className="text-lg text-gray-600">Specialized Expertise in Property Law</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Landmark className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Legal Consultancy for Home Loans</h3>
              <p className="text-gray-600 mt-2">
                Expert guidance.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <HomeIcon className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Property Documents</h3>
              <p className="text-gray-600 mt-2">
                Meticulous handling of all critical property
                transactions, from Sale Deeds to Wills.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Shield className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Mediation & Conciliation</h3>
              <p className="text-gray-600 mt-2">
                Alternative dispute resolution to avoid lengthy and costly
                court battles.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Users className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Training & Development</h3>
              <p className="text-gray-600 mt-2">
                Specialized training on the legal aspects of home loans to
                empower our clients.
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
};
