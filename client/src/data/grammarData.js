// =========================================================================
// SajiloHub — Grammar Data Store
// Level-specific grammar points for JLPT N5, N4, N3, N2, and N1.
// Strictly aligned with official syllabus guidelines. No overlap.
// =========================================================================

export const grammarData = {
  n5: [
    {
      id: 'n5-wa-desu',
      pattern: '〜は〜です',
      romaji: 'wa ... desu',
      meaning: 'A is B (Topic Marker & Identification)',
      explanation: 'Used to state that A is B. "は" marks the topic of the sentence, and "です" acts as the polite copula (to be).',
      formula: 'Noun A + は + Noun B + です',
      examples: [
        {
          japanese: '私は学生です。',
          english: 'I am a student.',
        },
        {
          japanese: 'これは日本のご飯です。',
          english: 'This is Japanese food.',
        }
      ]
    },
    {
      id: 'n5-ga-arimasu-imasu',
      pattern: '〜が あります / います',
      romaji: 'ga arimasu / imasu',
      meaning: 'There is / I have (Existence)',
      explanation: 'Used to express the existence of objects (あります) or living beings like people and animals (います).',
      formula: 'Noun + が + あります (inanimate) / います (animate)',
      examples: [
        {
          japanese: '机の上に本があります。',
          english: 'There is a book on the desk.',
        },
        {
          japanese: '教室に先生がいます。',
          english: 'There is a teacher in the classroom.',
        }
      ]
    },
    {
      id: 'n5-te-kudasai',
      pattern: '〜てください',
      romaji: 'te kudasai',
      meaning: 'Please do (Polite Request)',
      explanation: 'Used to make a polite request or demand of someone. Constructed using the -te form of a verb.',
      formula: 'Verb [Te-form] + ください',
      examples: [
        {
          japanese: 'ここに名前を書いてください。',
          english: 'Please write your name here.',
        },
        {
          japanese: 'ゆっくり話してください。',
          english: 'Please speak slowly.',
        }
      ]
    },
    {
      id: 'n5-tai-desu',
      pattern: '〜たいです',
      romaji: 'tai desu',
      meaning: 'Want to do (Desire)',
      explanation: 'Expresses the speaker\'s desire to perform a certain action. Only used for first-person (I) or asking direct questions (you).',
      formula: 'Verb [Masu-stem] + たいです',
      examples: [
        {
          japanese: '日本に行きたいです。',
          english: 'I want to go to Japan.',
        },
        {
          japanese: 'お茶を飲みたいです。',
          english: 'I want to drink green tea.',
        }
      ]
    },
    {
      id: 'n5-he-ikimasu',
      pattern: '〜へ 行きます / 来ます / 帰ります',
      romaji: 'he ikimasu / kimasu / kaerimasu',
      meaning: 'Go / Come / Return to (Directional Goal)',
      explanation: 'The particle "へ" (pronounced "e") indicates the direction or destination of movement verbs.',
      formula: 'Place Noun + へ + 行きます / 来ます / 帰ります',
      examples: [
        {
          japanese: '明日、学校へ行きます。',
          english: 'I am going to school tomorrow.',
        },
        {
          japanese: '私はうちへ帰ります。',
          english: 'I will return home.',
        }
      ]
    }
  ],
  n4: [
    {
      id: 'n4-te-mo-ii-desu',
      pattern: '〜てもいいです',
      romaji: 'te mo ii desu',
      meaning: 'May I / You may (Permission)',
      explanation: 'Used to ask for or grant permission to do something.',
      formula: 'Verb [Te-form] + もいいです',
      examples: [
        {
          japanese: 'ここで写真を撮ってもいいですか。',
          english: 'May I take a picture here?',
        },
        {
          japanese: 'この辞書を使ってもいいですよ。',
          english: 'You may use this dictionary.',
        }
      ]
    },
    {
      id: 'n4-te-wa-ikemasen',
      pattern: '〜てはいけません',
      romaji: 'te wa ikemasen',
      meaning: 'Must not / Forbidden (Prohibition)',
      explanation: 'Used to state a strong rule or prohibition. You must not do this action.',
      formula: 'Verb [Te-form] + はいけません',
      examples: [
        {
          japanese: '教室で携帯電話を使ってはいけません。',
          english: 'You must not use mobile phones in the classroom.',
        },
        {
          japanese: 'ここに車を止めてはいけません。',
          english: 'You must not park your car here.',
        }
      ]
    },
    {
      id: 'n4-ta-koto-ga-arimasu',
      pattern: '〜たことがあります',
      romaji: 'ta koto ga arimasu',
      meaning: 'Have done before (Past Experience)',
      explanation: 'Indicates that the speaker has had the experience of doing something in the past.',
      formula: 'Verb [Ta-form] + ことがあります',
      examples: [
        {
          japanese: '富士山に登ったことがあります。',
          english: 'I have climbed Mt. Fuji before.',
        },
        {
          japanese: '日本の歌を歌ったことがありますか。',
          english: 'Have you ever sung a Japanese song?',
        }
      ]
    },
    {
      id: 'n4-hou-ga-ii-desu',
      pattern: '〜ほうがいいです',
      romaji: 'hou ga ii desu',
      meaning: 'Had better / Should (Giving Advice)',
      explanation: 'Used when advising someone to choose a certain course of action. Positive advice uses Ta-form; negative advice uses Nai-form.',
      formula: 'Verb [Ta-form / Nai-form] + ほうがいいです',
      examples: [
        {
          japanese: '毎日野菜を食べたほうがいいです。',
          english: 'You should eat vegetables every day.',
        },
        {
          japanese: 'あまり無理をしないほうがいいですよ。',
          english: 'You had better not overdo things.',
        }
      ]
    },
    {
      id: 'n4-yasui-nikui',
      pattern: '〜やすい / 〜にくい',
      romaji: 'yasui / nikui',
      meaning: 'Easy to do / Hard to do',
      explanation: 'Expresses that an action is easy or difficult to perform, or that something has a tendency to occur.',
      formula: 'Verb [Masu-stem] + やすい / にくい',
      examples: [
        {
          japanese: 'この漢字は書きやすいです。',
          english: 'This kanji is easy to write.',
        },
        {
          japanese: '日本語の新聞は読みにくいです。',
          english: 'Japanese newspapers are hard to read.',
        }
      ]
    }
  ],
  n3: [
    {
      id: 'n3-teiru-tokoro-desu',
      pattern: '〜ているところです',
      romaji: 'teiru tokoro desu',
      meaning: 'In the middle of doing (Specific Instant)',
      explanation: 'Emphasizes that you are right in the middle of performing a specific action at this exact moment.',
      formula: 'Verb [Te-form] + いるところです',
      examples: [
        {
          japanese: '今、レポートを書いているところです。',
          english: 'I am right in the middle of writing a report now.',
        },
        {
          japanese: '出かける準備をしているところだから、少し待って。',
          english: 'I am in the middle of getting ready to go out, so wait a bit.',
        }
      ]
    },
    {
      id: 'n3-o-hajime-to-shite',
      pattern: '〜をはじめ（として）',
      romaji: 'o hajime (to shite)',
      meaning: 'Starting with / Primary example',
      explanation: 'Used to introduce a primary representative example followed by other similar items.',
      formula: 'Noun + をはじめ / をはじめとして (＋のNoun)',
      examples: [
        {
          japanese: 'この学校には、ネパールをはじめ、多くの国からの留学生がいます。',
          english: 'There are foreign students from many countries at this school, starting with Nepal.',
        },
        {
          japanese: '社長をはじめとする役員が出席しました。',
          english: 'The executives attended, starting with the company president.',
        }
      ]
    },
    {
      id: 'n3-wake-ga-nai',
      pattern: '〜わけがない',
      romaji: 'wake ga nai',
      meaning: 'There is no way that / Impossible',
      explanation: 'Expresses strong subjective conviction that something is impossible or cannot be the case.',
      formula: 'Verb/Adj [Short-form] + わけがない (Na-Adj uses な, Noun uses の/である)',
      examples: [
        {
          japanese: '彼が犯人のわけがない。親切な人だから。',
          english: 'There is no way he is the culprit. Because he is a kind person.',
        },
        {
          japanese: 'そんな難しい問題、私ができるわけがない。',
          english: 'There is no way I can solve such a difficult problem.',
        }
      ]
    },
    {
      id: 'n3-tabi-ni',
      pattern: '〜たびに',
      romaji: 'tabi ni',
      meaning: 'Every time / Whenever',
      explanation: 'States that every time action A occurs, action B happens as a natural consequence.',
      formula: 'Verb [Dictionary form] / Noun + の + たびに',
      examples: [
        {
          japanese: 'この写真を見るたびに、故郷を思い出します。',
          english: 'Every time I look at this photo, I remember my hometown.',
        },
        {
          japanese: '彼は旅行のたびに、珍しいお土産を買ってくる。',
          english: 'Whenever he travels, he buys unusual souvenirs.',
        }
      ]
    },
    {
      id: 'n3-you-ni-suru',
      pattern: '〜ようにする',
      romaji: 'you ni suru',
      meaning: 'Make an effort to / Try to do',
      explanation: 'Indicates that the speaker is consciously making an effort to form a habit or perform an action.',
      formula: 'Verb [Dictionary form / Nai-form] + ようにする',
      examples: [
        {
          japanese: '健康のために、毎日野菜を食べるようにしています。',
          english: 'I try to make an effort to eat vegetables every day for my health.',
        },
        {
          japanese: '夜遅くは、コーヒーを飲まないようにしてください。',
          english: 'Please try not to drink coffee late at night.',
        }
      ]
    }
  ],
  n2: [
    {
      id: 'n2-tsutsu-aru',
      pattern: '〜つつある',
      romaji: 'tsutsu aru',
      meaning: 'In the process of (Continuous Change)',
      explanation: 'Indicates that a gradual, ongoing change is currently in progress. Often used in formal or written contexts.',
      formula: 'Verb [Masu-stem] + つつある',
      examples: [
        {
          japanese: '少子化の影響で、学校の数が減少しつつある。',
          english: 'Due to the declining birthrate, the number of schools is in the process of decreasing.',
        },
        {
          japanese: '地球の温暖化は深刻化しつつあります。',
          english: 'Global warming is in the process of becoming more severe.',
        }
      ]
    },
    {
      id: 'n2-megutte',
      pattern: '〜をめぐって',
      romaji: 'o megutte',
      meaning: 'Concerning / Surrounding (Dispute/Opinion)',
      explanation: 'Used when a group of people discuss, argue, or hold varying opinions concerning a central issue.',
      formula: 'Noun + をめぐって / をめぐる + Noun',
      examples: [
        {
          japanese: '新しいダムの建設をめぐって、激しい議論が続いている。',
          english: 'Fierce debates continue surrounding the construction of the new dam.',
        },
        {
          japanese: '親の遺産をめぐる争いは、解決に時間がかかる。',
          english: 'Disputes concerning parents\' inheritance take time to resolve.',
        }
      ]
    },
    {
      id: 'n2-tomonatte',
      pattern: '〜にともなって',
      romaji: 'ni tomonatte',
      meaning: 'Along with / As a consequence of',
      explanation: 'Indicates that as one change occurs, another change happens simultaneously. "に伴って".',
      formula: 'Noun / Verb [Dictionary form] + にともなって / にともなう + Noun',
      examples: [
        {
          japanese: '携帯電話の普及にともなって、公衆電話が姿を消した。',
          english: 'Along with the spread of mobile phones, public payphones disappeared.',
        },
        {
          japanese: '経済の成長にともない、大気汚染も深刻になった。',
          english: 'Along with economic growth, air pollution also became severe.',
        }
      ]
    },
    {
      id: 'n2-kara-ni-wa',
      pattern: '〜からには',
      romaji: 'kara ni wa',
      meaning: 'Now that / Since (Strong Determination/Duty)',
      explanation: 'Expresses that since a certain circumstance is true, it is natural or necessary to act with determination.',
      formula: 'Verb / Adj [Short form] + からには (Noun/Na-Adj uses である)',
      examples: [
        {
          japanese: '試合に出るからには、絶対に勝ちたい。',
          english: 'Now that I am participating in the match, I absolutely want to win.',
        },
        {
          japanese: '約束したからには、どんなことがあっても守るべきだ。',
          english: 'Now that you have made a promise, you should keep it no matter what.',
        }
      ]
    },
    {
      id: 'n2-gimi',
      pattern: '〜ぎみ',
      romaji: 'gimi',
      meaning: 'Tending to be / Feeling slightly (Negative Tendency)',
      explanation: 'Used to express that someone is currently in a state that feels slightly negative (e.g., tired, sick, nervous). "気味".',
      formula: 'Verb [Masu-stem] / Noun + ぎみ',
      examples: [
        {
          japanese: '最近、仕事が忙しくて寝不足ぎみです。',
          english: 'Lately, I have been feeling slightly sleep-deprived due to busy work.',
        },
        {
          japanese: '風邪ぎみなので、今日は早く寝ることにします。',
          english: 'I have a slight cold (feeling cold-ish), so I will go to bed early today.',
        }
      ]
    }
  ],
  n1: [
    {
      id: 'n1-gatera',
      pattern: '〜がてら',
      romaji: null, // Advanced level does not require romaji
      meaning: 'While doing (Coincidental Secondary Action)',
      explanation: 'Used when doing action A, you utilize that opportunity to also do action B. Action A is the main movement.',
      formula: 'Noun / Verb [Masu-stem] + がてら',
      examples: [
        {
          japanese: '夕方の散歩がてら、近くのポストに手紙を出してきた。',
          english: 'While taking an evening walk, I also mailed a letter at the nearby mailbox.',
        },
        {
          japanese: 'お見舞いがてら、東京観光をしてきました。',
          english: 'While visiting someone in the hospital, I also did some sightseeing in Tokyo.',
        }
      ]
    },
    {
      id: 'n1-zu-ni-wa-sumanai',
      pattern: '〜ずにはすまない',
      romaji: null,
      meaning: 'Must / Cannot escape without doing',
      explanation: 'Expresses that under social norms or moral obligation, one absolutely must perform an action. Double negative: cannot avoid.',
      formula: 'Verb [Nai-stem] + ずにはすまない (例外: する -> せずにはすまない)',
      examples: [
        {
          japanese: 'これほど迷惑をかけたのだから、直接謝らずにはすまないだろう。',
          english: 'Since we caused this much trouble, we must apologize to them directly (cannot avoid apologizing).',
        },
        {
          japanese: '重大な過失があった以上、彼は辞任せずにはすまない。',
          english: 'Since there was a serious mistake, he cannot escape resigning.',
        }
      ]
    },
    {
      id: 'n1-kiwamarina',
      pattern: '〜極まりない',
      romaji: null,
      meaning: 'Extremely / Limits of (Negative Evaluation)',
      explanation: 'Emphasizes that something is in an extreme, intolerable state. Primarily used for negative assessments.',
      formula: 'Na-Adjective [Stem] (＋きわまりない) / I-Adjective [Dictionary form] (＋こときわまりない)',
      examples: [
        {
          japanese: '目上の人に対してそのような言葉遣いをするのは、無礼極まりない。',
          english: 'Using such language toward a superior is extremely rude (the height of insolence).',
        },
        {
          japanese: '危険極まりない計画だ。',
          english: 'It is an extremely dangerous plan.',
        }
      ]
    },
    {
      id: 'n1-kawakiri-ni',
      pattern: '〜を皮切りに（して）',
      romaji: null,
      meaning: 'Starting with (Active and Expanding Development)',
      explanation: 'Indicates that one representative action triggers a sequence of similar active developments or expansions.',
      formula: 'Noun + を皮切りに / を皮切りにして',
      examples: [
        {
          japanese: '東京でのコンサートを皮切りに、彼のワールドツアーが始まった。',
          english: 'Starting with the concert in Tokyo, his world tour commenced.',
        },
        {
          japanese: '彼の一言を皮切りに、会議室全体で激しい議論が巻き起こった。',
          english: 'Starting with his comment, a heated debate erupted throughout the conference room.',
        }
      ]
    },
    {
      id: 'n1-sura',
      pattern: '〜すら',
      romaji: null,
      meaning: 'Even (Extreme Highlight)',
      explanation: 'Used to present an extreme example to emphasize that other obvious situations are even more so. Synonymous with "さえ".',
      formula: 'Noun (＋助詞) + すら',
      examples: [
        {
          japanese: '忙しすぎて、自分の名前を書く時間すらありません。',
          english: 'I am so busy that I don\'t even have time to write my own name.',
        },
        {
          japanese: '専門家ですら解決できない問題なのだから、素人には無理だ。',
          english: 'Since it is a problem that even experts cannot solve, it is impossible for amateurs.',
        }
      ]
    }
  ]
};
