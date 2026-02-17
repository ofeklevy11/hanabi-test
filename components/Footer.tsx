'use client'

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2.5 mb-4">
          {/* Red square with Japanese characters */}
          <div className="w-12 h-12 bg-deep-red flex flex-col items-center justify-center shrink-0">
            <span className="text-white text-base font-normal leading-tight" style={{ lineHeight: '1.1' }}>花</span>
            <span className="text-white text-base font-normal leading-tight" style={{ lineHeight: '1.1' }}>美</span>
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold text-deep-red tracking-tight leading-none uppercase">
              HANA BI
            </span>
            <span className="text-[10px] font-medium text-deep-red tracking-wide leading-none mt-0.5">
              Natural Looking
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-charcoal/60">
            &copy; {new Date().getFullYear()} HANA BI. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
