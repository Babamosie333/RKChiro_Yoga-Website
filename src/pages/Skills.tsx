import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Activity, Sparkles, Target, Brain, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const programs = [
    {
      title: 'Spinal Adjustment Therapy',
      description: 'Professional chiropractic adjustments to correct misalignments and restore proper spinal function.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/f2df44d2-ff7d-49b0-acb9-259df86933f3.jpg',
      benefits: ['Pain relief', 'Improved mobility', 'Better posture', 'Enhanced nervous system function'],
      icon: Activity
    },
    {
      title: 'Therapeutic Yoga Classes',
      description: 'Specialized yoga programs designed to complement chiropractic care and promote healing.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e99b7e40-6d31-417e-89ec-0384abd24cf1.jpg',
      benefits: ['Increased flexibility', 'Stress reduction', 'Core strengthening', 'Mind-body balance'],
      icon: Sparkles
    },
    {
      title: 'Rehabilitation Programs',
      description: 'Customized recovery plans combining chiropractic care with targeted exercises.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ed81529b-84f3-40bd-8c92-ece3434562f5.jpg',
      benefits: ['Faster recovery', 'Injury prevention', 'Strength building', 'Long-term wellness'],
      icon: Target
    }
  ];

  const qualifications = [
    {
      title: 'Certified Chiropractors',
      description: 'Our practitioners hold advanced degrees in chiropractic medicine with years of clinical experience.',
      icon: Shield
    },
    {
      title: 'Yoga Therapy Specialists',
      description: 'Certified yoga instructors trained in therapeutic applications for spinal health and rehabilitation.',
      icon: Brain
    },
    {
      title: 'Holistic Health Experts',
      description: 'Comprehensive training in integrative wellness approaches for complete patient care.',
      icon: Sparkles
    }
  ];

  const techniques = [
    {
      name: 'Manual Adjustments',
      description: 'Hands-on spinal manipulation to restore joint mobility and reduce pain'
    },
    {
      name: 'Soft Tissue Therapy',
      description: 'Massage and myofascial release techniques to relax muscles and improve circulation'
    },
    {
      name: 'Postural Correction',
      description: 'Assessment and correction of postural imbalances through targeted exercises'
    },
    {
      name: 'Therapeutic Stretching',
      description: 'Guided stretching routines to improve flexibility and prevent injury'
    },
    {
      name: 'Core Stabilization',
      description: 'Strengthening exercises to support spinal health and prevent future issues'
    },
    {
      name: 'Mindfulness Integration',
      description: 'Breathing and meditation techniques to enhance healing and reduce stress'
    }
  ];

  const benefits = [
    'Relief from chronic back and neck pain',
    'Improved spinal alignment and posture',
    'Enhanced flexibility and range of motion',
    'Reduced muscle tension and stiffness',
    'Better sleep quality and energy levels',
    'Stress reduction and mental clarity',
    'Prevention of future injuries',
    'Improved athletic performance',
    'Enhanced overall quality of life'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-16 xl:py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl xl:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Programs & Expertise</span>
          </h1>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of chiropractic-based yoga programs and therapeutic techniques 
            designed to restore your health and vitality.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 xl:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl xl:text-4xl font-bold text-center mb-12">
            Chiropractic Yoga Programs
          </h2>
          <div className="space-y-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="overflow-hidden card-hover border-2">
                  <div className={`grid grid-cols-1 xl:grid-cols-2 gap-0 ${index % 2 === 1 ? 'xl:grid-flow-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'xl:col-start-2' : ''}>
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[300px] xl:h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 xl:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{program.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {program.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Benefits</h4>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                          {program.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 xl:py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl xl:text-4xl font-bold text-center mb-4">
            Expert Qualifications
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team brings together the best of chiropractic medicine and yoga therapy, 
            backed by rigorous training and certification.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <Card key={index} className="card-hover border-2">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{qual.title}</CardTitle>
                    <CardDescription className="text-base">{qual.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 xl:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl xl:text-4xl font-bold text-center mb-4">
            Therapeutic Techniques
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We employ a variety of evidence-based techniques to address your unique needs and goals.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-2">
                    <Badge variant="outline" className="shrink-0 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <span>{technique.name}</span>
                  </CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 xl:py-24 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <div>
              <h2 className="text-3xl xl:text-4xl font-bold mb-6">
                Benefits of Chiropractic Yoga
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the transformative power of combining chiropractic care with yoga therapy. 
                Our integrated approach delivers comprehensive benefits for your physical and mental well-being.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 smooth-transition hover:bg-card">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/6a6819de-ef65-4eb8-9b11-15c69c5ab921.jpg"
                alt="Wellness center interior"
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/e99b7e40-6d31-417e-89ec-0384abd24cf1.jpg"
                alt="Therapeutic yoga practice"
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
