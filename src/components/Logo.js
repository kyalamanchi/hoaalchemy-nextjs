// HOA Alchemy logo — lime green house arrow (left) + teal blue building (right) + phone (center)
function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HOA Alchemy Logo"
    >
      {/* Lime green house / upward arrow (left) */}
      <polygon
        points="8,58 8,92 40,92 40,58 50,46 24,14 8,34"
        fill="#B5BD3E"
      />

      {/* Teal blue building with peaked roof (right) */}
      <polygon
        points="50,92 50,38 58,22 66,38 66,28 76,14 92,34 92,92"
        fill="#1A8BA5"
      />
      {/* Small window cutout on teal building */}
      <rect x="72" y="36" width="8" height="14" fill="white" opacity="0.25" />

      {/* Phone / mobile device (center foreground) */}
      <rect
        x="34"
        y="44"
        width="26"
        height="44"
        rx="4"
        fill="white"
        stroke="#222"
        strokeWidth="3"
      />
      {/* Phone notch / earpiece */}
      <rect x="43" y="48" width="8" height="2" rx="1" fill="#999" />
      {/* Phone home indicator */}
      <rect x="42" y="82" width="10" height="2" rx="1" fill="#ccc" />
    </svg>
  );
}

export default Logo;
