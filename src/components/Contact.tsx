import React, { useState } from 'react';
import { Send, Mail, MapPin, Loader2, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Por favor, insira o seu nome.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Por favor, insira o seu email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Por favor, insira um endereço de email válido.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Por favor, digite sua mensagem.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contato" className="py-24 bg-[#0a192f] text-slate-200 border-t border-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
            <span>Fale Comigo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Contato
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-sm text-slate-400 max-w-xl mx-auto">
            Tem alguma dúvida, proposta de projeto ou oportunidade de emprego? Deixe uma mensagem e responderei o mais breve possível.
          </p>
        </div>

        {/* Grid: Form vs Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Contact Details Panel (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-[#0e2243] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-850/80">
            {/* Ambient visual overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="space-y-8 relative z-10 text-left">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Informações de Contato
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                  Se preferir, sinta-se à vontade para enviar um email direto ou conectar-se através das redes profissionais indicadas abaixo.
                </p>
              </div>

              {/* Direct links list */}
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-900 text-blue-400 p-3 rounded-xl border border-slate-800">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display font-bold text-xs text-slate-400 uppercase tracking-wider">E-mail Profissional</span>
                    <a href={`mailto:${personalInfo.email}`} className="font-sans text-sm hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-900 text-blue-400 p-3 rounded-xl border border-slate-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display font-bold text-xs text-slate-400 uppercase tracking-wider">Localização</span>
                    <span className="font-sans text-sm text-slate-300">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nice availability statement */}
            <div className="mt-12 pt-8 border-t border-slate-900/80 relative z-10 space-y-4 text-left">
              <div className="flex items-center space-x-3 text-slate-400 text-xs font-mono">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span>Resposta média em até 24 horas</span>
              </div>
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                Constantemente revisando e validando diretrizes de engenharia. Toda comunicação é tratada com total confidencialidade e zelo profissional.
              </p>
            </div>

          </div>

          {/* Form Panel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/50 rounded-3xl p-8 sm:p-10 border border-slate-800/80 shadow-xl">
            {submitStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="bg-emerald-500/15 text-emerald-400 p-4 rounded-full">
                  <CheckCircle2 className="h-14 w-14" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">Mensagem Enviada!</h3>
                  <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
                    Muito obrigado pelo seu contato, {formData.name || 'Bráulio'}. Sua mensagem foi recebida com sucesso e entrarei em contato em breve!
                  </p>
                </div>
                <button
                  id="contact-reset-btn"
                  onClick={() => setSubmitStatus('idle')}
                  className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 font-sans text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-name" className="block font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#0a192f] focus:bg-slate-950 text-white text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      formErrors.name 
                        ? 'border-red-500 focus:ring-red-500/10' 
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/10'
                    }`}
                    placeholder="Como deseja ser chamado?"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-400 font-sans font-medium">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-email" className="block font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#0a192f] focus:bg-slate-950 text-white text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      formErrors.email 
                        ? 'border-red-500 focus:ring-red-500/10' 
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/10'
                    }`}
                    placeholder="exemplo@seuemail.com"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-400 font-sans font-medium">{formErrors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="block font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#0a192f] focus:bg-slate-950 text-white text-sm font-sans focus:outline-none focus:ring-2 transition-all resize-none ${
                      formErrors.message 
                        ? 'border-red-500 focus:ring-red-500/10' 
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/10'
                    }`}
                    placeholder="Descreva detalhadamente a sua ideia, projeto ou convite comercial..."
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-400 font-sans font-medium">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/70 font-sans font-bold text-sm text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 transition-all text-center flex items-center justify-center space-x-2 active:scale-98 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Enviando Mensagem...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
