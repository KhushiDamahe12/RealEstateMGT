import React from 'react'
import { useState } from 'react';
import { subscribe } from '../../services/api';
import { FiMail } from 'react-icons/fi';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await subscribe({ email });
      setEmail(''); // Clear the input after subscription
      alert('Subscribed successfully!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">
        Subscribe to our newsletter
      </h2>
      <form
        onSubmit={handleSubscribe}
        className="flex w-full max-w-xs sm:max-w-sm md:max-w-md rounded-full overflow-hidden border border-gray-300 bg-transparent"
      >
        <div className="flex items-center px-3">
          <FiMail className="text-white text-[1rem] sm:text-[1.25rem]" />
        </div>
        <input
          type="email"
          placeholder="Input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-2 py-2 text-sm sm:text-base text-white placeholder-white bg-transparent outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white text-sm sm:text-base rounded-full hover:bg-indigo-600 font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
