export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(143,45,37,.12),transparent_24rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-[linear-gradient(180deg,transparent,rgba(8,6,5,.84))]" />
    </div>
  )
}
