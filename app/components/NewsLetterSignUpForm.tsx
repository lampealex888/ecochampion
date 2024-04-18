import { useRef, useState, useEffect } from 'react';

const NewsLetterSignUpForm: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch user emails from your backend API
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        if (res.ok) {
          const data = await res.json();
          // Extract email addresses from the response data
          const userEmails: string[] = data.map((user: any) => user.email);
          setUsers(userEmails);
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Iterate through user emails and subscribe each one to Mailchimp
    for (const email of users) {
      await subscribeToMailchimp(email);
    }
  };

  const subscribeToMailchimp = async (email: string) => {
    try {
      const res = await fetch('/api/subscribeUser', {
        body: JSON.stringify({
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Failed to subscribe user to Mailchimp');
      }
    } catch (error) {
      console.error(`Error subscribing user ${email} to Mailchimp:`, error);
    }
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Your Best Email
      </label>
      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your best email"
        ref={inputRef}
        required
        autoComplete="email"
        autoCapitalize="off"
        autoCorrect="off"
      />
      <button type="submit" value="" name="subscribe">
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterSignUpForm;
