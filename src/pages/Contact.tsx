import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'RK CHIRO Yog Centre',
      details: 'Your wellness destination',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      details: 'Mon-Sat: 9AM - 7PM',
      color: 'text-secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@rkchiroyog.com',
      details: 'We reply within 24 hours',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: 'Monday - Saturday',
      details: '9:00 AM - 7:00 PM',
      color: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-16 xl:py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl xl:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs? Ready to start your wellness journey? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mb-4 shadow-md">
                        <Icon className={`h-7 w-7 ${info.color}`} />
                      </div>
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="font-bold text-lg mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="smooth-transition"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="smooth-transition"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="smooth-transition"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="smooth-transition resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground smooth-transition"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <Card className="border-2 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Find Us</CardTitle>
                  <CardDescription>
                    Visit our center for a personalized consultation and tour of our facilities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-[400px] bg-muted relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346069!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1703001234567!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RK CHIRO Yog Centre Location"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Why Visit Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm">Free initial consultation to assess your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-sm">State-of-the-art facilities with modern equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm">Personalized treatment plans tailored to you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm">Convenient parking and accessible location</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Detail */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Operating Hours</CardTitle>
              <CardDescription>We're here to serve you throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent/10">
                  <span className="font-semibold">Emergency</span>
                  <span className="text-accent font-semibold">Call Anytime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
