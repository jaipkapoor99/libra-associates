import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { Home as HomeIcon, Landmark, Phone, Shield, Users } from 'lucide-react';

export const Home = () => {
  return (
    <main className="space-y-4">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center p-2">
          <div className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-blue-600 drop-shadow-sm">
              Libra Associates
            </CardTitle>
            <p className="text-sm text-gray-500">Est. 19 Dec. 2005</p>
          </div>
          <CardDescription className="text-lg text-gray-600 italic font-bold pt-2">
            "Where The Mind Is Without Fear And The Head Is Held High..!"
            <br />- Rabrindranath Tagore
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-6 pb-4 text-center">
          <p className="text-md text-blue-600 font-bold drop-shadow-sm">
            Justice, Balance, and Empowerment
          </p>
          <p className="text-base text-gray-700">
            Our motto, inspired by Rabindranath Tagore, reflects our commitment
            to empowering clients, providing them with the confidence and
            dignity to navigate their legal challenges.
          </p>
          <p className="text-base text-gray-700">
            At Libra Associates, our identity is rooted in the principles of
            justice, balance, and fairness—symbolized by our name, Libra, and
            its representation of the scales.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader className="p-4">
          <CardTitle className="text-2xl font-semibold">
            Meet Our Founder and Chief Legal Advisor
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <h3 className="text-xl font-bold text-blue-600 drop-shadow-sm">
            Adv. Neelam Alwin George, LL.M
          </h3>
          <p className="text-base text-gray-700 mt-2">
            Adv. George leads our firm with a wealth of specialized knowledge,
            decades of experience, and a steadfast commitment to ethical,
            client-focused legal practice. Her expertise in property law is
            complemented by a deep understanding of the emotional and financial
            stakes involved in every transaction.
          </p>
          <p className="text-base text-gray-700 mt-2">
            She is a trusted advisor, a skilled negotiator, and a powerful
            advocate for her clients' rights.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center p-6">
          <CardTitle className="text-2xl font-bold text-blue-600 drop-shadow-sm">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            For the best legal services in Nagpur.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-center gap-3 px-6 pb-6">
          <Button
            asChild
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <a
              href="https://wa.me/919890624103"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Contact on WhatsApp
            </a>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <a href="tel:+919890624103">
              <Phone className="mr-2" /> Call Us (+91 9890624103)
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-600 drop-shadow-sm">
            Our Services
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Specialized Expertise in Property Law
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Landmark className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">
                Legal Consultancy for Home Loans
              </h3>
              <p className="text-gray-600 mt-2">Expert guidance.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <HomeIcon className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">Property Documents</h3>
              <p className="text-gray-600 mt-2">
                Meticulous handling of all critical property transactions, from
                Sale Deeds to Wills.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Shield className="text-blue-500 mb-4" size={48} />
              <h3 className="text-lg font-semibold">
                Mediation & Conciliation
              </h3>
              <p className="text-gray-600 mt-2">
                Alternative dispute resolution to avoid lengthy and costly court
                battles.
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
