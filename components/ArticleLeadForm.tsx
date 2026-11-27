'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, Phone, Send, User } from 'lucide-react'
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

/** Israeli phone number in local form (0501234567), or null when it is not a valid number. */
export function normalizeIsraeliPhone(input: string): string | null {
  let d = input.replace(/[\s\-().]/g, '')
  if (d.startsWith('+972')) d = '0' + d.slice(4)
  else if (d.startsWith('00972')) d = '0' + d.slice(5)
  else if (d.startsWith('972')) d = '0' + d.slice(3)
  if (d.startsWith('00')) return null
  // Mobile 05X and 07X (10 digits), landlines 02/03/04/08/09 (9 digits).
  if (/^05\d{8}$/.test(d) || /^07\d{8}$/.test(d) || /^0[23489]\d{7}$/.test(d)) return d
  return null
}

const input =
  'w-full rounded-2xl bg-soft-grey border border-charcoal/10 px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 text-right transition-all focus:outline-none focus:bg-white focus:border-deep-red focus:ring-4 focus:ring-deep-red/10'

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
  const [phoneTouched, setPhoneTouched] = useState(false)
  const [tried, setTried] = useState(false)
  const [error, setError] = useState('')

  const phoneOk = normalizeIsraeliPhone(form.phone) !== null
  const showPhoneError = (phoneTouched || tried) && !phoneOk
  const showTreatmentError = tried && !form.treatment

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTried(true)
    setError('')
    const phone = normalizeIsraeliPhone(form.phone)
    if (!phone || !form.treatment || !form.name.trim() || !agreed) return
    setSending(true)
    try {
      const payload = {
        name: form.name.trim(),
        phone,
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
      else setError('השליחה לא הצליחה. נסו שוב, או התקשרו אלינו: 058-506-5359.')
    } catch {
      setError('השליחה לא הצליחה. נסו שוב, או התקשרו אלינו: 058-506-5359.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="השארת פרטים לתיאום אבחון"
      className="mt-8 mx-auto max-w-2xl rounded-[1.75rem] bg-white p-6 md:p-9 text-right text-charcoal shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)]"
    >
      <fieldset>
        <legend className="mb-3 text-base font-bold">על איזה טיפול תרצו ייעוץ?</legend>
        <div className="flex flex-wrap gap-2.5" role="radiogroup">
          {TREATMENTS.map((t) => {
            const on = form.treatment === t.value
            return (
              <label
                key={t.value}
                className={`relative inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? 'border-deep-red bg-deep-red text-white shadow-[0_10px_25px_-12px_rgba(153,0,0,0.8)]'
                    : 'border-charcoal/15 bg-white text-charcoal/80 hover:border-deep-red/50 hover:text-deep-red'
                } has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-deep-red/20`}
              >
                <input
                  type="radio"
                  name="treatment"
                  value={t.value}
                  checked={on}
                  onChange={() => setForm({ ...form, treatment: t.value })}
                  className="sr-only"
                />
                {on && <Check className="h-4 w-4" aria-hidden />}
                {t.label}
              </label>
            )
          })}
        </div>
        {showTreatmentError && <p className="mt-2 text-sm font-medium text-deep-red">בחרו את הטיפול שמעניין אתכם.</p>}
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="al-name" className="mb-1.5 block text-sm font-bold">שם מלא</label>
          <div className="relative">
            <User className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/35" aria-hidden />
            <input
              id="al-name"
              name="name"
              value={form.name}
              onChange={set}
              required
              autoComplete="name"
              aria-invalid={tried && !form.name.trim()}
              className={`${input} pr-11`}
              placeholder="השם שלכם"
            />
          </div>
          {tried && !form.name.trim() && <p className="mt-1.5 text-sm font-medium text-deep-red">נא למלא שם.</p>}
        </div>
        <div>
          <label htmlFor="al-phone" className="mb-1.5 block text-sm font-bold">טלפון</label>
          <div className="relative">
            <Phone className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/35" aria-hidden />
            <input
              id="al-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={set}
              onBlur={() => setPhoneTouched(true)}
              required
              autoComplete="tel"
              maxLength={16}
              aria-invalid={showPhoneError}
              aria-describedby="al-phone-error"
              dir="ltr"
              className={`${input} pr-11 ${showPhoneError ? 'border-deep-red bg-deep-red/5' : ''}`}
              placeholder="050-000-0000"
            />
          </div>
          {showPhoneError && (
            <p id="al-phone-error" className="mt-1.5 text-sm font-medium text-deep-red">
              נא להזין מספר טלפון ישראלי תקין, למשל 050-1234567.
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="al-email" className="mb-1.5 block text-sm font-bold">
          אימייל <span className="font-normal text-charcoal/45">(לא חובה)</span>
        </label>
        <input id="al-email" name="email" type="email" value={form.email} onChange={set} autoComplete="email" dir="ltr" className={input} placeholder="name@example.com" />
      </div>

      <div className="mt-4">
        <label htmlFor="al-message" className="mb-1.5 block text-sm font-bold">
          הודעה <span className="font-normal text-charcoal/45">(לא חובה)</span>
        </label>
        <textarea id="al-message" name="message" value={form.message} onChange={set} rows={3} className={`${input} resize-none`} placeholder="מה חשוב לכם שנדע?" />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/65">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-deep-red" />
        <span>
          אני מאשר/ת את{' '}
          <Link href="/privacy" target="_blank" className="font-semibold text-deep-red hover:underline">מדיניות הפרטיות</Link>{' '}
          ומסכים/ה לשימוש בפרטים שמסרתי לצורך יצירת קשר.
        </span>
      </label>
      {tried && !agreed && <p className="mt-1.5 text-sm font-medium text-deep-red">יש לאשר את מדיניות הפרטיות.</p>}

      {error && (
        <p role="alert" className="mt-4 rounded-xl bg-deep-red/10 px-4 py-3 text-sm font-medium text-deep-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        onClick={() => setTried(true)}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-deep-red px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-deep-red-dark hover:shadow-[0_18px_40px_-18px_rgba(153,0,0,0.9)] disabled:opacity-60"
      >
        {sending ? 'שולח...' : 'לתיאום אבחון'}
        {!sending && <Send className="h-5 w-5 -scale-x-100" aria-hidden />}
      </button>
      <p className="mt-3 text-center text-xs text-charcoal/45">נחזור אליכם בהקדם. אפשר גם להתקשר: 058-506-5359</p>
    </form>
  )
}
