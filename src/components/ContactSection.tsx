'use client';

import { useState } from 'react';
import { submitContact } from '@/lib/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', venue: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', venue: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-widest">
            LET'S<br />WORK<br />TOGETHER
          </h2>
          <div className="space-y-6 text-grey-300">
            <p>Interested in booking? Have a partnership idea? Reach out.</p>
            <div>
              <p className="font-bold text-white mb-2">BOOKING</p>
              <p>booking@3h33agency.fr</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">HELLO</p>
              <p>hello@3h33agency.fr</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 text-white placeholder-grey-400 focus:border-red outline-none transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 text-white placeholder-grey-400 focus:border-red outline-none transition"
          />
          <input
            type="text"
            placeholder="Venue (optional)"
            value={formData.venue}
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 text-white placeholder-grey-400 focus:border-red outline-none transition"
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 text-white placeholder-grey-400 focus:border-red outline-none transition resize-none"
          />
          <button
            type="submit"
            disabled={loading || success}
            className="w-full px-6 py-3 bg-red text-dark-900 font-bold hover:bg-red-dark transition disabled:opacity-50"
          >
            {success ? 'SENT ✓' : loading ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      </div>
    </section>
  );
}
