export const n2Lessons = [
  {
    lessonNum: 1,
    title: 'Continuous Progressions',
    description: 'Formal changes and surrounding issues.',
    topics: [
      {
        id: 'n2-l1-t1',
        pattern: '〜つつある',
        pronunciation: 'tsutsu aru',
        meaning: 'In the process of changing',
        isImplemented: true,
        whenAndWhy: 'Used in formal or written Japanese to describe a gradual, ongoing change that is happening right now and continuing into the future.',
        explanation: 'Attach つつある (tsutsu aru) to the masu-stem of verbs that indicate change (e.g. increase, decrease, recover, advance). It shows that a state is currently in transition.',
        formation: {
          formula: 'Verb (masu-stem) + つつある',
          rules: [
            'Change verb masu-stem + つつある (e.g. 増えつつある - is in the process of increasing)',
            'Past tense (was changing): つつあった (e.g. 減りつつあった - was in the process of decreasing)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Masu-stem', 'Tsutsu aru Form', 'Translation'],
          rows: [
            ['増える (fueru)', '増え', '増えつつある', 'Is in the process of increasing'],
            ['回復する (kaifuku suru)', '回復し', '回復しつつある', 'Is in the process of recovering'],
            ['進む (susumu)', '進み', '進みつつある', 'Is progressing']
          ]
        },
        notes: 'It cannot be used with verbs that express instantaneous actions or states that don\'t change (✕ わかりつつある - wrong, use わかってきた). It must be a measurable change.',
        mistakes: 'Do not confuse with 〜つつ (while doing). 〜つつある means "in the process of changing". 〜つつ (without ある) means "while doing X, I did Y" (covered in N2 L3).',
        comparison: {
          similarPattern: '〜ている (Ongoing state)',
          difference: '増えている is a simple statement of fact (It is increasing). 増えつつある emphasizes the gradual, continuous nature of the change, often used in news, reports, or academic writing.'
        },
        memoryTips: 'Tsutsu sounds like a train chugging along. The change is slowly chugging along.',
        examples: [
          { japanese: '日本の人口は減りつつあります。', english: 'Japan\'s population is in the process of decreasing.', romaji: 'Nihon no jinkou wa heritsutsu arimasu.' },
          { japanese: '彼の病気は回復しつつある。', english: 'His illness is in the process of recovering.', romaji: 'Kare no byouki wa kaifukushitsutsu aru.' },
          { japanese: '地球温暖化は進みつつある。', english: 'Global warming is currently progressing.', romaji: 'Chikyuu ondanka wa susumitsutsu aru.' },
          { japanese: '新しい駅前の開発が終わりつつある。', english: 'The new development in front of the station is nearing completion.', romaji: 'Atarashii ekimae no kaihatsu ga owaritsutsu aru.' },
          { japanese: '人々の意識は変わりつつあります。', english: 'People\'s awareness is in the process of changing.', romaji: 'Hitobito no ishiki wa kawaritsutsu arimasu.' },
          { japanese: '伝統的な技術は失われつつある。', english: 'Traditional techniques are in the process of being lost.', romaji: 'Dentouteki na gijutsu wa ushinawaretsutsu aru.' },
          { japanese: '景気は少しずつ良くなりつつある。', english: 'The economy is gradually in the process of getting better.', romaji: 'Keiki wa sukoshizutsu yokunaritsutsu aru.' },
          { japanese: '事件の真相が明らかになりつつある。', english: 'The truth of the incident is gradually becoming clear.', romaji: 'Jiken no shinsou ga akiraka ni naritsutsu aru.' },
          { japanese: '日本の社会は国際化しつつあります。', english: 'Japanese society is in the process of internationalizing.', romaji: 'Nihon no shakai wa kokusaikashitsutsu arimasu.' },
          { japanese: '問題は解決に向かいつつある。', english: 'The problem is heading towards resolution.', romaji: 'Mondai wa kaiketsu ni mukaitsutsu aru.' }
        ],
        conversation: {
          context: 'Watching the news.',
          dialogue: [
            { speaker: 'ニュース', japanese: '現在、台風は北へ向かいつつあります。', english: 'Currently, the typhoon is in the process of heading north.' },
            { speaker: 'ケン', japanese: 'こっちには来ないみたいだね。', english: 'It looks like it\'s not coming this way.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "The number of foreigners is increasing (増える). (Use tsutsu aru)"',
            'Translate: "The world is changing (変わる). (Use tsutsu aru)"',
            'What form of the verb precedes つつある?'
          ],
          answers: [
            '外国人が増えつつあります。 (Gaikokujin ga fuetsutsu arimasu.)',
            '世界は変わりつつある。 (Sekai wa kawaritsutsu aru.)',
            'The masu-stem (e.g. 増え、変わり)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この町（まち）の自然（しぜん）は、破壊（はかい）され___ある。',
            options: ['ながら', 'つつ', 'にかけて', 'からには'],
            correctIndex: 1,
            explanation: 'To express a gradual change (is in the process of being destroyed), attach つつ to ある. 破壊されつつある.'
          },
          {
            question: 'あの会社（かいしゃ）の業績（ぎょうせき）は、回復（かいふく）___つつある。',
            options: ['する', 'し', 'して', 'す'],
            correctIndex: 1,
            explanation: 'The verb is 回復する. The masu-stem of する is し. 回復し + つつある.'
          }
        ],
        realLifeUsage: 'Often found in formal essays, news broadcasts, or business reports describing trends.'
      },
      {
        id: 'n2-l1-t2',
        pattern: '〜をめぐって',
        pronunciation: 'o megutte',
        meaning: 'Concerning / Surrounding',
        isImplemented: true,
        whenAndWhy: 'Used when multiple people are arguing, debating, fighting, or discussing a central issue. It literally means "revolving around (an issue)".',
        explanation: 'Attach をめぐって (o megutte) to a noun. The action that follows is always a plural action: a debate, a fight, a rumor, or a discussion involving several parties.',
        formation: {
          formula: 'Noun + をめぐって / をめぐる + Noun',
          rules: [
            'Verb phrase follows: Noun + をめぐって (e.g. 遺産をめぐって争う - to fight over an inheritance)',
            'Noun follows: Noun + をめぐる + Noun (e.g. 遺産をめぐる争い - a fight over an inheritance)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Adverbial (Mid-sentence)', '問題をめぐって話し合う', 'To discuss surrounding the problem'],
            ['Noun Modifier', '問題をめぐる話し合い', 'A discussion surrounding the problem']
          ]
        },
        notes: 'Unlike について (about), you cannot use をめぐって for a single person\'s action. (✕ 私は日本の歴史をめぐって勉強した - wrong). There must be a conflict or discussion among multiple people.',
        mistakes: 'Do not use this for peaceful, individual study. It requires a subject that is a "point of contention" or a "center of attention" for a group.',
        comparison: {
          similarPattern: '〜について (About / Concerning)',
          difference: '〜について is neutral and can be used for one person studying/talking. 〜をめぐって implies a circle of people surrounding an issue, usually debating, fighting, or gossiping about it.'
        },
        memoryTips: 'Meguru means "to go around". The debate is going in circles *around* the central issue.',
        examples: [
          { japanese: '遺産をめぐって、兄弟が争っている。', english: 'The brothers are fighting over the inheritance.', romaji: 'Isan o megutte, kyoudai ga arasotte iru.' },
          { japanese: '新しい法律をめぐって、国会で激しい議論が行われた。', english: 'A fierce debate was held in the national diet over the new law.', romaji: 'Atarashii houritsu o megutte, kokkai de hageshii giron ga okonawareta.' },
          { japanese: '教育問題をめぐる議論は、まだ終わっていない。', english: 'The debate surrounding educational issues has not ended yet.', romaji: 'Kyouiku mondai o meguru giron wa, mada owatte inai.' },
          { japanese: '一人の女性をめぐって、二人の男が喧嘩をした。', english: 'Two men had a fight over one woman.', romaji: 'Hitori no josei o megutte, futari no otoko ga kenka o shita.' },
          { japanese: 'その事件をめぐって、様々な噂が流れている。', english: 'Various rumors are spreading concerning that incident.', romaji: 'Sono jiken o megutte, samazama na uwasa ga nagarete iru.' },
          { japanese: 'マンションの建設をめぐって、住民と会社が対立している。', english: 'The residents and the company are in conflict over the construction of the apartment building.', romaji: 'Manshon no kensetsu o megutte, juumin to kaisha ga tairitsu shite iru.' },
          { japanese: 'この土地をめぐる争いは、長く続いている。', english: 'The dispute over this land has been continuing for a long time.', romaji: 'Kono tochi o meguru arasoi wa, nagaku tsuzuite iru.' },
          { japanese: '予算の使い道をめぐって、意見が分かれた。', english: 'Opinions were divided regarding how to use the budget.', romaji: 'Yosan no tsukaimichi o megutte, iken ga wakareta.' },
          { japanese: '環境保護をめぐる国際会議が開かれた。', english: 'An international conference concerning environmental protection was held.', romaji: 'Kankyou hogo o meguru kokusai kaigi ga hirakareta.' },
          { japanese: '社長の座をめぐって、社内で激しい競争がある。', english: 'There is fierce competition within the company over the president\'s seat.', romaji: 'Shachou no za o megutte, shanai de hageshii kyousou ga aru.' }
        ],
        conversation: {
          context: 'Watching a drama.',
          dialogue: [
            { speaker: 'マリー', japanese: 'このドラマ、いつも遺産をめぐって家族が喧嘩しているね。', english: 'In this drama, the family is always fighting over the inheritance, huh.' },
            { speaker: 'ケン', japanese: 'そうだね。お金をめぐるトラブルは怖いよ。', english: 'Yeah. Troubles surrounding money are scary.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "A fight (争い) over money (お金)."',
            'Translate: "To discuss (話し合う) concerning the rules (ルール)."',
            'Can you say "I thought about (考えた) the problem over (めぐって)"?'
          ],
          answers: [
            'お金をめぐる争い (Okane o meguru arasoi)',
            'ルールをめぐって話し合う (Ruuru o megutte hanashiau)',
            'No. "Thinking" is an individual action. You must use について (問題について考えた).'
          ]
        },
        jlptQuestions: [
          {
            question: '新（あたら）しい空港（くうこう）の建設（けんせつ）を___、住民（じゅうみん）が反対（はんたい）運動（うんどう）をしている。',
            options: ['めぐって', '関して', '対して', 'とって'],
            correctIndex: 0,
            explanation: 'A protest movement (反対運動) involves multiple people clashing over a central issue (airport construction). をめぐって is the correct grammar for conflicts and debates over an issue.'
          },
          {
            question: 'その事件（じけん）___噂（うわさ）が、ネットで広（ひろ）がっている。',
            options: ['をめぐって', 'をめぐる', 'において', 'における'],
            correctIndex: 1,
            explanation: '噂 (rumors) is a noun. When modifying a noun directly, をめぐって becomes をめぐる. 事件をめぐる噂 (Rumors surrounding the incident).'
          }
        ],
        realLifeUsage: 'A staple of news headlines reporting on lawsuits, political debates, and scandals.'
      },
      {
        id: 'n2-l1-t3',
        pattern: '〜にともなって',
        pronunciation: 'ni tomonatte',
        meaning: 'Along with / As a consequence of',
        isImplemented: true,
        whenAndWhy: 'Used to show that as one massive change happens (A), another change naturally happens alongside it (B). Used in formal contexts.',
        explanation: 'Attach にともなって (ni tomonatte) or にともない (ni tomonai) to a noun showing change or the dictionary form of a verb. It comes from the verb 伴う (tomonau - to accompany).',
        formation: {
          formula: 'Noun / Verb (Dictionary) + にともなって',
          rules: [
            'Noun + にともなって / にともない (e.g. 人口の増加にともなって - along with the increase in population)',
            'Verb (Dict) + の + にともなって (Often, verbs are turned into nouns first, e.g. 増えるのにともなって)',
            'Modifying a noun: にともなう + Noun (e.g. 増加にともなう問題 - problems accompanying the increase)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Phrase', 'Translation'],
          rows: [
            ['Noun (Change)', '発展にともなって', 'Along with the development'],
            ['Noun (Change)', '発展にともなう変化', 'Changes accompanying the development'],
            ['Verb', '年を取るのにともなって', 'Along with getting older']
          ]
        },
        notes: 'にともない is slightly more formal than にともなって, often used in official writing.',
        mistakes: 'Do not use this for personal, daily simultaneous actions (✕ ご飯を食べるのにともなって、テレビを見る). Use 〜ながら for that. にともなって is for large-scale, inevitable, or natural consequences of a changing state.',
        comparison: {
          similarPattern: '〜にしたがって / 〜につれて (As X changes, Y changes)',
          difference: 'につれて is for gradual, proportional changes (As you get older, your body gets weaker). にともなって can be used for gradual changes OR sudden, one-time consequences (Along with the company moving, employee rules changed).'
        },
        memoryTips: 'Tomonau means to accompany. B accompanies A on its journey of change.',
        examples: [
          { japanese: '人口の増加にともなって、色々な問題が起きている。', english: 'Along with the increase in population, various problems are occurring.', romaji: 'Jinkou no zouka ni tomonatte, iroiro na mondai ga okite iru.' },
          { japanese: '経済の発展にともない、環境破壊が進んだ。', english: 'Along with economic development, environmental destruction advanced.', romaji: 'Keizai no hatten ni tomonai, kankyou hakai ga susunda.' },
          { japanese: 'スマートフォンの普及にともなって、SNSの利用者が増えた。', english: 'Along with the spread of smartphones, SNS users increased.', romaji: 'Sumaatofon no fukyuu ni tomonatte, esu-enu-esu no riyousha ga fueta.' },
          { japanese: '会社の移転にともなう引っ越し作業が忙しい。', english: 'The moving work accompanying the company\'s relocation is busy.', romaji: 'Kaisha no iten ni tomonau hikkoshi sagyou ga isogashii.' },
          { japanese: '気温の上昇にともなって、熱中症の人が増える。', english: 'As a consequence of the rise in temperature, people with heatstroke increase.', romaji: 'Kion no joushou ni tomonatte, netchuushou no hito ga fueru.' },
          { japanese: '社長の交代にともなって、社内のルールが変わった。', english: 'Along with the change of the president, the company rules changed.', romaji: 'Shachou no koutai ni tomonatte, shanai no ruuru ga kawatta.' },
          { japanese: '法律が改正されたのにともなって、手続きも変更された。', english: 'Along with the law being revised, the procedures were also changed.', romaji: 'Houritsu ga kaisei sareta no ni tomonatte, tetsuzuki mo henkou sareta.' },
          { japanese: '年を取るのにともなって、記憶力が落ちてきた。', english: 'Along with getting older, my memory has declined.', romaji: 'Toshi o toru no ni tomonatte, kiokuryoku ga ochite kita.' },
          { japanese: '都市の開発にともなう自然の減少が問題だ。', english: 'The decrease in nature accompanying urban development is a problem.', romaji: 'Toshi no kaihatsu ni tomonau shizen no genshou ga mondai da.' },
          { japanese: '大会の中止にともない、チケットの払い戻しを行います。', english: 'Accompanying the cancellation of the tournament, we will issue ticket refunds.', romaji: 'Taikai no chuushi ni tomonai, chiketto no haraimodoshi o okonaimasu.' }
        ],
        conversation: {
          context: 'An official train announcement.',
          dialogue: [
            { speaker: 'アナウンス', japanese: 'ダイヤの改正にともない、列車の時間が変更になります。', english: 'Accompanying the schedule revision, train times will be changed.' },
            { speaker: '乗客', japanese: 'あ、明日の朝から電車の時間が変わるみたいだ。', english: 'Ah, it looks like the train times will change from tomorrow morning.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Along with the spread (普及 - fukyuu) of the internet..."',
            'Translate: "Changes (変化 - henka) accompanying the relocation (移転 - iten)..."',
            'Is it natural to say "Along with waking up, I washed my face (起きるのにともなって)"?'
          ],
          answers: [
            'インターネットの普及にともなって (Intaanetto no fukyuu ni tomonatte)',
            '移転にともなう変化 (Iten ni tomonau henka)',
            'No, because waking up is a daily personal action, not a societal change or official event.'
          ]
        },
        jlptQuestions: [
          {
            question: '会社（かいしゃ）のシステム変更（へんこう）に___、研修（けんしゅう）が行（おこな）われた。',
            options: ['ともない', 'めぐって', 'とって', 'かかわらず'],
            correctIndex: 0,
            explanation: 'As a direct consequence/accompaniment to the system change, training was held. にともない (formal variant of にともなって) is the correct choice.'
          },
          {
            question: '少子化（しょうしか）に___問題（もんだい）を議論（ぎろん）する。',
            options: ['ともなって', 'ともない', 'ともなう', 'ともなえば'],
            correctIndex: 2,
            explanation: 'You are modifying the noun 問題 (problems). Therefore, you must use the attributive form にともなう (Problems accompanying the declining birthrate).'
          }
        ],
        realLifeUsage: 'Extremely common in business emails when announcing policy changes or updates.'
      },
      {
        id: 'n2-l1-t4',
        pattern: '〜からには',
        pronunciation: 'kara ni wa',
        meaning: 'Now that / Since (it has come to this)',
        isImplemented: true,
        whenAndWhy: 'Used to express strong determination, advice, or duty. "Since A is an established fact, naturally B must follow." It implies you have crossed the point of no return.',
        explanation: 'Attach からには (kara ni wa) to the plain form of a verb (often past tense or dictionary form). Similar to 以上 (ijou), it sets up a premise that demands a strong conclusion (I must do it, I will definitely do it, You should do it).',
        formation: {
          formula: 'Verb (Plain Form) + からには',
          rules: [
            'Present tense: やるからには (Since I am going to do it...)',
            'Past tense: 約束したからには (Now that I have promised...)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Tense', 'Kara ni wa Form', 'Translation'],
          rows: [
            ['始める (hajimeru)', 'Present', '始めるからには', 'Since I am starting it...'],
            ['決めた (kimeta)', 'Past', '決めたからには', 'Now that I have decided...']
          ]
        },
        notes: 'Sentences ending with this grammar usually end in forms like 〜つもりだ (intend to), 〜べきだ (should), 〜なければならない (must), or 〜たい (want to).',
        mistakes: 'Do not use this for simple cause-and-effect regarding physical phenomena (✕ 雨が降ったからには、道が濡れる - Since it rained, the road gets wet). It must involve human will, duty, or judgment.',
        comparison: {
          similarPattern: '〜以上は (Now that)',
          difference: '〜からには and 〜以上は (ijou wa) are nearly identical in meaning and usage. からには sounds slightly more subjective and emotional (strong personal determination), while 以上は sounds slightly more logical and formal.'
        },
        memoryTips: 'Kara (Because) + ni wa (for this situation). "Because of this situation, naturally..."',
        examples: [
          { japanese: '約束したからには、絶対に守らなければならない。', english: 'Now that I have promised, I absolutely must keep it.', romaji: 'Yakusoku shita kara ni wa, zettai ni mamoranakereba naranai.' },
          { japanese: 'やるからには、最後までやりたいです。', english: 'Since I am going to do it, I want to do it until the end.', romaji: 'Yaru kara ni wa, saigo made yaritai desu.' },
          { japanese: '留学するからには、現地の言葉をマスターするつもりだ。', english: 'Since I am going to study abroad, I intend to master the local language.', romaji: 'Ryuugaku suru kara ni wa, genchi no kotoba o masutaa suru tsumori da.' },
          { japanese: '高いお金を払ったからには、しっかり勉強しなさい。', english: 'Now that you have paid a lot of money, study hard.', romaji: 'Takai okane o haratta kara ni wa, shikkari benkyou shinasai.' },
          { japanese: '社長になったからには、会社の利益を第一に考えます。', english: 'Now that I have become president, I will think of the company\'s profits first.', romaji: 'Shachou ni natta kara ni wa, kaisha no rieki o daiichi ni kangaemasu.' },
          { japanese: '試合に出るからには、勝ちたい。', english: 'Since I am entering the match, I want to win.', romaji: 'Shiai ni deru kara ni wa, kachitai.' },
          { japanese: '自分で決めたからには、文句は言わない。', english: 'Now that I decided it myself, I won\'t complain.', romaji: 'Jibun de kimeta kara ni wa, monku wa iwanai.' },
          { japanese: 'プロであるからには、失敗は許されない。', english: 'Since you are a professional, failure is not forgiven.', romaji: 'Puro de aru kara ni wa, shippai wa yurusarenai.' },
          { japanese: '日本に住んでいるからには、日本のルールを守るべきだ。', english: 'Since you live in Japan, you should follow Japanese rules.', romaji: 'Nihon ni sunde iru kara ni wa, Nihon no ruuru o mamoru beki da.' },
          { japanese: '引き受けたからには、責任を持ってやります。', english: 'Now that I have accepted it, I will do it with responsibility.', romaji: 'Hikiuketa kara ni wa, sekinin o motte yarimasu.' }
        ],
        conversation: {
          context: 'Deciding to run a marathon.',
          dialogue: [
            { speaker: 'ケン', japanese: 'マラソン大会に申し込んだよ。', english: 'I applied for the marathon tournament.' },
            { speaker: 'マリー', japanese: 'すごい！参加するからには、完走（かんそう）を目指してね。', english: 'Amazing! Since you are participating, aim to finish the race.' },
            { speaker: 'ケン', japanese: 'うん、やるからには頑張るよ！', english: 'Yeah, since I am doing it, I will do my best!' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Now that I have decided (決めた)..."',
            'Translate: "Since I am going to do it (やる)..."',
            'Translate: "Now that I came to Japan (日本に来た)..."'
          ],
          answers: [
            '決めたからには (Kimeta kara ni wa)',
            'やるからには (Yaru kara ni wa)',
            '日本に来たからには (Nihon ni kita kara ni wa)'
          ]
        },
        jlptQuestions: [
          {
            question: '大学（だいがく）に入（はい）った___、しっかり勉強（べんきょう）するつもりだ。',
            options: ['からには', 'うちに', '反面', 'おかげで'],
            correctIndex: 0,
            explanation: 'The sentence expresses strong determination (つもりだ) based on a premise (entering university). からには is the correct grammar.'
          },
          {
            question: '自分（じぶん）でやると___からには、最後（さいご）まで責任（せきにん）を持（も）ってください。',
            options: ['言った', '言って', '言う', '言い'],
            correctIndex: 0,
            explanation: 'The premise is that you already stated you would do it. Use the past tense plain form: 言った + からには (Now that you said you would do it...).'
          }
        ],
        realLifeUsage: 'Often used to pump oneself up or hold oneself accountable: 「やるからには本気でやる」 (Since I\'m doing it, I\'m doing it for real).'
      },
      {
        id: 'n2-l1-t5',
        pattern: '〜ぎみ',
        pronunciation: 'gimi',
        meaning: 'Tending to be / -ish / Feeling a bit',
        isImplemented: true,
        whenAndWhy: 'Used to express that someone currently has a slight tendency towards a negative state, often physical or psychological.',
        explanation: 'Attach 気味 (gimi) to the masu-stem of verbs or directly to nouns. It comes from 気 (feeling/energy) and 味 (taste/trace). It means you feel a trace of something bad (e.g. feeling a bit sick, tending to be late).',
        formation: {
          formula: 'Verb (masu-stem) / Noun + 気味',
          rules: [
            'Verbs: masu-stem + 気味 (e.g. 疲れ気味 - tending to be tired / feeling tired)',
            'Nouns: Noun + 気味 (e.g. 風邪気味 - feeling a slight cold)',
            'Modifying nouns: 気味の + Noun (e.g. 風邪気味の時 - when feeling a slight cold)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Base Word', 'Gimi Form', 'Translation'],
          rows: [
            ['Verb', '疲れる (tsukareru)', '疲れ気味', 'Feeling a bit tired'],
            ['Verb', '遅れる (okureru)', '遅れ気味', 'Tending to be late (lately)'],
            ['Noun', '風邪 (kaze)', '風邪気味', 'Having a slight cold / Coming down with a cold']
          ]
        },
        notes: 'It is almost always used for *negative* tendencies. (✕ 元気気味 - feeling a bit energetic. ◯ 疲れ気味 - feeling a bit tired).',
        mistakes: 'Do not use this for extreme or permanent states. It is for a "slight feeling" or a "recent mild tendency". If you have a 40-degree fever, you are not 風邪気味; you are seriously ill.',
        comparison: {
          similarPattern: '〜がち (Tend to do often)',
          difference: '〜がち is for frequency (He tends to be late *often* - 忘れがち, 遅れがち). 〜ぎみ is for your current physical/mental state (I feel *a bit* late on my schedule today, I feel *a bit* tired).'
        },
        memoryTips: 'Gimi sounds like "gimme". "Gimme a break, I\'m feeling a bit sick." Also written in kanji as 気味.',
        examples: [
          { japanese: '今日はちょっと風邪気味なので、早く帰ります。', english: 'Because I feel like I\'m coming down with a slight cold today, I will go home early.', romaji: 'Kyou wa chotto kazegimi na node, hayaku kaerimasu.' },
          { japanese: '最近、仕事が忙しくて疲れ気味だ。', english: 'Recently, work has been busy and I am feeling a bit tired.', romaji: 'Saikin, shigoto ga isogashikute tsukaregimi da.' },
          { japanese: '新入社員は、少し緊張気味に挨拶をした。', english: 'The new employee gave a greeting looking a bit nervous.', romaji: 'Shinnyuu shain wa, sukoshi kinchougimi ni aisatsu o shita.' },
          { japanese: '最近、運動不足で太り気味です。', english: 'Recently, due to lack of exercise, I am tending to gain a bit of weight.', romaji: 'Saikin, undoubusoku de futorigimi desu.' },
          { japanese: '電車の到着が遅れ気味です。', english: 'The train arrivals are tending to be a bit delayed.', romaji: 'Densha no touchaku ga okuregimi desu.' },
          { japanese: '彼女は最近、少し怒り気味だ。', english: 'She has been tending to be a bit angry lately.', romaji: 'Kanojo wa saikin, sukoshi okorigimi da.' },
          { japanese: '寝不足気味で、頭が痛い。', english: 'Feeling a bit sleep-deprived, my head hurts.', romaji: 'Nebusokugimi de, atama ga itai.' },
          { japanese: '成績が下がり気味なので、もっと勉強しなければならない。', english: 'Because my grades are tending to drop a bit, I must study more.', romaji: 'Seiseki ga sagarigimi na node, motto benkyou shinakereba naranai.' },
          { japanese: 'あの犬は少し怯え（おびえ）気味だ。', english: 'That dog seems a bit frightened.', romaji: 'Ano inu wa sukoshi obiegimi da.' },
          { japanese: '景気が悪化気味だ。', english: 'The economy is tending to worsen slightly.', romaji: 'Keiki ga akkagimi da.' }
        ],
        conversation: {
          context: 'At the office.',
          dialogue: [
            { speaker: '部長', japanese: '山田くん、顔色が悪いよ。大丈夫？', english: 'Yamada, your complexion is bad. Are you okay?' },
            { speaker: '山田', japanese: 'はい、少し風邪気味ですが、大丈夫です。', english: 'Yes, I feel like I have a slight cold, but I am okay.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I feel a bit tired (疲れる - tsukareru)."',
            'Translate: "I have a slight cold (風邪 - kaze)."',
            'Can you say "I am feeling a bit happy" (嬉しい気味)?'
          ],
          answers: [
            '疲れ気味です。 (Tsukaregimi desu.)',
            '風邪気味です。 (Kazegimi desu.)',
            'No, 気味 is strictly used for negative or undesirable states.'
          ]
        },
        jlptQuestions: [
          {
            question: '最近（さいきん）甘（あま）いものばかり食（た）べているので、太（ふと）り___だ。',
            options: ['がち', '気味', 'かけ', 'つつ'],
            correctIndex: 1,
            explanation: 'Gaining weight is a state/tendency you are currently experiencing. 疲れ気味 (feeling tired), 太り気味 (tending to get fat), and 風邪気味 (slight cold) are the three most common collocations for 気味 on the JLPT.'
          },
          {
            question: '今朝（けさ）から___気味（ぎみ）で、熱（ねつ）があるかもしれない。',
            options: ['風邪', '病気', '元気', '痛い'],
            correctIndex: 0,
            explanation: '風邪気味 (kazegimi - a slight cold / coming down with a cold) is a fixed Noun + 気味 expression.'
          }
        ],
        realLifeUsage: 'Very common in Japanese workplaces to excuse oneself subtly: 「今日はちょっと風邪気味で…」 (I feel a slight cold coming on today, so...)'
      }
    ]
  },
  {
    lessonNum: 2,
    title: 'Ongoing Directional State & Beliefs',
    description: 'State progression and strong assumptions.',
    topics: [
      {
        id: 'n2-l2-t1',
        pattern: '〜一方だ',
        pronunciation: 'ippou da',
        meaning: 'More and more / Continues to change in one direction',
        isImplemented: true,
        whenAndWhy: 'Used when a situation is constantly changing in only ONE direction (often, but not always, a bad direction like getting worse, increasing prices, etc.).',
        explanation: 'Attach 一方だ (ippou da) to the dictionary form of a verb that expresses change (e.g., 増える, 減る, 悪化する). It means the change is continuing steadily without stopping.',
        formation: {
          formula: 'Verb (Dictionary form) + 一方だ',
          rules: [
            'Change verbs: Dictionary form + 一方だ (e.g. 増える一方だ - keeps increasing)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Meaning', 'Ippou da Form', 'Translation'],
          rows: [
            ['増える (fueru)', 'to increase', '増える一方だ', 'Keeps increasing'],
            ['悪化する (akka suru)', 'to worsen', '悪化する一方だ', 'Continues to worsen'],
            ['減る (heru)', 'to decrease', '減る一方だ', 'Keeps decreasing']
          ]
        },
        notes: 'Another N2 grammar, 〜ばかりだ (bakari da), is used almost identically for negative continuous changes. 一方だ is slightly more formal and can occasionally be used for positive changes (e.g., 彼の成績は上がる一方だ - His grades keep going up), though negative is more common.',
        mistakes: 'Do not use this for one-time actions or static states. (✕ 私は食べる一方だ - I just eat). It must be a verb of continuous change (increasing/decreasing/worsening).',
        comparison: {
          similarPattern: '〜つつある (In the process of changing - N2 L1)',
          difference: 'つつある (In the process of changing) is neutral. 一方だ implies a stronger sense of unstoppable momentum in a single direction.'
        },
        memoryTips: 'Ippou (一方) literally means "one way/direction". The change is a one-way street.',
        examples: [
          { japanese: '日本の高齢者は増える一方だ。', english: 'The number of elderly people in Japan keeps increasing.', romaji: 'Nihon no koureisha wa fueru ippou da.' },
          { japanese: '物価は上がる一方で、生活が苦しい。', english: 'Prices keep rising, and life is hard.', romaji: 'Bukka wa agaru ippou de, seikatsu ga kurushii.' },
          { japanese: '二人の関係は悪化する一方だ。', english: 'The relationship between the two continues to worsen.', romaji: 'Futari no kankei wa akka suru ippou da.' },
          { japanese: '仕事が忙しくて、ストレスがたまる一方だ。', english: 'Because work is busy, stress keeps building up.', romaji: 'Shigoto ga isogashikute, sutoresu ga tamaru ippou da.' },
          { japanese: '村の人口は減る一方だ。', english: 'The village\'s population keeps decreasing.', romaji: 'Mura no jinkou wa heru ippou da.' },
          { japanese: '彼の日本語は上達する一方だ。', english: 'His Japanese just keeps improving.', romaji: 'Kare no Nihongo wa joutatsu suru ippou da.' },
          { japanese: '地球の環境は悪くなる一方です。', english: 'The earth\'s environment just keeps getting worse.', romaji: 'Chikyuu no kankyou wa waruku naru ippou desu.' },
          { japanese: '借金は膨らむ（ふくらむ）一方だ。', english: 'My debt keeps ballooning (expanding).', romaji: 'Shakkin wa fukuramu ippou da.' },
          { japanese: '問題は複雑化（ふくざつか）する一方だ。', english: 'The problem keeps getting more complex.', romaji: 'Mondai wa fukuzatsuka suru ippou da.' },
          { japanese: '最近、彼女の機嫌は悪くなる一方だ。', english: 'Recently, her mood just keeps getting worse.', romaji: 'Saikin, kanojo no kigen wa waruku naru ippou da.' }
        ],
        conversation: {
          context: 'Discussing the economy.',
          dialogue: [
            { speaker: 'ケン', japanese: 'またガソリンの値段が上がったね。', english: 'The price of gasoline went up again, huh.' },
            { speaker: 'マリー', japanese: '本当に。給料は上がらないのに、物価は上がる一方だわ。', english: 'Really. Even though salaries don\'t go up, prices just keep rising.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Prices keep rising (上がる - agaru)."',
            'Translate: "The situation keeps worsening (悪化する - akka suru)."',
            'Which is correct? (増えている一方だ / 増える一方だ)'
          ],
          answers: [
            '値段が上がる一方だ。 (Nedan ga agaru ippou da.)',
            '状況が悪化する一方だ。 (Joukyou ga akka suru ippou da.)',
            '増える一方だ (Must use dictionary form, not te-iru form)'
          ]
        },
        jlptQuestions: [
          {
            question: '最近（さいきん）、仕事（しごと）が忙（いそが）しくて、疲（つか）れが___一方（いっぽう）だ。',
            options: ['たまる', 'たまって', 'たまり', 'たまった'],
            correctIndex: 0,
            explanation: '一方だ requires the dictionary form of a verb of change. たまる (to accumulate) + 一方だ.'
          },
          {
            question: '祖母（そぼ）の病気（びょうき）は、悪（わる）く___一方（いっぽう）で心配（しんぱい）だ。',
            options: ['する', 'なる', 'ある', 'いる'],
            correctIndex: 1,
            explanation: 'To express "becoming bad/worsening", use 悪くなる. Therefore, 悪くなる一方だ (keeps getting worse).'
          }
        ],
        realLifeUsage: 'Often heard in news reports about economic trends or in complaints about things getting worse.'
      },
      {
        id: 'n2-l2-t2',
        pattern: '〜おそれがある（上級）',
        pronunciation: 'osore ga aru',
        meaning: 'Risk that / Fear that (Formal)',
        isImplemented: true,
        whenAndWhy: 'This is an advanced review and expansion of N3 L4. In N2, it frequently appears in official news broadcasts, medical warnings, and legal documents regarding serious public dangers.',
        explanation: 'Attach おそれがある to the dictionary form of verbs or Noun + の. It objectively states a strong possibility that a bad event will happen.',
        formation: {
          formula: 'Verb (Dictionary) / Noun + の + おそれがある',
          rules: [
            'Verbs: Dictionary form + おそれがある (e.g. 感染するおそれがある - risk of infection)',
            'Nouns: Noun + の + おそれがある (e.g. 倒産のおそれがある - risk of bankruptcy)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Osore ga aru form', 'Translation'],
          rows: [
            ['Verb', '広がる (hirogaru)', '広がるおそれがある', 'Risk of spreading'],
            ['Noun', '副作用 (fukusayou)', '副作用のおそれがある', 'Risk of side effects']
          ]
        },
        notes: 'In N2 reading comprehension (読解), look for this grammar in warning labels on medicine, weather reports, and economic forecasts.',
        mistakes: 'Do not use this for personal, daily fears (✕ 宿題を忘れるおそれがある - I have a risk of forgetting homework). It sounds ridiculously dramatic. Use 忘れるかもしれない.',
        comparison: {
          similarPattern: '〜かねない (Might do - N2 L5)',
          difference: '〜おそれがある is an objective, formal warning of danger (The typhoon poses a risk of flooding). 〜かねない is a subjective judgment that someone might do something bad (He might leak the secret if he gets drunk).'
        },
        memoryTips: 'Osore (恐れ) = fear/dread. Used for things the general public should dread.',
        examples: [
          { japanese: 'この病気は、全国に感染が広がるおそれがある。', english: 'There is a risk that infection of this disease will spread nationwide.', romaji: 'Kono byouki wa, zenkoku ni kansen ga hirogaru osore ga aru.' },
          { japanese: '強い地震が発生するおそれがありますので、注意してください。', english: 'There is a risk that a strong earthquake will occur, so please be careful.', romaji: 'Tsuyoi jishin ga hassei suru osore ga arimasu node, chuui shite kudasai.' },
          { japanese: 'このままでは、多くの企業が倒産するおそれがある。', english: 'At this rate, there is a risk that many companies will go bankrupt.', romaji: 'Kono mama de wa, ooku no kigyou ga tousan suru osore ga aru.' },
          { japanese: '個人情報が悪用されるおそれがある。', english: 'There is a risk that personal information will be misused.', romaji: 'Kojin jouhou ga akuyou sareru osore ga aru.' },
          { japanese: '大雨による洪水の恐れがあります。', english: 'There is a risk of flooding due to heavy rain.', romaji: 'Ooame ni yoru kouzui no osore ga arimasu.' },
          { japanese: 'この薬は、眠気を引き起こすおそれがあります。', english: 'This medicine poses a risk of causing drowsiness.', romaji: 'Kono kusuri wa, nemuke o hikiokosu osore ga arimasu.' },
          { japanese: '彼を社長にすると、会社が潰れるおそれがある。', english: 'If we make him president, there is a risk the company will be crushed (bankrupt).', romaji: 'Kare o shachou ni suru to, kaisha ga tsubureru osore ga aru.' },
          { japanese: '火災になるおそれがあるため、ここで火を使わないでください。', english: 'Because there is a risk of a fire breaking out, please do not use fire here.', romaji: 'Kasai ni naru osore ga aru tame, koko de hi o tsukawanaide kudasai.' },
          { japanese: '自然環境が破壊されるおそれがある。', english: 'There is a risk that the natural environment will be destroyed.', romaji: 'Shizen kankyou ga hakai sareru osore ga aru.' },
          { japanese: '間違った使い方をすると、怪我をするおそれがあります。', english: 'If you use it incorrectly, there is a risk of injury.', romaji: 'Machigatta tsukaikata o suru to, kega o suru osore ga arimasu.' }
        ],
        conversation: {
          context: 'A news broadcast.',
          dialogue: [
            { speaker: 'ニュース', japanese: '土砂災害のおそれがありますので、避難してください。', english: 'Because there is a risk of a landslide disaster, please evacuate.' },
            { speaker: '母', japanese: '大変。早く荷物をまとめましょう。', english: 'Terrible. Let\'s pack our bags quickly.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Risk of bankruptcy (倒産 - tousan)."',
            'Translate: "Risk of side effects (副作用 - fukusayou)."',
            'Translate: "There is a risk it will break (壊れる - kowareru)."'
          ],
          answers: [
            '倒産のおそれがある (Tousan no osore ga aru)',
            '副作用のおそれがある (Fukusayou no osore ga aru)',
            '壊れるおそれがある (Kowareru osore ga aru)'
          ]
        },
        jlptQuestions: [
          {
            question: 'このまま借金（しゃっきん）が___と、会社（かいしゃ）が倒産（とうさん）するおそれがある。',
            options: ['増える', '増えて', '増えた', '増え'],
            correctIndex: 0,
            explanation: 'An conditional statement: "If debts (continue to) increase..." requires the dictionary form before と. 増える + と.'
          },
          {
            question: '台風（たいふう）の接近（せっきん）により、飛行機（ひこうき）が欠航（けっこう）___おそれがあります。',
            options: ['する', 'して', 'した', 'し'],
            correctIndex: 0,
            explanation: 'Flight cancellation (欠航). Use dictionary form する before おそれがあります.'
          }
        ],
        realLifeUsage: 'Read any Japanese medicine box, and you will see 「副作用のおそれがあります」.'
      },
      {
        id: 'n2-l2-t3',
        pattern: '〜に限って',
        pronunciation: 'ni kagitte',
        meaning: 'Especially / Only in the case of',
        isImplemented: true,
        whenAndWhy: 'Used in three ways: 1) "Of all times, why now?" (Bad luck timing). 2) "My trusted person would NEVER do that" (Strong belief). 3) "Only for this specific group" (Limitation).',
        explanation: 'Attach に限って (ni kagitte) to a noun. It limits the topic to ONE specific instance and usually carries strong emotion (frustration or absolute trust).',
        formation: {
          formula: 'Noun + に限って',
          rules: [
            'Bad Timing: Noun (Time/Day) + に限って (e.g. 忙しい日に限って - Of all days, on a busy day...)',
            'Trust: Noun (Person) + に限って (e.g. 彼に限って - He, of all people, would never...)',
            'Limitation: Noun + に限って (e.g. 本日に限って - Limited to today only)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Structure', 'Translation'],
          rows: [
            ['Bad Timing', '急いでいる時に限って', 'Of all times, when I am in a hurry...'],
            ['Absolute Trust', 'うちの子に限って', 'Our child, of all people (would never do something bad)'],
            ['Limitation', '今日に限って', 'Only for today (usually used as 限ります)']
          ]
        },
        notes: 'In JLPT N2, the "Bad Timing" (Murphy\'s Law) and "Absolute Trust" usages are highly tested.',
        mistakes: 'Do not use this for positive timing. (✕ 暇な時に限って、友達が遊びに来た - Wrong because friends visiting when you are free is a good thing. Use に限って when you are frustrated).',
        comparison: {
          similarPattern: '〜だけ (Only)',
          difference: '今日だけ (Only today - neutral). 今日に限って (Of all days, today! / Limited specially to today).'
        },
        memoryTips: 'Kagiru means "to limit". "Limited ONLY to this exact moment/person, this strange thing happens."',
        examples: [
          { japanese: '傘を持っていない日に限って、雨が降る。', english: 'Of all days, it rains on the day I don\'t have an umbrella.', romaji: 'Kasa o motte inai hi ni kagitte, ame ga furu.' },
          { japanese: '急いでいる時に限って、電車が遅れる。', english: 'Of all times, the train is delayed when I am in a hurry.', romaji: 'Isoide iru toki ni kagitte, densha ga okureru.' },
          { japanese: '彼に限って、嘘をつくはずがない。', english: 'He, of all people, could never lie. (I trust him).', romaji: 'Kare ni kagitte, uso o tsuku hazu ga nai.' },
          { japanese: 'うちの子供に限って、万引きなんてするわけがありません。', english: 'Our child, of all children, would never do something like shoplifting.', romaji: 'Uchi no kodomo ni kagitte, manbiki nante suru wake ga arimasen.' },
          { japanese: '楽しみにしていた日に限って、風邪を引いてしまう。', english: 'Of all days, I catch a cold on the day I was looking forward to.', romaji: 'Tanoshimi ni shite ita hi ni kagitte, kaze o hiite shimau.' },
          { japanese: '山田さんに限って、そんなミスはしないだろう。', english: 'Yamada, of all people, probably wouldn\'t make such a mistake.', romaji: 'Yamada-san ni kagitte, sonna misu wa shinai darou.' },
          { japanese: '洗車をした日に限って、鳥のフンが落ちてくる。', english: 'Of all days, bird poop falls on the day I washed my car.', romaji: 'Sensha o shita hi ni kagitte, tori no fun ga ochite kuru.' },
          { japanese: 'お金がない時に限って、飲み会に誘われる。', english: 'Of all times, I get invited to drinking parties when I have no money.', romaji: 'Okane ga nai toki ni kagitte, nomikai ni sasowareru.' },
          { japanese: 'あの真面目な彼に限って、無断欠勤はあり得ない。', english: 'That serious guy, of all people, taking an unexcused absence is impossible.', romaji: 'Ano majime na kare ni kagitte, mudan kekkin wa arienai.' },
          { japanese: '今日に限って、早く目が覚めた。', english: 'Only today (unusually), I woke up early.', romaji: 'Kyou ni kagitte, hayaku me ga sameta.' }
        ],
        conversation: {
          context: 'Complaining about luck.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'ああ、最悪だ。急いでいる時に限って、信号が全部赤になる。', english: 'Ah, this is the worst. Of all times, when I am in a hurry, all the traffic lights turn red.' },
            { speaker: 'さくら', japanese: 'そういうものですよね。落ち着いて行きましょう。', english: 'That is just how things go. Let\'s go calmly.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Of all times, when I am busy (忙しい時)..."',
            'Translate: "Of all days, when I don\'t have an umbrella (傘がない日)..."',
            'Translate: "He, of all people (彼), would never betray us."'
          ],
          answers: [
            '忙しい時に限って (Isogashii toki ni kagitte)',
            '傘がない日に限って (Kasa ga nai hi ni kagitte)',
            '彼に限って、裏切るはずがない。 (Kare ni kagitte, uragiru hazu ga nai.)'
          ]
        },
        jlptQuestions: [
          {
            question: '楽（たの）しみにしていた旅行（りょこう）の日に___、熱（ねつ）を出（だ）してしまった。',
            options: ['関して', '限って', '対して', 'めぐって'],
            correctIndex: 1,
            explanation: 'Murphy\'s Law context: "Of all days, on the day of the trip I was looking forward to, I got a fever." に限って perfectly captures this frustration.'
          },
          {
            question: 'あの真面目（まじめ）な田中（たなか）さんに___、約束（やくそく）を破（やぶ）るわけがない。',
            options: ['限って', 'とって', 'よって', '対して'],
            correctIndex: 0,
            explanation: 'Absolute trust context: "Tanaka, of all people, would never break a promise." 田中さんに限って is correct.'
          }
        ],
        realLifeUsage: 'Often used by protective parents: 「うちの子に限って！」 (Not my child!).'
      },
      {
        id: 'n2-l2-t4',
        pattern: '〜に相違ない',
        pronunciation: 'ni soui nai',
        meaning: 'Without a doubt / Must be',
        isImplemented: true,
        whenAndWhy: 'Used in formal/written Japanese or detective/mystery contexts to express a very strong, logical conviction that something is absolutely true.',
        explanation: '相違 (soui) means "difference/discrepancy". 相違ない means "there is no discrepancy" -> "It is certain." It attaches to the plain form of a sentence.',
        formation: {
          formula: 'Plain Form + に相違ない',
          rules: [
            'Verbs/i-adjectives: Plain form + に相違ない (e.g. 行くのに相違ない)',
            'na-adjectives/Nouns: (Drop だ) + に相違ない (e.g. 犯人に相違ない - must be the culprit)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Ni soui nai Form', 'Translation'],
          rows: [
            ['Noun', '犯人 (hannin)', '犯人に相違ない', 'Must be the culprit'],
            ['Verb', '嘘をついた (uso o tsuita)', '嘘をついたに相違ない', 'Must have lied'],
            ['i-adjective', '難しい (muzukashii)', '難しいに相違ない', 'Must be difficult']
          ]
        },
        notes: 'In conversation, 〜に違いない (ni chigai nai) is much more common. に相違ない is the formal, written version of に違いない.',
        mistakes: 'Do not use this for simple, daily assumptions. (✕ 明日は晴れるに相違ない - Too stiff). Use this when deducing something based on strong evidence (e.g. DNA results -> He is the killer).',
        comparison: {
          similarPattern: '〜に違いない (Must be)',
          difference: 'They mean exactly the same thing ("I am certain that..."). に違いない is for everyday conversation. に相違ない is for official documents, news, or Sherlock Holmes.'
        },
        memoryTips: 'Soui (相違) = difference. Nai (ない) = none. No difference between reality and my guess -> It must be true!',
        examples: [
          { japanese: '指紋が一致した。彼が犯人に相違ない。', english: 'The fingerprints matched. He must be the culprit without a doubt.', romaji: 'Shimon ga itchi shita. Kare ga hannin ni soui nai.' },
          { japanese: 'こんなに立派な家だから、お金持ちに相違ない。', english: 'Because it is such a magnificent house, they must be rich.', romaji: 'Konna ni rippa na ie da kara, okanemochi ni soui nai.' },
          { japanese: 'これは、あの有名な画家が描いた絵に相違ない。', english: 'This must undoubtedly be a painting drawn by that famous painter.', romaji: 'Kore wa, ano yuumei na gaka ga kaita e ni soui nai.' },
          { japanese: '彼が何も言わないのは、何か隠しているに相違ない。', english: 'The fact that he says nothing means he must undoubtedly be hiding something.', romaji: 'Kare ga nanimo iwanai no wa, nanika kakushite iru ni soui nai.' },
          { japanese: 'この手紙は、田中さんが書いたものに相違ない。', english: 'This letter must have been written by Mr. Tanaka.', romaji: 'Kono tegami wa, Tanaka-san ga kaita mono ni soui nai.' },
          { japanese: 'これだけ多くの人が集まるのだから、人気があるに相違ない。', english: 'Since this many people are gathering, it must be popular.', romaji: 'Kore dake ooku no hito ga atsumaru no da kara, ninki ga aru ni soui nai.' },
          { japanese: 'あの二人は、付き合っているに相違ない。', english: 'Those two must undoubtedly be dating.', romaji: 'Ano futari wa, tsukiatte iru ni soui nai.' },
          { japanese: '彼の話は嘘に相違ない。', english: 'His story must be a lie.', romaji: 'Kare no hanashi wa uso ni soui nai.' },
          { japanese: 'この計画は、失敗するに相違ない。', english: 'This plan will undoubtedly fail.', romaji: 'Kono keikaku wa, shippai suru ni soui nai.' },
          { japanese: '彼女は今、とても悲しいに相違ない。', english: 'She must be very sad right now.', romaji: 'Kanojo wa ima, totemo kanashii ni soui nai.' }
        ],
        conversation: {
          context: 'Detectives examining a crime scene.',
          dialogue: [
            { speaker: '刑事A', japanese: '防犯カメラに、彼が映っていました。', english: 'He was caught on the security camera.' },
            { speaker: '刑事B', japanese: '間違いない。彼が犯人に相違ない。逮捕状を請求しろ。', english: 'No mistake. He must be the culprit. Request an arrest warrant.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "He must be the culprit (犯人)."',
            'Translate: "It must be a lie (嘘)."',
            'Which is more formal? に違いない or に相違ない?'
          ],
          answers: [
            '犯人に相違ない (Hannin ni soui nai)',
            '嘘に相違ない (Uso ni soui nai)',
            'に相違ない (ni soui nai) is much more formal.'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの書類（しょるい）を盗（ぬす）んだのは、スパイ___相違（そうい）ない。',
            options: ['だに', 'に', 'のに', 'な'],
            correctIndex: 1,
            explanation: 'Nouns attach directly to に相違ない without だ. スパイ (spy) + に相違ない.'
          },
          {
            question: 'こんなに寒（さむ）いのだから、外（そと）は雪（ゆき）が降（ふ）っている___。',
            options: ['おそれがある', 'にかかわらず', 'に相違ない', 'のみならず'],
            correctIndex: 2,
            explanation: 'Deducing a fact from evidence (It is so cold -> it MUST be snowing). に相違ない is the only logical conclusion.'
          }
        ],
        realLifeUsage: 'Often used by lawyers, politicians, and characters in mystery novels.'
      },
      {
        id: 'n2-l2-t5',
        pattern: '〜にかかわらず（２）',
        pronunciation: 'ni kakawarazu',
        meaning: 'Regardless of / No matter (Review & Expand)',
        isImplemented: true,
        whenAndWhy: 'A review and expansion of N3 L4. In N2, the focus is often on the pairing with question words (誰、いつ、どこ、どれ) to mean "No matter who/when/where".',
        explanation: 'When combined with a question word, you must use the embedded question particle か before にかかわらず. This creates expressions like "Regardless of who you are" or "No matter where you go".',
        formation: {
          formula: 'Question Word + Verb(Plain) + か + にかかわらず',
          rules: [
            'Who: 誰であるかにかかわらず (Regardless of who it is)',
            'When: いつ来るかにかかわらず (Regardless of when they come)',
            'Whether A or B: 行く行かないにかかわらず (Regardless of going or not)'
          ]
        },
        conjugations: {
          headers: ['Type', 'Phrase', 'Translation'],
          rows: [
            ['Who', '誰が言うかにかかわらず', 'Regardless of who says it'],
            ['How much', 'いくらであるかにかかわらず', 'Regardless of how much it is'],
            ['Opposites', '好き嫌いにかかわらず', 'Regardless of like or dislike']
          ]
        },
        notes: 'Can also be written as にかかわりなく (formal). The outcome of the sentence is always an absolute rule (e.g. You must pay, You can enter).',
        mistakes: 'Forgetting the か when using a question word. (✕ 誰が来るにかかわらず - Wrong. ◯ 誰が来るかにかかわらず - Correct).',
        comparison: {
          similarPattern: '〜を問わず (Regardless of - N2)',
          difference: '〜を問わず (o towazu - without asking about X) is almost identical in meaning. 性別を問わず (Regardless of gender) = 性別にかかわらず. Both are highly formal and used in official rules/notices.'
        },
        memoryTips: 'Kakawaru (concern) + zu (without). Without concern for X.',
        examples: [
          { japanese: '誰が賛成するかにかかわらず、私はこの計画を実行します。', english: 'Regardless of who agrees, I will execute this plan.', romaji: 'Dare ga sansei suru ka ni kakawarazu, watashi wa kono keikaku o jikkou shimasu.' },
          { japanese: 'いつ申し込むかにかかわらず、料金は同じです。', english: 'Regardless of when you apply, the fee is the same.', romaji: 'Itsu moushikomu ka ni kakawarazu, ryoukin wa onaji desu.' },
          { japanese: '結果がどうなるかにかかわらず、最後まで頑張る。', english: 'Regardless of how the result turns out, I will do my best until the end.', romaji: 'Kekka ga dou naru ka ni kakawarazu, saigo made ganbaru.' },
          { japanese: '理由が何であるかにかかわらず、暴力はいけない。', english: 'Regardless of what the reason is, violence is wrong.', romaji: 'Riyuu ga nan de aru ka ni kakawarazu, bouryoku wa ikenai.' },
          { japanese: '経験の有無にかかわらず、どなたでもご参加いただけます。', english: 'Regardless of the presence or absence of experience, anyone can participate.', romaji: 'Keiken no umu ni kakawarazu, donata demo go-sanka itadakemasu.' },
          { japanese: '天候にかかわらず、試合は行われます。', english: 'Regardless of the weather, the match will be held.', romaji: 'Tenkou ni kakawarazu, shiai wa okonawaremasu.' },
          { japanese: '国籍にかかわらず、優秀な人材を採用します。', english: 'Regardless of nationality, we will hire excellent human resources.', romaji: 'Kokuseki ni kakawarazu, yuushuu na jinzai o saiyou shimasu.' },
          { japanese: '値段が高い安いにかかわらず、必要なものは買う。', english: 'Regardless of whether the price is high or low, I buy what is necessary.', romaji: 'Nedan ga takai yasui ni kakawarazu, hitsuyou na mono wa kau.' },
          { japanese: 'プロアマにかかわらず、参加可能です。', english: 'Participation is possible regardless of being pro or amateur.', romaji: 'Puro ama ni kakawarazu, sanka kanou desu.' },
          { japanese: 'どこに住んでいるかにかかわらず、税金は払わなければならない。', english: 'Regardless of where you live, you must pay taxes.', romaji: 'Doko ni sunde iru ka ni kakawarazu, zeikin wa harawanakereba naranai.' }
        ],
        conversation: {
          context: 'Explaining a store policy.',
          dialogue: [
            { speaker: '客', japanese: '返品したいんですが、レシートがなくてもいいですか。', english: 'I want to return an item, is it okay even if I don\'t have a receipt?' },
            { speaker: '店員', japanese: '申し訳ございません。理由のいかんにかかわらず、レシートがない場合は返品できません。', english: 'I am sorry. Regardless of the reason, we cannot accept returns if there is no receipt.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Regardless of who (誰) it is..."',
            'Translate: "Regardless of when (いつ) it is..."',
            'Translate: "Regardless of gender (性別 - seibetsu)."'
          ],
          answers: [
            '誰であるかにかかわらず (Dare de aru ka ni kakawarazu)',
            'いつであるかにかかわらず (Itsu de aru ka ni kakawarazu)',
            '性別にかかわらず (Seibetsu ni kakawarazu)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この奨学金（しょうがくきん）は、国籍（こくせき）がどこである___にかかわらず、応募（おうぼ）できます。',
            options: ['か', 'が', 'の', 'を'],
            correctIndex: 0,
            explanation: 'When using a question word (どこ), you must insert the embedded question particle か before にかかわらず. どこであるかにかかわらず.'
          },
          {
            question: '雨（あめ）が___にかかわらず、フェスティバルは予定（よてい）通（どお）り行（おこな）います。',
            options: ['降る', '降る降らない', '降った', '降るか降らないか'],
            correctIndex: 3,
            explanation: 'To express "Regardless of whether it rains or not", you need either 降る降らない or 降るか降らないか. Option 4 matches the pattern perfectly.'
          }
        ],
        realLifeUsage: 'Often seen in the hyper-formal phrase 理由のいかんにかかわらず (Regardless of what the reason is - absolutely no exceptions).'
      }
    ]
  },
  {
    lessonNum: 3,
    title: 'Actions & Prior Occasions',
    description: 'Formal timings and action markers.',
    topics: [
      {
        id: 'n2-l3-t1',
        pattern: '〜つつ',
        pronunciation: 'tsutsu',
        meaning: 'While doing (Formal) / Although (Formal)',
        isImplemented: true,
        whenAndWhy: 'Used in two ways in formal writing or speeches: 1) "While doing A, I did B" (Simultaneous actions). 2) "Although I knew/thought A, I did B" (Contradiction).',
        explanation: 'Attach つつ (tsutsu) to the masu-stem of a verb. For simultaneous actions, the action AFTER つつ is the main action. For contradictions, it is often used with verbs of thinking/knowing (e.g. 思いつつ - although I thought...).',
        formation: {
          formula: 'Verb (masu-stem) + つつ',
          rules: [
            'Simultaneous: masu-stem + つつ (e.g. お茶を飲みつつ - while drinking tea...)',
            'Contradiction: masu-stem + つつ (も) (e.g. 悪いと知りつつ - although knowing it is bad...)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Verb', 'Tsutsu Form', 'Translation'],
          rows: [
            ['Simultaneous', '考える (kangaeru)', '考えつつ', 'While thinking'],
            ['Contradiction', '知る (shiru)', '知りつつ（も）', 'Although knowing']
          ]
        },
        notes: 'In N2, the "Contradiction" usage (although I know it\'s bad, I do it anyway) is tested heavily. Often the particle も is added (つつも) to emphasize the contradiction.',
        mistakes: 'Do not use this for everyday casual actions. (✕ 音楽を聞きつつ、部屋を掃除した). Use 〜ながら for casual life. Use 〜つつ for literature, business, or deep internal thoughts.',
        comparison: {
          similarPattern: '〜ながら (While)',
          difference: '〜ながら is casual and standard (While eating, I watch TV). 〜つつ is formal and literary (While reflecting on the past year, I write this letter).'
        },
        memoryTips: 'Tsutsu... two things are happening (two tsus).',
        examples: [
          { japanese: '将来の計画を考えつつ、コーヒーを飲んだ。', english: 'While thinking about my future plans, I drank coffee.', romaji: 'Shourai no keikaku o kangaetsutsu, koohii o nonda.' },
          { japanese: '体に悪いと知りつつ、またタバコを吸ってしまった。', english: 'Although knowing it is bad for my body, I ended up smoking again.', romaji: 'Karada ni warui to shiritsutsu, mata tabako o sutte shimatta.' },
          { japanese: '彼は申し訳ないと思いつつ、断った。', english: 'Although he felt sorry, he refused.', romaji: 'Kare wa moushiwakenai to omoitsutsu, kotowatta.' },
          { japanese: '景色を楽しみつつ、ゆっくりドライブをした。', english: 'While enjoying the scenery, we took a slow drive.', romaji: 'Keshiki o tanoshimitsutsu, yukkuri doraibu o shita.' },
          { japanese: 'ダイエットしなければと思いつつ、甘いものを食べてしまう。', english: 'Although thinking I must diet, I end up eating sweet things.', romaji: 'Daietto shinakereba to omoitsutsu, amai mono o tabete shimau.' },
          { japanese: '先生と相談しつつ、進路を決めたいと思います。', english: 'I would like to decide my career path while consulting with my teacher.', romaji: 'Sensei to soudan shitsutsu, shinro o kimetai to omoimasu.' },
          { japanese: '危険だと分かっていつつ、彼は海に飛び込んだ。', english: 'Although understanding it was dangerous, he jumped into the sea.', romaji: 'Kiken da to wakatte itsutsu, kare wa umi ni tobikonda.' },
          { japanese: '過去の失敗を反省しつつ、前へ進もう。', english: 'Let\'s move forward while reflecting on past failures.', romaji: 'Kako no shippai o hansei shitsutsu, mae e susumou.' },
          { japanese: '早く起きようと思いつつも、いつも寝坊してしまう。', english: 'Although intending to wake up early, I always end up oversleeping.', romaji: 'Hayaku okiyou to omoitsutsu mo, itsumo nebou shite shimau.' },
          { japanese: 'お互いに助け合いつつ、この困難を乗り越えましょう。', english: 'While helping each other, let\'s overcome this difficulty.', romaji: 'Otagai ni tasukeaitsutsu, kono konnan o norikoemashou.' }
        ],
        conversation: {
          context: 'Talking about bad habits.',
          dialogue: [
            { speaker: 'ケン', japanese: 'また夜中にラーメンを食べてしまったよ。', english: 'I ended up eating ramen in the middle of the night again.' },
            { speaker: 'マリー', japanese: '太るってわかっていつつ、食べちゃうんだよね。', english: 'Even though you know you will get fat, you end up eating it, right.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Although knowing (知る - shiru)..."',
            'Translate: "While thinking (考える - kangaeru)..."',
            'What form of the verb is required before つつ?'
          ],
          answers: [
            '知りつつ (Shiritsutsu)',
            '考えつつ (Kangaetsutsu)',
            'The masu-stem (the verb form before "masu").'
          ]
        },
        jlptQuestions: [
          {
            question: '今日（きょう）こそ勉強（べんきょう）しようと___つつ、また一日（いちにち）ゲームをしてしまった。',
            options: ['思う', '思って', '思い', '思った'],
            correctIndex: 2,
            explanation: 'The grammar requires the masu-stem of the verb. 思います -> 思い + つつ.'
          },
          {
            question: '彼女（かのじょ）は涙（なみだ）を流（なが）し___、笑顔（えがお）で手を振った。',
            options: ['て', 'から', 'つつ', 'ながらも'],
            correctIndex: 2,
            explanation: 'A literary description of simultaneous contrasting actions (crying while smiling). 流し (masu-stem) + つつ fits the formal tone.'
          }
        ],
        realLifeUsage: 'Often found in apologies: 「悪いと知りつつ、やってしまいました」 (Although I knew it was bad, I did it).'
      },
      {
        id: 'n2-l3-t2',
        pattern: '〜わけではない',
        pronunciation: 'wake dewa nai',
        meaning: 'It does not mean that / Not necessarily',
        isImplemented: true,
        whenAndWhy: 'Used to gently deny a sweeping assumption. "Just because A is true, it does not necessarily mean B is true."',
        explanation: 'Attach わけではない (wake dewa nai) to the plain form of a sentence. It softens a denial. Instead of saying "I hate it", you say "It\'s not that I hate it (but...)"',
        formation: {
          formula: 'Plain Form + わけではない',
          rules: [
            'Verbs/i-adjectives: Plain form + わけではない (e.g. 行かないわけではない - It\'s not that I won\'t go)',
            'na-adjectives: Add な + わけではない (e.g. 嫌いなわけではない - It\'s not that I hate it)',
            'Nouns: Add の/な + わけではない (e.g. 病気のわけではない - It\'s not that I am sick)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Phrase', 'Translation'],
          rows: [
            ['Verb', '怒っているわけではない', 'It is not that I am angry'],
            ['i-adjective', '美味しくないわけではない', 'It is not that it is not delicious'],
            ['na-adjective', '暇なわけではない', 'It is not that I am free']
          ]
        },
        notes: 'In casual conversation, it becomes わけじゃない (wake ja nai). Often paired with words like いつも (always), 誰でも (anyone), or 完全に (completely) to mean "Not always", "Not everyone", etc.',
        mistakes: 'Do not confuse with 〜わけがない (N3 L1: Impossible). わけがない is 100% denial ("No way"). わけではない is a partial denial ("Not exactly").',
        comparison: {
          similarPattern: '〜とは限らない (Not necessarily - N2)',
          difference: 'お金持ちが幸せだとは限らない (Rich people are not necessarily happy - General logical truth). お金が欲しいわけではない (It\'s not that I want money - Personal feeling/nuance).'
        },
        memoryTips: 'Wake = reason/meaning. Dewa nai = is not. "It is not the meaning that..."',
        examples: [
          { japanese: '肉が嫌いなわけではありませんが、今は食べたくありません。', english: 'It is not that I hate meat, but I don\'t want to eat it right now.', romaji: 'Niku ga kirai na wake de wa arimasen ga, ima wa tabetaku arimasen.' },
          { japanese: '全然勉強しなかったわけではないが、テストの点は悪かった。', english: 'It is not that I didn\'t study at all, but my test score was bad.', romaji: 'Zenzen benkyou shinakatta wake de wa nai ga, tesuto no ten wa warukatta.' },
          { japanese: '彼に賛成しているわけではない。', english: 'It is not that I agree with him.', romaji: 'Kare ni sansei shite iru wake de wa nai.' },
          { japanese: 'お金があれば、幸せになれるわけではない。', english: 'Just because you have money, it does not mean you can become happy.', romaji: 'Okane ga areba, shiawase ni nareru wake de wa nai.' },
          { japanese: '毎日自炊しているわけじゃありません。時々外食もします。', english: 'It is not that I cook for myself every day. I sometimes eat out too.', romaji: 'Mainichi jisui shite iru wake ja arimasen. Tokidoki gaishoku mo shimasu.' },
          { japanese: 'パソコンが全く使えないわけではないが、得意ではない。', english: 'It is not that I can\'t use a computer at all, but I am not good at it.', romaji: 'Pasokon ga mattaku tsukaenai wake de wa nai ga, tokui de wa nai.' },
          { japanese: 'あなたの意見に反対しているわけではありません。', english: 'It is not that I am opposing your opinion.', romaji: 'Anata no iken ni hantai shite iru wake de wa arimasen.' },
          { japanese: '日本人だからといって、漢字が全部読めるわけではない。', english: 'Just because someone is Japanese, it does not mean they can read all kanji.', romaji: 'Nihonjin da kara to itte, kanji ga zenbu yomeru wake de wa nai.' },
          { japanese: '怒っているわけじゃないよ。ただ疲れているだけ。', english: 'It\'s not that I am angry. I\'m just tired.', romaji: 'Okotte iru wake ja nai yo. Tada tsukarete iru dake.' },
          { japanese: '高いものがいつも美味しいわけではない。', english: 'Expensive things are not always delicious.', romaji: 'Takai mono ga itsumo oishii wake de wa nai.' }
        ],
        conversation: {
          context: 'Refusing an invitation.',
          dialogue: [
            { speaker: 'ジョン', japanese: '今夜、飲みにいかない？', english: 'Do you want to go drinking tonight?' },
            { speaker: 'さくら', japanese: 'ごめん。行きたくないわけじゃないんだけど、今日は仕事が残っていて。', english: 'Sorry. It\'s not that I don\'t want to go, but I have work left today.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It is not that I hate it (嫌い - kirai)."',
            'Translate: "It is not that I have money (お金がある - okane ga aru)."',
            'Make it casual: わけではない'
          ],
          answers: [
            '嫌いなわけではない (Kirai na wake de wa nai)',
            'お金があるわけではない (Okane ga aru wake de wa nai)',
            'わけじゃない (wake ja nai)'
          ]
        },
        jlptQuestions: [
          {
            question: '彼（かれ）のことが嫌（きら）いな___が、一緒（いっしょ）に旅行（りょこう）には行（い）きたくない。',
            options: ['わけがない', 'はずがない', 'わけではない', 'に相違ない'],
            correctIndex: 2,
            explanation: 'The speaker is softening their refusal: "It is not that I hate him (but...)." わけではない is used for partial/soft denial.'
          },
          {
            question: '安（やす）いからといって、質（しつ）が悪（わる）い___。',
            options: ['わけはない', 'わけがない', 'わけではない', 'にちがいない'],
            correctIndex: 2,
            explanation: '"Just because it is cheap, it does not necessarily mean the quality is bad." わけではない is paired with 〜からといって (Just because) to deny a sweeping assumption.'
          }
        ],
        realLifeUsage: 'The standard Japanese way to say "No" without sounding harsh or confrontational.'
      },
      {
        id: 'n2-l3-t3',
        pattern: '〜にあたって',
        pronunciation: 'ni atatte',
        meaning: 'On the occasion of / Prior to',
        isImplemented: true,
        whenAndWhy: 'Used in formal speeches, ceremonies, or official documents to talk about actions taken right before a special, positive occasion.',
        explanation: 'Attach にあたって (ni atatte) to a noun representing a special event (e.g. opening a store, getting married, starting a new project) or to the dictionary form of a verb.',
        formation: {
          formula: 'Noun / Verb (Dictionary) + にあたって',
          rules: [
            'Noun + にあたって (e.g. 開店にあたって - on the occasion of opening the store)',
            'Verb + にあたって (e.g. 出発するにあたって - on the occasion of departing)',
            'Noun Modifier: にあたっての + Noun (e.g. 出発にあたっての注意 - warnings prior to departure)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Noun', '結婚にあたって', 'On the occasion of marriage'],
            ['Verb', '家を建てるにあたって', 'Prior to building a house']
          ]
        },
        notes: 'It is almost always used for POSITIVE or EXCITING occasions. Do not use it for negative events (funerals, bankruptcy, illness).',
        mistakes: 'Do not use this for everyday actions (✕ 映画を見るにあたって、ポップコーンを買った). It sounds like you are holding a press conference about eating popcorn. Use 〜前に for daily life.',
        comparison: {
          similarPattern: '〜前に (Before - N5)',
          difference: '寝る前に (Before sleeping - daily). 新生活を始めるにあたって (On the occasion of starting a new life - formal, special).'
        },
        memoryTips: 'Ataru means "to hit/strike". You are striking the exact moment of a special occasion.',
        examples: [
          { japanese: '新しいプロジェクトを始めるにあたって、皆さんに一言挨拶を申し上げます。', english: 'On the occasion of starting the new project, I would like to say a word of greeting to everyone.', romaji: 'Atarashii purojekuto o hajimeru ni atatte, minasan ni hitokoto aisatsu o moushiagemasu.' },
          { japanese: '日本への留学にあたって、色々な準備をしました。', english: 'Prior to my study abroad to Japan, I made various preparations.', romaji: 'Nihon e no ryuugaku ni atatte, iroiro na junbi o shimashita.' },
          { japanese: '開会にあたり、社長からご挨拶があります。', english: 'On the occasion of the opening, there will be a greeting from the president. (にあたり is slightly more formal than にあたって)', romaji: 'Kaikai ni atari, shachou kara go-aisatsu ga arimasu.' },
          { japanese: '家を建てるにあたって、多くの家を見学した。', english: 'Prior to building a house, we toured many houses.', romaji: 'Ie o tateru ni atatte, ooku no ie o kengaku shita.' },
          { japanese: '結婚にあたって、両親からお金をもらった。', english: 'On the occasion of marriage, I received money from my parents.', romaji: 'Kekkon ni atatte, ryoushin kara okane o moratta.' },
          { japanese: '新しい仕事を探すにあたって、資格を取るつもりだ。', english: 'Prior to searching for a new job, I intend to get a qualification.', romaji: 'Atarashii shigoto o sagasu ni atatte, shikaku o toru tsumori da.' },
          { japanese: '旅行に出発するにあたって、戸締りを確認した。', english: 'Prior to departing on the trip, I checked the locks.', romaji: 'Ryokou ni shuppatsu suru ni atatte, tojimari o kakunin shita.' },
          { japanese: '大会に参加するにあたっての注意事項を説明します。', english: 'I will explain the cautionary points on the occasion of participating in the tournament.', romaji: 'Taikai ni sanka suru ni atatte no chuuijikou o setsumei shimasu.' },
          { japanese: '卒業にあたって、先生方に感謝の気持ちを伝えたい。', english: 'On the occasion of graduation, I want to convey my feelings of gratitude to the teachers.', romaji: 'Sotsugyou ni atatte, senseigata ni kansha no kimochi o tsutaetai.' },
          { japanese: '新製品の開発にあたって、徹底的な調査を行った。', english: 'Prior to the development of the new product, we conducted thorough research.', romaji: 'Shinseihin no kaihatsu ni atatte, tetteiteki na chousa o okonatta.' }
        ],
        conversation: {
          context: 'At a wedding ceremony.',
          dialogue: [
            { speaker: '司会者', japanese: '新郎新婦の入場にあたり、皆様、大きな拍手でお迎えください。', english: 'On the occasion of the entry of the bride and groom, everyone, please welcome them with a big round of applause.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "On the occasion of graduation (卒業 - sotsugyou)..."',
            'Translate: "Prior to starting (始める - hajimeru)..."',
            'Is it okay to say "入院するにあたって" (On the occasion of being hospitalized)?'
          ],
          answers: [
            '卒業にあたって (Sotsugyou ni atatte)',
            '始めるにあたって (Hajimeru ni atatte)',
            'No, because hospitalization is a negative event. にあたって is only for positive/hopeful occasions.'
          ]
        },
        jlptQuestions: [
          {
            question: '新入社員（しんにゅうしゃいん）を迎（むか）える___、準備（じゅんび）をしておこう。',
            options: ['にあたって', 'にしたがって', 'にかかわらず', 'にかけて'],
            correctIndex: 0,
            explanation: 'Welcoming new employees is a special, positive occasion. "Prior to / On the occasion of welcoming..." is 迎えるにあたって.'
          },
          {
            question: '留学（りゅうがく）する___あたって、日本（にほん）の文化（ぶんか）について勉強（べんきょう）した。',
            options: ['に', 'で', 'を', 'と'],
            correctIndex: 0,
            explanation: 'The fixed grammar pattern is にあたって (ni atatte).'
          }
        ],
        realLifeUsage: 'The standard opening line for almost every formal Japanese speech.'
      },
      {
        id: 'n2-l3-t4',
        pattern: '〜に際して',
        pronunciation: 'ni saishite',
        meaning: 'On the occasion of / At the time of',
        isImplemented: true,
        whenAndWhy: 'Extremely similar to にあたって, but with one key difference: に際して can be used for BOTH positive AND negative/neutral occasions (like an apology, an accident, or a standard procedure).',
        explanation: 'Attach に際して (ni saishite) to a noun or the dictionary form of a verb. It is a highly formal way of saying "When X happens..." or "On the occasion of X".',
        formation: {
          formula: 'Noun / Verb (Dictionary) + に際して',
          rules: [
            'Noun + に際して (e.g. 契約に際して - at the time of the contract)',
            'Verb + に際して (e.g. ご利用に際して - upon utilizing)',
            'Noun Modifier: に際しての + Noun (e.g. 緊急時に際しての対応 - response at the time of an emergency)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Neutral Procedure', '利用に際して', 'Upon using (the service)'],
            ['Negative Occasion', '謝罪に際して', 'On the occasion of apologizing'],
            ['Positive Occasion', '結婚に際して', 'On the occasion of marriage (also okay)']
          ]
        },
        notes: 'In written warnings, instructions, or formal apologies, you will almost exclusively see に際して (or に際し), not にあたって.',
        mistakes: 'Like にあたって, do not use this for everyday casual activities. (✕ トイレに行くに際して - Too formal).',
        comparison: {
          similarPattern: '〜にあたって (On the occasion of - N2 L3)',
          difference: 'にあたって is strictly for POSITIVE, forward-looking events (graduation, new business). に際して is neutral and often used for official procedures, warnings, or negative events.'
        },
        memoryTips: 'Sai (際) means "edge/verge/time". International (Kokusai) -> Edges of countries. At the edge/time of the event.',
        examples: [
          { japanese: '図書館の利用に際して、いくつか注意点があります。', english: 'Upon using the library, there are several points of caution.', romaji: 'Toshokan no riyou ni saishite, ikutsuka chuuiten ga arimasu.' },
          { japanese: '契約に際して、印鑑が必要です。', english: 'At the time of the contract, a personal seal is required.', romaji: 'Keiyaku ni saishite, inkan ga hitsuyou desu.' },
          { japanese: '帰国するに際して、お世話になった人たちに挨拶をした。', english: 'On the occasion of returning to my home country, I greeted the people who took care of me.', romaji: 'Kikoku suru ni saishite, osewa ni natta hitotachi ni aisatsu o shita.' },
          { japanese: '工事に際して、近所の住民に説明を行った。', english: 'Prior to the construction, we gave an explanation to the neighborhood residents.', romaji: 'Kouji ni saishite, kinjo no juumin ni setsumei o okonatta.' },
          { japanese: '車を購入するに際して、保険に加入した。', english: 'Upon purchasing a car, I enrolled in insurance.', romaji: 'Kuruma o kounyuu suru ni saishite, hoken ni kanyuushita.' },
          { japanese: '退院に際し、先生からアドバイスをもらった。（に際し is slightly more formal）', english: 'On the occasion of leaving the hospital, I received advice from the doctor.', romaji: 'Taiin ni saishi, sensei kara adobaisu o moratta.' },
          { japanese: 'お詫び（わび）に際して、社長が深く頭を下げた。', english: 'On the occasion of the apology, the president bowed his head deeply. (Negative event = に際して is OK)', romaji: 'Owabi ni saishite, shachou ga fukaku atama o sageta.' },
          { japanese: '面接に際しての注意事項をよく読んでください。', english: 'Please read the cautionary notes regarding the interview carefully.', romaji: 'Mensetsu ni saishite no chuuijikou o yoku yonde kudasai.' },
          { japanese: 'パソコンの修理に際して、データが消えることがあります。', english: 'At the time of computer repair, data may be erased.', romaji: 'Pasokon no shuuri ni saishite, deeta ga kieru koto ga arimasu.' },
          { japanese: '受験に際して、写真付きの身分証明書が必要です。', english: 'At the time of taking the exam, photo identification is required.', romaji: 'Juken ni saishite, shashintsuki no mibun shoumeisho ga hitsuyou desu.' }
        ],
        conversation: {
          context: 'At a bank.',
          dialogue: [
            { speaker: '銀行員', japanese: '口座の開設（かいせつ）に際して、身分証明書をお願いします。', english: 'Upon opening an account, your identification please.' },
            { speaker: '客', japanese: 'はい、運転免許証でいいですか。', english: 'Yes, is a driver\'s license okay?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "At the time of the contract (契約 - keiyaku)..."',
            'Translate: "Upon using (利用する - riyou suru)..."',
            'If you are making a public apology, should you use にあたって or に際して?'
          ],
          answers: [
            '契約に際して (Keiyaku ni saishite)',
            '利用するに際して (Riyou suru ni saishite)',
            'に際して (because apologies are negative/serious events, which にあたって cannot handle).'
          ]
        },
        jlptQuestions: [
          {
            question: '施設（しせつ）をご利用（りよう）になる___、必（かなら）ず受付（うけつけ）をしてください。',
            options: ['にあたって', 'に際して', 'Both 1 and 2 are grammatically okay, but 2 is the standard business phrase', 'にかかわらず'],
            correctIndex: 1,
            explanation: 'While にあたって isn\'t mathematically wrong for "starting" use, ご利用に際して is the universally recognized fixed phrase for "Upon utilizing a facility/service".'
          },
          {
            question: '会社（かいしゃ）の倒産（とうさん）___、社長（しゃちょう）が記者会見（きしゃかいけん）を開（ひら）いた。',
            options: ['にあたって', 'に際して', 'にかけて', 'において'],
            correctIndex: 1,
            explanation: 'Bankruptcy (倒産) is a highly negative event. Therefore, に際して MUST be used instead of にあたって.'
          }
        ],
        realLifeUsage: 'Found at the top of every terms-of-service agreement in Japan: 「当サービスをご利用になるに際して…」.'
      },
      {
        id: 'n2-l3-t5',
        pattern: '〜に先立って',
        pronunciation: 'ni sakidatte',
        meaning: 'Prior to / Before (Formal)',
        isImplemented: true,
        whenAndWhy: 'Used to indicate that a preparatory or introductory action takes place BEFORE a main, formal event.',
        explanation: 'Attach に先立って (ni sakidatte) or に先立ち (ni sakidachi) to a noun representing an event. It literally means "standing before (the event)". The action that follows is usually a preparation, an announcement, or an opening act.',
        formation: {
          formula: 'Noun + に先立って',
          rules: [
            'Noun + に先立って (e.g. 試合に先立って - prior to the match)',
            'Noun Modifier: に先立つ + Noun (e.g. 会議に先立つ打ち合わせ - a preliminary meeting prior to the conference)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Mid-sentence', '公開に先立って', 'Prior to the public release'],
            ['Noun Modifier', '出発に先立つ準備', 'Preparations prior to departure']
          ]
        },
        notes: 'Unlike にあたって/に際して (which can mean "exactly at the time of"), に先立って strictly means chronological BEFORE. A must happen before B.',
        mistakes: 'Do not use this for daily routines. (✕ 寝るのに先立って、歯を磨く - Sounds like you are holding a ceremony for sleeping). Use 〜前に.',
        comparison: {
          similarPattern: '〜前に (Before - N5)',
          difference: '前に is casual and standard. に先立って is highly formal, used in news, business, and official event schedules to describe preparatory actions.'
        },
        memoryTips: 'Saki (先) = before/ahead. Datsu (立つ) = to stand. "Standing ahead of the event."' ,
        examples: [
          { japanese: '映画の公開に先立って、試写会が行われた。', english: 'Prior to the movie\'s public release, a preview screening was held.', romaji: 'Eiga no koukai ni sakidatte, shishakai ga okonawareta.' },
          { japanese: '会議に先立って、資料をお配りします。', english: 'Prior to the meeting, I will distribute the materials.', romaji: 'Kaigi ni sakidatte, shiryou o okubari shimasu.' },
          { japanese: '試合に先立ち、両チームのキャプテンが握手をした。', english: 'Prior to the match, the captains of both teams shook hands.', romaji: 'Shiai ni sakidachi, ryou chiimu no kyaputen ga akushu o shita.' },
          { japanese: '新製品の発売に先立って、キャンペーンが始まった。', english: 'Prior to the release of the new product, a campaign started.', romaji: 'Shinseihin no hatsubai ni sakidatte, kyanpeen ga hajimatta.' },
          { japanese: '開店に先立って、店内の清掃を行った。', english: 'Prior to opening the store, we cleaned the inside of the shop.', romaji: 'Kaiten ni sakidatte, tennai no seisou o okonatta.' },
          { japanese: '交渉に先立つ準備が最も重要だ。', english: 'The preparation prior to the negotiation is the most important.', romaji: 'Koushou ni sakidatsu junbi ga mottomo juuyou da.' },
          { japanese: '大統領の訪問に先立って、厳しい警備が敷かれた。', english: 'Prior to the president\'s visit, strict security was laid out.', romaji: 'Daitouryou no houmon ni sakidatte, kibishii keibi ga shikareta.' },
          { japanese: '工事の開始に先立って、安全確認が行われた。', english: 'Prior to the start of construction, safety checks were performed.', romaji: 'Kouji no kaishi ni sakidatte, anzen kakunin ga okonawareta.' },
          { japanese: '出発に先立って、パスポートの確認をお願いします。', english: 'Prior to departure, please check your passports.', romaji: 'Shuppatsu ni sakidatte, pasupooto no kakunin o onegaishimasu.' },
          { japanese: '本番に先立ち、リハーサルを行います。', english: 'Prior to the actual performance, we will hold a rehearsal.', romaji: 'Honban ni sakidachi, rihaasaru o okonaimasu.' }
        ],
        conversation: {
          context: 'Event MC announcement.',
          dialogue: [
            { speaker: '司会者', japanese: 'それでは、コンサートの開演に先立ちまして、注意事項を申し上げます。', english: 'Well then, prior to the start of the concert, I will state the cautionary points.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Prior to the match (試合 - shiai)..."',
            'Translate: "Prior to the public release (公開 - koukai)..."',
            'Translate: "A meeting (打ち合わせ) prior to the conference (会議 - kaigi) (Use noun modifier form)."'
          ],
          answers: [
            '試合に先立って (Shiai ni sakidatte)',
            '公開に先立って (Koukai ni sakidatte)',
            '会議に先立つ打ち合わせ (Kaigi ni sakidatsu uchiawase)'
          ]
        },
        jlptQuestions: [
          {
            question: '新（あたら）しいビルを建設（けんせつ）する___先立（さきだ）って、土地（とち）の調査（ちょうさ）が行（おこな）われた。',
            options: ['に', 'で', 'を', 'と'],
            correctIndex: 0,
            explanation: 'The grammar pattern is fixed as 〜に先立って.'
          },
          {
            question: '本番（ほんばん）に___、マイクのテストを行います。',
            options: ['あたって', '際して', '先立って', 'All of the above can technically work, but 3 emphasizes doing something BEFORE the main event starts.'],
            correctIndex: 2,
            explanation: 'While に際して and にあたって can sometimes overlap, に先立って is the best and most specific choice when doing a preparatory action (mic test) strictly *before* the main event (the actual performance/honban).'
          }
        ],
        realLifeUsage: 'Often heard at theaters or concerts: 「開演に先立ちまして、携帯電話の電源をお切りください」 (Prior to the performance starting, please turn off your cell phones).'
      }
    ]
  },
  {
    lessonNum: 4,
    title: 'Contextual Restrictions',
    description: 'Advanced restrictions and viewpoints.',
    topics: [
      {
        id: 'n2-l4-t1',
        pattern: '〜のみならず',
        pronunciation: 'nominarazu',
        meaning: 'Not only... but also',
        isImplemented: true,
        whenAndWhy: 'Used in formal contexts to say "Not just X, but additionally Y". It emphasizes that the scope is wider than just one thing.',
        explanation: 'Attach のみならず (nominarazu) to a noun or the plain form of a sentence. It is the formal/written version of だけでなく (not only). The second half of the sentence usually contains words like も (also), まで (even), or 広く (widely).',
        formation: {
          formula: 'Noun / Plain Form + のみならず',
          rules: [
            'Noun + のみならず (e.g. 日本のみならず - not only Japan)',
            'Verbs/i-adjectives: Plain form + のみならず (e.g. 美味しいのみならず - not only delicious)',
            'na-adjectives: Add である + のみならず (e.g. 便利であるのみならず - not only convenient)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Phrase', 'Translation'],
          rows: [
            ['Noun', '国内のみならず', 'Not only domestically'],
            ['Verb', '歌うのみならず', 'Not only singing'],
            ['na-adjective', '親切であるのみならず', 'Not only kind']
          ]
        },
        notes: 'In highly formal writing, you might also see 〜ばかりか (bakari ka), which has a very similar meaning but sometimes carries a nuance of "Not just X, but something even more surprising!" のみならず is purely additive.',
        mistakes: 'Do not use this with close friends in casual conversation (✕ 俺のみならずお前も - Too stiff). Use だけでなく instead.',
        comparison: {
          similarPattern: '〜だけでなく (Not only - N4)',
          difference: '〜だけでなく is for daily life (Not only apples, I like bananas too). 〜のみならず is for business, essays, and news (The president\'s scandal shocked not only the company, but the whole nation).'
        },
        memoryTips: 'Nomi = only. Narazu = is not (classical negative). "Is not only..."',
        examples: [
          { japanese: 'このアニメは日本国内のみならず、海外でも人気がある。', english: 'This anime is popular not only domestically in Japan, but also overseas.', romaji: 'Kono anime wa Nihon kokunai nominarazu, kaigai de mo ninki ga aru.' },
          { japanese: '彼は英語のみならず、フランス語も話せる。', english: 'He can speak not only English, but also French.', romaji: 'Kare wa Eigo nominarazu, Furansugo mo hanaseru.' },
          { japanese: 'この問題は、若者のみならず、高齢者にも影響を与えている。', english: 'This problem is affecting not only young people, but also the elderly.', romaji: 'Kono mondai wa, wakamono nominarazu, koureisha ni mo eikyou o ataete iru.' },
          { japanese: '彼女は美しいのみならず、性格も非常に良い。', english: 'Not only is she beautiful, but her personality is also extremely good.', romaji: 'Kanojo wa utsukushii nominarazu, seikaku mo hijou ni yoi.' },
          { japanese: 'この機械は便利であるのみならず、環境にも優しい。', english: 'This machine is not only convenient, but also environmentally friendly.', romaji: 'Kono kikai wa benri de aru nominarazu, kankyou ni mo yasashii.' },
          { japanese: 'あの社長は社員のみならず、その家族のことまで考えている。', english: 'That president thinks not only about the employees, but even about their families.', romaji: 'Ano shachou wa shain nominarazu, sono kazoku no koto made kangaete iru.' },
          { japanese: '地震の被害は、建物のみならず、人々の心にも及んだ。', english: 'The earthquake\'s damage extended not only to buildings, but also to people\'s hearts.', romaji: 'Jishin no higai wa, tatemono nominarazu, hitobito no kokoro ni mo oyonda.' },
          { japanese: '彼は俳優としてのみならず、映画監督としても活躍している。', english: 'He is active not only as an actor, but also as a movie director.', romaji: 'Kare wa haiyuu to shite nominarazu, eiga kantoku to shite mo katsuyaku shite iru.' },
          { japanese: 'このレストランは味が良いのみならず、サービスも一流だ。', english: 'This restaurant not only has good taste, but its service is also first-class.', romaji: 'Kono resutoran wa aji ga yoi nominarazu, saabisu mo ichiryuu da.' },
          { japanese: '勉強のみならず、スポーツにも力を入れている学校です。', english: 'It is a school that puts effort not only into studying, but also into sports.', romaji: 'Benkyou nominarazu, supootsu ni mo chikara o irete iru gakkou desu.' }
        ],
        conversation: {
          context: 'Discussing a successful product.',
          dialogue: [
            { speaker: '部長', japanese: '新製品の売れ行きはどうですか。', english: 'How are the sales of the new product?' },
            { speaker: '社員', japanese: 'はい、若者のみならず、ご年配の方にもよく売れています。', english: 'Yes, it is selling well not only to young people, but also to elderly people.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Not only Japan (日本), but also the world (世界)..."',
            'Translate: "Not only English (英語), but also Japanese (日本語)..."',
            'If the adjective is na-adj (便利 - convenient), what must you add before のみならず?'
          ],
          answers: [
            '日本のみならず、世界も… (Nihon nominarazu, sekai mo...)',
            '英語のみならず、日本語も… (Eigo nominarazu, Nihongo mo...)',
            'である (benri de aru nominarazu)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この小説（しょうせつ）は、子供（こども）___大人（おとな）も楽（たの）しめる。',
            options: ['にもかかわらず', 'のみならず', 'にあたって', 'にかけて'],
            correctIndex: 1,
            explanation: 'The sentence structure is [A] (not only) [B] (also). 子供のみならず (Not only children, but adults too).'
          },
          {
            question: '地球温暖化（ちきゅうおんだんか）は、人間（にんげん）___動物（どうぶつ）の生態系（せいたいけい）にも悪影響（あくえいきょう）を及（およ）ぼす。',
            options: ['のみならず', 'の代わりに', 'の反面', 'のせいで'],
            correctIndex: 0,
            explanation: 'It affects not only humans, but also (にも) animals. のみならず connects the two groups perfectly.'
          }
        ],
        realLifeUsage: 'Often found in PR materials or corporate websites: 「国内のみならず、グローバルに展開しています」 (Expanding not only domestically, but globally).'
      },
      {
        id: 'n2-l4-t2',
        pattern: '〜から〜にかけて',
        pronunciation: 'kara ... ni kakete',
        meaning: 'From ... to / Through (time or space)',
        isImplemented: true,
        whenAndWhy: 'Used to indicate a continuous, often vague range of time or space. "From X through to Y."',
        explanation: 'Attach から after the starting point and にかけて after the ending point. Unlike から〜まで (From X to Y), which has strict, exact boundaries, から〜にかけて implies a continuous spread or a rough span where the exact start/end moments are not clearly defined.',
        formation: {
          formula: 'Noun (Start) + から + Noun (End) + にかけて',
          rules: [
            'Time: 月曜日から水曜日にかけて (From Monday through Wednesday)',
            'Space: 東京から大阪にかけて (From Tokyo spreading through to Osaka)'
          ]
        },
        conjugations: {
          headers: ['Range Type', 'Structure', 'Translation'],
          rows: [
            ['Time', '春から夏にかけて', 'From spring through summer'],
            ['Space', '顔から首にかけて', 'From the face spreading down to the neck']
          ]
        },
        notes: 'Often used with weather (e.g. rain spreading across a region) or physical symptoms (e.g. a rash spreading from the arm to the shoulder).',
        mistakes: 'Do not use this for strict schedules or exact times. (✕ ９時から５時にかけて働きます - You work exactly 9 to 5, so you must use から〜まで).',
        comparison: {
          similarPattern: '〜から〜まで (From... to...)',
          difference: 'から〜まで has exact boundaries (e.g. School is from Monday to Friday). から〜にかけて is fuzzy and implies a spreading action (e.g. Rain fell continuously from Monday through Wednesday).'
        },
        memoryTips: 'Kakete (掛けて) means "hanging/stretching over". The time or space stretches over from point A to point B.',
        examples: [
          { japanese: '明日は、関東から東北にかけて大雨になるでしょう。', english: 'Tomorrow, there will probably be heavy rain spreading from the Kanto through to the Tohoku region.', romaji: 'Ashita wa, Kantou kara Touhoku ni kakete ooame ni naru deshou.' },
          { japanese: '２月から３月にかけて、花粉症がひどくなります。', english: 'From February through March, hay fever gets severe.', romaji: 'Nigatsu kara sangatsu ni kakete, kafunshou ga hidoku narimasu.' },
          { japanese: '昨夜から今朝にかけて、ずっと雪が降っていた。', english: 'It was snowing continuously from last night through this morning.', romaji: 'Sakuya kara kesa ni kakete, zutto yuki ga futte ita.' },
          { japanese: '背中から腰にかけて、痛みが走った。', english: 'A pain ran from my back down through my waist.', romaji: 'Senaka kara koshi ni kakete, itami ga hashitta.' },
          { japanese: '１９世紀から２０世紀にかけて、多くの発明があった。', english: 'From the 19th through the 20th century, there were many inventions.', romaji: 'Juukyuuseiki kara nijusseiki ni kakete, ooku no hatsumei ga atta.' },
          { japanese: '春から夏にかけて、色々な花が咲きます。', english: 'From spring through summer, various flowers bloom.', romaji: 'Haru kara natsu ni kakete, iroiro na hana ga sakimasu.' },
          { japanese: '東京から千葉にかけて、渋滞が続いている。', english: 'Traffic jams are continuing from Tokyo stretching through to Chiba.', romaji: 'Toukyou kara Chiba ni kakete, juutai ga tsuzuite iru.' },
          { japanese: '腕から肩にかけて、赤い発疹（ほっしん）が出た。', english: 'A red rash broke out spreading from my arm to my shoulder.', romaji: 'Ude kara kata ni kakete, akai hosshin ga deta.' },
          { japanese: '昨日の夜から今日の昼にかけて、ずっと寝ていた。', english: 'I slept continuously from yesterday night through today\'s afternoon.', romaji: 'Kinou no yoru kara kyou no hiru ni kakete, zutto nete ita.' },
          { japanese: '九州から四国にかけて、台風が通過した。', english: 'The typhoon passed through from Kyushu across to Shikoku.', romaji: 'Kyuushuu kara Shikoku ni kakete, taifuu ga tsuuka shita.' }
        ],
        conversation: {
          context: 'At a clinic.',
          dialogue: [
            { speaker: '医者', japanese: 'どうされましたか。', english: 'What is the matter?' },
            { speaker: '患者', japanese: '昨日から、首から肩にかけてすごく痛いんです。', english: 'Since yesterday, it hurts terribly from my neck spreading down through my shoulder.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "From yesterday (昨日) through today (今日)..."',
            'Translate: "From Tokyo (東京) through Osaka (大阪)..."',
            'If your store opens exactly at 10 AM and closes exactly at 8 PM, should you use にかけて?'
          ],
          answers: [
            '昨日から今日にかけて (Kinou kara kyou ni kakete)',
            '東京から大阪にかけて (Toukyou kara Oosaka ni kakete)',
            'No, you must use まで because it is an exact, strict schedule.'
          ]
        },
        jlptQuestions: [
          {
            question: '台風（たいふう）の影響（えいきょう）で、四国（しこく）から近畿地方（きんきちほう）に___大雨（おおあめ）が降（ふ）るでしょう。',
            options: ['とって', '関して', 'かけて', '対して'],
            correctIndex: 2,
            explanation: 'The sentence describes weather spreading over a region. [Start] から [End] にかけて is the standard grammar for this.'
          },
          {
            question: '夜中（よなか）___朝（あさ）にかけて、不思議（ふしぎ）な夢（ゆめ）を見（み）た。',
            options: ['まで', 'から', 'より', 'では'],
            correctIndex: 1,
            explanation: 'The pattern is always から〜にかけて. Therefore, から is the missing word.'
          }
        ],
        realLifeUsage: 'The single most common grammar point you will hear on Japanese daily weather forecasts (天気予報).'
      },
      {
        id: 'n2-l4-t3',
        pattern: '〜にかけては',
        pronunciation: 'ni kakete wa',
        meaning: 'When it comes to (a skill/topic)',
        isImplemented: true,
        whenAndWhy: 'Used to boast about or praise someone\'s exceptional skill or superiority in a specific area. "When it comes to X, no one can beat him/me."',
        explanation: 'Attach にかけては to a noun representing a skill, field, or subject. The second half of the sentence always contains a positive evaluation (e.g. is the best, never loses, is number one).',
        formation: {
          formula: 'Noun + にかけては',
          rules: [
            'Noun + にかけては (e.g. 歌にかけては - when it comes to singing)',
            'Noun + のことにかけては (Often used when referring to a broad topic: パソコンのことにかけては - when it comes to things about computers)'
          ]
        },
        conjugations: {
          headers: ['Topic', 'Structure', 'Translation'],
          rows: [
            ['Cooking', '料理にかけては', 'When it comes to cooking...'],
            ['Mathematics', '数学にかけては', 'When it comes to math...'],
            ['Speed', '足の速さにかけては', 'When it comes to foot speed...']
          ]
        },
        notes: 'Do not confuse this with から〜にかけて (from...to...). にかけては is used purely for highlighting a specific skill domain.',
        mistakes: 'Do not follow this with a negative evaluation. (✕ 数学にかけては、私は一番バカだ - Wrong. Use について or に関して for general topics. にかけては must be followed by praise or superiority).',
        comparison: {
          similarPattern: '〜に関しては (Regarding - N3 L2)',
          difference: '数学に関しては何も知らない (Regarding math, I know nothing - Neutral topic marker). 数学にかけては誰にも負けない (When it comes to math, I lose to no one - Marking a domain of superiority).'
        },
        memoryTips: 'Think of "hanging (kakete) your pride" on that one specific skill.',
        examples: [
          { japanese: '料理にかけては、母にかなう人はいない。', english: 'When it comes to cooking, there is no one who can match my mother.', romaji: 'Ryouri ni kakete wa, haha ni kanau hito wa inai.' },
          { japanese: 'パソコンのことにかけては、山田さんが一番詳しい。', english: 'When it comes to things about computers, Yamada is the most knowledgeable.', romaji: 'Pasokon no koto ni kakete wa, Yamada-san ga ichiban kuwashii.' },
          { japanese: '足の速さにかけては、クラスで誰にも負けない。', english: 'When it comes to foot speed, I lose to no one in the class.', romaji: 'Ashi no hayasa ni kakete wa, kurasu de dare ni mo makenai.' },
          { japanese: '歌にかけては、彼女の右に出る者はいない。（Idiom: No one is better than her）', english: 'When it comes to singing, no one surpasses her.', romaji: 'Uta ni kakete wa, kanojo no migi ni deru mono wa inai.' },
          { japanese: 'ゲームにかけては、私はプロ級だ。', english: 'When it comes to gaming, I am pro-level.', romaji: 'Geemu ni kakete wa, watashi wa purokyuu da.' },
          { japanese: 'デザインの美しさにかけては、この車が一番だ。', english: 'When it comes to the beauty of design, this car is number one.', romaji: 'Dezain no utsukushisa ni kakete wa, kono kuruma ga ichiban da.' },
          { japanese: '営業の交渉にかけては、彼は天才的だ。', english: 'When it comes to sales negotiations, he is a genius.', romaji: 'Eigyou no koushou ni kakete wa, kare wa tensaiteki da.' },
          { japanese: '暗記にかけては、誰にも負ける気がしない。', english: 'When it comes to memorization, I don\'t feel like I will lose to anyone.', romaji: 'Anki ni kakete wa, dare ni mo makeru ki ga shinai.' },
          { japanese: 'お菓子の知識にかけては、彼女は専門家並みだ。', english: 'When it comes to knowledge of sweets, she is on par with an expert.', romaji: 'Okashi no chishiki ni kakete wa, kanojo wa senmonkanami da.' },
          { japanese: '接客の丁寧さにかけては、このホテルが最高です。', english: 'When it comes to the politeness of customer service, this hotel is the best.', romaji: 'Sekkyaku no teineisa ni kakete wa, kono hoteru ga saikou desu.' }
        ],
        conversation: {
          context: 'Praising a colleague.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'エクセルで分からないことがあるんだけど…。', english: 'There is something I don\'t understand in Excel...' },
            { speaker: 'マリー', japanese: 'それなら田中さんに聞くといいよ。パソコンにかけては、彼が一番だから。', english: 'In that case, you should ask Tanaka. When it comes to computers, he is the best.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "When it comes to Japanese (日本語)..."',
            'Translate: "When it comes to cooking (料理), I lose to no one (誰にも負けない)."',
            'Is it correct to say: "歴史にかけては、全然わからない" (When it comes to history, I know nothing)?'
          ],
          answers: [
            '日本語にかけては (Nihongo ni kakete wa)',
            '料理にかけては、誰にも負けない。 (Ryouri ni kakete wa, dare ni mo makenai.)',
            'No. にかけては must be followed by a statement of high ability or superiority.'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの選手（せんしゅ）は、走（はし）る速（はや）さに___、誰（だれ）にも負（ま）けない。',
            options: ['関して', '対して', 'かけては', 'とっては'],
            correctIndex: 2,
            explanation: 'The sentence structure "Regarding skill X, [they] lose to no one" strictly requires 〜にかけては.'
          },
          {
            question: 'このレストランは、味（あじ）にかけては___。',
            options: ['とても不味い（まずい）', '全然ダメだ', '町で一番美味しい', 'あまり好きじゃない'],
            correctIndex: 2,
            explanation: '〜にかけては must end with a statement of superiority or highest praise. "The most delicious in town" is the only correct continuation.'
          }
        ],
        realLifeUsage: 'A great way to praise someone: 「〇〇のことにかけては、あなたが一番ですね」 (When it comes to X, you are the best).'
      },
      {
        id: 'n2-l4-t4',
        pattern: '〜にすぎない',
        pronunciation: 'ni suginai',
        meaning: 'Nothing more than / Merely / Only',
        isImplemented: true,
        whenAndWhy: 'Used to downplay the significance, amount, or status of something. "It is ONLY this, nothing greater or more important."',
        explanation: 'Attach にすぎない (ni suginai) to a noun, or to the plain form of a verb. It comes from 過ぎない (does not exceed). "It does not exceed X" -> "It is nothing more than X".',
        formation: {
          formula: 'Noun / Plain Form + にすぎない',
          rules: [
            'Nouns: Noun + にすぎない (e.g. ただの風邪にすぎない - nothing more than a mere cold)',
            'Verbs: Plain form + にすぎない (e.g. 言ったにすぎない - merely said it)',
            'Often paired with: ただ (merely), ほんの (just a) at the start of the sentence.'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Phrase', 'Translation'],
          rows: [
            ['Noun', '子供にすぎない', 'Is merely a child'],
            ['Verb', '手伝ったにすぎない', 'Merely helped out (nothing special)'],
            ['Noun (Quantity)', '数人にすぎない', 'Is nothing more than a few people']
          ]
        },
        notes: 'It is a humble or dismissive expression. When talking about yourself, it shows humility (I merely did my job). When talking about others, it can be dismissive (He is nothing more than an amateur).',
        mistakes: 'Do not use this to express a large or impressive amount. It is specifically for small, unimportant, or basic things.',
        comparison: {
          similarPattern: '〜だけだ (Just/Only - N5)',
          difference: '〜だけだ is neutral and conversational. 〜にすぎない is formal and explicitly downplays the value or importance of the subject.'
        },
        memoryTips: 'Sugi (過ぎ) means exceed. Nai (ない) means not. "Does not exceed this low bar." -> Merely.',
        examples: [
          { japanese: '私は当たり前のことを言ったにすぎない。', english: 'I merely said what was obvious (nothing more).', romaji: 'Watashi wa atarimae no koto o itta ni suginai.' },
          { japanese: 'これはほんの冗談にすぎないから、怒らないで。', english: 'Because this is nothing more than a mere joke, don\'t get angry.', romaji: 'Kore wa honno joudan ni suginai kara, okoranaide.' },
          { japanese: '彼はただのアルバイトにすぎないのに、偉そうだ。', english: 'Even though he is nothing more than a part-timer, he acts bossy.', romaji: 'Kare wa tada no arubaito ni suginai noni, erasou da.' },
          { japanese: '私の英語力は、日常会話ができるレベルにすぎない。', english: 'My English ability is nothing more than a level where I can do daily conversation.', romaji: 'Watashi no eigoryoku wa, nichijou kaiwa ga dekiru reberu ni suginai.' },
          { japanese: '病気と言っても、ただの風邪にすぎません。', english: 'Even though I call it an illness, it is nothing more than a mere cold.', romaji: 'Byouki to ittemo, tada no kaze ni sugimasen.' },
          { japanese: '失敗は、成功への第一歩にすぎない。', english: 'Failure is merely the first step toward success.', romaji: 'Shippai wa, seikou e no daiippo ni suginai.' },
          { japanese: '彼が言っていることは、言い訳にすぎない。', english: 'What he is saying is nothing more than an excuse.', romaji: 'Kare ga itte iru koto wa, iiwake ni suginai.' },
          { japanese: '私は少し手伝ったにすぎません。彼が全部やりました。', english: 'I merely helped a little. He did everything.', romaji: 'Watashi wa sukoshi tetsudatta ni sugimasen. Kare ga zenbu yarimashita.' },
          { japanese: 'この金額は、全体の１パーセントにすぎない。', english: 'This amount of money is nothing more than 1 percent of the whole.', romaji: 'Kono kingaku wa, zentai no ichi paasento ni suginai.' },
          { japanese: '彼女はただの友達にすぎません。', english: 'She is merely a friend (nothing romantic).', romaji: 'Kanojo wa tada no tomodachi ni sugimasen.' }
        ],
        conversation: {
          context: 'Receiving praise for a good deed.',
          dialogue: [
            { speaker: '上司', japanese: '君のおかげでプロジェクトが成功したよ。素晴らしい！', english: 'Thanks to you, the project succeeded. Wonderful!' },
            { speaker: 'ケン', japanese: 'いえ、私は言われたことをやったにすぎません。チームの力です。', english: 'No, I merely did what I was told (nothing more). It is the team\'s power.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Merely a student (学生)."',
            'Translate: "Merely a joke (冗談 - joudan)."',
            'Is it natural to say "He is merely a genius (天才にすぎない)"?'
          ],
          answers: [
            '学生にすぎない (Gakusei ni suginai)',
            '冗談にすぎない (Joudan ni suginai)',
            'No. にすぎない downplays value, so applying it to "genius" is contradictory.'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの政治家（せいじか）が言（い）っていることは、ただの言（い）い訳（わけ）___すぎない。',
            options: ['で', 'に', 'を', 'が'],
            correctIndex: 1,
            explanation: 'The fixed grammar pattern is にすぎない (does not exceed / nothing more than).'
          },
          {
            question: '私（わたし）の給料（きゅうりょう）は、生活（せいかつ）できる最低限（さいていげん）の金額（きんがく）___。',
            options: ['にちがいない', 'にすぎない', '一方だ', 'のみならず'],
            correctIndex: 1,
            explanation: 'The speaker is downplaying the amount of their salary ("nothing more than the bare minimum"). にすぎない is the correct choice.'
          }
        ],
        realLifeUsage: 'Used frequently in anime to deliver cold lines: 「お前はただの駒（こま）にすぎない」 (You are nothing more than a mere pawn).'
      },
      {
        id: 'n2-l4-t5',
        pattern: '〜げ',
        pronunciation: 'ge',
        meaning: 'Looks like / Showing signs of (Emotion)',
        isImplemented: true,
        whenAndWhy: 'Used to describe SOMEONE ELSE\'S apparent emotion based on their outward appearance or behavior. "They look sad, they seem lonely."',
        explanation: 'Attach げ to the stem of i-adjectives or na-adjectives (drop the い or な). It turns the adjective into a noun. It functions very similarly to 〜そう (looks like).',
        formation: {
          formula: 'Adjective Stem + げ',
          rules: [
            'i-adjectives: Drop い + げ (e.g. 寂しい -> 寂しげ - looking lonely)',
            'na-adjectives: Drop な + げ (e.g. 不安な -> 不安げ - looking uneasy)',
            'Exceptions: 良い -> 良さげ (yosage), ない -> なさげ (nasage)'
          ]
        },
        conjugations: {
          headers: ['Adjective', 'Stem', 'Ge Form', 'Translation'],
          rows: [
            ['悲しい (kanashii)', '悲し', '悲しげ（な）', 'Sorrowful-looking'],
            ['自信がある', '自信あり', '自信ありげ', 'Looking confident'],
            ['言いたい', '言いた', '言いたげ', 'Looking like they want to say something']
          ]
        },
        notes: 'Once げ is attached, the word acts like a na-adjective (e.g. 悲しげな顔 - a sad-looking face, 悲しげに笑う - smiling sadly).',
        mistakes: 'Do NOT use this for your OWN emotions. (✕ 私は悲しげです - Wrong. You know your own feelings, so just say 私は悲しい). It is strictly for observing others.',
        comparison: {
          similarPattern: '〜そう (Looks like - N4)',
          difference: '悲しそう (Looks sad) is standard and conversational. 悲しげ (Sorrowful-looking) is literary, slightly older-sounding, and often used in novels or poetry to describe facial expressions or voices.'
        },
        memoryTips: 'Ge (気) means "air" or "vibe". Giving off a sad vibe.',
        examples: [
          { japanese: '彼女は悲しげな顔で窓の外を見ていた。', english: 'She was looking out the window with a sad-looking face.', romaji: 'Kanojo wa kanashige na kao de mado no soto o mite ita.' },
          { japanese: '老人は寂しげに笑った。', english: 'The old man smiled in a lonely-looking way.', romaji: 'Roujin wa sabishige ni waratta.' },
          { japanese: '子供たちは楽しげに遊んでいる。', english: 'The children are playing in a fun-looking way.', romaji: 'Kodomotachi wa tanoshige ni asonde iru.' },
          { japanese: '彼は何か言いたげに私を見た。', english: 'He looked at me as if he wanted to say something.', romaji: 'Kare wa nanika iitage ni watashi o mita.' },
          { japanese: '面接の前、学生たちは不安げだった。', english: 'Before the interview, the students looked uneasy.', romaji: 'Mensetsu no mae, gakuseitachi wa fuange datta.' },
          { japanese: 'あの店はなんだか良さげだね。', english: 'That shop looks pretty good, huh. (Casual slang)', romaji: 'Ano mise wa nandaka yosage da ne.' },
          { japanese: '彼は自信ありげに答えた。', english: 'He answered in a confident-looking manner.', romaji: 'Kare wa jishin arige ni kotaeta.' },
          { japanese: '男は意味ありげな笑いを浮かべた。', english: 'The man showed a meaningful-looking smile.', romaji: 'Otoko wa imi arige na warai o ukabeta.' },
          { japanese: '彼女は不満げに口を尖らせた。', english: 'She pouted her lips in a dissatisfied-looking way.', romaji: 'Kanojo wa fumange ni kuchi o togaraseta.' },
          { japanese: '涼しげな風が吹いてきた。', english: 'A cool-feeling breeze blew in.', romaji: 'Suzushige na kaze ga fuite kita.' }
        ],
        conversation: {
          context: 'Observing a friend.',
          dialogue: [
            { speaker: 'マリー', japanese: 'ケン、さっきから何か言いたげな顔をしているね。', english: 'Ken, you\'ve had a look like you want to say something for a while now.' },
            { speaker: 'ケン', japanese: '実は、財布を落としてしまって…。', english: 'Actually, I dropped my wallet...' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "A sad-looking (悲しい - kanashii) face."',
            'Translate: "A lonely-looking (寂しい - sabishii) voice (声 - koe)."',
            'If you want to say "He smiled happily (嬉しい)", how do you change 嬉しい?'
          ],
          answers: [
            '悲しげな顔 (Kanashige na kao)',
            '寂しげな声 (Sabishige na koe)',
            '嬉しげに笑った (Ureshige ni waratta)'
          ]
        },
        jlptQuestions: [
          {
            question: '彼（かれ）は自慢（じまん）___な声（こえ）で、テストの点数（てんすう）を教（おし）えてくれた。',
            options: ['らし', 'げ', 'そう', 'がち'],
            correctIndex: 1,
            explanation: 'To modify the noun 声 (voice) to mean "a boastful-sounding voice", you use げ + な. 自慢げな声. (そう would require 自慢そうな声, which is also okay, but げ is specifically tested for this literary expression).'
          },
          {
            question: 'あの人（ひと）は何か言（い）い___に私（わたし）の方（ほう）を見（み）ていた。',
            options: ['たそう', 'たげ', 'たい', 'たがち'],
            correctIndex: 1,
            explanation: '言いたげ (looking like one wants to say something) is a very common fixed phrase in Japanese literature. It combines the desire form (たい -> た) with げ.'
          }
        ],
        realLifeUsage: 'Aside from novels, young people casually use 良さげ (looks good) and なさげ (doesn\'t look like it) in daily texting.'
      }
    ]
  },
  {
    lessonNum: 5,
    title: 'Pre-Advanced Conditionals',
    description: 'Conditional states and structural limits.',
    topics: [
      {
        id: 'n2-l5-t1',
        pattern: '〜ものなら',
        pronunciation: 'mono nara',
        meaning: 'If one can do (Impossible dream)',
        isImplemented: true,
        whenAndWhy: 'Used to express a strong desire to do something that is physically impossible or extremely difficult. "If only I could, I would..."',
        explanation: 'Attach ものなら (mono nara) to the POTENTIAL form of a verb. The speaker knows it is impossible (e.g. going back to the past, flying in the sky), but expresses their wish anyway.',
        formation: {
          formula: 'Verb (Potential form) + ものなら',
          rules: [
            'Potential Verb + ものなら (e.g. 行けるものなら - if I could go)',
            'Usually followed by verbs expressing desire: 〜たい (want to), 〜てみろ (try and do it)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Potential', 'Mono nara Form', 'Translation'],
          rows: [
            ['戻る (modoru)', '戻れる', '戻れるものなら', 'If I could go back...'],
            ['やり直す (yarinaosu)', 'やり直せる', 'やり直せるものなら', 'If I could do it over...'],
            ['休む (yasumu)', '休める', '休めるものなら', 'If I could rest...']
          ]
        },
        notes: 'In casual conversation, it often becomes 〜もんなら (mon nara). There is another usage of [Volitional] + ものなら (e.g. 休もうものなら), which means "If I DARE do this, a terrible thing will happen".',
        mistakes: 'Do not use this for realistic, highly possible conditions. (✕ 明日晴れるものなら - If it is sunny tomorrow. ◯ 明日晴れたら). It must be for near-impossible wishes.',
        comparison: {
          similarPattern: '〜ば / 〜たら (If)',
          difference: '明日行けたら行く (If I can go tomorrow, I will go - 50/50 chance). 明日行けるものなら行きたい (If I could go tomorrow I would, but I know it is 100% impossible because I have work).'
        },
        memoryTips: 'Mono = thing. Nara = if. "If such a thing were possible..."',
        examples: [
          { japanese: '子供の頃に戻れるものなら、戻りたい。', english: 'If I could go back to my childhood, I would want to go back.', romaji: 'Kodomo no koro ni modoreru mono nara, modoritai.' },
          { japanese: '人生をやり直せるものなら、やり直したい。', english: 'If I could redo my life, I would want to redo it.', romaji: 'Jinsei o yarinaoseru mono nara, yarinaoshitai.' },
          { japanese: '一人でできるものなら、やってみろ。', english: 'If you can do it by yourself, try and do it! (Provocation)', romaji: 'Hitori de dekiru mono nara, yatte miro.' },
          { japanese: '休めるものなら休みたいが、仕事が山のようにある。', english: 'If I could rest I would want to, but I have a mountain of work.', romaji: 'Yasumeru mono nara yasumitai ga, shigoto ga yama no you ni aru.' },
          { japanese: '鳥のように空を飛べるものなら、飛んでみたい。', english: 'If I could fly in the sky like a bird, I would want to try flying.', romaji: 'Tori no you ni sora o toberu mono nara, tonde mitai.' },
          { japanese: '忘れることができるものなら、すぐに忘れたい。', english: 'If I could forget, I would want to forget immediately.', romaji: 'Wasureru koto ga dekiru mono nara, sugu ni wasuretai.' },
          { japanese: '彼に会えるものなら、今すぐ会いに行きたい。', english: 'If I could meet him, I would want to go meet him right now.', romaji: 'Kare ni aeru mono nara, ima sugu ai ni ikitai.' },
          { japanese: '買えるものなら買いたいが、一億円は無理だ。', english: 'If I could buy it I would want to, but one hundred million yen is impossible.', romaji: 'Kaeru mono nara kaitai ga, ichiokuen wa muri da.' },
          { japanese: '代わってあげられるものなら、代わってあげたい。', english: 'If I could take your place, I would want to do it for you.', romaji: 'Kawatte agerareru mono nara, kawatte agetai.' },
          { japanese: '文句があるなら、言えるもんなら言ってみろ。', english: 'If you have complaints, if you can say them, try and say them!', romaji: 'Monku ga aru nara, ieru mon nara itte miro.' }
        ],
        conversation: {
          context: 'Talking about regrets.',
          dialogue: [
            { speaker: 'ジョン', japanese: '日本語の勉強、もっと早く始めればよかった。', english: 'I wish I had started studying Japanese earlier.' },
            { speaker: 'さくら', japanese: '私も。高校生に戻れるものなら戻りたいよ。', english: 'Me too. If I could go back to being a high school student, I would want to go back.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "If I could fly (飛べる - toberu)..."',
            'Translate: "If I could redo it (やり直せる - yarinaoseru)..."',
            'What form of the verb is required before ものなら?'
          ],
          answers: [
            '飛べるものなら (Toberu mono nara)',
            'やり直せるものなら (Yarinaoseru mono nara)',
            'The potential form (e.g. 飛べる, 行ける).'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの日に___ものなら、戻（もど）って彼（かれ）に謝（あやま）りたい。',
            options: ['戻る', '戻って', '戻れる', '戻ろう'],
            correctIndex: 2,
            explanation: 'To express an impossible wish "If I could go back", you must use the potential form (can go back). 戻れる + ものなら.'
          },
          {
            question: '文句（もんく）があるなら、私（わたし）の前（まえ）で___もんなら言ってみろ。',
            options: ['言う', '言える', '言って', '言った'],
            correctIndex: 1,
            explanation: 'Provocation: "If you CAN say it, try and say it." Potential form (言える) + もんなら (casual of ものなら).'
          }
        ],
        realLifeUsage: 'Often used dramatically when someone is very sick: 「代わってやれるものなら、代わってやりたい」 (If I could take your place in suffering, I would).'
      },
      {
        id: 'n2-l5-t2',
        pattern: '〜わけにはいかない（復習）',
        pronunciation: 'wake ni wa ikanai',
        meaning: 'Cannot afford to (Review & Advanced)',
        isImplemented: true,
        whenAndWhy: 'This is a core N3 grammar point that is reviewed in N2 due to its heavy usage. It means "I cannot afford to do X due to psychological, social, or moral pressure." In N2, the double negative "〜ないわけにはいかない" (I cannot afford NOT to do X = I MUST do X) is highly tested.',
        explanation: 'Attach わけにはいかない to the dictionary form or nai-form of a verb. It never means "physically impossible", only "socially/morally unacceptable".',
        formation: {
          formula: 'Verb (Dictionary / nai-form) + わけにはいかない',
          rules: [
            'Dictionary form: 休むわけにはいかない (I cannot afford to rest)',
            'Nai-form: 行かないわけにはいかない (I cannot afford not to go -> I must go)'
          ]
        },
        conjugations: {
          headers: ['Form', 'Structure', 'Translation'],
          rows: [
            ['Dictionary', '負けるわけにはいかない', 'I cannot afford to lose (I must win)'],
            ['Nai-form', '払わないわけにはいかない', 'I cannot afford not to pay (I must pay)']
          ]
        },
        notes: 'In N2, watch out for the contraction 〜ないわけにはいかない. It is a very polite and indirect way of saying "I have to do this".',
        mistakes: 'Do not use this for rules or laws. (✕ 日本では20歳未満はお酒を飲むわけにはいかない - Wrong. Use 飲んではいけない. わけにはいかない is for personal duty/pressure).',
        comparison: {
          similarPattern: '〜なければならない (Must)',
          difference: '行かなければならない (I must go - standard). 行かないわけにはいかない (I cannot afford not to go - emphasizes that society or my own morals would not allow me to skip it).'
        },
        memoryTips: 'Wake = reason. Ikanai = doesn\'t go. "That reason doesn\'t fly with society."',
        examples: [
          { japanese: '明日は親友の結婚式なので、行かないわけにはいかない。', english: 'Because tomorrow is my best friend\'s wedding, I cannot afford not to go (I must go).', romaji: 'Ashita wa shinyuu no kekkonshiki na node, ikanai wake ni wa ikanai.' },
          { japanese: '社長からの命令なので、断るわけにはいかない。', english: 'Because it is an order from the president, I cannot afford to refuse.', romaji: 'Shachou kara no meirei na node, kotowaru wake ni wa ikanai.' },
          { japanese: 'みんなが残業しているのに、私だけ帰るわけにはいかない。', english: 'Even though everyone is working overtime, I cannot afford to go home by myself.', romaji: 'Minna ga zangyou shite iru noni, watashi dake kaeru wake ni wa ikanai.' },
          { japanese: 'いくら辛くても、ここで諦めるわけにはいかない。', english: 'No matter how tough it is, I cannot afford to give up here.', romaji: 'Ikura tsurakutemo, koko de akirameru wake ni wa ikanai.' },
          { japanese: 'お客様が待っているので、すぐに対応しないわけにはいかない。', english: 'Because the customer is waiting, I cannot afford not to deal with it immediately.', romaji: 'Okyakusama ga matte iru node, sugu ni taiou shinai wake ni wa ikanai.' },
          { japanese: '先輩が奢ってくれると言っているので、払うわけにはいかない。', english: 'Because my senior says he will treat me, I cannot afford to pay (it would be rude).', romaji: 'Senpai ga ogotte kureru to itte iru node, harau wake ni wa ikanai.' },
          { japanese: 'これは会社の機密だから、誰にも話すわけにはいかない。', english: 'Because this is a company secret, I cannot afford to tell anyone.', romaji: 'Kore wa kaisha no kimitsu da kara, dare ni mo hanasu wake ni wa ikanai.' },
          { japanese: '自分のミスなので、謝らないわけにはいかない。', english: 'Because it is my mistake, I cannot afford not to apologize.', romaji: 'Jibun no misu na node, ayamaranai wake ni wa ikanai.' },
          { japanese: '家族を養わなければならないので、仕事を辞めるわけにはいかない。', english: 'Because I must support my family, I cannot afford to quit my job.', romaji: 'Kazoku o yashinawanakereba naranai node, shigoto o yameru wake ni wa ikanai.' },
          { japanese: 'ここまで準備したのだから、やらないわけにはいかない。', english: 'Because we prepared this far, we cannot afford not to do it.', romaji: 'Koko made junbi shita no da kara, yaranai wake ni wa ikanai.' }
        ],
        conversation: {
          context: 'At a drinking party.',
          dialogue: [
            { speaker: '同僚', japanese: 'もう一杯どうですか。', english: 'How about another glass?' },
            { speaker: 'ジョン', japanese: 'すみません、車で来ているので、飲むわけにはいかないんです。（N3 Review!）', english: 'I am sorry, because I came by car, I cannot afford to drink.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I cannot afford NOT to go (行かない)."',
            'Translate: "I cannot afford to lose (負ける)."',
            'Why is it wrong to say: "I lost my passport so I cannot afford to travel (旅行するわけにはいかない)"?'
          ],
          answers: [
            '行かないわけにはいかない (Ikanai wake ni wa ikanai)',
            '負けるわけにはいかない (Makeru wake ni wa ikanai)',
            'Because losing a passport makes travel physically impossible. You must use 旅行できない (cannot travel).'
          ]
        },
        jlptQuestions: [
          {
            question: 'お世話（せわ）になった先生（せんせい）が入院（にゅういん）したのだから、お見舞（みま）いに___わけにはいかない。',
            options: ['行く', '行かない', '行って', '行かなく'],
            correctIndex: 1,
            explanation: 'The teacher who took care of you was hospitalized. Therefore, you MUST go. The double negative 行かないわけにはいかない (cannot afford not to go) expresses this strong moral obligation.'
          },
          {
            question: '熱（ねつ）があるが、今日（きょう）は大事（だいじ）な会議（かいぎ）の司会（しかい）だから___わけにはいかない。',
            options: ['休む', '休まない', '休んで', '休まなく'],
            correctIndex: 0,
            explanation: 'You are the MC (司会) for an important meeting. Therefore, you cannot afford to rest. 休む + わけにはいかない.'
          }
        ],
        realLifeUsage: 'Often used by main characters in anime/manga: 「ここで負けるわけにはいかない！」 (I cannot afford to lose here!).'
      },
      {
        id: 'n2-l5-t3',
        pattern: '〜かねない',
        pronunciation: 'kanenai',
        meaning: 'Might do (Negative result)',
        isImplemented: true,
        whenAndWhy: 'Used to express a subjective worry or fear that someone MIGHT do something bad, or a bad situation MIGHT occur.',
        explanation: 'Attach かねない (kanenai) to the masu-stem of a verb. Even though it ends in "nai", the meaning is POSITIVE ("might do"). It comes from the verb 兼ねる (to be unable to do). Therefore, かねない means "NOT unable to do" -> "Highly capable of doing (something bad)".',
        formation: {
          formula: 'Verb (masu-stem) + かねない',
          rules: [
            'Verb masu-stem + かねない (e.g. 失敗しかねない - might fail)',
            'Verb masu-stem + かねません (Polite form)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Masu-stem', 'Kanenai Form', 'Translation'],
          rows: [
            ['言う (iu)', '言い', '言いかねない', 'Might say (it)'],
            ['する (suru)', 'し', 'しかねない', 'Might do (it)'],
            ['死ぬ (shinu)', '死に', '死にかねない', 'Might die']
          ]
        },
        notes: 'It is strictly used for NEGATIVE possibilities. You cannot use it for good things. (✕ 合格しかねない - Might pass).',
        mistakes: 'Do not translate the "nai" as a negative. (✕ 彼は嘘を言いかねない = He might NOT tell a lie). It actually means: "He is exactly the kind of guy who MIGHT tell a lie".',
        comparison: {
          similarPattern: '〜おそれがある (Risk that - N2 L2)',
          difference: 'おそれがある is objective and formal (Warning: Risk of tsunami). かねない is subjective and personal (Warning: Knowing him, he might leak the secret).'
        },
        memoryTips: 'Kanenai -> "Cannot NOT do it" -> Highly capable of doing it.',
        examples: [
          { japanese: '休まずに働いたら、過労で倒れかねない。', english: 'If you work without resting, you might collapse from overwork.', romaji: 'Yasumazu ni hataraitara, karou de taorekanenai.' },
          { japanese: 'あの人なら、そんな嘘を言いかねない。', english: 'If it is him, he might tell such a lie.', romaji: 'Ano hito nara, sonna uso o iikanenai.' },
          { japanese: 'このままでは、大事故になりかねません。', english: 'At this rate, it might turn into a major accident.', romaji: 'Kono mama de wa, daijiko ni narikanemasen.' },
          { japanese: '彼の性格からして、秘密を漏らしかねない。', english: 'Judging from his personality, he might leak the secret.', romaji: 'Kare no seikaku kara shite, himitsu o morashikanenai.' },
          { japanese: 'スピードの出しすぎは、命を落としかねない。', english: 'Going too fast might cost you your life (lose your life).', romaji: 'Supiido no dashisugi wa, inochi o otoshikanenai.' },
          { japanese: 'そんなことをしたら、社長を怒らせかねない。', english: 'If you do such a thing, you might anger the president.', romaji: 'Sonna koto o shitara, shachou o okorasekanenai.' },
          { japanese: 'この薬を飲みすぎると、副作用が起きかねない。', english: 'If you drink too much of this medicine, side effects might occur.', romaji: 'Kono kusuri o nomisugiru to, fukusayou ga okikanenai.' },
          { japanese: 'あの子は、一人で遠くまで行きかねないから注意して。', english: 'That child might go far away alone, so be careful.', romaji: 'Ano ko wa, hitori de tooku made ikikanenai kara chuui shite.' },
          { japanese: '冗談のつもりでも、相手を傷つけかねません。', english: 'Even if intended as a joke, it might hurt the other person.', romaji: 'Joudan no tsumori demo, aite o kizutsukekanemasen.' },
          { japanese: '少しのミスが、大きな失敗に繋がりかねない。', english: 'A small mistake might lead to a huge failure.', romaji: 'Sukoshi no misu ga, ookina shippai ni tsunagarikanenai.' }
        ],
        conversation: {
          context: 'Discussing a risky plan.',
          dialogue: [
            { speaker: 'ケン', japanese: '彼にこの仕事を任せてもいいかな。', english: 'I wonder if it is okay to entrust this work to him.' },
            { speaker: 'マリー', japanese: 'うーん。彼は忘れっぽいから、重要な書類をなくしかねないよ。', english: 'Hmm. Because he is forgetful, he might lose the important documents.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "He might lie (嘘をつく - uso o tsuku)."',
            'Translate: "It might become an accident (事故になる - jiko ni naru)."',
            'Can you say "I might win the lottery" (宝くじに当たりかねない)?'
          ],
          answers: [
            '彼は嘘をつきかねない。 (Kare wa uso o tsukikanenai.)',
            '事故になりかねない。 (Jiko ni narikanenai.)',
            'No. かねない is only for bad things. Use かもしれない for good things.'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの男（おとこ）はお金（かね）のためなら、人（ひと）を裏切（うらぎ）り___。',
            options: ['かねない', 'かねる', 'つつある', '一方だ'],
            correctIndex: 0,
            explanation: '"If it is for money, he MIGHT betray people." The negative possibility based on someone\'s character requires かねない.'
          },
          {
            question: 'そんなに急（いそ）いで走（はし）ったら、転（ころ）び___よ。',
            options: ['すぎる', 'かけない', 'かねない', 'そうない'],
            correctIndex: 2,
            explanation: 'Running too fast creates the danger that you might fall (転ぶ -> 転び + かねない).'
          }
        ],
        realLifeUsage: 'Often used when warning someone about another person: 「あいつはマジでやりかねないよ」 (That guy might seriously do it).'
      },
      {
        id: 'n2-l5-t4',
        pattern: '〜かねる',
        pronunciation: 'kaneru',
        meaning: 'Difficult to / Unable to (Formal)',
        isImplemented: true,
        whenAndWhy: 'Used in extremely polite, formal business situations to gently refuse a request. It means "I want to do it, but circumstances make it impossible/difficult for me to do so."',
        explanation: 'Attach かねる (kaneru) to the masu-stem of a verb. It functions as a polite negative. わかりかねます means "I cannot understand/know" (a polite way of saying わからない).',
        formation: {
          formula: 'Verb (masu-stem) + かねる',
          rules: [
            'Usually used in polite masu-form: かねます',
            'Common fixed phrases: わかりかねます (I don\'t know), いたしかねます (We cannot do that)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Kaneru Form (Polite)', 'Translation'],
          rows: [
            ['分かる (wakaru)', '分かりかねます', 'I am unable to answer/know'],
            ['する (suru)', 'いたしかねます', 'We are unable to do that (humble)'],
            ['答える (kotaeru)', '答えかねます', 'I am unable to answer']
          ]
        },
        notes: 'Unlike できない (cannot), which sounds blunt, かねる implies a psychological hesitation or a restriction by rules. "I am in a position where it is difficult for me to say/do that."',
        mistakes: 'Do not use this for physical impossibilities. (✕ 荷物が重くて持ちかねます - Wrong. Use 持てません). かねる is for social, mental, or positional impossibilities.',
        comparison: {
          similarPattern: '〜できない (Cannot)',
          difference: 'お答えできません (I cannot answer - blunt). お答えしかねます (It is difficult for me to answer / I must refrain from answering - highly polite and professional).'
        },
        memoryTips: 'Kaneru (兼ねる) means to hold two things at once (which is difficult). "It is difficult for me to..."',
        examples: [
          { japanese: '申し訳ございません。私では分かりかねます。', english: 'I am deeply sorry. I am unable to know/answer that (Someone else might know).', romaji: 'Moushiwake gozaimasen. Watashi de wa wakarikanemasu.' },
          { japanese: 'お客様のご要望には、お応えしかねます。', english: 'We are unable to respond/comply with the customer\'s request.', romaji: 'Okyakusama no goyoubou ni wa, okotaeshikanemasu.' },
          { japanese: 'ご意見には賛成しかねます。', english: 'I find it difficult to agree with your opinion.', romaji: 'Goiken ni wa sanseishikanemasu.' },
          { japanese: '個人のプライバシーに関することは、お答えしかねます。', english: 'Regarding personal privacy, I am unable to answer.', romaji: 'Kojin no puraibashii ni kansuru koto wa, okotaeshikanemasu.' },
          { japanese: '返品の対応はいたしかねますので、ご了承ください。', english: 'Please understand that we are unable to handle returns. (いたす is humble for する)', romaji: 'Henpin no taiou wa itashikanemasu node, goryoushou kudasai.' },
          { japanese: 'これ以上の値引きはいたしかねます。', english: 'We are unable to do any further discounts.', romaji: 'Kore ijou no nebiki wa itashikanemasu.' },
          { japanese: '明日の会議には、出席いたしかねます。', english: 'I find it difficult to attend tomorrow\'s meeting.', romaji: 'Ashita no kaigi ni wa, shusseki itashikanemasu.' },
          { japanese: '担当者が不在のため、判断しかねます。', english: 'Because the person in charge is absent, I am unable to make a judgment.', romaji: 'Tantousha ga fuzai no tame, handanshikanemasu.' },
          { japanese: 'その条件は承諾（しょうだく）しかねます。', english: 'I am unable to accept those conditions.', romaji: 'Sono jouken wa shoudakushikanemasu.' },
          { japanese: 'どちらがいいか、私には決めかねます。', english: 'I find it difficult for me to decide which is better.', romaji: 'Dochira ga ii ka, watashi ni wa kimekanemasu.' }
        ],
        conversation: {
          context: 'Calling customer service.',
          dialogue: [
            { speaker: '客', japanese: '山田さんの個人の電話番号を教えてください。', english: 'Please tell me Mr. Yamada\'s personal phone number.' },
            { speaker: 'オペレーター', japanese: '申し訳ございません。個人情報についてはお答えしかねます。', english: 'I am deeply sorry. Regarding personal information, I am unable to answer.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I do not know (分かる - wakaru). (Polite kaneru form)"',
            'Translate: "I cannot do it (する/いたす). (Polite kaneru form)"',
            'Can you use kaneru to say "I cannot run fast"?'
          ],
          answers: [
            '分かりかねます (Wakarikanemasu)',
            'いたしかねます (Itashikanemasu)',
            'No, kaneru is for social/professional refusal, not physical ability.'
          ]
        },
        jlptQuestions: [
          {
            question: 'その件（けん）につきましては、私（わたし）の口（くち）からはお答（こた）え___。',
            options: ['しかねない', 'しかねます', 'するにすぎない', 'しつつある'],
            correctIndex: 1,
            explanation: 'A polite refusal to answer. 答える -> 答え(ます) -> 答えしかねます (or humble お答えしかねます).'
          },
          {
            question: '誠（まこと）に申（もう）し訳（わけ）ございません。当（とう）ホテルではペットと一緒（いっしょ）の宿泊（しゅくはく）は___。',
            options: ['いたしかねます', 'いたしかねない', 'する一方です', 'するほかありません'],
            correctIndex: 0,
            explanation: 'A formal hotel refusing a customer\'s request. いたす (humble for する) + かねます = いたしかねます (We cannot do that).'
          }
        ],
        realLifeUsage: 'The absolute most important grammar point for anyone working in Japanese customer service (クレーム対応 - complaint handling).'
      },
      {
        id: 'n2-l5-t5',
        pattern: '〜ぬく',
        pronunciation: 'nuku',
        meaning: 'Do something to the very end / Do completely',
        isImplemented: true,
        whenAndWhy: 'Used to express overcoming extreme hardship or difficulty to complete an action. "I pushed through the pain and finished it completely."',
        explanation: 'Attach ぬく (nuku) to the masu-stem of a verb. It literally means "to pull through". It is similar to 〜きる (to finish completely), but ぬく strongly emphasizes the STRUGGLE and EFFORT it took to finish.',
        formation: {
          formula: 'Verb (masu-stem) + ぬく',
          rules: [
            'Verb masu-stem + ぬく (e.g. 走りぬく - run to the very end despite exhaustion)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Masu-stem', 'Nuku Form', 'Translation'],
          rows: [
            ['走る (hashiru)', '走り', '走りぬく', 'To run to the very end (marathon)'],
            ['頑張る (ganbaru)', '頑張り', '頑張りぬく', 'To push through and do one\'s best to the end'],
            ['考える (kangaeru)', '考え', '考えぬく', 'To think through completely (until exhausted)']
          ]
        },
        notes: 'Can also be used as a noun: 悩みぬいた末（なやみぬいたすえ - at the end of worrying oneself to exhaustion).',
        mistakes: 'Do not use this for easy tasks. (✕ ご飯を食べぬいた - I ate to the very end. Wrong. Use 食べきった). ぬく requires a sense of pain, effort, or endurance.',
        comparison: {
          similarPattern: '〜きる (Finish completely - N3)',
          difference: '読みきる (Read a book completely to the end - neutral). 走りぬく (Run the 42km marathon to the end despite wanting to collapse - emphasizes the struggle).'
        },
        memoryTips: 'Nuku (抜く) = to extract/pull out. You pulled out all your inner strength to finish.',
        examples: [
          { japanese: '足が痛かったが、４２キロを走りぬいた。', english: 'My legs hurt, but I ran the 42 kilometers to the very end.', romaji: 'Ashi ga itakatta ga, yonjuuni kiro o hashirinuita.' },
          { japanese: 'どんなに苦しくても、最後まで頑張りぬくつもりだ。', english: 'No matter how painful it is, I intend to push through and do my best to the very end.', romaji: 'Donna ni kurushikutemo, saigo made ganbarinuku tsumori da.' },
          { japanese: '悩みぬいた末に、会社を辞める決心をした。', english: 'At the end of worrying myself to exhaustion, I made the decision to quit the company.', romaji: 'Nayaminuita sue ni, kaisha o yameru kesshin o shita.' },
          { japanese: '三日三晩、考えぬいて出した答えです。', english: 'It is an answer I produced after thinking it through completely for three days and three nights.', romaji: 'Mikka miban, kangaenuite dashita kotae desu.' },
          { japanese: '彼は数々の困難を生きぬいてきた。', english: 'He has survived through (lived through completely) numerous difficulties.', romaji: 'Kare wa kazukazu no konnan o ikinuite kita.' },
          { japanese: '一度決めたことは、最後までやりぬきなさい。', english: 'Once you decide something, do it to the very end.', romaji: 'Ichido kimeta koto wa, saigo made yarinukinasai.' },
          { japanese: '厳しい訓練を耐え（たえ）ぬいた者だけが、プロになれる。', english: 'Only those who have endured the strict training to the very end can become pros.', romaji: 'Kibishii kunren o taenuita mono dake ga, puro ni nareru.' },
          { japanese: '戦いぬく覚悟（かくご）はできている。', english: 'I am prepared to fight to the very end.', romaji: 'Tatakainuku kakugo wa dekite iru.' },
          { japanese: 'この映画は、愛を貫き（つらぬき）ぬいた男女の物語だ。', english: 'This movie is a story of a man and woman who stuck to their love to the very end.', romaji: 'Kono eiga wa, ai o tsuranukinuita danjo no monogatari da.' },
          { japanese: '猛暑（もうしょ）を生きぬいた植物。', english: 'A plant that survived through the extreme heat.', romaji: 'Mousho o ikinuita shokubutsu.' }
        ],
        conversation: {
          context: 'After finishing a marathon.',
          dialogue: [
            { speaker: 'コーチ', japanese: 'よく最後まで走りぬいたな！おめでとう！', english: 'You ran it to the very end well! Congratulations!' },
            { speaker: '選手', japanese: 'ありがとうございます。途中で倒れそうでしたが、諦めませんでした。', english: 'Thank you. I felt like collapsing halfway through, but I didn\'t give up.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "To run to the very end (走る - hashiru)."',
            'Translate: "To do it to the very end (やる - yaru)."',
            'What is the difference between 読みきる and 読みぬく?'
          ],
          answers: [
            '走りぬく (Hashirinuku)',
            'やりぬく (Yarinuku)',
            '読みきる just means finishing a book. 読みぬく implies the book was extremely difficult, long, or boring, but you suffered through to the last page.'
          ]
        },
        jlptQuestions: [
          {
            question: 'どんなに辛（つら）くても、自分（じぶん）で決（き）めた道（みち）だから最後（さいご）まで___。',
            options: ['やりきる', 'やりぬく', 'やりかける', 'やりつつある'],
            correctIndex: 1,
            explanation: 'The sentence highlights the pain/hardship (辛くても). To express overcoming hardship to finish something, ぬく is much stronger and more appropriate than きる.'
          },
          {
            question: '三日間（みっかかん）、___ぬいて出（だ）した結論（けつろん）です。',
            options: ['考える', '考えて', '考え', '考えた'],
            correctIndex: 2,
            explanation: 'The grammar requires the masu-stem of the verb. 考える -> 考え + ぬいて.'
          }
        ],
        realLifeUsage: 'Often seen in sports or business mottos: 「最後までやり抜く力」 (The power to see things through to the very end).'
      }
    ]
  }
];
