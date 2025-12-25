import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] xl:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/edd01c3e-6a1a-4062-bfb3-a802196eb58c.jpg"
            alt="Peaceful yoga and wellness studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl xl:text-6xl font-bold text-white mb-6">
            Welcome to RK CHIRO Yog Centre
          </h1>
          <p className="text-lg xl:text-2xl text-white/95 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of chiropractic care and yoga therapy for holistic wellness and spinal health
          </p>
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground smooth-transition w-full xl:w-auto">
              <Link to="/skills">
                Explore Our Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="smooth-transition w-full xl:w-auto">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 xl:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">
              <span className="gradient-text">Your Journey to Wellness Starts Here</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At RK CHIRO Yog Centre, we combine the ancient wisdom of yoga with modern chiropractic techniques 
              to provide comprehensive care for your body, mind, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            <Card className="card-hover border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Holistic Approach</h3>
                  <p className="text-muted-foreground">
                    We treat the whole person, not just symptoms, combining physical therapy with mindful practices for complete wellness.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Practitioners</h3>
                  <p className="text-muted-foreground">
                    Our certified chiropractors and yoga instructors bring years of experience and dedication to your care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Join hundreds of satisfied clients who have achieved lasting relief and improved quality of life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 xl:py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <div className="order-2 xl:order-1">
              <h2 className="text-3xl xl:text-4xl font-bold mb-6">
                Chiropractic-Based Yoga Therapy
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our unique approach integrates chiropractic adjustments with therapeutic yoga practices, 
                creating a powerful synergy for spinal health and overall wellness.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Spinal Alignment & Correction</h4>
                    <p className="text-muted-foreground">Professional chiropractic adjustments to restore proper alignment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Therapeutic Yoga Programs</h4>
                    <p className="text-muted-foreground">Customized yoga sequences designed for healing and strength</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pain Management & Prevention</h4>
                    <p className="text-muted-foreground">Long-term solutions for chronic pain and injury prevention</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 smooth-transition">
                <Link to="/skills">
                  Learn More About Our Services
                </Link>
              </Button>
            </div>
            <div className="order-1 xl:order-2">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/fce58da9-2c91-4f36-99e4-6827a0bb866f.jpg"
                alt="Chiropractic yoga therapy session"
                className="w-full h-[400px] xl:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 xl:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards a pain-free, balanced life. Our team is here to guide you on your wellness journey.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground smooth-transition">
            <Link to="/contact">
              Schedule Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
