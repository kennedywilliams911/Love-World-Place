import Image from "next/image";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import NewsletterForm from "@/components/public/NewsletterForm";

type SocialLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  whatsapp?: string;
};

export default function PublicFooter({
  siteName,
  churchName,
  organizationLogoUrl,
  socialLinks,
  publisherId,
}: {
  siteName: string;
  churchName?: string | null;
  organizationLogoUrl?: string | null;
  socialLinks?: SocialLinks | null;
  publisherId?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-parchment-300 bg-parchment-100 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="mx-auto mb-8 max-w-xl rounded-2xl border border-parchment-300 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
          <NewsletterForm
            churchName={churchName ?? siteName}
            publisherId={publisherId}
          />
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            {organizationLogoUrl && (
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded border border-parchment-300 bg-white dark:border-ink-700 dark:bg-ink-900">
                <Image
                  src={organizationLogoUrl}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </span>
            )}
            <p className="font-display text-lg font-semibold text-ink-900 dark:text-parchment-50">
              {siteName}
            </p>
          </div>

          {socialLinks && Object.values(socialLinks).some(Boolean) && (
            <div className="mt-5 flex justify-center gap-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="flex h-[18px] w-[18px] items-center justify-center text-ink-400 hover:text-gold-700 dark:hover:text-gold-400"
                >
                  <SiFacebook size={18} aria-hidden="true" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  title="X"
                  className="flex h-[18px] w-[18px] items-center justify-center text-ink-400 hover:text-gold-700 dark:hover:text-gold-400"
                >
                  <SiX size={17} aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="flex h-[18px] w-[18px] items-center justify-center text-ink-400 hover:text-gold-700 dark:hover:text-gold-400"
                >
                  <SiInstagram size={18} aria-hidden="true" />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="flex h-[18px] w-[18px] items-center justify-center text-ink-400 hover:text-gold-700 dark:hover:text-gold-400"
                >
                  <SiYoutube size={20} aria-hidden="true" />
                </a>
              )}
              {socialLinks.whatsapp && (
                <a
                  href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="text-ink-400 hover:text-gold-700 dark:hover:text-gold-400"
                >
                  <SiWhatsapp size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          )}

          <p className="mt-6 text-xs text-ink-400 dark:text-parchment-500">
            © {year} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
