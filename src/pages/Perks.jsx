import {
  Heart,
  Crown,
  Sparkles,
  Check,
  Link as LinkIcon,
  Play,
  MessageSquareText,
  Home,
  MapPinned,
  ShieldCheck,
  Gem,
  Compass,
} from "lucide-react";

const perkTiers = [
  {
    name: "Subby",
    tier: "Twitch Tier 1",
    icon: Heart,
    perks: [
      "Subby Discord role",
      "Subby Minecraft rank",
      "Supporter chat/tab prefix",
      "2 total homes",
      "+1,000 bonus claim blocks",
      "/hat access",
      "Minor cosmetic perks",
      "Slightly improved teleport cooldown",
    ],
  },
  {
    name: "GOAT",
    tier: "Twitch Tier 2",
    icon: Crown,
    perks: [
      "Everything from Subby",
      "GOAT Discord role",
      "GOAT Minecraft rank",
      "GOAT chat/tab prefix",
      "3 total homes",
      "+2,500 bonus claim blocks",
      "/workbench access",
      "/near access",
      "Better teleport cooldown",
      "More cosmetic identity",
    ],
  },
  {
    name: "Beam Boss",
    tier: "Twitch Tier 3",
    icon: Sparkles,
    perks: [
      "Everything from Subby and GOAT",
      "Beam Boss Discord role",
      "Beam Boss Minecraft rank",
      "Beam Boss chat/tab prefix",
      "5 total homes",
      "+5,000 bonus claim blocks",
      "/enderchest access",
      "Best supporter teleport cooldown",
      "Best supporter cosmetic identity",
      "Full supporter recognition across Discord and Minecraft",
    ],
  },
];

const rankComparison = [
  {
    rank: "Vanilla",
    homes: "1",
    claims: "1,000 starting blocks",
    travel: "Normal /tpa",
    cosmetics: "Default",
    utility: "Core survival",
  },
  {
    rank: "Subby",
    homes: "2",
    claims: "1,000 starting + 1,000 bonus",
    travel: "Slight cooldown improvement",
    cosmetics: "Prefix, /hat, minor cosmetics",
    utility: "Supporter identity",
  },
  {
    rank: "GOAT",
    homes: "3",
    claims: "1,000 starting + 2,500 bonus",
    travel: "Better cooldown",
    cosmetics: "Better prefix and cosmetics",
    utility: "/workbench and /near",
  },
  {
    rank: "Beam Boss",
    homes: "5",
    claims: "1,000 starting + 5,000 bonus",
    travel: "Best supporter cooldown",
    cosmetics: "Best supporter identity",
    utility: "/enderchest",
  },
];

const linkingSteps = [
  "Subscribe on Twitch using the account you want connected.",
  "Join the Discord server and make sure your Twitch account is linked to Discord.",
  "Use /discord link to connect your Minecraft account to Discord.",
  "Once everything syncs, your Discord role and Minecraft rank should match your Twitch tier.",
];

const perkHighlights = [
  {
    icon: ShieldCheck,
    title: "Fair survival-first perks",
    text: "Supporter ranks are built around quality-of-life, cosmetics, claims, homes, and community identity instead of pay-to-win power.",
  },
  {
    icon: MapPinned,
    title: "More protected land",
    text: "Higher supporter tiers get more claim space, making long-term builds easier to protect without giving free items or creative tools.",
  },
  {
    icon: Home,
    title: "More homes by tier",
    text: "Homes scale in a simple way: Vanilla gets 1, Subby gets 2, GOAT gets 3, and Beam Boss gets 5.",
  },
  {
    icon: Compass,
    title: "Better convenience",
    text: "GOAT and Beam Boss unlock stronger utility commands like /workbench, /near, and /enderchest while keeping normal survival progression intact.",
  },
];

const notIncluded = [
  "/fly",
  "/god",
  "/heal",
  "/feed",
  "/repair",
  "/give",
  "/gamemode",
  "/enchant",
  "/invsee",
  "/vanish",
  "/worldedit",
  "Staff commands",
];

export default function PerksPage() {
  return (
    <main className="page-main">
      <div className="page-content">
        <section className="perks-page">
          <section className="perks-hero-section">
            <div className="glass-card perks-hero-card">
              <div className="section-label">VanillaBeamsTV SMP</div>
              <h1>Ranks & Perks</h1>
              <p>
                Supporter ranks are designed to reward Twitch support with fair
                quality-of-life perks, better identity, and more convenience
                without selling power or breaking the survival experience.
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
          </section>

          <section className="perks-tiers-section">
            <div className="perks-tiers-grid">
              {perkTiers.map((tier) => {
                const Icon = tier.icon;

                return (
                  <div key={tier.name} className="glass-card perk-tier-card">
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

                    <div className="section-label">{tier.tagline}</div>

                    <p
                      style={{
                        marginBottom: "22px",
                        color: "rgba(255, 230, 242, 0.7)",
                        lineHeight: "1.7",
                      }}
                    >
                      {tier.description}
                    </p>

                    <div className="perk-list perk-list-tight">
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
            <div className="perks-linking-grid">
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
                <div className="section-label"></div>

                <div className="benefit-stack benefit-stack-clean">
                  {perkHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="benefit-item benefit-item-clean"
                      >
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

          <section className="perks-tiers-section">
            <div className="glass-card info-card">
              <div
                style={{
                  overflowX: "auto",
                  marginTop: "8px",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: "0 12px",
                    minWidth: "780px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Rank",
                        "Homes",
                        "Claim Blocks",
                        "Travel",
                        "Cosmetics",
                        "Utility",
                      ].map((heading) => (
                        <th
                          key={heading}
                          style={{
                            textAlign: "left",
                            padding: "0 16px 8px",
                            fontSize: "0.76rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.16em",
                            color: "rgba(255, 220, 240, 0.65)",
                          }}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {rankComparison.map((row) => (
                      <tr key={row.rank}>
                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            borderTopLeftRadius: "18px",
                            borderBottomLeftRadius: "18px",
                            fontWeight: "800",
                            color: "#fff",
                          }}
                        >
                          {row.rank}
                        </td>

                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            color: "rgba(255, 234, 244, 0.84)",
                          }}
                        >
                          {row.homes}
                        </td>

                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            color: "rgba(255, 234, 244, 0.84)",
                          }}
                        >
                          {row.claims}
                        </td>

                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            color: "rgba(255, 234, 244, 0.84)",
                          }}
                        >
                          {row.travel}
                        </td>

                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            color: "rgba(255, 234, 244, 0.84)",
                          }}
                        >
                          {row.cosmetics}
                        </td>

                        <td
                          style={{
                            padding: "18px 16px",
                            background: "rgba(255, 255, 255, 0.045)",
                            borderTopRightRadius: "18px",
                            borderBottomRightRadius: "18px",
                            color: "rgba(255, 234, 244, 0.84)",
                          }}
                        >
                          {row.utility}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="perks-linking-section">
            <div className="perks-linking-grid">
              <div className="glass-card info-card">
                <div className="section-label">Fair Play Promise</div>
                <h2>No pay-to-win power</h2>
                <div spacer style={{ marginBottom: "16px" }} />
                <p>
                 Supporter ranks are quality-of-life and
                  cosmetic focused. They reward support without selling power,
                  free items, creative tools, or staff control.
                </p>

                <div className="perk-list" style={{ marginTop: "24px" }}>
                  {notIncluded.map((item) => (
                    <div key={item} className="perk-list-item">
                      <Gem size={15} />
                      <span>{item} are not included in supporter ranks</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card info-card">
                <div className="section-label">Community Identity</div>
                <h2>Multi-platform Rewards</h2>
                <div spacer style={{ marginBottom: "16px" }} />
                <p>
                  Once your Twitch, Discord, and Minecraft accounts are linked,
                  your supporter status can show across the community through
                  your Discord role, Minecraft rank, chat identity, and
                  supporter perks.
                </p>

                <div className="benefit-stack" style={{ marginTop: "26px" }}>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <MessageSquareText size={18} />
                    </div>
                    <div className="benefit-copy">
                      <strong>Discord recognition</strong>
                      <p>
                        Your supporter tier can appear as a Discord role so the
                        community knows you are helping support the stream.
                      </p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Sparkles size={18} />
                    </div>
                    <div className="benefit-copy">
                      <strong>Minecraft recognition</strong>
                      <p>
                        Your Minecraft rank can match your supporter tier,
                        giving you a visible role and fair in-game perks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="perks-cta-section">
            <div className="glass-card perks-cta-card">
              <div className="section-label">Get Started</div>
              <h2>Subscribe, join Discord, and link up</h2>
              <p>
                Once you sub on Twitch and connect everything, your Discord role
                and Minecraft rank can reflect your supporter tier.
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
          </section>
        </section>
      </div>
    </main>
  );
}