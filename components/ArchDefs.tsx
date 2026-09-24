// Shared SVG clip-path definition for the jharokha/mandir-window arch shape,
// used across image frames via the `.jharokha-frame` CSS class (globals.css).
// Rendered once in the root layout; clipPathUnits="objectBoundingBox" means
// it scales correctly to any element's size, so it's reusable everywhere.
export default function ArchDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="jharokha-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.42 C0,0.30 0.08,0.22 0.18,0.20 C0.30,0.17 0.38,0.08 0.5,0 C0.62,0.08 0.70,0.17 0.82,0.20 C0.92,0.22 1,0.30 1,0.42 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
