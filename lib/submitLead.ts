// Sends a lead to every connection independently, so one failing connection never loses the lead.
const LEAD_WEBHOOKS = [
  'https://hook.eu2.make.com/qo9qlswoe53nbtc6fd4v0macorqlf9pb',
  'https://hook.eu2.make.com/wwr2v4bsxhwbb4uue69w3w8fknw9i4q0',
]

const CLINIC_WHATSAPP = '972585065359'
const ATTEMPTS = 3
const TIMEOUT_MS = 12000

const LABELS: Record<string, string> = {
  name: 'שם',
  phone: 'טלפון',
  email: 'אימייל',
  treatment: 'טיפול',
  service: 'טיפול',
  message: 'הודעה',
  source: 'מקור',
}

async function postOnce(url: string, body: string): Promise<boolean> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
      signal: controller.signal,
    })
    return res.ok
  } catch {
    return false
  } finally {
    clearTimeout(timer)
  }
}

async function postWithRetry(url: string, body: string): Promise<boolean> {
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    if (await postOnce(url, body)) return true
    if (attempt < ATTEMPTS) await new Promise((r) => setTimeout(r, 800 * attempt))
  }
  return false
}

function whatsappFallback(payload: Record<string, unknown>) {
  const lines = Object.entries(payload)
    .filter(([key, value]) => key !== 'submittedAt' && typeof value === 'string' && value.trim())
    .map(([key, value]) => `${LABELS[key] ?? key}: ${value}`)
  const text = ['שלום, השארתי פרטים באתר ואשמח שתחזרו אליי.', ...lines].join('\n')
  window.location.href = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`
}

/** Returns true when at least one connection received the lead. */
export async function submitLead(payload: Record<string, unknown>): Promise<boolean> {
  const body = JSON.stringify(payload)
  const results = await Promise.all(LEAD_WEBHOOKS.map((url) => postWithRetry(url, body)))
  if (results.some(Boolean)) return true

  if (window.confirm('לא הצלחנו לשלוח את הפרטים כרגע. לשלוח אותם אלינו בוואטסאפ?')) {
    whatsappFallback(payload)
  }
  return false
}
