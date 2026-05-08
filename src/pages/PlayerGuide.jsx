import {
  BookOpen,
  Home,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Users,
  HeartHandshake,
  Crown,
  Sparkles,
  Gamepad2,
  Mic,
  Link as LinkIcon,
  Compass,
  Hammer,
  AlertTriangle,
  Check,
  Shovel,
} from "lucide-react";

import "./PlayerGuide.css";

const starterSteps = [
  {
    icon: Gamepad2,
    title: "Join the SMP",
    text: "Join with play.vanillabeams.tv. Bedrock players can also join through crossplay.",
    commands: [],
  },
  {
    icon: LinkIcon,
    title: "Link your accounts",
    text: "Link your Twitch, Discord, and Minecraft identity across the community.",
    commands: ["/discord", "/discord link", "/linkaccount"],
  },
  {
    icon: MapPinned,
    title: "Claim your land",
    text: "Use a golden shovel with GriefPrevention to protect your base, builds, chests, animals, farms, and storage.",
    commands: [
      "Golden shovel",
      "/claimslist",
      "/trust <player>",
      "/untrust <player>",
    ],
  },
  {
    icon: Home,
    title: "Set your home",
    text: "Homes make it easier to return to your base. Supporter tiers unlock more homes.",
    commands: ["/sethome", "/home", "/delhome"],
  },
  {
    icon: Users,
    title: "Play with friends",
    text: "Teleport requests let players meet up without giving everyone direct teleport powers.",
    commands: ["/tpa <player>", "/tpahere <player>", "/tpaccept", "/tpdeny"],
  },
  {
    icon: Mic,
    title: "Use voice and Discord",
    text: "Simple Voice Chat and Discord make meaningful community interactions easier.",
    commands: ["/voicechat", "/discord"],
  },
];

const supporterGuides = [
  {
    name: "Vanilla",
    icon: BookOpen,
    label: "Default Player",
    description:
      "Vanilla is the normal survival experience. You can claim land, set a home, teleport to friends through requests, link Discord, and play the server as intended.",
    commands: [
      "/spawn",
      "/sethome",
      "/home",
      "/tpa <player>",
      "Golden shovel",
      "/claimslist",
      "/trust <player>",
      "/discord",
      "/voicechat",
    ],
    notes: [
      "Includes 1 home.",
      "Includes 1,000 starting claim blocks.",
      "Built for the normal survival experience.",
    ],
  },
  {
    name: "Subby",
    icon: HeartHandshake,
    label: "Twitch Tier 1",
    description:
      "Subby is a Tier 1 Twitch subscription rank. It gives small quality-of-life perks and community recognition without changing survival balance.",
    commands: ["Everything from Vanilla", "/hat", "/back", "/nick"],
    notes: [
      "2 total homes.",
      "+1,000 bonus claim blocks.",
      "Subby Discord role and Minecraft rank.",
      "Small cosmetic and convenience perks.",
    ],
  },
  {
    name: "GOAT",
    icon: Crown,
    label: "Twitch Tier 2",
    description:
      "GOAT is a Tier 2 Twitch subscription rank. It adds more flexibility for supporters who want stronger convenience while keeping the server fair.",
    commands: ["Everything from Subby", "/workbench", "/near"],
    notes: [
      "3 total homes.",
      "+2,500 bonus claim blocks.",
      "GOAT Discord role and Minecraft rank.",
      "Better convenience than Subby.",
    ],
  },
  {
    name: "Beam Boss",
    icon: Sparkles,
    label: "Twitch Tier 3",
    description:
      "Beam Boss is a Tier 3 Twitch subscription rank. It is the highest level of support with the strongest fair convenience perks.",
    commands: ["Everything from GOAT", "/enderchest"],
    notes: [
      "5 total homes.",
      "+5,000 bonus claim blocks.",
      "Beam Boss Discord role and Minecraft rank.",
      "Highest supporter convenience and identity.",
    ],
  },
];

const claimBlockBonuses = [
  {
    rank: "Vanilla",
    amount: "1,000 starting claim blocks",
  },
  {
    rank: "Subby",
    amount: "1,000 starting + 1,000 bonus",
  },
  {
    rank: "GOAT",
    amount: "1,000 starting + 2,500 bonus",
  },
  {
    rank: "Beam Boss",
    amount: "1,000 starting + 5,000 bonus",
  },
];

const communityRoles = [
  {
    name: "Streamer",
    icon: Compass,
    label: "Trusted Creator Role",
    description:
      "Streamer is a trusted creator role used for content, stream-safe moments, community events, and smoother live gameplay. It is not a normal paid rank.",
    notes: [
      "Represents trusted creators and live content moments.",
      "May receive extra convenience for stream flow and event support.",
      "Can receive higher claim flexibility for stream builds or community projects.",
      "Elevated access is monitored and used only for content or community needs.",
    ],
  },
  {
    name: "Mod",
    icon: ShieldCheck,
    label: "Community Staff",
    description:
      "Mods help support players, respond to issues, and enforce the rules.",
    notes: [
      "Helps players with basic questions, issues, and community concerns.",
      "Supports fair play, rule enforcement, and conflict resolution.",
      "Can assist with griefing concerns, disruptive behavior, and player reports.",
      "Staff access is used only for moderation and community safety.",
    ],
  },
  {
    name: "Admin",
    icon: Hammer,
    label: "Server Leadership",
    description: "Admins help manage the server at the highest level.",
    notes: [
      "Oversees server systems, staff coordination, and larger player issues.",
      "Supports events, protected areas, claims, ranks, and community operations.",
      "Helps maintain integrations like Discord, Bedrock crossplay, maps, and permissions.",
      "Administrative access is used for server management, not personal gameplay advantage.",
    ],
  },
];

const importantRules = [
  "Supporter ranks are quality-of-life and cosmetic focused.",
  "Supporter ranks do not include fly, god mode, creative, free items, WorldEdit, or staff commands.",
  "Claims use GriefPrevention claim blocks and are created with a golden shovel.",
  "Players can earn more claim blocks naturally by playing.",
  "If something does not sync correctly, ask staff for help with account linking.",
];

function CommandPill({ children }) {
  return <code className="vg-command-pill">{children}</code>;
}

function MiniCommandList({ commands }) {
  if (!commands.length) return null;

  return (
    <div className="vg-command-pill-list">
      {commands.map((command) => (
        <CommandPill key={command}>{command}</CommandPill>
      ))}
    </div>
  );
}

function RoleCard({ role }) {
  const Icon = role.icon;

  return (
    <div className="glass-card perk-tier-card vg-role-card">
      <div className="perk-tier-top">
        <div className="perk-tier-icon">
          <Icon size={20} />
        </div>

        <div className="perk-tier-heading">
          <div className="perk-tier-name">{role.name}</div>
          <div className="perk-tier-subtitle">{role.label}</div>
        </div>
      </div>

      <p className="vg-role-description">{role.description}</p>

      <div className="perk-list perk-list-tight">
        {role.notes.map((note) => (
          <div key={note} className="perk-list-item">
            <Check size={15} />
            <span>{note}</span>
          </div>
        ))}
      </div>

      {role.commands ? <MiniCommandList commands={role.commands} /> : null}
    </div>
  );
}

export default function PlayerGuidePage() {
  return (
    <main className="page-main">
      <div className="page-content">
        <section className="perks-page">
          <section className="perks-hero-section">
            <div className="glass-card perks-hero-card">
              <div className="section-label">Player Guide</div>
              <h1>VanillaBeamsTV Player Guide</h1>
              <p>
                New to the SMP? This page explains the main commands, how ranks
                work, how to protect your builds, and what each role can do.
              </p>

              <div className="hero-actions centered-actions">
                <a
                  className="btn btn-primary"
                  href="https://discord.gg/2DxZzVW3yj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquareText size={16} />
                  Join Discord
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://vanillabeams.tv/map"
                >
                  <MapPinned size={16} />
                  Open Map
                </a>
              </div>
            </div>
          </section>

          <section className="perks-linking-section">
            <div className="glass-card info-card">
              <div className="section-label">Quick Start</div>
              <h2>What to do first</h2>

              <div className="vg-start-grid">
                {starterSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="vg-start-card">
                      <div className="benefit-icon vg-start-card-icon">
                        <Icon size={18} />
                      </div>

                      <strong className="vg-start-card-title">
                        {step.title}
                      </strong>

                      <p className="vg-start-card-text">{step.text}</p>

                      <MiniCommandList commands={step.commands} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="perks-tiers-section">
            <div className="vg-supporter-grid">
              {supporterGuides.map((role) => (
                <RoleCard key={role.name} role={role} />
              ))}
            </div>
          </section>

          <section className="perks-linking-section">
            <div className="glass-card info-card vg-claim-guide-card">
              <div className="section-label">Claiming Land</div>
              <h2>Protect your builds</h2>

              <p className="vg-section-copy">
                The server uses GriefPrevention claim blocks to protect bases,
                farms, storage, and community builds. To create or resize a
                claim, use a golden shovel and right-click the corners of the
                area you want to protect.
              </p>

              <div className="vg-claim-grid">
                <div className="vg-claim-point">
                  <div className="benefit-icon">
                    <Shovel size={18} />
                  </div>

                  <div className="benefit-copy">
                    <strong>Basic claiming</strong>
                    <p>
                      Hold a golden shovel, right-click one corner of your build,
                      then right-click the opposite corner to create or resize a
                      claim.
                    </p>

                    <MiniCommandList
                      commands={[
                        "Golden shovel",
                        "/claimslist",
                        "/abandonclaim",
                      ]}
                    />
                  </div>
                </div>

                <div className="vg-claim-point">
                  <div className="benefit-icon">
                    <Users size={18} />
                  </div>

                  <div className="benefit-copy">
                    <strong>Trusting friends</strong>
                    <p>
                      Trust lets friends build, access containers, or interact
                      with your claim depending on the trust level.
                    </p>

                    <MiniCommandList
                      commands={[
                        "/trust <player>",
                        "/containertrust <player>",
                        "/accesstrust <player>",
                        "/untrust <player>",
                        "/trustlist",
                      ]}
                    />
                  </div>
                </div>

                <div className="vg-claim-point vg-claim-bonus-point">
                  <div className="benefit-icon">
                    <MapPinned size={18} />
                  </div>

                  <div className="benefit-copy vg-claim-bonus-copy">
                    <strong>Claim block bonuses</strong>

                    <div className="vg-claim-bonus-table">
                      {claimBlockBonuses.map((item) => (
                        <div key={item.rank} className="vg-claim-bonus-row">
                          <span className="vg-claim-bonus-rank">
                            {item.rank}
                          </span>
                          <span className="vg-claim-bonus-amount">
                            {item.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="perks-linking-section">
            <div className="vg-community-grid">
              {communityRoles.map((role) => (
                <RoleCard key={role.name} role={role} />
              ))}
            </div>
          </section>

          <section className="perks-linking-section">
            <div className="glass-card info-card">
              <div className="section-label">Important</div>
              <h2>What ranks do not give</h2>

              <p className="vg-section-copy">
                Supporter ranks are meant to reward support without selling
                power. These rules help keep the SMP fair and fun for everyone.
              </p>

              <div className="perk-list vg-important-list">
                {importantRules.map((rule) => (
                  <div key={rule} className="perk-list-item">
                    <AlertTriangle size={15} />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}