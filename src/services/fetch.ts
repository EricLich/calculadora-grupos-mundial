export async function customFetch(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}