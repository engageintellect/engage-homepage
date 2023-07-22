export async function get() {
  const message = 'Hello world!';
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  };
}
