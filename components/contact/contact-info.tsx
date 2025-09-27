'use client'

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're here to help you with all your agricultural, pharmaceutical, and fine chemical needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left Side: Contact Cards */}
          <div className="md:w-1/2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Head Office</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Palm Group Corporate Center
                      <br />
                      123 Agriculture Boulevard
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 22 1234 5678</p>
                    <p className="text-muted-foreground text-sm">+91 22 1234 5679 (Fax)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@palmgroup.com</p>
                    <p className="text-muted-foreground text-sm">sales@palmgroup.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Google Map */}
          <div className="md:w-1/2 mt-10 md:mt-0 h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7334.713169687901!2d72.637466!3d23.193672000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a388ab6b67b%3A0xf91c34ff1f51a76a!2sPalm%20Group!5e0!3m2!1sen!2sus!4v1758964965108!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palm Group Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}