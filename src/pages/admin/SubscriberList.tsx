import React, { useState, useEffect } from 'react';

interface Subscription {
  id: string;
  email: string;
  subscribedOn: string;
}

const NewsletterSubscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    // Fetching the subscriptions from an API (dummy data for now)
    const fetchSubscriptions = async () => {
      try {
        // Placeholder for actual API call
        const subscriptionsData: Subscription[] = [
          { id: '1', email: 'user1@example.com', subscribedOn: '2023-11-01' },
          { id: '2', email: 'user2@example.com', subscribedOn: '2023-11-02' },
          { id: '3', email: 'user3@example.com', subscribedOn: '2023-11-03' },
          { id: '4', email: 'user4@example.com', subscribedOn: '2023-11-04' },
        ];
        setSubscriptions(subscriptionsData);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="newsletter-subscriptions-section">
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
            <tr key={subscription.id} className="border-t border-gray-300">
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{subscription.email}</td>
              <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{subscription.subscribedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterSubscriptions;
