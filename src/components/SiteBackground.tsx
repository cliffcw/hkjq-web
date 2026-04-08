export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf8f1] via-[#f3eadf] to-[#e8dfd3]" />
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.06] blur-sm saturate-50 sepia mix-blend-multiply"
        style={{ backgroundImage: "url('/docs/logol/pic3.jpg')" }}
      />
      <div className="absolute -left-24 top-[-180px] h-[560px] w-[560px] rounded-full bg-[#fff3df]/70 blur-3xl" />
      <div className="absolute -right-24 bottom-[-220px] h-[620px] w-[620px] rounded-full bg-[#efd9bd]/[0.52] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,250,242,0.95),transparent_44%),radial-gradient(circle_at_82%_78%,rgba(214,183,147,0.22),transparent_52%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf1]/[0.22] via-[#f4eadf]/[0.18] to-[#e7d6c1]/[0.26]" />
      <div className="absolute inset-0 bg-[#f1e3d0]/[0.16]" />
    </div>
  )
}
