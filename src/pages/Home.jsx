import { useMemo } from "react";
import {
  Play,
  Users,
  MonitorPlay,
  Video,
  Gamepad2,
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

export default function HomePage() {
  const twitchEmbedSrc = useMemo(() => {
    const parent =
      typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `https://player.twitch.tv/?channel=vanillabeamstv&parent=${parent}&muted=true`;
  }, []);

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