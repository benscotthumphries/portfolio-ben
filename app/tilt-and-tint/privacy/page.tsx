import type { Metadata } from "next";
import SubPage, { Prose } from "../../components/sub-page";
import { profile } from "../../data";

export const metadata: Metadata = {
  title: "Tilt & Tint · Privacy Policy",
  description: "Privacy policy for the Tilt & Tint puzzle game.",
};

// Linked from the game and from its Google Play listing, so keep this URL stable.
export default function TiltAndTintPrivacy() {
  return (
    <SubPage back={{ href: "/tilt-and-tint", label: "Tilt & Tint" }}>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tilt &amp; Tint Privacy Policy</h1>
      <p className="mt-2 font-mono text-xs text-muted">Effective 25 October 2026</p>
      <Prose>
        <p className="mt-8">
          Tilt &amp; Tint is a puzzle game made by {profile.name}. This policy explains what happens to your information when you
          play. The short version: the game itself collects nothing about you.
        </p>

        <h2>What the game collects</h2>
        <p>Nothing. There are no accounts, no sign-in, no analytics and no tracking built into the game.</p>

        <h2>What stays on your device</h2>
        <p>
          Your progress (stars, solved levels and daily results), your settings and whether you have bought the full game are saved
          only on your device. They are never sent to me, and they are removed when you uninstall the game.
        </p>

        <h2>Purchases</h2>
        <p>
          The optional full-game purchase is handled entirely by Google Play. I never see your payment details. Google&apos;s handling
          of that information is covered by the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
        </p>

        <h2>Optional ads for hints</h2>
        <p>
          If you choose to watch an ad to get a hint, that ad is provided by Google AdMob. AdMob may collect information such as your
          device&apos;s advertising ID, IP address and how you interact with the ad, to show and measure ads. You can learn more in{" "}
          <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from apps that use its
          services</a>, and you can reset or delete your advertising ID in your Android settings. Ads only appear when you ask for one.
          Players who own the full game never see ads.
        </p>

        <h2>Children</h2>
        <p>Tilt &amp; Tint is not directed at children under 13, and I do not knowingly collect personal information from anyone.</p>

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
