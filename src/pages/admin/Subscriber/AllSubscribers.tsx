import React, { useState, useEffect } from 'react';
import { fetchSubscriptions } from '../../../services/api';
import { Subscription } from '../../../types';
import Loader from '../../../components/Loader/Loader';

const NewsletterSubscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSubscriptions = async () => {
      try {
        const subscriptionsData = await fetchSubscriptions();
        setSubscriptions(subscriptionsData);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    getSubscriptions();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="newsletter-subscriptions-section  px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">Newsletter Subscriptions</h2>
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead className='bg-gray-900 text-white'>
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left md:text-center">S.No.</th>
            <th className="px-4 py-2 border border-gray-300 text-left md:text-center">Email</th>
            <th className="px-4 py-2 border border-gray-300 text-left md:text-center">Subscribed On</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={subscription._id} className="border-t border-gray-300">
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{subscription.email}</td>
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{new Date(subscription.createdAt).toLocaleDateString('en-GB')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterSubscriptions;
