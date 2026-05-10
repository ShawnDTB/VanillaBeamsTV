# VanillaBeamsTV

A custom creator website and Minecraft SMP hub for **VanillaBeamsTV**. The project brings the stream, community links, player guide, server map, Discord, Twitch support, and Minecraft rank/perk information into one branded home base.

This website is built and maintained by **Designed to Breakthrough LLC / DTB Solutions** as a real-world creator brand project focused on frontend development, community systems, and digital infrastructure.

## Live Project

- **Website:** https://vanillabeams.tv
- **Minecraft SMP:** `play.vanillabeams.tv`
- **Bedrock Port:** `19132`
- **Map:** https://vanillabeams.tv/map
- **Discord:** https://discord.gg/2DxZzVW3yj
- **Twitch:** https://twitch.tv/vanillabeamstv
- **TikTok:** https://www.tiktok.com/@vanillabeamstv
- **YouTube:** https://www.youtube.com/channel/UCDmY6JLZo_L5elPM_3_l6BQ

## Current Project Status

The site has evolved from a basic creator landing page into a more complete community hub for the VanillaBeamsTV brand and Minecraft SMP.

Current website updates include:

- Branded homepage with VanillaBeamsTV banner artwork
- Embedded Twitch player as the main homepage feature
- Quick links for Twitch, TikTok, YouTube, Discord, and the Minecraft SMP
- Support section for Twitch subscriptions and donations
- Dedicated **Player Guide** page for new SMP players
- Dedicated **Perks** page for Twitch subscriber ranks and Minecraft benefits
- Navigation for Home, Player Guide, Perks, Map, Discord, and Watch Live
- Responsive glass-card visual style with neon pink / black creator branding

## Website Pages

### Home

The homepage acts as the main audience entry point. It highlights the live Twitch stream, introduces VanillaBeamsTV, and gives viewers direct access to the SMP, Discord, social platforms, and support options.

### Player Guide

The player guide explains how to join the SMP, link accounts, use Discord and Minecraft commands, claim land, set homes, teleport to friends, and understand the server’s role structure.

### Perks

The perks page explains how Twitch supporter tiers map into Discord roles and Minecraft ranks. It also clarifies what benefits are included, what is intentionally not included, and how the server avoids pay-to-win mechanics.

### Map

The map link points to the live BlueMap view at `/map`, giving players a web-based way to explore the SMP world.

## Minecraft SMP Overview

The VanillaBeamsTV SMP is designed to stay close to a vanilla survival experience while adding quality-of-life systems that support community play, moderation, and content creation.

Core server goals:

- Keep gameplay survival-first and fair
- Support both Java and Bedrock players through crossplay
- Protect player builds with land claiming
- Reward Twitch supporters without selling power
- Connect Twitch, Discord, and Minecraft identity where possible
- Keep staff and creator permissions separate from normal paid ranks
- Provide a web map and player guide so the community can self-serve basic information

## Minecraft Server Details

- **Server Address:** `play.vanillabeams.tv`
- **Bedrock Port:** `19132`
- **Crossplay:** Java + Bedrock support
- **Map:** BlueMap at https://vanillabeams.tv/map
- **Claims:** GriefPrevention land claiming
- **Account Linking:** DiscordSRV and Floodgate-style linking flow
- **Permissions:** LuckPerms role/rank structure
- **Voice:** Simple Voice Chat support
- **Core Philosophy:** Vanilla-like survival with fair QoL perks only

## Rank & Role Structure

The rank system is designed around community identity, convenience, and fair support benefits instead of pay-to-win advantages.

### Player / Supporter Roles

| Rank | Source | Purpose |
| --- | --- | --- |
| Vanilla | Default Player | Normal SMP experience |
| Subby | Twitch Tier 1 | Entry supporter role with light QoL perks |
| GOAT | Twitch Tier 2 | Mid-tier supporter role with stronger convenience |
| Beam Boss | Twitch Tier 3 | Highest supporter role with the best fair QoL perks |

### Community / Staff Roles

| Role | Purpose |
| --- | --- |
| Streamer | Trusted creator role for live content and community moments |
| Mod | Community moderation and player support |
| Admin | Server leadership, systems management, and high-level support |
| Developer | Technical build, configuration, and infrastructure support |

## Supporter Perk Philosophy

Supporter ranks are meant to feel rewarding without changing the core survival balance.

Supporter ranks may include:

- Discord role recognition
- Minecraft rank recognition
- Chat/tab prefixes
- Additional homes by tier
- Bonus GriefPrevention claim blocks
- Cosmetic identity perks
- Convenience commands such as `/hat`, `/workbench`, `/near`, and `/enderchest` depending on tier

Supporter ranks do **not** include:

- `/fly`
- `/god`
- `/heal`
- `/feed`
- `/repair`
- `/give`
- `/gamemode`
- `/enchant`
- `/invsee`
- `/vanish`
- WorldEdit access
- Staff commands
- Free items or creative-mode advantages

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **React Router**
- **Lucide React**
- **CSS**
- **Cloudflare Pages**
- **Cloudflare DNS**

## Project Structure

```text
VanillaBeamsTV/
├── public/
│   └── branding/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PlayerGuide.jsx
│   │   └── Perks.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
