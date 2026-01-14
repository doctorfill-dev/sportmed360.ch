import React, { useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Stethoscope, 
  Users, 
  Activity, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Heart,
  Dumbbell,
  Target,
  Clock,
  Droplet,
  Syringe,
  FlaskConical,
  HeartPulse,
  ChevronLeft
} from 'lucide-react';

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const benefits = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Médecine du Sport",
      description: "Consultations spécialisées en médecine du sport et troubles musculo-squelettiques"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "MTT - Medical Training Therapy",
      description: "Thérapie par l'entraînement médical pour une rééducation optimale"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Bilans & Analyses",
      description: "Bilans sanguins complets et analyses biologiques approfondies"
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "Vaccins & Perfusions",
      description: "Administration de vaccins et perfusions thérapeutiques"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "ECG & Tests d'Effort",
      description: "Électrocardiogrammes au repos et à l'effort pour évaluation cardiaque"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Approche Pluridisciplinaire",
      description: "Collaboration entre médecins, physiothérapeutes et spécialistes du mouvement"
    }
  ];

  const services = [
    {
      title: "Médecine du Sport",
      icon: <Stethoscope className="w-6 h-6" />,
      description: "Expertise médicale complète pour sportifs et patients actifs",
      items: [
        "Consultation médecine du sport",
        "Diagnostic troubles musculo-squelettiques",
        "Prévention des blessures sportives",
        "Suivi médical personnalisé",
        "Bilan de santé sportif complet"
      ]
    },
    {
      title: "MTT - Medical Training Therapy",
      icon: <Activity className="w-6 h-6" />,
      description: "Thérapie par l'entraînement médical guidé",
      items: [
        "Programme d'entraînement thérapeutique",
        "Rééducation fonctionnelle active",
        "Renforcement musculaire ciblé",
        "Retour au sport progressif",
        "Suivi avec physiothérapeute"
      ]
    },
    {
      title: "Analyses & Bilans",
      icon: <FlaskConical className="w-6 h-6" />,
      description: "Examens médicaux et analyses complètes",
      items: [
        "Bilans sanguins complets",
        "Analyses biologiques approfondies",
        "Interprétation médicale des résultats",
        "Suivi personnalisé",
        "Conseils nutritionnels associés"
      ]
    },
    {
      title: "Vaccins & Perfusions",
      icon: <Syringe className="w-6 h-6" />,
      description: "Soins préventifs et thérapeutiques",
      items: [
        "Vaccination complète (voyage, grippe, etc.)",
        "Perfusions thérapeutiques",
        "Perfusions vitaminées",
        "Injections thérapeutiques",
        "Suivi post-administration"
      ]
    },
    {
      title: "ECG & Tests Cardiaques",
      icon: <HeartPulse className="w-6 h-6" />,
      description: "Évaluations cardiovasculaires complètes",
      items: [
        "ECG au repos",
        "ECG à l'effort (test d'effort)",
        "Évaluation cardiaque sportive",
        "Certificats médicaux sportifs",
        "Suivi cardiologique"
      ]
    },
    {
      title: "Approche Intégrée",
      icon: <Users className="w-6 h-6" />,
      description: "Collaboration pluridisciplinaire optimale",
      items: [
        "Médecins spécialistes MSK",
        "Physiothérapeutes qualifiés",
        "Collaboration avec evo360",
        "Suivi coordonné patient",
        "Communication entre professionnels"
      ]
    }
  ];

  const evo360Images = [
    "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzfGVufDB8fHx8MTc2ODMyOTQyNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1567598508481-65985588e295?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBmaXRuZXNzfGVufDB8fHx8MTc2ODMyOTQyNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1744551472726-24a3eb12e82a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBmaXRuZXNzfGVufDB8fHx8MTc2ODMyOTQyNHww&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/35567443/pexels-photo-35567443.jpeg",
    "https://images.unsplash.com/photo-1616940779493-6958fbd615fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNlbnRlcnxlbnwwfHx8fDE3NjgzMjk0MzB8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwyfHx3ZWxsbmVzcyUyMGNlbnRlcnxlbnwwfHx8fDE3NjgzMjk0MzB8MA&ixlib=rb-4.1.0&q=85"
  ];

  const handleBooking = () => {
    window.open('https://booking.katarinahealth.com/fr/evo360', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://evo360.ch/Images/e.png" 
              alt="evo360 Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SportMed360</h1>
              <p className="text-xs text-gray-500">
                by{' '}
                <a 
                  href="https://evo360.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors underline"
                >
                  evo360
                </a>
              </p>
            </div>
          </div>
          <Button 
            onClick={handleBooking}
            className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Prendre Rendez-vous
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-lavender-50 to-white opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-citron-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Centre Médical Pluridisciplinaire</span>
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Votre Santé,
                <span className="block text-indigo-600">Votre Performance</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Centre de médecine du sport et de santé musculo-squelettique. 
                Une approche intégrée combinant expertise médicale, physiothérapie et rééducation active.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={handleBooking}
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Réserver une Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6 transition-all duration-300"
                >
                  En Savoir Plus
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-6">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">LAMal</p>
                  <p className="text-sm text-gray-500">Reconnu</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">LAA</p>
                  <p className="text-sm text-gray-500">Accepté</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400 to-lavender-400 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1764314484083-cbd0de7e512c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxzcG9ydHMlMjBtZWRpY2luZSUyMGNsaW5pY3xlbnwwfHx8fDE3NjgzMjg3MjB8MA&ixlib=rb-4.1.0&q=85"
                alt="Médecine du sport - Évaluation professionnelle"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Horaires</p>
                  <p className="font-bold text-gray-900">Lu-Ve 7h30-18h30</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <a href="tel:+41765410360" className="font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                    +41 76 541 0360
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Adresse</p>
                  <a 
                    href="https://maps.app.goo.gl/9MD3DLrxaKWLTy6TA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    Av. Edouard-Dubois 20<br/>2000 Neuchâtel
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Médicaux</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour votre santé et votre performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About SportMed360 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-lavender-300 to-indigo-300 rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1764314189421-1858e027bba2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkb2N0b3JzJTIwcGh5c2lvdGhlcmFwaXN0c3xlbnwwfHx8fDE3NjgzMjg3NTV8MA&ixlib=rb-4.1.0&q=85"
              alt="Équipe médicale pluridisciplinaire"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <span className="bg-lavender-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                Notre Approche
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900">
              SportMed360, la branche médicale de evo360
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous sommes un centre médical spécialisé dans la médecine du sport et la santé musculo-squelettique, 
              intégré à l'écosystème evo360. Notre approche unique combine l'expertise médicale pointue avec 
              une vision globale du mouvement et de la performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Médecins Spécialisés</h4>
                  <p className="text-gray-600">Experts en médecine du sport et troubles musculo-squelettiques</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Physiothérapeutes Qualifiés</h4>
                  <p className="text-gray-600">Rééducation personnalisée et thérapie manuelle avancée</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-citron-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Collaboration Intégrée</h4>
                  <p className="text-gray-600">Synergie entre diagnostic médical et rééducation active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Services Détaillés</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une prise en charge complète et personnalisée pour chaque patient
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* evo360 Collaboration Section with Carousel */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-citron-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                Collaboration
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Partenariat avec evo360
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SportMed360 collabore étroitement avec evo360, centre de performance et bien-être. 
              Accès direct à une salle fonctionnelle moderne pour une rééducation optimale et un retour au sport réussi.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {evo360Images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="relative h-[500px]">
                      <img 
                        src={image}
                        alt={`Centre evo360 - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Benefits of collaboration */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4">
                <Dumbbell className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Salle Fonctionnelle</h4>
              <p className="text-gray-600">
                Équipements modernes pour rééducation active et retour au sport
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-2xl mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Performance & Bien-être</h4>
              <p className="text-gray-600">
                Centre dédié à l'optimisation de vos performances physiques
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-citron-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Suivi Intégré</h4>
              <p className="text-gray-600">
                Collaboration médicale et sportive pour un accompagnement global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-lavender-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6">Réservez Votre Consultation Dès Aujourd'hui</h3>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Nos médecins et physiothérapeutes vous attendent pour une prise en charge personnalisée. 
            Que ce soit pour une consultation médicale, un bilan sanguin, un ECG ou un programme de rééducation, 
            prenez rendez-vous en ligne en quelques clics.
          </p>
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-citron-400 hover:bg-citron-500 text-gray-900 text-xl px-12 py-8 font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Réserver Maintenant
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Clock className="w-10 h-10 text-citron-400 mx-auto mb-3" />
              <p className="font-bold text-lg mb-1">Disponibilité</p>
              <p className="text-indigo-100 text-sm">Lu-Ve 7h30-18h30</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Shield className="w-10 h-10 text-citron-400 mx-auto mb-3" />
              <p className="font-bold text-lg mb-1">Assurances</p>
              <p className="text-indigo-100 text-sm">LAMal & LAA acceptées</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Phone className="w-10 h-10 text-citron-400 mx-auto mb-3" />
              <p className="font-bold text-lg mb-1">Contact Direct</p>
              <a href="tel:+41765410360" className="text-indigo-100 text-sm hover:text-citron-400 transition-colors">
                +41 76 541 0360
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h5 className="text-2xl font-bold">SportMed360</h5>
                  <p className="text-sm text-gray-400">by evo360</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Centre de médecine du sport et de santé musculo-squelettique. 
                Expertise médicale, physiothérapie et rééducation active pour votre santé et votre performance.
              </p>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-4">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Médecine du sport</li>
                <li>Physiothérapie</li>
                <li>Rééducation</li>
                <li>Retour au sport</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-4">Contact</h6>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>+41 XX XXX XX XX</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>contact@sportmed360.ch</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Adresse à compléter</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SportMed360 by evo360. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;