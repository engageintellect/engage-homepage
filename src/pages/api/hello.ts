export async function get() {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hello world!' }), // Convert the object to JSON string
  };
}
