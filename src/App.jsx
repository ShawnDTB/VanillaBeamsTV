import "./App.css";
import { Heart, Play } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import PerksPage from "./pages/Perks.jsx";

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <div className="brand-icon">
            <Heart size={22} />
          </div>
          <div>
            <div className="brand-title">VanillaBeamsTV</div>
            <div className="brand-subtitle">Live • Community • Minecraft SMP</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/perks">Perks</Link>
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

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-bg-glow site-bg-glow-top" />
      <div className="site-bg-glow site-bg-glow-bottom" />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perks" element={<PerksPage />} />
      </Routes>
    </div>
  );
}