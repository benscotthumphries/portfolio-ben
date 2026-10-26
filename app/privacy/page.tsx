import type { Metadata } from "next";
import Link from "next/link";
import SubPage, { Prose } from "../components/sub-page";
import { profile } from "../data";

export const metadata: Metadata = {
  title: `Privacy Policy · ${profile.name}`,
  description: `How ${profile.name}'s website uses Google Analytics.`,
};

export default function Privacy() {
  return (
    <SubPage>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 font-mono text-xs text-muted">Effective 25 October 2026</p>
      <Prose>
        <p className="mt-8">
          This is the personal website of {profile.name}. This policy covers what information this website collects when you
          visit it. My game Tilt &amp; Tint has <Link href="/tilt-and-tint/privacy">its own privacy policy</Link>.
        </p>

        <h2>Analytics, only if you agree</h2>
        <p>
          With your permission, this site uses <strong>Google Analytics</strong> to understand how many people visit and which pages
          they read. Nothing loads until you choose <strong>Accept</strong> in the cookie banner. If you choose Decline, or your browser
          sends a Global Privacy Control signal, Google Analytics is never loaded and no analytics cookies are set.
        </p>
        <p>
          If you accept, Google Analytics sets cookies in your browser (named <code>_ga</code> and similar) and collects information
          such as the pages you view, how you arrived at the site, your browser and device type, and your approximate location,
          derived from your IP address. I see this only as combined, anonymous statistics. I do not use it to identify you, and I do
          not run advertising on this site. Google processes this data under the{" "}
          <a href="https://policies.google.com/privacy">Google Privacy Policy</a>; see also{" "}
          <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its
          services</a>. It is kept for no more than 14 months.
        </p>

        <h2>Changing your mind</h2>
        <p>
          Use <strong>Cookie settings</strong> at the bottom of any page to change your choice at any time. Declining after accepting
          switches analytics off and deletes its cookies. You can also block cookies in your browser or install the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>. The site works the same either
          way.
        </p>

        <h2>Your rights</h2>
        <p>
          The legal basis for analytics is your consent, which you can withdraw at any time. Depending on where you live (for example
          under the GDPR in the EU and UK, or the CCPA in California), you may have the right to access, correct or delete personal
          data about you, and to object to its use. Because I only see anonymous totals, I usually hold nothing that identifies you,
          but email me and I will help. I do not sell or share personal information.
        </p>

        <h2>Everything else</h2>
        <p>
          There are no accounts, forms or sign-ups on this site. If you email me, I receive only what you choose to send, and I use
          it only to reply.
        </p>

        <h2>Changes</h2>
        <p>If this policy changes, the updated version will be posted on this page with a new effective date.</p>

        <h2>Contact</h2>
        <p>
          Questions? Email <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </Prose>
    </SubPage>
  );
}
