export const kanjiConcepts = [
  {
    title: "1. Pictographic Foundations",
    description: "Many foundational Kanji are pictograms (象形文字, shōkeimoji) derived from drawings of physical objects. Understanding these origins makes remembering them significantly easier.",
    examples: [
      { kanji: "日", meaning: "Sun / Day", origin: "Originally a circle with a dot in the center representing the sun." },
      { kanji: "月", meaning: "Moon / Month", origin: "A crescent moon shape." },
      { kanji: "木", meaning: "Tree / Wood", origin: "A vertical trunk with horizontal branches and sweeping roots." },
      { kanji: "山", meaning: "Mountain", origin: "Three peaks of a mountain range." }
    ]
  },
  {
    title: "2. Radicals (部首, Bushu)",
    description: "Complex Kanji are built by combining simpler components called Radicals. The radical often provides a semantic key (meaning) or phonetic hint (sound).",
    points: [
      "Semantic Keys: e.g., The 'water' radical 氵 in 海 (sea), 泳 (swim), 泣 (cry).",
      "Positioning: Radicals can appear on the left (偏, hen), right (旁, tsukuri), top (冠, kanmuri), bottom (脚, ashi), or enclose the character (構, kamae).",
      "Knowing the 214 historical radicals allows you to deconstruct and easily memorize complex characters."
    ]
  },
  {
    title: "3. Onyomi vs. Kunyomi",
    description: "Most Kanji have at least two readings depending on the context.",
    points: [
      "Onyomi (音読み): The 'Chinese reading' adapted from historical Chinese pronunciations. Typically used when the Kanji is combined with other Kanji to form a compound word (熟語, Jukugo). Written in Katakana in dictionaries.",
      "Kunyomi (訓読み): The native 'Japanese reading'. Typically used when the Kanji stands alone as an independent word, or is followed by hiragana suffixes (Okurigana) to form a verb or adjective. Written in Hiragana in dictionaries."
    ]
  },
  {
    title: "4. Stroke Order Rules (筆順, Hitsujun)",
    description: "Writing Kanji with the correct stroke order ensures balanced proportions, improves legibility, and helps you memorize the character muscle-memory.",
    points: [
      "Top to Bottom: E.g., 三 (one, two, three).",
      "Left to Right: E.g., 川 (river).",
      "Horizontal before Vertical: E.g., 十 (ten).",
      "Center before Sides: E.g., 小 (small) or 水 (water).",
      "Enclosures before Inside: E.g., 国 (country) - draw the outside box, fill the inside, then close the bottom last."
    ]
  },
  {
    title: "5. Kanji Compounds (熟語, Jukugo)",
    description: "Jukugo are words composed of two or more Kanji. Learning these compounds exponentially expands your vocabulary.",
    points: [
      "Typically use the Onyomi reading.",
      "Example: 学 (study: gaku) + 生 (life: sei) = 学生 (student: gakusei).",
      "Example: 火 (fire: ka) + 山 (mountain: zan) = 火山 (volcano: kazan)."
    ]
  }
];
