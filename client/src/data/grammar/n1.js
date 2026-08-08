export const n1Lessons = [
  {
    lessonNum: 1,
    title: 'Opportunities & Inescapable Actions',
    description: 'High-level opportunity and obligation indicators.',
    topics: [
      {
        id: 'n1-l1-t1',
        pattern: '〜がてら',
        pronunciation: 'gatera',
        meaning: 'While / On the same occasion / Taking the opportunity',
        isImplemented: true,
        whenAndWhy: 'Used when you have a primary purpose, but you take the opportunity to do a secondary action at the same time. The actions usually involve movement (going, walking, driving).',
        explanation: 'Attach がてら (gatera) to the masu-stem of a verb or directly to an action noun. The action before がてら is the main purpose, and the action after is the secondary "bonus" action you decided to do since you were already moving.',
        formation: {
          formula: 'Noun / Verb (masu-stem) + がてら',
          rules: [
            'Nouns: Action Noun + がてら (e.g. 散歩がてら - while on a walk)',
            'Verbs: masu-stem + がてら (e.g. 買い物がてら - while shopping)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Gatera Form', 'Translation'],
          rows: [
            ['Noun', '散歩 (sanpo)', '散歩がてら', 'While taking a walk'],
            ['Noun', '買い物 (kaimono)', '買い物がてら', 'While shopping'],
            ['Verb', '遊びに行く', '遊びに行きがてら', 'While going to play/visit']
          ]
        },
        notes: 'In N1, this is often compared to 〜かたがた (N1 L3) and 〜ついでに (N3). がてら strongly implies movement (going somewhere). The noun is almost always 散歩, 買い物, or 遊び.',
        mistakes: 'Do not use this for stationary actions. (✕ テレビを見がてら、ご飯を食べる - Wrong. Use ながら).',
        comparison: {
          similarPattern: '〜ついでに (While at it - N3)',
          difference: 'ついでに can be used for anything (While throwing out the trash, check the mail). がてら is slightly more formal and almost exclusively used with movement/going out.'
        },
        memoryTips: 'Gatera sounds like "get there". "While I try to get there, I will also do X."',
        examples: [
          { japanese: '散歩がてら、コンビニで牛乳を買ってきた。', english: 'While taking a walk, I bought milk at the convenience store.', romaji: 'Sanpo gatera, konbini de gyuunyuu o katte kita.' },
          { japanese: '買い物がてら、新しくできたカフェに寄ってみた。', english: 'While shopping, I dropped by the newly opened cafe.', romaji: 'Kaimono gatera, atarashiku dekita kafe ni yotte mita.' },
          { japanese: '友達の家に遊びに行きがてら、ケーキを買った。', english: 'While going to visit my friend\'s house, I bought a cake.', romaji: 'Tomodachi no ie ni asobi ni ikigatera, keeki o katta.' },
          { japanese: '図書館へ本を返しに行きがてら、公園を散歩した。', english: 'While going to return books to the library, I took a walk in the park.', romaji: 'Toshokan e hon o kaeshi ni ikigatera, kouen o sanpo shita.' },
          { japanese: '仕事の報告がてら、彼と食事をした。', english: 'Taking the opportunity to report on work, I had a meal with him.', romaji: 'Shigoto no houkoku gatera, kare to shokuji o shita.' },
          { japanese: '花見がてら、ちょっと歩きましょうか。', english: 'Shall we walk a bit while looking at the cherry blossoms?', romaji: 'Hanami gatera, chotto arukumashou ka.' },
          { japanese: 'ゴミ捨てがてら、星を見ていた。', english: 'While throwing away the trash, I was looking at the stars.', romaji: 'Gomisute gatera, hoshi o mite ita.' },
          { japanese: 'ドライブがてら、海まで行こう。', english: 'Let\'s go to the sea while we are on a drive.', romaji: 'Doraibu gatera, umi made ikou.' },
          { japanese: '犬の散歩がてら、近所の人に挨拶した。', english: 'While walking the dog, I greeted the neighbors.', romaji: 'Inu no sanpo gatera, kinjo no hito ni aisatsu shita.' },
          { japanese: '実家に帰りがてら、温泉に寄るつもりだ。', english: 'While returning to my parents\' house, I intend to stop by a hot spring.', romaji: 'Jikka ni kaerigatera, onsen ni yoru tsumori da.' }
        ],
        conversation: {
          context: 'Suggesting a plan to a friend.',
          dialogue: [
            { speaker: 'ケン', japanese: 'ちょっと外の空気を吸いたいな。', english: 'I want to get some fresh air outside.' },
            { speaker: 'マリー', japanese: 'じゃあ、散歩がてら駅前のパン屋に行かない？', english: 'Then, why don\'t we go to the bakery in front of the station while taking a walk?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "While shopping (買い物)..."',
            'Translate: "While taking a walk (散歩)..."',
            'Which is more natural? (テレビを見がてら / 散歩がてら)'
          ],
          answers: [
            '買い物がてら (Kaimono gatera)',
            '散歩がてら (Sanpo gatera)',
            '散歩がてら (because がてら requires an action involving going out/movement).'
          ]
        },
        jlptQuestions: [
          {
            question: '日曜日（にちようび）、車（くるま）の運転（うんてん）の練習（れんしゅう）___遠（とお）くのスーパーまで買（か）い物（もの）に行った。',
            options: ['ながら', 'がてら', 'のせいで', 'おかげで'],
            correctIndex: 1,
            explanation: 'The main purpose is driving practice. The secondary "bonus" action is shopping far away. 練習 (noun) + がてら.'
          },
          {
            question: '病院（びょういん）へ___がてら、郵便局（ゆうびんきょく）に寄（よ）って手紙（てがみ）を出（だ）した。',
            options: ['行く', '行き', '行って', '行った'],
            correctIndex: 1,
            explanation: 'Verbs must be in the masu-stem before がてら. 行く -> 行き + がてら.'
          }
        ],
        realLifeUsage: 'A very natural and common phrase for running errands in Japan.'
      },
      {
        id: 'n1-l1-t2',
        pattern: '〜ずにはすまない',
        pronunciation: 'zu ni wa sumanai',
        meaning: 'Must do (to settle things) / Cannot avoid',
        isImplemented: true,
        whenAndWhy: 'Used when common sense, social rules, or your own guilt dictates that you MUST do something (like apologize or pay). If you do not do it, the situation will not be settled.',
        explanation: 'Attach ずにはすまない to the nai-stem of a verb (replace "nai" with "zu"). すまない (sumanai) means "not settled/finished". So, "Without doing X, the matter is not settled."',
        formation: {
          formula: 'Verb (nai-stem) + ずにはすまない',
          rules: [
            'Group 1 & 2: nai-stem + ずにはすまない (e.g. 謝らずにはすまない - must apologize)',
            'Group 3 (する): せずにはすまない (e.g. 弁償せずにはすまない - must compensate)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Nai-stem', 'Zu ni wa sumanai Form', 'Translation'],
          rows: [
            ['謝る (ayamaru)', '謝ら(ない)', '謝らずにはすまない', 'Must apologize (or it won\'t be settled)'],
            ['する (suru)', 'せ(ず)', 'せずにはすまない', 'Must do (exception for suru)'],
            ['払う (harau)', '払わ(ない)', '払わずにはすまない', 'Must pay']
          ]
        },
        notes: 'In casual or less literary contexts, you will see 〜ないではすまない (nai de wa sumanai). They mean exactly the same thing. ず (zu) is just the classical, formal version of ない (nai).',
        mistakes: 'Do not use this for personal desires. (✕ ご飯を食べずにはすまない - Wrong. You eat because you are hungry, not to settle a social obligation).',
        comparison: {
          similarPattern: '〜わけにはいかない (Cannot afford not to - N2)',
          difference: 'わけにはいかない is a general sense of duty. ずにはすまない is strictly about "settling an incident or conflict" (If I broke your window, I must pay for it, or the conflict won\'t end).'
        },
        memoryTips: 'Zu = without. Sumanai = won\'t be settled. Without doing it, the problem won\'t go away.',
        examples: [
          { japanese: '他人の車を壊してしまったのだから、弁償せずにはすまない。', english: 'Since I broke someone else\'s car, I cannot avoid compensating them (I must pay).', romaji: 'Tanin no kuruma o kowashite shimatta no da kara, benshou sezu ni wa sumanai.' },
          { japanese: 'あれほどひどいことを言ったのだから、謝らずにはすまない。', english: 'Since I said such a terrible thing, I cannot get away without apologizing.', romaji: 'Are hodo hidoi koto o itta no da kara, ayamarazu ni wa sumanai.' },
          { japanese: '規則を破ったのだから、罰を受けずにはすまないだろう。', english: 'Since you broke the rules, you probably cannot avoid receiving a punishment.', romaji: 'Kisoku o yabutta no da kara, batsu o ukezu ni wa sumanai darou.' },
          { japanese: '大きなミスをしたので、辞表を出さずにはすまない。', english: 'Because I made a huge mistake, I cannot avoid submitting my resignation.', romaji: 'Ookina misu o shita node, jihyou o dasazu ni wa sumanai.' },
          { japanese: '借金をしたのだから、利子を払わずにはすまない。', english: 'Since you borrowed money, you must pay interest (it will not be settled otherwise).', romaji: 'Shakkin o shita no da kara, rishi o harawazu ni wa sumanai.' },
          { japanese: '部下がご迷惑をおかけしたのだから、社長が挨拶に行かずにはすまない。', english: 'Because the subordinate caused trouble, the president must go and apologize.', romaji: 'Buka ga gomeiwaku o okake shita no da kara, shachou ga aisatsu ni ikazu ni wa sumanai.' },
          { japanese: 'こんな重大な問題、会議を開かずにはすまない。', english: 'For such a grave problem, we cannot avoid holding a meeting.', romaji: 'Konna juudai na mondai, kaigi o hirakazu ni wa sumanai.' },
          { japanese: '嘘がばれた以上、本当のことを話さずにはすまない。', english: 'Now that the lie is exposed, I must tell the truth.', romaji: 'Uso ga bareta ijou, hontou no koto o hanasazu ni wa sumanai.' },
          { japanese: 'これだけ多くの人が犠牲になったのだから、責任をとらずにはすまない。', english: 'Because this many people became victims, taking responsibility cannot be avoided.', romaji: 'Kore dake ooku no hito ga gisei ni natta no da kara, sekinin o torazu ni wa sumanai.' },
          { japanese: '警察に見つかったのだから、罰金を払わないではすまない。（＝払わずにはすまない）', english: 'Since you were caught by the police, you cannot avoid paying a fine.', romaji: 'Keisatsu ni mitsukatta no da kara, bakkin o harawanai de wa sumanai.' }
        ],
        conversation: {
          context: 'At work, after a huge mistake.',
          dialogue: [
            { speaker: 'ケン', japanese: '取引先のデータを消してしまいました…。', english: 'I deleted the client\'s data...' },
            { speaker: '部長', japanese: 'なんだって！？これは電話で済む問題じゃない。直接行って謝らずにはすまないぞ。', english: 'What!? This isn\'t a problem that can be settled over the phone. We must go directly and apologize.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Must apologize (謝る - ayamaru)."',
            'Translate: "Must pay (払う - harau)."',
            'How do you say "Must compensate" (弁償する - benshou suru) using this grammar?'
          ],
          answers: [
            '謝らずにはすまない (Ayamarazu ni wa sumanai)',
            '払わずにはすまない (Harawazu ni wa sumanai)',
            '弁償せずにはすまない (Benshou sezu ni wa sumanai. する always becomes せず).'
          ]
        },
        jlptQuestions: [
          {
            question: '会社（かいしゃ）のパソコンを壊（こわ）してしまったのだから、弁償（べんしょう）___にはすまない。',
            options: ['しない'],
            correctIndex: 1,
            options: ['しない', 'せず', 'して', 'させ'],
            explanation: 'The verb is 弁償する. The rule for する is to use せず. 弁償せずにはすまない.'
          },
          {
            question: 'これほど大（おお）きな事故（じこ）を起（お）こしたのだから、警察（けいさつ）の取（と）り調（しら）べを___にはすまない。',
            options: ['受ける', '受けず', '受けない', '受けよう'],
            correctIndex: 1,
            explanation: 'The verb is 受ける (to receive/undergo). The nai-stem is 受け. Attach ず. 受けずにはすまない (Must undergo).'
          }
        ],
        realLifeUsage: 'Often used in legal, business, or dramatic situations where accountability is demanded.'
      },
      {
        id: 'n1-l1-t3',
        pattern: '〜極まりない',
        pronunciation: 'kiwamarinai',
        meaning: 'Extremely / The limits of (Negative)',
        isImplemented: true,
        whenAndWhy: 'Used in highly formal language to express extreme outrage, disgust, or danger. It literally means "knowing no limits" or "the absolute extreme of X".',
        explanation: 'Attach 極まりない (kiwamari nai) or 極まる (kiwamaru) to a na-adjective (Noun form) or sometimes an i-adjective (without い + こと).',
        formation: {
          formula: 'na-adjective / Noun + 極まりない',
          rules: [
            'na-adjective: 失礼極まりない (extremely rude)',
            'na-adjective: 危険極まりない (extremely dangerous)',
            'Noun: 無礼極まる (extremely disrespectful)'
          ]
        },
        conjugations: {
          headers: ['Adjective', 'Form', 'Translation'],
          rows: [
            ['失礼 (shitsurei)', '失礼極まりない', 'Extremely rude'],
            ['危険 (kiken)', '危険極まりない', 'Extremely dangerous'],
            ['残念 (zannen)', '残念極まりない', 'Extremely regrettable']
          ]
        },
        notes: 'It is almost exclusively used for NEGATIVE things. The most common collocations tested on the JLPT are 失礼 (rude), 危険 (dangerous), 迷惑 (annoying), and 無責任 (irresponsible).',
        mistakes: 'Do not use this for positive extremes. (✕ 美しい極まりない - Wrong. Use 非常に美しい).',
        comparison: {
          similarPattern: '〜てたまらない (Unbearably - N3)',
          difference: '暑くてたまらない (Unbearably hot - physical feeling). 危険極まりない (Extremely dangerous - formal, objective assessment of a situation).'
        },
        memoryTips: 'Kiwamaru (極まる) = to reach the extreme/summit. Nai (ない) = no end. "Rude with no end/limits."',
        examples: [
          { japanese: '彼の態度は、失礼極まりない。', english: 'His attitude is extremely rude.', romaji: 'Kare no taido wa, shitsurei kiwamari nai.' },
          { japanese: '飲酒運転は危険極まりない行為だ。', english: 'Drunk driving is an extremely dangerous act.', romaji: 'Inshu unten wa kiken kiwamari nai koui da.' },
          { japanese: 'あの会社の対応は、無責任極まりない。', english: 'That company\'s response is extremely irresponsible.', romaji: 'Ano kaisha no taiou wa, musekinin kiwamari nai.' },
          { japanese: '夜中に大声で歌うなんて、迷惑極まりない。', english: 'Singing loudly in the middle of the night is extremely annoying.', romaji: 'Yonaka ni oogoe de utau nante, meiwaku kiwamari nai.' },
          { japanese: 'この映画の結末は、不愉快極まるものだった。', english: 'The ending of this movie was extremely unpleasant. (極まる is also used)', romaji: 'Kono eiga no ketsumatsu wa, fuyukai kiwamaru mono datta.' },
          { japanese: 'せっかくの旅行が雨で中止になるなんて、残念極まりない。', english: 'The fact that our highly anticipated trip was canceled due to rain is extremely regrettable.', romaji: 'Sekkaku no ryokou ga ame de chuushi ni naru nante, zannen kiwamari nai.' },
          { japanese: '彼の発言は、無礼極まる。', english: 'His statement is extremely disrespectful.', romaji: 'Kare no hatsugen wa, burei kiwamaru.' },
          { japanese: 'このようなミスを繰り返すとは、不注意極まりない。', english: 'To repeat such a mistake is extremely careless.', romaji: 'Kono you na misu o kurikaesu to wa, fuchuui kiwamari nai.' },
          { japanese: 'こんな古い橋を渡るのは、危険極まりない。', english: 'Crossing such an old bridge is extremely dangerous.', romaji: 'Konna furui hashi o wataru no wa, kiken kiwamari nai.' },
          { japanese: '彼が私を騙していたと知って、不愉快極まりない。', english: 'Knowing that he was deceiving me, I am extremely displeased.', romaji: 'Kare ga watashi o damashite ita to shitte, fuyukai kiwamari nai.' }
        ],
        conversation: {
          context: 'Watching the news.',
          dialogue: [
            { speaker: '夫', japanese: 'また政治家の汚職（おしょく）事件だって。', english: 'They say it\'s another politician corruption scandal.' },
            { speaker: '妻', japanese: '本当に、無責任極まりないわね。', english: 'Really, it is extremely irresponsible.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Extremely rude (失礼 - shitsurei)."',
            'Translate: "Extremely dangerous (危険 - kiken)."',
            'Can you say "Extremely delicious (美味しい極まりない)"?'
          ],
          answers: [
            '失礼極まりない (Shitsurei kiwamari nai)',
            '危険極まりない (Kiken kiwamari nai)',
            'No. 極まりない is used for extreme negative assessments (rude, dangerous, irresponsible).'
          ]
        },
        jlptQuestions: [
          {
            question: '台風（たいふう）が来（き）ているのに海（うみ）に泳（およ）ぎに行（い）くなんて、___極（きわ）まりない。',
            options: ['安全', '危険', '親切', '便利'],
            correctIndex: 1,
            explanation: 'Swimming in a typhoon is "extremely dangerous". 危険極まりない is a fixed phrase.'
          },
          {
            question: 'あの店員（てんいん）の客（きゃく）に対（たい）する態度（たいど）は、失礼（しつれい）___。',
            options: ['すぎない', '極まりない', 'に相違ない', 'のみならず'],
            correctIndex: 1,
            explanation: '"Extremely rude" = 失礼極まりない.'
          }
        ],
        realLifeUsage: 'If you want to formally complain about a company or a person, use 失礼極まりない.'
      },
      {
        id: 'n1-l1-t4',
        pattern: '〜を皮切りに',
        pronunciation: 'o kawakiri ni',
        meaning: 'Starting with / Beginning with (and expanding)',
        isImplemented: true,
        whenAndWhy: 'Used in news or business to show that one event triggered a series of similar, expanding events. "Starting with A, B and C and D happened all over the place."',
        explanation: 'Attach を皮切りに (o kawakiri ni) or を皮切りにして to a noun. The noun is the "first instance". The sentence that follows MUST describe a chain reaction or a geographical/temporal expansion.',
        formation: {
          formula: 'Noun + を皮切りに（して）',
          rules: [
            'Noun + を皮切りに (e.g. 東京を皮切りに - starting with Tokyo...)',
            'Noun + を皮切りにして (Same meaning, slightly longer)'
          ]
        },
        conjugations: {
          headers: ['First Event', 'Form', 'Translation'],
          rows: [
            ['東京 (Tokyo)', '東京を皮切りに', 'Starting with Tokyo (and expanding to other cities)'],
            ['この事件 (This incident)', 'この事件を皮切りに', 'Starting with this incident (similar incidents followed)']
          ]
        },
        notes: 'A "chain reaction" grammar point. You cannot use it if only ONE other thing happens. It must be a series, a tour, a trend, or an expansion.',
        mistakes: 'Do not use this for a simple sequence of two events. (✕ 朝ごはんを食べるのを皮切りに、学校に行った - Wrong. Use てから. 皮切り requires a massive expansion/chain of events).',
        comparison: {
          similarPattern: '〜をはじめ (Starting with - N3)',
          difference: '日本には富士山をはじめ、美しい山が多い (Japan has many beautiful mountains, starting with Fuji - listing examples). 東京を皮切りに全国ツアーが始まる (A nationwide tour begins, starting with Tokyo - a chain of chronological events/expansion).'
        },
        memoryTips: 'Kawakiri (皮切り) comes from medical terminology (the first incision in the skin). It means the very first cut that starts the whole operation.',
        examples: [
          { japanese: 'そのバンドは、東京を皮切りに全国ツアーをスタートした。', english: 'That band started a nationwide tour, beginning with Tokyo.', romaji: 'Sono bando wa, Toukyou o kawakiri ni zenkoku tsuaa o sutaato shita.' },
          { japanese: '彼の発言を皮切りに、次々と反対意見が出た。', english: 'Triggered by his statement, opposing opinions came out one after another.', romaji: 'Kare no hatsugen o kawakiri ni, tsugitsugi to hantai iken ga deta.' },
          { japanese: 'この商品を皮切りにして、新しいシリーズを次々に発売する予定だ。', english: 'Starting with this product, we plan to release a new series one after another.', romaji: 'Kono shouhin o kawakiri ni shite, atarashii shiriizu o tsugitsugi ni hatsubai suru yotei da.' },
          { japanese: '関東地方の梅雨入りを皮切りに、全国で雨の季節が始まった。', english: 'Starting with the Kanto region entering the rainy season, the season of rain began nationwide.', romaji: 'Kantou chihou no tsuyuiri o kawakiri ni, zenkoku de ame no kisetsu ga hajimatta.' },
          { japanese: 'あの事件を皮切りに、似たような犯罪が多発している。', english: 'Starting with that incident, similar crimes are occurring frequently.', romaji: 'Ano jiken o kawakiri ni, nita you na hanzai ga tahatsu shite iru.' },
          { japanese: '日本での大ヒットを皮切りに、この映画は世界中で公開された。', english: 'Starting with a huge hit in Japan, this movie was released worldwide.', romaji: 'Nihon de no daihitto o kawakiri ni, kono eiga wa sekaijuu de koukai sareta.' },
          { japanese: '新しい駅の建設を皮切りに、町の開発が一気に進んだ。', english: 'Starting with the construction of the new station, the town\'s development advanced all at once.', romaji: 'Atarashii eki no kensetsu o kawakiri ni, machi no kaihatsu ga ikki ni susunda.' },
          { japanese: '一人の告発を皮切りに、会社の不正が次々と明らかになった。', english: 'Triggered by one person\'s accusation, the company\'s frauds became clear one after another.', romaji: 'Hitori no kokuhatsu o kawakiri ni, kaisha no fusei ga tsugitsugi to akiraka ni natta.' },
          { japanese: 'アジア市場を皮切りに、ヨーロッパへも進出する。', english: 'Starting with the Asian market, we will also expand into Europe.', romaji: 'Ajia shijou o kawakiri ni, Yooroppa e mo shinshutsu suru.' },
          { japanese: '今日の会議を皮切りに、プロジェクトが本格的に始動する。', english: 'Beginning with today\'s meeting, the project will launch in earnest.', romaji: 'Kyou no kaigi o kawakiri ni, purojekuto ga honkakuteki ni shidou suru.' }
        ],
        conversation: {
          context: 'Discussing a music tour.',
          dialogue: [
            { speaker: 'マリー', japanese: '私の好きなアイドル、ついにドームツアーをやるの！', english: 'My favorite idol is finally doing a dome tour!' },
            { speaker: 'ケン', japanese: 'すごいね。どこからスタートするの？', english: 'Amazing. Where does it start?' },
            { speaker: 'マリー', japanese: '東京ドームを皮切りに、全国５大ドームを回るんだよ。', english: 'Starting with the Tokyo Dome, they are touring all 5 major nationwide domes.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Starting with Tokyo (東京)..."',
            'Translate: "Starting with this incident (この事件)..."',
            'What usually comes in the second half of a 皮切りに sentence?'
          ],
          answers: [
            '東京を皮切りに (Toukyou o kawakiri ni)',
            'この事件を皮切りに (Kono jiken o kawakiri ni)',
            'Words indicating expansion, frequency, or chains of events (全国 - nationwide, 次々と - one after another).'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの歌手（かしゅ）は、大阪（おおさか）でのコンサート___、全国（ぜんこく）２０か所（しょ）でライブを行（おこな）う。',
            options: ['を皮切りに', 'にかけては', 'のみならず', 'にかかわらず'],
            correctIndex: 0,
            explanation: 'Touring 20 locations nationwide starting from Osaka. This is the exact definition of を皮切りに.'
          },
          {
            question: '彼（かれ）の質問（しつもん）を皮切（かわき）り___、参加者（さんかしゃ）から次々（つぎつぎ）と意見（いけん）が出（で）た。',
            options: ['で', 'に', 'と', 'を'],
            correctIndex: 1,
            explanation: 'The fixed grammar pattern is を皮切りに.'
          }
        ],
        realLifeUsage: 'Standard news terminology for concerts, viral trends, and expanding company operations.'
      },
      {
        id: 'n1-l1-t5',
        pattern: '〜すら',
        pronunciation: 'sura',
        meaning: 'Even (Emphasizing extremes)',
        isImplemented: true,
        whenAndWhy: 'Used to provide an extreme example to imply that everything else is obvious. "He can\'t EVEN write his own name (let alone difficult kanji).',
        explanation: 'Attach すら (sura) to a noun. It often replaces particles like が or を, but attaches to particles like に or で (e.g. にすら). It is the formal, written equivalent of さえ (even).',
        formation: {
          formula: 'Noun (+ particle) + すら',
          rules: [
            'Noun + すら (replaces ga/o) (e.g. 名前すら書けない - cannot even write one\'s name)',
            'Noun + にすら (e.g. 先生にすらわからない - even the teacher doesn\'t know)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Sura Form', 'Translation'],
          rows: [
            ['子供 (kodomo)', '子供すら', 'Even a child'],
            ['名前 (namae)', '名前すら', 'Even a name'],
            ['専門家 (senmonka)', '専門家にすら', 'Even to an expert']
          ]
        },
        notes: 'Most often used in negative sentences (e.g. cannot even do X). In N1, you will also see 〜ですら (de sura), which is used for nouns/people (e.g. 大人ですら - even an adult).',
        mistakes: 'Do not use this to mean "also". It strictly means "EVEN this extreme/basic thing".',
        comparison: {
          similarPattern: '〜さえ (Even - N3)',
          difference: '水さえ飲めない (Cannot even drink water). 水すら飲めない (Cannot even drink water). They are identical in meaning, but すら is more formal, literary, and often feels slightly harsher or more dramatic.'
        },
        memoryTips: 'Sura = Sure-a. "Sure, a child could even do it." / "Not even a scratch."',
        examples: [
          { japanese: '彼は自分の名前すら漢字で書けない。', english: 'He cannot even write his own name in kanji.', romaji: 'Kare wa jibun no namae sura kanji de kakenai.' },
          { japanese: '喉が痛くて、水すら飲めない。', english: 'My throat hurts, and I cannot even drink water.', romaji: 'Nodo ga itakute, mizu sura nomenai.' },
          { japanese: 'その問題は、専門家にすらわからない。', english: 'That problem is not known even to experts.', romaji: 'Sono mondai wa, senmonka ni sura wakaranai.' },
          { japanese: '疲労で、立つことすらできない。', english: 'Due to exhaustion, I cannot even stand up.', romaji: 'Hirou de, tatsu koto sura dekinai.' },
          { japanese: '忙しすぎて、寝る時間すらありません。', english: 'I am so busy that I do not even have time to sleep.', romaji: 'Isogashisugite, neru jikan sura arimasen.' },
          { japanese: 'この村には、テレビすらない。', english: 'In this village, there isn\'t even a TV.', romaji: 'Kono mura ni wa, terebi sura nai.' },
          { japanese: '大人ですら解けない問題を、その子供は一瞬で解いた。', english: 'The child solved a problem in an instant that even an adult could not solve.', romaji: 'Otona de sura tokenai mondai o, sono kodomo wa isshun de toita.' },
          { japanese: '彼とは、連絡すら取れない状態だ。', english: 'I am in a state where I cannot even make contact with him.', romaji: 'Kare to wa, renraku sura torenai joutai da.' },
          { japanese: '挨拶すらできない人は、会社では通用しない。', english: 'A person who cannot even greet properly will not pass in a company.', romaji: 'Aisatsu sura dekinai hito wa, kaisha de wa tsuuyou shinai.' },
          { japanese: '彼女は私に一瞥（いちべつ）すらくれなかった。', english: 'She didn\'t even give me a single glance.', romaji: 'Kanojo wa watashi ni ichibetsu sura kurenakatta.' }
        ],
        conversation: {
          context: 'Talking about a severe illness.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'インフルエンザ、大丈夫？', english: 'Are you okay with the flu?' },
            { speaker: 'マリー', japanese: '全然。高熱で、起き上がることすらできないの。', english: 'Not at all. With a high fever, I cannot even sit up.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Cannot even write one\'s name (名前 - namae)."',
            'Translate: "Even a child (子供 - kodomo) understands." (Use ですら)',
            'What N3 grammar point is すら almost identical to?'
          ],
          answers: [
            '名前すら書けない (Namae sura kakenai)',
            '子供ですらわかる (Kodomo de sura wakaru)',
            'さえ (sae)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この数学（すうがく）の問題（もんだい）は難（むずか）しすぎて、先生（せんせい）___解（と）けなかった。',
            options: ['にすら', 'のみならず', 'にあたって', 'を皮切りに'],
            correctIndex: 0,
            explanation: '"Even the teacher could not solve it." 先生 + に (to) + すら (even). 先生にすら.'
          },
          {
            question: '忙（いそが）しくて、食事（しょくじ）をする時間（じかん）___ない。',
            options: ['さえ', 'すら', 'Both 1 and 2 are correct', 'None of the above'],
            correctIndex: 2,
            explanation: 'さえ and すら are interchangeable here. JLPT will rarely put both as options unless asking for a difference in nuance, but logically both mean "even".'
          }
        ],
        realLifeUsage: 'A powerful word to emphasize helplessness: 「指一本すら動かせない」 (I can\'t even move a single finger).'
      }
    ]
  },
  {
    lessonNum: 2,
    title: 'Direct Consequences & Severe Actions',
    description: 'Immediate sequences and extreme limits.',
    topics: [
      {
        id: 'n1-l2-t1',
        pattern: '〜そばから',
        pronunciation: 'soba kara',
        meaning: 'As soon as (repeating endless cycle)',
        isImplemented: true,
        whenAndWhy: 'Used to express a frustrating, never-ending cycle. "As soon as I do X, Y happens (undoing my work), and this happens over and over again."',
        explanation: 'Attach そばから (soba kara) to the dictionary form or past tense of a verb. It literally means "from the side". As soon as you put something down by your side, it is gone. It always implies a repeating, futile cycle.',
        formation: {
          formula: 'Verb (Dictionary / た-form) + そばから',
          rules: [
            'Dictionary form: 聞くそばから (As soon as I hear it...)',
            'た-form: 習ったそばから (As soon as I learned it...)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Form', 'Translation'],
          rows: [
            ['片付ける (katazukeru)', '片付けるそばから', 'As soon as I clean up (it gets messy again)'],
            ['覚える (oboeru)', '覚えたそばから', 'As soon as I memorize it (I forget it)']
          ]
        },
        notes: 'In N1, it is crucial to remember that そばから MUST be a repeating cycle. It cannot be used for a one-time event.',
        mistakes: 'Do not use this for a single, shocking event. (✕ 家を出たそばから、雨が降った - Wrong. Use たとたん. そばから means it happens every time).',
        comparison: {
          similarPattern: '〜たとたん (As soon as - N3)',
          difference: 'たとたん is for a one-time surprise (As soon as I opened the door, a cat jumped out). そばから is for an endless, frustrating loop (As soon as I clean the floor, the kids muddy it again).'
        },
        memoryTips: 'Soba = side. As soon as you put the information by your side, it slips away.',
        examples: [
          { japanese: '新しい単語を覚えるそばから、忘れてしまう。', english: 'As soon as I memorize new vocabulary, I forget it (over and over).', romaji: 'Atarashii tango o oboeru soba kara, wasurete shimau.' },
          { japanese: '部屋を片付けたそばから、子供が散らかす。', english: 'As soon as I clean the room, the kids mess it up (endless cycle).', romaji: 'Heya o katazuketa soba kara, kodomo ga chirakasu.' },
          { japanese: '草を抜くそばから、また新しい草が生えてくる。', english: 'As soon as I pull the weeds, new weeds grow back.', romaji: 'Kusa o nuku soba kara, mata atarashii kusa ga haete kuru.' },
          { japanese: '給料をもらうそばから、使ってしまう。', english: 'As soon as I get my salary, I spend it all (every month).', romaji: 'Kyuuryou o morau soba kara, tsukatte shimau.' },
          { japanese: '聞いたそばから忘れるので、メモを取るようにしている。', english: 'Because I forget things as soon as I hear them, I make sure to take notes.', romaji: 'Kiita soba kara wasureru node, memo o toru you ni shite iru.' },
          { japanese: '作ったそばから売れていく、大人気のパン屋だ。', english: 'It\'s a hugely popular bakery where bread sells out as soon as they bake it.', romaji: 'Tsukutta soba kara urete iku, daininki no panya da.' },
          { japanese: '借金を返すそばから、またお金を借りている。', english: 'As soon as he pays back his debt, he borrows money again.', romaji: 'Shakkin o kaesu soba kara, mata okane o karite iru.' },
          { japanese: 'メールを返信するそばから、新しいメールが届く。', english: 'As soon as I reply to an email, a new email arrives.', romaji: 'Meeru o henshin suru soba kara, atarashii meeru ga todoku.' },
          { japanese: '彼に注意したそばから、また同じミスをした。', english: 'As soon as I warned him, he made the exact same mistake again.', romaji: 'Kare ni chuui shita soba kara, mata onaji misu o shita.' },
          { japanese: 'お皿を洗うそばから、次の汚れ物が出てくる。', english: 'As soon as I wash the dishes, the next dirty ones appear.', romaji: 'Osara o arau soba kara, tsugi no yogoremono ga dete kuru.' }
        ],
        conversation: {
          context: 'A tired mother talking to her friend.',
          dialogue: [
            { speaker: 'マリー', japanese: '毎日、家事が大変で…。', english: 'Every day, housework is so hard...' },
            { speaker: 'さくら', japanese: 'わかるわ。掃除しても、片付けるそばから子供が散らかすのよね。', english: 'I understand. Even if you clean, as soon as you tidy up, the kids mess it up, right.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "As soon as I memorize (覚える - oboeru)..."',
            'Translate: "As soon as I clean up (片付ける - katazukeru)..."',
            'Can you use そばから for "As soon as I arrived in Japan, I lost my passport"?'
          ],
          answers: [
            '覚えるそばから (Oboeru soba kara)',
            '片付けるそばから (Katazukeru soba kara)',
            'No. Losing a passport is a one-time event. そばから requires a repeating cycle.'
          ]
        },
        jlptQuestions: [
          {
            question: '歳（とし）をとったせいか、人（ひと）の名前（なまえ）を聞（き）く___忘（わす）れてしまう。',
            options: ['がてら', 'そばから', '皮切りに', '極まりない'],
            correctIndex: 1,
            explanation: 'The endless cycle of hearing a name and immediately forgetting it. 聞くそばから.'
          },
          {
            question: 'このレストランは人気（にんき）で、料理（りょうり）を___そばから、客（きゃく）が食（た）べてしまう。',
            options: ['出す', '出して', '出し', '出そう'],
            correctIndex: 0,
            explanation: 'そばから attaches to the dictionary form or ta-form. 出す (dictionary form) fits perfectly.'
          }
        ],
        realLifeUsage: 'A favorite grammar point for complaining about Sisyphean tasks (tasks that never end).'
      },
      {
        id: 'n1-l2-t2',
        pattern: '〜なり',
        pronunciation: 'nari',
        meaning: 'As soon as / Right after (Surprise action)',
        isImplemented: true,
        whenAndWhy: 'Used when someone suddenly and unexpectedly does an action RIGHT AFTER another action. "The moment he saw my face, he burst into tears!"',
        explanation: 'Attach なり (nari) to the dictionary form of a verb. The subject of both the first and second action is usually the SAME person (often a third person, like "He" or "She"). The second action is usually somewhat surprising or intense.',
        formation: {
          formula: 'Verb (Dictionary) + なり',
          rules: [
            'Verb Dictionary form + なり (e.g. 見るなり - the moment they saw...)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Nari Form', 'Translation'],
          rows: [
            ['見る (miru)', '見るなり', 'As soon as (he) saw...'],
            ['部屋に入る (hairu)', '入るなり', 'As soon as (he) entered...'],
            ['一口食べる (taberu)', '食べるなり', 'As soon as (he) took a bite...']
          ]
        },
        notes: 'In N1, there is another grammar point V-たなり (He went out and hasn\'t come back). Do not confuse them. Dictionary form + なり = As soon as. た-form + なり = Left in that state.',
        mistakes: 'Do not use this for your OWN planned actions. (✕ 私は家に帰るなり、手を洗った - Wrong. You are not surprised by your own handwashing). Use it for observing someone else\'s sudden action.',
        comparison: {
          similarPattern: '〜が早いか / 〜や否や (As soon as - N1)',
          difference: 'が早いか and や否や are for two separate things happening instantly (As soon as the bell rang, the students ran). なり usually focuses on ONE person doing two consecutive, surprising actions (As soon as HE entered, HE started yelling).'
        },
        memoryTips: 'Nari = "ringing/sounding". The action happens the moment the bell rings.',
        examples: [
          { japanese: '彼は私の顔を見るなり、泣き出した。', english: 'The moment he saw my face, he burst into tears.', romaji: 'Kare wa watashi no kao o miru nari, nakidashita.' },
          { japanese: '社長は部屋に入るなり、大声で怒鳴った。', english: 'As soon as the president entered the room, he yelled in a loud voice.', romaji: 'Shachou wa heya ni hairu nari, oogoe de donatta.' },
          { japanese: '子供は母親の姿を見つけるなり、駆け寄っていった。', english: 'As soon as the child caught sight of his mother, he ran up to her.', romaji: 'Kodomo wa hahaoya no sugata o mitsukeru nari, kakeyotte itta.' },
          { japanese: '一口食べるなり、彼は「まずい！」と叫んだ。', english: 'The moment he took a bite, he shouted, "Disgusting!"', romaji: 'Hitokuchi taberu nari, kare wa "Mazui!" to sakenda.' },
          { japanese: '彼女は手紙を読むなり、顔を真っ青にした。', english: 'As soon as she read the letter, her face turned completely pale.', romaji: 'Kanojo wa tegami o yomu nari, kao o massao ni shita.' },
          { japanese: '泥棒は警官を見るなり、逃げ出した。', english: 'As soon as the thief saw the police officer, he ran away.', romaji: 'Dorobou wa keikan o miru nari, nigedashita.' },
          { japanese: 'ベッドに横になるなり、眠ってしまった。', english: 'As soon as he lay down on the bed, he fell asleep.', romaji: 'Beddo ni yoko ni naru nari, nemutte shimatta.' },
          { japanese: '電話を切るなり、彼はため息をついた。', english: 'The moment he hung up the phone, he sighed.', romaji: 'Denwa o kiru nari, kare wa tameiki o tsuita.' },
          { japanese: '合格発表を見るなり、彼女は嬉し泣きをした。', english: 'As soon as she saw the exam results, she cried tears of joy.', romaji: 'Goukaku happyou o miru nari, kanojo wa ureshinaki o shita.' },
          { japanese: '彼は席に着くなり、パソコンを開いた。', english: 'As soon as he took his seat, he opened his laptop.', romaji: 'Kare wa seki ni tsuku nari, pasokon o hiraita.' }
        ],
        conversation: {
          context: 'Gossip at the office.',
          dialogue: [
            { speaker: 'ジョン', japanese: '昨日の飲み会、田中さんどうしたの？', english: 'What happened to Tanaka at yesterday\'s drinking party?' },
            { speaker: 'マリー', japanese: 'ひどかったわよ。ビールを一杯飲むなり、寝ちゃったの。', english: 'It was terrible. As soon as he drank one glass of beer, he fell asleep.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "The moment he saw (見る - miru)..."',
            'Translate: "The moment she entered (入る - hairu)..."',
            'Is it okay to say "私は起きるなり、顔を洗った"?'
          ],
          answers: [
            '見るなり (Miru nari)',
            '入るなり (Hairu nari)',
            'No, because it is your own planned, boring action. なり is for surprising, intense actions, usually done by someone else.'
          ]
        },
        jlptQuestions: [
          {
            question: '犯人（はんにん）はパトカーのサイレンを___なり、猛（もう）スピードで逃走（とうそう）した。',
            options: ['聞く', '聞いて', '聞き', '聞いた'],
            correctIndex: 0,
            explanation: 'なり attaches to the dictionary form. 聞く + なり.'
          },
          {
            question: '疲（つか）れていたのか、息子（むすこ）はベッドに倒（たお）れ込（こ）む___、いびきをかき始（はじ）めた。',
            options: ['そばから', 'なり', 'がてら', 'を皮切りに'],
            correctIndex: 1,
            explanation: 'One action instantly triggering a surprising second action by the same person. 倒れ込むなり (As soon as he collapsed into bed...).'
          }
        ],
        realLifeUsage: 'Very common in novels to describe sudden dramatic shifts in character behavior.'
      },
      {
        id: 'n1-l2-t3',
        pattern: '〜ずにはいられない',
        pronunciation: 'zu ni wa irarenai',
        meaning: 'Cannot help but (do) / Cannot stop oneself from',
        isImplemented: true,
        whenAndWhy: 'Used when you have a natural, uncontrollable urge to do something (laugh, cry, say something). "I just had to do it. I couldn\'t hold it in."',
        explanation: 'Attach ずにはいられない to the nai-stem of a verb (replace "nai" with "zu"). This is the formal, written equivalent of 〜ないではいられない. The subject is usually the speaker (I).',
        formation: {
          formula: 'Verb (nai-stem) + ずにはいられない',
          rules: [
            'Group 1 & 2: nai-stem + ずにはいられない (e.g. 泣かずにはいられない - cannot help but cry)',
            'Group 3 (する): せずにはいられない (e.g. 感動せずにはいられない - cannot help but be moved)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Nai-stem', 'Zu ni wa irarenai Form', 'Translation'],
          rows: [
            ['泣く (naku)', '泣か(ない)', '泣かずにはいられない', 'Cannot help but cry'],
            ['笑う (warau)', '笑わ(ない)', '笑わずにはいられない', 'Cannot stop myself from laughing'],
            ['する (suru)', 'せ(ず)', 'せずにはいられない', 'Cannot help but do (exception)']
          ]
        },
        notes: 'If describing someone ELSE\'S uncontrollable urge, you must add 〜ようだ or 〜らしい at the end. (e.g. 彼は泣かずにはいられなかったようだ - It seems he couldn\'t help but cry).',
        mistakes: 'Do not confuse with 〜ずにはすまない (N1 L1). ずにはすまない = Social duty (I must pay for breaking the window). ずにはいられない = Internal urge (I couldn\'t stop laughing).',
        comparison: {
          similarPattern: '〜てたまらない (Unbearably - N3)',
          difference: '悲しくてたまらない (Unbearably sad - describes the state of feeling). 泣かずにはいられない (Cannot help but cry - describes the ACTION you cannot stop doing).'
        },
        memoryTips: 'Zu = without. Irarenai = cannot exist/be. "I cannot exist without doing X."',
        examples: [
          { japanese: 'その悲惨（ひさん）なニュースを見て、泣かずにはいられなかった。', english: 'Watching that tragic news, I could not help but cry.', romaji: 'Sono hisan na nyuusu o mite, nakazu ni wa irarenakatta.' },
          { japanese: '彼の冗談がおかしくて、笑わずにはいられなかった。', english: 'His joke was so funny, I couldn\'t stop myself from laughing.', romaji: 'Kare no joudan ga okashikute, warawazu ni wa irarenakatta.' },
          { japanese: 'こんな不正を見たら、文句を言わずにはいられない。', english: 'If I see such injustice, I cannot help but complain.', romaji: 'Konna fusei o mitara, monku o iwazu ni wa irarenai.' },
          { japanese: '彼女の素晴らしい演技に、感動せずにはいられなかった。', english: 'I couldn\'t help but be deeply moved by her wonderful acting.', romaji: 'Kanojo no subarashii engi ni, kandou sezu ni wa irarenakatta.' },
          { japanese: '美味しそうな匂いに、一口食べずにはいられなかった。', english: 'Due to the delicious smell, I couldn\'t stop myself from taking a bite.', romaji: 'Oishisou na nioi ni, hitokuchi tabezu ni wa irarenakatta.' },
          { japanese: 'あの映画の結末には、同情せずにはいられない。', english: 'I cannot help but sympathize with the ending of that movie.', romaji: 'Ano eiga no ketsumatsu ni wa, doujou sezu ni wa irarenai.' },
          { japanese: '子供の成長を見て、喜ばずにはいられません。', english: 'Seeing my child\'s growth, I cannot help but rejoice.', romaji: 'Kodomo no seichou o mite, yorokobazu ni wa iraremasen.' },
          { japanese: 'この美しい景色を、写真に撮らずにはいられなかった。', english: 'I couldn\'t help but take a photo of this beautiful scenery.', romaji: 'Kono utsukushii keshiki o, shashin ni torazu ni wa irarenakatta.' },
          { japanese: '彼の頑張りを見ていると、応援せずにはいられない。', english: 'Watching him try so hard, I cannot help but cheer for him.', romaji: 'Kare no ganbari o mite iru to, ouen sezu ni wa irarenai.' },
          { japanese: '真実を知った以上、皆に伝えずにはいられない。', english: 'Now that I know the truth, I cannot stop myself from telling everyone.', romaji: 'Shinjitsu o shitta ijou, mina ni tsutaezu ni wa irarenai.' }
        ],
        conversation: {
          context: 'Walking out of a movie theater.',
          dialogue: [
            { speaker: 'ケン', japanese: 'すごい映画だったね。', english: 'That was an amazing movie.' },
            { speaker: 'マリー', japanese: 'うん。最後は本当に泣かずにはいられなかったわ。', english: 'Yeah. At the end, I truly couldn\'t help but cry.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Cannot help but cry (泣く - naku)."',
            'Translate: "Cannot stop myself from laughing (笑う - warau)."',
            'How do you say "Cannot help but be moved (感動する - kandou suru)"?'
          ],
          answers: [
            '泣かずにはいられない (Nakazu ni wa irarenai)',
            '笑わずにはいられない (Warawazu ni wa irarenai)',
            '感動せずにはいられない (Kandou sezu ni wa irarenai)'
          ]
        },
        jlptQuestions: [
          {
            question: 'あのコメディアンの動きがおかしくて、思わず___。',
            options: ['笑わずにはすまない', '笑わずにはいられなかった', '笑うのみならず', '笑うを禁じ得ない'],
            correctIndex: 1,
            explanation: 'The natural urge to laugh. 笑わずにはいられない.'
          },
          {
            question: 'あまりにも理不尽（りふじん）な社長の態度に、___にはいられなかった。',
            options: ['怒る', '怒らない', '怒らず', '怒り'],
            correctIndex: 2,
            explanation: 'The structure requires the nai-stem + ず. 怒る -> 怒ら + ず -> 怒らずにはいられなかった (couldn\'t help but get angry).'
          }
        ],
        realLifeUsage: 'Often paired with 思わず (spontaneously / unintentionally): 「思わず笑わずにはいられなかった」 (I spontaneously couldn\'t help but laugh).'
      },
      {
        id: 'n1-l2-t4',
        pattern: '〜を禁じ得ない',
        pronunciation: 'o kinjienai',
        meaning: 'Cannot help but feel / Cannot suppress (Emotion)',
        isImplemented: true,
        whenAndWhy: 'Used in extremely formal and stiff written language to express that you cannot suppress an internal emotion (sympathy, anger, tears, surprise).',
        explanation: 'Attach を禁じ得ない (o kinjienai) directly to an EMOTION NOUN. It literally means "cannot obtain the prohibition of X" -> "cannot suppress X".',
        formation: {
          formula: 'Emotion Noun + を禁じ得ない',
          rules: [
            'Common Nouns: 涙 (tears), 怒り (anger), 同情 (sympathy), 驚き (surprise)',
            'Noun + を禁じ得ない (e.g. 涙を禁じ得ない - cannot suppress my tears)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Form', 'Translation'],
          rows: [
            ['涙 (namida)', '涙を禁じ得ない', 'Cannot suppress my tears / Cannot help but cry'],
            ['怒り (ikari)', '怒りを禁じ得ない', 'Cannot suppress my anger'],
            ['同情 (doujou)', '同情を禁じ得ない', 'Cannot help but sympathize']
          ]
        },
        notes: 'Unlike ずにはいられない (which attaches to verbs/actions), を禁じ得ない strictly attaches to NOUNS expressing emotion. The subject is always the speaker (I) or the author of the text.',
        mistakes: 'Do not use this for actions like eating or laughing. (✕ 笑いを禁じ得ない - Usually wrong. It is reserved for deep, formal emotions like tears, anger, and sympathy).',
        comparison: {
          similarPattern: '〜ずにはいられない (Cannot help but do - N1 L2)',
          difference: '泣かずにはいられない (verb - I couldn\'t stop crying). 涙を禁じ得ない (noun - I couldn\'t suppress my tears). Meaning is identical, but 禁じ得ない is much more formal and poetic.'
        },
        memoryTips: 'Kinji (禁じる) = prohibit. Enai (得ない) = cannot. Cannot prohibit my own feelings.',
        examples: [
          { japanese: '被害者の話を聞いて、涙を禁じ得なかった。', english: 'Listening to the victim\'s story, I could not suppress my tears.', romaji: 'Higaisha no hanashi o kiite, namida o kinjienakatta.' },
          { japanese: '犯人の残忍な手口に、激しい怒りを禁じ得ない。', english: "I cannot suppress my intense anger at the criminal's brutal methods.", romaji: "Hannin no zan'nin na teguchi ni, hageshii ikari o kinjienai." },
          { japanese: '彼の突然の訃報（ふほう）に、驚きを禁じ得ない。', english: 'I cannot suppress my surprise at the sudden news of his death.', romaji: 'Kare no totsuzen no fuhou ni, odoroki o kinjienai.' },
          { japanese: '親を亡くした子供たちに、深い同情を禁じ得ません。', english: 'I cannot help but deeply sympathize with the children who lost their parents.', romaji: 'Oya o nakushita kodomotachi ni, fukai doujou o kinjiemasen.' },
          { japanese: 'その素晴らしい芸術作品を見て、感動を禁じ得なかった。', english: 'Looking at that wonderful work of art, I could not suppress my deep emotion.', romaji: 'Sono subarashii geijutsu sakuhin o mite, kandou o kinjienakatta.' },
          { japanese: '政府の無責任な対応に、憤り（いきどおり）を禁じ得ない。', english: 'I cannot suppress my resentment at the government\'s irresponsible response.', romaji: 'Seifu no musekinin na taiou ni, ikidoori o kinjienai.' },
          { japanese: '彼の勇気ある行動に、賞賛（しょうさん）を禁じ得ない。', english: 'I cannot help but praise his courageous actions.', romaji: 'Kare no yuuki aru koudou ni, shousan o kinjienai.' },
          { japanese: '次々と起こる不祥事（ふしょうじ）に、疑念を禁じ得ない。', english: 'I cannot suppress my doubts at the scandals occurring one after another.', romaji: 'Tsugitsugi to okoru fushouji ni, ginen o kinjienai.' },
          { japanese: '事故の悲惨な現場を見て、涙を禁じ得なかった。', english: 'Seeing the tragic scene of the accident, I could not suppress my tears.', romaji: 'Jiko no hisan na genba o mite, namida o kinjienakatta.' },
          { japanese: 'これほどの名作が忘れ去られていくことに、寂しさを禁じ得ない。', english: 'I cannot suppress my sadness that such a masterpiece is being forgotten.', romaji: 'Kore hodo no meisaku ga wasuresararete iku koto ni, sabishisa o kinjienai.' }
        ],
        conversation: {
          context: 'A formal speech at a charity event.',
          dialogue: [
            { speaker: '司会者', japanese: '被災地（ひさいち）の現状を見るたびに、私どもは深い悲しみを禁じ得ません。', english: 'Every time we see the current state of the disaster area, we cannot suppress our deep sorrow.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Cannot suppress tears (涙 - namida)."',
            'Translate: "Cannot suppress anger (怒り - ikari)."',
            'Does を禁じ得ない attach to verbs or nouns?'
          ],
          answers: [
            '涙を禁じ得ない (Namida o kinjienai)',
            '怒りを禁じ得ない (Ikari o kinjienai)',
            'Emotion nouns (涙, 怒り, 驚き, 同情, etc.).'
          ]
        },
        jlptQuestions: [
          {
            question: '動物（どうぶつ）を虐待（ぎゃくたい）するニュースを見（み）て、激（はげ）しい___を禁（きん）じ得（え）なかった。',
            options: ['泣く', '怒り', '笑う', '許す'],
            correctIndex: 1,
            explanation: 'を禁じ得ない strictly attaches to emotion nouns. 怒り (anger) is the only noun here. "Could not suppress my intense anger."'
          },
          {
            question: '彼（かれ）の不幸（ふこう）な生（お）い立（た）ちを聞（き）いて、同情（どうじょう）___。',
            options: ['を禁じ得ない', 'ずにはすまない', '極まりない', 'を皮切りに'],
            correctIndex: 0,
            explanation: '同情 (sympathy). "Could not suppress my sympathy" = 同情を禁じ得ない.'
          }
        ],
        realLifeUsage: 'Rarely spoken. Found in newspaper editorials, political statements, or formal essays.'
      },
      {
        id: 'n1-l2-t5',
        pattern: '〜に堪えない',
        pronunciation: 'ni taenai',
        meaning: 'Cannot bear to / Extremely (Feeling)',
        isImplemented: true,
        whenAndWhy: 'Used in two ways in N1: 1) "So terrible I cannot bear to look/listen" (Physical/Mental limit). 2) "I am extremely full of this emotion" (e.g. extremely grateful/regretful).',
        explanation: 'Attach に堪えない (ni taenai) to a dictionary-form verb (for the "cannot bear to" meaning) or to an emotion noun (for the "extremely" meaning). 堪える means to endure. 堪えない means unendurable.',
        formation: {
          formula: 'Verb (Dictionary) / Emotion Noun + に堪えない',
          rules: [
            'Verb: 見るに堪えない (Cannot bear to look - it is too awful)',
            'Noun: 感謝に堪えない (Extremely grateful - gratitude is overflowing)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Verb', '聞くに堪えない', 'Cannot bear to listen (too vulgar/awful)'],
            ['Noun', '感謝に堪えない', 'Extremely grateful / Filled with boundless gratitude'],
            ['Noun', '後悔に堪えない', 'Extremely regretful']
          ]
        },
        notes: 'The verb usage is almost exclusively 見るに堪えない (cannot bear to look) and 聞くに堪えない (cannot bear to listen). The noun usage is almost exclusively 感謝 (gratitude), 後悔 (regret), and 同情 (sympathy).',
        mistakes: 'Do not use this for physical pain. (✕ 痛みに堪えない - Wrong. Use 痛くてたまらない). に堪えない is for psychological endurance or overwhelming formal emotions.',
        comparison: {
          similarPattern: '〜てたまらない (Unbearably - N3)',
          difference: 'てたまらない is for daily life physical/emotional limits. に堪えない is a stiff, formal idiom used in official statements (I am filled with boundless gratitude -> 感謝に堪えません).'
        },
        memoryTips: 'Tae (堪え) = endure. Nai = cannot. "Cannot endure looking at it" OR "My gratitude is so big I cannot endure/hold it inside."',
        examples: [
          { japanese: '彼の悪口は、聞くに堪えない。', english: 'His bad-mouthing is unbearable to listen to.', romaji: 'Kare no waruguchi wa, kiku ni taenai.' },
          { japanese: 'あの事故の現場は、見るに堪えない悲惨な状況だった。', english: 'The scene of that accident was a tragic situation that was unbearable to look at.', romaji: 'Ano jiko no genba wa, miru ni taenai hisan na joukyou datta.' },
          { japanese: '皆様からのご支援に、感謝に堪えません。', english: 'I am filled with boundless gratitude for the support from everyone.', romaji: 'Minasama kara no goshien ni, kansha ni taemasen.' },
          { japanese: '若い命が失われたことは、同情に堪えない。', english: 'The loss of young lives is something I cannot help but deeply sympathize with.', romaji: 'Wakai inochi ga ushinawareta koto wa, doujou ni taenai.' },
          { japanese: '自分の不注意で起きた事故であり、後悔に堪えません。', english: 'It was an accident caused by my own carelessness, and I am filled with extreme regret.', romaji: 'Jibun no fuchuui de okita jiko de ari, koukai ni taemasen.' },
          { japanese: '彼の演奏はひどすぎて、聞くに堪えなかった。', english: 'His performance was so terrible that it was unbearable to listen to.', romaji: 'Kare no ensou wa hidosugite, kiku ni taenakatta.' },
          { japanese: '長年の夢が叶い、喜びに堪えません。', english: 'My long-held dream has come true, and I am filled with extreme joy.', romaji: 'Naganen no yume ga kanai, yorokobi ni taemasen.' },
          { japanese: '動物が虐待される動画は、見るに堪えない。', english: 'Videos of animals being abused are unbearable to watch.', romaji: 'Doubutsu ga gyakutai sareru douga wa, miru ni taenai.' },
          { japanese: 'これほどの名誉な賞をいただき、感激に堪えません。', english: 'Receiving such an honorable award, I am filled with deep emotion.', romaji: 'Kore hodo no meiyo na shou o itadaki, kangeki ni taemasen.' },
          { japanese: '彼の失礼な態度は、もはや許すに堪えない。', english: 'His rude attitude is no longer bearable to forgive.', romaji: 'Kare no shitsurei na taido wa, mohaya yurusu ni taenai.' }
        ],
        conversation: {
          context: 'An award acceptance speech.',
          dialogue: [
            { speaker: '受賞者', japanese: 'このような素晴らしい賞をいただき、感謝に堪えません。', english: 'Receiving such a wonderful award, I am filled with boundless gratitude.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Unbearable to listen to (聞く - kiku)."',
            'Translate: "Unbearable to look at (見る - miru)."',
            'Translate: "Extremely grateful / Filled with boundless gratitude (感謝 - kansha)."'
          ],
          answers: [
            '聞くに堪えない (Kiku ni taenai)',
            '見るに堪えない (Miru ni taenai)',
            '感謝に堪えない (Kansha ni taenai)'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの政治家（せいじか）の言（い）い訳（わけ）は、あまりにも見苦（みぐる）しくて___に堪（た）えない。',
            options: ['見る', '聞く', '怒る', '笑う'],
            correctIndex: 1,
            explanation: 'The politician\'s excuses (言い訳) are spoken, so they are "unbearable to listen to". 聞くに堪えない.'
          },
          {
            question: '皆様（みなさま）の温（あたた）かいご支援（しえん）に対（たい）し、___に堪（た）えません。',
            options: ['同情', '後悔', '驚き', '感謝'],
            correctIndex: 3,
            explanation: 'Receiving warm support (ご支援) triggers extreme gratitude. 感謝に堪えません is a highly tested fixed phrase.'
          }
        ],
        realLifeUsage: 'Often heard at weddings, farewell parties, and formal apologies in Japan.'
      }
    ]
  },
  {
    lessonNum: 3,
    title: 'Advanced Relations & Incomplete Items',
    description: 'Formal relations and partial developments.',
    topics: [
      {
        id: 'n1-l3-t1',
        pattern: '〜かたがた',
        pronunciation: 'katagata',
        meaning: 'While doing / With the intention of doing both',
        isImplemented: true,
        whenAndWhy: 'Used in highly polite business or formal greetings. It means you are doing one action (usually visiting someone) with TWO purposes in mind.',
        explanation: 'Attach かたがた (katagata) to an ACTION NOUN (usually formal nouns like 挨拶, お礼, 報告, お見舞い). The action that follows is almost always "going" or "visiting" (伺う, 参る).',
        formation: {
          formula: 'Noun (Formal Action) + かたがた',
          rules: [
            'Noun + かたがた (e.g. 挨拶かたがた - while greeting / for the purpose of greeting)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['ご挨拶 (go-aisatsu)', 'ご挨拶かたがた', 'For the purpose of greeting (and also visiting)'],
            ['お礼 (o-rei)', 'お礼かたがた', 'For the purpose of thanking (and also visiting)'],
            ['ご報告 (go-houkoku)', 'ご報告かたがた', 'For the purpose of reporting (and also visiting)']
          ]
        },
        notes: 'In N1, this is frequently compared to 〜がてら (while taking the opportunity - N1 L1). がてら is casual/standard. かたがた is strictly for formal business interactions.',
        mistakes: 'Do not use this with casual nouns. (✕ 買い物かたがた - Wrong. Use 買い物がてら).',
        comparison: {
          similarPattern: '〜がてら (While - N1 L1)',
          difference: '散歩がてら (While taking a walk - casual). ご挨拶かたがた伺いました (I visited you with the intention of greeting you - highly formal/business).'
        },
        memoryTips: 'Kata = person/side. Gata = plural. Treating both sides/purposes with equal respect.',
        examples: [
          { japanese: '帰国のご報告かたがた、先生のお宅に伺いました。', english: 'I visited the teacher\'s house with the intention of reporting my return to the country.', romaji: 'Kikoku no gohoukoku katagata, sensei no otaku ni ukagaimashita.' },
          { japanese: 'お礼かたがた、少しお時間をいただけますでしょうか。', english: 'With the intention of thanking you, could I have a little of your time?', romaji: 'Orei katagata, sukoshi ojikan o itadakemasu deshou ka.' },
          { japanese: '先日のお詫び（わび）かたがた、お伺いしたいのですが。', english: 'I would like to visit you with the intention of apologizing for the other day.', romaji: 'Senjitsu no owabi katagata, oukagai shitai no desu ga.' },
          { japanese: 'ご挨拶かたがた、粗品（そしな）をお持ちしました。', english: 'With the intention of greeting you, I brought a small gift.', romaji: 'Go-aisatsu katagata, soshina o omochi shimashita.' },
          { japanese: '退院のお見舞いかたがた、お花を贈った。', english: 'With the intention of visiting for hospital discharge, I sent flowers.', romaji: 'Taiin no omiwai katagata, ohana o okutta.' },
          { japanese: '新製品の紹介かたがた、御社に参ります。', english: 'I will visit your company with the intention of introducing the new product.', romaji: 'Shinseihin no shoukai katagata, onsha ni mairimasu.' },
          { japanese: '近くまで来たので、ご挨拶かたがた寄らせていただきました。', english: 'Since I came nearby, I took the liberty of dropping by to greet you.', romaji: 'Chikaku made kita node, go-aisatsu katagata yorasete itadakimashita.' },
          { japanese: 'お祝いかたがた、パーティーに参加した。', english: 'I participated in the party with the intention of celebrating.', romaji: 'Oiwai katagata, paatii ni sanka shita.' },
          { japanese: '近況（きんきょう）報告かたがた、一度お食事でもいかがですか。', english: 'With the intention of reporting our recent status, how about a meal sometime?', romaji: 'Kinkyou houkoku katagata, ichido oshokuji demo ikaga desu ka.' },
          { japanese: '転勤のご挨拶かたがた、メールを差し上げました。', english: 'I sent an email with the intention of greeting you regarding my job transfer.', romaji: 'Tenkin no go-aisatsu katagata, meeru o sashiagemashita.' }
        ],
        conversation: {
          context: 'Visiting a client.',
          dialogue: [
            { speaker: '営業マン', japanese: '本日は、新年のご挨拶かたがた、カレンダーをお持ちしました。', english: 'Today, I brought a calendar with the intention of offering New Year\'s greetings.' },
            { speaker: '顧客', japanese: 'ご丁寧（ていねい）にありがとうございます。', english: 'Thank you for your politeness.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "With the intention of greeting (ご挨拶 - go-aisatsu)..."',
            'Translate: "With the intention of thanking (お礼 - orei)..."',
            'Which implies a more formal business setting: 散歩がてら or ご挨拶かたがた?'
          ],
          answers: [
            'ご挨拶かたがた (Go-aisatsu katagata)',
            'お礼かたがた (Orei katagata)',
            'ご挨拶かたがた (かたがた is strictly formal/business).'
          ]
        },
        jlptQuestions: [
          {
            question: '結婚（けっこん）のご報告（ほうこく）___、恩師（おんし）のお宅（たく）に伺（うかが）った。',
            options: ['がてら', 'にあたって', 'かたがた', 'を皮切りに'],
            correctIndex: 2,
            explanation: 'Visiting a respected teacher (恩師) to report a marriage. This is a highly formal action with two purposes (reporting and visiting). かたがた is the correct choice.'
          },
          {
            question: '先日（せんじつ）の___かたがた、お伺（うかが）いしたいと存（ぞん）じます。',
            options: ['お詫び', '散歩', '買い物', '遊び'],
            correctIndex: 0,
            explanation: 'かたがた MUST be used with formal action nouns like 挨拶 (greeting), お礼 (thanking), or お詫び (apologizing).'
          }
        ],
        realLifeUsage: 'Often written in the opening sentences of formal business emails or New Year\'s greeting cards (年賀状).'
      },
      {
        id: 'n1-l3-t2',
        pattern: '〜なくしては',
        pronunciation: 'nakushite wa',
        meaning: 'Without / Cannot happen without',
        isImplemented: true,
        whenAndWhy: 'Used to strongly emphasize that something is ABSOLUTELY ESSENTIAL. "Without X, Y is completely impossible."',
        explanation: 'Attach なくしては (nakushite wa) or なくして (nakushite) to a noun. The sentence that follows is ALWAYS negative (cannot do, impossible, won\'t succeed).',
        formation: {
          formula: 'Noun + なくして（は） + Negative Verb',
          rules: [
            'Noun + なくしては (e.g. 努力なくしては - without effort...)',
            'Noun + なくして (same meaning, slightly shorter)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['努力 (doryoku)', '努力なくしては', 'Without effort...'],
            ['愛 (ai)', '愛なくしては', 'Without love...'],
            ['協力 (kyouryoku)', '協力なくしては', 'Without cooperation...']
          ]
        },
        notes: 'In N1 reading sections, this grammar is used to identify the author\'s core message (e.g. "The author believes EFFORT is essential because they used 努力なくしては").',
        mistakes: 'Do not follow this with a positive sentence. (✕ 努力なくしては、成功する - Wrong. It MUST be 成功しない - cannot succeed).',
        comparison: {
          similarPattern: '〜なしに (Without - N1 L3)',
          difference: 'なしに is for general actions without doing something else (Leave without saying goodbye). なくしては is a strong conditional: "If X is missing, Y is absolutely impossible."'
        },
        memoryTips: 'Naku (無い - none) + shite (して - doing/being). Without it existing.',
        examples: [
          { japanese: '皆様の協力なくしては、このプロジェクトは成功しません。', english: 'Without everyone\'s cooperation, this project will not succeed.', romaji: 'Minasama no kyouryoku nakushite wa, kono purojekuto wa seikou shimasen.' },
          { japanese: '日々の努力なくしては、プロの選手にはなれない。', english: 'Without daily effort, you cannot become a pro athlete.', romaji: 'Hibi no doryoku nakushite wa, puro no senshu ni wa narenai.' },
          { japanese: '愛なくしては、人は生きていけない。', english: 'Without love, people cannot live.', romaji: 'Ai nakushite wa, hito wa ikite ikenai.' },
          { japanese: '過去の反省なくしては、未来の発展はあり得ない。', english: 'Without reflecting on the past, future development is impossible.', romaji: 'Kako no hansei nakushite wa, mirai no hatten wa arienai.' },
          { japanese: '社員のモチベーション向上なくして、会社の成長はない。', english: 'Without improving employee motivation, there is no company growth.', romaji: 'Shain no mochibeeshon koujou nakushite, kaisha no seichou wa nai.' },
          { japanese: '健康なくしては、富（とみ）も意味がない。', english: 'Without health, wealth is also meaningless.', romaji: 'Kenkou nakushite wa, tomi mo imi ga nai.' },
          { japanese: '国民の理解なくして、この法律は実行できない。', english: 'Without the understanding of the citizens, this law cannot be executed.', romaji: 'Kokumin no rikai nakushite, kono houritsu wa jikkou dekinai.' },
          { japanese: '自然との共存（きょうぞん）なくしては、人類の未来はない。', english: 'Without coexistence with nature, there is no future for humanity.', romaji: 'Shizen to no kyouzon nakushite wa, jinrui no mirai wa nai.' },
          { japanese: '彼の強力なリーダーシップなくしては、優勝できなかっただろう。', english: 'Without his strong leadership, we probably could not have won the championship.', romaji: 'Kare no kyouryoku na riidaashippu nakushite wa, yuushou dekinakatta darou.' },
          { japanese: '相互の信頼なくしては、良い関係は築けない。', english: 'Without mutual trust, a good relationship cannot be built.', romaji: 'Sougo no shinrai nakushite wa, yoi kankei wa kizukenai.' }
        ],
        conversation: {
          context: 'An acceptance speech.',
          dialogue: [
            { speaker: '監督', japanese: 'ファンの皆様の応援なくしては、今日の勝利はありませんでした。', english: 'Without the support of all the fans, today\'s victory would not exist.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Without effort (努力 - doryoku)..."',
            'Translate: "Without cooperation (協力 - kyouryoku)..."',
            'Must the second half of the sentence be positive or negative?'
          ],
          answers: [
            '努力なくしては (Doryoku nakushite wa)',
            '協力なくしては (Kyouryoku nakushite wa)',
            'Negative (e.g. cannot succeed, impossible).'
          ]
        },
        jlptQuestions: [
          {
            question: 'たゆまぬ努力（どれく）___、オリンピックで金メダルを取ることは不可能（ふかのう）だ。',
            options: ['にかかわらず', 'なくしては', 'にあたって', 'を皮切りに'],
            correctIndex: 1,
            explanation: 'The structure is "Without X, Y is impossible". 努力なくしては.'
          },
          {
            question: '家族（かぞく）の支（ささ）えなくしては、この辛（つら）い治療（ちりょう）を乗（の）り越（こ）えることは___。',
            options: ['できた', 'できただろう', 'できなかった', 'できるにすぎない'],
            correctIndex: 2,
            explanation: 'なくしては MUST be followed by a negative outcome. できなかった (could not do it) is the only negative option.'
          }
        ],
        realLifeUsage: 'Often found in anime themes: 「犠牲（ぎせい）なくしては、何も得られない」 (Without sacrifice, nothing can be gained - Fullmetal Alchemist).'
      },
      {
        id: 'n1-l3-t3',
        pattern: '〜と相まって',
        pronunciation: 'to aimatte',
        meaning: 'Combined with / Together with',
        isImplemented: true,
        whenAndWhy: 'Used to express that TWO different factors combine to create an even greater effect. "The beautiful scenery combined with the good weather made for a perfect day."',
        explanation: 'Attach と相まって (to aimatte) to a noun. The noun is the second factor that combines with the first factor. It comes from 相まる (to join together).',
        formation: {
          formula: 'Noun + と相まって',
          rules: [
            'Noun A + と + Noun B + が相まって (A and B combine and...)',
            'Noun A は + Noun B + と相まって (A, combined with B...)'
          ]
        },
        conjugations: {
          headers: ['Factor', 'Structure', 'Translation'],
          rows: [
            ['天気の良さ (Good weather)', '天気の良さと相まって', 'Combined with the good weather...'],
            ['デザイン (Design)', 'デザインと相まって', 'Combined with the design...']
          ]
        },
        notes: 'The resulting effect is usually positive (a great synergy), but it can occasionally be negative (bad weather combined with poor preparation led to a disaster).',
        mistakes: 'Do not use this for simply doing actions together. (✕ 友達と相まって宿題をした - Wrong. Use 一緒に. 相まって is for abstract factors combining to create an effect).',
        comparison: {
          similarPattern: '〜に加えて (In addition to - N3)',
          difference: 'に加えて is just A + B (It rained, and in addition, it was windy). と相まって emphasizes the SYNERGY or MULTIPLIED EFFECT of A and B combining.'
        },
        memoryTips: 'Ai (相) = mutual. Matte (待って -> 交って) = mix/mingle. Mutually mixing together.',
        examples: [
          { japanese: '昨日は天気の良さと相まって、ピクニックは最高だった。', english: 'Yesterday, combined with the good weather, the picnic was the best.', romaji: 'Kinou wa tenki no yosa to aimatte, pikunikku wa saikou datta.' },
          { japanese: '彼の才能は、血のにじむような努力と相まって、開花した。', english: 'His talent, combined with his blood-sweating effort, blossomed.', romaji: 'Kare no sainou wa, chi no nijimu you na doryoku to aimatte, kaika shita.' },
          { japanese: 'このラーメンは、スープの辛さと麺のモチモチ感が相まって、絶品だ。', english: 'As for this ramen, the spiciness of the soup and the chewiness of the noodles combining makes it a masterpiece.', romaji: 'Kono raamen wa, suupu no karasa to men no mochimochikan ga aimatte, zeppin da.' },
          { japanese: 'その映画は、美しい音楽と相まって、観客を感動させた。', english: 'That movie, combined with the beautiful music, moved the audience.', romaji: 'Sono eiga wa, utsukushii ongaku to aimatte, kankyaku o kandou saseta.' },
          { japanese: '不景気は、物価の上昇と相まって、人々の生活を苦しめている。', english: 'The economic recession, combined with the rise in prices, is making people\'s lives difficult.', romaji: 'Fukeiki wa, bukka no joushou to aimatte, hitobito no seikatsu o kurushimete iru.' },
          { japanese: '日本の伝統建築は、自然の美しさと相まって、素晴らしい景観を作り出す。', english: 'Traditional Japanese architecture, combined with the beauty of nature, creates a wonderful landscape.', romaji: 'Nihon no dentou kenchiku wa, shizen no utsukushisa to aimatte, subarashii keikan o tsukuridasu.' },
          { japanese: '社長のカリスマ性と、社員の技術力が相まって、会社は急成長した。', english: 'The president\'s charisma and the employees\' technical skills combined, and the company grew rapidly.', romaji: 'Shachou no karisumasei to, shain no gijutsuryoku ga aimatte, kaisha wa kyuuseichou shita.' },
          { japanese: '独特のデザインが、鮮やかな色と相まって、目を引く。', english: 'The unique design, combined with the vivid colors, catches the eye.', romaji: 'Dokutoku no dezain ga, azayaka na iro to aimatte, me o hiku.' },
          { japanese: '緊張感と疲れが相まって、彼は倒れてしまった。', english: 'The sense of tension and fatigue combined, and he collapsed.', romaji: 'Kinchoukan to tsukare ga aimatte, kare wa taorete shimatta.' },
          { japanese: '素晴らしい脚本が俳優の演技力と相まって、大ヒット作となった。', english: 'The wonderful script combined with the actors\' acting ability, and it became a huge hit work.', romaji: 'Subarashii kyakuhon ga haiyuu no engiryoku to aimatte, daihitto saku to natta.' }
        ],
        conversation: {
          context: 'Food review.',
          dialogue: [
            { speaker: 'ケン', japanese: 'このケーキ、甘酸っぱくて美味しい！', english: 'This cake is sweet and sour and delicious!' },
            { speaker: 'マリー', japanese: '本当ね。イチゴの酸味が、生クリームの甘さと相まって最高だわ。', english: 'True. The sourness of the strawberries, combined with the sweetness of the fresh cream, is the best.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Combined with the good weather (天気の良さ)..."',
            'Translate: "Combined with the beautiful music (美しい音楽)..."',
            'Does 相まって describe people doing physical activities together?'
          ],
          answers: [
            '天気の良さと相まって (Tenki no yosa to aimatte)',
            '美しい音楽と相まって (Utsukushii ongaku to aimatte)',
            'No, it describes factors/elements combining to create a synergistic effect.'
          ]
        },
        jlptQuestions: [
          {
            question: '彼（かれ）の生（う）まれ持（も）った才能（さいのう）が、厳（きび）しい練習（れんしゅう）と___、世界新記録（せかいしんきろく）を生（う）み出（だ）した。',
            options: ['かたがた', '相まって', '皮切りに', 'のみならず'],
            correctIndex: 1,
            explanation: 'Talent COMBINED WITH practice creates a world record. と相まって represents this synergy.'
          },
          {
            question: 'この町（まち）は、古（ふる）い町並（まちな）みが周囲（しゅうい）の自然（しぜん）___相（あい）まって、とても美（うつく）しい。',
            options: ['と', 'が', 'を', 'に'],
            correctIndex: 0,
            explanation: 'The grammar pattern requires the particle と before 相まって (Combined WITH).'
          }
        ],
        realLifeUsage: 'A favorite phrase for food critics and movie reviewers.'
      },
      {
        id: 'n1-l3-t4',
        pattern: '〜にかかわる',
        pronunciation: 'ni kakawaru',
        meaning: 'Affecting / Involving (a grave issue)',
        isImplemented: true,
        whenAndWhy: 'Used to show that an action or problem has a direct, serious impact on something extremely important (like life, honor, or privacy).',
        explanation: 'Attach にかかわる to a noun that represents something crucial. It means "relating to and threatening". Common collocations include 命 (life), プライバシー (privacy), 名誉 (honor), and 生死 (life and death).',
        formation: {
          formula: 'Noun (Crucial Concept) + にかかわる',
          rules: [
            'Noun + にかかわる + Noun (e.g. 命にかかわる問題 - a problem affecting life)',
            'Noun + にかかわる (e.g. プライバシーにかかわる - it affects privacy)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['命 (inochi)', '命にかかわる', 'Life-threatening / Affecting one\'s life'],
            ['名誉 (meiyo)', '名誉にかかわる', 'Affecting one\'s honor'],
            ['生死 (seishi)', '生死にかかわる', 'A matter of life and death']
          ]
        },
        notes: 'Do not confuse this with にかかわらず (regardless of - N2 L2). にかかわる means it DOES matter and DOES affect the issue deeply.',
        mistakes: 'Do not use this for trivial, everyday topics. (✕ 今日の晩ご飯にかかわる問題だ - A problem affecting today\'s dinner. This sounds like a joke).',
        comparison: {
          similarPattern: '〜に関する (Regarding - N3)',
          difference: '仕事に関する話 (A talk regarding work - neutral). 命にかかわる病気 (A disease threatening life - serious, critical impact).'
        },
        memoryTips: 'Kakawaru (関わる) = to be involved with. It involves the most important things in life.',
        examples: [
          { japanese: 'これは、患者の命にかかわる重大なミスだ。', english: 'This is a grave mistake that affects the patient\'s life.', romaji: 'Kore wa, kanja no inochi ni kakawaru juudai na misu da.' },
          { japanese: '個人のプライバシーにかかわる質問は、お答えできません。', english: 'I cannot answer questions involving personal privacy.', romaji: 'Kojin no puraibashii ni kakawaru shitsumon wa, okotae dekimasen.' },
          { japanese: 'そんなことをしたら、君の名誉にかかわるよ。', english: 'If you do such a thing, it will affect your honor.', romaji: 'Sonna koto o shitara, kimi no meiyo ni kakawaru yo.' },
          { japanese: '国家の安全にかかわる機密情報が漏れた。', english: 'Classified information affecting national security was leaked.', romaji: 'Kokka no anzen ni kakawaru kimitsu jouhou ga moreta.' },
          { japanese: 'それは会社の存続（そんぞく）にかかわる問題だ。', english: 'That is a problem affecting the survival of the company.', romaji: 'Sore wa kaisha no sonzoku ni kakawaru mondai da.' },
          { japanese: '検査の結果、命にかかわる病気ではないことがわかった。', english: 'As a result of the test, we found it is not a life-threatening disease.', romaji: 'Kensa no kekka, inochi ni kakawaru byouki de wa nai koto ga wakatta.' },
          { japanese: '教育は、国の未来にかかわる重要な事業だ。', english: 'Education is an important enterprise affecting the future of the country.', romaji: 'Kyouiku wa, kuni no mirai ni kakawaru juuyou na jigyou da.' },
          { japanese: 'これは私のプライドにかかわることなので、絶対に譲れない。', english: 'Because this affects my pride, I absolutely cannot yield.', romaji: 'Kore wa watashi no puraido ni kakawaru koto na node, zettai ni yuzurenai.' },
          { japanese: '食品の偽装（ぎそう）は、消費者の健康にかかわる。', english: 'Food misrepresentation affects the health of consumers.', romaji: 'Shokuhin no gisou wa, shouhisha no kenkou ni kakawaru.' },
          { japanese: '生死にかかわる怪我ではないので、安心してください。', english: 'It is not a life-or-death injury, so please be relieved.', romaji: 'Seishi ni kakawaru kega de wa nai node, anshin shite kudasai.' }
        ],
        conversation: {
          context: 'Doctor talking to a patient.',
          dialogue: [
            { speaker: '医者', japanese: '幸い、命にかかわる病気ではありません。薬を飲めば治ります。', english: 'Fortunately, it is not a life-threatening illness. It will be cured if you take medicine.' },
            { speaker: '患者', japanese: 'ああ、よかった。安心しました。', english: 'Ah, thank goodness. I am relieved.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "A problem affecting life (命 - inochi)."',
            'Translate: "A question affecting privacy (プライバシー)."',
            'Can you say "明日の天気にかかわる" (Affects tomorrow\'s weather)?'
          ],
          answers: [
            '命にかかわる問題 (Inochi ni kakawaru mondai)',
            'プライバシーにかかわる質問 (Puraibashii ni kakawaru shitsumon)',
            'No, because weather is not a crucial, threatened concept like life, honor, or privacy.'
          ]
        },
        jlptQuestions: [
          {
            question: 'このまま放置（ほうち）すれば、患者（かんじゃ）の___にかかわる状態（じょうたい）になる。',
            options: ['性格', '命', '天気', '食事'],
            correctIndex: 1,
            explanation: '命にかかわる (Life-threatening) is the most heavily tested collocation for this grammar point.'
          },
          {
            question: 'それは私（わたし）の名誉（めいよ）に___ことだから、黙（だま）っているわけにはいかない。',
            options: ['かかわる', 'かかわるの', 'かかわらず', 'かかわりない'],
            correctIndex: 0,
            explanation: '名誉にかかわること (A matter affecting my honor).'
          }
        ],
        realLifeUsage: 'Often heard in medical dramas: 「命にかかわる状態です」 (They are in a life-threatening condition).'
      },
      {
        id: 'n1-l3-t5',
        pattern: '〜なしに',
        pronunciation: 'nashi ni',
        meaning: 'Without / Without doing',
        isImplemented: true,
        whenAndWhy: 'Used to state that an action was performed WITHOUT doing something that is normally expected (like saying goodbye, getting permission, or giving notice).',
        explanation: 'Attach なしに (nashi ni) or なしで (nashi de) to a noun. If using a verb, use Verb(Dictionary) + ことなしに.',
        formation: {
          formula: 'Noun / Verb(Dictionary)+こと + なしに',
          rules: [
            'Noun + なしに (e.g. 予告なしに - without notice)',
            'Verb(Dict) + ことなしに (e.g. 休むことなしに - without resting)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Noun', '挨拶なしに', 'Without greeting / Without saying goodbye'],
            ['Noun', '許可なしに', 'Without permission'],
            ['Verb', '眠ることなしに', 'Without sleeping']
          ]
        },
        notes: 'This is the formal, written equivalent of 〜ないで (without doing). 予告なしに (Without notice) and 許可なしに (Without permission) are extremely common fixed phrases.',
        mistakes: 'Do not use this for simple, physical things you forgot. (✕ 財布なしに外に出た - Unnatural. Use 財布を持たないで). なしに is for social expectations or continuous states.',
        comparison: {
          similarPattern: '〜なくしては (Without - N1 L3)',
          difference: 'なくしては is a strong conditional (Without X, Y is impossible). なしに just describes how an action was done (He entered the room without knocking).'
        },
        memoryTips: 'Nashi (無し - none) + ni (adverb particle). Doing it in a state of "none".',
        examples: [
          { japanese: '彼は挨拶なしに、突然帰ってしまった。', english: 'He suddenly went home without saying goodbye.', romaji: 'Kare wa aisatsu nashi ni, totsuzen kaette shimatta.' },
          { japanese: '許可なしに、この部屋に入ってはいけません。', english: 'You must not enter this room without permission.', romaji: 'Kyoka nashi ni, kono heya ni haitte wa ikemasen.' },
          { japanese: '予告なしに、テストが行われた。', english: 'A test was held without advance notice.', romaji: 'Yokoku nashi ni, tesuto ga okonawareta.' },
          { japanese: '連絡なしに遅刻した場合、減点します。', english: 'If you are late without contacting us, points will be deducted.', romaji: 'Renraku nashi ni chikoku shita baai, genten shimasu.' },
          { japanese: '誰の助けも借りることなしに、一人で完成させた。', english: 'I completed it alone, without borrowing anyone\'s help.', romaji: 'Dare no tasuke mo kariru koto nashi ni, hitori de kansei saseta.' },
          { japanese: 'あの人は、休むことなしに24時間働いた。', english: 'That person worked 24 hours without resting.', romaji: 'Ano hito wa, yasumu koto nashi ni nijiyuuyo jikan hataraita.' },
          { japanese: '何の前触れ（まえぶれ）なしに、地震が起きた。', english: 'The earthquake occurred without any warning.', romaji: 'Nan no maebure nashi ni, jishin ga okita.' },
          { japanese: 'パスポートなしには、海外へ行けない。（なしには = Without... cannot）', english: 'Without a passport, you cannot go overseas.', romaji: 'Pasupooto nashi ni wa, kaigai e ikenai.' },
          { japanese: '相手の気持ちを考えることなしに、勝手な行動をしてはいけない。', english: 'You must not act selfishly without considering the other person\'s feelings.', romaji: 'Aite no kimochi o kangaeru koto nashi ni, katte na koudou o shite wa ikenai.' },
          { japanese: '理由なしに、人を嫌ってはいけない。', english: 'You shouldn\'t hate people without a reason.', romaji: 'Riyuu nashi ni, hito o kiratte wa ikenai.' }
        ],
        conversation: {
          context: 'Teacher scolding a student.',
          dialogue: [
            { speaker: '先生', japanese: 'どうして昨日、無断（むだん）で休んだんですか。連絡なしに休むのはルール違反ですよ。', english: 'Why did you take an unexcused absence yesterday? Resting without contact is a rule violation.' },
            { speaker: '学生', japanese: 'すみません。熱が高くて、電話できませんでした。', english: 'I am sorry. My fever was high and I couldn\'t call.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Without permission (許可 - kyoka)."',
            'Translate: "Without resting (休む - yasumu)." (Verb)',
            'Translate: "Without notice (予告 - yokoku)."'
          ],
          answers: [
            '許可なしに (Kyoka nashi ni)',
            '休むことなしに (Yasumu koto nashi ni)',
            '予告なしに (Yokoku nashi ni)'
          ]
        },
        jlptQuestions: [
          {
            question: '社長（しゃちょう）の許可（きょか）___、この計画（けいかく）を進（すす）めることはできない。',
            options: ['なしに', 'を皮切りに', '極まりない', 'ずにはいられない'],
            correctIndex: 0,
            explanation: '"Without the president\'s permission." 許可なしに is a very standard business phrase.'
          },
          {
            question: '一日（いちにち）も休む___働（はたら）き続（つづ）けた結果（けっか）、倒（たお）れてしまった。',
            options: ['ことなしに', 'なしに', 'ことない', 'なし'],
            correctIndex: 0,
            explanation: 'When attaching to a verb (休む), you must use ことなしに.'
          }
        ],
        realLifeUsage: 'Seen on many warning signs: 「許可なしに立ち入らないこと」 (Do not enter without permission).'
      }
    ]
  },
  {
    lessonNum: 4,
    title: 'Formal Exclusions & Viewpoints',
    description: 'Rare grammar points for professional discourse.',
    topics: [
      {
        id: 'n1-l4-t1',
        pattern: '〜をおいてほかにない',
        pronunciation: 'o oite hoka ni nai',
        meaning: 'There is no one/nothing other than...',
        isImplemented: true,
        whenAndWhy: 'Used to strongly assert that X is the absolute ONLY choice, the best person, or the only solution. It is highly complimentary or desperate.',
        explanation: 'Attach をおいて (o oite) to a noun. ほかにない (there is no other) follows it. It literally means "Setting X aside, there is no other (capable person/thing)".',
        formation: {
          formula: 'Noun + をおいて（ほかに）ない',
          rules: [
            'Noun (Person) + をおいてほかにいない (e.g. 彼をおいてほかにいない - there is no one but him)',
            'Noun (Thing) + をおいてほかにない (e.g. 今をおいてほかない - there is no time but now)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['彼 (He)', '彼をおいてほかにいない', 'There is no one but him (who can do it)'],
            ['この薬 (This medicine)', 'この薬をおいてほかにない', 'There is no medicine other than this (that works)'],
            ['今 (Now)', '今をおいてほかにない', 'There is no time other than right now']
          ]
        },
        notes: 'In casual conversation, you would just say 彼しかいない (There is only him). をおいてほかにない is the dramatic, formal version used in speeches or serious discussions.',
        mistakes: 'Do not use this for minor, everyday choices. (✕ 食べるなら、リンゴをおいてほかにない - Overly dramatic). Use it for critical decisions (presidents, life-saving medicines, massive opportunities).',
        comparison: {
          similarPattern: '〜しかいない (Only / No one but - N4)',
          difference: '彼しかいない is casual (Only he is here). 彼をおいてほかにいない is highly formal and praises the person\'s unique capability (He is the absolute only man for the job).'
        },
        memoryTips: 'Oite (置いて) = putting aside. "Putting him aside, there is no one else in the world."',
        examples: [
          { japanese: 'このプロジェクトを成功させられるのは、彼をおいてほかにいない。', english: 'The only one who can make this project succeed is him (there is no one other than him).', romaji: 'Kono purojekuto o seikou saserareru no wa, kare o oite hoka ni inai.' },
          { japanese: '私の病気を治せるのは、この手術をおいてほかにない。', english: 'There is no other way to cure my illness than this surgery.', romaji: 'Watashi no byouki o naoseru no wa, kono shujutsu o oite hoka ni nai.' },
          { japanese: '次の社長にふさわしいのは、田中さんをおいてほかにいないだろう。', english: 'The only person suitable to be the next president is probably Mr. Tanaka.', romaji: 'Tsugi no shachou ni fusawashii no wa, Tanaka-san o oite hoka ni inai darou.' },
          { japanese: '日本でこの技術を持っている会社は、我が社をおいてほかにありません。', english: 'In Japan, there is no other company that possesses this technology than ours.', romaji: 'Nihon de kono gijutsu o motte iru kaisha wa, wagasha o oite hoka ni arimasen.' },
          { japanese: '新しいことに挑戦するなら、若くて元気な今をおいてほかにない。', english: 'If I am going to challenge something new, there is no time other than right now, while I am young and energetic.', romaji: 'Atarashii koto ni chousen suru nara, wakakute genki na ima o oite hoka ni nai.' },
          { japanese: '私を理解してくれる人は、あなたをおいてほかにいません。', english: 'There is no one who understands me other than you.', romaji: 'Watashi o rikai shite kureru hito wa, anata o oite hoka ni imasen.' },
          { japanese: 'この危機を救えるのは、その方法をおいてほかにない。', english: 'There is no other method than that one to save us from this crisis.', romaji: 'Kono kiki o sukueru no wa, sono houhou o oite hoka ni nai.' },
          { japanese: '世界平和を実現する道は、対話をおいてほかにない。', english: 'There is no other path to realizing world peace than dialogue.', romaji: 'Sekai heiwa o jitsugen suru michi wa, taiwa o oite hoka ni nai.' },
          { japanese: 'あの素晴らしい景色を見られる場所は、ここをおいてほかにない。', english: 'There is no other place than here where you can see that wonderful scenery.', romaji: 'Ano subarashii keshiki o mirareru basho wa, koko o oite hoka ni nai.' },
          { japanese: '私を信じてくれるのは、家族をおいてほかにない。', english: 'The only ones who believe in me are my family.', romaji: 'Watashi o shinjite kureru no wa, kazoku o oite hoka ni nai.' }
        ],
        conversation: {
          context: 'Discussing a promotion.',
          dialogue: [
            { speaker: '部長', japanese: '新しい支店長、誰にするべきだと思う？', english: 'Who do you think we should make the new branch manager?' },
            { speaker: '課長', japanese: '営業成績トップの山田さんをおいてほかにいないでしょう。', english: 'There is no one other than Yamada, who has the top sales results, right?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "There is no one other than him (彼 - kare)."',
            'Translate: "There is no time other than now (今 - ima)."',
            'If the noun is a person, should you use ない or いない at the end?'
          ],
          answers: [
            '彼をおいてほかにいない (Kare o oite hoka ni inai)',
            '今をおいてほかにない (Ima o oite hoka ni nai)',
            'いない (inai). For things/time/methods, use ない.'
          ]
        },
        jlptQuestions: [
          {
            question: 'この難（むずか）しい手術（しゅじゅつ）を成功（せいこう）させられる医者（いしゃ）は、ブラック・ジャック先生（せんせい）___ほかにいない。',
            options: ['にあたって', 'を皮切りに', 'をおいて', 'ならでは'],
            correctIndex: 2,
            explanation: 'Praising someone as the absolute ONLY capable person for a task. をおいて + ほかにいない is the required pair.'
          },
          {
            question: '世界（せかい）を変（か）えるのは、教育（きょういく）をおいてほかに___。',
            options: ['ある', 'ない', 'いる', 'いない'],
            correctIndex: 1,
            explanation: 'Education (教育) is a concept/thing, not a person. Therefore, use ない, not いない.'
          }
        ],
        realLifeUsage: 'A favorite phrase in Japanese job interviews or romance: 「御社をおいてほかにありません」 (There is no company I want to join other than yours).'
      },
      {
        id: 'n1-l4-t2',
        pattern: '〜ならでは',
        pronunciation: 'naradewa',
        meaning: 'Unique to / Only possible with',
        isImplemented: true,
        whenAndWhy: 'Used to highly praise something as being so special that it is ONLY possible in that specific place, by that specific person, or with that specific thing.',
        explanation: 'Attach ならでは to a noun. It is often followed by の (to modify another noun). It means "X is the ONLY one who could do this" or "This charm is UNIQUE to X."',
        formation: {
          formula: 'Noun + ならでは（の）',
          rules: [
            'Noun + ならではだ (e.g. 京都ならではだ - It is unique to Kyoto)',
            'Noun + ならではの + Noun (e.g. プロならではの技 - A technique only a pro could do)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['京都 (Kyoto)', '京都ならではの景色', 'Scenery unique to Kyoto'],
            ['プロ (Pro)', 'プロならではの仕事', 'Work only possible by a professional'],
            ['彼 (He)', '彼ならではのアイデア', 'An idea unique to him']
          ]
        },
        notes: 'This grammar point is 100% positive. You cannot use it to describe a unique flaw or a bad thing.',
        mistakes: 'Do not use this negatively. (✕ 日本ならではの悪い習慣 - Wrong. ならでは is strictly for praise).',
        comparison: {
          similarPattern: '〜特有の (Unique to - General Vocabulary)',
          difference: '特有の can be used for good or bad things (A smell unique to this chemical). ならでは is strictly complimentary (A beautiful flavor unique to this region).'
        },
        memoryTips: 'Nara (if it is) + dewa (not). "If it is not X, it wouldn\'t exist." -> Only X has it.',
        examples: [
          { japanese: 'この美しい景色は、京都ならではだ。', english: 'This beautiful scenery is unique to Kyoto (you can\'t see it anywhere else).', romaji: 'Kono utsukushii keshiki wa, Kyouto naradewa da.' },
          { japanese: 'さっきの素晴らしいパスは、プロならではの技（わざ）ですね。', english: 'That wonderful pass just now is a technique only possible by a professional.', romaji: 'Sakki no subarashii pasu wa, puro naradewa no waza desu ne.' },
          { japanese: 'こんなユニークな発想は、彼ならではのものだ。', english: 'Such a unique conception is something unique to him.', romaji: 'Konna yuniiku na hassou wa, kare naradewa no mono da.' },
          { japanese: '地元（じもと）の新鮮な魚を使った料理は、この町ならではの味だ。', english: 'Dishes using fresh local fish are a flavor unique to this town.', romaji: 'Jimoto no shinsen na sakana o tsukatta ryouri wa, kono machi naradewa no aji da.' },
          { japanese: '経験者ならではの貴重（きちょう）なアドバイスをもらった。', english: 'I received valuable advice that only an experienced person could give.', romaji: 'Keikensha naradewa no kichou na adobaisu o moratta.' },
          { japanese: 'この温かいおもてなしは、日本の旅館ならではです。', english: 'This warm hospitality is unique to Japanese inns (ryokan).', romaji: 'Kono atatakai omotenashi wa, Nihon no ryokan naradewa desu.' },
          { japanese: '母親ならではの視点（してん）で、商品が開発された。', english: 'The product was developed with a viewpoint unique to mothers.', romaji: 'Hahaoya naradewa no shiten de, shouhin ga kaihatsu sareta.' },
          { japanese: 'あの迫力ある演技は、彼ならではだ。', english: 'That powerful acting is only possible by him.', romaji: 'Ano hakuryoku aru engi wa, kare naradewa da.' },
          { japanese: '手作りならではの温かみがある。', english: 'There is a warmth unique to handmade items.', romaji: 'Tezukuri naradewa no atatakami ga aru.' },
          { japanese: '専門店ならではの豊富な品揃え（しなぞろえ）が魅力だ。', english: 'The abundant lineup of goods unique to a specialty store is its charm.', romaji: 'Senmonten naradewa no houfu na shinazoroe ga miryoku da.' }
        ],
        conversation: {
          context: 'Eating at a local restaurant.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'このカニ、信じられないくらい美味しいね！', english: 'This crab is unbelievably delicious!' },
            { speaker: 'マリー', japanese: 'でしょ？北海道ならではの味よね。', english: 'Right? It is a flavor unique to Hokkaido.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Unique to Japan (日本)."',
            'Translate: "A technique (技 - waza) only a professional (プロ) can do."',
            'Can you say "A crime (犯罪) unique to Tokyo" using ならでは?'
          ],
          answers: [
            '日本ならでは (Nihon naradewa)',
            'プロならではの技 (Puro naradewa no waza)',
            'No. ならでは is strictly for positive praise, not crimes or negative things.'
          ]
        },
        jlptQuestions: [
          {
            question: 'この深（ふか）い味（あじ）わいは、１００年（ねん）続（つづ）く老舗（しにせ）___。',
            options: ['ならではだ', 'にかかわる', 'をおいてほかにない', 'ずにはいられない'],
            correctIndex: 0,
            explanation: 'Highly praising a unique flavor that ONLY a 100-year-old shop (老舗) can produce. ならではだ is the perfect fit.'
          },
          {
            question: '彼（かれ）の書（か）く文章（ぶんしょう）には、彼___のユーモアがある。',
            options: ['ならでは', 'なり', 'こそ', 'ばかり'],
            correctIndex: 0,
            explanation: 'A humor UNIQUE to him. 彼ならではのユーモア.'
          }
        ],
        realLifeUsage: 'Used constantly in tourism brochures: 「沖縄ならではの体験！」 (An experience unique to Okinawa!).'
      },
      {
        id: 'n1-l4-t3',
        pattern: '〜なりに',
        pronunciation: 'nari ni',
        meaning: 'In one\'s own way / Suitable to / Commensurate with',
        isImplemented: true,
        whenAndWhy: 'Used to say that someone is doing their best *within their own limits or level*. "It may not be perfect, but in my own way, I tried hard."',
        explanation: 'Attach なりに (nari ni) or なりの (nari no) to a noun or an adjective. It means that the action/result is matching or appropriate for that specific person/thing\'s status.',
        formation: {
          formula: 'Noun / Adjective + なりに',
          rules: [
            'Noun + なりに (e.g. 子供なりに - in a child\'s own way)',
            'Noun + なりの + Noun (e.g. 彼なりの考え - an idea in his own way)',
            'Adjective + なりに (e.g. 貧しいなりに - in our own way, despite being poor)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Noun', '私なりに', 'In my own way (perhaps not perfect, but I tried)'],
            ['Noun', '子供なりに', 'In a child\'s own way (they have their own logic)'],
            ['Adjective', '下手なりに', 'In my own way, despite being bad at it']
          ]
        },
        notes: 'Very often used with 私 (me) or ぼく (I) to show humility. "私なりに頑張りました" (I did my best in my own way - implying "I know I\'m not a genius, but I gave it my all").',
        mistakes: 'Do not confuse this with N1 L2 〜なり (As soon as). As soon as = Verb(Dictionary) + なり. In one\'s own way = Noun + なりに.',
        comparison: {
          similarPattern: '〜ふさわしい (Suitable - N3)',
          difference: 'プロにふさわしい (Suitable for a pro - objective standard). 私なりに頑張る (I will do my best in my own way - subjective humility, accepting one\'s limits).'
        },
        memoryTips: 'Nari = shape/form. Fitting into the shape of that person\'s limits.',
        examples: [
          { japanese: '誰に何を言われても、私は私なりに頑張るつもりだ。', english: 'No matter what anyone says to me, I intend to do my best in my own way.', romaji: 'Dare ni nani o iwaretemo, watashi wa watashi nari ni ganbaru tsumori da.' },
          { japanese: '子供は子供なりに、色々なことを考えているものだ。', english: 'Children, in their own child-like way, think about various things.', romaji: 'Kodomo wa kodomo nari ni, iroiro na koto o kangaete iru mono da.' },
          { japanese: 'これは彼なりの愛情表現（あいじょうひょうげん）なのだろう。', english: 'This is probably his own unique way of expressing love.', romaji: 'Kore wa kare nari no aijou hyougen na no darou.' },
          { japanese: '字は下手なりに、心を込めて手紙を書いた。', english: 'Even though my handwriting is bad, I wrote the letter with all my heart in my own way.', romaji: 'Ji wa heta nari ni, kokoro o komete tegami o kaita.' },
          { japanese: 'お金はないが、貧しいなりに楽しく暮らしている。', english: 'We don\'t have money, but we live happily in our own way despite being poor.', romaji: 'Okane wa nai ga, mazushii nari ni tanoshiku kurashite iru.' },
          { japanese: '初心者なりに、一生懸命練習しました。', english: 'As a beginner, I practiced as hard as I could in my own way.', romaji: 'Shoshinsha nari ni, isshoukenmei renshuu shimashita.' },
          { japanese: '若者には若者なりの悩みがある。', english: 'Young people have their own worries, unique to young people.', romaji: 'Wakamono ni wa wakamono nari no nayami ga aru.' },
          { japanese: '親なりに、子供の将来を心配しているのです。', english: 'As a parent, I worry about my child\'s future in my own way.', romaji: 'Oya nari ni, kodomo no shourai o shinpai shite iru no desu.' },
          { japanese: 'この服、安いなりにデザインは可愛いね。', english: 'These clothes, matching their cheap price, actually have a cute design in their own way.', romaji: 'Kono fuku, yasui nari ni dezain wa kawaii ne.' },
          { japanese: '私なりに考えた結果、この会社を辞めることにしました。', english: 'As a result of thinking about it in my own way, I decided to quit this company.', romaji: 'Watashi nari ni kangaeta kekka, kono kaisha o yameru koto ni shimashita.' }
        ],
        conversation: {
          context: 'Comforting a friend who failed.',
          dialogue: [
            { speaker: 'ケン', japanese: 'テスト、またダメだった…。', english: 'I failed the test again...' },
            { speaker: 'マリー', japanese: '落ち込まないで。ケンはケンなりに努力したんだから、胸を張っていいよ。', english: 'Don\'t be depressed. You made an effort in your own way, so you can be proud.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "In my own way (私 - watashi)..."',
            'Translate: "In a child\'s own way (子供 - kodomo)..."',
            'Translate: "His own ideas (彼なりの + 考え)."'
          ],
          answers: [
            '私なりに (Watashi nari ni)',
            '子供なりに (Kodomo nari ni)',
            '彼なりの考え (Kare nari no kangae)'
          ]
        },
        jlptQuestions: [
          {
            question: 'まだ新入社員（しんにゅうしゃいん）ですが、私___会社（かいしゃ）に貢献（こうけん）したいです。',
            options: ['ならでは', 'なりに', 'をおいて', 'にかかわらず'],
            correctIndex: 1,
            explanation: '"I am still new, but I want to contribute IN MY OWN WAY (within my limits)." 私なりに is the correct expression of humility.'
          },
          {
            question: '若（わか）い時（とき）は、若者（わかもの）___の苦労（くろう）がある。',
            options: ['ならでは', 'のみならず', 'なり', 'と相まって'],
            correctIndex: 2,
            explanation: 'Noun + なりの + Noun. 若者なりの苦労 (Hardships appropriate for / unique to young people).'
          }
        ],
        realLifeUsage: 'Extremely useful when speaking Japanese to natives: 「まだ下手ですが、私なりに頑張って話します」 (I am still bad at it, but I will try my best to speak in my own way).'
      },
      {
        id: 'n1-l4-t4',
        pattern: '〜まじき',
        pronunciation: 'majiki',
        meaning: 'Should not / Unforgivable action',
        isImplemented: true,
        whenAndWhy: 'Used to strongly criticize someone for doing an action that completely betrays their professional position or moral standing. "An unforgivable action for a teacher/police officer!"',
        explanation: 'Attach まじき (majiki) to the dictionary form of a verb. It always modifies a noun (usually 行為 - act, or 発言 - statement). It means "An action that SHOULD NOT be done from the standpoint of X."',
        formation: {
          formula: 'Noun (Position) + にあるまじき + Noun (Action)',
          rules: [
            'Noun + にあるまじき (e.g. 警察官にあるまじき行為 - An act unforgivable for a police officer)',
            'Verb (Dictionary) + まじき (e.g. 許すまじき行為 - An unforgivable act)'
          ]
        },
        conjugations: {
          headers: ['Position / Verb', 'Structure', 'Translation'],
          rows: [
            ['教師 (Teacher)', '教師にあるまじき行為', 'An act that a teacher should never do'],
            ['許す (Forgive)', '許すまじき行為', 'An act that should not be forgiven']
          ]
        },
        notes: 'This is a classical, highly rigid grammar point. In modern Japanese, the only two phrases you will ever see on the JLPT are [Noun + にあるまじき] and [許すまじき].',
        mistakes: 'Do not use this for minor mistakes. (✕ 学生にあるまじき遅刻だ - Too dramatic for being late). It is for crimes, severe moral failings, and scandals.',
        comparison: {
          similarPattern: '〜てはいけない (Must not - N5)',
          difference: 'てはいけない is a standard rule. まじき is an absolute moral condemnation of a professional\'s behavior.'
        },
        memoryTips: 'Majiki comes from classical Japanese meaning "must not / ought not". Magic is forbidden!',
        examples: [
          { japanese: '生徒を殴るなんて、教師にあるまじき行為だ。', english: 'Hitting a student is an act unforgivable for a teacher.', romaji: 'Seito o naguru nante, kyoushi ni aru majiki koui da.' },
          { japanese: '賄賂（わいろ）を受け取るのは、政治家にあるまじきことだ。', english: 'Accepting bribes is something a politician should never do.', romaji: 'Wairo o uketoru no wa, seijika ni aru majiki koto da.' },
          { japanese: 'これは、人として許すまじき犯罪である。', english: 'This is a crime that should not be forgiven as a human being.', romaji: 'Kore wa, hito to shite yurusu majiki hanzai de aru.' },
          { japanese: '酒を飲んで運転するとは、警察官にあるまじき行為だ。', english: 'To drink and drive is an act unbecoming of a police officer.', romaji: 'Sake o nonde unten suru to wa, keisatsukan ni aru majiki koui da.' },
          { japanese: 'お客様に暴言を吐くなんて、プロにあるまじき態度だ。', english: 'Spitting abusive language at a customer is an attitude a professional should never have.', romaji: 'Okyakusama ni bougen o haku nante, puro ni aru majiki taido da.' },
          { japanese: '弱者をいじめるのは、許すまじき行為だ。', english: 'Bullying the weak is an unforgivable act.', romaji: 'Jakusha o ijimeru no wa, yurusu majiki koui da.' },
          { japanese: 'データを改ざんするとは、研究者にあるまじきことだ。', english: 'Falsifying data is something a researcher should never do.', romaji: 'Deeta o kaizan suru to wa, kenkyuusha ni aru majiki koto da.' },
          { japanese: '嘘をついてお金を騙し取るなんて、医者にあるまじき行為だ。', english: 'Lying to swindle money is an act unforgivable for a doctor.', romaji: 'Uso o tsuite okane o damashitoru nante, isha ni aru majiki koui da.' },
          { japanese: 'あのような差別的な発言は、リーダーにあるまじきものだ。', english: 'Such discriminatory remarks are unbecoming of a leader.', romaji: 'Ano you na sabetsuteki na hatsugen wa, riidaa ni aru majiki mono da.' },
          { japanese: '親を捨てるなんて、許すまじきことだ。', english: 'Abandoning one\'s parents is an unforgivable thing.', romaji: 'Oya o suteru nante, yurusu majiki koto da.' }
        ],
        conversation: {
          context: 'Watching a news scandal.',
          dialogue: [
            { speaker: '父', japanese: 'また警察官が泥棒をして捕まったらしいぞ。', english: 'It seems another police officer was caught stealing.' },
            { speaker: '母', japanese: '信じられない。警察官にあるまじき行為ね。', english: 'Unbelievable. It is an act a police officer should never commit.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "An act a teacher (教師 - kyoushi) should never do."',
            'Translate: "An unforgivable (許す - yurusu) act (行為 - koui)."',
            'Can you say "遅刻まじき" (should not be late)?'
          ],
          answers: [
            '教師にあるまじき行為 (Kyoushi ni aru majiki koui)',
            '許すまじき行為 (Yurusu majiki koui)',
            'No. まじき strictly attaches to ある or 許す in modern Japanese. (あるまじき, 許すまじき).'
          ]
        },
        jlptQuestions: [
          {
            question: '患者（かんじゃ）の個人情報（こじんじょうほう）をネットに書（か）き込（こ）むなんて、医者（いしゃ）に___まじき行為（こうい）だ。',
            options: ['ある', 'する', 'なる', 'いる'],
            correctIndex: 0,
            explanation: 'The fixed idiom is [Noun/Position] + にあるまじき (Should not exist in that position). 医者にあるまじき.'
          },
          {
            question: '罪（つみ）のない子供（こども）を傷（きず）つけるとは、全（まった）く___まじき犯罪（はんざい）だ。',
            options: ['許す', '許さない', '許して', '許さず'],
            correctIndex: 0,
            explanation: 'The second fixed idiom is 許すまじき (unforgivable). It attaches to the dictionary form.'
          }
        ],
        realLifeUsage: 'Extremely common in news broadcasts when reporting on scandals involving teachers, politicians, or police.'
      },
      {
        id: 'n1-l4-t5',
        pattern: '〜んばかりに',
        pronunciation: 'n bakari ni',
        meaning: 'As if about to (Extreme appearance)',
        isImplemented: true,
        whenAndWhy: 'Used to describe someone\'s action or expression that is SO extreme, it looks as if they are about to do something crazy (like explode, jump, or cry out), even though they aren\'t actually doing it.',
        explanation: 'Attach んばかりに (n bakari ni) to the nai-stem of a verb (replace "nai" with "n"). Exception: する becomes せんばかりに. It means "looks as if they are about to..."',
        formation: {
          formula: 'Verb (nai-stem) + んばかりに',
          rules: [
            'Group 1 & 2: nai-stem + んばかりに (e.g. 泣き出さんばかりに - as if about to cry)',
            'Group 3 (する): せんばかりに (e.g. 飛びつかせんばかりに - as if about to jump at)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Nai-stem', 'N bakari ni Form', 'Translation'],
          rows: [
            ['泣き出す (nakidasu)', '泣き出さ(ない)', '泣き出さんばかりに', 'As if about to burst into tears'],
            ['あふれる (afureru)', 'あふれ(ない)', 'あふれんばかりに', 'As if about to overflow'],
            ['する (suru)', 'せ(ず)', 'せんばかりに', 'As if about to do (exception)']
          ]
        },
        notes: 'This grammar describes METAPHORS. The person is not actually overflowing or exploding, but they LOOK like they are.',
        mistakes: 'Do not use this for actual, literal impending events. (✕ 雨が降らんばかりに - Wrong. If it looks like it will rain, just use 降りそうだ. んばかりに is for dramatic, metaphorical human behavior/appearance).',
        comparison: {
          similarPattern: '〜そうだ (Looks like - N4)',
          difference: '泣きそうだ (Looks like they will cry - literal possibility). 泣き出さんばかりに顔を歪めた (Twisted their face as if they were about to burst into tears - highly dramatic, descriptive literature).'
        },
        memoryTips: 'The "n" (ん) is an old negative form. Bakari = just about. Just about not doing it (meaning on the very edge of doing it).',
        examples: [
          { japanese: '彼女は今にも泣き出さんばかりの顔で、私を見た。', english: 'She looked at me with a face as if she were about to burst into tears at any moment.', romaji: 'Kanojo wa ima ni mo nakidasan bakari no kao de, watashi o mita.' },
          { japanese: 'グラスには、あふれんばかりにワインが注がれていた。', english: 'Wine was poured into the glass as if it were about to overflow.', romaji: 'Gurasu ni wa, afuren bakari ni wain ga sosogarete ita.' },
          { japanese: '犬は「早く散歩に行こう」と言わんばかりに、しっぽを振った。', english: 'The dog wagged its tail as if to say, "Let\'s go for a walk quickly."', romaji: 'Inu wa "Hayaku sanpo ni ikou" to iwan bakari ni, shippo o futta.' },
          { japanese: '彼は怒りで、今にも爆発せんばかりだった。', english: 'He was so angry, it looked as if he was about to explode at any moment.', romaji: 'Kare wa ikari de, ima ni mo bakuhatsu sen bakari datta.' },
          { japanese: '合格の知らせを聞いて、彼女は踊り出さんばかりに喜んだ。', english: 'Hearing the news of her passing, she rejoiced as if she were about to start dancing.', romaji: 'Goukaku no shirase o kiite, kanojo wa odoridasan bakari ni yorokonda.' },
          { japanese: 'ファンたちは、ステージに飛び乗らんばかりの勢いだった。', english: 'The fans had an energy as if they were about to jump onto the stage.', romaji: 'Fantachi wa, suteeji ni tobinoran bakari no ikioi datta.' },
          { japanese: '店長は「帰れ」と言わんばかりの態度で、私を睨んだ。', english: 'The store manager glared at me with an attitude as if to say, "Go home."', romaji: 'Tenchou wa "Kaere" to iwan bakari no taido de, watashi o niranda.' },
          { japanese: '会場には、割れんばかりの拍手（はくしゅ）が響いた。', english: 'Applause echoed through the venue as if it were about to split/break open.', romaji: 'Kaijou ni wa, waren bakari no hakushu ga hibiita.' },
          { japanese: '彼は土下座（どげざ）せんばかりの勢いで謝ってきた。', english: 'He apologized with a force as if he were about to prostrate himself on the ground.', romaji: 'Kare wa dogeza sen bakari no ikioi de ayamatte kita.' },
          { japanese: '箱には、はち切れんばかりに荷物が詰め込まれていた。', english: 'Luggage was packed into the box as if it were about to burst open.', romaji: 'Hako ni wa, hachikiren bakari ni nimotsu ga tsumekomarete ita.' }
        ],
        conversation: {
          context: 'Describing a rude customer.',
          dialogue: [
            { speaker: '店員A', japanese: 'さっきの客、ひどかったね。', english: 'That customer earlier was terrible, huh.' },
            { speaker: '店員B', japanese: 'うん。「俺は客だぞ」と言わんばかりの態度で、ムカついた。', english: 'Yeah. With an attitude as if to say, "I am the customer," I was annoyed.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "As if to say (言う - iu)..."',
            'Translate: "As if to burst into tears (泣き出す - nakidasu)..."',
            'Translate: "As if to explode (爆発する - bakuhatsu suru)..."'
          ],
          answers: [
            '言わんばかりに (Iwan bakari ni)',
            '泣き出さんばかりに (Nakidasan bakari ni)',
            '爆発せんばかりに (Bakuhatsu sen bakari ni. する becomes せん)'
          ]
        },
        jlptQuestions: [
          {
            question: '彼（かれ）は今（いま）にも私（わたし）に殴（なぐ）りかから___ばかりの顔（かお）で睨（にら）みつけてきた。',
            options: ['ん', 'ない', 'ず', 'そう'],
            correctIndex: 0,
            explanation: '"As if about to attack me." 殴りかから + んばかりの顔. This is the classical negative ん.'
          },
          {
            question: '彼女（かのじょ）は「私（わたし）の勝（かち）だ」と___んばかりに、得意（とくい）そうな笑顔（えがお）を見（み）せた。',
            options: ['言う', '言って', '言い', '言わ'],
            correctIndex: 3,
            explanation: 'The verb 言う (to say). The nai-stem is 言わ. Attach んばかりに -> 言わんばかりに (As if to say).'
          }
        ],
        realLifeUsage: 'Often used with 言わんばかりに (As if to say) to describe someone\'s body language.'
      }
    ]
  },
  {
    lessonNum: 5,
    title: 'Literary Assertions',
    description: 'Elite grammar structures for newspapers and literature.',
    topics: [
      {
        id: 'n1-l5-t1',
        pattern: '〜をもって',
        pronunciation: 'o motte',
        meaning: 'With / By means of / As of (Time)',
        isImplemented: true,
        whenAndWhy: 'A highly formal word used in official announcements. It has two main uses: 1) "By means of / Using X" (method/tool). 2) "As of this time, X will end" (time limit).',
        explanation: 'Attach をもって (o motte) to a noun. It is the formal/written equivalent of the particle で (by / at).',
        formation: {
          formula: 'Noun + をもって',
          rules: [
            'Method: Noun (Tool/Means) + をもって (e.g. 書面をもって - by means of a written document)',
            'Time Limit: Noun (Time) + をもって (e.g. 本日をもって - as of today)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Noun', 'Translation'],
          rows: [
            ['Method', '書面 (shomen - document)', '書面をもって (By means of a document)'],
            ['Method', '誠意 (seii - sincerity)', '誠意をもって (With sincerity)'],
            ['Time Limit', '３月末日 (3-matsu gatsujitsu)', '３月末日をもって (As of the last day of March)']
          ]
        },
        notes: 'When used for time, it always marks the END or CLOSING of something (e.g. closing a store, retiring, ending a contract). It cannot be used for the START of something.',
        mistakes: 'Do not use this for everyday casual actions. (✕ 箸をもってご飯を食べる - Wrong. Use 箸で).',
        comparison: {
          similarPattern: '〜で (By / At - N5)',
          difference: '今日で終わります (Ends today - standard). 本日をもって終了いたします (Ends as of today - highly formal business/ceremonial language).'
        },
        memoryTips: 'Motte (持って) = holding. "Holding this time/tool in hand, we do X."',
        examples: [
          { japanese: '当店は、本日をもって閉店（へいてん）いたします。', english: 'Our store will close as of today.', romaji: 'Touten wa, honjitsu o motte heiten itashimasu.' },
          { japanese: 'これをもちまして、本日の会議を終了します。（もちまして is the polite form of もって）', english: 'With this, we will conclude today\'s meeting.', romaji: 'Kore o mochimashite, honjitsu no kaigi o shuuryou shimasu.' },
          { japanese: '結果は、書面をもって通知（つうち）いたします。', english: 'We will notify you of the results by means of a written document.', romaji: 'Kekka wa, shomen o motte tsuuchi itashimasu.' },
          { japanese: '３月３１日をもって、退職することになりました。', english: 'I have decided to retire as of March 31st.', romaji: 'Sangatsu sanjuuichinichi o motte, taishoku suru koto ni narimashita.' },
          { japanese: '最新の技術をもってすれば、この病気も治せるだろう。', english: 'If we use the latest technology (by means of the latest tech), we can probably cure this disease too.', romaji: 'Saishin no gijutsu o motte sureba, kono byouki mo naoseru darou.' },
          { japanese: 'お客様には、誠意をもって対応（たいおう）してください。', english: 'Please deal with the customers with sincerity.', romaji: 'Okyakusama ni wa, seii o motte taiou shite kudasai.' },
          { japanese: '身をもって、その厳しさを体験した。', english: 'I experienced that severity firsthand (with my own body).', romaji: 'Mi o motte, sono kibishisa o taiken shita.' },
          { japanese: '彼の優秀な頭脳をもってしても、解決できなかった。', english: 'Even by means of his excellent brain, it could not be solved.', romaji: 'Kare no yuushuu na zunou o motte shite mo, kaiketsu dekinakatta.' },
          { japanese: '今月末日をもって、このサービスは終了となります。', english: 'As of the last day of this month, this service will be terminated.', romaji: 'Kongetsu matsujitsu o motte, kono saabisu wa shuuryou to narimasu.' },
          { japanese: '以上の理由をもって、彼の提案に賛成します。', english: 'For (by means of) the above reasons, I agree with his proposal.', romaji: 'Ijou no riyuu o motte, kare no teian ni sansei shimasu.' }
        ],
        conversation: {
          context: 'At a graduation ceremony.',
          dialogue: [
            { speaker: '校長', japanese: 'これをもちまして、令和五年度の卒業式を終わります。', english: 'With this, we will conclude the Reiwa 5 graduation ceremony.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "As of today (本日 - honjitsu)..."',
            'Translate: "By means of a written document (書面 - shomen)..."',
            'Can you use をもって to say "The store OPENS as of today"?'
          ],
          answers: [
            '本日をもって (Honjitsu o motte)',
            '書面をもって (Shomen o motte)',
            'No. When used for time, をもって always marks the END or closing of something (閉店, 終了, 退職).'
          ]
        },
        jlptQuestions: [
          {
            question: '誠（まこと）に勝手（かって）ながら、当店（とうてん）は５月（ごがつ）末日（まつじつ）___閉店（へいてん）させていただきます。',
            options: ['を皮切りに', 'をもって', 'にかかわる', 'にあたって'],
            correctIndex: 1,
            explanation: 'Announcing a store closure on a specific date. ５月末日をもって (As of the end of May).'
          },
          {
            question: '採用（さいよう）の結果（けっか）につきましては、メール___お知らせいたします。',
            options: ['をもって', 'を禁じ得ない', 'かたがた', 'に堪えない'],
            correctIndex: 0,
            explanation: 'Method/Tool: "We will notify you BY MEANS OF email." メールをもって.'
          }
        ],
        realLifeUsage: 'The standard formal sign-off for meetings, events, and store closures.'
      },
      {
        id: 'n1-l5-t2',
        pattern: '〜たところで',
        pronunciation: 'ta tokoro de',
        meaning: 'Even if / No matter how much',
        isImplemented: true,
        whenAndWhy: 'Used to express futility. "Even if you do X (which takes effort), the result will be useless/unchanged." (Note: The JSON title mentioned "たるところで" but "たところで" is the correct standard grammar pattern for "Even if / No matter how").',
        explanation: 'Attach たところで to the past tense (た-form) of a verb. It acts like "〜ても" (even if), but is strictly followed by a NEGATIVE or FUTILE conclusion.',
        formation: {
          formula: 'Verb (た-form) + ところで',
          rules: [
            'Verb た-form + ところで (e.g. 走ったところで - even if you run)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Ta-form', 'Ta tokoro de Form', 'Translation'],
          rows: [
            ['走る (hashiru)', '走った', '走ったところで', 'Even if you run (you won\'t make it)'],
            ['謝る (ayamaru)', '謝った', '謝ったところで', 'Even if you apologize (it won\'t be forgiven)'],
            ['今から行く', '行った', '行ったところで', 'Even if we go now (it\'s too late)']
          ]
        },
        notes: 'Often paired with words like 今さら (now at this late stage), いくら (no matter how much), or どんなに (no matter how).',
        mistakes: 'Do not follow this with a positive expectation. (✕ たくさん勉強したところで、合格するだろう - Wrong. たところで MUST be followed by a negative/hopeless result like 合格しないだろう).',
        comparison: {
          similarPattern: '〜ても (Even if - N4)',
          difference: '〜ても can be followed by anything (Even if it rains, I will go). 〜たところで is strictly for FUTILITY (Even if you go, it is closed anyway).'
        },
        memoryTips: 'Tokoro de = at the point of. At the point of having done X, it is still useless.',
        examples: [
          { japanese: '今から走ったところで、絶対に電車には間に合わないよ。', english: 'Even if you run now, you absolutely won\'t make the train.', romaji: 'Ima kara hashitta tokoro de, zettai ni densha ni wa maniawanai yo.' },
          { japanese: 'いくら謝ったところで、彼女は許してくれないだろう。', english: 'No matter how much you apologize, she probably won\'t forgive you.', romaji: 'Ikura ayamatta tokoro de, kanojo wa yurushite kurenai darou.' },
          { japanese: 'あの人に相談したところで、何も解決しない。', english: 'Even if you consult with that person, nothing will be solved.', romaji: 'Ano hito ni soudan shita tokoro de, nanimo kaiketsu shinai.' },
          { japanese: '今さら後悔したところで、どうにもならない。', english: 'Even if you regret it at this late stage, nothing can be done.', romaji: 'Imasara koukai shita tokoro de, dou ni mo naranai.' },
          { japanese: '彼に文句を言ったところで、聞く耳を持たないよ。', english: 'Even if you complain to him, he won\'t listen.', romaji: 'Kare ni monku o itta tokoro de, kiku mimi o motanai yo.' },
          { japanese: '私が一人で反対したところで、結果は変わらない。', english: 'Even if I oppose it alone, the result will not change.', romaji: 'Watashi ga hitori de hantai shita tokoro de, kekka wa kawaranai.' },
          { japanese: '急いだところで、会議にはもう遅刻だ。', english: 'Even if we hurry, we are already late for the meeting.', romaji: 'Isoida tokoro de, kaigi ni wa mou chikoku da.' },
          { japanese: 'どんなにお金を稼いだところで、健康でなければ意味がない。', english: 'No matter how much money you earn, it is meaningless if you are not healthy.', romaji: 'Donna ni okane o kaseida tokoro de, kenkou de nakereba imi ga nai.' },
          { japanese: '本当のことを話したところで、誰も信じてくれないだろう。', english: 'Even if I tell the truth, probably no one will believe me.', romaji: 'Hontou no koto o hanashita tokoro de, dare mo shinjite kurenai darou.' },
          { japanese: '少しぐらい待ったところで、彼は来ないと思う。', english: 'Even if we wait a little bit, I don\'t think he will come.', romaji: 'Sukoshi gurai matta tokoro de, kare wa konai to omou.' }
        ],
        conversation: {
          context: 'Realizing they are late.',
          dialogue: [
            { speaker: 'ジョン', japanese: '急ごう！タクシーに乗れば間に合うかも。', english: 'Let\'s hurry! If we take a taxi we might make it.' },
            { speaker: 'マリー', japanese: '今からタクシーに乗ったところで、渋滞（じゅうたい）しているから無理だよ。', english: 'Even if we take a taxi from now, it is impossible because there is a traffic jam.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Even if you run (走る - hashiru)..."',
            'Translate: "Even if you apologize (謝る - ayamaru)..."',
            'Must the second half of the sentence be hopeful or hopeless?'
          ],
          answers: [
            '走ったところで (Hashitta tokoro de)',
            '謝ったところで (Ayamatta tokoro de)',
            'Hopeless/Futile (e.g. won\'t make it, won\'t change anything).'
          ]
        },
        jlptQuestions: [
          {
            question: '今（いま）からタクシーで___ところで、飛行機（ひこうき）の時間（じかん）には間（ま）に合（あ）わない。',
            options: ['行く', '行き', '行って', '行った'],
            correctIndex: 3,
            explanation: 'The grammar attaches strictly to the た-form (past tense). 行く -> 行った + ところで.'
          },
          {
            question: 'いくら彼（かれ）を責（せ）めた___、失（うしな）われたお金（かね）は戻（もど）ってこない。',
            options: ['ばかりに', 'からには', 'ところで', 'のみならず'],
            correctIndex: 2,
            explanation: '"No matter how much you blame him (futile action), the money will not return." 〜たところで fits perfectly.'
          }
        ],
        realLifeUsage: 'Often paired with 今さら (Imasara - at this late stage). 「今さら言ったところで…」 (Even if you say that now...).'
      },
      {
        id: 'n1-l5-t3',
        pattern: '〜はおろか',
        pronunciation: 'wa oroka',
        meaning: 'Let alone / Needless to say',
        isImplemented: true,
        whenAndWhy: 'Used to state that X is completely impossible/unachievable, so OBVIOUSLY Y (which is even more basic) is also impossible.',
        explanation: 'Attach はおろか (wa oroka) to a noun. It is usually used in negative sentences. "I can\'t even do [Basic Y], let alone [Advanced X]". NOTE: In Japanese, the ADVANCED thing comes BEFORE はおろか.',
        formation: {
          formula: 'Noun (Advanced/Big Thing) + はおろか + Noun (Basic/Small Thing) + も/すら/さえ + Negative Verb',
          rules: [
            '漢字はおろか、ひらがなも書けない (Let alone Kanji, I can\'t even write Hiragana)'
          ]
        },
        conjugations: {
          headers: ['Advanced Thing', 'Basic Thing', 'Translation'],
          rows: [
            ['海外旅行 (Overseas trip)', '国内旅行 (Domestic trip)', '海外旅行はおろか、国内旅行にも行けない (Let alone going overseas, I can\'t even go on a domestic trip)'],
            ['百万円 (1M yen)', '千円 (1,000 yen)', '百万円はおろか、千円すら持っていない (Let alone 1M yen, I don\'t even have 1,000 yen)']
          ]
        },
        notes: 'Can also be used positively (e.g. "He speaks not only English, but even French"), but the negative usage is far more common on the JLPT.',
        mistakes: 'Do not mix up the order. (✕ ひらがなはおろか、漢字も書けない - Backwards. You must put the harder/bigger thing FIRST).',
        comparison: {
          similarPattern: '〜どころか (Far from / Let alone - N3)',
          difference: '漢字どころかひらがなも書けない (Identical meaning). はおろか is simply the more formal, written version of どころか.'
        },
        memoryTips: 'Oroka = foolish/absurd. It is absurd to even talk about X, because I can\'t even do Y.',
        examples: [
          { japanese: '彼は敬語はおろか、日常会話すらできない。', english: 'Let alone honorifics, he cannot even do daily conversation.', romaji: 'Kare wa keigo wa oroka, nichijou kaiwa sura dekinai.' },
          { japanese: '忙しすぎて、休みはおろか、寝る時間もない。', english: 'I am so busy that let alone a day off, I don\'t even have time to sleep.', romaji: 'Isogashisugite, yasumi wa oroka, neru jikan mo nai.' },
          { japanese: '家はおろか、車を買うお金もない。', english: 'Let alone a house, I don\'t even have money to buy a car.', romaji: 'Ie wa oroka, kuruma o kau okane mo nai.' },
          { japanese: '手術後なので、走ることはおろか、歩くことさえできない。', english: 'Because it is after surgery, let alone running, I cannot even walk.', romaji: 'Shujutsugo na node, hashiru koto wa oroka, aruku koto sae dekinai.' },
          { japanese: '喉が痛くて、ご飯はおろか、水も飲めない。', english: 'My throat hurts, so let alone rice, I cannot even drink water.', romaji: 'Nodo ga itakute, gohan wa oroka, mizu mo nomenai.' },
          { japanese: 'ピアノはおろか、カスタネットすら叩けない。', english: 'Let alone the piano, I cannot even play the castanets.', romaji: 'Piano wa oroka, kasutonetto sura tatakenai.' },
          { japanese: '宇宙旅行はおろか、海外旅行にすら行ったことがない。', english: 'Let alone space travel, I have never even been on a trip overseas.', romaji: 'Uchuu ryokou wa oroka, kaigai ryokou ni sura itta koto ga nai.' },
          { japanese: '彼女は料理はおろか、お湯を沸かすことすらできない。', english: 'Let alone cooking, she cannot even boil water.', romaji: 'Kanojo wa ryouri wa oroka, oyu o wakasu koto sura dekinai.' },
          { japanese: 'ボーナスはおろか、毎月の給料すら遅れている。', english: 'Let alone a bonus, even the monthly salary is delayed.', romaji: 'Boonasu wa oroka, maitsuki no kyuuryou sura okurete iru.' },
          { japanese: '名前はおろか、顔さえ思い出せない。', english: 'Let alone his name, I cannot even remember his face.', romaji: 'Namae wa oroka, kao sae omoidasenai.' }
        ],
        conversation: {
          context: 'Talking about a terrible employee.',
          dialogue: [
            { speaker: '部長', japanese: '新しく入ったアルバイトはどう？エクセルは使える？', english: 'How is the new part-timer? Can he use Excel?' },
            { speaker: '課長', japanese: 'エクセルはおろか、パソコンの電源すら入れられないんですよ…。', english: 'Let alone Excel, he cannot even turn on the computer\'s power...' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Let alone Kanji (漢字), cannot even write Hiragana (ひらがな)."',
            'Translate: "Let alone a house (家), cannot even buy a car (車)."',
            'In the grammar pattern "XはおろかYも", which is the bigger/harder thing, X or Y?'
          ],
          answers: [
            '漢字はおろか、ひらがなも書けない (Kanji wa oroka, hiragana mo kakenai)',
            '家はおろか、車も買えない (Ie wa oroka, kuruma mo kaenai)',
            'X is the bigger/harder thing.'
          ]
        },
        jlptQuestions: [
          {
            question: '事故（じこ）で大怪我（おおけが）をして、立（た）つこと___、座（すわ）ることさえできない。',
            options: ['をおいて', 'ならでは', 'はおろか', '極まりない'],
            correctIndex: 2,
            explanation: '"Let alone standing up, I cannot even sit." 立つことはおろか (or 立つことすら/はおろか).'
          },
          {
            question: '彼（かれ）は借金（しゃっきん）の返済（へんさい）___、毎月（まいつき）の家賃（やちん）すら払（はら）えない状態（じょうたい）だ。',
            options: ['はおろか', 'ばかりに', 'のみならず', 'にかかわる'],
            correctIndex: 0,
            explanation: '"Let alone paying back debts, he cannot even pay monthly rent." 借金の返済はおろか.'
          }
        ],
        realLifeUsage: 'Often followed by 〜も, 〜すら, or 〜さえ (even) in the second half of the sentence to emphasize how basic the failure is.'
      },
      {
        id: 'n1-l5-t4',
        pattern: '〜ともなると',
        pronunciation: 'to mo naru to',
        meaning: 'Once it becomes (a certain advanced stage)',
        isImplemented: true,
        whenAndWhy: 'Used to state that when a situation reaches a special, advanced, or extreme stage, things naturally change or become amazing/difficult.',
        explanation: 'Attach ともなると or ともなれば to a noun that represents an advanced stage, high status, or special time (e.g. a pro, a president, the New Year).',
        formation: {
          formula: 'Noun (Advanced Stage/Status) + ともなると',
          rules: [
            'Noun + ともなると (e.g. プロともなると - Once you become a pro...)',
            'Noun + ともなれば (Same meaning, slightly more conditional)'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Structure', 'Translation'],
          rows: [
            ['社長 (President)', '社長ともなると', 'Once you become president (your responsibilities are huge)'],
            ['年末 (End of year)', '年末ともなると', 'Once it becomes the end of the year (it gets super busy)'],
            ['高校生 (High schooler)', '高校生ともなれば', 'Once they become a high schooler (they don\'t listen to parents)']
          ]
        },
        notes: 'The sentence that follows describes the NATURAL, EXPECTED consequence of reaching that high stage.',
        mistakes: 'Do not use this for ordinary, low-level stages. (✕ 小学生ともなると - Usually wrong unless contrasting with a baby. It is best used for high statuses like プロ, 社長, or 大臣).',
        comparison: {
          similarPattern: '〜になると (When it becomes - N5)',
          difference: '冬になると寒くなる (When it becomes winter it gets cold - basic fact). プロのスポーツ選手ともなると、練習の厳しさが違う (Once you reach the level of a pro athlete, the strictness of practice is different - emphasizes the extreme/high stage).'
        },
        memoryTips: 'To mo (even) + Naru to (when it becomes). "When it even becomes this high level..."',
        examples: [
          { japanese: 'プロともなると、練習の厳しさが全く違う。', english: 'Once you become a professional, the severity of the practice is completely different.', romaji: 'Puro to mo naru to, renshuu no kibishisa ga mattaku chigau.' },
          { japanese: '大企業の社長ともなると、休みはほとんどないだろう。', english: 'Once you become the president of a large corporation, you probably have almost no days off.', romaji: 'Daikigyou no shachou to mo naru to, yasumi wa hotondo nai darou.' },
          { japanese: '年末ともなると、どこの店も忙しくなる。', english: 'Once it reaches the end of the year, every store becomes busy.', romaji: 'Nenmatsu to mo naru to, doko no mise mo isogashiku naru.' },
          { japanese: '高校生ともなれば、親の言うことなど聞かなくなる。', english: 'Once they reach high school, they stop listening to what their parents say.', romaji: 'Koukousei to mo nareba, oya no iu koto nado kikanaku naru.' },
          { japanese: '一国の首相ともなると、発言の重みが違う。', english: 'Once you become the prime minister of a country, the weight of your remarks is different.', romaji: 'Ikkoku no shushou to mo naru to, hatsugen no omomi ga chigau.' },
          { japanese: '４０代ともなると、体力の衰え（おとろえ）を感じる。', english: 'Once you reach your 40s, you feel the decline in physical strength.', romaji: 'Yonjuudai to mo naru to, tairyoku no otoroe o kanjiru.' },
          { japanese: 'オリンピックともなると、世界中が熱狂する。', english: 'Once it comes to the Olympics (a huge event), the whole world goes wild.', romaji: 'Orinpikku to mo naru to, sekaijuu ga nekkyou suru.' },
          { japanese: 'これほど有名な俳優ともなると、街を歩くのも大変だ。', english: 'Once you become an actor this famous, even walking down the street is difficult.', romaji: 'Kore hodo yuumei na haiyuu to mo naru to, machi o aruku no mo taihen da.' },
          { japanese: '最高級のレストランともなると、サービスが完璧だ。', english: 'Once it is a top-class restaurant, the service is perfect.', romaji: 'Saikoukyuu no resutoran to mo naru to, saabisu ga kanpeki da.' },
          { japanese: '社会人ともなれば、自分の行動に責任を持たなければならない。', english: 'Once you become a working adult, you must take responsibility for your own actions.', romaji: 'Shakaijin to mo nareba, jibun no koudou ni sekinin o motanakereba naranai.' }
        ],
        conversation: {
          context: 'Watching a sports match.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'あの選手の動き、速すぎて見えないよ。', english: 'That player\'s movements are so fast I can\'t see them.' },
            { speaker: 'マリー', japanese: 'さすがね。世界チャンピオンともなると、レベルが違うわ。', english: 'As expected. Once you reach the level of world champion, the level is different.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Once you become a pro (プロ)..."',
            'Translate: "Once you become a president (社長 - shachou)..."',
            'Translate: "Once it reaches the end of the year (年末 - nenmatsu)..."'
          ],
          answers: [
            'プロともなると (Puro to mo naru to)',
            '社長ともなると (Shachou to mo naru to)',
            '年末ともなると (Nenmatsu to mo naru to)'
          ]
        },
        jlptQuestions: [
          {
            question: '___ともなると、自分（じぶん）の意見（いけん）を自由（じゆう）に言（い）えなくなる。',
            options: ['平社員（ひらしゃいん - entry level worker）', '政治家（せいじか - politician）', '子供', '学生'],
            correctIndex: 1,
            explanation: 'ともなると is used for high-status, advanced, or public positions where expectations change. 政治家 is the best fit.'
          },
          {
            question: '４月（しがつ）___なると、新（あたら）しい生活（せいかつ）を始（はじ）める人（ひと）が多（おお）い。',
            options: ['からには', 'にかけては', 'とも', 'をおいて'],
            correctIndex: 2,
            explanation: 'April in Japan is a major milestone/turning point (start of school/work). ４月ともなると (Once it reaches April, a special time...).'
          }
        ],
        realLifeUsage: 'Often followed by 「〜が違う」 (is on a different level) -> プロともなるとレベルが違う.'
      },
      {
        id: 'n1-l5-t5',
        pattern: '〜きらいがある',
        pronunciation: 'kirai ga aru',
        meaning: 'Has a bad tendency to',
        isImplemented: true,
        whenAndWhy: 'Used in objective, formal analysis to point out someone or something\'s NEGATIVE habit or tendency. "He has a bad habit of exaggerating things."',
        explanation: 'Attach きらいがある (kirai ga aru) to a dictionary form verb or Noun + の. It has nothing to do with "hate" (嫌い). It means "a tendency" (傾向), specifically a bad one.',
        formation: {
          formula: 'Verb (Dictionary) / Noun + の + きらいがある',
          rules: [
            'Verb (Dictionary) + きらいがある (e.g. 言いすぎるきらいがある - has a bad tendency to say too much)',
            'Noun + の + きらいがある (e.g. 大げさのきらいがある - has a bad tendency to be exaggerated)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Verb', '急ぐきらいがある', 'Has a bad tendency to rush'],
            ['Verb', '考えすぎるきらいがある', 'Has a bad tendency to overthink'],
            ['Noun', '独断（どくだん）のきらいがある', 'Has a bad tendency toward dogmatism/acting alone']
          ]
        },
        notes: 'Because it sounds objective and slightly academic, it is rarely used for oneself. It is used to analyze others, society, or systems.',
        mistakes: 'Do not use this for good tendencies. (✕ 彼はよく勉強するきらいがある - Wrong. You cannot have a "bad tendency" to study hard).',
        comparison: {
          similarPattern: '〜がち (Tend to - N3)',
          difference: '彼は遅れがちだ (He tends to be late - casual, frequency). 現代人は運動不足になるきらいがある (Modern people have a negative tendency to lack exercise - formal, objective analysis).'
        },
        memoryTips: 'Kirai (嫌い) = hate. It is a tendency that is hated / undesirable.',
        examples: [
          { japanese: '彼は何でも大げさに言うきらいがある。', english: 'He has a bad tendency to exaggerate everything.', romaji: 'Kare wa nandemo oogesa ni iu kirai ga aru.' },
          { japanese: '現代の若者は、活字（かつじ）を読まないきらいがある。', english: 'Modern youth have a bad tendency of not reading printed text.', romaji: 'Gendai no wakamono wa, katsuji o yomanai kirai ga aru.' },
          { japanese: '彼女は少し考えすぎるきらいがある。', english: 'She has a slight bad tendency to overthink things.', romaji: 'Kanojo wa sukoshi kangaesugiru kirai ga aru.' },
          { japanese: '日本人は、周りの意見に合わせすぎるきらいがある。', english: 'Japanese people have a bad tendency to match surrounding opinions too much.', romaji: 'Nihonjin wa, mawari no iken ni awasesugiru kirai ga aru.' },
          { japanese: 'この組織は、決定が遅いきらいがある。', english: 'This organization has a bad tendency to be slow in making decisions.', romaji: 'Kono soshiki wa, kettei ga osoi kirai ga aru.' },
          { japanese: '社長は、社員の意見を聞かずに独断で決めるきらいがある。', english: 'The president has a bad tendency to decide things dogmatically without listening to employees\' opinions.', romaji: 'Shachou wa, shain no iken o kikazu ni dokudan de kimeru kirai ga aru.' },
          { japanese: '最近のテレビ番組は、視聴率（しちょうりつ）ばかりを気にするきらいがある。', english: 'Recent TV programs have a bad tendency to care only about viewer ratings.', romaji: 'Saikin no terebi bangumi wa, shichouritsu bakari o ki ni suru kirai ga aru.' },
          { japanese: '彼は自分の非（ひ）を認めないきらいがある。', english: 'He has a bad tendency of not admitting his own faults.', romaji: 'Kare wa jibun no hi o mitomenai kirai ga aru.' },
          { japanese: 'この本は、説明が少し難しすぎるきらいがある。', english: 'This book has a bad tendency of its explanations being a bit too difficult.', romaji: 'Kono hon wa, setsumei ga sukoshi muzukashisugiru kirai ga aru.' },
          { japanese: '彼は仕事を一人で抱え込む（かかえこむ）きらいがある。', english: 'He has a bad tendency to take on all the work by himself.', romaji: 'Kare wa shigoto o hitori de kakaekomu kirai ga aru.' }
        ],
        conversation: {
          context: 'Teachers evaluating a student.',
          dialogue: [
            { speaker: '先生A', japanese: '田中くんは優秀ですが、少し急いで結論を出すきらいがありますね。', english: 'Tanaka is excellent, but he has a bad tendency to rush to conclusions, doesn\'t he.' },
            { speaker: '先生B', japanese: 'そうですね。もう少し慎重（しんちょう）になってほしいです。', english: 'That is right. I want him to be a little more careful.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Has a bad tendency to overthink (考えすぎる - kangaesugiru)."',
            'Translate: "Has a bad tendency to exaggerate (大げさに言う - oogesa ni iu)."',
            'Can you use きらいがある for a good habit?'
          ],
          answers: [
            '考えすぎるきらいがある (Kangaesugiru kirai ga aru)',
            '大げさに言うきらいがある (Oogesa ni iu kirai ga aru)',
            'No, it is strictly used for negative or undesirable tendencies.'
          ]
        },
        jlptQuestions: [
          {
            question: 'うちの部長（ぶちょう）は、何事（なにごと）も自分（じぶん）の思（おも）い込（こ）みで判断（はんだん）する___。',
            options: ['をおいてほかにない', 'きらいがある', 'にあたって', 'かたがた'],
            correctIndex: 1,
            explanation: 'Judging everything based on one\'s own assumptions is a bad habit/tendency. きらいがある is the correct choice.'
          },
          {
            question: '現代人（げんだいじん）は、SNSの数字（すうじ）ばかりを気（き）にする___がある。',
            options: ['きらい', 'おそれ', '極まり', 'ならでは'],
            correctIndex: 0,
            explanation: 'To express a negative societal tendency (caring only about SNS numbers), きらいがある is used.'
          }
        ],
        realLifeUsage: 'A polite but firm way to criticize someone in a professional setting without sounding angry: 「少々、焦る（あせる）きらいがありますね」 (You have a slight tendency to rush/panic, don\'t you).'
      }
    ]
  }
];
