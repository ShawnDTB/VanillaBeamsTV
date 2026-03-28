import "./App.css";
import { useMemo } from "react";
import { Heart, Gift, Map, Sparkles, Play, Users, ExternalLink } from "lucide-react";

const quickActions = [
  {
    title: "Watch on Twitch",
    text: "Open the full channel and jump right into chat.",
    href: "https://twitch.tv/vanillabeamstv",
    icon: Play,
    external: true,
  },
  {
    title: "Join Discord",
    text: "Connect with the community off stream.",
    href: "https://discord.gg/yourinvite",
    icon: Users,
    external: true,
  },
  {
    title: "Support the Stream",
    text: "Tips, wishlist, and support options.",
    href: "#support",
    icon: Gift,
    external: false,
  },
  {
    title: "View the Map",
    text: "Open the Minecraft world map in a new tab.",
    href: "https://map.vanillabeams.tv",
    icon: Map,
    external: true,
  },
];

export default function App() {
  const twitchEmbedSrc = useMemo(() => {
    const parent =
      typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `https://player.twitch.tv/?channel=vanillabeamstv&parent=${parent}&muted=true`;
  }, []);

  return (
    <div className="site-shell">
      <div className="site-bg-glow site-bg-glow-top" />
      <div className="site-bg-glow site-bg-glow-bottom" />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <div className="brand-icon">
              <Heart size={22} />
            </div>
            <div>
              <div className="brand-title">VanillaBeamsTV</div>
              <div className="brand-subtitle">Live • Community • Content</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#support">Support</a>
            <a href="https://map.vanillabeams.tv" target="_blank" rel="noreferrer">
              Map
            </a>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noreferrer">
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

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={16} />
                Cute, polished, stream-first creator hub
              </div>

              <h1>
                VanillaBeamsTV,
                <span> live and front-center.</span>
              </h1>

              <p className="hero-text">
                A clean home base for her stream, content, community, and Minecraft world.
                The homepage should instantly feel like her brand while making it easy
                to watch, join, and support.
              </p>

              <div className="hero-actions">
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
                  href="https://discord.gg/yourinvite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Users size={16} />
                  Join Discord
                </a>
              </div>

              <div className="mini-stats">
                <div className="mini-card">
                  <span>Focus</span>
                  <strong>Live content first</strong>
                </div>
                <div className="mini-card">
                  <span>Community</span>
                  <strong>Discord + Minecraft</strong>
                </div>
                <div className="mini-card">
                  <span>Style</span>
                  <strong>Glossy pink vibe</strong>
                </div>
              </div>
            </div>

            <div className="hero-panel glass-card">
              <div className="panel-header">
                <div>
                  <div className="panel-title">Featured Stream</div>
                  <div className="panel-subtitle">Front and center</div>
                </div>

                <a
                  className="panel-link"
                  href="https://twitch.tv/vanillabeamstv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open channel
                  <ExternalLink size={15} />
                </a>
              </div>

              <div className="stream-frame">
                <iframe
                  title="VanillaBeamsTV Twitch player"
                  src={twitchEmbedSrc}
                  width="100%"
                  height="100%"
                  allowFullScreen
                />
              </div>

              <div className="quick-actions">
                {quickActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      className="action-card"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      <div className="action-icon">
                        <Icon size={18} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="banner-section">
          <div className="container">
            <div className="banner-card glass-card">
              <img
                src="/branding/vanillabanner2.png"
                alt="VanillaBeamsTV banner"
                className="banner-image"
              />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container split-grid">
            <div className="glass-card info-card">
              <div className="section-label">About the Brand</div>
              <h2>A homepage that feels like her content, not just a list of links</h2>
              <p>
                The goal is to make people want to stay, watch, and join the community.
                Keep the messaging short, clean, and centered around what she creates,
                what she plays, and where people can connect with her.
              </p>
            </div>

            <div className="glass-card creator-card">
              <img
                src="/branding/VanillaBeamsTV.png"
                alt="VanillaBeamsTV profile art"
                className="creator-image"
              />

              <div className="creator-copy">
                <div className="section-label">Creator Snapshot</div>
                <h3>Streamer, community leader, and Minecraft creator</h3>
                <p>
                  This area can later hold a short real bio, stream focus, featured games,
                  or a rotating creator update. For now, it gives the homepage personality
                  and visual balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="support-section">
          <div className="container split-grid support-grid">
            <div className="glass-card info-card">
              <div className="section-label">Support</div>
              <h2>Make supporting her simple and natural</h2>
              <p>
                Keep this section light and clean. One main support link, one wishlist if
                wanted, and a short explanation of how support helps the stream and community.
              </p>

              <div className="support-actions">
                <a href="#" className="btn btn-primary">
                  Main Support Link
                </a>
                <a href="#" className="btn btn-secondary">
                  Wishlist
                </a>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="section-label">What comes next</div>
              <ul className="next-list">
                <li><strong>Next page:</strong> Support / donations page with real links.</li>
                <li><strong>After that:</strong> Minecraft map page with embed or live link.</li>
                <li><strong>Menu redirects:</strong> Twitch and Discord stay external.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}