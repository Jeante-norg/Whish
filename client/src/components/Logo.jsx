export default function Logo() {
  return (
    <span className="flex items-center space-x-2">
      {/* SVG logo example */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00B67A" />
        <path
          d="M8 12l2.5 2.5L16 9"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-[900] tracking-tight">Whish</span>
    </span>
  );
}
