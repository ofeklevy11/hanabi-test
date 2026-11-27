'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { submitLead } from '@/lib/submitLead'

// Lead form inside the "תיאום אבחון" box at the end of every article.
// Sends source 'טופס מאמר' with a treatment key; the CallPilot scenario files the lead in the matching folder
// (שיער, גבות, ריסים, iPRF, or לידים מהאתר for general consultation). The Make → WhatsApp flow is unchanged.
const TREATMENTS = [
  { value: 'hair-transplant', label: 'השתלת שיער' },
  { value: 'eyebrows', label: 'השתלת גבות' },
  { value: 'eyelashes', label: 'השתלת ריסים' },
  { value: 'iprf', label: 'טיפול iPRF' },
  { value: 'consultation', label: 'ייעוץ כללי' },
]

const DEFAULT_BY_PAGE: Record<string, string> = {
  '/hair-transplant': 'hair-transplant',
  '/eyebrows': 'eyebrows',
  '/eyelashes': 'eyelashes',
  '/iprf': 'iprf',
}

const field =
  'w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/45 text-right text-base focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all'

export default function ArticleLeadForm({ articleTitle, treatmentHref }: { articleTitle: string; treatmentHref: string }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: DEFAULT_BY_PAGE[treatmentHref] ?? '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        // CallPilot fills every field into the lead's notes, so optional fields are never sent empty.
        email: form.email.trim() || '—',
        treatment: form.treatment,
        treatmentLabel: TREATMENTS.find((t) => t.value === form.treatment)?.label ?? 'ייעוץ כללי',
        message: form.message.trim() || '—',
        page: articleTitle,
        source: 'טופס מאמר',
        submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      }
      if (await submitLead(payload)) router.push('/thank-you')
      else setError('השליחה לא הצליחה. נסו שוב, או התקשרו אלינו ל-058-506-5359.')
    } catch {
      setError('השליחה לא הצליחה. נסו שוב, או התקשרו אלינו ל-058-506-5359.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 text-right max-w-xl mx-auto" aria-label="השארת פרטים לתיאום אבחון">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="al-name" className="block mb-1.5 text-sm font-semibold text-white/85">שם מלא</label>
          <input id="al-name" name="name" value={form.name} onChange={set} required autoComplete="name" className={field} placeholder="השם שלך" />
        </div>
        <div>
          <label htmlFor="al-phone" className="block mb-1.5 text-sm font-semibold text-white/85">טלפון</label>
          <input id="al-phone" name="phone" type="tel" value={form.phone} onChange={set} required autoComplete="tel" dir="ltr" className={`${field} text-right`} placeholder="050-0000000" />
        </div>
      </div>
      <div>
        <label htmlFor="al-treatment" className="block mb-1.5 text-sm font-semibold text-white/85">על איזה טיפול תרצו ייעוץ?</label>
        <select id="al-treatment" name="treatment" value={form.treatment} onChange={set} required className={`${field} [&>option]:text-charcoal`}>
          <option value="">בחרו טיפול</option>
          {TREATMENTS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="al-email" className="block mb-1.5 text-sm font-semibold text-white/85">אימייל (אופציונלי)</label>
        <input id="al-email" name="email" type="email" value={form.email} onChange={set} autoComplete="email" dir="ltr" className={`${field} text-right`} placeholder="name@example.com" />
      </div>
      <div>
        <label htmlFor="al-message" className="block mb-1.5 text-sm font-semibold text-white/85">הודעה (אופציונלי)</label>
        <textarea id="al-message" name="message" value={form.message} onChange={set} rows={3} className={`${field} resize-none`} placeholder="מה חשוב לכם שנדע?" />
      </div>
      <label className="flex items-start gap-3 cursor-pointer text-sm text-white/70 leading-relaxed">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-1 w-5 h-5 accent-deep-red shrink-0 cursor-pointer" />
        <span>
          אני מאשר/ת את{' '}
          <Link href="/privacy" target="_blank" className="text-white underline hover:no-underline">מדיניות הפרטיות</Link>{' '}
          ומסכים/ה לשימוש בפרטים שמסרתי לצורך יצירת קשר.
        </span>
      </label>
      {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 w-full bg-deep-red hover:bg-deep-red-dark disabled:opacity-60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
      >
        {sending ? 'שולח...' : 'לתיאום אבחון'}
      </button>
    </form>
  )
}
