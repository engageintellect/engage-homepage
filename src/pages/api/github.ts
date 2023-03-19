export async function get() {
  const response = await fetch('https://api.github.com/repos/engageintellect/engage-homepage');
  const buffer = Buffer.from(await response.arrayBuffer());

  return {
    body: buffer,
  };
}
