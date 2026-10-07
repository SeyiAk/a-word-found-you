import type { WordMessage } from '../types/word';

/**
 * Scripture-based word library for the "A Word Found You" experience.
 *
 * `scripture` is quoted verbatim from the stated `translation` (checked
 * against BibleGateway’s current editions: NIV 2011, ESV text edition 2025,
 * NLT 2015, CSB 2017, NASB 2020, NKJV 1982, KJV). Conventions, as when quoting a verse
 * on its own: small-caps LORD / GOD are written in capitals; quotation marks
 * belonging to a speech that continues beyond the quoted verses are left
 * out; and a quotation that starts mid-sentence has only its first letter
 * capitalized. Never edit the wording of a `scripture` string by hand.
 *
 * `encouragement` is original reflection on the passage — not Scripture —
 * and should be reviewed by church leadership before launch.
 *
 * Translations other than the KJV are copyrighted. Publishers’ quotation
 * policies require the translation abbreviation after each quotation (the
 * card and the saved image show it) and cap how much may be quoted without
 * permission — check each publisher’s current terms before launch.
 */
export const words: WordMessage[] = [
  /* ── Original set (reviewed) ───────────────────── */
  {
    id: 'keep-going',
    title: 'KEEP GOING.',
    scripture:
      'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.',
    reference: 'Galatians 6:9',
    translation: 'NIV',
    encouragement:
      'Maybe you’ve been doing the right thing without seeing the result yet. Don’t let a slow season convince you that nothing is happening.',
  },
  {
    id: 'breathe',
    title: 'BREATHE.',
    scripture:
      'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.',
    reference: 'Psalm 46:10',
    translation: 'NIV',
    encouragement:
      'You don’t have to figure it all out today. Take a breath. The God who holds the universe is holding you too.',
  },
  {
    id: 'you-are-seen',
    title: 'YOU ARE SEEN.',
    scripture:
      'She gave this name to the LORD who spoke to her: “You are the God who sees me,” for she said, “I have now seen the One who sees me.”',
    reference: 'Genesis 16:13',
    translation: 'NIV',
    encouragement:
      'Even when no one else notices, God does. You’re not invisible. You’re not forgotten. You are deeply, fully seen.',
  },
  {
    id: 'start-again',
    title: 'START AGAIN.',
    scripture:
      'Because of the LORD’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.',
    reference: 'Lamentations 3:22–23',
    translation: 'NIV',
    encouragement:
      'Yesterday doesn’t get the final word. His mercies meet you new this morning — not because you earned them, but because He is faithful.',
  },
  {
    id: 'be-still',
    title: 'BE STILL.',
    scripture:
      'The LORD will fight for you; you need only to be still.',
    reference: 'Exodus 14:14',
    translation: 'NIV',
    encouragement:
      'Some battles aren’t yours to fight. Be still — not because you’re giving up, but because you trust the One who never loses.',
  },
  {
    id: 'wait-well',
    title: 'WAIT WELL.',
    scripture:
      'But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    reference: 'Isaiah 40:31',
    translation: 'NIV',
    encouragement:
      'Waiting on God isn’t wasted time. It’s where He renews the strength of people who are running on empty.',
  },
  {
    id: 'dont-give-up',
    title: 'DON’T GIVE UP.',
    scripture:
      'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.',
    reference: 'John 16:33',
    translation: 'NIV',
    encouragement:
      'Jesus never promised a life without trouble — He promised Himself. The pressure is real, but it doesn’t get the last word. He has overcome.',
  },
  {
    id: 'wait-for-it',
    title: 'WAIT FOR IT.',
    scripture:
      'For the revelation awaits an appointed time; it speaks of the end and will not prove false. Though it linger, wait for it; it will certainly come and will not delay.',
    reference: 'Habakkuk 2:3',
    translation: 'NIV',
    encouragement:
      'God’s promises run on His timetable, not ours. When it seems slow, keep watching and keep trusting — what He has spoken will come.',
  },
  {
    id: 'god-hasnt-forgotten',
    title: 'GOD HASN’T FORGOTTEN.',
    scripture:
      'Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!',
    reference: 'Isaiah 49:15',
    translation: 'NIV',
    encouragement:
      'When it feels like God has moved on, this is His answer: a mother might forget her child, but He will not forget you.',
  },
  {
    id: 'have-courage',
    title: 'HAVE COURAGE.',
    scripture:
      'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.',
    reference: 'Joshua 1:9',
    translation: 'NIV',
    encouragement:
      'Courage doesn’t mean you’re not scared. It means you move forward anyway — knowing that God walks with you into the unknown.',
  },
  {
    id: 'you-belong',
    title: 'YOU BELONG.',
    scripture:
      'So now you Gentiles are no longer strangers and foreigners. You are citizens along with all of God’s holy people. You are members of God’s family.',
    reference: 'Ephesians 2:19',
    translation: 'NLT',
    encouragement:
      'No one in God’s family is there on probation. In Christ you’re not a guest in His house — you’re family.',
  },
  {
    id: 'let-it-go',
    title: 'LET IT GO.',
    scripture:
      'Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.',
    reference: 'Isaiah 43:18–19',
    translation: 'NIV',
    encouragement:
      'Some chapters need to close. God isn’t only the God of what used to be — He is doing something new, even in places that feel like wilderness.',
  },
  {
    id: 'grace-is-enough',
    title: 'HIS GRACE IS ENOUGH.',
    scripture:
      'But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.”',
    reference: '2 Corinthians 12:9',
    translation: 'NIV',
    encouragement:
      'Weakness isn’t a disqualification. Paul discovered it was exactly where Christ’s power showed up — and His grace is enough for today.',
  },
  {
    id: 'joy-is-coming',
    title: 'JOY IS COMING.',
    scripture:
      'For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.',
    reference: 'Psalm 30:5',
    translation: 'NIV',
    encouragement:
      'Nights can feel endless, but they are not the whole story. David wrote this after his own long night — and he lived to sing about the morning.',
  },
  {
    id: 'trust-the-process',
    title: 'TRUST THE PROCESS.',
    scripture:
      'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    reference: 'Romans 8:28',
    translation: 'NIV',
    encouragement:
      'It might not make sense right now. But God is weaving something beautiful from every thread of your story — even the tangled ones.',
  },

  /* ── Anxiety & peace ───────────────────────────── */
  {
    id: 'give-him-your-worries',
    title: 'GIVE HIM YOUR WORRIES.',
    scripture:
      'Give all your worries and cares to God, for he cares about you.',
    reference: '1 Peter 5:7',
    translation: 'NLT',
    encouragement:
      'You weren’t designed to carry all of it. Hand Him the weight you’ve been holding — not because it’s small, but because He genuinely cares about you.',
  },
  {
    id: 'just-today',
    title: 'JUST TODAY.',
    scripture:
      'Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.',
    reference: 'Matthew 6:34',
    translation: 'ESV',
    encouragement:
      'Tomorrow isn’t yours to carry yet. Today has enough in it — and your Father knows what you need for today.',
  },
  {
    id: 'pray-about-everything',
    title: 'PRAY ABOUT EVERYTHING.',
    scripture:
      'Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. Then you will experience God’s peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus.',
    reference: 'Philippians 4:6–7',
    translation: 'NLT',
    encouragement:
      'Worry replays the problem; prayer hands it over. You may not get every answer today, but you can have a peace that stands guard over your heart.',
  },
  {
    id: 'held-when-slipping',
    title: 'WHEN YOU’RE SLIPPING.',
    scripture:
      'When I thought, “My foot slips,” your steadfast love, O LORD, held me up. When the cares of my heart are many, your consolations cheer my soul.',
    reference: 'Psalm 94:18–19',
    translation: 'ESV',
    encouragement:
      'The psalmist didn’t pretend he was fine — he admitted he was slipping. That’s exactly where God’s steadfast love held him up.',
  },
  {
    id: 'perfect-peace',
    title: 'PERFECT PEACE.',
    scripture:
      'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.',
    reference: 'Isaiah 26:3',
    translation: 'ESV',
    encouragement:
      'Peace isn’t the absence of problems; it’s where your mind comes to rest. Keep returning your thoughts to Him — that’s where steadiness grows.',
  },
  {
    id: 'not-as-the-world-gives',
    title: 'NOT AS THE WORLD GIVES.',
    scripture:
      'Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.',
    reference: 'John 14:27',
    translation: 'NKJV',
    encouragement:
      'The world’s peace depends on everything going right. Jesus offers a peace that holds even when it doesn’t.',
  },
  {
    id: 'think-on-these-things',
    title: 'THINK ON THESE THINGS.',
    scripture:
      'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
    reference: 'Philippians 4:8',
    translation: 'NIV',
    encouragement:
      'Your mind will dwell on something today. Choose what’s true, pure and lovely — it changes how you see everything else.',
  },

  /* ── Fear & courage ────────────────────────────── */
  {
    id: 'fear-not',
    title: 'FEAR NOT.',
    scripture:
      'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
    reference: 'Isaiah 41:10',
    translation: 'ESV',
    encouragement:
      'Fear says you’re on your own. God says the opposite: He is with you, and He promises His strength to hold you up.',
  },
  {
    id: 'called-by-name',
    title: 'YOU ARE MINE.',
    scripture:
      'Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.',
    reference: 'Isaiah 43:1–2',
    translation: 'ESV',
    encouragement:
      'God doesn’t promise you’ll never face deep water or fire. He promises you won’t face it alone — and that it won’t overwhelm you.',
  },
  {
    id: 'when-i-am-afraid',
    title: 'WHEN I AM AFRAID.',
    scripture:
      'When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me?',
    reference: 'Psalm 56:3–4',
    translation: 'ESV',
    encouragement:
      'Faith isn’t the absence of fear; it’s what you do with it. David was afraid too — and he chose to turn that fear into trust.',
  },
  {
    id: 'not-a-spirit-of-fear',
    title: 'NOT A SPIRIT OF FEAR.',
    scripture:
      'For God has not given us a spirit of fear, but of power and of love and of a sound mind.',
    reference: '2 Timothy 1:7',
    translation: 'NKJV',
    encouragement:
      'Fear doesn’t come from God’s Spirit. He gives power to act, love to guide you, and a sound mind to keep you steady.',
  },
  {
    id: 'he-goes-before-you',
    title: 'HE GOES BEFORE YOU.',
    scripture:
      'The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.',
    reference: 'Deuteronomy 31:8',
    translation: 'NIV',
    encouragement:
      'The unknown isn’t unexplored territory to God. The LORD has already gone ahead of you — and He’s staying with you all the way.',
  },
  {
    id: 'for-such-a-time',
    title: 'FOR SUCH A TIME.',
    scripture:
      'And who knows but that you have come to your royal position for such a time as this?',
    reference: 'Esther 4:14',
    translation: 'NIV',
    encouragement:
      'Esther didn’t choose her moment, but she chose courage in it. Where you are right now may be exactly where you can make a difference.',
  },
  {
    id: 'young-and-called',
    title: 'YOUNG AND CALLED.',
    scripture:
      'Don’t let anyone think less of you because you are young. Be an example to all believers in what you say, in the way you live, in your love, your faith, and your purity.',
    reference: '1 Timothy 4:12',
    translation: 'NLT',
    encouragement:
      'Your age doesn’t disqualify you. You can be an example in what you say, how you live, and in your love, faith and purity.',
  },
  {
    id: 'strength-in-distress',
    title: 'WHEN IT ALL FALLS APART.',
    scripture:
      'But David found strength in the LORD his God.',
    reference: '1 Samuel 30:6',
    translation: 'NIV',
    encouragement:
      'When everyone around him turned bitter, David had nowhere left to turn except God — and that’s exactly where he found strength.',
  },
  {
    id: 'eyes-on-you',
    title: 'EYES UP.',
    scripture:
      'We do not know what to do, but our eyes are on you.',
    reference: '2 Chronicles 20:12',
    translation: 'NIV',
    encouragement:
      'Not knowing what to do is not the same as having nowhere to look. Keep your eyes on Him.',
  },

  /* ── God's presence & loneliness ───────────────── */
  {
    id: 'with-you-always',
    title: 'WITH YOU ALWAYS.',
    scripture:
      'And behold, I am with you always, to the end of the age.',
    reference: 'Matthew 28:20',
    translation: 'ESV',
    encouragement:
      'Jesus’ last words in Matthew are a promise of presence. On your best day and your worst one, He is with you.',
  },
  {
    id: 'even-there',
    title: 'EVEN THERE.',
    scripture:
      'Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me, and your right hand shall hold me.',
    reference: 'Psalm 139:7–10',
    translation: 'ESV',
    encouragement:
      'There’s no place so far, so dark or so low that God isn’t already there. Even there, His hand leads you and holds you.',
  },
  {
    id: 'close-to-the-brokenhearted',
    title: 'HE IS NEAR.',
    scripture:
      'The LORD is near the brokenhearted; he saves those crushed in spirit.',
    reference: 'Psalm 34:18',
    translation: 'CSB',
    encouragement:
      'Heartbreak can make God feel far away. This says the opposite: when you’re crushed, He is near.',
  },
  {
    id: 'when-youre-lonely',
    title: 'WHEN YOU’RE LONELY.',
    scripture:
      'Turn to me and be gracious to me, for I am lonely and afflicted. Relieve the troubles of my heart and free me from my anguish.',
    reference: 'Psalm 25:16–17',
    translation: 'NIV',
    encouragement:
      'You can say it plainly to God: I’m lonely. You don’t have to dress it up — He invites you to turn toward Him.',
  },
  {
    id: 'called-friends',
    title: 'YOU ARE HIS FRIEND.',
    scripture:
      'I no longer call you servants, because a servant does not know his master’s business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you.',
    reference: 'John 15:15',
    translation: 'NIV',
    encouragement:
      'Jesus doesn’t just tolerate you — He calls you His friend and lets you in on what matters to Him.',
  },
  {
    id: 'a-father-to-you',
    title: 'FATHER TO THE FATHERLESS.',
    scripture:
      'A father to the fatherless, a defender of widows, is God in his holy dwelling.',
    reference: 'Psalm 68:5',
    translation: 'NIV',
    encouragement:
      'If family has been hard or absent, you are not without a Father. God steps into the empty places with care.',
  },
  {
    id: 'draw-near',
    title: 'DRAW NEAR.',
    scripture:
      'Draw near to God, and he will draw near to you.',
    reference: 'James 4:8',
    translation: 'ESV',
    encouragement:
      'Closeness with God isn’t reserved for the super-spiritual. Take one honest step toward Him — He promises to draw near to you.',
  },
  {
    id: 'he-walks-with-you',
    title: 'HEARTS ON FIRE.',
    scripture:
      'They asked each other, “Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?”',
    reference: 'Luke 24:32',
    translation: 'NIV',
    encouragement:
      'Two followers walked home crushed by disappointment, not realizing Jesus was walking beside them. He still meets disappointed people on the road.',
  },

  /* ── Love & identity ───────────────────────────── */
  {
    id: 'nothing-can-separate',
    title: 'NOTHING CAN SEPARATE.',
    scripture:
      'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
    reference: 'Romans 8:38–39',
    translation: 'ESV',
    encouragement:
      'Make a list of everything that could come between you and God’s love. Paul already did — and nothing on it is strong enough.',
  },
  {
    id: 'so-loved',
    title: 'SO LOVED.',
    scripture:
      'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    reference: 'John 3:16',
    translation: 'NIV',
    encouragement:
      'Before you ever tried to love God, He loved you — enough to give His Son. Everything starts there.',
  },
  {
    id: 'loved-at-your-worst',
    title: 'LOVED AT YOUR WORST.',
    scripture:
      'But God proves his own love for us in that while we were still sinners, Christ died for us.',
    reference: 'Romans 5:8',
    translation: 'CSB',
    encouragement:
      'God didn’t wait for you to get it together before loving you. He proved His love while you were still a sinner.',
  },
  {
    id: 'love-beyond-measure',
    title: 'WIDE, LONG, HIGH, DEEP.',
    scripture:
      'And I pray that you, being rooted and established in love, may have power, together with all the Lord’s holy people, to grasp how wide and long and high and deep is the love of Christ, and to know this love that surpasses knowledge—that you may be filled to the measure of all the fullness of God.',
    reference: 'Ephesians 3:17–19',
    translation: 'NIV',
    encouragement:
      'You will never reach the edges of Christ’s love. You can spend your whole life exploring it and still find more.',
  },
  {
    id: 'wonderfully-made',
    title: 'WONDERFULLY MADE.',
    scripture:
      'For you created my inmost being; you knit me together in my mother’s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
    reference: 'Psalm 139:13–14',
    translation: 'NIV',
    encouragement:
      'Before anyone had an opinion about you, God was knitting you together. You are His intentional work — and His works are wonderful.',
  },
  {
    id: 'the-new-has-come',
    title: 'THE NEW HAS COME.',
    scripture:
      'Therefore, if anyone is in Christ, he is a new creation; the old has passed away, and see, the new has come!',
    reference: '2 Corinthians 5:17',
    translation: 'CSB',
    encouragement:
      'In Christ, your past is not your identity. Something genuinely new has begun — and it’s still unfolding in you.',
  },
  {
    id: 'chosen',
    title: 'CHOSEN.',
    scripture:
      'But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.',
    reference: '1 Peter 2:9',
    translation: 'NIV',
    encouragement:
      'You were called out of darkness on purpose and for a purpose: to show the world how good He is.',
  },
  {
    id: 'he-sings-over-you',
    title: 'HE SINGS OVER YOU.',
    scripture:
      'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
    reference: 'Zephaniah 3:17',
    translation: 'ESV',
    encouragement:
      'Picture it: the mighty God who saves, quieting you with His love and rejoicing over you with singing. That’s the God who is with you.',
  },
  {
    id: 'adopted',
    title: 'YOU CAN CALL HIM FATHER.',
    scripture:
      'So you have not received a spirit that makes you fearful slaves. Instead, you received God’s Spirit when he adopted you as his own children. Now we call him, “Abba, Father.”',
    reference: 'Romans 8:15',
    translation: 'NLT',
    encouragement:
      'God isn’t a boss waiting for you to slip up. You’re His child — and you can call Him Father.',
  },
  {
    id: 'not-overlooked',
    title: 'NOT OVERLOOKED.',
    scripture:
      'What is the price of five sparrows—two copper coins? Yet God does not forget a single one of them. And the very hairs on your head are all numbered. So don’t be afraid; you are more valuable to God than a whole flock of sparrows.',
    reference: 'Luke 12:6–7',
    translation: 'NLT',
    encouragement:
      'God does not forget a single sparrow, and He knows details about you that you’ve never counted. You are not overlooked.',
  },
  {
    id: 'made-on-purpose',
    title: 'MADE ON PURPOSE.',
    scripture:
      'For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    reference: 'Ephesians 2:10',
    translation: 'NIV',
    encouragement:
      'You’re not an accident. You weren’t made to just fit in — you were made on purpose, with purpose, for purpose.',
  },

  /* ── Hope, waiting & God's promises ────────────── */
  {
    id: 'a-future-and-a-hope',
    title: 'A FUTURE AND A HOPE.',
    scripture:
      '“For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.”',
    reference: 'Jeremiah 29:11',
    translation: 'NIV',
    encouragement:
      'God spoke this to exiles who still had seventy years to wait. His plans aren’t always quick — but even in a hard place, He holds your future.',
  },
  {
    id: 'hope-that-holds',
    title: 'HOPE THAT HOLDS.',
    scripture:
      'We can rejoice, too, when we run into problems and trials, for we know that they help us develop endurance. And endurance develops strength of character, and character strengthens our confident hope of salvation. And this hope will not lead to disappointment. For we know how dearly God loves us, because he has given us the Holy Spirit to fill our hearts with his love.',
    reference: 'Romans 5:3–5',
    translation: 'NLT',
    encouragement:
      'Problems and trials aren’t pointless in God’s hands. They can grow endurance, character and a confident hope — because He has already filled your heart with His love.',
  },
  {
    id: 'abound-in-hope',
    title: 'ABOUND IN HOPE.',
    scripture:
      'Now may the God of hope fill you with all joy and peace in believing, so that you will abound in hope by the power of the Holy Spirit.',
    reference: 'Romans 15:13',
    translation: 'NASB',
    encouragement:
      'This is a blessing prayed over you: joy and peace as you believe, and hope that overflows — by the power of the Holy Spirit, not your own effort.',
  },
  {
    id: 'anchored',
    title: 'ANCHORED.',
    scripture:
      'We have this hope as an anchor for the soul, firm and secure.',
    reference: 'Hebrews 6:19',
    translation: 'NIV',
    encouragement:
      'Storms move a lot of things, but an anchor holds. Your hope in Christ is firm and secure — even on days you don’t feel steady.',
  },
  {
    id: 'talk-to-your-soul',
    title: 'TALK TO YOUR SOUL.',
    scripture:
      'Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.',
    reference: 'Psalm 42:11',
    translation: 'NIV',
    encouragement:
      'Sometimes you have to preach to your own heart. Feelings are real, but they don’t get to be in charge — put your hope in God.',
  },
  {
    id: 'take-heart-and-wait',
    title: 'TAKE HEART AND WAIT.',
    scripture:
      'I believe that I shall look upon the goodness of the LORD in the land of the living! Wait for the LORD; be strong, and let your heart take courage; wait for the LORD!',
    reference: 'Psalm 27:13–14',
    translation: 'ESV',
    encouragement:
      'Waiting can wear you thin. David chose confidence anyway: he expected to see God’s goodness in this life, not just the next.',
  },
  {
    id: 'beautiful-in-its-time',
    title: 'IN ITS TIME.',
    scripture:
      'He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end.',
    reference: 'Ecclesiastes 3:11',
    translation: 'NIV',
    encouragement:
      'You can’t see the whole picture from where you stand — no one can. But God makes things beautiful in their time.',
  },
  {
    id: 'not-one-promise-failed',
    title: 'NOT ONE FAILED.',
    scripture:
      'None of the good promises the LORD had made to the house of Israel failed. Everything was fulfilled.',
    reference: 'Joshua 21:45',
    translation: 'CSB',
    encouragement:
      'At the end of a long, hard journey, Israel could look back and see that God had kept every promise. He’s the same God today.',
  },

  /* ── Weariness, perseverance & rest ────────────── */
  {
    id: 'come-to-me',
    title: 'COME TO ME.',
    scripture:
      'Then Jesus said, “Come to me, all of you who are weary and carry heavy burdens, and I will give you rest. Take my yoke upon you. Let me teach you, because I am humble and gentle at heart, and you will find rest for your souls. For my yoke is easy to bear, and the burden I give you is light.”',
    reference: 'Matthew 11:28–30',
    translation: 'NLT',
    encouragement:
      'Jesus doesn’t tell tired people to try harder. He invites them to come to Him — and He is gentle with them.',
  },
  {
    id: 'do-not-lose-heart',
    title: 'DO NOT LOSE HEART.',
    scripture:
      'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.',
    reference: '2 Corinthians 4:16–18',
    translation: 'ESV',
    encouragement:
      'Paul wasn’t pretending his troubles were small — he was comparing them to eternity. Inside, God is renewing you day by day.',
  },
  {
    id: 'pressed-not-crushed',
    title: 'NOT CRUSHED.',
    scripture:
      'We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.',
    reference: '2 Corinthians 4:8–9',
    translation: 'NIV',
    encouragement:
      'You can be pressed without being crushed and confused without giving up. There’s a strength holding you that isn’t your own.',
  },
  {
    id: 'run-your-race',
    title: 'RUN YOUR RACE.',
    scripture:
      'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.',
    reference: 'Hebrews 12:1–2',
    translation: 'NIV',
    encouragement:
      'Your race is marked out for you; you don’t have to run anyone else’s. Keep your eyes on Jesus — He is the one who perfects your faith.',
  },
  {
    id: 'strength-of-my-heart',
    title: 'STRENGTH OF MY HEART.',
    scripture:
      'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.',
    reference: 'Psalm 73:26',
    translation: 'ESV',
    encouragement:
      'Your strength has limits, and that’s okay. God is the strength beneath your strength — and He’s yours forever.',
  },
  {
    id: 'he-will-finish-it',
    title: 'HE WILL FINISH IT.',
    scripture:
      'And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.',
    reference: 'Philippians 1:6',
    translation: 'ESV',
    encouragement:
      'You’re a work in progress, and God doesn’t abandon His work. What He started in you, He intends to finish.',
  },
  {
    id: 'trials-are-not-wasted',
    title: 'NOT WASTED.',
    scripture:
      'My brethren, count it all joy when you fall into various trials, knowing that the testing of your faith produces patience. But let patience have its perfect work, that you may be perfect and complete, lacking nothing.',
    reference: 'James 1:2–4',
    translation: 'NKJV',
    encouragement:
      'Trials aren’t joyful in themselves, but they aren’t wasted either. God uses them to grow a patience in you that leaves you complete, lacking nothing.',
  },
  {
    id: 'rest-awhile',
    title: 'REST AWHILE.',
    scripture:
      'Then Jesus said, “Let’s go off by ourselves to a quiet place and rest awhile.” He said this because there were so many people coming and going that Jesus and his apostles didn’t even have time to eat.',
    reference: 'Mark 6:31',
    translation: 'NLT',
    encouragement:
      'Jesus noticed His friends were too busy to eat and invited them to rest. Rest isn’t laziness — sometimes it’s obedience.',
  },
  {
    id: 'my-soul-waits',
    title: 'WAIT IN SILENCE.',
    scripture:
      'For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation, my fortress; I shall not be greatly shaken.',
    reference: 'Psalm 62:1–2',
    translation: 'ESV',
    encouragement:
      'Rest isn’t only sleep; it’s knowing where your security comes from. Your soul can wait quietly in Him.',
  },
  {
    id: 'he-never-sleeps',
    title: 'HE NEVER SLEEPS.',
    scripture:
      'I lift my eyes toward the mountains. Where will my help come from? My help comes from the LORD, the Maker of heaven and earth. He will not allow your foot to slip; your Protector will not slumber. Indeed, the Protector of Israel does not slumber or sleep.',
    reference: 'Psalm 121:1–4',
    translation: 'CSB',
    encouragement:
      'Your help doesn’t come from what you can see on the horizon. It comes from the Maker of heaven and earth — and He never stops watching over you.',
  },

  /* ── Failure, forgiveness & grace ──────────────── */
  {
    id: 'no-condemnation',
    title: 'NO CONDEMNATION.',
    scripture:
      'Therefore, there is now no condemnation for those in Christ Jesus, because the law of the Spirit of life in Christ Jesus has set you free from the law of sin and death.',
    reference: 'Romans 8:1–2',
    translation: 'CSB',
    encouragement:
      'That voice replaying your failures doesn’t get the final verdict. In Christ, the verdict is in: not condemned — set free.',
  },
  {
    id: 'as-far-as-the-east',
    title: 'AS FAR AS THE EAST.',
    scripture:
      'He does not deal with us according to our sins, nor repay us according to our iniquities. For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him; as far as the east is from the west, so far does he remove our transgressions from us.',
    reference: 'Psalm 103:10–12',
    translation: 'ESV',
    encouragement:
      'You can’t travel far enough east to reach west. That’s how completely God removes the sins He forgives.',
  },
  {
    id: 'come-clean',
    title: 'COME CLEAN.',
    scripture:
      'If we confess our sins, He is faithful and righteous, so that He will forgive us our sins and cleanse us from all unrighteousness.',
    reference: '1 John 1:9',
    translation: 'NASB',
    encouragement:
      'Hiding it only makes it heavier. Bring it into the light — He is faithful to forgive and to make you clean.',
  },
  {
    id: 'restore-my-joy',
    title: 'RESTORE MY JOY.',
    scripture:
      'Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from your presence, and take not your Holy Spirit from me. Restore to me the joy of your salvation, and uphold me with a willing spirit.',
    reference: 'Psalm 51:10–12',
    translation: 'ESV',
    encouragement:
      'David prayed this after his worst failure. If he could ask God for a clean heart and restored joy, so can you.',
  },
  {
    id: 'the-father-ran',
    title: 'HE RAN.',
    scripture:
      'So he got up and went to his father. But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.',
    reference: 'Luke 15:20',
    translation: 'NIV',
    encouragement:
      'The son came home rehearsing an apology. The father didn’t wait for it — he ran. That’s how God meets people who come back.',
  },
  {
    id: 'gentle-with-you',
    title: 'A BRUISED REED.',
    scripture:
      'A bruised reed he will not break, and a smoldering wick he will not snuff out, till he has brought justice through to victory.',
    reference: 'Matthew 12:20',
    translation: 'NIV',
    encouragement:
      'If you feel bruised or close to burning out, Jesus is not careless with you. He handles fragile people with great gentleness.',
  },
  {
    id: 'i-will-rise',
    title: 'I WILL RISE.',
    scripture:
      'Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the LORD will be my light.',
    reference: 'Micah 7:8',
    translation: 'NIV',
    encouragement:
      'Falling down isn’t the end of your story. Even while you sit in the dark, the LORD can be your light.',
  },
  {
    id: 'radiant-not-ashamed',
    title: 'RADIANT, NOT ASHAMED.',
    scripture:
      'I sought the LORD, and he answered me; he delivered me from all my fears. Those who look to him are radiant; their faces are never covered with shame.',
    reference: 'Psalm 34:4–5',
    translation: 'NIV',
    encouragement:
      'Fear and shame both make you want to hide. Looking to God does the opposite — He answers, He delivers, and He leaves you radiant.',
  },
  {
    id: 'its-a-gift',
    title: 'IT’S A GIFT.',
    scripture:
      'For you are saved by grace through faith, and this is not from yourselves; it is God’s gift—not from works, so that no one can boast.',
    reference: 'Ephesians 2:8–9',
    translation: 'CSB',
    encouragement:
      'Grace stops being grace the moment you try to earn it. Salvation is a gift — receive it with open hands.',
  },
  {
    id: 'come-with-confidence',
    title: 'COME WITH CONFIDENCE.',
    scripture:
      'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are—yet he did not sin. Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.',
    reference: 'Hebrews 4:15–16',
    translation: 'NIV',
    encouragement:
      'Jesus understands weakness from the inside. So you don’t have to approach God timidly — come with confidence and receive the help you need.',
  },
  {
    id: 'his-mercy-endures',
    title: 'HIS MERCY ENDURES.',
    scripture:
      'O give thanks unto the LORD; for he is good: for his mercy endureth for ever.',
    reference: 'Psalm 136:1',
    translation: 'KJV',
    encouragement:
      'Psalm 136 repeats this line twenty-six times, and it’s still true. Whatever changes today, His mercy doesn’t run out.',
  },
  {
    id: 'forgive-like-he-did',
    title: 'FORGIVE LIKE HE DID.',
    scripture:
      'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.',
    reference: 'Ephesians 4:32',
    translation: 'NIV',
    encouragement:
      'Forgiving someone doesn’t mean what they did was okay. It means you’re passing on the mercy God has given you.',
  },

  /* ── Growth, temptation & holiness ─────────────── */
  {
    id: 'a-way-out',
    title: 'THERE IS A WAY OUT.',
    scripture:
      'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.',
    reference: '1 Corinthians 10:13',
    translation: 'NIV',
    encouragement:
      'You’re not the only one facing this, and you’re not trapped. God is faithful — look for the way out He provides.',
  },
  {
    id: 'be-transformed',
    title: 'BE TRANSFORMED.',
    scripture:
      'Do not be conformed to this age, but be transformed by the renewing of your mind, so that you may discern what is the good, pleasing, and perfect will of God.',
    reference: 'Romans 12:2',
    translation: 'CSB',
    encouragement:
      'The world will happily shape your thinking for you. Let God renew it instead — that’s how you learn to discern His good and perfect will.',
  },
  {
    id: 'stay-connected',
    title: 'STAY CONNECTED.',
    scripture:
      'I am the vine; you are the branches. The one who remains in me and I in him produces much fruit, because you can do nothing without me.',
    reference: 'John 15:5',
    translation: 'CSB',
    encouragement:
      'Fruit doesn’t come from straining harder; it comes from staying close. Stay connected to Jesus today.',
  },
  {
    id: 'be-a-doer',
    title: 'BE A DOER.',
    scripture:
      'But prove yourselves doers of the word, and not just hearers who deceive themselves.',
    reference: 'James 1:22',
    translation: 'NASB',
    encouragement:
      'Hearing is a great start, but it’s meant to lead somewhere. What’s one thing God’s Word is asking you to actually do today?',
  },
  {
    id: 'worth-the-training',
    title: 'WORTH THE TRAINING.',
    scripture:
      'No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.',
    reference: 'Hebrews 12:11',
    translation: 'NIV',
    encouragement:
      'Growth rarely feels good while it’s happening. But God’s training produces righteousness and peace in the people who stay with it.',
  },
  {
    id: 'called-to-be-holy',
    title: 'CALLED TO BE HOLY.',
    scripture:
      'But just as he who called you is holy, so be holy in all you do; for it is written: “Be holy, because I am holy.”',
    reference: '1 Peter 1:15–16',
    translation: 'NIV',
    encouragement:
      'Holiness isn’t about being stiff or perfect. It’s becoming more like the God who called you, in the ordinary details of life.',
  },
  {
    id: 'guard-your-heart',
    title: 'GUARD YOUR HEART.',
    scripture:
      'Guard your heart above all else, for it determines the course of your life.',
    reference: 'Proverbs 4:23',
    translation: 'NLT',
    encouragement:
      'What you let into your heart shapes the direction of your life. Guard it carefully — it matters.',
  },
  {
    id: 'run-toward-good',
    title: 'RUN TOWARD GOOD.',
    scripture:
      'Run from anything that stimulates youthful lusts. Instead, pursue righteous living, faithfulness, love, and peace. Enjoy the companionship of those who call on the Lord with pure hearts.',
    reference: '2 Timothy 2:22',
    translation: 'NLT',
    encouragement:
      'Running from temptation works better when you’re also running toward something. Pursue what’s good — and find friends who call on the Lord with you.',
  },
  {
    id: 'more-like-him',
    title: 'MORE AND MORE LIKE HIM.',
    scripture:
      'So all of us who have had that veil removed can see and reflect the glory of the Lord. And the Lord—who is the Spirit—makes us more and more like him as we are changed into his glorious image.',
    reference: '2 Corinthians 3:18',
    translation: 'NLT',
    encouragement:
      'You become like what you behold. As you keep looking to Jesus, the Spirit is making you more and more like Him.',
  },
  {
    id: 'clothed-in-love',
    title: 'CLOTHED IN LOVE.',
    scripture:
      'Since God chose you to be the holy people he loves, you must clothe yourselves with tenderhearted mercy, kindness, humility, gentleness, and patience. Make allowance for each other’s faults, and forgive anyone who offends you. Remember, the Lord forgave you, so you must forgive others. Above all, clothe yourselves with love, which binds us all together in perfect harmony.',
    reference: 'Colossians 3:12–14',
    translation: 'NLT',
    encouragement:
      'Notice what comes first: God chose you and loves you. From that place you can put on kindness and patience — and forgive.',
  },

  /* ── Wisdom, guidance & work ───────────────────── */
  {
    id: 'he-will-show-you-the-path',
    title: 'HE WILL SHOW YOU THE PATH.',
    scripture:
      'Trust in the LORD with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.',
    reference: 'Proverbs 3:5–6',
    translation: 'NLT',
    encouragement:
      'You don’t have to understand everything to trust the One who does. Bring Him into every decision — He knows the way.',
  },
  {
    id: 'just-ask',
    title: 'JUST ASK.',
    scripture:
      'If you need wisdom, ask our generous God, and he will give it to you. He will not rebuke you for asking.',
    reference: 'James 1:5',
    translation: 'NLT',
    encouragement:
      'Facing a decision you don’t know how to make? Ask. God gives wisdom generously — and He won’t make you feel foolish for asking.',
  },
  {
    id: 'he-will-guide-you',
    title: 'HE WILL GUIDE YOU.',
    scripture:
      'The LORD says, “I will guide you along the best pathway for your life. I will advise you and watch over you.”',
    reference: 'Psalm 32:8',
    translation: 'NLT',
    encouragement:
      'Figuring out the way alone was never the plan. God promises to guide you, advise you and watch over you as you go.',
  },
  {
    id: 'plan-then-trust',
    title: 'PLAN, THEN TRUST.',
    scripture:
      'The heart of man plans his way, but the LORD establishes his steps.',
    reference: 'Proverbs 16:9',
    translation: 'ESV',
    encouragement:
      'Make your plans — planning is wise. Then hold them with open hands, because the LORD is the one who establishes your steps.',
  },
  {
    id: 'do-it-for-him',
    title: 'DO IT FOR HIM.',
    scripture:
      'Whatever you do, do it from the heart, as something done for the Lord and not for people, knowing that you will receive the reward of an inheritance from the Lord. You serve the Lord Christ.',
    reference: 'Colossians 3:23–24',
    translation: 'CSB',
    encouragement:
      'No job is too small to matter when you do it for Christ. Your effort today isn’t invisible — He sees it.',
  },
  {
    id: 'wisdom-from-above',
    title: 'WISDOM FROM ABOVE.',
    scripture:
      'But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere.',
    reference: 'James 3:17',
    translation: 'NIV',
    encouragement:
      'Not sure whether a choice is wise? Hold it up to this list — pure, peace-loving, considerate, merciful, sincere.',
  },
  {
    id: 'small-beginnings',
    title: 'SMALL BEGINNINGS.',
    scripture:
      'Do not despise these small beginnings, for the LORD rejoices to see the work begin, to see the plumb line in Zerubbabel’s hand.',
    reference: 'Zechariah 4:10',
    translation: 'NLT',
    encouragement:
      'Small starts are still real starts. God rejoices to see the work begin — even when it doesn’t look like much yet.',
  },
  {
    id: 'use-your-gift',
    title: 'USE YOUR GIFT.',
    scripture:
      'Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.',
    reference: '1 Peter 4:10',
    translation: 'NIV',
    encouragement:
      'You have something to give that someone else needs. Your gift isn’t for display — it’s for serving.',
  },
  {
    id: 'here-i-am',
    title: 'HERE I AM.',
    scripture:
      'Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” And I said, “Here am I. Send me!”',
    reference: 'Isaiah 6:8',
    translation: 'NIV',
    encouragement:
      'God’s call often begins with simple willingness. You don’t need every answer before you can say yes to Him.',
  },
  {
    id: 'all-of-it',
    title: 'ALL OF IT.',
    scripture:
      'So whether you eat or drink or whatever you do, do it all for the glory of God.',
    reference: '1 Corinthians 10:31',
    translation: 'NIV',
    encouragement:
      'There’s no secular corner of your life. Meals, homework, work and play — all of it can be done for God’s glory.',
  },
  {
    id: 'he-knows-your-way',
    title: 'HE KNOWS YOUR WAY.',
    scripture:
      'But he knows the way that I take; when he has tested me, I will come forth as gold.',
    reference: 'Job 23:10',
    translation: 'NIV',
    encouragement:
      'Job couldn’t find God in his pain, but he trusted that God could see him. You may feel lost — He knows exactly where you are.',
  },
  {
    id: 'things-not-seen',
    title: 'THINGS NOT SEEN.',
    scripture:
      'Now faith is the substance of things hoped for, the evidence of things not seen.',
    reference: 'Hebrews 11:1',
    translation: 'NKJV',
    encouragement:
      'Faith isn’t pretending. It’s trusting what God has said when you can’t see it yet.',
  },

  /* ── Relationships & serving ───────────────────── */
  {
    id: 'friends-who-sharpen',
    title: 'FRIENDS WHO SHARPEN.',
    scripture:
      'Iron sharpens iron, and one person sharpens another.',
    reference: 'Proverbs 27:17',
    translation: 'CSB',
    encouragement:
      'Good friends don’t just make life fun — they make you better. Who sharpens you, and who are you sharpening?',
  },
  {
    id: 'better-together',
    title: 'BETTER TOGETHER.',
    scripture:
      'Two are better than one because they have a good reward for their efforts. For if either falls, his companion can lift him up; but pity the one who falls without another to lift him up.',
    reference: 'Ecclesiastes 4:9–10',
    translation: 'CSB',
    encouragement:
      'You weren’t made to do life solo. Let someone in — and be the one who helps someone else back up.',
  },
  {
    id: 'love-like-this',
    title: 'LOVE LIKE THIS.',
    scripture:
      'Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.',
    reference: '1 Corinthians 13:4–7',
    translation: 'ESV',
    encouragement:
      'Read it slowly and it’s both a mirror and a portrait. It shows where we fall short — and describes how God loves us.',
  },
  {
    id: 'as-i-have-loved-you',
    title: 'AS I HAVE LOVED YOU.',
    scripture:
      'A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.',
    reference: 'John 13:34–35',
    translation: 'NIV',
    encouragement:
      'Jesus set the bar at His own love — patient, costly and forgiving. Who could use that kind of love from you this week?',
  },
  {
    id: 'love-that-lasts',
    title: 'LOVE THAT LASTS.',
    scripture:
      'Many waters cannot quench love; rivers cannot sweep it away.',
    reference: 'Song of Songs 8:7',
    translation: 'NIV',
    encouragement:
      'Real love is stronger than the floods that test it. Whatever season your relationships are in, ask God to grow a love like that.',
  },
  {
    id: 'pleasant-places',
    title: 'PLEASANT PLACES.',
    scripture:
      'LORD, you alone are my portion and my cup; you make my lot secure. The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance.',
    reference: 'Psalm 16:5–6',
    translation: 'NIV',
    encouragement:
      'Whether you’re single, waiting, or not where you expected to be, your life isn’t on hold. God Himself is your portion, and your season can be good.',
  },
  {
    id: 'as-for-me',
    title: 'AS FOR ME.',
    scripture:
      'But as for me and my house, we will serve the LORD.',
    reference: 'Joshua 24:15',
    translation: 'ESV',
    encouragement:
      'Every home has a direction. Whatever others choose, you can decide where you and your house will stand.',
  },
  {
    id: 'free-to-serve',
    title: 'FREE TO SERVE.',
    scripture:
      'For you were called to be free, brothers and sisters; only don’t use this freedom as an opportunity for the flesh, but serve one another through love.',
    reference: 'Galatians 5:13',
    translation: 'CSB',
    encouragement:
      'Freedom in Christ isn’t freedom to please yourself — it’s freedom to love people well. Look for someone you can serve today.',
  },
  {
    id: 'others-first',
    title: 'OTHERS FIRST.',
    scripture:
      'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.',
    reference: 'Philippians 2:3–4',
    translation: 'NIV',
    encouragement:
      'Humility doesn’t mean hating yourself. It means making room for other people’s needs — and finding joy in it.',
  },
  {
    id: 'cheerful-giver',
    title: 'A CHEERFUL GIVER.',
    scripture:
      'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
    reference: '2 Corinthians 9:7',
    translation: 'NIV',
    encouragement:
      'Generosity isn’t measured by the size of the gift. It flows from a heart that has received so much it wants to give.',
  },
  {
    id: 'pray-for-each-other',
    title: 'PRAY FOR EACH OTHER.',
    scripture:
      'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.',
    reference: 'James 5:16',
    translation: 'NIV',
    encouragement:
      'Healing often happens in community, when we stop hiding and start praying together. Who could you ask to pray with you?',
  },

  /* ── Prayer, seeking & worship ─────────────────── */
  {
    id: 'thirsty-for-god',
    title: 'THIRSTY FOR GOD.',
    scripture:
      'You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water.',
    reference: 'Psalm 63:1',
    translation: 'NIV',
    encouragement:
      'David wrote this in a literal desert. Spiritual dryness isn’t the end of faith — that thirst is a sign you were made for Him.',
  },
  {
    id: 'better-is-one-day',
    title: 'BETTER IS ONE DAY.',
    scripture:
      'Better is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked.',
    reference: 'Psalm 84:10',
    translation: 'NIV',
    encouragement:
      'Nothing this world offers compares with time in God’s presence. One day with Him beats a thousand anywhere else.',
  },
  {
    id: 'give-thanks-anyway',
    title: 'GIVE THANKS ANYWAY.',
    scripture:
      'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
    reference: '1 Thessalonians 5:16–18',
    translation: 'ESV',
    encouragement:
      'Not thanks for every circumstance, but thanks in every circumstance. Gratitude keeps your heart turned toward God, even on hard days.',
  },
  {
    id: 'when-words-run-out',
    title: 'WHEN WORDS RUN OUT.',
    scripture:
      'And the Holy Spirit helps us in our weakness. For example, we don’t know what God wants us to pray for. But the Holy Spirit prays for us with groanings that cannot be expressed in words.',
    reference: 'Romans 8:26',
    translation: 'NLT',
    encouragement:
      'When you don’t have the words, you’re not on your own. The Spirit carries to God what you can’t say.',
  },
  {
    id: 'ask-seek-knock',
    title: 'ASK, SEEK, KNOCK.',
    scripture:
      'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.',
    reference: 'Matthew 7:7–8',
    translation: 'NIV',
    encouragement:
      'Jesus invites persistent prayer. Keep asking, seeking and knocking — your Father is good, and He listens.',
  },
  {
    id: 'dont-fret',
    title: 'DON’T FRET.',
    scripture:
      'Be still before the LORD and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes.',
    reference: 'Psalm 37:7',
    translation: 'NIV',
    encouragement:
      'It’s hard to watch others get ahead, especially when they cut corners. Be still — God sees, and you can trust Him with what’s fair.',
  },
  {
    id: 'get-alone-with-god',
    title: 'GET ALONE WITH GOD.',
    scripture:
      'Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.',
    reference: 'Mark 1:35',
    translation: 'NIV',
    encouragement:
      'If Jesus made space to be alone with the Father, you can too. Find a quiet place today — even for five minutes.',
  },
  {
    id: 'holy-holy-holy',
    title: 'HOLY, HOLY, HOLY.',
    scripture:
      'Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory.',
    reference: 'Isaiah 6:3',
    translation: 'NIV',
    encouragement:
      'Before you bring God your requests today, look at who He is. The whole earth is full of His glory — including the corner you’re standing in.',
  },
  {
    id: 'you-have-breath',
    title: 'YOU HAVE BREATH.',
    scripture:
      'Let everything that has breath praise the LORD! Praise the LORD!',
    reference: 'Psalm 150:6',
    translation: 'ESV',
    encouragement:
      'If you’re breathing, you’re invited. Praise doesn’t need perfect circumstances — just breath.',
  },
  {
    id: 'the-heavens-declare',
    title: 'THE SKY IS TALKING.',
    scripture:
      'The heavens declare the glory of God, and the sky above proclaims his handiwork.',
    reference: 'Psalm 19:1',
    translation: 'ESV',
    encouragement:
      'Next time you see the sky, let it speak. Creation keeps pointing to the God who made it — and made you.',
  },
  {
    id: 'this-is-the-day',
    title: 'THIS IS THE DAY.',
    scripture:
      'This is the day that the LORD has made; let us rejoice and be glad in it.',
    reference: 'Psalm 118:24',
    translation: 'ESV',
    encouragement:
      'The psalmist celebrated a day when God did what only He could do. Look for His fingerprints on today — and rejoice.',
  },
  {
    id: 'joy-is-your-strength',
    title: 'JOY IS YOUR STRENGTH.',
    scripture:
      'Do not grieve, for the joy of the LORD is your strength.',
    reference: 'Nehemiah 8:10',
    translation: 'NIV',
    encouragement:
      'The people were weeping over their failures when they heard this. God’s joy wasn’t a reward for getting it right — it was strength for starting again.',
  },
  {
    id: 'immeasurably-more',
    title: 'IMMEASURABLY MORE.',
    scripture:
      'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen.',
    reference: 'Ephesians 3:20–21',
    translation: 'NIV',
    encouragement:
      'Your biggest prayer is still small next to God’s power. Pray boldly — and give Him the glory for whatever He does.',
  },
  {
    id: 'nothing-too-hard',
    title: 'NOTHING IS TOO HARD.',
    scripture:
      'Ah, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.',
    reference: 'Jeremiah 32:17',
    translation: 'NIV',
    encouragement:
      'Jeremiah prayed this while buying a field in a city about to fall. Faith looks at the impossible and remembers who made the heavens.',
  },

  /* ── Grief, healing & disappointment ───────────── */
  {
    id: 'he-tends-your-wounds',
    title: 'HE TENDS YOUR WOUNDS.',
    scripture:
      'He heals the brokenhearted and bandages their wounds.',
    reference: 'Psalm 147:3',
    translation: 'CSB',
    encouragement:
      'Some wounds don’t heal on a schedule. God is patient with yours — He tends them with care.',
  },
  {
    id: 'jesus-wept',
    title: 'JESUS WEPT.',
    scripture:
      'When Jesus saw her weeping, and the Jews who had come along with her also weeping, he was deeply moved in spirit and troubled. “Where have you laid him?” he asked. “Come and see, Lord,” they replied. Jesus wept.',
    reference: 'John 11:33–35',
    translation: 'NIV',
    encouragement:
      'Jesus knew He was about to raise Lazarus, and He still wept with those who grieved. Your tears matter to Him.',
  },
  {
    id: 'no-more-tears',
    title: 'NO MORE TEARS.',
    scripture:
      'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
    reference: 'Revelation 21:4',
    translation: 'ESV',
    encouragement:
      'Grief is real, and it isn’t forever. One day God Himself will wipe away every tear.',
  },
  {
    id: 'he-keeps-your-tears',
    title: 'HE KEEPS YOUR TEARS.',
    scripture:
      'You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book.',
    reference: 'Psalm 56:8',
    translation: 'NLT',
    encouragement:
      'Not one tear has gone unnoticed. God keeps track of your sorrows — they matter to Him.',
  },
  {
    id: 'heal-me',
    title: 'HEAL ME.',
    scripture:
      'Heal me, LORD, and I will be healed; save me and I will be saved, for you are the one I praise.',
    reference: 'Jeremiah 17:14',
    translation: 'NIV',
    encouragement:
      'It’s okay to ask God for healing — of body, heart or mind. Bring Him what hurts, and keep trusting Him with the outcome.',
  },
  {
    id: 'yet-i-will-rejoice',
    title: 'YET I WILL REJOICE.',
    scripture:
      'Though the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food, though there are no sheep in the pen and no cattle in the stalls, yet I will rejoice in the LORD, I will be joyful in God my Savior.',
    reference: 'Habakkuk 3:17–18',
    translation: 'NIV',
    encouragement:
      'Habakkuk faced losing everything he could count on — and chose joy in God anyway. Your joy can have deeper roots than your circumstances.',
  },
  {
    id: 'meant-for-good',
    title: 'MEANT FOR GOOD.',
    scripture:
      'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.',
    reference: 'Genesis 50:20',
    translation: 'NIV',
    encouragement:
      'Joseph was betrayed, forgotten and wronged — and still saw God’s hand at work. What others meant for harm doesn’t get the final word.',
  },
  {
    id: 'i-will-trust',
    title: 'I WILL TRUST.',
    scripture:
      'But I have trusted in your steadfast love; my heart shall rejoice in your salvation. I will sing to the LORD, because he has dealt bountifully with me.',
    reference: 'Psalm 13:5–6',
    translation: 'ESV',
    encouragement:
      'This psalm begins with David asking how long he’ll feel forgotten, and it ends here, in trust. You can bring God your questions on the way.',
  },
  {
    id: 'a-place-for-you',
    title: 'A PLACE FOR YOU.',
    scripture:
      'Let not your heart be troubled; you believe in God, believe also in Me. In My Father’s house are many mansions; if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again and receive you to Myself; that where I am, there you may be also.',
    reference: 'John 14:1–3',
    translation: 'NKJV',
    encouragement:
      'Jesus said this to friends whose world was about to fall apart. He was preparing a place for them — and for everyone who trusts Him.',
  },

  /* ── Provision & contentment ───────────────────── */
  {
    id: 'all-your-needs',
    title: 'ALL YOUR NEEDS.',
    scripture:
      'And my God will supply all your needs according to his riches in glory in Christ Jesus.',
    reference: 'Philippians 4:19',
    translation: 'CSB',
    encouragement:
      'Paul wrote this to generous people who had given to him. God isn’t stingy — He knows exactly what you need.',
  },
  {
    id: 'content-in-any-season',
    title: 'CONTENT IN ANY SEASON.',
    scripture:
      'I am not saying this because I am in need, for I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. I can do all this through him who gives me strength.',
    reference: 'Philippians 4:11–13',
    translation: 'NIV',
    encouragement:
      'The famous line about doing all things through Christ is really about contentment — with much or with little. His strength can steady you in any season.',
  },
  {
    id: 'he-will-never-leave-you',
    title: 'HE WILL NEVER LEAVE YOU.',
    scripture:
      'Keep your lives free from the love of money and be content with what you have, because God has said, “Never will I leave you; never will I forsake you.”',
    reference: 'Hebrews 13:5',
    translation: 'NIV',
    encouragement:
      'Contentment doesn’t come from having enough; it comes from having Him. Whatever you lack today, you’re not without God.',
  },
  {
    id: 'the-lord-will-provide',
    title: 'THE LORD WILL PROVIDE.',
    scripture:
      'So Abraham called the name of that place, “The LORD will provide”; as it is said to this day, “On the mount of the LORD it shall be provided.”',
    reference: 'Genesis 22:14',
    translation: 'ESV',
    encouragement:
      'On the hardest day of Abraham’s life, God provided. He still knows how to meet His people on the mountain.',
  },

  /* ── Trust & protection ────────────────────────── */
  {
    id: 'a-very-present-help',
    title: 'A VERY PRESENT HELP.',
    scripture:
      'God is our refuge and strength, a very present help in trouble.',
    reference: 'Psalm 46:1',
    translation: 'KJV',
    encouragement:
      'God isn’t distant from your trouble — He’s very present in it. He is your refuge and strength right now.',
  },
  {
    id: 'in-his-shadow',
    title: 'IN HIS SHADOW.',
    scripture:
      'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the LORD, “My refuge and my fortress, my God, in whom I trust.”',
    reference: 'Psalm 91:1–2',
    translation: 'ESV',
    encouragement:
      'There’s a place of rest in God’s shadow. Say it today and mean it: He is my refuge, and I trust Him.',
  },
  {
    id: 'a-strong-tower',
    title: 'A STRONG TOWER.',
    scripture:
      'The name of the LORD is a strong tower: the righteous runneth into it, and is safe.',
    reference: 'Proverbs 18:10',
    translation: 'KJV',
    encouragement:
      'When life leaves you feeling exposed, you have somewhere to run. His name is a strong tower.',
  },
  {
    id: 'roots-by-the-water',
    title: 'ROOTS BY THE WATER.',
    scripture:
      'But blessed is the one who trusts in the LORD, whose confidence is in him. They will be like a tree planted by the water that sends out its roots by the stream. It does not fear when heat comes; its leaves are always green. It has no worries in a year of drought and never fails to bear fruit.',
    reference: 'Jeremiah 17:7–8',
    translation: 'NIV',
    encouragement:
      'Drought still comes to the tree by the water — it just isn’t destroyed by it. Deep roots in God keep you alive in dry seasons.',
  },
  {
    id: 'higher-ways',
    title: 'HIGHER WAYS.',
    scripture:
      '“For my thoughts are not your thoughts, neither are your ways my ways,” declares the LORD. “As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.”',
    reference: 'Isaiah 55:8–9',
    translation: 'NIV',
    encouragement:
      'When God’s ways don’t make sense to you, that doesn’t mean they don’t make sense. His thoughts are higher than yours.',
  },
  {
    id: 'my-times-are-in-his-hands',
    title: 'MY TIMES ARE IN HIS HANDS.',
    scripture:
      'But I trust in you, LORD; I say, “You are my God.” My times are in your hands; deliver me from the hands of my enemies, from those who pursue me.',
    reference: 'Psalm 31:14–15',
    translation: 'NIV',
    encouragement:
      'When life feels out of control, you can pray what David prayed: my times are in Your hands. There is no safer place for them.',
  },
  {
    id: 'my-shepherd',
    title: 'MY SHEPHERD.',
    scripture:
      'The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.',
    reference: 'Psalm 23:1–3',
    translation: 'KJV',
    encouragement:
      'A shepherd knows when his sheep need rest, water and a way forward. You’re not wandering unseen — you have a Shepherd.',
  },
  {
    id: 'through-the-valley',
    title: 'THROUGH THE VALLEY.',
    scripture:
      'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
    reference: 'Psalm 23:4',
    translation: 'ESV',
    encouragement:
      'The valley is real, and God doesn’t pretend otherwise. But you’re walking through it — and you’re not walking alone.',
  },
  {
    id: 'not-my-will',
    title: 'NOT MY WILL.',
    scripture:
      'Father, if you are willing, take this cup from me; yet not my will, but yours be done.',
    reference: 'Luke 22:42',
    translation: 'NIV',
    encouragement:
      'Even Jesus asked for another way — and then surrendered to the Father. You can be honest about what you want and still trust Him with what’s best.',
  },
  {
    id: 'press-on',
    title: 'PRESS ON.',
    scripture:
      'Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.',
    reference: 'Philippians 3:13–14',
    translation: 'NIV',
    encouragement:
      'Paul had a past he could have stayed stuck in. He chose to press on toward the prize — and you can too.',
  },
];
