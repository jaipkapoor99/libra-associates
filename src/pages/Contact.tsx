import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GoogleMapsIcon } from '@/components/common/GoogleMapsIcon';
import { Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export const Contact = () => {
  return (
    <main className="space-y-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex items-center p-4">
                <Phone className="text-blue-500 mr-4" size={24} />
                <div>
                  <CardTitle className="text-lg font-semibold">Phone</CardTitle>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a href="tel:+919890624103">+91 9890624103</a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a href="tel:+919561097103">+91 9561097103</a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a
                        href="https://wa.me/919890624103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <WhatsAppIcon /> WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex items-center p-4">
                <Mail className="text-blue-500 mr-4" size={24} />
                <div>
                  <CardTitle className="text-lg font-semibold">Email</CardTitle>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a href="mailto:neelamalwingeorge@yahoo.co.in">
                        neelamalwingeorge@yahoo.co.in
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a href="mailto:associateslibra@yahoo.co.in">
                        associateslibra@yahoo.co.in
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <a
                    href="https://maps.app.goo.gl/pnu6Kz1QJjkwhjSd8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleMapsIcon className="mr-4 h-6 w-6" />
                  </a>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Our Office
                    </CardTitle>
                    <a
                      href="https://maps.app.goo.gl/pnu6Kz1QJjkwhjSd8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardDescription className="hover:text-blue-500 transition-colors duration-300">
                        S-3, Hemant Building, Rudrasen Complex, New Mankapur,
                        Nagpur - 440030
                      </CardDescription>
                    </a>
                    <Button
                      asChild
                      size="sm"
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                      <a
                        href="https://maps.app.goo.gl/pnu6Kz1QJjkwhjSd8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Maps
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-4">
                  <iframe
                    src="https://maps.google.com/maps?q=S-3,%20Hemant%20Building,%20Rudrasen%20Complex,%20New%20Mankapur,%20Nagpur%20-%20440030&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Libra Associates Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
