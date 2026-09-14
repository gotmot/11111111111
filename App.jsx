import UserCard from './UserCard';

export default function App() {
  const users = [
    { name: 'Иван', age: 28, email: 'ivan@example.com' },
    { name: 'Мария', age: 34, email: 'maria@example.com' },
    { name: 'Алексей', age: 22, email: 'alex@example.com' },
  ];

  return (
    <main style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Список пользователей</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))}
      </div>
    </main>
  );
}
