import "./App.css";
import { useMemo } from "react";
import {
  Heart,
  Play,
  Users,
  MonitorPlay,
  Video,
  Gamepad2,
  Crown,
  Link as LinkIcon,
  ShieldCheck,
  Sparkles,
  Check,
  MessageSquareText,
  Home,
  MapPinned,
} from "lucide-react";

const linkCards = [
  {
    title: "Minecraft SMP",
    text: "Join at play.vanillabeams.tv",
    subtext: "Crossplay • Java + Bedrock • Bedrock Port 19132",
    href: "https://vanillabeams.tv/map",
    icon: Gamepad2,
    external: false,
    featured: true,
  },
  {
    title: "Twitch",
    text: "Live streams and VOD access.",
    href: "https://twitch.tv/vanillabeamstv",
    icon: MonitorPlay,
    external: true,
  },
  {
    title: "TikTok",
    text: "Short-form clips and content.",
    href: "https://www.tiktok.com/@vanillabeamstv",
    icon: Video,
    external: true,
  },
  {
    title: "YouTube",
    text: "Highlights and future uploads.",
    href: "https://www.youtube.com/channel/UCDmY6JLZo_L5elPM_3_l6BQ",
    icon: Play,
    external: true,
  },
  {
    title: "Discord",
    text: "Hang out with the community.",
    href: "https://discord.gg/2DxZzVW3yj",
    icon: Users,
    external: true,
  },
];

const perkTiers = [
  {
    name: "Subby",
    tier: "Twitch Tier 1",
    icon: Heart,
    accent: "pink",
    showRoleBoxes: true,
    perks: [
      "Access to linked Discord ↔ Minecraft chat",
      "/sethome unlocked",
      "Small claim boost for extra protected land",
      "Minor supporter-only cosmetic or chat perks",
    ],
  },
  {
    name: "GOAT",
    tier: "Twitch Tier 2",
    icon: Crown,
    accent: "purple",
    showRoleBoxes: true,
    perks: [
      "Everything in Subby",
      "Larger claim boost than Tier 1",
      "/tpa access",
      "+1 extra /sethome for a total of 2 homes",
      "Additional emotes in Twitch chat and Discord",
    ],
  },
  {
    name: "Beam Boss",
    tier: "Twitch Tier 3",
    icon: Sparkles,
    accent: "gold",
    showRoleBoxes: true,
    perks: [
      "Everything in Subby and GOAT",
      "Highest claim boost for the most protected land",
      "+1 extra /sethome for a total of 3 homes",
      "Unlocks all Twitch and Discord emotes",
    ],
  },
];

const linkingSteps = [
  "Subscribe on Twitch using the account you want connected.",
  "Join the Discord server and make sure your Twitch account is linked to Discord.",
  "Use /discord link to link your Minecraft account to Discord.",
  "Once linked and synced, your Discord role and Minecraft rank should match your Twitch tier.",
];

const perkHighlights = [
  {
    icon: MessageSquareText,
    title: "Linked chat access",
    text: "Supporters can use the linked Discord and Minecraft chat channel connection as part of the community experience.",
  },
  {
    icon: MapPinned,
    title: "More protected land",
    text: "Higher supporter tiers can get more claim space, making each tier feel useful without drifting into pay-to-win.",
  },
  {
    icon: Home,
    title: "/tpa access and limited /homes",
    text: "Supporter tiers can unlock travel convenience while keeping survival fair, with home count scaling by tier.",
  },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand">
          <div className="brand-icon">
            <Heart size={22} />
          </div>
          <div>
            <div className="brand-title">VanillaBeamsTV</div>
            <div className="brand-subtitle">Live • Vibes • Minecraft SMP</div>
          </div>
        </a>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/perks">Perks</a>
          <a href="https://vanillabeams.tv/map">Map</a>
          <a href="https://discord.gg/2DxZzVW3yj" target="_blank" rel="noreferrer">
            Discord
          </a>
        </nav>

        <a
          className="btn btn-outline"
          href="https://twitch.tv/vanillabeamstv"
          target="_blank"
          rel="noreferrer"
        >
          <Play size={16} />
          Watch Live
        </a>
      </div>
    </header>
  );
}

function HomePage({ twitchEmbedSrc }) {
  return (
    <main id="home">
      <section className="hero-section refined-hero">
        <div className="container hero-stack">
          <div className="hero-copy hero-copy-centered hero-banner-wrap">
            <div className="hero-banner-card glass-card">
              <img
                src="/branding/vanillabanner2.png"
                alt="VanillaBeamsTV"
                className="hero-banner-logo"
              />
            </div>
          </div>

          <div className="hero-panel glass-card webplayer-panel">
            <div className="panel-header panel-header-centered">
              <div>
                <div className="panel-title">Featured Stream</div>
                <div className="panel-subtitle">
                  Watch live right from the homepage
                </div>
              </div>
            </div>

            <div className="stream-frame large-stream-frame">
              <iframe
                title="VanillaBeamsTV Twitch player"
                src={twitchEmbedSrc}
                width="100%"
                height="100%"
                allowFullScreen
              />
            </div>

            <div className="hero-actions centered-actions player-actions">
              <a
                className="btn btn-primary"
                href="https://twitch.tv/vanillabeamstv"
                target="_blank"
                rel="noreferrer"
              >
                <Play size={16} />
                Watch on Twitch
              </a>

              <a
                className="btn btn-secondary"
                href="https://discord.gg/2DxZzVW3yj"
                target="_blank"
                rel="noreferrer"
              >
                <Users size={16} />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container single-column-wrap">
          <div className="glass-card about-card-merged">
            <div className="about-grid-merged">
              <div className="about-copy">
                <div className="section-label">About VanillaBeamsTV</div>
                <h2>Chill streams, good vibes, and a community that likes to just hang out</h2>
                <p>
                  VanillaBeamsTV is a chill streamer who plays Rivals,
                  Minecraft, and enjoys relaxing, vibing out, and talking with
                  her peeps. The goal of the stream is simple: keep things fun,
                  welcoming, and easy to jump into whether people are there for
                  the gameplay, the conversations, or just the overall vibe.
                </p>
              </div>

              <div className="about-portrait-wrap">
                <img
                  src="/branding/VanillaBeamsTV.png"
                  alt="VanillaBeamsTV profile art"
                  className="creator-image large-creator-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="support-section">
        <div className="container split-grid support-grid">
          <div className="glass-card info-card">
            <div className="section-label">Support</div>
            <h2>Support the stream</h2>
            <p>
              The easiest ways to support are by subscribing on Twitch or
              donating directly. Both help the stream grow and make it easier
              to keep creating content for the community.
            </p>

            <div className="support-actions centered-actions">
              <a
                href="https://twitch.tv/vanillabeamstv"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Subscribe on Twitch
              </a>
              <a href="#" className="btn btn-secondary">
                Donate
              </a>
            </div>
          </div>

          <div className="glass-card info-card">
            <div className="section-label">Quick Links</div>
            <h2>Everything in one place</h2>
            <div className="quick-link-grid quick-link-grid-balanced">
              {linkCards.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    className={`mini-link-card ${
                      item.featured ? "mini-link-card-featured" : ""
                    }`}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    <span className="mini-link-icon">
                      <Icon size={16} />
                    </span>
                    <span
                      className={`mini-link-copy ${
                        item.featured ? "mini-link-copy-featured" : ""
                      }`}
                    >
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                      {item.subtext ? <em>{item.subtext}</em> : null}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PerksPage() {
  return (
    <main className="perks-page">
      <section className="perks-hero-section">
        <div className="container perks-hero-wrap">
          <div className="glass-card perks-hero-card">
            <h1>Subscriber Perks</h1>
            <p>
              Subscribe on Twitch, link your accounts, and your support carries
              across the whole community. The goal is to make every tier feel
              recognized in Discord and in the Minecraft SMP.
            </p>
          </div>
        </div>
      </section>

      <section className="perks-tiers-section">
        <div className="container perks-tiers-grid">
          {perkTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`glass-card perk-tier-card perk-tier-${tier.accent}`}
              >
                <div className="perk-tier-top">
                  <div className="perk-tier-icon">
                    <Icon size={20} />
                  </div>

                  <div className="perk-tier-heading">
                    <div className="perk-tier-name">{tier.name}</div>
                    <div className="perk-tier-subtitle">{tier.tier}</div>
                  </div>
                </div>

                {tier.showRoleBoxes ? (
                  <div className="perk-mapping-row">
                    <div className="perk-mapping-box">
                      <span>Discord Role</span>
                    </div>
                    <div className="perk-mapping-box">
                      <span>Minecraft Rank</span>
                    </div>
                  </div>
                ) : null}

                <div className={`perk-list ${tier.showRoleBoxes ? "perk-list-tight" : ""}`}>
                  {tier.perks.map((perk) => (
                    <div key={perk} className="perk-list-item">
                      <Check size={15} />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="perks-linking-section">
        <div className="container perks-linking-grid">
          <div className="glass-card info-card">
            <div className="section-label">How Linking Works</div>
            <h2>Connect everything once</h2>
            <div className="linking-steps">
              {linkingSteps.map((step, index) => (
                <div key={step} className="linking-step-item">
                  <div className="linking-step-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card info-card perks-info-card">
            <div className="section-label">More Benefits</div>

            <div className="benefit-stack benefit-stack-clean">
              {perkHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="benefit-item benefit-item-clean">
                    <div className="benefit-icon">
                      <Icon size={18} />
                    </div>
                    <div className="benefit-copy">
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="perks-cta-section">
        <div className="container">
          <div className="glass-card perks-cta-card">
            <div className="section-label">Get Started</div>
            <h2>Subscribe, join Discord, and link up</h2>
            <p>
              Once you sub on Twitch and connect everything, your Discord role
              and Minecraft rank can reflect your tier.
            </p>
            <div className="hero-actions centered-actions">
              <a
                className="btn btn-primary"
                href="https://twitch.tv/vanillabeamstv"
                target="_blank"
                rel="noreferrer"
              >
                <Play size={16} />
                Subscribe on Twitch
              </a>
              <a
                className="btn btn-secondary"
                href="https://discord.gg/2DxZzVW3yj"
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon size={16} />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const twitchEmbedSrc = useMemo(() => {
    const parent =
      typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `https://player.twitch.tv/?channel=vanillabeamstv&parent=${parent}&muted=true`;
  }, []);

  const hash =
    typeof window !== "undefined" ? window.location.hash : "#/";

  const isPerksPage = hash === "#/perks";

  return (
    <div className="site-shell">
      <div className="site-bg-glow site-bg-glow-top" />
      <div className="site-bg-glow site-bg-glow-bottom" />
      <SiteHeader />
      {isPerksPage ? (
        <PerksPage />
      ) : (
        <HomePage twitchEmbedSrc={twitchEmbedSrc} />
      )}
    </div>
  );
}