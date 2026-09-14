export default function UserCard({ name, age, email }) {
  return (
    <article
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        maxWidth: '300px',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}>Возраст: {age}</p>
      <p style={{ margin: '4px 0', color: '#555' }}>Email: {email}</p>
    </article>
  );
}
