// Medical source registry for the knowledge hub. IDs match HANABI_SCIENTIFIC_EVIDENCE_V4.md.
// Only sources whose bibliographic record was verified are listed here; an article can cite only these.
// A verified record is not a medical approval of the article that cites it.

export type Source = { id: string; name: string; url: string; year?: string }

const pubmed = (pmid: string) => `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`

export const SOURCES: Record<string, Source> = {
  E01: { id: 'E01', year: '1999', url: pubmed('10417585'), name: 'Jimenez F, Ruifernández JM. Distribution of human hair in follicular units. Dermatologic Surgery' },
  E02: { id: 'E02', year: '2021', url: pubmed('34984075'), name: 'Issa NT, Tosti A. Trichoscopy for the Hair Transplant Surgeon. Indian Journal of Plastic Surgery' },
  E03: { id: 'E03', year: '2025', url: 'https://www.ncbi.nlm.nih.gov/books/NBK547740/', name: 'StatPearls: Hair Transplantation. NCBI Bookshelf' },
  E04: { id: 'E04', year: '2021', url: pubmed('34908769'), name: 'Mysore V, et al. Hair Transplant Practice Guidelines. Journal of Cutaneous and Aesthetic Surgery' },
  E05: { id: 'E05', year: '2025', url: pubmed('40354670'), name: 'Queen D, Avram MR. Hair Transplantation: State of the Art. Dermatologic Surgery' },
  E06: { id: 'E06', year: '2023', url: pubmed('37477225'), name: 'Vañó-Galván S, et al. An international expert consensus statement focusing on pre and post hair transplantation care. Journal of Dermatological Treatment' },
  E07: { id: 'E07', year: '2021', url: pubmed('33905785'), name: 'Jimenez F, Alam M, Vogel JE, Avram M. Hair transplantation: Basic overview. Journal of the American Academy of Dermatology' },
  E08: { id: 'E08', url: 'https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/hair-transplant/', name: 'NHS: Hair transplant' },
  E09: { id: 'E09', url: 'https://www.aad.org/public/diseases/hair-loss/treatment/transplant', name: 'American Academy of Dermatology: Hair transplant' },
  E10: { id: 'E10', url: pubmed('33911409'), name: 'Kumaresan M, Subburathinam DM. Longevity of Hair Follicles after Follicular Unit Transplant Surgery. Journal of Cutaneous and Aesthetic Surgery' },
  E11: { id: 'E11', year: '2026', url: pubmed('40660483'), name: 'Hair Transplant: Patient Candidacy, Medical Optimization, and Surgical Considerations. International Journal of Dermatology' },
  E12: { id: 'E12', year: '2025', url: 'https://jddonline.com/articles/hair-transplantation-in-women-S1545961625P8988X/', name: 'Queen D, Avram MR. Hair Transplantation in Women. Journal of Drugs in Dermatology' },
  E13: { id: 'E13', year: '2020', url: pubmed('32093524'), name: 'Okochi M, et al. Donor site of follicular unit excision hair transplantation. Journal of Plastic Surgery and Hand Surgery' },
  E14: { id: 'E14', year: '2018', url: pubmed('30083502'), name: 'Mohmand MH, Ahmad M. Effect of Follicular Unit Extraction on the Donor Area. World Journal of Plastic Surgery' },
  E15: { id: 'E15', year: '2025', url: pubmed('41306835'), name: 'Nerkar GM, et al. An In vitro Study Comparing the Survival of Hair Follicles in Various Storage Media at Different Temperatures. International Journal of Trichology' },
  E16: { id: 'E16', year: '2023', url: pubmed('37701554'), name: 'Thuangtong R, et al. Effect of Platelet-Rich Plasma and other Key Factors on Hair Follicle Preservation. International Journal of Trichology' },
  E17: { id: 'E17', year: '2010', url: pubmed('21031063'), name: 'Parsley WM, Perez-Meza D. Review of Factors Affecting the Growth and Survival of Follicular Grafts. Journal of Cutaneous and Aesthetic Surgery' },
  E18: { id: 'E18', year: '2018', url: pubmed('29942421'), name: 'Klingbeil KD, Fertig R. Eyebrow and Eyelash Hair Transplantation: A Systematic Review. Journal of Clinical and Aesthetic Dermatology' },
  E19: { id: 'E19', year: '2020', url: pubmed('31820550'), name: 'Jiang W, Wang M, Wang B. Eyebrow restoration using single-follicular-unit hair transplantation: a case series. Journal of Cosmetic Dermatology' },
  E20: { id: 'E20', year: '2017', url: pubmed('28852290'), name: 'Gupta J, et al. The Science and Art of Eyebrow Transplantation by Follicular Unit Extraction' },
  E21: { id: 'E21', year: '2021', url: pubmed('34029384'), name: 'Park JH, You SH, Kim NR, Ho YH. Long hair follicular unit excision: personal experience. International Journal of Dermatology' },
  E22: { id: 'E22', year: '2024', url: pubmed('39011192'), name: 'Mohale SA, et al. Effectiveness of Injectable Platelet-Rich Fibrin Therapy in Alopecia and Facial Rejuvenation: A Systematic Review. Cureus' },
  E23: { id: 'E23', year: '2025', url: pubmed('40167104'), name: 'Qin N, et al. Systematic Review of Platelet-Rich Plasma and Platelet-Rich Fibrin in Facial Rejuvenation. Annals of Plastic Surgery' },
  E24: { id: 'E24', year: '2018', url: pubmed('29863806'), name: 'Japanese Dermatological Association. Guidelines for the diagnosis and treatment of male-pattern and female-pattern hair loss, 2017 version. Journal of Dermatology' },
  E25: { id: 'E25', year: '2018', url: pubmed('29178529'), name: 'Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. JEADV' },
  E26: { id: 'E26', year: '2026', url: pubmed('41890779'), name: 'Nawaz T, Williams G, Yoo J. Exploring the Advancements and Applications of AI-Powered Hair Analysis Tools. Journal of Clinical and Aesthetic Dermatology' },
  E27: { id: 'E27', year: '2010', url: pubmed('21188016'), name: 'Automated Digital Image Analysis (TrichoScan) for Human Hair Growth Analysis: Ease versus Errors. International Journal of Trichology' },
  E28: { id: 'E28', year: '2020', url: 'https://www.who.int/news-room/detail/20-01-2020-smoking-greatly-increases-risk-of-complications-after-surgery', name: 'World Health Organization: Smoking greatly increases risk of complications after surgery' },
  E30: { id: 'E30', year: '2021', url: pubmed('34881151'), name: 'Park JH, Kim NR, Manonukul K. Eyebrow Transplantation Using Long Hair Follicular Unit Excision Technique. Plastic and Reconstructive Surgery Global Open' },
  E31: { id: 'E31', year: '2026', url: pubmed('42975415'), name: 'Ticknor I, Given K, Hausauer AK. Platelet-Rich Plasma and Platelet-Based Products in Facial Rejuvenation: State of the Evidence. Dermatologic Surgery' },
  E32: { id: 'E32', url: 'https://trichoscan.com/', name: 'TrichoScan: product information (manufacturer)' },
  E34: { id: 'E34', year: '2026', url: pubmed('41709896'), name: 'Romera de Blas C, et al. Complications in follicular unit excision hair transplantation. Frontiers in Medicine' },
  E35: { id: 'E35', year: '2019', url: pubmed('30418195'), name: 'Park JH, You SH, Kim NR. Nonshaven follicular unit extraction: personal experience. Annals of Plastic Surgery' },
  E36: { id: 'E36', year: '2023', url: pubmed('36183302'), name: 'Nguyen B, Hu JK, Tosti A. Eyebrow and Eyelash Alopecia: A Clinical Review. American Journal of Clinical Dermatology' },
  E37: { id: 'E37', year: '2023', url: pubmed('37188989'), name: 'Starace M, et al. Impact and Management of Loss of Eyebrows and Eyelashes. Dermatology and Therapy' },
  E38: { id: 'E38', year: '2026', url: 'https://www.aao.org/eye-health/diseases/what-is-trichiasis', name: 'American Academy of Ophthalmology: What Is Trichiasis?' },
  E39: { id: 'E39', year: '2018', url: 'https://www.aao.org/eye-health/tips-prevention/eyelash-extension-facts-safety', name: 'American Academy of Ophthalmology: Eyelash Extension Facts and Safety' },
  E40: { id: 'E40', year: '2024', url: 'https://www.nhs.uk/conditions/hair-loss/', name: 'NHS: Hair loss' },
  E41: { id: 'E41', url: 'https://www.aad.org/public/diseases/hair-loss/treatment/male-pattern-hair-loss-treatment', name: 'American Academy of Dermatology: What is male pattern hair loss, and can it be treated?' },
  E42: { id: 'E42', url: 'https://www.aad.org/public/diseases/hair-loss/types/female-pattern', name: 'American Academy of Dermatology: Thinning hair and hair loss: Could it be female pattern hair loss?' },
  E43: { id: 'E43', year: '2019', url: 'https://ishrs.org/top-5-things-to-know-about-hair-transplantation/', name: 'International Society of Hair Restoration Surgery (ISHRS): Top 5 Things to Know About Hair Transplantation' },
  E44: { id: 'E44', year: '2025', url: 'https://ishrs.org/fifth-hair-transplant-repair-day/', name: 'International Society of Hair Restoration Surgery (ISHRS): World Hair Transplant Repair Day 2025' },
  E45: { id: 'E45', url: 'https://ishrs.org/wp-content/uploads/2017/12/ISHRSPatientBrochure_ENGLISH.pdf', name: 'International Society of Hair Restoration Surgery (ISHRS): Patient brochure on hair transplantation' },
  E46: { id: 'E46', url: 'https://www.aad.org/public/diseases/hair-loss/types/alopecia', name: 'American Academy of Dermatology: Alopecia areata' },
  E47: { id: 'E47', year: '2022', url: 'https://www.aad.org/news/finding-the-right-treatments-for-genetic-hair-loss', name: 'American Academy of Dermatology: Finding the right treatments for genetic hair loss' },
}

const REF = /\[(E\d{2}(?:\s*,\s*E\d{2})*)\]/g

/** Source IDs in the order they first appear in the given texts. */
export function refsInOrder(texts: string[]): string[] {
  const seen: string[] = []
  for (const t of texts) {
    const re = new RegExp(REF.source, 'g')
    let m: RegExpExecArray | null
    while ((m = re.exec(t)) !== null) {
      for (const id of m[1].split(/\s*,\s*/)) if (SOURCES[id] && !seen.includes(id)) seen.push(id)
    }
  }
  return seen
}

/** Plain text without reference markers (for metadata and structured data). */
export function stripRefs(text: string): string {
  return text.replace(/\s*\[(E\d{2}(?:\s*,\s*E\d{2})*)\]/g, '').trim()
}
