// utils/getImageUrl.ts
const API_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

/**
 * Fetches the full image URL from WordPress REST API using the image ID
 * @param id - WordPress media ID
 * @returns string | null - Image URL
 */
export async function getImageUrl(id: number): Promise<string | null> {
  if (!id) return null;

  try {
    const res = await fetch(`${API_URL}/wp-json/wp/v2/media/${id}`);
    if (!res.ok) throw new Error("Failed to fetch image");

    const media = await res.json();
    return media.source_url || null;
  } catch (error) {
    console.error("getImageUrl error:", error);
    return null;
  }
}
