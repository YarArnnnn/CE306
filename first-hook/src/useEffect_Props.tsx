import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    console.log(`Fetching user data for userId: ${userId}`);
    setLoading(true);

    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`User not found for ID: ${userId}`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); 

  if (loading) return <div>Loading user {userId}...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Profile (ID: {userId})</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

const UserSwitcher: React.FC = () => {
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  return (
    <div>
      <h1>User Switcher</h1>
      <button onClick={() => setCurrentUserId(1)}>Load User 1</button>
      <button onClick={() => setCurrentUserId(2)}>Load User 2</button>
      <button onClick={() => setCurrentUserId(3)}>Load User 3</button>
      <hr />
      <UserProfile userId={currentUserId} />
    </div>
  );
};

export default UserSwitcher;
