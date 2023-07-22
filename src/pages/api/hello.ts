export async function get() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      message: 'Hello world!',
    },
  };
}
