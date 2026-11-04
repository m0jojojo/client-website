import { siteConfig, whatsappLink } from "@/config/site";

/** Phase 0 placeholder. Replaced by the real homepage in Phase 3. */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold">{siteConfig.name}</h1>
      <p className="max-w-md text-lg">{siteConfig.tagline}</p>
      <a
        href={whatsappLink("Hi! I'd like to know more about your collection.")}
        className="rounded bg-green-700 px-5 py-2 text-white"
      >
        Chat on WhatsApp
      </a>
    </main>
  );
}
