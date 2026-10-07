# A Word Found You

Scan, tap, and receive a word from Scripture for your week — from Covenant Culture.

A Word Found You is a small web app for Covenant Culture's Youth Sunday. People scan the QR code on the standee, tap once, and receive a Bible verse with a short word of encouragement. They can save it to their phone as an image, or ask for another word.

## How it works

1. **Landing:** the Covenant Culture logo, "WAIT." and a single **Find my word** button.
2. **Discovery:** Scripture references float around the screen while a slot-machine ticker spins through them, slows down, and lands on the chosen word. This takes about 3.6 seconds the first time and about 2.8 seconds after that.
3. **The word:** a card with the title, the verse, its reference and translation, and a short encouragement.
4. **Save this for your week:** opens a sheet with a 1080×1920 image of the word, sized for a phone wallpaper or story.
   - **iPhone and iPad:** *Save to Photos* opens the share sheet. Choose *Save Image*.
   - **Android:** *Save to Gallery* downloads the image, which then shows in Downloads and the Gallery. *Share* opens the share sheet.
   - **Desktop:** *Download image*.
   - **Anywhere:** press and hold the preview to save it. This also works inside in-app browsers such as Instagram's.
5. **Give me another word:** runs the discovery again.

Words are dealt like a shuffled deck: nobody sees a repeat until they've seen every word. Progress is saved on the device (in `localStorage`), so someone who scans again next week carries on with new words.

## Getting started

You need Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run lint      # run oxlint
```

## Deploying

The app is a single static page. Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages and so on), then point the QR code at the production URL.

Serve it over **HTTPS**. Browsers only allow sharing files on secure pages, and that is how *Save to Photos* works on iPhone. Over plain HTTP the app falls back to downloading the image, and press-and-hold still works.

Fonts load from Google Fonts.

## Project structure

```
src/
  App.tsx                 screen flow (landing → discovering → word) and screen transitions
  index.css               all styles: design tokens, screens, animations, reduced motion
  components/
    LandingScreen.tsx     intro screen and the Find my word button
    DiscoveryScreen.tsx   the anticipation sequence; owns its own timeline
    FloatingReferences.tsx, ReferenceTicker.tsx
                          pieces of the discovery screen
    WordScreen.tsx, WordCard.tsx
                          the word and its actions
    SaveSheet.tsx         image preview and save/share sheet (native <dialog>)
    BrandLogo.tsx, AmbientBackground.tsx, Button.tsx, Icons.tsx
  data/words.ts           the word library (150 messages)
  hooks/
    useRandomWord.ts      deals words from the deck
    useWordImage.ts       pre-renders the save image
    usePrefersReducedMotion.ts
  lib/
    wordDeck.ts           no-repeat deck logic and its saved progress
    discoveryPlan.ts      discovery timings, reference positions, ticker schedule
    renderWordImage.ts    draws the save image with Canvas 2D
    saveImage.ts          how each platform saves and shares
  theme/
    tokens.ts             brand colours and fonts (mirrored as CSS variables in index.css)
    accents.ts            each word's accent colour
  types/word.ts           WordMessage and BibleTranslation types
  assets/brand/           Covenant Culture logo and smoke wave
public/                   favicon and home-screen icon
```

## The word library

Each entry in `src/data/words.ts` is a `WordMessage`:

```ts
{
  id: 'keep-going',             // unique, stable, kebab-case
  title: 'KEEP GOING.',         // short, uppercase; the last word takes the accent colour
  scripture: 'Let us not become weary in doing good, …',
  reference: 'Galatians 6:9',   // ranges use an en dash: 'Psalm 23:1–3'
  translation: 'NIV',           // NIV | ESV | NLT | CSB | NASB | NKJV | KJV
  encouragement: 'Maybe you’ve been doing the right thing …',
}
```

There are 150 messages, grouped by theme: anxiety and peace, fear and courage, grief and healing, wisdom and work, and others. By translation: NIV 74, ESV 30, NLT 19, CSB 15, NKJV 5, KJV 4, NASB 3.

**`scripture` is Bible text, quoted word for word** from the current edition of its translation: NIV 2011, ESV text edition 2025, NLT 2015, CSB 2017, NASB 2020, NKJV 1982 and KJV. Every quotation was checked against BibleGateway. Never reword it by hand. These are the only conventions applied:

- LORD and GOD, printed in small capitals in most Bibles, are written in capitals.
- Quotation marks that belong to a speech continuing beyond the quoted verses are left out.
- An excerpt that starts mid-sentence gets a capital first letter.
- Apostrophes and quotation marks are curly (’ “ ”).

**`encouragement` is original writing, not Scripture.** It is one to three sentences that speak to the reader, and it never promises more than the verse does. Church leadership should review it before launch.

### Adding a word

1. Choose a passage and translation. Copy the text exactly from the publisher's current edition (for example on biblegateway.com), following the conventions above, and end on a complete sentence.
2. Add an entry with a new, unique `id` and a short `title`.
3. Write the encouragement.
4. Run `npm run build`, which also checks the `translation` value. Then check the card on a small phone and look at the saved image.
5. Re-check the copyright numbers below, especially if you're adding NIV entries.

Each phone's saved progress stores word `id`s. If you rename an `id`, that word simply counts as unseen again.

## Scripture copyright

The KJV is public domain, except in the UK, where it is under Crown copyright. The other translations are copyrighted, and each publisher allows free use only within limits. These figures are as of October 2026:

| Translation | Publisher | Free-use limits | Used in this app |
|---|---|---|---|
| NIV | Zondervan (North America); Biblica (electronic rights, and outside North America) | ≤ 500 verses, < 25% of the work | 99 verses, 24.3% of the text |
| ESV | Crossway | ≤ 500 verses, < 25% of the work | 52 verses, 10.3% |
| NLT | Tyndale | ≤ 500 verses, ≤ 25% of the work; the policy covers print and eBook | 28 verses, 7.8% |
| NKJV | Thomas Nelson | ≤ 500 verses, ≤ 25% of the text | 9 verses, 1.9% |
| CSB | Holman | ≤ 1,000 verses, ≤ 50% of the work | 22 verses, 4.3% |
| NASB | The Lockman Foundation | ≤ 1,000 verses, ≤ 50% of the work | 3 verses, 0.8% |

Before launch:

- **The NIV is close to its limit.** Adding a few more NIV entries would take it past 25% of the text.
- **The saved image may need permission.** NIV and NKJV free use excludes products where "the verse stands alone, such as artwork, note cards".
- **Ask for written permission** from Biblica (NIV in an app) and Tyndale (NLT in an app).
- **Add a full copyright notice.** The card and the saved image show each translation's abbreviation, which several publishers require for church use, but most also expect a full notice somewhere in the app. Add a credits line using each publisher's exact wording.

Publishers' terms change, so check each one's current permissions page.

## Design notes

- Brand colours are sampled from the Covenant Culture logo. They live in `src/theme/tokens.ts` and as CSS variables in `src/index.css`. Keep the two in sync: the save image reads the TypeScript tokens.
- Headlines use Barlow Condensed and body text uses Manrope.
- Each word gets one of five accent colours (orange, purple, green, coral or amber), based on its position in the list.
- Screen changes use React's `<ViewTransition>`: the logo shrinks into place and the found reference flies into the card. Browsers without the View Transitions API switch screens without the animation.
- When someone has *reduce motion* turned on, animations are switched off and the discovery sequence takes about 1.4 seconds.

## Testing

There is no automated test suite. Before a release:

- Run `npm run lint` and `npm run build`.
- Go through the whole flow on a phone-sized screen and on a small one, such as an iPhone SE.
- Open the save sheet and check the image.
- On real phones over HTTPS, save to Photos on an iPhone and to the Gallery on Android.
