import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
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
  Target
} from 'lucide-react';

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const benefits = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expertise Médicale",
      description: "Médecins spécialisés en médecine du sport et troubles musculo-squelettiques"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Approche Pluridisciplinaire",
      description: "Collaboration étroite entre médecins, physiothérapeutes et spécialistes du mouvement"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Rééducation Active",
      description: "Salle fonctionnelle équipée pour un retour optimal à vos activités"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Prise en Charge Assurée",
      description: "Remboursement LAMal et LAA selon les conditions légales"
    }
  ];

  const services = [
    {
      title: "Consultation Médicale",
      items: [
        "Médecine du sport",
        "Troubles musculo-squelettiques",
        "Prévention des blessures",
        "Bilan de santé sportif"
      ]
    },
    {
      title: "Physiothérapie",
      items: [
        "Rééducation post-opératoire",
        "Traitement des douleurs chroniques",
        "Thérapie manuelle",
        "Réathlétisation"
      ]
    },
    {
      title: "Retour au Sport",
      items: [
        "Programme personnalisé",
        "Entraînement fonctionnel",
        "Tests de performance",
        "Suivi progressif"
      ]
    }
  ];

  const handleBooking = () => {
    window.open('https://booking.katarinahealth.com/fr/evo360', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SportMed360</h1>
              <p className="text-xs text-gray-500">by evo360</p>
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi SportMed360 ?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une prise en charge complète qui combine médecine, mouvement et performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la consultation médicale à la rééducation complète, nous vous accompagnons à chaque étape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4">
                      {index === 0 && <Stethoscope className="w-6 h-6" />}
                      {index === 1 && <Heart className="w-6 h-6" />}
                      {index === 2 && <Dumbbell className="w-6 h-6" />}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{service.title}</h4>
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

      {/* Functional Room Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-citron-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                Installation de Pointe
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900">
              Salle Fonctionnelle Équipée pour le Retour au Sport
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Accès direct à une salle fonctionnelle moderne, spécialement conçue pour la rééducation active 
              et le retour progressif à vos activités sportives. Un environnement optimal pour retrouver 
              performance et confiance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Programme Personnalisé</h4>
                  <p className="text-gray-600">Rééducation adaptée à vos objectifs et votre sport</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lavender-500 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Équipement Professionnel</h4>
                  <p className="text-gray-600">Matériel de rééducation et de renforcement de dernière génération</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-citron-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Suivi Continu</h4>
                  <p className="text-gray-600">Évaluation régulière de votre progression avec tests fonctionnels</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-citron-300 to-lavender-300 rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1717500251997-80b234166d00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxmdW5jdGlvbmFsJTIwdHJhaW5pbmclMjByZWhhYmlsaXRhdGlvbiUyMGd5bSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NjgzMjg3Nzl8MA&ixlib=rb-4.1.0&q=85"
              alt="Salle fonctionnelle de rééducation"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <Shield className="w-16 h-16 text-citron-400 mx-auto" />
          </div>
          <h3 className="text-4xl font-bold mb-6">Prise en Charge par les Assurances Suisses</h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Nos prestations médicales et de physiothérapie sont reconnues et remboursées selon 
            les conditions de la LAMal (assurance maladie) et de la LAA (assurance accidents).
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-citron-400">LAMal</h4>
              <p className="text-gray-300">
                Consultations médicales et physiothérapie sur prescription médicale
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-citron-400">LAA</h4>
              <p className="text-gray-300">
                Prise en charge complète des blessures professionnelles et accidents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-lavender-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6">Prêt à Commencer Votre Parcours ?</h3>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Prenez rendez-vous dès aujourd'hui pour une consultation médicale ou une séance de physiothérapie. 
            Notre équipe est là pour vous accompagner vers vos objectifs de santé et de performance.
          </p>
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-citron-400 hover:bg-citron-500 text-gray-900 text-xl px-12 py-8 font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Réserver Maintenant
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
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