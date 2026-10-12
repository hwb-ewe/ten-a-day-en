/* ==========================================================================
   data.js  –  all content for "Ten a Day"
   --------------------------------------------------------------------------
   HOW TO ADD A NEW WEEK
   1. Paste the new day-objects at the end of the DAYS array (keep the commas).
   2. Paste the new items at the end of the CORRECTIONS array.
   3. Commit and push – GitHub Pages updates itself within a minute.

   FORMAT RULES
   - date:   "YYYY-MM-DD". The page shows the list whose date is today.
   - Words:  w = word or phrase, pos = part of speech, def = meaning,
             ex = example sentence, note = tip (optional).
   - In `ex`, put *asterisks* around the target word as it appears in the
     sentence. The page highlights it and uses it for fill-the-gap quizzes.
   - In corrections, put *asterisks* around the faulty part in `wrong`
     and around the corrected part in `right`.
   - Never change the order of items that already exist: your progress is
     saved by position (date + number), so only append new ones.
   ========================================================================== */

const DAYS = [
  {
    date: "2026-10-12",
    theme: "writing with precision",
    words: [
      { w: "nuance", pos: "noun", def: "A subtle difference in meaning, tone or feeling.", ex: "The translation missed the *nuance* in her reply.", note: "Often plural: the nuances of a language. You capture, grasp or miss a nuance." },
      { w: "concise", pos: "adjective", def: "Giving the necessary information in few words.", ex: "Keep your emails *concise*: three short paragraphs at most.", note: "Opposites: wordy, long-winded. Not the same as precise (exact)." },
      { w: "coherent", pos: "adjective", def: "Logical, well organised and easy to follow.", ex: "Her essay was *coherent* from the first line to the last.", note: "Noun: coherence. A coherent argument, plan or story." },
      { w: "elaborate", pos: "verb", def: "To explain something in more detail.", ex: "Could you *elaborate* on your second point?", note: "Followed by 'on'. The adjective (an elaborate plan = complicated) is pronounced differently." },
      { w: "reinforce", pos: "verb", def: "To make an idea, feeling or argument stronger.", ex: "The new data *reinforces* our earlier findings.", note: "Synonyms: strengthen, bolster. Also physical: reinforced concrete." },
      { w: "ambiguous", pos: "adjective", def: "Open to more than one meaning; unclear.", ex: "The instructions were *ambiguous*, so we built two versions.", note: "Noun: ambiguity. Opposite: clear, unambiguous." },
      { w: "articulate", pos: "verb", def: "To express a thought or feeling clearly in words.", ex: "He struggled to *articulate* why he was unhappy.", note: "As an adjective it means able to speak clearly: an articulate speaker." },
      { w: "emphasise", pos: "verb", def: "To give special importance to something.", ex: "The teacher *emphasised* the need to proofread.", note: "British -ise, American -ize. The noun 'emphasis' has the stress on the first syllable." },
      { w: "convey", pos: "verb", def: "To communicate an idea, meaning or feeling.", ex: "A single photo can *convey* more than a page of text.", note: "Convey a message, an impression, your thanks." },
      { w: "rhetoric", pos: "noun", def: "The art of persuasive speaking or writing; also fancy language with little substance.", ex: "The speech was full of *rhetoric* but contained no concrete plans.", note: "Adjective: rhetorical. A rhetorical question needs no answer." }
    ]
  },
  {
    date: "2026-10-13",
    theme: "arguing and persuading",
    words: [
      { w: "assert", pos: "verb", def: "To state something firmly and confidently.", ex: "She *asserted* that the results were accurate.", note: "Noun: assertion. Don't mix it up with 'insert'." },
      { w: "refute", pos: "verb", def: "To prove that a statement or theory is wrong.", ex: "The study *refutes* the claim that sugar makes children hyperactive.", note: "Stronger than 'deny': it means you show with evidence that it is false." },
      { w: "substantiate", pos: "verb", def: "To support a claim with evidence.", ex: "You need data to *substantiate* that statement.", note: "Formal. Everyday synonyms: back up, prove." },
      { w: "contend", pos: "verb", def: "To argue or claim that something is true.", ex: "Critics *contend* that the plan is too expensive.", note: "contend + that-clause. 'Contend with' means to deal with a difficulty." },
      { w: "plausible", pos: "adjective", def: "Seeming reasonable and likely to be true.", ex: "It is a *plausible* explanation, but we still need proof.", note: "Opposite: implausible. Plausible is not the same as possible." },
      { w: "rebuttal", pos: "noun", def: "A reply that argues against a claim.", ex: "Her *rebuttal* took apart each of his arguments.", note: "Verb: rebut. You offer or deliver a rebuttal." },
      { w: "stance", pos: "noun", def: "A person's publicly stated attitude or position on something.", ex: "The company has taken a firm *stance* against plastic packaging.", note: "take a stance on something; a clear, firm or neutral stance." },
      { w: "concede", pos: "verb", def: "To admit that something is true, often unwillingly.", ex: "I *concede* that your plan is cheaper.", note: "Also: concede a point, concede defeat." },
      { w: "undermine", pos: "verb", def: "To weaken something gradually.", ex: "Constant interruptions *undermined* her confidence.", note: "Typical objects: confidence, trust, authority, efforts." },
      { w: "compelling", pos: "adjective", def: "Very convincing; hard to ignore or resist.", ex: "He made a *compelling* case for a four-day working week.", note: "A compelling argument, reason, story or performance." }
    ]
  },
  {
    date: "2026-10-14",
    theme: "work and business",
    words: [
      { w: "leverage", pos: "verb", def: "To use something you already have to get the maximum benefit.", ex: "We can *leverage* our existing customers to find new ones.", note: "Business jargon. Good in presentations; use sparingly elsewhere." },
      { w: "streamline", pos: "verb", def: "To make a process simpler and more efficient.", ex: "The new software *streamlines* the approval process.", note: "Related: a streamlined process, a streamlined design." },
      { w: "stakeholder", pos: "noun", def: "Anyone with an interest in, or affected by, a project or business.", ex: "All *stakeholders* were invited to the kick-off meeting.", note: "Includes customers, employees, investors and neighbours." },
      { w: "feasible", pos: "adjective", def: "Possible to do and likely to work in practice.", ex: "Is it *feasible* to finish by Friday?", note: "Noun: feasibility (a feasibility study). Not the same as probable." },
      { w: "prioritise", pos: "verb", def: "To decide what is most important and deal with it first.", ex: "We have to *prioritise*; we cannot do everything this month.", note: "Noun: priority. American spelling: prioritize." },
      { w: "bottleneck", pos: "noun", def: "A point in a process where progress is slowed down.", ex: "Approval from the legal team is the main *bottleneck*.", note: "You identify, remove or create a bottleneck." },
      { w: "milestone", pos: "noun", def: "An important event or stage in a project or in life.", ex: "Reaching a thousand users was a major *milestone*.", note: "reach / achieve / mark a milestone." },
      { w: "overhaul", pos: "verb", def: "To examine something thoroughly and make big improvements.", ex: "The firm plans to *overhaul* its pricing system.", note: "Also a noun: a complete overhaul." },
      { w: "mitigate", pos: "verb", def: "To make something bad less severe.", ex: "Extra training will *mitigate* the risk of errors.", note: "Mitigate risks or effects. Mitigate is not militate (to work against)." },
      { w: "scalable", pos: "adjective", def: "Able to grow or be expanded easily.", ex: "A *scalable* solution works for ten users and for ten thousand.", note: "Noun: scalability." }
    ]
  },
  {
    date: "2026-10-15",
    theme: "character and attitude",
    words: [
      { w: "reluctant", pos: "adjective", def: "Unwilling and hesitant to do something.", ex: "He was *reluctant* to share his plans.", note: "reluctant + to-infinitive. Adverb: reluctantly." },
      { w: "resilient", pos: "adjective", def: "Able to recover quickly from difficulties.", ex: "Children are often more *resilient* than adults expect.", note: "Noun: resilience." },
      { w: "meticulous", pos: "adjective", def: "Showing great attention to detail; very careful.", ex: "She is *meticulous* about checking every number.", note: "Mostly a compliment, though it can hint at being a little fussy." },
      { w: "candid", pos: "adjective", def: "Honest and direct, even when the truth is uncomfortable.", ex: "Thank you for being so *candid* with me.", note: "Synonym: frank. Noun: candour (British)." },
      { w: "sceptical", pos: "adjective", def: "Doubtful that something is true or will work.", ex: "I am *sceptical* about claims that sound too good to be true.", note: "British sceptical, American skeptical. Noun: scepticism." },
      { w: "empathetic", pos: "adjective", def: "Able to understand and share another person's feelings.", ex: "A good manager is *empathetic* without being a pushover.", note: "Noun: empathy. Sympathy is feeling sorry for someone; empathy is feeling with them." },
      { w: "pragmatic", pos: "adjective", def: "Dealing with things sensibly and realistically.", ex: "We need a *pragmatic* solution, not a perfect one.", note: "Opposite: idealistic. Noun: pragmatism." },
      { w: "tenacious", pos: "adjective", def: "Determined and unwilling to give up.", ex: "A *tenacious* reporter, she followed the story for years.", note: "Noun: tenacity. More positive than stubborn." },
      { w: "humble", pos: "adjective", def: "Not proud; not thinking you are better than other people.", ex: "Despite his success, he remained *humble*.", note: "'In my humble opinion' is usually said with a smile." },
      { w: "spontaneous", pos: "adjective", def: "Done naturally and without planning.", ex: "The trip was completely *spontaneous*.", note: "Noun: spontaneity. Adverb: spontaneously." }
    ]
  },
  {
    date: "2026-10-16",
    theme: "cause, effect and change",
    words: [
      { w: "hinder", pos: "verb", def: "To make it difficult for something to happen or progress.", ex: "Poor weather *hindered* the rescue effort.", note: "Noun: hindrance. Synonyms: obstruct, impede." },
      { w: "facilitate", pos: "verb", def: "To make a process or action easier.", ex: "A shared folder *facilitates* collaboration.", note: "A facilitator leads a workshop or discussion." },
      { w: "trigger", pos: "verb", def: "To cause something to start, often suddenly.", ex: "The announcement *triggered* a wave of protests.", note: "Also a noun: a trigger for stress or allergies." },
      { w: "stem from", pos: "phrasal verb", def: "To originate in or be caused by something.", ex: "Her anxiety *stems from* a bad experience at school.", note: "Always 'stem from', never 'stem of'." },
      { w: "fluctuate", pos: "verb", def: "To rise and fall irregularly.", ex: "Prices *fluctuate* depending on the season.", note: "Noun: fluctuation. Picture waves." },
      { w: "escalate", pos: "verb", def: "To become more serious or intense.", ex: "What began as a small argument soon *escalated*.", note: "Noun: escalation. Opposite: de-escalate." },
      { w: "gradual", pos: "adjective", def: "Happening slowly, in small steps.", ex: "There has been a *gradual* improvement in his spelling.", note: "Adverb: gradually. Opposites: sudden, abrupt." },
      { w: "abrupt", pos: "adjective", def: "Sudden and unexpected, often unpleasantly so.", ex: "The meeting came to an *abrupt* end.", note: "Also describes curt speech: an abrupt reply." },
      { w: "ramification", pos: "noun", def: "A complicated consequence of an action.", ex: "The legal *ramifications* of the decision are still unclear.", note: "Usually plural: serious, far-reaching or legal ramifications." },
      { w: "ensue", pos: "verb", def: "To happen afterwards, especially as a result.", ex: "A heated debate *ensued*.", note: "Formal. Adjective: ensuing (the ensuing chaos)." }
    ]
  },
  {
    date: "2026-10-17",
    theme: "phrasal verbs for fluent writing",
    words: [
      { w: "come across", pos: "phrasal verb", def: "To give a certain impression; also, to find something by chance.", ex: "She *comes across* as confident but not arrogant.", note: "come across as + adjective. Also: I came across an old photo." },
      { w: "carry out", pos: "phrasal verb", def: "To perform or complete a task, test or plan.", ex: "We will *carry out* a survey next month.", note: "Formal synonym: conduct. Carry out research, an experiment, orders." },
      { w: "point out", pos: "phrasal verb", def: "To draw attention to a fact.", ex: "He *pointed out* a mistake in the report.", note: "point something out / point out that + clause." },
      { w: "bring up", pos: "phrasal verb", def: "To mention a topic or start discussing it.", ex: "Please don't *bring up* politics at dinner.", note: "Also: to bring up a child (to raise one)." },
      { w: "figure out", pos: "phrasal verb", def: "To understand or solve something by thinking.", ex: "I cannot *figure out* why the code fails.", note: "Informal. More formal: work out, determine." },
      { w: "look into", pos: "phrasal verb", def: "To investigate something.", ex: "The team will *look into* the complaint.", note: "Inseparable: look into it, never 'look it into'." },
      { w: "get across", pos: "phrasal verb", def: "To succeed in communicating an idea.", ex: "It is hard to *get across* humour in an email.", note: "get your message across. Compare 'convey' (Monday)." },
      { w: "run into", pos: "phrasal verb", def: "To meet by chance, or to encounter a problem.", ex: "We *ran into* some problems with the budget.", note: "Also: I ran into an old friend at the station." },
      { w: "cut back on", pos: "phrasal verb", def: "To reduce the amount of something.", ex: "I am trying to *cut back on* sugar.", note: "Noun: cutbacks, usually plural (budget cutbacks)." },
      { w: "back up", pos: "phrasal verb", def: "To support a claim with evidence, or to make a copy of data.", ex: "Can you *back up* that statement with numbers?", note: "Noun/adjective: backup. Compare 'substantiate' (Tuesday)." }
    ]
  },
  {
    date: "2026-10-18",
    theme: "connectors and useful phrases",
    words: [
      { w: "on the whole", pos: "phrase", def: "Generally; taking everything into account.", ex: "*On the whole*, the project went well.", note: "Place it at the start of a sentence, followed by a comma." },
      { w: "to a certain extent", pos: "phrase", def: "Partly, but not completely.", ex: "I agree with you *to a certain extent*.", note: "Variants: to some extent, to a large extent." },
      { w: "in light of", pos: "phrase", def: "Because of new information; considering.", ex: "*In light of* the results, we changed our approach.", note: "Also 'in the light of'. Formal." },
      { w: "as opposed to", pos: "phrase", def: "In contrast with.", ex: "He prefers e-books *as opposed to* printed ones.", note: "Followed by a noun or an -ing form." },
      { w: "with regard to", pos: "phrase", def: "Concerning; about.", ex: "*With regard to* your question, the answer is yes.", note: "Singular 'regard'. 'With regards to' is a common mistake. Short alternative: regarding." },
      { w: "by contrast", pos: "phrase", def: "Used to show a clear difference between two things.", ex: "Sales rose in Europe. *By contrast*, they fell in Asia.", note: "Synonyms: in contrast, on the other hand. Sentence start plus comma." },
      { w: "for the sake of", pos: "phrase", def: "In order to benefit or achieve something.", ex: "Let us not argue *for the sake of* arguing.", note: "Also: for the sake of argument; for your sake." },
      { w: "in the long run", pos: "phrase", def: "Over a long period of time; eventually.", ex: "Learning ten words a day pays off *in the long run*.", note: "Opposite: in the short term." },
      { w: "all things considered", pos: "phrase", def: "Taking everything into account.", ex: "*All things considered*, it was a good week.", note: "Perfect for conclusions." },
      { w: "it goes without saying", pos: "phrase", def: "It is so obvious that you hardly need to say it.", ex: "*It goes without saying* that you should proofread.", note: "Often introduces something the speaker wants to emphasise anyway." }
    ]
  }
];

const CORRECTIONS = [
  {
    date: "2026-10-12",
    wrong: "You are *a english* teacher.",
    right: "You are *an English* teacher.",
    rule: "Languages and nationalities always start with a capital letter: English, German, French. And 'an' goes before a vowel sound."
  },
  {
    date: "2026-10-12",
    wrong: "...to *an higher* level.",
    right: "...to *a higher* level.",
    rule: "'A' or 'an' depends on the sound, not the spelling. 'Higher' starts with the consonant sound /h/, so use 'a'. Compare: an hour (silent h), a house."
  },
  {
    date: "2026-10-12",
    wrong: "Try to *get* me and my writing to a higher level.",
    right: "Try to *take* me and my writing to a higher level.",
    rule: "The natural collocation is 'take someone to a higher level'. 'Get' is too vague here. Another good option: 'help me improve my writing'."
  },
  {
    date: "2026-10-12",
    wrong: "Please *create also* a vocabulary tool.",
    right: "Please *also create* a vocabulary tool.",
    rule: "'Also' goes before the main verb (She also speaks Spanish) or after 'be' (He is also a teacher). Not after the verb."
  },
  {
    date: "2026-10-12",
    wrong: "A *per-day 10 new words* task.",
    right: "A *daily* task of *10 new words per day*.",
    rule: "'Per' comes after the quantity: 10 words per day, 50 per week. Before a noun, 'daily' is the neat adjective: a daily task."
  },
  {
    date: "2026-10-12",
    wrong: "...so that new words *are getting into* my mind.",
    right: "...so that new words *stick in* my mind.",
    rule: "Words stick in your mind (or memory). After 'so that', use the simple present for a general result, not the continuous."
  },
  {
    date: "2026-10-12",
    wrong: "A *vocabluary* tool.",
    right: "A *vocabulary* tool.",
    rule: "Spelling: c-a-b-u-l-a-r-y. There is no 'l' before the 'u'. Trick: vo-CAB-u-lary, a taxi (cab) in the middle."
  },
  {
    date: "2026-10-12",
    wrong: "...as *an js/html* page.",
    right: "...as *an HTML/JS* page.",
    rule: "Choose 'a' or 'an' by the first sound: an HTML page (aitch), a JS file (jay). Write acronyms in capitals: HTML, JS, or say JavaScript."
  },
  {
    date: "2026-10-12",
    wrong: "...host on *github pages*.",
    right: "...host on *GitHub Pages*.",
    rule: "Product names keep the brand's capitals: GitHub (capital G and H) and GitHub Pages."
  },
  {
    date: "2026-10-12",
    wrong: "The *faults* I made.",
    right: "The *mistakes* I made.",
    rule: "A mistake is something you get wrong (a spelling mistake). 'Fault' is about blame (It's my fault) or a defect in a machine. You make mistakes."
  },
  {
    date: "2026-10-12",
    wrong: "...*in the past days*.",
    right: "...*over the past few days*.",
    rule: "Say 'over the past few days' or 'in recent days'. 'The past days' on its own sounds unnatural."
  }
];
