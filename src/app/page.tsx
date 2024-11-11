export default async function Home() {
  // ✅ Doesn't trigger error
  const val = await Promise.resolve('foo');

  // ❌ Triggers error
  const messages = (await import('./messages.json')).default;

  return (
    <main>
      <p>{val}</p>
      <p>{messages.title}</p>
    </main>
  );
}
