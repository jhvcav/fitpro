import React from 'react';
import { programsData } from '../../data/programs';
import { ArrowLeft, CheckCircle, Calendar, Dumbbell, Shield } from 'lucide-react';

export const OfferDetail = ({ slug, setActiveSection }) => {
  const offer = programsData.find(p => p.slug === slug);

  if (!offer) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p>Offre introuvable.</p>
          <button
            onClick={() => setActiveSection('offres')}
            className="mt-6 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            Revenir aux offres
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-white">
        {/* Back */}
        <button
          onClick={() => setActiveSection('offres')}
          className="mb-8 inline-flex items-center gap-2 text-white/80 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux offres
        </button>

        {/* Header gradient */}
        <div className={`rounded-2xl p-8 bg-gradient-to-br ${offer.color} shadow-2xl`}>
          <h1 className="text-4xl font-extrabold mb-2">{offer.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <span className="inline-flex items-center gap-2"><Calendar className="w-5 h-5" />{offer.duration}</span>
            <span className="inline-flex items-center gap-2"><Dumbbell className="w-5 h-5" />{offer.workouts}</span>
            <span className="inline-flex items-center gap-2 font-semibold">{offer.price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Ce que tu vas obtenir</h2>
            <ul className="space-y-3">
              {offer.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 mt-1 ${offer.accent}`} />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 mt-0.5" />
                <p>
                  Contenus à visée <strong>éducative et générale</strong>.  
                  Pas d’encadrement sportif individuel ni de personnalisation.  
                  Consulte un professionnel de santé avant toute reprise d’activité physique.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar achat */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-extrabold">{offer.price}</p>
              <p className="text-white/70 mt-1">{offer.duration}</p>
              <a
                href={offer.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 transition-all text-white font-bold py-3 rounded-xl shadow-lg"
              >
                Acheter maintenant
              </a>
              <p className="text-xs text-white/60 mt-4">
                Paiement sécurisé via Stripe. Accès immédiat aux contenus après confirmation.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};