export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50" />
      <div className="absolute -right-48 -top-48 h-[640px] w-[640px] rounded-full bg-amber-100/80 blur-3xl" />
      <div className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full bg-yellow-100/70 blur-3xl" />
    </div>
  )
}
