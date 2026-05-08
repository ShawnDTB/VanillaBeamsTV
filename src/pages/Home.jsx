import { useMemo } from "react";
import { Play, Users, MonitorPlay, Video, Gamepad2, Heart } from "lucide-react";
import "./Home.css";

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
    <main className="page-main">
      <div className="page-content">
        <section className="hero-section home-hero-section">
          <div className="home-hero-banner-card glass-card">
            <img
              src="/branding/vanillabanner2.png"
              alt="VanillaBeamsTV"
              className="home-hero-banner-logo"
            />
          </div>

          <div className="glass-card home-featured-stream-card">
            <div className="home-featured-stream-header">
              <div className="home-featured-stream-title">Featured Stream</div>
              <div className="home-featured-stream-subtitle">
                Watch live right from the homepage
              </div>
            </div>

            <div className="home-featured-stream-frame">
              <iframe
                title="VanillaBeamsTV Twitch player"
                src={twitchEmbedSrc}
                width="100%"
                height="100%"
                allowFullScreen
              />
            </div>

            <div className="home-featured-stream-actions">
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
        </section>

        <section className="about-section">
          <div className="glass-card home-about-card">
            <div className="home-about-grid">
              <div className="home-about-copy">
                <div className="section-label">About VanillaBeamsTV</div>

                <h2>
                  Chill streams, good vibes, and a community that likes to just
                  hang out
                </h2>

                <p>
                  Vanilla is a chill streamer who plays Minecraft, Rivals, Dead
                  By Daylight and other variety games! You can find her
                  relaxing, vibing, talking with her peeps!
                </p>
              </div>

              <div className="home-about-portrait-wrap">
                <img
                  src="/branding/VanillaBeamsTV.png"
                  alt="VanillaBeamsTV profile art"
                  className="home-creator-image home-large-creator-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="support-section">
          <div className="split-grid home-support-grid">
            <div className="glass-card info-card home-support-card">
              <div className="section-label">Support</div>

              <h2>Support the stream</h2>

              <p>
                The easiest ways to support are by subscribing on Twitch or
                donating directly. Both help the stream grow and make it easier
                to keep creating content for the community.
              </p>

              <div className="home-support-actions">
                <a
                  href="https://twitch.tv/vanillabeamstv"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <Heart size={16} />
                  Subscribe on Twitch
                </a>

                <a href="#" className="btn btn-secondary">
                  Donate
                </a>
              </div>
            </div>

            <div className="glass-card info-card home-links-card">
              <div className="section-label">Quick Links</div>

              <h2>Everything in one place</h2>

              <div className="home-quick-link-grid">
                {linkCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      className={`home-mini-link-card ${
                        item.featured ? "home-mini-link-card-featured" : ""
                      }`}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      <span className="home-mini-link-icon">
                        <Icon size={16} />
                      </span>

                      <span
                        className={`home-mini-link-copy ${
                          item.featured ? "home-mini-link-copy-featured" : ""
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
      </div>
    </main>
  );
}