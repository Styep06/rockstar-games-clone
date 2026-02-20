import { useState, useEffect, useRef } from "react";

const RSLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z" fill="currentColor"/>
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path fill="currentColor" d="M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 1 1 .942.943l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.943" fillRule="evenodd" clipRule="evenodd"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path fill="currentColor" d="M5.667 5.333a.667.667 0 1 1 0-1.333h5.666c.368 0 .667.298.667.667v5.666a.667.667 0 0 1-1.333 0V6.276l-5.529 5.529a.667.667 0 1 1-.943-.943l5.529-5.529z" fillRule="evenodd" clipRule="evenodd"/>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M5 4.026c0-.659.73-1.057 1.284-.7l9.292 5.973a.833.833 0 0 1 0 1.402l-9.292 5.974A.833.833 0 0 1 5 15.974z"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M14.667 14.167a.835.835 0 0 1-1.667 0V7.844l-6.911 6.911a.833.833 0 1 1-1.178-1.178l6.911-6.911H5.5A.833.833 0 1 1 5.5 5h8.333c.46 0 .834.373.834.833z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M7.1 3.049c-.744.035-1.252.154-1.697.329-.46.179-.85.42-1.238.81a3.4 3.4 0 0 0-.806 1.24c-.172.445-.289.955-.322 1.7s-.04.984-.036 2.885c.003 1.901.012 2.14.048 2.886.036.745.154 1.254.329 1.698.18.46.42.85.81 1.239.389.388.779.626 1.241.805.445.172.954.289 1.7.322.745.032.984.04 2.885.036 1.9-.003 2.14-.012 2.886-.047.747-.036 1.252-.155 1.697-.329.46-.18.85-.42 1.239-.81.388-.39.626-.78.804-1.241.173-.445.29-.954.322-1.7s.04-.985.037-2.885c-.003-1.901-.012-2.14-.047-2.886s-.154-1.253-.329-1.698c-.18-.46-.42-.85-.81-1.239a3.4 3.4 0 0 0-1.24-.804c-.446-.173-.955-.29-1.7-.322s-.985-.04-2.886-.037-2.14.012-2.886.048m.083 12.654c-.683-.03-1.053-.143-1.3-.238a2.2 2.2 0 0 1-.806-.522 2.16 2.16 0 0 1-.525-.804c-.096-.247-.212-.617-.244-1.3-.035-.737-.042-.958-.046-2.827-.004-1.87.003-2.09.036-2.828.029-.682.143-1.053.238-1.3.126-.327.277-.56.522-.806a2.16 2.16 0 0 1 .804-.525c.246-.096.616-.211 1.299-.243.738-.035.96-.042 2.828-.047s2.09.003 2.829.036c.682.03 1.053.143 1.3.238.326.126.56.277.805.522.246.245.398.477.525.804.097.246.211.616.244 1.299.035.738.043.96.046 2.828s-.003 2.09-.035 2.828c-.03.682-.143 1.053-.238 1.3a2.2 2.2 0 0 1-.523.806 2.2 2.2 0 0 1-.804.525c-.246.096-.617.211-1.298.244-.739.034-.96.042-2.83.046-1.868.004-2.089-.004-2.827-.036m5.706-9.444a.84.84 0 1 0 1.68-.003.84.84 0 0 0-1.68.003m-6.483 3.748a3.594 3.594 0 1 0 7.188-.014 3.594 3.594 0 0 0-7.188.014m1.26-.002a2.333 2.333 0 1 1 4.668-.01 2.333 2.333 0 0 1-4.667.01"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M11.332 8.928 16.544 3h-1.235l-4.526 5.147L7.17 3H3l5.466 7.784L3 17h1.235l4.78-5.436L12.83 17H17zM9.64 10.852l-.554-.775L4.68 3.91h1.897l3.556 4.977.554.775 4.622 6.47h-1.897z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M17.667 5.874c-.185-.738-.726-1.318-1.415-1.516C15.004 4 10 4 10 4s-5.004 0-6.25.358c-.69.198-1.231.778-1.415 1.516C2 7.21 2 10 2 10s0 2.79.335 4.126c.184.738.725 1.318 1.414 1.516C4.996 16 10 16 10 16s5.004 0 6.25-.358c.69-.198 1.231-.778 1.416-1.516C18 12.79 18 10 18 10s0-2.79-.334-4.126M8.4 12.57V7.429L12.556 10z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M17 10.026C17 6.146 13.866 3 10 3s-7 3.146-7 7.026c0 3.294 2.26 6.06 5.309 6.819v-4.672H6.866v-2.147h1.443V9.1c0-2.392 1.078-3.5 3.417-3.5.444 0 1.209.087 1.522.174v1.947a9 9 0 0 0-.808-.027c-1.148 0-1.592.437-1.592 1.571v.76h2.287l-.393 2.147h-1.894V17C14.314 16.58 17 13.618 17 10.026"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.025 13.254c-.038 1.078-.915 1.944-1.982 1.944a2 2 0 0 1-.695-.126c.22.087.454.126.695.126 1.074 0 1.944-.866 1.982-1.944v-9.64h1.739c.166.913.703 1.7 1.444 2.195A3.27 3.27 0 0 0 16 6.352v2.409a5.57 5.57 0 0 1-3.29-1.079v4.887c0 2.44-1.95 4.431-4.355 4.431-.93 0-1.784-.299-2.495-.803A4.46 4.46 0 0 1 4 12.57c0-2.44 1.95-4.43 4.355-4.43.197 0 .394.016.59.04v.566C6.752 8.8 4.96 10.5 4.718 12.68c.242-2.172 2.034-3.88 4.227-3.935v1.889a1.9 1.9 0 0 0-.59-.095c-1.096 0-1.988.905-1.988 2.023a2.014 2.014 0 0 0 1.988 2.022c1.074 0 1.944-.866 1.981-1.944V3h2.367c0 .205.023.41.053.614h-1.731z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M14.86 5.421A11.3 11.3 0 0 0 11.97 4.5q-.204.38-.37.78a10.4 10.4 0 0 0-3.205 0 8 8 0 0 0-.37-.78 11.4 11.4 0 0 0-2.89.924c-1.829 2.803-2.324 5.537-2.077 8.232 1.07.82 2.27 1.444 3.543 1.844q.43-.601.759-1.268a7.4 7.4 0 0 1-1.195-.592q.15-.114.293-.228c1.108.54 2.317.82 3.541.82s2.433-.28 3.541-.82q.144.123.293.228a7.5 7.5 0 0 1-1.197.593q.328.667.759 1.267a11.4 11.4 0 0 0 3.544-1.842c.291-3.126-.496-5.835-2.08-8.237M7.673 12c-.69 0-1.26-.65-1.26-1.449s.55-1.454 1.258-1.454 1.274.655 1.262 1.454c-.012.8-.556 1.449-1.26 1.449m4.652 0c-.692 0-1.26-.65-1.26-1.449s.55-1.454 1.26-1.454c.709 0 1.27.655 1.258 1.454-.012.8-.555 1.449-1.258 1.449"/>
  </svg>
);

const TwitchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M6.004 3 3.27 5.5v9h3.28V17l2.735-2.5h2.188l4.922-4.5V3zM15.3 9.5l-2.188 2h-2.187l-1.914 1.75V11.5H6.55V4h8.75z"/>
    <path fill="currentColor" d="M13.66 5.75h-1.094v3h1.094zM10.652 5.75H9.56v3h1.093z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M2.725 9.088h3.637c.132-2.203.741-4.33 1.768-6.175a7.34 7.34 0 0 0-5.405 6.175M10 3.348c-1.028 1.658-1.658 3.646-1.802 5.74h3.604c-.144-2.094-.774-4.082-1.802-5.74m1.802 7.572H8.198c.144 2.094.774 4.082 1.802 5.74 1.028-1.658 1.658-3.646 1.802-5.74M8.13 17.095c-1.027-1.844-1.636-3.972-1.768-6.175H2.725a7.34 7.34 0 0 0 5.405 6.175m3.74 0c1.027-1.844 1.636-3.972 1.768-6.175h3.637a7.34 7.34 0 0 1-5.405 6.175m5.405-8.007h-3.637c-.133-2.203-.741-4.33-1.768-6.175a7.34 7.34 0 0 1 5.405 6.175m-16.44.916a9.164 9.164 0 1 1 18.33 0 9.164 9.164 0 0 1-18.33 0"/>
  </svg>
);

// ---- DATA ----
const heroSlides = [
  {
    bgImg: "https://cms-static-prod.ros.rockstargames.com/images/18izrhn535ym/4cAVJsgRRfJ4jl9bmWhT9s/5a3fcf990f08baf0dc669a53694ce274/4cAVJsgRRfJ4jl9bmWhT9s.jpg?w=1920&fm=webp",
    logoImg: "/Rockstar Games_files/vH3cmDeyYwZAfOSRrFzF7.svg",
    logoAlt: "Grand Theft Auto 6 logo.",
    logoWidth: 240,
    logoHeight: 177,
    game: "Grand Theft Auto VI",
    title: "Coming November 19, 2026",
    learnMoreHref: "https://www.rockstargames.com/gta-vi",
    bgColor: "#1c1b0f",
  },
  {
    bgImg: "https://cms-static-prod.ros.rockstargames.com/images/18izrhn535ym/1AxmIoWczLqNzMhsyDx2i7/be44eba2ab00dbd54c1cc4b951ca20ca/1AxmIoWczLqNzMhsyDx2i7.jpg?w=1920&fm=webp",
    logoImg: "/Rockstar Games_files/6FHkBBzaWABX2R5OwR39In.svg",
    logoAlt: "GTA Online: A Safehouse in the Hills logo.",
    logoWidth: 571,
    logoHeight: 524,
    game: "Grand Theft Auto Online",
    title: "A Safehouse in the Hills Now Available",
    learnMoreHref: "https://www.rockstargames.com/gta-online/mansions",
    bgColor: "#0d0a03",
  },
  {
    bgImg: "https://cms-static-prod.ros.rockstargames.com/images/18izrhn535ym/5z39ZahfJDKgPfTgd6H8Hp/7f93f8a6d1be0d8f30bd82d9b49319c7/5z39ZahfJDKgPfTgd6H8Hp.jpg?w=1920&fm=webp",
    logoImg: "/Rockstar Games_files/2IH9uS8W9A8OQTKHzxBzqd.svg",
    logoAlt: "Grand Theft Auto 5 logo.",
    logoWidth: 312,
    logoHeight: 271,
    game: "Grand Theft Auto V",
    title: "Experience GTAV Enhanced: The Best Version on PC",
    learnMoreHref: "https://www.rockstargames.com/gta-v",
    bgColor: "#24382F",
  },
];

const newsArticles = [
  {
    href: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
    img: "/Rockstar Games_files/c8c033070a0bfb2e3ec6ae7ff047ebe8ec551326.jpg",
    category: "Grand Theft Auto VI",
    title: "Grand Theft Auto VI is Now Set to Launch November 19, 2026",
    date: "November 6, 2025",
  },
  {
    href: "https://www.rockstargames.com/newswire/article/75949277o5977k/bikers-earn-double-on-counterfeit-cash-and-completing-street-dealer-sa",
    img: "/Rockstar Games_files/0e8cfff3e1b55e71a6f514df01b784d17b831cf4.jpg",
    category: "GTA Online",
    title: "Bikers Earn Double on Counterfeit Cash and Completing Street Dealer Sales",
    date: "February 19, 2026",
  },
  {
    href: "https://www.rockstargames.com/newswire/article/4k1255o1295k32/cozy-up-in-the-new-grotti-itali-classic",
    img: "/Rockstar Games_files/0c6ba435b3679a3716686de1ebaf2f5de0a29e37.jpg",
    category: "GTA Online",
    title: "Cozy Up in the New Grotti Itali Classic",
    date: "February 12, 2026",
  },
  {
    href: "https://www.rockstargames.com/newswire/article/9k2493k3k115o8/get-a-free-dewbauchee-champion-supercar-and-early-access-to-the-grotti",
    img: "/Rockstar Games_files/8a23462ee32ed28d07f4d4f99ed7b3582d36c0c9.jpg",
    category: "GTA Online",
    title: "Get a Free Dewbauchee Champion Supercar and Early Access to the Grotti Itali Classic with GTA+",
    date: "February 5, 2026",
  },
  {
    href: "https://www.rockstargames.com/newswire/article/75318ak27ok97k/crime-pays-in-red-dead-online-with-triple-rewards-on-blood-money-oppor",
    img: "/Rockstar Games_files/5af8d40d049db462dc9516820bc14a9f4e530ad0.jpg",
    category: "Red Dead Online",
    title: "Crime Pays in Red Dead Online with Triple Rewards on Blood Money Opportunities",
    date: "February 3, 2026",
  },
];

const storeItems = [
  {
    href: "https://store.rockstargames.com/new-arrivals",
    img: "/Rockstar Games_files/5rYP4eyaMRDIezacQuWzlb.gif",
    alt: "Gif of Rockstar merch including enamel pins, crewnecks, and screenshot tees.",
    label: "Shop New Arrivals",
    gridArea: "a",
  },
  {
    href: "https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=apparel&title=Apparel",
    img: "/Rockstar Games_files/1000x333a10tKOiIRtLn2bBf5.jpg",
    alt: "Midnight Club Screenshot Tee.",
    label: "Shop Apparel",
    gridArea: "b",
  },
  {
    href: "https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=collectible&categories%5Ball%5D=merch",
    img: "/Rockstar Games_files/4x3azUu3EmaB9oKJnBQA.jpg",
    alt: "Enamel pin of a pink razor.",
    label: "Shop Collectibles",
    gridArea: "c",
  },
  {
    href: "https://store.rockstargames.com/search?sort=date.desc&subcategories%5Ball%5D=caps&title=Caps",
    img: "/Rockstar Games_files/4x3au8wC1M1jXmXlttq5.jpg",
    alt: "The Rockstar Games Logo Baggu bag.",
    label: "Shop Accessories",
    gridArea: "d",
  },
];

const footerLinks = {
  contact: [
    { label: "Contact", href: "https://www.rockstargames.com/contact" },
    { label: "Careers", href: "https://www.rockstargames.com/careers" },
    { label: "Community Resources", href: "https://www.rockstargames.com/community-resources" },
    { label: "Subscribe", href: "https://socialclub.rockstargames.com/settings/email", external: true },
  ],
  legal: [
    { label: "Corporate", href: "https://www.rockstargames.com/corpinfo" },
    { label: "Privacy", href: "https://www.rockstargames.com/privacy" },
    { label: "Cookie Policy", href: "https://www.rockstargames.com/cookies" },
    { label: "Legal", href: "https://www.rockstargames.com/legal" },
    { label: "Do Not Sell or Share My Personal Information", href: "https://www.rockstargames.com/ccpa" },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://instagram.com/rockstargames", label: "Instagram" },
  { icon: <XIcon />, href: "https://x.com/rockstargames", label: "X" },
  { icon: <YouTubeIcon />, href: "https://www.youtube.com/rockstargames", label: "YouTube" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/rockstargames", label: "Facebook" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@rockstargames", label: "TikTok" },
  { icon: <DiscordIcon />, href: "https://discord.gg/rockstargames", label: "Discord" },
  { icon: <TwitchIcon />, href: "https://twitch.tv/rockstargames", label: "Twitch" },
];

// ---- COMPONENTS ----

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      height: "60px",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
    }}>
      {/* Logo */}
      <a href="https://www.rockstargames.com/" aria-label="Rockstar Games Home" style={{ color: "white", display: "flex" }}>
        <RSLogo />
      </a>

      {/* Desktop nav */}
      <nav style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setGamesOpen(!gamesOpen)}
            style={navBtnStyle}
          >
            Games <ChevronDown />
          </button>
          {gamesOpen && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#111",
              border: "1px solid #333",
              borderRadius: "4px",
              padding: "8px 0",
              minWidth: "160px",
              zIndex: 100,
            }}>
              {[
                { label: "Grand Theft Auto VI", href: "https://www.rockstargames.com/gta-vi" },
                { label: "GTA Online", href: "https://www.rockstargames.com/gta-online" },
                { label: "GTA V", href: "https://www.rockstargames.com/gta-v" },
                { label: "Red Dead Online", href: "https://www.rockstargames.com/reddeadonline" },
                { label: "Red Dead Redemption 2", href: "https://www.rockstargames.com/reddeadredemption2" },
                { label: "All Games", href: "https://www.rockstargames.com/games" },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ display: "block", padding: "8px 16px", color: "white", textDecoration: "none", fontSize: "14px", fontFamily: "sans-serif" }}
                  onMouseEnter={e => e.target.style.background = "#222"}
                  onMouseLeave={e => e.target.style.background = "transparent"}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="https://www.rockstargames.com/newswire" style={navLinkStyle}>Newswire</a>
        <a href="https://www.rockstargames.com/videos" style={navLinkStyle}>Videos</a>
        <a href="https://www.rockstargames.com/downloads" style={navLinkStyle}>Downloads</a>
        <a href="https://store.rockstargames.com/" target="_blank" rel="noreferrer" style={navLinkStyle}>
          Store <ExternalIcon />
        </a>
        <a href="https://support.rockstargames.com/" target="_blank" rel="noreferrer" style={navLinkStyle}>
          Support <ExternalIcon />
        </a>
      </nav>
    </header>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  fontFamily: "sans-serif",
  fontWeight: "500",
  padding: "8px 12px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

const navBtnStyle = {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "14px",
  fontFamily: "sans-serif",
  fontWeight: "500",
  padding: "8px 12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  borderRadius: "4px",
};

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide(s => (s + 1) % heroSlides.length);
      }, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const slide = heroSlides[currentSlide];

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: slide.bgColor, transition: "background-color 0.8s ease" }}>
      {/* Background image */}
      <img
        key={currentSlide}
        src={slide.bgImg}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          animation: "heroFadeIn 0.8s ease",
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
      }} />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "40%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: "120px",
        left: "60px",
        maxWidth: "600px",
        animation: "heroSlideUp 0.6s ease",
      }}>
        {/* Game logo */}
        <div style={{ marginBottom: "24px" }}>
          <img
            src={slide.logoImg}
            alt={slide.logoAlt}
            width={Math.min(slide.logoWidth, 200)}
            height={Math.round(slide.logoHeight * Math.min(slide.logoWidth, 200) / slide.logoWidth)}
            style={{ display: "block" }}
          />
        </div>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>
          {slide.game}
        </p>
        <h2 style={{ color: "white", fontSize: "clamp(20px, 3vw, 36px)", fontFamily: "sans-serif", fontWeight: "700", marginBottom: "24px", lineHeight: "1.2" }}>
          {slide.title}
        </h2>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "12px 24px", background: "#e8d27b", color: "#000",
            border: "none", borderRadius: "4px", fontSize: "14px", fontWeight: "700",
            fontFamily: "sans-serif", cursor: "pointer",
          }}>
            <PlayIcon /> Watch Trailer
          </button>
          <a href={slide.learnMoreHref} style={{
            display: "flex", alignItems: "center",
            padding: "12px 24px", background: "rgba(255,255,255,0.15)", color: "white",
            border: "1px solid rgba(255,255,255,0.4)", borderRadius: "4px", fontSize: "14px", fontWeight: "700",
            fontFamily: "sans-serif", cursor: "pointer", textDecoration: "none",
          }}>
            Learn More
          </a>
        </div>
      </div>

      {/* Slider controls */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "60px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <button
          onClick={() => setPaused(!paused)}
          style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "4px" }}
          title={paused ? "Play" : "Pause"}
        >
          {paused ? (
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 3.221a.667.667 0 0 1 1.027-.56l7.434 4.778a.667.667 0 0 1 0 1.122L5.027 13.34A.667.667 0 0 1 4 12.779z"/>
            </svg>
          ) : (
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.667 2.667H6c.368 0 .667.298.667.666v9.334a.667.667 0 0 1-.667.666H4.667A.667.667 0 0 1 4 12.666V3.333c0-.368.298-.667.667-.667M10 2.667h1.333c.368 0 .667.298.667.666v9.334a.667.667 0 0 1-.667.666H10a.667.667 0 0 1-.667-.667V3.333c0-.368.299-.667.667-.667"/>
            </svg>
          )}
        </button>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentSlide(i); clearInterval(timerRef.current); }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
            }}
          >
            <div style={{
              width: i === currentSlide ? "80px" : "10px",
              height: "3px",
              background: i === currentSlide ? "white" : "rgba(255,255,255,0.4)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}>
              {i === currentSlide && !paused && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  background: "rgba(255,255,255,0.6)",
                  animation: "slideProgress 6s linear",
                }} />
              )}
            </div>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes heroFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes heroSlideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes slideProgress { from { width: 0% } to { width: 100% } }
      `}</style>
    </div>
  );
}

function NewsSection() {
  const [primary, ...secondary] = newsArticles;

  return (
    <section style={{ background: "#0a0a0a", padding: "60px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Primary story */}
          <a href={primary.href} style={{ textDecoration: "none", display: "block", gridRow: "span 2" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "4px", height: "100%" }}>
              <img src={primary.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "400px", display: "block", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "24px",
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              }}>
                <span style={{ color: "#e8d27b", fontSize: "12px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  {primary.category}
                </span>
                <h4 style={{ color: "white", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "700", lineHeight: "1.3", marginBottom: "8px" }}>
                  {primary.title}
                </h4>
                <time style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "sans-serif" }}>{primary.date}</time>
              </div>
            </div>
          </a>

          {/* Secondary stories */}
          {secondary.slice(0, 4).map(article => (
            <a key={article.href} href={article.href} style={{ textDecoration: "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <img src={article.img} alt="" style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "4px", flexShrink: 0 }} />
              <div>
                <span style={{ color: "#e8d27b", fontSize: "11px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
                  {article.category}
                </span>
                <h4 style={{ color: "white", fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", lineHeight: "1.4", marginBottom: "6px" }}>
                  {article.title}
                </h4>
                <time style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "sans-serif" }}>{article.date}</time>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GamesVideoSection() {
  const games = [
    {
      logo: "/Rockstar Games_files/4QSW0TY5u6qryUUFxEc22K.svg",
      logoAlt: "GTA Online",
      logoW: 240, logoH: 237,
      videoSrc: "https://media-rockstargames-com.akamaized.net/ctfassets/4zDHoq9sdF78RNS2ghRF7v.mp4",
      poster: "https://cms-static-prod.ros.rockstargames.com/images/18izrhn535ym/6aOfErEKGaRPFLKvxO4kuj/17f7a88fb3b9d145a6e55e85838b1e7c/6aOfErEKGaRPFLKvxO4kuj.jpg?w=1920&fm=webp",
      title: "Grand Theft Auto Online",
      description: "Explore GTA Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.",
      learnHref: "https://www.rockstargames.com/gta-online",
      platforms: [
        { img: "/Rockstar Games_files/PS5_Logo_KO.svg", w: 149, h: 32 },
        { img: "/Rockstar Games_files/PS4_Logo_Full_KO.svg", w: 153, h: 32 },
        { img: "/Rockstar Games_files/XBSXS_Horz_White.svg", w: 253, h: 32 },
        { img: "/Rockstar Games_files/XB1_Horz_KO_White.svg", w: 161, h: 32 },
        { img: "/Rockstar Games_files/pc.svg", w: 40, h: 32 },
      ],
      cards: [
        { href: "https://www.rockstargames.com/gta-plus", img: "/Rockstar Games_files/25sJWjQ2ylc7CBbgMETkEB.jpg", desc: "The premium Membership for GTA Online players.", btn: "Learn More" },
        { href: "https://www.rockstargames.com/gta-online/license-plates", img: "/Rockstar Games_files/6nY4AtY7bUdS4cVwNpxTQk.jpg", desc: "Create your own personalized license plates.", btn: "Create Now" },
        { href: "https://www.rockstargames.com/?view=gta-online-a-safehouse-in-the-hills-trailer", img: "/Rockstar Games_files/2j1NNlENKPDLPAbLfxsBEA.jpg", desc: "A Safehouse in the Hills", btn: "Watch Trailer" },
        { href: "https://www.rockstargames.com/gta-online/career-progress", img: "/Rockstar Games_files/48ERQJQeRmd5938L6yZnl3.jpg", desc: "See all the challenges you've completed in your GTA Online Career.", btn: "View Progress" },
      ],
    },
  ];

  return (
    <>
      {games.map((game, gi) => (
        <div key={gi} style={{ background: "#000", position: "relative" }}>
          {/* Video bg */}
          <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <video
              autoPlay loop muted playsInline
              poster={game.poster}
              aria-label={game.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={game.videoSrc} type="video/mp4" />
            </video>
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "50%",
              background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
            }} />
            {/* Game info */}
            <div style={{ position: "absolute", bottom: "60px", left: "60px", maxWidth: "550px" }}>
              <img src={game.logo} alt={game.logoAlt} width={Math.min(game.logoW, 160)} height={Math.round(game.logoH * Math.min(game.logoW, 160) / game.logoW)} style={{ display: "block", marginBottom: "20px" }} />
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "sans-serif", marginBottom: "12px" }}>
                {game.description}
              </p>
              <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                <button style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "white", color: "#000", border: "none", borderRadius: "4px", fontSize: "14px", fontWeight: "700", fontFamily: "sans-serif", cursor: "pointer" }}>
                  <PlayIcon /> Watch Trailer
                </button>
                <a href={game.learnHref} style={{ display: "flex", alignItems: "center", padding: "10px 20px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "4px", fontSize: "14px", fontWeight: "700", fontFamily: "sans-serif", textDecoration: "none" }}>
                  Learn More
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                {game.platforms.map((p, i) => (
                  <img key={i} src={p.img} width={p.w} height={p.h} alt="" style={{ height: "20px", width: "auto", opacity: 0.8 }} />
                ))}
              </div>
            </div>
          </div>

          {/* Cards carousel */}
          <div style={{ background: "#000", padding: "40px 60px" }}>
            <h5 style={{ color: "white", fontFamily: "sans-serif", fontSize: "18px", fontWeight: "700", marginBottom: "24px" }}>
              Jump Into {game.title.split(" ").slice(-1)[0]}
            </h5>
            <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "8px" }}>
              {game.cards.map((card, ci) => (
                <a key={ci} href={card.href} style={{ textDecoration: "none", flexShrink: 0, width: "200px", borderRadius: "8px", overflow: "hidden", background: "#111", display: "block" }}>
                  <div style={{ position: "relative" }}>
                    <img src={card.img} alt="" style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      padding: "16px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                    }}>
                      <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "8px" }}>{card.desc}</p>
                      <span style={{ display: "inline-block", padding: "6px 12px", background: "rgba(255,255,255,0.2)", color: "white", borderRadius: "4px", fontSize: "12px", fontWeight: "600", fontFamily: "sans-serif" }}>
                        {card.btn}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function StoreSection() {
  return (
    <section style={{ background: "#0d0d0d", padding: "60px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ color: "white", fontFamily: "sans-serif", fontSize: "28px", fontWeight: "700", marginBottom: "32px", textAlign: "center" }}>
          Rockstar Store
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gridTemplateAreas: '"a b c" "a d c"',
          gap: "12px",
        }}>
          {storeItems.map(item => (
            <a key={item.gridArea} href={item.href} target="_blank" rel="noreferrer"
              style={{ gridArea: item.gridArea, textDecoration: "none", display: "block", position: "relative", overflow: "hidden", borderRadius: "8px" }}>
              <img src={item.img} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "200px", display: "block", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                top: "16px", left: "16px", right: "16px",
              }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 16px",
                  background: "white", color: "#000",
                  borderRadius: "4px", fontSize: "13px", fontWeight: "700", fontFamily: "sans-serif",
                }}>
                  {item.label} <ArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section style={{ background: "#111", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <img src="/Rockstar Games_files/4FiUgB9PjcXtphZyRQ5kEg.svg" alt="Rockstar Games" width={300} style={{ display: "block", margin: "0 auto 32px", opacity: 0.9 }} />
        <h3 style={{ color: "white", fontFamily: "sans-serif", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
          Subscribe to the Newsletter
        </h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
          Sign up for our email newsletter to get the latest game announcements, updates on special events and offers, and more from Rockstar Games and our affiliates.
        </p>
        <button style={{
          padding: "14px 32px", background: "white", color: "#000",
          border: "none", borderRadius: "4px", fontSize: "15px", fontWeight: "700",
          fontFamily: "sans-serif", cursor: "pointer",
        }}>
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section style={{
      background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg') center/cover",
      padding: "80px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <img src="/Rockstar Games_files/def13a31001678085d3deddd9381ae73.svg" alt="Support" style={{ height: "60px" }} />
        </div>
        <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
          Get help with issues, browse common solutions, view service status updates, and more.
        </p>
        <a href="https://support.rockstargames.com/" style={{
          display: "inline-block",
          padding: "14px 32px", background: "white", color: "#000",
          borderRadius: "4px", fontSize: "15px", fontWeight: "700",
          fontFamily: "sans-serif", textDecoration: "none",
        }}>
          Get Support
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", padding: "40px 24px", borderTop: "1px solid #222" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", flexWrap: "wrap", gap: "24px" }}>
          <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {footerLinks.contact.map(link => (
              <a key={link.label} href={link.href} target={link.external ? "_blank" : "_self"} rel="noreferrer"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px", fontFamily: "sans-serif" }}>
                {link.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <GlobeIcon />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "sans-serif" }}>English</span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {footerLinks.legal.map(link => (
              <a key={link.label} href={link.href}
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "11px", fontFamily: "sans-serif" }}>
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social */}
          <div style={{ display: "flex", gap: "16px" }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={`Rockstar Games ${s.label}`}
                style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Org info */}
        <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", fontFamily: "sans-serif" }}>Rockstar Games</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", fontFamily: "sans-serif" }}>New York · London · Paris · Bogotá</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", fontFamily: "sans-serif" }}>MCMXCVIII / 1998</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSlider />
        <NewsSection />
        <GamesVideoSection />
        <StoreSection />
        <NewsletterSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}