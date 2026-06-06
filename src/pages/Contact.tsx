import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  planType: z.string().min(1, 'Please select a plan type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 98765 43210' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'hello@interio.design' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Studio', value: 'Bengaluru, Karnataka, India' },
  { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: 'Mon–Sat, 9 AM – 6 PM IST' },
];

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800));
    console.log('Contact form submission:', data);
    toast.success('Message sent! Our team will reach out within 24 hours.');
    reset();
  };

  return (
    <div className="bg-stone-950 min-h-screen">
      <Header />

      <main className="pt-24 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-amber-400 text-sm font-mono tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-50 mb-5">
              Let's Build Something
              <br />
              <span className="text-amber-400">Extraordinary</span>
            </h1>
            <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
              Ready to turn your configurator design into a real project? Our team is here to help with planning, materials, and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="rounded-2xl bg-stone-900 border border-stone-800/60 p-8">
                <h2 className="font-serif text-2xl text-stone-100 mb-6">Studio Details</h2>
                <div className="space-y-5">
                  {contactInfo.map(item => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-stone-200 text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
                  alt="Modern design studio interior with open workspace"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl bg-stone-900 border border-stone-800/60 p-8">
                <h2 className="font-serif text-2xl text-stone-100 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-stone-400 text-sm mb-2">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register('name')}
                        className="w-full bg-stone-800/60 border border-stone-700/60 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400/40 transition-all duration-200"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-stone-400 text-sm mb-2">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register('email')}
                        className="w-full bg-stone-800/60 border border-stone-700/60 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400/40 transition-all duration-200"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-stone-400 text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register('phone')}
                        className="w-full bg-stone-800/60 border border-stone-700/60 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400/40 transition-all duration-200"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label htmlFor="planType" className="block text-stone-400 text-sm mb-2">
                        Plan Type <span className="text-amber-400">*</span>
                      </label>
                      <select
                        id="planType"
                        {...register('planType')}
                        className="w-full bg-stone-800/60 border border-stone-700/60 text-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400/40 transition-all duration-200 appearance-none"
                      >
                        <option value="" className="bg-stone-900">Select a plan</option>
                        <option value="1bhk" className="bg-stone-900">1 BHK Apartment</option>
                        <option value="2bhk" className="bg-stone-900">2 BHK Apartment</option>
                        <option value="3bhk" className="bg-stone-900">3 BHK House</option>
                        <option value="villa" className="bg-stone-900">Villa Layout</option>
                        <option value="custom" className="bg-stone-900">Custom Project</option>
                      </select>
                      {errors.planType && <p className="text-red-400 text-xs mt-1.5">{errors.planType.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-stone-400 text-sm mb-2">
                      Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className="w-full bg-stone-800/60 border border-stone-700/60 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400/40 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements…"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-stone-950 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-stone-950/30 border-t-stone-950 rounded-full animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;