export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100" />
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.06] blur-sm"
        style={{ backgroundImage: "url('/docs/logol/pic3.jpg')" }}
      />
      <div className="absolute -left-24 top-[-180px] h-[560px] w-[560px] rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-[-220px] h-[620px] w-[620px] rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(186,230,253,0.55),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(191,219,254,0.48),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/38 via-slate-900/58 to-slate-950/72" />
      <div className="absolute inset-0 bg-slate-950/62" />
    </div>
  )
}
