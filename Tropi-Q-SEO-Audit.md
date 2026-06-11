# Tropi Q — Full SEO Audit (Updated)
**Domain:** www.tropiqspa.com | **Audited:** June 2026

---

## Executive Summary

Since the last audit, Tropi Q has made significant progress: the domain is live, GTM/GA4 are installed, Google verification is in place, Maps is embedded site-wide, real photos are published, and two solid blog posts are live. The technical foundation is now genuinely strong. However, **the site does not yet appear in Google search results for any "Tropi Q" or "head spa Hanoi" query** — which means Google either hasn't finished indexing the new domain, or indexing signals are still weak. The most urgent priorities now shift from "fix the basics" to "get indexed, get visible, build authority."

**Top 3 priorities right now:**
1. Verify indexing in Google Search Console — submit sitemap, request indexing for each key page manually
2. Fix broken/empty pages (/about and /services/headspa return no content)
3. Claim Google Business Profile — this is still the #1 missing channel for tourist discovery

Overall assessment: **Good foundation, but not yet visible in search. Indexing and local SEO are the blockers.**

---

## What's Improved Since Last Audit ✅

| Item | Status |
|---|---|
| Domain tropiqspa.com connected and live | ✅ Done |
| GTM (GTM-W8JN8NL3) + GA4 (G-MJVZ8WEXEY) installed | ✅ Done |
| Google Search Console verification tag in meta | ✅ Done |
| Google Maps embed in footer on all pages | ✅ Done |
| Real review photos on homepage (20 images) | ✅ Done |
| Real customer moment photos (8 images) | ✅ Done |
| 2 blog posts published and well-written | ✅ Done |
| Real service videos on /services page | ✅ Done |
| Payment methods displayed | ✅ Done |

---

## Keyword Opportunity Table

| Keyword | Difficulty | Opportunity | Current Ranking | Intent | Recommended Content |
|---|---|---|---|---|---|
| head spa Hanoi | Medium | **High** | Not ranking | Transactional | Standalone landing page |
| headspa Hanoi | Low | **High** | Not ranking | Transactional | Same landing page (variant) |
| what is a head spa | Low | **High** | Not ranking yet | Informational | /blog/what-is-a-head-spa ✅ (exists, needs indexing) |
| scalp treatment Hanoi | Low | **High** | Not ranking | Transactional | /services page + blog |
| hair wash Hanoi | Low | **High** | Not ranking | Transactional | /services page |
| no tip spa Hanoi | Very Low | **High** | Not ranking yet | Informational | /blog/no-tip-spa-hanoi ✅ (exists, needs indexing) |
| Vietnamese head spa | Low | **High** | Not ranking | Informational/Trans | Blog post + /services/headspa |
| head spa near Ba Dinh Hanoi | Very Low | **High** | Not ranking | Local | GBP + contact |
| herbal hair wash Hanoi | Very Low | **High** | Not ranking | Transactional | Service page / blog |
| spa Tran Phu Hanoi | Very Low | **High** | Not ranking | Navigational | GBP + footer |
| foot spa Hanoi | Medium | Medium | Not ranking | Transactional | /services#foot-spa |
| facial La Roche-Posay Hanoi | Very Low | **High** | Not ranking | Transactional | /services#facial |
| best spa Hanoi no tipping | Very Low | **High** | Not ranking | Transactional | Blog post (exists) |
| head spa for jet lag Vietnam | Very Low | **High** | Not ranking | Informational | Blog post (not yet written) |
| Vietnamese herbal scalp treatment | Very Low | **High** | Not ranking | Informational | Blog post (not yet written) |
| spa Hanoi Old Quarter | High | Medium | Not ranking | Transactional | Homepage / GBP |
| spa franchise Vietnam | Low | Medium | Not ranking | Commercial | /franchise |
| head spa franchise Vietnam | Very Low | **High** | Not ranking | Commercial | /franchise |
| relaxation spa Hanoi tourists | Low | Medium | Not ranking | Transactional | Homepage / blog |
| tropical spa Hanoi | Very Low | **High** | Not ranking | Transactional | Homepage |
| scalp massage Hanoi | Low | **High** | Not ranking | Transactional | /services/headspa (if fixed) |
| body massage Hanoi no hidden fees | Very Low | **High** | Not ranking | Transactional | Blog / services |

---

## On-Page Issues

| Page | Issue | Severity | Fix |
|---|---|---|---|
| `/about` | Returns empty — page doesn't load | **Critical** | Check if page exists in codebase; restore or remove from any internal links |
| `/services/headspa` | Returns empty — page doesn't load | **Critical** | Restore the standalone head spa landing page — this was a key SEO asset |
| All pages | Site not appearing in Google results — likely not yet indexed | **Critical** | In Google Search Console: submit sitemap.xml, then manually request indexing for /, /services, /blog, and both blog posts |
| `/blog/no-tip-spa-hanoi` | Missing meta description entirely | **High** | Add: "Tropi Q is a no-tip, no-surcharge head spa in Hanoi. Here's why that policy exists — and why travelers say it changes everything." (158 chars) |
| `/blog/what-is-a-head-spa` | No og:image specified — shares with blank image | **High** | Add page-specific og:image (a photo of the head spa treatment) |
| `/blog/no-tip-spa-hanoi` | No og:image specified | **High** | Add page-specific og:image |
| Both blog posts | Missing Article JSON-LD schema | **High** | Add `@type: "Article"` with `datePublished`, `author`, `image` — needed for Google to show article rich results |
| `/services` | No meta description visible in crawl | **High** | Confirm meta description is being rendered; should describe the full menu and services |
| `/experience` | H1 is "Every Corner, A Story" — zero keywords | **High** | Change to: "The Head Spa Experience at Tropi Q, Hanoi" — keeps brand feel but adds keywords |
| All pages | og:url is hardcoded to `https://www.tropiqspa.com` on every page — should be page-specific | Medium | In layout.js metadata, og:url should use the `alternates.canonical` value, not the root URL |
| Homepage | Body text very thin (~150 words total) — mostly images | Medium | Add a short "About Tropi Q" paragraph (50–80 words) with natural keywords below the hero; or expand the "Why travelers keep coming back" section into sentences |
| `/experience` | Content is only 3 bullet points + gallery — less than 100 words | Medium | Add 1–2 paragraphs describing what the experience is like, referencing head spa, herbal ingredients, and location |
| All pages | Identical meta-keywords on every page (obsolete tag, and not page-specific) | Low | Remove the meta-keywords tag entirely — Google ignores it; it just adds noise |
| `/franchise` | WhatsApp button sends generic "book a head spa" message, not franchise inquiry | Low | Change WhatsApp text to: "Hi Tropi Q! I'm interested in the franchise opportunity." |

---

## Content Gap Analysis

| Topic | Why It Matters | Format | Priority | Effort |
|---|---|---|---|---|
| **Restore /services/headspa** | Was a standalone head spa page — key landing page for "head spa Hanoi" and "scalp treatment Hanoi." Currently 404. | Long-form landing page (1,000–1,500w) | **Critical** | Moderate (~1 day) |
| **"Head spa for jet lag in Hanoi"** | Orient Spa actively targets this. Tourists arriving after long-haul flights search this. High transactional intent. | Blog post (600–800w) | **High** | Quick win (~3h) |
| **Vietnamese herbal ingredients explainer** | Tropi Q uses hương nhu, bồ kết, ngải cứu, vỏ bưởi, cỏ mần trầu — none of these appear in any page content. Competitors don't target this in English. Zero-competition keyword cluster with authentic claim. | Blog post OR section on /services/headspa | **High** | Quick win (~2h) |
| **"Best no-tip spa Hanoi" / "Tipping at spas in Vietnam"** | /blog/no-tip-spa-hanoi is live but targets an adjacent angle. A more direct guide on tipping in Hanoi spas + how Tropi Q differs would capture this search cluster. | Blog post (500–700w) | High | Quick win (~2h) |
| **FAQ sections on service pages** | Orient Spa's service pages include full FAQ sections that appear in People Also Ask on Google. Tropi Q has none. | Add FAQ to /services and /services/headspa | High | Quick win (~2h) |
| **Dedicated /contact or /find-us page** | No contact page visible in the current nav or sitemap. Users searching "Tropi Q address" or "Tropi Q Hanoi location" get no dedicated page. | Simple contact/location page | Medium | Quick win (~1h) |
| **"How to get to Tropi Q from Hoan Kiem Lake"** | Location-based content captures tourists who are nearby and searching on Google Maps. Very low competition. | Short section on /contact or /experience | Medium | Quick win (~30min) |
| **Multilingual pages (ZH, JA, KO)** | Orient Spa has full translation for 4 Asian languages. Asian tourists = 40%+ of Hanoi visitors. | Language pages | Medium | Substantial (v2) |

---

## Technical SEO Checklist

| Check | Status | Detail |
|---|---|---|
| Domain live and resolving | ✅ Pass | www.tropiqspa.com loads correctly |
| HTTPS | ✅ Pass | Secure, Vercel-managed |
| Canonical tags | ✅ Pass | Correct per-page canonical URLs |
| Google Search Console verified | ✅ Pass | Verification meta tag present |
| GTM + GA4 installed | ✅ Pass | GTM-W8JN8NL3 + G-MJVZ8WEXEY confirmed in source |
| Sitemap.xml | ✅ Pass | Exists at /sitemap.xml |
| Robots.txt | ✅ Pass | /robots.txt present and correctly configured |
| JSON-LD schema (HealthAndBeautyBusiness) | ✅ Pass | Present in layout.js |
| Google Maps embed | ✅ Pass | Embedded in footer on all pages |
| One H1 per page | ⚠️ Warning | /experience H1 has no keywords — see on-page issues |
| Unique title tags | ✅ Pass | Each page has a distinct, descriptive title |
| Meta descriptions | ⚠️ Warning | /blog/no-tip-spa-hanoi missing; /services may be missing |
| OG image | ✅ Pass | og.jpg now resolves correctly at tropiqspa.com/og.jpg |
| OG image — blog posts | ❌ Fail | Both blog posts lack a custom og:image. Will show no image when shared on social. |
| OG:url — all pages | ⚠️ Warning | og:url is root URL on all pages, not page-specific |
| Article schema on blog posts | ❌ Fail | No Article JSON-LD on either blog post — Google can't identify them as articles |
| Mobile-friendly | ✅ Pass | Next.js + Tailwind, responsive |
| Page speed | ⚠️ Warning | Cover images served at w=3840 (full 4K). Next.js optimizes on delivery but source size is large. Compress originals. |
| /about page | ❌ Fail | Returns empty / no content |
| /services/headspa | ❌ Fail | Returns empty / 404 |
| Internal links to /about, /contact, /reviews | ❌ Fail | These pages are not linked from the nav — either missing or orphaned |
| FAQ schema | ❌ Fail | No FAQ structured data anywhere |
| Google indexing | ❌ Fail | Site not appearing in Google results — needs sitemap submission + manual indexing requests in GSC |
| Google Business Profile | ❌ Fail | Not confirmed. Critical for tourist discovery. |
| TripAdvisor listing | ❌ Fail | Not found in head spa Hanoi results |
| NAP consistency (Ba Dinh vs Hoan Kiem) | ⚠️ Warning | Site uses "Ba Dinh Ward" consistently now, which is good. But confirm this matches your GBP listing exactly when you create it. |

---

## Competitor Comparison

| Dimension | Tropi Q | Orient Spa | NonLa Healing Spa |
|---|---|---|---|
| Domain live + indexed | ⚠️ Live, not indexed yet | ✅ Fully indexed | ✅ Fully indexed |
| Blog content | ✅ 2 posts (good quality) | ✅ Active blog | ✅ Active blog |
| Google Business Profile | ❌ Not confirmed | ✅ 4 locations | ✅ 2 locations |
| TripAdvisor | ❌ Not listed | ✅ Many reviews | ✅ Listed |
| Standalone head spa page | ❌ 404 currently | ✅ Full article-style page | ✅ Strong positioning |
| Article schema on blog | ❌ Missing | ✅ Present | Unknown |
| Per-post og:image | ❌ Missing | ✅ Custom per post | Unknown |
| Multilingual | ❌ EN only | ✅ EN/ZH/JA/KO/ES | ❌ EN primary |
| FAQ schema | ❌ None | ✅ Yes | ❌ Not observed |
| Online booking | ❌ WhatsApp only | ✅ On-site form | ✅ On-site widget |
| Herbal ingredient specifics in content | ❌ Not mentioned | ⚠️ Ginger oil only | ⚠️ "Herbal" but vague |
| Brand differentiation | ✅ Strong (scent, tropical, no-tip) | ⚠️ Japanese-style | ⚠️ Japanese-style |
| Real photos | ✅ Live (reviews + customers) | ✅ Yes | ✅ Yes |

---

## Prioritized Action Plan

### 🔴 Do This Week (Critical Path to Visibility)

| Action | Impact | Effort |
|---|---|---|
| **1. Google Search Console → submit sitemap → manually request indexing** for `/`, `/services`, `/blog`, `/blog/what-is-a-head-spa`, `/blog/no-tip-spa-hanoi` | Critical | 30 min |
| **2. Fix /about and /services/headspa** — check if pages exist in code; restore them | Critical | 1–2h |
| **3. Create Google Business Profile** for "Tropi Q Head Spa" at 7 Tran Phu, Ba Dinh, Hanoi. Add all photos, menu link, WhatsApp, hours, service categories | Critical | 1–2h |
| **4. Add Article JSON-LD schema** to both blog posts (`@type: "Article"`, `datePublished`, `author`, `image`) | High | 1h |
| **5. Add meta description** to /blog/no-tip-spa-hanoi | High | 15 min |
| **6. Add per-post og:image** to both blog posts (use a real treatment photo) | High | 30 min |

### 📅 This Month (Build Organic Visibility)

| Action | Impact | Effort |
|---|---|---|
| **7. Rebuild /services/headspa** as a full landing page (1,000–1,500w): what Tropi Q's head spa is, treatment steps, herbal ingredients, pricing, FAQ, location | High | 1 day |
| **8. Add FAQ sections + FAQ schema** to /services and /services/headspa | High | 2h |
| **9. Fix /experience H1** → "Head Spa Experience at Tropi Q, Hanoi" | High | 15 min |
| **10. Fix og:url** to be page-specific on all pages | Medium | 1h (code change in layout.js) |
| **11. Remove identical meta-keywords** from all pages | Low | 30 min |
| **12. Write blog post #3:** "Head spa for jet lag: why Tropi Q is the first stop for Hanoi travelers" | High | Half day |
| **13. Write blog post #4:** "The Vietnamese herbs in Tropi Q's herbal water — and what they do" | High | Half day |
| **14. Create TripAdvisor listing** | High | 1h |

### 📆 This Quarter (Authority & Growth)

| Action | Impact | Effort |
|---|---|---|
| **15. GetYourGuide / Klook listing** | High | 1 day |
| **16. Active Google review collection** — ask every guest verbally + WhatsApp follow-up | High | Ongoing |
| **17. Add /contact page** with address, map, hours, directions from Old Quarter | Medium | 2h |
| **18. Outreach to Hanoi travel bloggers** for mentions/links | High | Ongoing |
| **19. Optimize images** — compress cover images (cover-home.png, etc.) before serving | Medium | Half day |
| **20. Plan multilingual content** (ZH, JA, KO — v2 roadmap) | High | Substantial |

---

## Priority Stack Summary

```
WEEK 1: GSC indexing request → Fix /about + /services/headspa → Create GBP
WEEK 2: Article schema + og:image on blog posts → Meta desc fix → FAQ on services
WEEK 3: Rebuild /services/headspa landing page → Fix /experience H1
MONTH 2: Blog posts #3 + #4 → TripAdvisor → GetYourGuide
QUARTER: Review collection → Travel blogger outreach → Multilingual planning
```

---

*Audit conducted June 2026. Crawled: / · /services · /experience · /blog · /blog/what-is-a-head-spa · /blog/no-tip-spa-hanoi · /franchise. Pages /about and /services/headspa returned empty. No Ahrefs/SEMrush data — connect for ranking positions and volume data.*
