import {
  Crown,
  Link as LinkIcon,
  ShieldCheck,
  Sparkles,
  Check,
  Users,
  Gamepad2,
  Play,
  Heart,
  MessageSquareText,
  Home,
  MapPinned,
} from "lucide-react";

const perkTiers = [
  {
    name: "Subby",
    tier: "Twitch Tier 1",
    icon: Heart,
    accent: "pink",
    perks: [
      "Access to linked Discord ↔ Minecraft chat",
      "Subby Discord role and matching Minecraft rank",
      "Small claim boost for extra protected land",
      "Minor supporter-only cosmetic or chat perks",
    ],
  },
  {
    name: "GOAT",
    tier: "Twitch Tier 2",
    icon: Crown,
    accent: "purple",
    perks: [
      "Everything in Subby",
      "Larger claim boost than Tier 1",
      "Extra convenience features like /tpa",
      "Stronger supporter recognition across Discord and Minecraft",
    ],
  },
  {
    name: "Beam Boss",
    tier: "Twitch Tier 3",
    icon: Sparkles,
    accent: "gold",
    perks: [
      "Everything in Subby and GOAT",
      "Highest claim boost for the most protected land",
      "Top-tier supporter role and Minecraft rank",
      "Best cosmetic and recognition perks across the community",
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
    icon: Users,
    title: "Discord role sync",
    text: "Your Twitch subscription gives you the matching Discord supporter role automatically once everything is linked.",
  },
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
    title: "Convenience perks",
    text: "Higher tiers can unlock light utility features like extra travel convenience while keeping gameplay fair.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent identity",
    text: "Your status stays clean and consistent across stream, Discord, and Minecraft so your support actually feels recognized.",
  },
];

export default function PerksPage() {
  return (
    <main className="perks-page">
      <section className="perks-hero-section">
        <div className="container perks-hero-wrap">
          <div className="glass-card perks-hero-card">
            <div className="section-label">Perks</div>
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

                <div className="perk-mapping-row">
                  <div className="perk-mapping-box">
                    <span>Discord Role</span>
                  </div>
                  <div className="perk-mapping-box">
                    <span>Minecraft Rank</span>
                  </div>
                </div>

                <div className="perk-list">
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

          <div className="glass-card info-card">
            <div className="section-label">Perks</div>
            <h2>Why support matters</h2>

            <div className="benefit-stack">
              {perkHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="benefit-item">
                    <div className="benefit-icon">
                      <Icon size={18} />
                    </div>
                    <div>
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