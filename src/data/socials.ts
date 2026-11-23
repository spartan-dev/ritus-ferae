export type SocialPlatform = "instagram" | "youtube" | "spotify" | "facebook" | "tiktok" | "bandcamp";

export interface Social {
  platform: SocialPlatform;
  label: string;
  url: string;
}

// TODO: replace placeholder URLs with the band's real profiles.
export const socials: readonly Social[] = [
  { platform: "instagram", label: "Instagram", url: "https://instagram.com/placeholder" },
  { platform: "youtube", label: "YouTube", url: "https://youtube.com/@placeholder" },
  { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/artist/placeholder" },
  { platform: "facebook", label: "Facebook", url: "https://facebook.com/placeholder" },
  { platform: "tiktok", label: "TikTok", url: "https://tiktok.com/@placeholder" },
  { platform: "bandcamp", label: "Bandcamp", url: "https://placeholder.bandcamp.com" },
];
