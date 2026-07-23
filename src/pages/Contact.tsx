import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { poolHouse } from '../assets/images';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  planType: z.string().min(1, 'Please select a plan type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 8593930903', href: 'tel:+918593930903' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'sthiraspaces@gmail.com', href: 'mailto:sthiraspaces@gmail.com' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Studio', value: 'Amaravathi, Muthukulam, Alappuzha' },
  { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: 'Mon–Sat, 9 AM – 6 PM IST' },
];

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzrTSG9t9foBnBNn9HMO9PlK2zyupll_Ymr_cKhV2NV41QdjfUtDJlAgdFAFhU6MsLpZA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data)
      });

      toast.success('Message sent! Our team will reach out within 24 hours.');
      reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  const inputClass =
    'w-full bg-cream-50 border border-line text-ink placeholder-ink-faint rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-600/50 focus:border-clay-600/50 transition-all duration-200';

  return (
    <div className="bg-cream-100 min-h-screen">
      <Header />

      <main className="pt-32 lg:pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-16"
          >
            <span className="inline-flex items-center gap-3 text-clay-600 text-xs font-semibold uppercase tracking-eyebrow">
              <span className="h-px w-8 bg-clay-600/50" aria-hidden="true" />
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-ink mt-6 leading-[1.05] tracking-[-0.01em]">
              Let's build something
              <span className="block text-clay-600 italic">extraordinary.</span>
            </h1>
            <p className="text-ink-muted text-lg max-w-xl leading-relaxed mt-7">
              Ready to turn your vision into a real project? Our team is here to help with planning,
              materials, and execution — from first idea to final finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="rounded-3xl bg-cream-200 border border-line p-8 shadow-sm">
                <h2 className="font-serif text-3xl text-ink mb-7">Studio Details</h2>
                <div className="space-y-6">
                  {contactInfo.map(item => {
                    const inner = (
                      <>
                        <div className="w-11 h-11 rounded-full bg-clay-50 border border-clay-600/20 text-clay-600 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-ink-faint text-xs uppercase tracking-eyebrow mb-1">{item.label}</p>
                          <p className="text-ink text-[15px]">{item.value}</p>
                        </div>
                      </>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 rounded-xl"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label} className="flex items-start gap-4">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-56 shadow-sm">
                <img
                  src={poolHouse}
                  alt="Contemporary Sthira Spaces home with a poolside courtyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl bg-cream-50 border border-line p-8 lg:p-10 shadow-md">
                <h2 className="font-serif text-3xl text-ink mb-7">Send a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-ink-soft text-sm font-medium mb-2">
                        Full Name <span className="text-clay-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register('name')}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-terra text-xs mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-ink-soft text-sm font-medium mb-2">
                        Email Address <span className="text-clay-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register('email')}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-terra text-xs mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-ink-soft text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register('phone')}
                        className={inputClass}
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label htmlFor="planType" className="block text-ink-soft text-sm font-medium mb-2">
                        Plan Type <span className="text-clay-600">*</span>
                      </label>
                      <select
                        id="planType"
                        {...register('planType')}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="">Select a plan</option>
                        <option value="1bhk">1 BHK Apartment</option>
                        <option value="2bhk">2 BHK Apartment</option>
                        <option value="3bhk">3 BHK House</option>
                        <option value="villa">Villa Layout</option>
                        <option value="custom">Custom Project</option>
                      </select>
                      {errors.planType && <p className="text-terra text-xs mt-1.5">{errors.planType.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-ink-soft text-sm font-medium mb-2">
                      Message <span className="text-clay-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project, timeline, and any specific requirements…"
                    />
                    {errors.message && <p className="text-terra text-xs mt-1.5">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 bg-clay-600 hover:bg-clay-700 disabled:bg-clay-600/50 text-cream-50 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cream-50/40 border-t-cream-50 rounded-full animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
