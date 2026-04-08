import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const heroFeatures = [
  '专属菌种体系',
  '低温萃取 + 冻干结晶',
  '药品级 GMP 标准生产',
]

export default function Home() {
  const slides = useMemo(
    () => [
      { src: '/docs/logol/logol1.jpg', alt: '黑氪金球主视觉', fit: 'cover' as const },
      { src: '/docs/logol/logol2.jpg', alt: '黑氪金球 logo', fit: 'contain' as const },
      { src: '/docs/logol/tt2.jpg', alt: '黑氪金球展示图', fit: 'cover' as const },
    ],
    [],
  )
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [slides.length])

  const prev = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setActiveIndex((current) => (current + 1) % slides.length)

  return (
    <div className="pb-6">
      <section className="overflow-hidden rounded-[2.25rem] border border-amber-200/70 bg-[#f4eadf] text-gray-900 shadow-[0_30px_100px_rgba(120,53,15,0.08)]">
        <div className="px-6 py-6 md:px-10 md:py-8 lg:px-14">
          <div className="relative aspect-[16/8.4] overflow-hidden rounded-[2rem] border border-white/70 bg-[#f8efe5] shadow-[0_24px_60px_rgba(120,53,15,0.1)]">
            {slides.map((slide, idx) => (
              <div
                key={slide.src}
                className={[
                  'absolute inset-0 transition-opacity duration-700',
                  idx === activeIndex ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
              >
                <div
                  className={[
                    'absolute inset-0',
                    slide.fit === 'contain' ? 'bg-white/75' : 'bg-transparent',
                  ].join(' ')}
                />
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={[
                    'absolute inset-0 h-full w-full',
                    slide.fit === 'contain'
                      ? 'object-contain p-10 md:p-12'
                      : 'object-cover object-center',
                  ].join(' ')}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-[#2f241d]/52 via-[#2f241d]/22 to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/85 px-3 py-2 text-xs font-medium text-gray-800 md:left-7 md:top-7">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src="/docs/logol/logol2.jpg"
                  alt="黑氪金球 logo"
                  className="h-6 w-6 object-cover"
                />
              </span>
              黑氪金球（HK）
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur">
                    金花速溶黑茶
                  </div>
                  <h1 className="text-3xl font-semibold leading-tight tracking-[0.03em] text-white md:text-5xl">
                    黑氪金球
                  </h1>
                  <p className="max-w-xl text-sm leading-7 text-white/90 md:text-base">
                    以专属菌种体系、低温工艺与标准化生产为基础，呈现更稳定、更具品质感的高端速溶黑茶体验。
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 md:bottom-7 md:left-7">
              {slides.map((slide, idx) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`切换到第 ${idx + 1} 张`}
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    'h-2.5 w-2.5 rounded-full border border-white/70 bg-white/50 transition',
                    idx === activeIndex ? 'scale-110 bg-white' : 'hover:bg-white/80',
                  ].join(' ')}
                />
              ))}
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-2 md:bottom-7 md:right-7">
              <button
                type="button"
                aria-label="上一张"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-base text-gray-800 hover:bg-white"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="下一张"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-base text-gray-800 hover:bg-white"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-4 border-t border-amber-200/70 px-1 py-6 md:px-0 md:py-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-3 md:grid-cols-3">
              {heroFeatures.map((feature) => (
                <article
                  key={feature}
                  className="rounded-[1.5rem] border border-amber-900/10 bg-white/80 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">HK</div>
                  <div className="mt-3 text-base font-semibold text-gray-900">{feature}</div>
                </article>
              ))}
            </div>

            <div className="flex flex-col justify-between gap-5 rounded-[1.5rem] border border-amber-900/10 bg-white/72 p-6">
              <div>
                <div className="text-sm font-semibold text-gray-900">合作与咨询</div>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  面向渠道引入、礼赠合作与品牌洽谈，提供相应资料、样品与专属对接服务。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/product"
                  className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-6 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
                >
                  产品信息
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-amber-900/15 bg-white/85 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-white"
                >
                  合作咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
