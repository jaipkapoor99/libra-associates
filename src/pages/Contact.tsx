import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Pin } from "lucide-react";

export const Contact = () => {
  return (
    <main className="space-y-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">Get in Touch</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            We are available for consultations and inquiries. Please feel free
            to reach out to us.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <a href="https://wa.me/919890624103" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" /> Contact on WhatsApp
              </a>
            </Button>
            <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <a href="mailto:neelamalwingeorge@yahoo.co.in">
                <Mail className="mr-2" /> Email Us
              </a>
            </Button>
          </div>
          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex items-center p-4">
                <Pin className="text-blue-500 mr-4" size={24} />
                <div>
                  <CardTitle className="text-lg font-semibold">Our Office</CardTitle>
                  <a href="https://maps.app.goo.gl/pnu6Kz1QJjkwhjSd8" target="_blank" rel="noopener noreferrer">
                    <CardDescription className="hover:text-blue-500 transition-colors duration-300">
                      S-3, Hemant Building, Rudrasen Complex, New Mankapur,
                      Nagpur - 440030
                    </CardDescription>
                  </a>
                  <Button asChild size="sm" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                    <a href="https://maps.app.goo.gl/pnu6Kz1QJjkwhjSd8" target="_blank" rel="noopener noreferrer">
                      Open in Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex items-center p-4">
                <Phone className="text-blue-500 mr-4" size={24} />
                <div>
                  <CardTitle className="text-lg font-semibold">Phone</CardTitle>
                  <div className="flex space-x-2 mt-2">
                    <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                      <a href="tel:+919890624103">
                        +91 9890624103
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                      <a href="tel:+919561097103">
                        +91 9561097103
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
                    <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                      <a href="mailto:neelamalwingeorge@yahoo.co.in">
                        neelamalwingeorge@yahoo.co.in
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                      <a href="mailto:associateslibra@yahoo.co.in">
                        associateslibra@yahoo.co.in
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
