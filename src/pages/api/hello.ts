export async function get(req) {
  const message = 'Hello world!';
  const headers = {
    'Content-Type': 'application/json',
  };
  return {
    headers,
    body: JSON.stringify({ message }),
  };
}
