import { useId } from "react";

// Drawn pictures of each kind of item, shown when an item has no photos yet (and on the section tiles).
// Brand colours only: Alfa Shop violet, greys, white and the yellow lit window.
const V_TOP = "#A17DFF";
const V = "#7C4DFF";
const V_BOTTOM = "#6339EC";
const INK = "#1d1d1f";
const INK_2 = "#3a3a3c";
const INK_3 = "#86868b";
const GREY = "#d2d2d7";
const LIGHT = "#e8e8ed";
const WINDOW = "#FFD60A";
const SOFT = "#f5f5f7";

function GiftCard({ id }) {
  return (
    <g>
      <g transform="rotate(7 214 150)">
        <rect x="114" y="86" width="200" height="128" rx="16" fill="#fff" stroke={LIGHT} strokeWidth="2" />
      </g>
      <g transform="rotate(-8 196 150)" filter={`url(#${id}-shadow)`}>
        <rect x="86" y="80" width="220" height="140" rx="16" fill={`url(#${id}-violet)`} />
        <rect x="226" y="80" width="26" height="140" fill="#fff" opacity="0.22" />
        <rect x="86" y="146" width="220" height="22" fill="#fff" opacity="0.22" />
        <rect x="229" y="147" width="20" height="20" rx="4" fill={WINDOW} />
        <text
          x="104"
          y="114"
          fill="#fff"
          fontSize="17"
          fontWeight="650"
          fontFamily="Inter Variable, Inter, system-ui, sans-serif"
        >
          Gift card
        </text>
        <rect x="104" y="190" width="58" height="8" rx="4" fill="#fff" opacity="0.6" />
      </g>
    </g>
  );
}

function Airtime({ id }) {
  return (
    <g transform="rotate(-6 200 150)" filter={`url(#${id}-shadow)`}>
      <rect x="92" y="74" width="216" height="152" rx="16" fill="#fff" />
      <path d="M92 90a16 16 0 0116-16h184a16 16 0 0116 16v26H92z" fill={`url(#${id}-violet)`} />
      <text
        x="110"
        y="102"
        fill="#fff"
        fontSize="16"
        fontWeight="650"
        fontFamily="Inter Variable, Inter, system-ui, sans-serif"
      >
        Airtime
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={262 + i * 9}
          y={100 - i * 5}
          width="5"
          height={6 + i * 5}
          rx="2"
          fill={i === 3 ? WINDOW : "#fff"}
        />
      ))}
      <rect x="110" y="136" width="180" height="34" rx="9" fill={GREY} />
      <path
        d="M118 170l20-34M134 170l20-34M150 170l20-34M166 170l20-34M182 170l20-34M198 170l20-34M214 170l20-34M230 170l20-34M246 170l20-34M262 170l20-34"
        stroke="#fff"
        strokeWidth="3"
        opacity="0.5"
      />
      <rect x="110" y="186" width="96" height="8" rx="4" fill={LIGHT} />
      <rect x="110" y="202" width="60" height="8" rx="4" fill={LIGHT} />
      <circle cx="276" cy="200" r="12" fill={V} opacity="0.14" />
      <path d="M270 200l4 4 8-8" stroke={V} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function PowerBank({ id }) {
  return (
    <g transform="rotate(-12 200 150)" filter={`url(#${id}-shadow)`}>
      <path d="M186 80V58c0-14 12-22 28-22h40" stroke={INK_2} strokeWidth="7" fill="none" strokeLinecap="round" />
      <rect x="179" y="70" width="14" height="16" rx="3" fill={INK_2} />
      <rect x="158" y="70" width="112" height="160" rx="20" fill={INK} />
      <rect x="266" y="120" width="5" height="24" rx="2.5" fill={INK_2} />
      <rect x="146" y="80" width="112" height="160" rx="20" fill={`url(#${id}-dark)`} />
      <rect
        x="146"
        y="80"
        width="112"
        height="160"
        rx="20"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={176 + i * 17} cy="214" r="4" fill={i < 3 ? V_TOP : "#fff"} opacity={i < 3 ? 1 : 0.25} />
      ))}
      <path d="M210 116l-20 34h15l-7 30 22-38h-15l5-26z" fill={WINDOW} />
    </g>
  );
}

function Charger({ id }) {
  return (
    <g>
      <g transform="rotate(-6 196 140) translate(4 10)" filter={`url(#${id}-shadow)`}>
        <rect x="155" y="64" width="13" height="30" rx="3" fill={INK_2} />
        <rect x="190" y="56" width="13" height="38" rx="3" fill={INK_2} />
        <rect x="225" y="64" width="13" height="30" rx="3" fill={INK_2} />
        <rect x="134" y="88" width="124" height="116" rx="24" fill={`url(#${id}-white)`} />
        <rect x="134" y="88" width="124" height="116" rx="24" fill="none" stroke={GREY} strokeWidth="2" />
        <rect x="181" y="168" width="30" height="11" rx="5.5" fill={INK} />
        <rect x="186" y="126" width="20" height="20" rx="4" fill={WINDOW} />
        <text
          x="196"
          y="160"
          textAnchor="middle"
          fill={INK_3}
          fontSize="10"
          fontWeight="600"
          fontFamily="Inter Variable, Inter, system-ui, sans-serif"
        >
          20W
        </text>
      </g>
    </g>
  );
}

function Earbuds({ id }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <path
        d="M126 160h148v34a40 40 0 01-40 40h-68a40 40 0 01-40-40z"
        fill={`url(#${id}-white)`}
        stroke={GREY}
        strokeWidth="2"
      />
      <g transform="rotate(-24 126 156)">
        <path
          d="M126 156a40 40 0 0140-40h68a40 40 0 0140 40z"
          fill={`url(#${id}-white)`}
          stroke={GREY}
          strokeWidth="2"
        />
      </g>
      <rect x="126" y="156" width="148" height="10" fill={LIGHT} />
      <circle cx="200" cy="208" r="4" fill={WINDOW} />
      {[0, 1].map((i) => {
        const x = 168 + i * 64;
        return (
          <g key={i}>
            <rect x={x - 7} y="132" width="14" height="38" rx="7" fill="#fff" stroke={GREY} strokeWidth="2" />
            <circle cx={x} cy="128" r="17" fill="#fff" stroke={GREY} strokeWidth="2" />
            <circle cx={x} cy="128" r="7" fill={INK_2} />
            <circle cx={x} cy="128" r="3" fill={V} />
          </g>
        );
      })}
    </g>
  );
}

function Lantern({ id }) {
  return (
    <g>
      <circle cx="200" cy="164" r="98" fill={`url(#${id}-glow)`} />
      <g filter={`url(#${id}-shadow)`}>
        <path d="M168 76a32 30 0 0164 0" stroke={INK_2} strokeWidth="7" fill="none" strokeLinecap="round" />
        <rect x="144" y="76" width="112" height="30" rx="12" fill={`url(#${id}-violet)`} />
        <rect x="160" y="82" width="80" height="16" rx="4" fill={INK} />
        <path d="M180 82v16M200 82v16M220 82v16" stroke={V_TOP} strokeWidth="1.5" opacity="0.7" />
        <rect x="156" y="106" width="88" height="96" rx="10" fill="#fff" stroke="#fff" strokeWidth="3" />
        <rect x="156" y="106" width="88" height="96" rx="10" fill={WINDOW} opacity="0.18" />
        <rect x="186" y="122" width="28" height="62" rx="14" fill={WINDOW} />
        <rect x="140" y="200" width="120" height="30" rx="12" fill={`url(#${id}-violet)`} />
        <rect x="186" y="210" width="28" height="9" rx="4.5" fill="#fff" opacity="0.6" />
      </g>
    </g>
  );
}

function Box({ id }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <path d="M200 66l100 44v100l-100 44-100-44V110z" fill={V_BOTTOM} />
      <path d="M200 66l100 44-100 44-100-44z" fill={`url(#${id}-violet)`} />
      <path d="M100 110l100 44v100l-100-44z" fill={V} />
      <path d="M150 88l100 44v24l-18 8v-24L132 96z" fill="#fff" opacity="0.28" />
      <path d="M130 156l44 19v26l-44-19z" fill={WINDOW} />
    </g>
  );
}

const drawings = {
  giftcard: GiftCard,
  airtime: Airtime,
  powerbank: PowerBank,
  charger: Charger,
  earbuds: Earbuds,
  lantern: Lantern,
  box: Box,
};

export default function ItemArt({ art, className = "", label }) {
  const id = `art${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const Drawing = drawings[art] || Box;
  return (
    <svg
      className={`item-art ${className}`}
      viewBox="0 0 400 300"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="42%" r="70%">
          <stop offset="0" stopColor={V} stopOpacity="0.13" />
          <stop offset="1" stopColor={V} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-violet`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={V_TOP} />
          <stop offset="1" stopColor={V_BOTTOM} />
        </linearGradient>
        <linearGradient id={`${id}-dark`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={INK_2} />
          <stop offset="1" stopColor={INK} />
        </linearGradient>
        <linearGradient id={`${id}-white`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f5f5f7" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor={WINDOW} stopOpacity="0.55" />
          <stop offset="1" stopColor={WINDOW} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor={V_BOTTOM} floodOpacity="0.22" />
        </filter>
      </defs>
      <rect width="400" height="300" fill={SOFT} />
      <rect width="400" height="300" fill={`url(#${id}-bg)`} />
      <Drawing id={id} />
    </svg>
  );
}
