export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 60 } }); // ISR-friendly
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
