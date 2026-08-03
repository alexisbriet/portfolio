import { CheckCircle2, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';

import type { FormEvent } from 'react';

import type { DeveloperData } from './types';

type ContactSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  copiedField: string | null;
  submitted: boolean;
  contactForm: {
    name: string;
    email: string;
    message: string;
  };
  onCopy: (text: string, field: string) => void;
  onFieldChange: (field: 'name' | 'email' | 'message', value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactSection({ developerData, darkMode, copiedField, submitted, contactForm, onCopy, onFieldChange, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact" className="space-y-6">
      <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-linear-to-b from-slate-900 to-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">Travaillons Ensemble !</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Un projet en vue, une opportunité de CDI ou une mission en freelance ? N&apos;hésitez pas à me contacter directement.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email direct</p>
                  <button onClick={() => onCopy(developerData.email, 'contact-email')} className="font-semibold text-sm hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {developerData.email}
                    {copiedField === 'contact-email' ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Téléphone</p>
                  <span className="font-semibold text-sm">{developerData.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Localisation</p>
                  <span className="font-semibold text-sm">{developerData.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl">
                <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                <h3 className="text-xl font-bold">Message envoyé !</h3>
                <p className="text-sm text-slate-300">Merci d&apos;avoir pris contact. Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Votre Nom</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(event) => onFieldChange('name', event.target.value)}
                    placeholder="Jean Dupont"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Votre Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(event) => onFieldChange('email', event.target.value)}
                    placeholder="jean@entreprise.com"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(event) => onFieldChange('message', event.target.value)}
                    placeholder="Bonjour Lucas, nous serions intéressés par votre profil..."
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all resize-none ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'}`}
                  />
                </div>

                <button type="submit" className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
