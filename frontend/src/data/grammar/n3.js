export const n3Lessons = [
  {
    lessonNum: 1,
    title: 'Transitions & Primary Indicators',
    description: 'Intermediate grammar starting points.',
    topics: [
      {
        id: 'n3-l1-t1',
        pattern: '〜ところです',
        pronunciation: 'tokoro desu',
        meaning: 'Just about to / In the middle of / Just finished',
        isImplemented: true,
        whenAndWhy: 'Used to pinpoint the exact moment of an action: just before it starts, right in the middle of it, or immediately after it finishes.',
        explanation: 'ところ (tokoro) literally means "place", but in grammar, it means "a point in time". Depending on the verb tense attached to it, it expresses three distinct points in time regarding an action.',
        formation: {
          formula: 'Verb + ところです',
          rules: [
            'Dictionary form + ところです = Just about to do.',
            'te-iru form + ところです = In the middle of doing.',
            'ta-form (past) + ところです = Just finished doing.'
          ]
        },
        conjugations: {
          headers: ['Verb Tense', 'Structure', 'Translation', 'Time phase'],
          rows: [
            ['Dictionary (kuru)', '来るところです', 'Just about to come', 'Before'],
            ['te-iru (kite iru)', '来ているところです', 'In the middle of coming', 'During'],
            ['ta-form (kita)', '来たところです', 'Just arrived / Just came', 'After']
          ]
        },
        notes: 'Adverbs are often used to make the timing clearer. これから (from now) for Dictionary form. 今 (now) for te-iru form. たった今 (just now) for ta-form.',
        mistakes: 'Do not confuse 〜たところです (just finished) with 〜たばかりです (recently finished). たところ means it happened *seconds* ago. たばかり can mean it happened yesterday or a month ago, depending on the speaker\'s feeling.',
        comparison: {
          similarPattern: '〜ている (Ongoing action)',
          difference: 'ご飯を食べている (I am eating). ご飯を食べているところです (I am *right in the middle* of eating - often used to explain why you cannot do something else right now, like answering a phone).'
        },
        memoryTips: 'Tokoro = place in time. Which "place" are you? The starting line (dictionary), the track (te-iru), or the finish line (ta-form).',
        examples: [
          { japanese: '今から家を出るところです。', english: 'I am just about to leave the house now.', romaji: 'Ima kara ie o deru tokoro desu.' },
          { japanese: 'これから昼ご飯を食べるところです。', english: 'I am just about to eat lunch from now.', romaji: 'Korekara hirugohan o taberu tokoro desu.' },
          { japanese: '今、レポートを書いているところです。', english: 'I am right in the middle of writing a report now.', romaji: 'Ima, repooto o kaite iru tokoro desu.' },
          { japanese: '今、調べているところですから、少々お待ちください。', english: 'I am in the middle of looking it up now, so please wait a moment.', romaji: 'Ima, shirabete iru tokoro desu kara, shoushou omachi kudasai.' },
          { japanese: 'たった今、駅に着いたところです。', english: 'I have just this moment arrived at the station.', romaji: 'Tattaima, eki ni tsuita tokoro desu.' },
          { japanese: '会議はちょうど終わったところです。', english: 'The meeting has exactly just finished.', romaji: 'Kaigi wa choudo owatta tokoro desu.' },
          { japanese: 'これからお風呂に入るところです。', english: 'I am just about to take a bath.', romaji: 'Korekara ofuro ni hairu tokoro desu.' },
          { japanese: '今、メールを読んでいるところです。', english: 'I am right in the middle of reading the email.', romaji: 'Ima, meeru o yonde iru tokoro desu.' },
          { japanese: '彼に電話しているところです。', english: 'I am in the middle of calling him.', romaji: 'Kare ni denwa shite iru tokoro desu.' },
          { japanese: 'たった今、起きたところです。', english: 'I just woke up right now.', romaji: 'Tattaima, okita tokoro desu.' }
        ],
        conversation: {
          context: 'Answering a phone call.',
          dialogue: [
            { speaker: 'ケン', japanese: 'もしもし、マリーさん？今、忙しいですか。', english: 'Hello, Marie? Are you busy now?' },
            { speaker: 'マリー', japanese: 'あ、今ちょうどご飯を食べているところなんです。後で電話してもいいですか。', english: 'Ah, I am right in the middle of eating a meal right now. Is it okay if I call you later?' },
            { speaker: 'ケン', japanese: 'わかりました。また後で。', english: 'Understood. See you later.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I just woke up (起きる). (Use tattaima)"',
            'Translate: "I am about to start (始める)." (Use korekara)',
            'Translate: "I am in the middle of studying."'
          ],
          answers: [
            'たった今、起きたところです。 (Tattaima, okita tokoro desu.)',
            'これから、始めるところです。 (Korekara, hajimeru tokoro desu.)',
            '今、勉強しているところです。 (Ima, benkyou shite iru tokoro desu.)'
          ]
        },
        jlptQuestions: [
          {
            question: '「もしもし、今どこですか。」「今、電車（でんしゃ）に___ところです。」',
            options: ['乗る', '乗って', '乗った', '乗り'],
            correctIndex: 2,
            explanation: 'Based on the context of updating someone on your location, you would say "I just got on the train." ta-form + ところです matches best here.'
          },
          {
            question: '今から会議（かいぎ）を___ところですから、後（あと）で来（き）てください。',
            options: ['始める', '始めて', '始めた', '始め'],
            correctIndex: 0,
            explanation: '今から (from now on) indicates a future action. The dictionary form 始める + ところです means "about to start".'
          }
        ],
        realLifeUsage: 'Extremely common on phone calls when explaining what you are doing right at that second.'
      },
      {
        id: 'n3-l1-t2',
        pattern: '〜をはじめ',
        pronunciation: 'o hajime',
        meaning: 'Starting with / For example / Including',
        isImplemented: true,
        whenAndWhy: 'Used to give a primary or most prominent example of a group before mentioning others.',
        explanation: 'Attach をはじめ (o hajime) to a noun. It literally means "beginning with [Noun]". You state the most representative item first, and then imply that there are many other similar things. It is a formal expression.',
        formation: {
          formula: 'Noun A + をはじめ（として） + Noun B / Phrase',
          rules: [
            'Noun + をはじめ (o hajime)',
            'Noun + をはじめとして (o hajime to shite) - more formal',
            'Noun + をはじめとする + Noun (o hajime to suru) - used to modify the following noun directly'
          ]
        },
        conjugations: {
          headers: ['Usage', 'Structure', 'Example', 'Translation'],
          rows: [
            ['Mid-sentence', 'Noun + をはじめ', '校長先生をはじめ', 'Starting with the principal (and others)'],
            ['Modifying Noun', 'Noun + をはじめとする', '富士山をはじめとする山々', 'Mountains, starting with Mt. Fuji']
          ]
        },
        notes: 'The sentence usually continues with words that show plurality or a wide scope, such as みんな (everyone), 色々な (various), or たくさんの (many).',
        mistakes: 'Do not use this for only two items (e.g. ✕ リンゴをはじめ、バナナを買った). It is used when the first item is the leader of a much larger group.',
        comparison: {
          similarPattern: '〜など (etc.)',
          difference: '〜など just lists random examples (Apples, bananas, etc.). 〜をはじめ elevates the first item as the most important or representative example (Fruits, *starting with* the famous Aomori apples...).'
        },
        memoryTips: 'Hajime means "beginning". "I will list these things, beginning with the boss..."',
        examples: [
          { japanese: '日本には、富士山をはじめ、美しい山がたくさんあります。', english: 'In Japan, starting with Mt. Fuji, there are many beautiful mountains.', romaji: 'Nihon ni wa, Fujisan o hajime, utsukushii yama ga takusan arimasu.' },
          { japanese: '校長先生をはじめ、先生方、今日はありがとうございました。', english: 'Starting with the principal, and all the teachers, thank you for today.', romaji: 'Kouchou sensei o hajime, senseigata, kyou wa arigatou gozaimashita.' },
          { japanese: '社長をはじめ、社員の皆さんが会議に出席しました。', english: 'Starting with the president, all employees attended the meeting.', romaji: 'Shachou o hajime, shain no minasan ga kaigi ni shusseki shimashita.' },
          { japanese: '京都には、金閣寺をはじめとする有名なお寺があります。', english: 'In Kyoto, there are famous temples, starting with Kinkakuji.', romaji: 'Kyouto ni wa, Kinkakuji o hajime to suru yuumei na otera ga arimasu.' },
          { japanese: '私の家族は、父をはじめ、みんなスポーツが好きです。', english: 'My family, starting with my father, all like sports.', romaji: 'Watashi no kazoku wa, chichi o hajime, minna supootsu ga suki desu.' },
          { japanese: '東京をはじめ、全国の主要都市でイベントが行われます。', english: 'Starting with Tokyo, events will be held in major cities nationwide.', romaji: 'Toukyou o hajime, zenkoku no shuyou toshi de ibento ga okonawaremasu.' },
          { japanese: 'この会社には、中国をはじめとするアジアの国々から社員が来ています。', english: 'At this company, employees come from Asian countries, starting with China.', romaji: 'Kono kaisha ni wa, Chuugoku o hajime to suru Ajia no kuniguni kara shain ga kite imasu.' },
          { japanese: '日本語には、「こんにちは」をはじめ、多くの挨拶があります。', english: 'In Japanese, starting with "Konnichiwa", there are many greetings.', romaji: 'Nihongo ni wa, "Konnichiwa" o hajime, ooku no aisatsu ga arimasu.' },
          { japanese: '彼はピアノをはじめ、色々な楽器が弾けます。', english: 'Starting with the piano, he can play various instruments.', romaji: 'Kare wa piano o hajime, iroiro na gakki ga hikemasu.' },
          { japanese: '両親をはじめ、多くの人に助けてもらいました。', english: 'I received help from many people, starting with my parents.', romaji: 'Ryoushin o hajime, ooku no hito ni tasukete moraimashita.' }
        ],
        conversation: {
          context: 'A graduation speech.',
          dialogue: [
            { speaker: '学生', japanese: '校長先生をはじめ、先生方、三年間本当にお世話になりました。', english: 'Starting with the principal, and all the teachers, thank you very much for your care over these three years.' },
            { speaker: '先生', japanese: '卒業おめでとうございます。これからも頑張ってください。', english: 'Congratulations on your graduation. Please continue to do your best.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "There are many foreigners, starting with Americans (アメリカ人)."',
            'Translate: "I want to thank everyone, starting with the president (社長)."',
            'Modify the noun: "Asian countries (アジアの国), starting with Korea (韓国)." (Use hajime to suru)'
          ],
          answers: [
            'アメリカ人をはじめ、多くの外国人がいます。 (Amerikajin o hajime, ooku no gaikokujin ga imasu.)',
            '社長をはじめ、皆さんに感謝したいです。 (Shachou o hajime, minasan ni kansha shitai desu.)',
            '韓国をはじめとするアジアの国 (Kankoku o hajime to suru Ajia no kuni)'
          ]
        },
        jlptQuestions: [
          {
            question: '日本には、寿司（すし）___、美味（おい）しい食（た）べ物（もの）がたくさんあります。',
            options: ['にとって', 'をはじめ', 'にたいして', 'にかけて'],
            correctIndex: 1,
            explanation: 'When singling out one representative item (Sushi) from a larger group (delicious foods), をはじめ is the correct grammar.'
          },
          {
            question: 'ご両親（りょうしん）___、ご家族（かぞく）の皆様（みなさま）によろしくお伝（つた）えください。',
            options: ['をおいて', 'をめぐって', 'をはじめ', 'を通じて'],
            correctIndex: 2,
            explanation: 'A formal greeting singling out the parents first, then extending to the rest of the family. をはじめ fits perfectly.'
          }
        ],
        realLifeUsage: 'Heavily used in formal speeches, news reports, and business emails to show respect to the most important person in a group.'
      },
      {
        id: 'n3-l1-t3',
        pattern: '〜わけがない',
        pronunciation: 'wake ga nai',
        meaning: 'There is no way that / It is impossible that',
        isImplemented: true,
        whenAndWhy: 'Used to strongly deny a possibility. The speaker is absolutely convinced that something cannot be true based on logic or common sense.',
        explanation: 'わけ (wake) means "reason" or "logic". わけがない means "There is no reason/logic for that to be true." It attaches to the plain form of verbs, adjectives, and nouns.',
        formation: {
          formula: 'Plain Form + わけがない',
          rules: [
            'Verbs: Plain form + わけがない (e.g. 行くわけがない)',
            'i-adjectives: Plain form + わけがない (e.g. 安いわけがない)',
            'na-adjectives: Add な + わけがない (e.g. 好きなわけがない)',
            'Nouns: Add の/な + わけがない (e.g. 学生のわけがない)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Wake ga nai form', 'Translation'],
          rows: [
            ['Verb', '勝つ (katsu)', '勝つわけがない', 'There is no way they will win.'],
            ['i-adjective', '難しい (muzukashii)', '難しいわけがない', 'There is no way it is difficult.'],
            ['na-adjective', '暇 (hima)', '暇なわけがない', 'There is no way he is free.'],
            ['Noun', '日本人 (nihonjin)', '日本人のわけがない', 'There is no way he is Japanese.']
          ]
        },
        notes: 'In casual conversation, it is often shortened to 〜わけない (wake nai). Example: そんなことできるわけない！ (There\'s no way I can do that!).',
        mistakes: 'Do not confuse with 〜わけではない (It does not mean that...). わけがない is a 100% denial of possibility. わけではない is a partial denial ("It\'s not exactly that...").',
        comparison: {
          similarPattern: '〜はずがない',
          difference: 'はずがない (There is no expectation that...) and わけがない (There is no reason/way that...) are nearly identical in meaning and can be used interchangeably in most situations. わけがない can sound slightly more subjective and emotional.'
        },
        memoryTips: 'Wake = reason. Nai = zero. Zero reason it could be true!',
        examples: [
          { japanese: 'こんな難しい問題、子供にわかるわけがない。', english: 'There is no way a child can understand such a difficult problem.', romaji: 'Konna muzukashii mondai, kodomo ni wakaru wake ga nai.' },
          { japanese: '彼が嘘をつくわけがない。', english: 'There is no way he would lie.', romaji: 'Kare ga uso o tsuku wake ga nai.' },
          { japanese: '毎日遊んでばかりいるのだから、テストに合格するわけがない。', english: 'Because he does nothing but play every day, there is no way he will pass the test.', romaji: 'Mainichi asonde bakari iru no da kara, tesuto ni goukaku suru wake ga nai.' },
          { japanese: 'あの店はいつも客がいないから、美味しいわけがない。', english: 'That store never has customers, so there is no way it is delicious.', romaji: 'Ano mise wa itsumo kyaku ga inai kara, oishii wake ga nai.' },
          { japanese: '彼が犯人のわけがない。', english: 'There is no way he is the culprit.', romaji: 'Kare ga hannin no wake ga nai.' },
          { japanese: 'こんなにたくさん、一人で食べられるわけがない。', english: 'There is no way I can eat this much by myself.', romaji: 'Konna ni takusan, hitori de taberareru wake ga nai.' },
          { japanese: '山田さんがそんなミスをするわけがありません。', english: 'There is no way Mr. Yamada would make such a mistake.', romaji: 'Yamada-san ga sonna misu o suru wake ga arimasen.' },
          { japanese: '給料が安いから、この仕事がいいわけがない。', english: 'Because the salary is low, there is no way this job is good.', romaji: 'Kyuuryou ga yasui kara, kono shigoto ga ii wake ga nai.' },
          { japanese: 'あの二人が結婚するわけがない。', english: 'There is no way those two are getting married.', romaji: 'Ano futari ga kekkon suru wake ga nai.' },
          { japanese: 'これ、百円？そんなわけない！', english: 'This is 100 yen? No way!', romaji: 'Kore, hyakuen? Sonna wake nai!' }
        ],
        conversation: {
          context: 'Discussing a rumor.',
          dialogue: [
            { speaker: 'ケン', japanese: '田中さんが宝くじで一億円当たったらしいですよ。', english: 'Apparently Mr. Tanaka won 100 million yen in the lottery.' },
            { speaker: 'マリー', japanese: 'えっ、本当ですか。でも、彼、昨日お金を貸してと言っていましたよ。当たるわけがないです。', english: 'Eh, really? But, yesterday he asked me to lend him money. There is no way he won.' },
            { speaker: 'ケン', japanese: '確かに。冗談だったんでしょうね。', english: 'True. It was probably a joke.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "There is no way I can go (行ける)."',
            'Translate: "There is no way he is healthy (元気). (Use na-adj)"',
            'Casual translation: "No way!"'
          ],
          answers: [
            '行けるわけがない。 (Ikeru wake ga nai.)',
            '彼が元気なわけがない。 (Kare ga genki na wake ga nai.)',
            'そんなわけない！ (Sonna wake nai!)'
          ]
        },
        jlptQuestions: [
          {
            question: 'まだ習（なら）っていない漢字（かんじ）だから、___わけがない。',
            options: ['読める', '読めない', '読んで', '読んだ'],
            correctIndex: 0,
            explanation: 'The logic: You haven\'t learned it yet. Therefore, there is no way you can *read* it. 読める + わけがない.'
          },
          {
            question: '彼女（かのじょ）は猫（ねこ）を三匹（さんびき）も飼（か）っているから、猫が___わけがありません。',
            options: ['好き', '好きな', '嫌い', '嫌いな'],
            correctIndex: 3,
            explanation: 'If she has 3 cats, there is no way she *hates* cats. 嫌い is a na-adjective, so it requires な. 嫌いなわけがありません.'
          }
        ],
        realLifeUsage: 'Often used in anime or drama when a character is in denial: 「あいつが負けるわけがない！」 (There is no way he could lose!).'
      },
      {
        id: 'n3-l1-t4',
        pattern: '〜たびに',
        pronunciation: 'tabi ni',
        meaning: 'Every time / Whenever',
        isImplemented: true,
        whenAndWhy: 'Used to emphasize that every single time action A happens, action B invariably happens as well.',
        explanation: 'Attach たびに to the dictionary form of a verb or to a Noun + の. It shows a repeated, habitual connection between two events.',
        formation: {
          formula: 'Verb (Dictionary) / Noun + の + たびに',
          rules: [
            'Verb: Dictionary form + たびに (e.g. 行くたびに - every time I go)',
            'Noun: Noun + の + たびに (e.g. 旅行のたびに - every time I travel)'
          ]
        },
        conjugations: {
          headers: ['Base Word', 'Form', 'Translation', 'Usage'],
          rows: [
            ['会う (au)', '会うたびに', 'Every time I meet', 'Verb'],
            ['見る (miru)', '見るたびに', 'Every time I see', 'Verb'],
            ['買い物 (kaimono)', '買い物のたびに', 'Every time I shop', 'Noun']
          ]
        },
        notes: 'It cannot be used for daily, completely obvious routines (✕ 朝起きるたびに、顔を洗います - Every time I wake up, I wash my face). It is used for events that have some emotional weight, noticeable result, or happen occasionally.',
        mistakes: 'Do not use the past tense before たびに (✕ 行ったたびに). Always use the dictionary form (◯ 行くたびに), even if talking about past habits.',
        comparison: {
          similarPattern: '〜と (When/If)',
          difference: '春になると花が咲く (When spring comes, flowers bloom - natural fact). 彼に会うたびに、喧嘩になる (Every single time I meet him, it becomes a fight - emphasizes repetition and personal experience).'
        },
        memoryTips: 'Tabi means "journey" or "time/occasion". "At the occasion of X, Y always happens."',
        examples: [
          { japanese: 'この映画を見るたびに、涙が出ます。', english: 'Every time I watch this movie, tears come out.', romaji: 'Kono eiga o miru tabi ni, namida ga demasu.' },
          { japanese: '山田さんは、会うたびに違う時計をしています。', english: 'Mr. Yamada is wearing a different watch every time I meet him.', romaji: 'Yamada-san wa, au tabi ni chigau tokei o shite imasu.' },
          { japanese: '買い物のたびに、袋をもらいます。', english: 'Every time I shop, I receive a bag.', romaji: 'Kaimono no tabi ni, fukuro o moraimasu.' },
          { japanese: '京都へ行くたびに、新しい発見があります。', english: 'Every time I go to Kyoto, there are new discoveries.', romaji: 'Kyouto e iku tabi ni, atarashii hakken ga arimasu.' },
          { japanese: 'その音楽を聞くたびに、学生時代を思い出します。', english: 'Whenever I hear that music, I remember my student days.', romaji: 'Sono ongaku o kiku tabi ni, gakusei jidai o omoidashimasu.' },
          { japanese: '彼はテストのたびに、お腹が痛くなります。', english: 'Every time there is a test, his stomach hurts.', romaji: 'Kare wa tesuto no tabi ni, onaka ga itaku narimasu.' },
          { japanese: '日本へ来るたびに、日本語が上手になりますね。', english: 'Every time you come to Japan, your Japanese gets better.', romaji: 'Nihon e kuru tabi ni, Nihongo ga jouzu ni narimasu ne.' },
          { japanese: '引っ越しのたびに、古い本を捨てます。', english: 'Every time I move houses, I throw away old books.', romaji: 'Hikkoshi no tabi ni, furui hon o sutemasu.' },
          { japanese: '母は電話をかけてくるたびに、「元気？」と聞きます。', english: 'Every time my mother calls, she asks "Are you healthy?".', romaji: 'Haha wa denwa o kakete kuru tabi ni, "Genki?" to kikimasu.' },
          { japanese: 'この写真を見るたびに、家族に会いたくなります。', english: 'Every time I look at this photo, I want to meet my family.', romaji: 'Kono shashin o miru tabi ni, kazoku ni aitaku narimasu.' }
        ],
        conversation: {
          context: 'Looking at old photos.',
          dialogue: [
            { speaker: 'マリー', japanese: 'これは高校の時の写真ですね。', english: 'This is a photo from high school time, right?' },
            { speaker: 'ケン', japanese: 'はい。この写真を見るたびに、昔の友達を思い出します。', english: 'Yes. Every time I see this photo, I remember my old friends.' },
            { speaker: 'マリー', japanese: 'いい思い出ですね。', english: 'That is a good memory.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Every time I go to Tokyo (東京に行く)..."',
            'Translate: "Every time I travel (旅行)... (Use Noun form)"',
            'Combine 聞く (to hear) and たびに: "Every time I hear..."'
          ],
          answers: [
            '東京に行くたびに (Toukyou ni iku tabi ni)',
            '旅行のたびに (Ryokou no tabi ni)',
            '聞くたびに (Kiku tabi ni)'
          ]
        },
        jlptQuestions: [
          {
            question: '出張（しゅっちょう）___たびに、家族（かぞく）にお土産（みやげ）を買（か）います。',
            options: ['する', 'して', 'の', 'な'],
            correctIndex: 2,
            explanation: '出張 is a noun (business trip). Nouns connect to たびに with の. 出張のたびに. (If it were a verb, it would be 出張するたびに, which is also correct, but here "の" is the exact missing particle option for the noun form).'
          },
          {
            question: 'このラーメン屋（や）は、___たびに味（あじ）が違（ちが）います。',
            options: ['行く', '行った', '行って', '行か'],
            correctIndex: 0,
            explanation: 'Verbs must be in the dictionary form before たびに. 行く is correct.'
          }
        ],
        realLifeUsage: 'Often used sentimentally: 「この曲を聴くたびに、君を思い出す」 (Every time I hear this song, I remember you).'
      },
      {
        id: 'n3-l1-t5',
        pattern: '〜おかげで',
        pronunciation: 'okage de',
        meaning: 'Thanks to',
        isImplemented: true,
        whenAndWhy: 'Used to express gratitude or attribute a positive result to a specific cause or person.',
        explanation: 'おかげ (okage) literally means "shade" or "protection" (as in divine protection). Attach it to verbs, adjectives, or nouns to say "Thanks to [X], a good result happened." It carries a feeling of appreciation.',
        formation: {
          formula: 'Modifier + おかげで',
          rules: [
            'Verbs/i-adjectives: Plain form + おかげで (e.g. 手伝ったおかげで, いいおかげで)',
            'na-adjectives: Add な + おかげで (e.g. 元気なおかげで)',
            'Nouns: Add の + おかげで (e.g. 先生のおかげで)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Plain Form', 'Okage de Form', 'Translation'],
          rows: [
            ['Noun', '先生 (sensei)', '先生のおかげで', 'Thanks to the teacher'],
            ['Verb (Past)', '頑張った (ganbatta)', '頑張ったおかげで', 'Thanks to working hard'],
            ['na-adjective', '便利 (benri)', '便利なおかげで', 'Thanks to it being convenient']
          ]
        },
        notes: 'At the end of a sentence, it becomes おかげです (It is thanks to...). Example: 合格できたのは、先生のおかげです (The fact I could pass is thanks to you, teacher).',
        mistakes: 'Sometimes used sarcastically for negative results ("Thanks to you, I failed!"), but the grammar for a purely negative fault is 〜せいで (covered in N3 L5). In JLPT tests, おかげで is strictly for positive outcomes.',
        comparison: {
          similarPattern: '〜から / ので (Because)',
          difference: 'から/ので are neutral reasons. おかげで specifically implies gratitude for a positive benefit.'
        },
        memoryTips: 'Oh, KAGE! (Oh, shadow!) You provided me shade from the hot sun, thanks to you I survived!',
        examples: [
          { japanese: '先生のおかげで、大学に合格できました。', english: 'Thanks to the teacher, I was able to pass the university exam.', romaji: 'Sensei no okage de, daigaku ni goukaku dekimashita.' },
          { japanese: '毎日練習したおかげで、日本語が上手になりました。', english: 'Thanks to practicing every day, my Japanese became good.', romaji: 'Mainichi renshuu shita okage de, Nihongo ga jouzu ni narimashita.' },
          { japanese: '薬を飲んだおかげで、風邪が治りました。', english: 'Thanks to taking medicine, my cold was cured.', romaji: 'Kusuri o nonda okage de, kaze ga naorimashita.' },
          { japanese: '天気がいいおかげで、富士山がきれいに見えます。', english: 'Thanks to the good weather, Mt. Fuji can be seen beautifully.', romaji: 'Tenki ga ii okage de, Fujisan ga kirei ni miemasu.' },
          { japanese: '友達が手伝ってくれたおかげで、早く終わりました。', english: 'Thanks to my friend helping me, it finished early.', romaji: 'Tomodachi ga tetsudatte kureta okage de, hayaku owarimashita.' },
          { japanese: '奨学金のおかげで、留学することができました。', english: 'Thanks to the scholarship, I was able to study abroad.', romaji: 'Shougakukin no okage de, ryuugaku suru koto ga dekimashita.' },
          { japanese: 'インターネットが便利なおかげで、すぐ調べられます。', english: 'Thanks to the internet being convenient, I can look things up immediately.', romaji: 'Intaanetto ga benri na okage de, sugu shiraberaremasu.' },
          { japanese: 'あなたがいたおかげで、楽しかったです。', english: 'Thanks to you being here, it was fun.', romaji: 'Anata ga ita okage de, tanoshikatta desu.' },
          { japanese: '早く起きたおかげで、電車に間に合いました。', english: 'Thanks to waking up early, I made it in time for the train.', romaji: 'Hayaku okita okage de, densha ni maniaimashita.' },
          { japanese: 'すべて山田さんのおかげです。', english: 'It is all thanks to Mr. Yamada.', romaji: 'Subete Yamada-san no okage desu.' }
        ],
        conversation: {
          context: 'Thanking a senior colleague.',
          dialogue: [
            { speaker: 'ジョン', japanese: '先輩が教えてくれたおかげで、プロジェクトが成功しました。', english: 'Thanks to you teaching me, senior, the project succeeded.' },
            { speaker: '先輩', japanese: 'いえいえ、ジョンさんが頑張ったからですよ。', english: 'No, no, it is because you worked hard, John.' },
            { speaker: 'ジョン', japanese: '本当にありがとうございました。', english: 'Thank you truly.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Thanks to my family (家族)."',
            'Translate: "Thanks to studying (勉強した)..."',
            'Translate: "It is thanks to you (あなた)."'
          ],
          answers: [
            '家族のおかげで (Kazoku no okage de)',
            '勉強したおかげで (Benkyou shita okage de)',
            'あなたのおかげです。 (Anata no okage desu.)'
          ]
        },
        jlptQuestions: [
          {
            question: '辞書（じしょ）___おかげで、一人（ひとり）で翻訳（ほんやく）できました。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 2,
            explanation: '辞書 is a noun, so it requires の before おかげで. 辞書のおかげで.'
          },
          {
            question: '先生が___おかげで、テストに合格（ごうかく）しました。',
            options: ['教える', '教えてくれた', '教えて', '教え'],
            correctIndex: 1,
            explanation: 'The action happened in the past and resulted in passing the test. "Thanks to the fact the teacher taught me (for my benefit - くれた)" is perfectly expressed with 教えてくれた + おかげで.'
          }
        ],
        realLifeUsage: 'The set phrase 「おかげさまで」 (Thanks to you / Fortunately) is universally used in Japan when someone asks how you are doing, even if they personally didn\'t help you.'
      }
    ]
  },
  {
    lessonNum: 2,
    title: 'Conscious Intent & Standpoints',
    description: 'Express effort and viewpoints.',
    topics: [
      {
        id: 'n3-l2-t1',
        pattern: '〜ようにしている',
        pronunciation: 'you ni shite iru',
        meaning: 'Making an effort to (Habit)',
        isImplemented: true,
        whenAndWhy: 'Used to express a habit or routine that the speaker is consciously making an ongoing effort to maintain.',
        explanation: 'This is the continuous (te-iru) form of 〜ようにする (learned in N4). By using している, it shows that the effort is not just a one-time decision, but a current, ongoing habit.',
        formation: {
          formula: 'Verb (Dictionary / nai-form) + ようにしている',
          rules: [
            'To make a habit of doing: Dictionary form + ようにしている',
            'To make a habit of NOT doing: nai-form + ようにしている'
          ]
        },
        conjugations: {
          headers: ['Target Habit', 'Verb Form', 'You ni shite iru Form', 'Translation'],
          rows: [
            ['Eat breakfast', '食べる (taberu)', '食べるようにしている', 'I make an effort to eat.'],
            ['Not sleep late', '寝ない (nenai)', '寝ないようにしている', 'I make an effort not to sleep.']
          ]
        },
        notes: 'It emphasizes your personal effort and willpower. If the habit is completely effortless or just a natural routine, plain present tense (e.g., 毎日食べる - I eat every day) is more appropriate.',
        mistakes: 'Do not use this for one-time actions in the past (✕ 昨日は早く寝るようにしていた). It is for ongoing habits.',
        comparison: {
          similarPattern: '〜ことにしている',
          difference: 'ことにしている implies a firm, absolute personal rule (I have decided that I MUST do this). ようにしている implies a conscious effort, acknowledging that sometimes you might fail but you try your best.'
        },
        memoryTips: 'You (in such a way) + shite iru (am doing). "I am doing things in such a way that X happens."',
        examples: [
          { japanese: '健康のために、毎日野菜を食べるようにしています。', english: 'For my health, I make an effort to eat vegetables every day.', romaji: 'Kenkou no tame ni, mainichi yasai o taberu you ni shite imasu.' },
          { japanese: '夜十時以降は、スマホを見ないようにしています。', english: 'After 10 PM, I try to make it a habit not to look at my smartphone.', romaji: 'Yoru juuji ikou wa, sumaho o minai you ni shite imasu.' },
          { japanese: 'できるだけ、毎日一時間歩くようにしています。', english: 'As much as possible, I make an effort to walk for one hour every day.', romaji: 'Dekiru dake, mainichi ichijikan aruku you ni shite imasu.' },
          { japanese: '甘いものを食べすぎないようにしています。', english: 'I am making an effort not to eat too many sweet things.', romaji: 'Amai mono o tabesuginai you ni shite imasu.' },
          { japanese: '毎日、日本語で日記を書くようにしています。', english: 'I make it a habit to write my diary in Japanese every day.', romaji: 'Mainichi, Nihongo de nikki o kaku you ni shite imasu.' },
          { japanese: 'お金を節約するために、外食しないようにしています。', english: 'In order to save money, I try not to eat out.', romaji: 'Okane o setsuyaku suru tame ni, gaishoku shinai you ni shite imasu.' },
          { japanese: '寝る前に、ストレッチをするようにしています。', english: 'I make an effort to stretch before sleeping.', romaji: 'Neru mae ni, sutoretchi o suru you ni shite imasu.' },
          { japanese: 'できるだけ、階段を使うようにしています。', english: 'I try to use the stairs as much as possible.', romaji: 'Dekiru dake, kaidan o tsukau you ni shite imasu.' },
          { japanese: '人と話す時は、目を見るようにしています。', english: 'When talking with people, I make an effort to look at their eyes.', romaji: 'Hito to hanasu toki wa, me o miru you ni shite imasu.' },
          { japanese: '週末は、仕事のことを考えないようにしています。', english: 'On weekends, I make an effort not to think about work.', romaji: 'Shuumatsu wa, shigoto no koto o kangaenai you ni shite imasu.' }
        ],
        conversation: {
          context: 'Discussing diet.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'さくらさんは、スタイルがいいですね。', english: 'Sakura, you have a good figure.' },
            { speaker: 'さくら', japanese: 'ありがとうございます。毎日、ジョギングをするようにしているんです。', english: 'Thank you. I make an effort to go jogging every day.' },
            { speaker: 'ジョン', japanese: 'すごいですね。私も運動するようにします。', english: 'That is amazing. I will try to exercise too.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I try to drink (飲む) water every morning."',
            'Translate: "I try not to use (使わない) a car."',
            'What form of the verb goes before ようにしている for negative habits?'
          ],
          answers: [
            '毎朝、水を飲むようにしています。 (Maiasa, mizu o nomu you ni shite imasu.)',
            '車を使わないようにしています。 (Kuruma o tsukawanai you ni shite imasu.)',
            'nai-form (plain negative)'
          ]
        },
        jlptQuestions: [
          {
            question: '太（ふと）らないように、夜（よる）遅（おそ）くは___ようにしています。',
            options: ['食べる', '食べて', '食べない', '食べなく'],
            correctIndex: 2,
            explanation: 'To not get fat, the logical habit is NOT eating late at night. The plain negative (nai-form) 食べない is required.'
          },
          {
            question: '毎朝（まいあさ）、新聞（しんぶん）を___ようにしています。',
            options: ['読む', '読んで', '読み', '読まない'],
            correctIndex: 0,
            explanation: 'Reading the newspaper every morning is a typical positive habit. Use the dictionary form 読む.'
          }
        ],
        realLifeUsage: 'Often used in self-introductions or interviews when talking about personal discipline or health habits.'
      },
      {
        id: 'n3-l2-t2',
        pattern: '〜ようとする',
        pronunciation: 'you to suru',
        meaning: 'Try to / Be about to do',
        isImplemented: true,
        whenAndWhy: 'Used in two ways: 1) To express an attempt to do something that often fails or is interrupted. 2) To indicate that an action is just on the verge of happening ("about to").',
        explanation: 'Attach とする to the Volitional form (let\'s form) of a verb. It means "assume the position to do X" or "make a move to do X".',
        formation: {
          formula: 'Verb (Volitional form) + とする',
          rules: [
            'Change verb to Volitional form (e.g. 食べる -> 食べよう).',
            'Attach とする (to attempt) or としている (is currently attempting / is about to) or とした (attempted but...).'
          ]
        },
        conjugations: {
          headers: ['Verb', 'Volitional', 'You to suru form', 'Translation'],
          rows: [
            ['乗る (noru)', '乗ろう (norou)', '乗ろうとする', 'Try to ride / Be about to ride'],
            ['寝る (neru)', '寝よう (neyou)', '寝ようとした', 'Tried to sleep (but couldn\'t)'],
            ['終わる (owaru)', '終わろう (owarou)', '終わろうとしている', 'Is about to end']
          ]
        },
        notes: 'When used as ようとした (past tense), it almost always implies the attempt was interrupted or unsuccessful. "I tried to sleep, BUT the phone rang."',
        mistakes: 'Do not use this to mean "I will try a new experience to see what it is like." For that, use 〜てみる (e.g. 寿司を食べてみる). ようとする is about the physical/mental effort of attempting the action itself.',
        comparison: {
          similarPattern: '〜ところです (Just about to)',
          difference: '出るところです implies you are fully prepared and will definitely leave. 出ようとした implies you made the motion to leave (but maybe someone stopped you).'
        },
        memoryTips: 'Volitional (Let\'s!) + to suru (Do the act of). "Do the act of Let\'s...!" -> Attempting it.',
        examples: [
          { japanese: '電車に乗ろうとした時、ドアが閉まりました。', english: 'Just when I tried to get on the train, the doors closed.', romaji: 'Densha ni norou to shita toki, doa ga shimarimashita.' },
          { japanese: '早く寝ようとしたが、コーヒーを飲んだので眠れませんでした。', english: 'I tried to sleep early, but because I drank coffee, I couldn\'t sleep.', romaji: 'Hayaku neyou to shita ga, koohii o nonda node nemuremasen deshita.' },
          { japanese: '犬が私の靴を噛もうとしている。', english: 'The dog is trying to bite my shoes.', romaji: 'Inu ga watashi no kutsu o kamou to shite iru.' },
          { japanese: '映画がちょうど終わろうとしています。', english: 'The movie is just about to end.', romaji: 'Eiga ga choudo owarou to shite imasu.' },
          { japanese: '彼は何も言おうとしません。', english: 'He doesn\'t try to say anything (He refuses to speak).', romaji: 'Kare wa nanimo iou to shimasen.' },
          { japanese: 'お風呂に入ろうとした時、電話が鳴りました。', english: 'Just as I was about to take a bath, the phone rang.', romaji: 'Ofuro ni hairou to shita toki, denwa ga narimashita.' },
          { japanese: '子供は野菜を食べようとしません。', english: 'The child does not try (refuses) to eat vegetables.', romaji: 'Kodomo wa yasai o tabeyou to shimasen.' },
          { japanese: '出かけようとしたら、雨が降ってきました。', english: 'Just as I was about to go out, it started raining.', romaji: 'Dekakeyou to shitara, ame ga futte kimashita.' },
          { japanese: '桜が咲こうとしています。', english: 'The cherry blossoms are about to bloom.', romaji: 'Sakura ga sakou to shite imasu.' },
          { japanese: '新しいことに挑戦しようとする態度は素晴らしい。', english: 'An attitude of trying to challenge new things is wonderful.', romaji: 'Atarashii koto ni chousen shiyou to suru taido wa subarashii.' }
        ],
        conversation: {
          context: 'Explaining why you are late.',
          dialogue: [
            { speaker: 'ジョン', japanese: '遅れてすみません。', english: 'I am sorry for being late.' },
            { speaker: '上司', japanese: 'どうしたんですか。', english: 'What happened?' },
            { speaker: 'ジョン', japanese: '家を出ようとした時、急に腹痛がして…。', english: 'Just when I tried to leave the house, I suddenly got a stomachache...' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I tried to run (走る), but I fell."',
            'Translate: "The child refuses to study (勉強する). (Use negative)"',
            'Conjugate into volitional: 食べる (taberu)'
          ],
          answers: [
            '走ろうとしたが、転びました。 (Hashirou to shita ga, korobimashita.)',
            '子供は勉強しようとしません。 (Kodomo wa benkyou shiyou to shimasen.)',
            '食べよう (Tabeyou)'
          ]
        },
        jlptQuestions: [
          {
            question: 'バスに___とした時（とき）、転（ころ）んでしまいました。',
            options: ['乗る', '乗って', '乗ろう', '乗らない'],
            correctIndex: 2,
            explanation: 'The grammar 〜とした requires the volitional form of the verb. 乗る -> 乗ろう.'
          },
          {
            question: '何度（なんど）注意（ちゅうい）しても、彼（かれ）は話（はなし）を___としません。',
            options: ['聞く', '聞いて', '聞こう', '聞いた'],
            correctIndex: 2,
            explanation: 'When someone strongly refuses to do something, you use Volitional + としない. 聞く -> 聞こう + としません (Does not attempt to listen).'
          }
        ],
        realLifeUsage: 'Often used with verbs of natural progression to mean "about to": 「夜が明けようとしている」 (Dawn is about to break).'
      },
      {
        id: 'n3-l2-t3',
        pattern: '〜ずに',
        pronunciation: 'zu ni',
        meaning: 'Without doing',
        isImplemented: true,
        whenAndWhy: 'Used in written or slightly formal Japanese to say that you did Action B *without* doing Action A.',
        explanation: 'ずに (zu ni) is the classical/formal equivalent of 〜ないで (nai de). It attaches to the nai-form stem of a verb (the verb minus "nai").',
        formation: {
          formula: 'Verb (nai-form stem) + ずに',
          rules: [
            'Group 1 & 2: Drop ない from the nai-form and add ずに (e.g. 食べない -> 食べずに).',
            'Group 3: 来ない (konai) becomes 来ずに (kozuni).',
            'Exception: する (suru) becomes せずに (sezuni), NEVER しずに.'
          ]
        },
        conjugations: {
          headers: ['Verb', 'nai-form', 'zu ni Form', 'Translation'],
          rows: [
            ['飲む (nomu)', '飲まない', '飲まずに', 'Without drinking'],
            ['寝る (neru)', '寝ない', '寝ずに', 'Without sleeping'],
            ['する (suru)', 'しない', 'せずに', 'Without doing']
          ]
        },
        notes: 'The verb before ずに is often an action that is usually expected (e.g., leaving without saying goodbye).',
        mistakes: 'The most common mistake by far is saying しずに instead of せずに. Always remember: する -> せずに.',
        comparison: {
          similarPattern: '〜ないで',
          difference: '〜ないで is for everyday conversation (朝ごはんを食べないで学校に行った). 〜ずに is for writing, formal speech, or literature (朝食をとらずに出勤した). They mean exactly the same thing.'
        },
        memoryTips: 'Zu sounds like a zero. Doing it with zero of that action.',
        examples: [
          { japanese: '昨日は歯を磨かずに寝てしまいました。', english: 'Yesterday, I ended up sleeping without brushing my teeth.', romaji: 'Kinou wa ha o migakazu ni nete shimaimashita.' },
          { japanese: '辞書を使わずに、日本語の新聞を読みました。', english: 'I read a Japanese newspaper without using a dictionary.', romaji: 'Jisho o tsukawazu ni, Nihongo no shinbun o yomimashita.' },
          { japanese: '彼は何も言わずに、部屋を出て行きました。', english: 'He left the room without saying anything.', romaji: 'Kare wa nanimo iwazu ni, heya o dete ikimashita.' },
          { japanese: '朝ごはんを食べずに学校へ行きました。', english: 'I went to school without eating breakfast.', romaji: 'Asagohan o tabezu ni gakkou e ikimashita.' },
          { japanese: '傘を持たずに外出して、雨に降られました。', english: 'I went out without bringing an umbrella and got rained on.', romaji: 'Kasa o motazu ni gaishutsu shite, ame ni furaremashita.' },
          { japanese: '宿題をせずに遊んでばかりいる。', english: 'He does nothing but play without doing his homework.', romaji: 'Shukudai o sezu ni asonde bakari iru.' },
          { japanese: '昨夜は一睡もせずに勉強しました。', english: 'Last night I studied without sleeping a wink.', romaji: 'Sakuya wa issui mo sezu ni benkyou shimashita.' },
          { japanese: '誰にも相談せずに、会社を辞めました。', english: 'I quit the company without consulting anyone.', romaji: 'Dare ni mo soudan sezu ni, kaisha o yamemashita.' },
          { japanese: '切符を買わずに電車に乗ることはできません。', english: 'You cannot ride the train without buying a ticket.', romaji: 'Kippu o kawazu ni densha ni noru koto wa dekimasen.' },
          { japanese: '諦めずに最後まで頑張ります。', english: 'I will do my best until the end without giving up.', romaji: 'Akiramezu ni saigo made ganbarimasu.' }
        ],
        conversation: {
          context: 'At the doctor\'s office.',
          dialogue: [
            { speaker: '医者', japanese: '今日の検査は、朝ごはんを食べずに来てくださいね。', english: 'For today\'s examination, please come without eating breakfast.' },
            { speaker: '患者', japanese: 'はい、水も飲まずに来ました。', english: 'Yes, I came without even drinking water.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Without looking (見ない - minai)..."',
            'Translate: "Without doing (する - suru) homework..."',
            'Conjugate 待つ (matsu - to wait) to zu ni form.'
          ],
          answers: [
            '見ずに (Mizu ni)',
            '宿題をせずに (Shukudai o sezu ni)',
            '待たずに (Matazu ni)'
          ]
        },
        jlptQuestions: [
          {
            question: '時間（じかん）がなくて、何（なに）も___学校（がっこう）に来（き）ました。',
            options: ['食べず', '食べずに', '食べないで', 'Both 2 and 3 are correct in meaning, but usually only one is an option'],
            correctIndex: 1,
            explanation: '食べずに means "without eating". (食べないで is also correct, but JLPT questions usually test if you know the form of ずに).'
          },
          {
            question: '彼（かれ）は誰（だれ）にも連絡（れんらく）___、帰（かえ）ってしまった。',
            options: ['しずに', 'せずに', 'しないで', 'しなくて'],
            correctIndex: 1,
            explanation: 'The verb is 連絡する. The ずに form of する is always せずに, NEVER しずに.'
          }
        ],
        realLifeUsage: 'Often found in instructions and warnings: 「触らずにお待ちください」 (Please wait without touching).'
      },
      {
        id: 'n3-l2-t4',
        pattern: '〜に関して',
        pronunciation: 'ni kanshite',
        meaning: 'Regarding / Concerning',
        isImplemented: true,
        whenAndWhy: 'Used in formal contexts, presentations, or business Japanese to introduce the topic or subject matter you are going to talk about.',
        explanation: '〜に関して (ni kanshite) attaches to a noun. It is a more formal and objective way of saying 〜について (about). When modifying a noun directly, it becomes 〜に関する (ni kansuru).',
        formation: {
          formula: 'Noun + に関して / に関する + Noun',
          rules: [
            'Mid-sentence: Noun + に関して (e.g. この問題に関して - regarding this problem)',
            'Modifying a noun: Noun A + に関する + Noun B (e.g. 経済に関する本 - a book regarding economics)'
          ]
        },
        conjugations: {
          headers: ['Target', 'Structure', 'Translation', 'Usage'],
          rows: [
            ['IT', 'ITに関して', 'Regarding IT...', 'Predicate follows'],
            ['IT', 'ITに関するニュース', 'News regarding IT', 'Noun follows']
          ]
        },
        notes: 'It is highly academic and business-oriented. You would use it in a meeting ("Regarding next year\'s budget...") but not with a friend ("Regarding yesterday\'s anime...").',
        mistakes: 'Do not use に関して to connect two nouns directly. ✕ ITに関して本 -> ◯ ITに関する本.',
        comparison: {
          similarPattern: '〜について (About)',
          difference: '〜について is standard and can be used in daily life. 〜に関して is formal, rigid, and often used for broad, complex, or serious subjects (research, law, business).'
        },
        memoryTips: 'Kan (関) means "connection/relation". It shows the relation to the topic.',
        examples: [
          { japanese: 'この事件に関して、新しい情報が入りました。', english: 'Regarding this incident, new information has come in.', romaji: 'Kono jiken ni kanshite, atarashii jouhou ga hairimashita.' },
          { japanese: '日本の経済に関する本を読んでいます。', english: 'I am reading a book concerning the Japanese economy.', romaji: 'Nihon no keizai ni kansuru hon o yonde imasu.' },
          { japanese: 'その件に関しては、後でメールで連絡します。', english: 'Regarding that matter, I will contact you later by email.', romaji: 'Sono ken ni kanshite wa, ato de meeru de renraku shimasu.' },
          { japanese: '環境問題に関して、皆で話し合いましょう。', english: 'Let\'s all discuss concerning environmental issues.', romaji: 'Kankyou mondai ni kanshite, minna de hanashiaimashou.' },
          { japanese: 'これに関して、何か質問はありますか。', english: 'Regarding this, do you have any questions?', romaji: 'Kore ni kanshite, nanika shitsumon wa arimasu ka.' },
          { japanese: 'AIの技術に関する調査を行いました。', english: 'We conducted a survey regarding AI technology.', romaji: 'EE-AI no gijutsu ni kansuru chousa o okonaimashita.' },
          { japanese: 'ルールに関してお知らせがあります。', english: 'There is a notice regarding the rules.', romaji: 'Ruuru ni kanshite oshirase ga arimasu.' },
          { japanese: 'この映画は、戦争に関する物語です。', english: 'This movie is a story regarding war.', romaji: 'Kono eiga wa, sensou ni kansuru monogatari desu.' },
          { japanese: 'お客様の個人情報に関しては、厳重に管理しております。', english: 'Regarding customers\' personal information, we manage it strictly.', romaji: 'Okyakusama no kojin jouhou ni kanshite wa, genjuu ni kanri shite orimasu.' },
          { japanese: '日本の文化に関して研究しています。', english: 'I am researching regarding Japanese culture.', romaji: 'Nihon no bunka ni kanshite kenkyuu shite imasu.' }
        ],
        conversation: {
          context: 'At a business meeting.',
          dialogue: [
            { speaker: '部長', japanese: '来月のスケジュールに関してですが、変更があります。', english: 'Regarding next month\'s schedule, there is a change.' },
            { speaker: '社員', japanese: 'はい、どのような変更でしょうか。', english: 'Yes, what kind of change is it?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Regarding this problem (問題)..."',
            'Translate: "A book regarding history (歴史 - rekishi)."',
            'Is it appropriate to use に関して when asking a friend about their weekend?'
          ],
          answers: [
            'この問題に関して (Kono mondai ni kanshite)',
            '歴史に関する本 (Rekishi ni kansuru hon)',
            'No, it is too formal. Use について or just ordinary particles.'
          ]
        },
        jlptQuestions: [
          {
            question: '日本（にほん）の歴史（れきし）___本（ほん）を買（か）いました。',
            options: ['について', 'に関して', 'に関する', 'に対して'],
            correctIndex: 2,
            explanation: 'When modifying the noun 本 (book), you must use the attributive form に関する. 歴史に関する本 (a book regarding history).'
          },
          {
            question: 'この件（けん）___は、私（わたし）から説明（せつめい）いたします。',
            options: ['に関して', 'に関する', 'において', 'によって'],
            correctIndex: 0,
            explanation: 'Mid-sentence connection to the predicate uses に関して (often followed by は for emphasis: に関しては).'
          }
        ],
        realLifeUsage: 'Standard corporate email opening: 「〜の件に関してご連絡いたしました」 (I am contacting you regarding the matter of...).'
      },
      {
        id: 'n3-l2-t5',
        pattern: '〜にとって',
        pronunciation: 'ni totte',
        meaning: 'For / From the standpoint of',
        isImplemented: true,
        whenAndWhy: 'Used to express evaluation, judgment, or importance from the perspective or standpoint of a specific person, organization, or thing.',
        explanation: 'Attach にとって to a noun (usually a person or group). It translates to "For [Noun]..." or "From the perspective of [Noun]...". The phrase that follows usually contains an adjective evaluating the situation (e.g., important, difficult, easy, necessary).',
        formation: {
          formula: 'Noun + にとって',
          rules: [
            'Noun + にとって (e.g. 私にとって - For me)',
            'Can be followed by は for emphasis: Noun + にとっては'
          ]
        },
        conjugations: {
          headers: ['Standpoint', 'Structure', 'Translation'],
          rows: [
            ['I / Me', '私にとって', 'For me...'],
            ['Students', '学生にとって', 'For students...'],
            ['Modern people', '現代人にとって', 'For modern people...']
          ]
        },
        notes: 'It is almost always followed by an evaluative word (大切 - important, 難しい - difficult, 必要 - necessary).',
        mistakes: 'Do not use にとって with verbs of action or giving/receiving. ✕ 私にとってプレゼントをくれました (He gave a present "for" me). ◯ 私にプレゼントをくれました. にとって is ONLY for viewpoints and evaluations.',
        comparison: {
          similarPattern: '〜に対して (Towards)',
          difference: '〜に対して shows an action directed *towards* an object/person (Be kind towards him). 〜にとって shows the *standpoint* from which an evaluation is made (For him, kindness is important).'
        },
        memoryTips: 'To-tte sounds like "Take". If you "take" their position, how does it look?',
        examples: [
          { japanese: '私にとって、家族は一番大切なものです。', english: 'For me, family is the most important thing.', romaji: 'Watashi ni totte, kazoku wa ichiban taisetsu na mono desu.' },
          { japanese: '外国人にとって、漢字を覚えるのは難しいです。', english: 'For foreigners, memorizing kanji is difficult.', romaji: 'Gaikokujin ni totte, kanji o oboeru no wa muzukashii desu.' },
          { japanese: '子供にとって、遊びは重要な勉強です。', english: 'For children, play is important study.', romaji: 'Kodomo ni totte, asobi wa juuyou na benkyou desu.' },
          { japanese: '現代人にとって、スマートフォンは不可欠です。', english: 'For modern people, smartphones are indispensable.', romaji: 'Gendaijin ni totte, sumaatofon wa fukaketsu desu.' },
          { japanese: 'この写真は、私にとって宝物です。', english: 'This photo is a treasure to me.', romaji: 'Kono shashin wa, watashi ni totte takaramono desu.' },
          { japanese: '学生にとって、試験の日はとてもストレスです。', english: 'For students, exam day is very stressful.', romaji: 'Gakusei ni totte, shiken no hi wa totemo sutoresu desu.' },
          { japanese: '百万円は、彼にとっては安いかもしれませんが、私にとっては大金です。', english: 'One million yen might be cheap for him, but for me it is a huge amount of money.', romaji: 'Hyakumanen wa, kare ni totte wa yasui kamo shiremasen ga, watashi ni totte wa taikin desu.' },
          { japanese: '犬にとって、チョコレートは毒です。', english: 'For dogs, chocolate is poison.', romaji: 'Inu ni totte, chokoreeto wa doku desu.' },
          { japanese: '環境問題は、地球にとって大きな課題です。', english: 'Environmental issues are a major challenge for the Earth.', romaji: 'Kankyou mondai wa, chikyuu ni totte ookina kadai desu.' },
          { japanese: 'あなたにとって、幸せとは何ですか。', english: 'For you, what is happiness?', romaji: 'Anata ni totte, shiawase to wa nan desu ka.' }
        ],
        conversation: {
          context: 'Discussing values.',
          dialogue: [
            { speaker: 'ケン', japanese: 'マリーさんにとって、一番大切なものは何ですか。', english: 'For you Marie, what is the most important thing?' },
            { speaker: 'マリー', japanese: '私にとって、一番大切なものは時間です。', english: 'For me, the most important thing is time.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "For me, Japanese is difficult."',
            'Translate: "This book is necessary (必要 - hitsuyou) for students."',
            'Correct the error: 「母にとって花を買いました。」'
          ],
          answers: [
            '私にとって、日本語は難しいです。 (Watashi ni totte, Nihongo wa muzukashii desu.)',
            '学生にとって、この本は必要です。 (Gakusei ni totte, kono hon wa hitsuyou desu.)',
            'Cannot use にとって for giving actions. Correct: 「母に花を買いました。」'
          ]
        },
        jlptQuestions: [
          {
            question: '若（わか）い人（ひと）___、車（くるま）を持（も）つことはあまり重要（じゅうよう）ではないようだ。',
            options: ['にとって', 'について', 'に対して', 'によって'],
            correctIndex: 0,
            explanation: 'The sentence gives an evaluation (not important) from the perspective of a specific demographic (young people). にとって fits perfectly.'
          },
          {
            question: 'この町（まち）の人々（ひとびと）に___、この川（かわ）は命（いのち）のように大切（たいせつ）だ。',
            options: ['よって', 'ついて', 'とって', 'かんして'],
            correctIndex: 2,
            explanation: 'Evaluating the river as "important like life" from the standpoint of the townspeople. にとって is used.'
          }
        ],
        realLifeUsage: 'A classic interview question: 「あなたにとって仕事とは何ですか」 (What is work to you?).'
      }
    ]
  },
  {
    lessonNum: 3,
    title: 'Focus & Intentional Limits',
    description: 'Discuss limits, rules, and contrast.',
    topics: [
      {
        id: 'n3-l3-t1',
        pattern: '〜ばかり',
        pronunciation: 'bakari',
        meaning: 'Nothing but / Only / Always doing',
        isImplemented: true,
        whenAndWhy: 'Used to express that someone does one thing continuously to the exclusion of other things, often with a slight tone of criticism or exasperation.',
        explanation: 'Attach ばかり (bakari) to a noun or the te-form of a verb. When attached to a noun, it means "nothing but [Noun]". When attached to a verb, it takes the form 〜てばかりいる (te-bakari iru), meaning "doing nothing but [Verb]".',
        formation: {
          formula: 'Noun + ばかり / Verb (te-form) + ばかりいる',
          rules: [
            'Noun + ばかり (e.g. 肉ばかり - nothing but meat)',
            'Verb (te-form) + ばかりいる (e.g. 食べてばかりいる - doing nothing but eating)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Word', 'Bakari Form', 'Translation'],
          rows: [
            ['Noun', 'ゲーム (geemu)', 'ゲームばかり', 'Nothing but games'],
            ['Verb', '遊ぶ (asobu)', '遊んでばかりいる', 'Doing nothing but playing']
          ]
        },
        notes: 'It can also be used to mean "just finished" when attached to the ta-form (e.g. 起きたばかり - just woke up), which is an N4 grammar point. In N3, the focus is on the "nothing but" usage.',
        mistakes: 'Do not confuse ばかり (nothing but / always) with だけ (only). だけ is a neutral statement of limit (I only have 100 yen). ばかり implies frequency, repetition, or an overwhelming amount (He eats nothing but meat).',
        comparison: {
          similarPattern: '〜だけ (Only)',
          difference: '野菜だけ食べる (I eat only vegetables - neutral fact). 肉ばかり食べる (He eats nothing but meat - emphasizes imbalance, often critical).'
        },
        memoryTips: 'Bakari sounds like "bakery". If you eat nothing but bakery bread, you will get fat.',
        examples: [
          { japanese: '弟は毎日ゲームばかりしています。', english: 'My younger brother does nothing but play games every day.', romaji: 'Otouto wa mainichi geemu bakari shite imasu.' },
          { japanese: '彼は肉ばかり食べて、野菜を全然食べません。', english: 'He eats nothing but meat and does not eat vegetables at all.', romaji: 'Kare wa niku bakari tabete, yasai o zenzen tabemasen.' },
          { japanese: '最近、雨ばかり降っています。', english: 'Recently, it has been doing nothing but raining.', romaji: 'Saikin, ame bakari futte imasu.' },
          { japanese: '休みの日は、寝てばかりいます。', english: 'On my days off, I do nothing but sleep.', romaji: 'Yasumi no hi wa, nete bakari imasu.' },
          { japanese: 'うちの猫は、食べてばかりで全然動きません。', english: 'Our cat does nothing but eat and does not move at all.', romaji: 'Uchi no neko wa, tabete bakari de zenzen ugokimasen.' },
          { japanese: '文句ばかり言わないで、手伝ってください。', english: 'Don\'t just complain all the time; please help.', romaji: 'Monku bakari iwanaide, tetsudatte kudasai.' },
          { japanese: 'お菓子ばかり食べていると、虫歯になりますよ。', english: 'If you eat nothing but sweets, you will get cavities.', romaji: 'Okashi bakari tabete iru to, mushiba ni narimasu yo.' },
          { japanese: '彼女はブランドのバッグばかり持っています。', english: 'She has nothing but brand-name bags.', romaji: 'Kanojo wa burando no baggu bakari motte imasu.' },
          { japanese: '失敗してばかりで、自信がなくなりました。', english: 'Because I do nothing but fail, I lost my confidence.', romaji: 'Shippai shite bakari de, jishin ga nakunarimashita.' },
          { japanese: 'テレビを見てばかりいないで、勉強しなさい。', english: 'Don\'t do nothing but watch TV; study.', romaji: 'Terebi o mite bakari inaide, benkyou shinasai.' }
        ],
        conversation: {
          context: 'A mother scolding her child.',
          dialogue: [
            { speaker: '母', japanese: 'ケン、またゲームをしているの？遊んでばかりいないで、宿題をしなさい。', english: 'Ken, are you playing games again? Don\'t do nothing but play; do your homework.' },
            { speaker: 'ケン', japanese: 'わかったよ。今やろうとしていたところだよ。（N3 L2, N3 L1 combined!）', english: 'I get it. I was just about to try and do it right now.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "He drinks nothing but beer (ビール)."',
            'Translate: "She does nothing but cry (泣く - naku)."',
            'Combine 遊ぶ (to play) with ばかりいる.'
          ],
          answers: [
            '彼はビールばかり飲んでいます。 (Kare wa biiru bakari nonde imasu.)',
            '彼女は泣いてばかりいます。 (Kanojo wa naite bakari imasu.)',
            '遊んでばかりいる (Asonde bakari iru)'
          ]
        },
        jlptQuestions: [
          {
            question: '息子（むすこ）は毎日（まいにち）マンガを___ばかりいて、全然（ぜんぜん）勉強しません。',
            options: ['読む', '読んで', '読んだ', '読み'],
            correctIndex: 1,
            explanation: 'To express "doing nothing but [verb]", you must use the te-form of the verb + ばかりいる. 読む -> 読んで.'
          },
          {
            question: 'あのレストランは高（たか）い___で、あまり美味（おい）しくない。',
            options: ['だけ', 'ばかり', 'しか', 'こそ'],
            correctIndex: 1,
            explanation: 'When listing negative/imbalanced traits, ばかり is used. 高いばかりで means "It is nothing but expensive (all price, no quality)".'
          }
        ],
        realLifeUsage: 'Often used by parents or bosses to criticize behavior: 「遊んでばっかり！」 (You do nothing but play!). Note: ばっかり is the spoken emphasis of ばかり.'
      },
      {
        id: 'n3-l3-t2',
        pattern: '〜わけにはいかない',
        pronunciation: 'wake ni wa ikanai',
        meaning: 'Cannot afford to / Must not',
        isImplemented: true,
        whenAndWhy: 'Used when you want to do something, or could physically do it, but you feel you MUST NOT do it because of social morals, common sense, duty, or psychological pressure.',
        explanation: 'Attach わけにはいかない (wake ni wa ikanai) to the dictionary form of a verb to mean "cannot afford to do". Attach it to the nai-form of a verb to mean "cannot afford NOT to do (must do)".',
        formation: {
          formula: 'Verb (Dictionary / nai-form) + わけにはいかない',
          rules: [
            'Cannot afford to do: Dictionary form + わけにはいかない',
            'Cannot afford NOT to do (must do): nai-form + わけにはいかない'
          ]
        },
        conjugations: {
          headers: ['Form', 'Structure', 'Translation'],
          rows: [
            ['Dictionary', '休むわけにはいかない', 'I cannot afford to rest (I must work)'],
            ['nai-form', '行かないわけにはいかない', 'I cannot afford not to go (I must go)']
          ]
        },
        notes: 'Unlike 〜ことができない (which means you lack the physical ability or permission), this grammar is purely about psychological or social restraint. E.g., "I can physically skip work, but my boss is relying on me, so I cannot afford to skip."',
        mistakes: 'Do not use this for physical impossibility. ✕ 泳げないから、泳ぐわけにはいかない (Wrong because you physically cannot). ◯ 明日はテストだから、遊ぶわけにはいかない (Right because it is a moral/duty choice).',
        comparison: {
          similarPattern: '〜てはいけない (Must not)',
          difference: '〜てはいけない is a strict external rule (Do not enter). 〜わけにはいかない is an internal feeling of duty or social pressure (I cannot just leave my friends behind).'
        },
        memoryTips: 'Wake = reason. Ikanai = doesn\'t go. "The reason doesn\'t go (fly) with society." -> Society won\'t accept that reason, so I can\'t do it.',
        examples: [
          { japanese: '明日は大事な試験があるので、今日は休むわけにはいきません。', english: 'Because there is an important exam tomorrow, I cannot afford to rest today.', romaji: 'Ashita wa daiji na shiken ga aru node, kyou wa yasumu wake ni wa ikimasen.' },
          { japanese: '社長の命令なので、従わないわけにはいかない。', english: 'Because it is the president\'s order, I cannot afford not to obey (I must obey).', romaji: 'Shachou no meirei na node, shitagawanai wake ni wa ikanai.' },
          { japanese: '車で来たので、お酒を飲むわけにはいきません。', english: 'Because I came by car, I cannot afford to drink alcohol (it\'s socially irresponsible).', romaji: 'Kuruma de kita node, osake o nomu wake ni wa ikimasen.' },
          { japanese: '親友の結婚式だから、出席しないわけにはいかない。', english: 'Because it is my best friend\'s wedding, I cannot afford not to attend.', romaji: 'Shinyuu no kekkonshiki da kara, shusseki shinai wake ni wa ikanai.' },
          { japanese: 'みんなが頑張っているのに、私だけ帰るわけにはいきません。', english: 'Even though everyone is working hard, I cannot afford to go home by myself.', romaji: 'Minna ga ganbatte iru noni, watashi dake kaeru wake ni wa ikimasen.' },
          { japanese: '約束したから、嘘をつくわけにはいかない。', english: 'Because I promised, I cannot afford to lie.', romaji: 'Yakusoku shita kara, uso o tsuku wake ni wa ikanai.' },
          { japanese: 'お金がないからといって、盗むわけにはいかない。', english: 'Even if I have no money, I cannot afford to steal.', romaji: 'Okane ga nai kara to itte, nusumu wake ni wa ikanai.' },
          { japanese: '熱があるが、今日は会議で発表するから、休むわけにはいかない。', english: 'I have a fever, but because I am presenting at a meeting today, I cannot afford to rest.', romaji: 'Netsu ga aru ga, kyou wa kaigi de happyou suru kara, yasumu wake ni wa ikanai.' },
          { japanese: 'いくら辛くても、途中で諦めるわけにはいかない。', english: 'No matter how tough it is, I cannot afford to give up halfway.', romaji: 'Ikura tsurakutemo, tochu de akirameru wake ni wa ikanai.' },
          { japanese: '先輩が奢ってくれると言っているので、払うわけにはいかない。', english: 'Because my senior says he will treat me, I cannot afford to pay (it would be rude).', romaji: 'Senpai ga ogotte kureru to itte iru node, harau wake ni wa ikanai.' }
        ],
        conversation: {
          context: 'At a drinking party (nomikai).',
          dialogue: [
            { speaker: '同僚', japanese: 'ビール、もう一杯どうですか。', english: 'How about another glass of beer?' },
            { speaker: 'ジョン', japanese: 'すみません、今日は車で来ているので、飲むわけにはいかないんです。', english: 'I am sorry, because I came by car today, I cannot afford to drink.' },
            { speaker: '同僚', japanese: 'ああ、それは仕方ないですね。ウーロン茶にしますか。', english: 'Ah, that cannot be helped. Shall we get oolong tea?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Because I have a test, I cannot afford to play (遊ぶ)."',
            'Translate: "I cannot afford NOT to go (行かない)."',
            'Why is it wrong to say: "I broke my leg, so I cannot afford to run (走るわけにはいかない)"?'
          ],
          answers: [
            'テストがあるから、遊ぶわけにはいかない。 (Tesuto ga aru kara, asobu wake ni wa ikanai.)',
            '行かないわけにはいかない。 (Ikanai wake ni wa ikanai.)',
            'Because breaking a leg is a physical impossibility. You should say 走ることができない (Cannot run).'
          ]
        },
        jlptQuestions: [
          {
            question: '今日（きょう）は車（くるま）で来（き）ましたから、お酒（さけ）を___わけにはいきません。',
            options: ['飲む', '飲んで', '飲まない', '飲まなく'],
            correctIndex: 0,
            explanation: 'You cannot afford to DO the action. The dictionary form is required. 飲む + わけにはいきません.'
          },
          {
            question: 'お世話（せわ）になった先生（せんせい）のお葬式（そうしき）だから、行か___わけにはいかない。',
            options: ['ない', 'ず', 'なくて', 'なく'],
            correctIndex: 0,
            explanation: 'Double negative for duty: "cannot afford NOT to go". 行かない + わけにはいかない.'
          }
        ],
        realLifeUsage: 'Often used by responsible adults to explain why they must suffer through a hardship instead of taking the easy way out.'
      },
      {
        id: 'n3-l3-t3',
        pattern: '〜っけ',
        pronunciation: 'kke',
        meaning: 'Recalling / What was it again?',
        isImplemented: true,
        whenAndWhy: 'Used in casual speech when the speaker is trying to recall something they forgot, or confirming something they are unsure they remember correctly.',
        explanation: 'Attach っけ (kke) to the past tense (ta-form) of verbs or adjectives. It translates to "...again?" (e.g. What was his name again?). It is strictly conversational and friendly.',
        formation: {
          formula: 'Past Tense (ta-form) + っけ',
          rules: [
            'Verbs: ta-form + っけ (e.g. 買ったっけ - did I buy it again?)',
            'Nouns/na-adjectives: だ/だった + っけ (e.g. 月曜日だっけ - was it Monday again?)',
            'Also attaches to です/ました in polite speech (e.g. 買いましたっけ).'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Ta-form', 'Kke Form', 'Translation'],
          rows: [
            ['Verb', '言った (itta)', '言ったっけ', 'Did I say that again?'],
            ['Noun', '明日 (ashita)', '明日だっけ / 明日だったっけ', 'Was it tomorrow again?'],
            ['Question word', '何 (nan)', '何だっけ', 'What was it again?']
          ]
        },
        notes: 'Can also be used as a monologue when you are searching your own memory (e.g. 鍵、どこに置いたっけな… - Where did I put the keys again...).',
        mistakes: 'Do not use this with superiors or in formal emails. It is a colloquialism for talking to yourself, friends, or family.',
        comparison: {
          similarPattern: '〜ですか (Question)',
          difference: '〜ですか asks for new information. 〜っけ asks for confirmation of information you already knew but temporarily forgot.'
        },
        memoryTips: 'Kke sounds like a little hiccup in your memory. "Ah... kke?"',
        examples: [
          { japanese: 'あの人の名前、何だっけ？', english: 'What was that person\'s name again?', romaji: 'Ano hito no namae, nan dakke?' },
          { japanese: '明日の会議は何時からだっけ？', english: 'What time is tomorrow\'s meeting again?', romaji: 'Ashita no kaigi wa nanji kara dakke?' },
          { japanese: 'テストは来週の月曜日だったっけ？', english: 'Was the test next week Monday again?', romaji: 'Tesuto wa raishuu no getsuyoubi datta kke?' },
          { japanese: 'あれ、私、鍵を閉めたっけ？', english: 'Huh, did I lock the door again? (Talking to oneself)', romaji: 'Are, watashi, kagi o shimeta kke?' },
          { japanese: '昨日の夜、何を食べたっけ…。', english: 'What did I eat last night again...', romaji: 'Kinou no yoru, nani o tabeta kke...' },
          { japanese: 'この漢字、どう書くんだっけ？', english: 'How do you write this kanji again?', romaji: 'Kono kanji, dou kakun dakke?' },
          { japanese: '山田さんの電話番号、知っていたっけ？', english: 'Did you know Mr. Yamada\'s phone number again? (Asking a friend to confirm)', romaji: 'Yamada-san no denwa bangou, shitte ita kke?' },
          { japanese: '今日はゴミを出す日だっけ？', english: 'Was today the day to take out the trash again?', romaji: 'Kyou wa gomi o dasu hi dakke?' },
          { japanese: 'あの映画、もう見たっけ？', english: 'Did we already see that movie again?', romaji: 'Ano eiga, mou mita kke?' },
          { japanese: '私がそんなこと言ったっけ？', english: 'Did I say such a thing? (I don\'t remember)', romaji: 'Watashi ga sonna koto itta kke?' }
        ],
        conversation: {
          context: 'Two friends talking.',
          dialogue: [
            { speaker: 'ケン', japanese: '週末のパーティーだけど、場所はどこだっけ？', english: 'About the weekend party, where was the location again?' },
            { speaker: 'マリー', japanese: '新宿のイタリアンレストランだよ。', english: 'It is the Italian restaurant in Shinjuku.' },
            { speaker: 'ケン', japanese: 'ああ、そうだそうだ。思い出した。', english: 'Ah, right, right. I remembered.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "What was it again? (何 - nan)"',
            'Translate: "Did I buy it? (買う - kau)"',
            'Translate: "Was it tomorrow? (明日 - ashita)"'
          ],
          answers: [
            '何だっけ？ (Nan dakke?)',
            '買ったっけ？ (Katta kke?)',
            '明日だっけ？ / 明日だったっけ？ (Ashita dakke? / Ashita datta kke?)'
          ]
        },
        jlptQuestions: [
          {
            question: '「あれ、私（わたし）の傘（かさ）、どこに___っけ。」',
            options: ['置く', '置いて', '置いた', '置き'],
            correctIndex: 2,
            explanation: 'To express "where did I put it again?", use the ta-form (past tense) + っけ. 置く -> 置いた + っけ.'
          },
          {
            question: '田中さんの誕生日は、いつ___っけ？',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 0,
            explanation: 'With a question word like いつ (when) functioning as a noun, use the plain copula だ. いつだっけ (When was it again?).'
          }
        ],
        realLifeUsage: 'The most natural way to ask a friend to remind you of something: 「明日何時だっけ？」 (What time tomorrow again?).'
      },
      {
        id: 'n3-l3-t4',
        pattern: '〜かける',
        pronunciation: 'kakeru',
        meaning: 'Half-done / In the middle of',
        isImplemented: true,
        whenAndWhy: 'Used to express that an action was started but has not yet been completed, leaving it in a half-finished state.',
        explanation: 'Attach かける (or かけ / かけの) to the masu-stem of a verb. It literally means the action is hanging in the middle.',
        formation: {
          formula: 'Verb (masu-stem) + かける',
          rules: [
            'Verb usage: masu-stem + かける (e.g. 食べかける - to start eating and stop)',
            'Noun usage: masu-stem + かけ (e.g. 食べかけ - half-eaten state)',
            'Modifying noun: masu-stem + かけの + Noun (e.g. 食べかけのリンゴ - a half-eaten apple)'
          ]
        },
        conjugations: {
          headers: ['Verb', 'masu-stem', 'Half-done Form', 'Translation'],
          rows: [
            ['読む (nomu)', '読み', '読みかけの本', 'A half-read book'],
            ['飲む (nomu)', '飲み', '飲みかけのジュース', 'A half-drunk juice'],
            ['腐る (kusaru)', '腐り', '腐りかける', 'To begin to rot']
          ]
        },
        notes: 'It can also mean "about to happen" for non-volitional verbs (e.g. 溺れかける - to almost drown / be in the middle of drowning).',
        mistakes: 'Do not use this for actions that are instantly completed and cannot be paused (e.g. ✕ 死にかけの本 - wrong context. But 死にかける means "to be on the verge of death").',
        comparison: {
          similarPattern: '〜途中 (In the middle of)',
          difference: '〜途中 emphasizes the timeframe (While I was going...). 〜かけ emphasizes the physical half-finished state of an object (A half-eaten cake, a half-read book).'
        },
        memoryTips: 'Kakeru means "to hang". The action is hanging in mid-air, incomplete.',
        examples: [
          { japanese: 'テーブルの上に、食べかけのケーキがあります。', english: 'On the table, there is a half-eaten cake.', romaji: 'Teeburu no ue ni, tabekake no keeki ga arimasu.' },
          { japanese: '読みかけの本を開いたまま寝てしまった。', english: 'I fell asleep leaving the half-read book open.', romaji: 'Yomikake no hon o hiraita mama nete shimatta.' },
          { japanese: '彼は何か言いかけたが、やめた。', english: 'He started to say something, but stopped.', romaji: 'Kare wa nanika iikaketa ga, yameta.' },
          { japanese: '机の上に書きかけの手紙がある。', english: 'There is a half-written letter on the desk.', romaji: 'Tsukue no ue ni kakikake no tegami ga aru.' },
          { japanese: 'お風呂に入りかけた時、電話が鳴った。', english: 'Just when I had started to get in the bath, the phone rang.', romaji: 'Ofuro ni hairikaketa toki, denwa ga natta.' },
          { japanese: 'この牛乳は腐りかけているから、飲まないほうがいい。', english: 'This milk is starting to rot, so you had better not drink it.', romaji: 'Kono gyuunyuu wa kusarikakete iru kara, nomanai hou ga ii.' },
          { japanese: '編みかけのセーターが押し入れにある。', english: 'There is a half-knitted sweater in the closet.', romaji: 'Amikake no seetaa ga oshiire ni aru.' },
          { japanese: '海で溺れかけたところを、助けられた。', english: 'I was saved when I was on the verge of drowning in the sea.', romaji: 'Umi de oborekaketa tokoro o, tasukerareta.' },
          { japanese: '飲みかけのジュースを冷蔵庫に入れた。', english: 'I put the half-drunk juice in the refrigerator.', romaji: 'Nomikake no juusu o reizouko ni ireta.' },
          { japanese: '仕事をやりかけで帰るのはよくない。', english: 'It is not good to go home leaving your work half-done.', romaji: 'Shigoto o yarikake de kaeru no wa yoku nai.' }
        ],
        conversation: {
          context: 'At home.',
          dialogue: [
            { speaker: '母', japanese: 'この飲みかけのコーヒー、捨ててもいい？', english: 'This half-drunk coffee, is it okay if I throw it away?' },
            { speaker: '息子', japanese: 'あ、まだ飲むから捨てないで！', english: 'Ah, I am still going to drink it so don\'t throw it away!' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "A half-eaten (食べる) apple (リンゴ)."',
            'Translate: "A half-written (書く) report."',
            'Combine 言う (to say) + かける: "Started to say..."'
          ],
          answers: [
            '食べかけのリンゴ (Tabekake no ringo)',
            '書きかけのレポート (Kakikake no repooto)',
            '言いかける (Iikakeru)'
          ]
        },
        jlptQuestions: [
          {
            question: 'テーブルの上に、___かけのパンがある。',
            options: ['食べる', '食べて', '食べ', '食べた'],
            correctIndex: 2,
            explanation: 'The grammar requires the masu-stem of the verb. 食べます -> 食べ + かけ.'
          },
          {
            question: '宿題を___かけたまま、遊（あそ）びに行（い）ってしまった。',
            options: ['する', 'し', 'して', 'やっ'],
            correctIndex: 3,
            explanation: 'やる (to do) becomes やり (masu-stem). Wait, options are する, し, して, やっ. The masu-stem of やる is やり. But wait, if the verb is する, the masu-stem is し. So しかけた (started to do) is correct. Option 1 is し.'
          }
        ],
        realLifeUsage: 'Often used to scold someone: 「やりかけで放置しないで！」 (Don\'t leave things half-done!).'
      },
      {
        id: 'n3-l3-t5',
        pattern: '〜に対して',
        pronunciation: 'ni taishite',
        meaning: 'Towards / In contrast to',
        isImplemented: true,
        whenAndWhy: 'Used in two distinct ways: 1) To show an action or attitude directed TOWARDS a specific target (person/issue). 2) To contrast two different things (Whereas A is..., B is...).',
        explanation: 'Attach に対して (ni taishite) to a noun. When modifying another noun, it becomes に対する (ni taisuru).',
        formation: {
          formula: 'Noun + に対して',
          rules: [
            'Target action: Noun + に対して (e.g. 先生に対して - towards the teacher)',
            'Contrast: Noun 1 は〜のに対して、Noun 2 は〜 (e.g. 兄は静かなのに対して、弟はうるさい - Whereas the older brother is quiet, the younger is loud)',
            'Noun modifier: Noun + に対する + Noun (e.g. お客様に対する態度 - attitude towards customers)'
          ]
        },
        conjugations: {
          headers: ['Usage', 'Structure', 'Translation'],
          rows: [
            ['Target', '彼に対して', 'Towards him'],
            ['Contrast', '東京に対して、大阪は…', 'In contrast to Tokyo, Osaka is...'],
            ['Noun Modifier', '質問に対する答え', 'Answer to (towards) the question']
          ]
        },
        notes: 'In the "contrast" usage, if you attach it to a sentence, you must nominalize it with の (e.g. 姉がよく勉強するのに対して - In contrast to the fact that my older sister studies a lot...).',
        mistakes: 'Do not confuse with 〜について (about). 質問について考える (Think ABOUT the question). 質問に対して答える (Answer TOWARDS the question).',
        comparison: {
          similarPattern: '〜にとって (For / Standpoint)',
          difference: '学生にとって (From the standpoint of students). 学生に対して (Directed towards students - e.g. The teacher was strict towards the students).'
        },
        memoryTips: 'Tai (対) means "versus" or "facing". You are either facing a target (towards) or facing off against an opposite (contrast).',
        examples: [
          { japanese: 'お客様に対して、丁寧な言葉を使いなさい。', english: 'Use polite language towards customers.', romaji: 'Okyakusama ni taishite, teinei na kotoba o tsukainasai.' },
          { japanese: '彼の提案に対して、みんなが反対した。', english: 'Everyone opposed towards (against) his proposal.', romaji: 'Kare no teian ni taishite, minna ga hantai shita.' },
          { japanese: '目上の人に対する態度の悪さに驚いた。', english: 'I was surprised by his bad attitude towards superiors.', romaji: 'Meue no hito ni taisuru taido no warusa ni odoroita.' },
          { japanese: '兄はスポーツが得意なのに対して、弟は音楽が得意だ。', english: 'In contrast to the older brother being good at sports, the younger brother is good at music.', romaji: 'Ani wa supootsu ga tokui na no ni taishite, otouto wa ongaku ga tokui da.' },
          { japanese: '日本の夏が蒸し暑いのに対して、ハワイの夏は涼しい。', english: 'Whereas Japanese summers are humid, Hawaiian summers are cool.', romaji: 'Nihon no natsu ga mushiatsui no ni taishite, Hawai no natsu wa suzushii.' },
          { japanese: '政府の決定に対して、多くの市民が抗議した。', english: 'Many citizens protested against the government\'s decision.', romaji: 'Seifu no kettei ni taishite, ooku no shimin ga kougi shita.' },
          { japanese: '質問に対する答えを書いてください。', english: 'Please write the answer to the question.', romaji: 'Shitsumon ni taisuru kotae o kaite kudasai.' },
          { japanese: '子供に対して怒ってばかりいるのはよくない。', english: 'Being constantly angry towards children is not good.', romaji: 'Kodomo ni taishite okotte bakari iru no wa yoku nai.' },
          { japanese: '外は寒いのに対して、家の中はとても暖かい。', english: 'In contrast to the outside being cold, the inside of the house is very warm.', romaji: 'Soto wa samui no ni taishite, ie no naka wa totemo atatakai.' },
          { japanese: '女性の参加者が多いのに対して、男性は少なかった。', english: 'Whereas there were many female participants, there were few males.', romaji: 'Josei no sankasha ga ooi no ni taishite, dansei wa sukunakatta.' }
        ],
        conversation: {
          context: 'Customer service training.',
          dialogue: [
            { speaker: '店長', japanese: 'クレームに対しては、まず謝罪することが大切です。', english: 'Towards complaints, it is important to first apologize.' },
            { speaker: '店員', japanese: 'はい、お客様に対する態度に気をつけます。', english: 'Yes, I will be careful about my attitude towards customers.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Attitude (態度) towards teachers (先生)."',
            'Translate: "Whereas dogs (犬) are active, cats (猫) sleep a lot."',
            'Translate: "Protest (抗議する) against the rules (ルール)."'
          ],
          answers: [
            '先生に対する態度 (Sensei ni taisuru taido)',
            '犬が活発なのに対して、猫はよく眠る。 (Inu ga kappatsu na no ni taishite, neko wa yoku nemuru.)',
            'ルールに対して抗議する (Ruuru ni taishite kougi suru)'
          ]
        },
        jlptQuestions: [
          {
            question: '親（おや）の期待（きたい）に___、彼（かれ）は大学（だいがく）を辞（や）めてしまった。',
            options: ['とって', '関して', '対して', 'おいて'],
            correctIndex: 2,
            explanation: 'He quit university *in opposition/contrast to* his parents\' expectations. に対して fits the meaning of facing against or in contrast to.'
          },
          {
            question: '兄（あに）は外交的（がいこうてき）___対（たい）して、弟（おとうと）は内向的（ないこうてき）だ。',
            options: ['だに', 'なに', 'のに', 'なのは'],
            correctIndex: 2,
            explanation: '外交的 is a na-adjective. To use it in a sentence modifying に対して, you add な and then nominalize it with の. 外交的なのに対して.'
          }
        ],
        realLifeUsage: 'Essential for formal writing or expressing opinions in debates.'
      }
    ]
  },
  {
    lessonNum: 4,
    title: 'Reporting & States of Time',
    description: 'Explore temporal ranges and hearsay definitions.',
    topics: [
      {
        id: 'n3-l4-t1',
        pattern: '〜ということだ',
        pronunciation: 'toiukoto da',
        meaning: 'It is reported that / It means that',
        isImplemented: true,
        whenAndWhy: 'Used in two main ways: 1) To relay information formally (like reading a news article or an official announcement). 2) To explain the meaning of a fact or situation ("In other words...").',
        explanation: 'Attach ということだ to the plain form of a sentence. It functions like a noun clause. For hearsay, it is slightly more formal than 〜そうです. For explanation, it often pairs with つまり (in other words).',
        formation: {
          formula: 'Plain Form + ということだ',
          rules: [
            'Verbs/Adjectives: Plain form + ということだ (e.g. 降るということだ)',
            'Nouns/na-adjectives: Add だ + ということだ (e.g. 休みだということだ)',
            'Can be made polite: ということです'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Sentence', 'Translation'],
          rows: [
            ['Hearsay / Report', 'ニュースによると、地震があったということだ。', 'According to the news, it is reported there was an earthquake.'],
            ['Explanation', 'つまり、彼は来ないということだ。', 'In other words, it means he is not coming.']
          ]
        },
        notes: 'In casual conversation, it is often shortened to 〜ってことだ (tte koto da).',
        mistakes: 'Do not use this for personal, subjective guesses. It must be based on an external report or a logical deduction from facts.',
        comparison: {
          similarPattern: '〜そうです (Hearsay)',
          difference: '〜そうです is common for everyday gossip or passing on information (I heard Tanaka is getting married). 〜ということだ is more formal and objective (It is reported that the company will merge).'
        },
        memoryTips: 'To (Quote) + iu (say) + koto (thing) + da (is). "It is the thing that is said... / It means the thing that..."',
        examples: [
          { japanese: '新聞によると、来年から税金が上がるということだ。', english: 'According to the newspaper, it is reported that taxes will rise from next year.', romaji: 'Shinbun ni yoru to, rainen kara zeikin ga agaru to iu koto da.' },
          { japanese: '社長の話では、新しいプロジェクトが始まるということです。', english: 'According to the president\'s talk, it is reported a new project will start.', romaji: 'Shachou no hanashi de wa, atarashii purojekuto ga hajimaru to iu koto desu.' },
          { japanese: 'つまり、あなたは反対だということですね。', english: 'In other words, it means you are opposed to it, right?', romaji: 'Tsumari, anata wa hantai da to iu koto desu ne.' },
          { japanese: '店が閉まっている。今日は休みだということだ。', english: 'The store is closed. That means today is a day off.', romaji: 'Mise ga shimatte iru. Kyou wa yasumi da to iu koto da.' },
          { japanese: '試験に合格したということは、大学に入れるということだ。', english: 'The fact that you passed the exam means you can enter the university.', romaji: 'Shiken ni goukaku shita to iu koto wa, daigaku ni haireru to iu koto da.' },
          { japanese: '噂では、あの二人は別れたということだ。', english: 'According to rumors, it is reported those two broke up.', romaji: 'Uwasa de wa, ano futari wa wakareta to iu koto da.' },
          { japanese: '連絡がないということは、まだ着いていないということでしょう。', english: 'The fact there is no contact probably means they haven\'t arrived yet.', romaji: 'Renraku ga nai to iu koto wa, mada tsuite inai to iu koto deshou.' },
          { japanese: '手紙によると、彼はとても元気だということです。', english: 'According to the letter, it is reported he is very healthy.', romaji: 'Tegami ni yoru to, kare wa totemo genki da to iu koto desu.' },
          { japanese: '要するに、お金が足りないということです。', english: 'To sum it up, it means we don\'t have enough money.', romaji: 'Yousuru ni, okane ga tarinai to iu koto desu.' },
          { japanese: '明日は台風が来るということなので、イベントは中止します。', english: 'Because it is reported a typhoon is coming tomorrow, we will cancel the event.', romaji: 'Ashita wa taifuu ga kuru to iu koto na node, ibento wa chuushi shimasu.' }
        ],
        conversation: {
          context: 'Discussing a company memo.',
          dialogue: [
            { speaker: '山田', japanese: '部長からのメール、見ましたか。', english: 'Did you see the email from the department head?' },
            { speaker: '鈴木', japanese: 'はい。来月の会議は中止だということですね。', english: 'Yes. It means next month\'s meeting is cancelled, right?' },
            { speaker: '山田', japanese: 'ええ、そういうことです。', english: 'Yes, that is what it means.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It is reported that he will go to America (アメリカへ行く)."',
            'Translate: "In other words (つまり), it means it is impossible (無理だ)."',
            'What particle often precedes this grammar when expressing hearsay (e.g. "According to the news")?'
          ],
          answers: [
            '彼はアメリカへ行くということです。 (Kare wa Amerika e iku to iu koto desu.)',
            'つまり、無理だということです。 (Tsumari, muri da to iu koto desu.)',
            '〜によると (ni yoru to) or 〜では (de wa)'
          ]
        },
        jlptQuestions: [
          {
            question: 'ニュースに___、明日（あした）は寒（さむ）くなるということだ。',
            options: ['ついて', '関して', '対して', 'よると'],
            correctIndex: 3,
            explanation: 'When citing a source for reported information, you use 〜によると (according to).'
          },
          {
            question: '彼（かれ）が来（こ）ないということは、パーティーは延期（えんき）___ということだ。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 0,
            explanation: '延期 (postponement) is a noun. You must attach だ before ということだ to form a complete clause. 延期だということだ.'
          }
        ],
        realLifeUsage: 'Often used by news anchors or when summarizing long explanations: 「つまり、〜ということですね」 (So, what you are saying is...).'
      },
      {
        id: 'n3-l4-t2',
        pattern: '〜にかかわらず',
        pronunciation: 'ni kakawarazu',
        meaning: 'Regardless of / Irrespective of',
        isImplemented: true,
        whenAndWhy: 'Used to state that an action, rule, or condition applies uniformly, no matter what the circumstances or variations are.',
        explanation: 'にかかわらず (ni kakawarazu) attaches to nouns that have a range of variations (e.g. age, gender, weather, size) or to opposing word pairs (e.g. going or not going, good or bad).',
        formation: {
          formula: 'Noun / V-dictionary + V-nai / Question Word + にかかわらず',
          rules: [
            'Noun + にかかわらず (e.g. 年齢にかかわらず - regardless of age)',
            'Opposite verbs: 行く行かないにかかわらず (Regardless of whether you go or not)',
            'Question word + か + にかかわらず (e.g. 誰が来るかにかかわらず - regardless of who comes)'
          ]
        },
        conjugations: {
          headers: ['Base Word', 'Structure', 'Translation'],
          rows: [
            ['性別 (gender)', '性別にかかわらず', 'Regardless of gender'],
            ['好き・嫌い', '好き嫌いにかかわらず', 'Regardless of whether you like it or hate it'],
            ['天候 (weather)', '天候にかかわらず', 'Irrespective of the weather']
          ]
        },
        notes: 'In more formal Japanese, you might see にかかわりなく. The meaning is exactly the same.',
        mistakes: 'Do not use this for personal complaints (✕ 疲れているにかかわらず、勉強した). For "even though / despite", use にもかかわらず (covered later). にかかわらず is for rules applying uniformly.',
        comparison: {
          similarPattern: '〜ても / 〜でも (Even if)',
          difference: '男でも女でも (Even if you are a man or woman). 性別にかかわらず (Regardless of gender - more formal, used in written notices or official rules).'
        },
        memoryTips: 'Kakawaru means "to relate/concern". Zu means "without". "Without concern for X" -> Regardless of X.',
        examples: [
          { japanese: 'このレストランは、昼夜にかかわらず混んでいる。', english: 'This restaurant is crowded regardless of whether it is day or night.', romaji: 'Kono resutoran wa, chuuya ni kakawarazu konde iru.' },
          { japanese: '年齢や性別にかかわらず、誰でも参加できます。', english: 'Regardless of age or gender, anyone can participate.', romaji: 'Nenrei ya seibetsu ni kakawarazu, dare demo sanka dekimasu.' },
          { japanese: '明日の試合は、天気にかかわらず行います。', english: 'Tomorrow\'s match will be held irrespective of the weather.', romaji: 'Ashita no shiai wa, tenki ni kakawarazu okonaimasu.' },
          { japanese: '経験の有無にかかわらず、社員を募集しています。', english: 'We are recruiting employees regardless of the presence or absence of experience.', romaji: 'Keiken no umu ni kakawarazu, shain o boshuu shite imasu.' },
          { japanese: '買う買わないにかかわらず、ぜひ一度見てください。', english: 'Regardless of whether you buy it or not, please definitely take a look once.', romaji: 'Kau kawanai ni kakawarazu, zehi ichido mite kudasai.' },
          { japanese: '理由にかかわらず、遅刻は認めません。', english: 'Regardless of the reason, lateness will not be accepted.', romaji: 'Riyuu ni kakawarazu, chikoku wa mitomemasen.' },
          { japanese: '成績がいい悪いにかかわらず、みんな頑張った。', english: 'Regardless of whether grades were good or bad, everyone did their best.', romaji: 'Seiseki ga ii warui ni kakawarazu, minna ganbatta.' },
          { japanese: '国籍にかかわらず、平等に扱われるべきだ。', english: 'One should be treated equally regardless of nationality.', romaji: 'Kokuseki ni kakawarazu, byoudou ni atsukawareru beki da.' },
          { japanese: 'できるできないにかかわらず、まずはやってみよう。', english: 'Regardless of whether we can or cannot do it, let\'s try it first.', romaji: 'Dekiru dekinai ni kakawarazu, mazu wa yatte miyou.' },
          { japanese: '距離にかかわらず、送料は一律５００円です。', english: 'Regardless of the distance, the shipping fee is a flat 500 yen.', romaji: 'Kyori ni kakawarazu, souryou wa ichiritsu gohyakuen desu.' }
        ],
        conversation: {
          context: 'Reading a job advertisement.',
          dialogue: [
            { speaker: 'ケン', japanese: 'このアルバイト、経験がなくても大丈夫かな。', english: 'I wonder if this part-time job is okay even without experience.' },
            { speaker: 'マリー', japanese: 'ここに、「経験の有無にかかわらず歓迎します」と書いてあるよ。', english: 'It says here, "Welcomed regardless of the presence or absence of experience."' },
            { speaker: 'ケン', japanese: '本当だ。じゃあ、応募してみよう。', english: 'It\'s true. Well then, I will try applying.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Regardless of age (年齢 - nenrei)..."',
            'Translate: "Regardless of whether you like it or hate it (好き嫌い)..."',
            'Opposite verbs: "Regardless of whether you go or not (行く行かない)..."'
          ],
          answers: [
            '年齢にかかわらず (Nenrei ni kakawarazu)',
            '好き嫌いにかかわらず (Sukikirai ni kakawarazu)',
            '行く行かないにかかわらず (Iku ikanai ni kakawarazu)'
          ]
        },
        jlptQuestions: [
          {
            question: 'このコンサートは、大人（おとな）子供（こども）に___、同（おな）じ料金（りょうきん）です。',
            options: ['関して', 'とって', '対して', 'かかわらず'],
            correctIndex: 3,
            explanation: 'The sentence means the fee is the same regardless of whether you are an adult or a child. にかかわらず is the only option that fits this "regardless" meaning.'
          },
          {
            question: '結果（けっか）が___かにかかわらず、努力（どりょく）することが大切（たいせつ）だ。',
            options: ['いい', 'よくない', 'どうか', 'どうだ'],
            correctIndex: 2,
            explanation: 'When using a question word before にかかわらず, you must use the embedded question particle か. どうか (how it is / whether it is good or not) fits perfectly: 結果がどうかにかかわらず (Regardless of how the result is).'
          }
        ],
        realLifeUsage: 'Ubiquitous on warning signs and disclaimers: 「理由のいかんにかかわらず返金しません」 (No refunds regardless of the reason).'
      },
      {
        id: 'n3-l4-t3',
        pattern: '〜おそれがある',
        pronunciation: 'osore ga aru',
        meaning: 'There is a risk / fear that',
        isImplemented: true,
        whenAndWhy: 'Used in formal announcements, news, or warnings to express the possibility of a negative, dangerous, or harmful event occurring.',
        explanation: 'おそれ (osore) means "fear" or "danger". When combined with がある, it means "there is a fear that [something bad] will happen." It attaches to the dictionary form of a verb or a noun + の.',
        formation: {
          formula: 'Verb (Dictionary) / Noun + の + おそれがある',
          rules: [
            'Verbs: Dictionary form + おそれがある (e.g. 倒れるおそれがある - risk of collapsing)',
            'Nouns: Noun + の + おそれがある (e.g. 地震のおそれがある - risk of an earthquake)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Osore ga aru form', 'Translation'],
          rows: [
            ['Verb', '遅れる (okureru)', '遅れるおそれがある', 'There is a risk of being delayed.'],
            ['Noun', '火災 (kasai)', '火災のおそれがある', 'There is a risk of fire.']
          ]
        },
        notes: 'This grammar is strictly for *bad* things. You cannot use it for good possibilities (✕ 宝くじに当たるおそれがある - There is a risk I will win the lottery).',
        mistakes: 'Do not use this in casual conversation about personal matters (✕ 私は風邪を引くおそれがある). It sounds like a news anchor. Use 〜かもしれない (I might catch a cold) instead.',
        comparison: {
          similarPattern: '〜かもしれない (Might)',
          difference: '〜かもしれない is neutral and conversational (It might rain). 〜おそれがある is formal and warns of danger (There is a risk of heavy rain / flooding).'
        },
        memoryTips: 'Osore means fear (like 恐ろしい - scary). "There is a fear that..."',
        examples: [
          { japanese: '明日は台風が来るおそれがあります。', english: 'There is a risk that a typhoon will come tomorrow.', romaji: 'Ashita wa taifuu ga kuru osore ga arimasu.' },
          { japanese: 'この病気は、他の人にうつるおそれがあります。', english: 'There is a fear that this disease will spread to other people.', romaji: 'Kono byouki wa, hoka no hito ni utsuru osore ga arimasu.' },
          { japanese: '大雨のため、土砂崩れのおそれがあります。', english: 'Due to heavy rain, there is a risk of landslides.', romaji: 'Ooame no tame, doshakuzure no osore ga arimasu.' },
          { japanese: '個人情報が漏れるおそれがある。', english: 'There is a risk that personal information will leak.', romaji: 'Kojin jouhou ga moreru osore ga aru.' },
          { japanese: '早く手術をしないと、死ぬおそれがあります。', english: 'If we don\'t operate early, there is a risk of death.', romaji: 'Hayaku shujutsu o shinai to, shinu osore ga arimasu.' },
          { japanese: '古いビルは、地震で倒れるおそれがある。', english: 'There is a fear that old buildings will collapse in an earthquake.', romaji: 'Furui biru wa, jishin de taoreru osore ga aru.' },
          { japanese: 'このままでは、会社が倒産するおそれがある。', english: 'At this rate, there is a risk the company will go bankrupt.', romaji: 'Kono mama de wa, kaisha ga tousan suru osore ga aru.' },
          { japanese: '津波のおそれがありますので、高いところへ逃げてください。', english: 'Because there is a risk of a tsunami, please flee to a high place.', romaji: 'Tsunami no osore ga arimasu node, takai tokoro e nigete kudasai.' },
          { japanese: '副作用のおそれがあるので、注意して飲んでください。', english: 'Because there is a risk of side effects, please drink (the medicine) carefully.', romaji: 'Fukusayou no osore ga aru node, chuui shite nonde kudasai.' },
          { japanese: '渋滞で、飛行機に遅れるおそれがあります。', english: 'Due to the traffic jam, there is a risk we will be late for the airplane.', romaji: 'Juutai de, hikouki ni okureru osore ga arimasu.' }
        ],
        conversation: {
          context: 'Watching the weather news.',
          dialogue: [
            { speaker: 'アナウンサー', japanese: '今夜から明日の朝にかけて、大雪になるおそれがあります。', english: 'From tonight until tomorrow morning, there is a risk of heavy snow.' },
            { speaker: '夫', japanese: '明日は会社に行けないかもしれないな。', english: 'I might not be able to go to work tomorrow.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "There is a risk of an earthquake (地震)."',
            'Translate: "There is a risk that personal information will leak (漏れる - moreru)."',
            'Is it natural to say: "試験に合格するおそれがある" (There is a risk I will pass the exam)?'
          ],
          answers: [
            '地震のおそれがあります。 (Jishin no osore ga arimasu.)',
            '個人情報が漏れるおそれがあります。 (Kojin jouhou ga moreru osore ga arimasu.)',
            'No, passing an exam is a good thing. You should only use おそれがある for bad things.'
          ]
        },
        jlptQuestions: [
          {
            question: 'この薬（くすり）は、胃（い）を悪（わる）くする___があります。',
            options: ['ところ', 'はず', 'おそれ', 'わけ'],
            correctIndex: 2,
            explanation: 'Ruining one\'s stomach is a negative side effect/danger. おそれ (fear/risk) fits the formal warning context.'
          },
          {
            question: '台風（たいふう）の___がありますので、海（うみ）に近（ちか）づかないでください。',
            options: ['おそれ', 'こと', 'ため', 'つもり'],
            correctIndex: 0,
            explanation: '台風 is a noun representing a natural disaster. 台風のおそれがあります means "there is a risk of a typhoon".'
          }
        ],
        realLifeUsage: 'Heard constantly during natural disaster broadcasts (typhoons, earthquakes) on Japanese TV or emergency phone alerts.'
      },
      {
        id: 'n3-l4-t4',
        pattern: '〜うちに',
        pronunciation: 'uchi ni',
        meaning: 'While / Before state changes',
        isImplemented: true,
        whenAndWhy: 'Used to express that you must do something *while* a certain condition exists, because if you wait, the condition will change and you won\'t be able to do it anymore.',
        explanation: 'うち (uchi) means "inside" or "within" a time frame. It attaches to verbs, adjectives, and nouns. It translates to "While [condition lasts]..." or "Before [condition changes]...".',
        formation: {
          formula: 'Modifier + うちに',
          rules: [
            'Verbs (te-iru / nai): 忘れないうちに (before I forget), 日本にいるうちに (while I am in Japan)',
            'i-adjectives: 若いうちに (while young), 暖かいうちに (while warm)',
            'na-adjectives: 元気なうちに (while healthy)',
            'Nouns: 独身のうちに (while single)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Base Word', 'Uchi ni Form', 'Translation'],
          rows: [
            ['Verb (Negative)', '忘れない (wasurenai)', '忘れないうちに', 'Before I forget'],
            ['i-adjective', '熱い (atsui)', '熱いうちに', 'While it is hot'],
            ['Noun', '学生 (gakusei)', '学生のうちに', 'While being a student']
          ]
        },
        notes: 'Another usage of 〜うちに is when an unexpected change happens *during* an ongoing action. (e.g. テレビを見ているうちに、寝てしまった - While watching TV, I fell asleep without realizing it).',
        mistakes: 'Do not use this for two simultaneous intentional actions (e.g. ✕ 音楽を聞くうちに、勉強する). For that, use 〜ながら (While listening to music, I study). うちに implies a time limit or an accidental change.',
        comparison: {
          similarPattern: '〜間に (While/During)',
          difference: '間に implies a simple timeframe (While my mom was out, I played games). うちに implies urgency (While my mom is out, I MUST play games, because when she returns, I can\'t!).'
        },
        memoryTips: 'Uchi = inside. Do it INSIDE the window of opportunity.',
        examples: [
          { japanese: 'スープが熱いうちに、飲んでください。', english: 'Please drink the soup while it is hot (before it gets cold).', romaji: 'Suupu ga atsui uchi ni, nonde kudasai.' },
          { japanese: '忘れないうちに、メモをしておきます。', english: 'Before I forget, I will make a memo.', romaji: 'Wasurenai uchi ni, memo o shite okimasu.' },
          { japanese: '若いうちに、いろいろな経験をしたほうがいい。', english: 'While you are young, you had better experience various things.', romaji: 'Wakai uchi ni, iroiro na keiken o shita hou ga ii.' },
          { japanese: '雨が降らないうちに、帰りましょう。', english: 'Before it starts raining, let\'s go home.', romaji: 'Ame ga furanai uchi ni, kaerimashou.' },
          { japanese: '日本にいるうちに、富士山に登りたいです。', english: 'While I am in Japan, I want to climb Mt. Fuji.', romaji: 'Nihon ni iru uchi ni, Fujisan ni noboritai desu.' },
          { japanese: '独身のうちに、たくさん旅行したいです。', english: 'While I am single, I want to travel a lot.', romaji: 'Dokushin no uchi ni, takusan ryokou shitai desu.' },
          { japanese: '両親が元気なうちに、親孝行をしたい。', english: 'While my parents are healthy, I want to show filial piety (be good to them).', romaji: 'Ryoushin ga genki na uchi ni, oyakoukou o shitai.' },
          { japanese: '暗くならないうちに、家に着きたいです。', english: 'Before it gets dark, I want to arrive home.', romaji: 'Kurakunaranai uchi ni, ie ni tsukitai desu.' },
          { japanese: '本を読んでいるうちに、眠くなってしまった。（Accidental change）', english: 'While reading the book, I (accidentally) became sleepy.', romaji: 'Hon o yonde iru uchi ni, nemukuku natte shimatta.' },
          { japanese: '日本語を話しているうちに、上手になりました。（Accidental change）', english: 'While speaking Japanese, I naturally became good at it.', romaji: 'Nihongo o hanashite iru uchi ni, jouzu ni narimashita.' }
        ],
        conversation: {
          context: 'At a cafe.',
          dialogue: [
            { speaker: '店員', japanese: 'お待たせいたしました。ピザです。', english: 'Thank you for waiting. Here is your pizza.' },
            { speaker: 'ケン', japanese: '美味しそう！冷めないうちに食べましょう。', english: 'Looks delicious! Let\'s eat it before it gets cold.' },
            { speaker: 'マリー', japanese: 'そうですね、いただきましょう。', english: 'Indeed, let\'s eat.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "While it is bright (明るい - akarui)..."',
            'Translate: "Before I forget (忘れない - wasurenai)..."',
            'Translate: "While I am a student (学生)..."'
          ],
          answers: [
            '明るいうちに (Akarui uchi ni)',
            '忘れないうちに (Wasurenai uchi ni)',
            '学生のうちに (Gakusei no uchi ni)'
          ]
        },
        jlptQuestions: [
          {
            question: 'アイスクリームが___うちに、早（はや）く食（た）べなさい。',
            options: ['溶ける', '溶けて', '溶けない', '溶けた'],
            correctIndex: 2,
            explanation: 'To express "before it melts", you use the negative nai-form + うちに. 溶けないうちに (While it is not melting -> Before it melts).'
          },
          {
            question: '___うちに、たくさん海外旅行（かいがいりょこう）をしておきたいです。',
            options: ['若かった', '若く', '若い', '若くて'],
            correctIndex: 2,
            explanation: 'The window of opportunity is "being young". Attach the i-adjective directly in its plain present form: 若いうちに.'
          }
        ],
        realLifeUsage: 'Often said when serving food: 「温かいうちにどうぞ」 (Please go ahead while it is warm).'
      },
      {
        id: 'n3-l4-t5',
        pattern: '〜代わりに',
        pronunciation: 'kawari ni',
        meaning: 'Instead of / In exchange for',
        isImplemented: true,
        whenAndWhy: 'Used to indicate a substitution (doing A instead of B) or a trade-off/compensation (I will do A, but in return, you do B).',
        explanation: 'Attach 代わりに (kawari ni) to the dictionary form of verbs or Noun + の. It literally means "in place of".',
        formation: {
          formula: 'Verb (Dictionary) / Noun + の + 代わりに',
          rules: [
            'Nouns: Noun + の + 代わりに (e.g. 車の代わりに - instead of a car)',
            'Verbs (Substitution): Verb + 代わりに (e.g. 映画を見る代わりに - instead of watching a movie)',
            'Verbs (Compensation): Verb + 代わりに (e.g. 手伝う代わりに - in exchange for helping)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Substitution (Noun)', '社長の代わりに', 'Instead of the president'],
            ['Substitution (Verb)', 'ゲームをする代わりに', 'Instead of playing games'],
            ['Trade-off', '英語を教える代わりに', 'In exchange for teaching English']
          ]
        },
        notes: 'When used at the beginning of a sentence as a conjunction, it becomes その代わりに (In exchange for that / On the other hand).',
        mistakes: 'Do not use this for "representing" a country or abstract concept (e.g. ✕ 日本の代わりにオリンピックに出る). Use 代表して (representing) for that. 代わりに is for literal substitutions of daily tasks or items.',
        comparison: {
          similarPattern: '〜反面 (On the other hand - N3 L5)',
          difference: '〜代わりに implies a trade-off or substitution (often an action you choose). 〜反面 describes two naturally opposing characteristics of the same thing (e.g. This medicine is effective, but on the other hand, it has strong side effects).'
        },
        memoryTips: 'Kawari means "substitute".',
        examples: [
          { japanese: '今日は山田さんの代わりに、私が会議に出ます。', english: 'Today, instead of Mr. Yamada, I will attend the meeting.', romaji: 'Kyou wa Yamada-san no kawari ni, watashi ga kaigi ni demasu.' },
          { japanese: '車で行く代わりに、電車で行きましょう。', english: 'Instead of going by car, let\'s go by train.', romaji: 'Kuruma de iku kawari ni, densha de ikimashou.' },
          { japanese: '私が英語を教える代わりに、日本語を教えてくれませんか。', english: 'In exchange for me teaching you English, won\'t you teach me Japanese?', romaji: 'Watashi ga Eigo o oshieru kawari ni, Nihongo o oshiete kuremasen ka.' },
          { japanese: '日曜日に働く代わりに、月曜日は休みをもらいます。', english: 'In exchange for working on Sunday, I get Monday off.', romaji: 'Nichiyoubi ni hataraku kawari ni, getsuyoubi wa yasumi o moraimasu.' },
          { japanese: 'ご飯の代わりに、パンを食べました。', english: 'Instead of rice, I ate bread.', romaji: 'Gohan no kawari ni, pan o tabemashita.' },
          { japanese: '引越しを手伝ってあげる代わりに、晩ご飯を奢ってね。', english: 'In exchange for me helping you move, treat me to dinner, okay?', romaji: 'Hikkoshi o tetsudatte ageru kawari ni, bangohan o ogotte ne.' },
          { japanese: 'この部屋は家賃が安い代わりに、駅から遠いです。（Trade-off）', english: 'In exchange for this room having cheap rent, it is far from the station.', romaji: 'Kono heya wa yachin ga yasui kawari ni, eki kara tooi desu.' },
          { japanese: '階段を使う代わりに、エレベーターを使いました。', english: 'Instead of using the stairs, I used the elevator.', romaji: 'Kaidan o tsukau kawari ni, erebeetaa o tsukaimashita.' },
          { japanese: '社長の代わりに、挨拶をさせていただきます。', english: 'In place of the president, I will give the greeting.', romaji: 'Shachou no kawari ni, aisatsu o sasete itadakimasu.' },
          { japanese: '最近は、手紙を書く代わりにメールを使います。', english: 'Recently, instead of writing letters, I use email.', romaji: 'Saikin wa, tegami o kaku kawari ni meeru o tsukaimasu.' }
        ],
        conversation: {
          context: 'Negotiating chores with a roommate.',
          dialogue: [
            { speaker: 'ジョン', japanese: '今日、とても疲れているから、掃除をしてくれない？', english: 'I am very tired today, so could you do the cleaning for me?' },
            { speaker: 'ケン', japanese: 'いいよ。その代わりに、明日の晩ご飯はジョンが作ってね。', english: 'Sure. In exchange for that, you cook tomorrow\'s dinner, John.' },
            { speaker: 'ジョン', japanese: 'わかった、ありがとう！', english: 'Understood, thank you!' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Instead of coffee (コーヒー)..."',
            'Translate: "Instead of watching TV (テレビを見る)..."',
            'What particle connects a noun to 代わりに?'
          ],
          answers: [
            'コーヒーの代わりに (Koohii no kawari ni)',
            'テレビを見る代わりに (Terebi o miru kawari ni)',
            'の (no)'
          ]
        },
        jlptQuestions: [
          {
            question: '私（わたし）が掃除（そうじ）をする___、あなたは洗濯（せんたく）をしてください。',
            options: ['おかげで', '代わりに', 'ために', 'うちに'],
            correctIndex: 1,
            explanation: 'This is a clear trade-off/exchange of chores. "In exchange for me cleaning, you do the laundry." 代わりに is the correct choice.'
          },
          {
            question: '病気（びょうき）の母（はは）___、私（わたし）が買（か）い物（もの）に行（い）った。',
            options: ['の代わりに', 'のせいで', 'について', 'に対して'],
            correctIndex: 0,
            explanation: 'Acting as a substitute for someone. Nouns (母) require の before 代わりに. 母の代わりに.'
          }
        ],
        realLifeUsage: 'Very common in business when someone is absent: 「山田の代理（代わりに）、私が対応いたします」 (I will handle it in place of Yamada).'
      }
    ]
  },
  {
    lessonNum: 5,
    title: 'Exclusions & Negative Faults',
    description: 'Refined conditions and emphasis patterns.',
    topics: [
      {
        id: 'n3-l5-t1',
        pattern: '〜ぬきで',
        pronunciation: 'nuki de',
        meaning: 'Without / Leaving out',
        isImplemented: true,
        whenAndWhy: 'Used when you deliberately exclude, omit, or skip something that is normally included or expected.',
        explanation: 'Attach ぬきで (nuki de) or ぬきにして (nuki ni shite) to a noun. It comes from the verb 抜く (nuku - to pull out/extract). It implies "let\'s proceed without X."',
        formation: {
          formula: 'Noun + ぬきで / ぬきにして',
          rules: [
            'Adverbial use: Noun + ぬきで (e.g. 冗談ぬきで - without jokes / seriously)',
            'Modifying a noun: Noun A + ぬきの + Noun B (e.g. わさびぬきの寿司 - sushi without wasabi)',
            'Negative potential: Noun + ぬきでは〜できない (cannot do it without X)'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Structure', 'Translation'],
          rows: [
            ['Adverbial', 'わさびぬきで', 'Without wasabi (please)'],
            ['Noun Modifier', 'わさびぬきの寿司', 'Sushi without wasabi'],
            ['Necessity', '彼ぬきではできない', 'Cannot do it without him']
          ]
        },
        notes: 'Very common in restaurants when customizing food orders (e.g. 玉ねぎぬきでお願いします - without onions please).',
        mistakes: 'Do not use this for verbs (✕ 食べぬきで - without eating). For verbs, use 〜ずに or 〜ないで. ぬき is exclusively for nouns.',
        comparison: {
          similarPattern: '〜なしで (Without)',
          difference: '〜なしで is a neutral "without". 〜ぬきで implies that the thing is *normally* included, but you are specifically pulling it out or skipping it this time.'
        },
        memoryTips: 'Nuki sounds like pulling a "noodle" out of your soup. You extract it and leave it out.',
        examples: [
          { japanese: '子供用なので、わさびぬきでお願いします。', english: 'Because it is for a child, without wasabi please.', romaji: 'Kodomoyou na node, wasabinuki de onegaishimasu.' },
          { japanese: '今日は仕事の話ぬきで、楽しく飲みましょう。', english: 'Today, leaving out talk of work, let\'s drink and have fun.', romaji: 'Kyou wa shigoto no hanashi nuki de, tanoshiku nomimashou.' },
          { japanese: '冗談ぬきで、真面目に考えてください。', english: 'Jokes aside (without jokes), please think about it seriously.', romaji: 'Joudan nuki de, majime ni kangaete kudasai.' },
          { japanese: '彼ぬきでは、このプロジェクトは成功しない。', english: 'Without him, this project will not succeed.', romaji: 'Kare nuki de wa, kono purojekuto wa seikou shinai.' },
          { japanese: '朝食ぬきで学校に行くと、頭が働きません。', english: 'If you go to school skipping breakfast, your brain won\'t work.', romaji: 'Choushoku nuki de gakkou ni iku to, atama ga hatarakimasen.' },
          { japanese: 'お世辞ぬきで、あなたの絵は素晴らしいです。', english: 'Flattery aside (without flattery), your painting is wonderful.', romaji: 'Oseji nuki de, anata no e wa subarashii desu.' },
          { japanese: '挨拶ぬきにして、さっそく会議を始めましょう。', english: 'Skipping the greetings, let\'s start the meeting right away.', romaji: 'Aisatsu nuki ni shite, sassoku kaigi o hajimemashou.' },
          { japanese: '砂糖ぬきのコーヒーが好きです。', english: 'I like coffee without sugar.', romaji: 'Satounuki no koohii ga suki desu.' },
          { japanese: '社長ぬきで決めるわけにはいかない。', english: 'We cannot afford to decide without the president.', romaji: 'Shachou nuki de kimeru wake ni wa ikanai.' },
          { japanese: 'マヨネーズぬきのハンバーガーをください。', english: 'Please give me a hamburger without mayonnaise.', romaji: 'Mayoneezunuki no hanbaagaa o kudasai.' }
        ],
        conversation: {
          context: 'Ordering at a sushi restaurant.',
          dialogue: [
            { speaker: 'ケン', japanese: 'マグロを二つお願いします。あ、一つはわさびぬきで。', english: 'Two tuna please. Ah, one without wasabi.' },
            { speaker: '店員', japanese: 'はい、マグロ二つ。一つはわさびぬきですね。', english: 'Yes, two tuna. One without wasabi, right.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "A sandwich without tomatoes (トマト)."',
            'Translate: "Jokes (冗談 - joudan) aside, it is a serious problem."',
            'Can you say 勉強ぬきで (without studying)?'
          ],
          answers: [
            'トマトぬきのサンドイッチ (Tomatonuki no sandoitchi)',
            '冗談ぬきで、深刻な問題です。 (Joudan nuki de, shinkoku na mondai desu.)',
            'Usually no, because studying is an action, not an ingredient or expected social component you can "pull out". 勉強しないで is better.'
          ]
        },
        jlptQuestions: [
          {
            question: '今日（きょう）は難（むずか）しい話（はなし）は___にして、楽（たの）しく歌（うた）いましょう。',
            options: ['ぬき', 'なし', 'とり', 'すぎ'],
            correctIndex: 0,
            explanation: 'The set phrase for "leaving out / skipping" a topic is ぬきにして. なしにして is understandable but ぬきにして is the natural Japanese idiom for setting something aside.'
          },
          {
            question: 'あの選手（せんしゅ）___では、この試合（しあい）に勝（か）てない。',
            options: ['まで', 'から', 'ぬき', 'だけ'],
            correctIndex: 2,
            explanation: 'To say "Without [Person X], we cannot...", you use [Person] ぬきでは. あの選手ぬきでは (Without that player).'
          }
        ],
        realLifeUsage: 'Essential for people with food allergies or preferences: 「〜ぬきでお願いします」 (Without X, please).'
      },
      {
        id: 'n3-l5-t2',
        pattern: '〜せいだ',
        pronunciation: 'sei da',
        meaning: 'Because of (fault/negative)',
        isImplemented: true,
        whenAndWhy: 'Used to blame a specific cause for a negative result. It translates to "It is the fault of..." or "Because of (bad connotation)".',
        explanation: 'Attach せいで to the modifier (plain form, Noun + の). It is the direct opposite of おかげで (Thanks to). Using it strongly implies that you consider the outcome undesirable and are pointing the finger at the cause.',
        formation: {
          formula: 'Modifier + せいで / せいだ',
          rules: [
            'Verbs/i-adjectives: Plain form + せいで (e.g. 食べたせいで, 暑いせいで)',
            'na-adjectives: Add な + せいで (e.g. 暇なせいで)',
            'Nouns: Add の + せいで (e.g. 雨のせいで)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Plain Form', 'Sei de Form', 'Translation'],
          rows: [
            ['Noun', '雨 (ame)', '雨のせいで', 'Because of the rain (my fault)'],
            ['Verb (Past)', '寝坊した (nebou shita)', '寝坊したせいで', 'Because I overslept'],
            ['i-adjective', '暑い (atsui)', '暑いせいで', 'Because it is (too) hot']
          ]
        },
        notes: 'If you want to say "It is X\'s fault" at the end of a sentence, use せいだ / せいです. (e.g. 失敗したのは、彼のせいだ - The reason we failed is his fault).',
        mistakes: 'Do not use せいで for positive outcomes (✕ 先生のせいで合格した - Sounds like you are angry you passed!). Also, when used with your own actions (私が間違えたせいで), it means you are taking the blame/apologizing.',
        comparison: {
          similarPattern: '〜おかげで (Thanks to)',
          difference: 'おかげで = Gratitude for a good result. せいで = Blame for a bad result.'
        },
        memoryTips: 'Sei sounds like "say". "I SAY it is your fault!"',
        examples: [
          { japanese: '雨のせいで、試合が中止になりました。', english: 'Because of the rain, the match was cancelled.', romaji: 'Ame no sei de, shiai ga chuushi ni narimashita.' },
          { japanese: 'バスが遅れたせいで、会議に間に合いませんでした。', english: 'Because the bus was late, I didn\'t make it in time for the meeting.', romaji: 'Basu ga okureta sei de, kaigi ni maniaimasen deshita.' },
          { japanese: 'パソコンが壊れたせいで、仕事ができません。', english: 'Because my computer broke, I cannot work.', romaji: 'Pasokon ga kowareta sei de, shigoto ga dekimasen.' },
          { japanese: 'あなたが嘘をついたせいで、みんなが迷惑しています。', english: 'Because you lied, everyone is being troubled.', romaji: 'Anata ga uso o tsuita sei de, minna ga meiwaku shite imasu.' },
          { japanese: '昨日飲みすぎたせいで、今日は頭が痛いです。', english: 'Because I drank too much yesterday, my head hurts today.', romaji: 'Kinou nomisugita sei de, kyou wa atama ga itai desu.' },
          { japanese: '道が混んでいるせいで、いつもより時間がかかりました。', english: 'Because the roads were crowded, it took more time than usual.', romaji: 'Michi ga konde iru sei de, itsumo yori jikan ga kakarimashita.' },
          { japanese: '私がミスをしたせいで、チームが負けてしまった。', english: 'Because I made a mistake, the team ended up losing.', romaji: 'Watashi ga misu o shita sei de, chiimu ga makete shimatta.' },
          { japanese: '部屋が暗いせいで、目が悪くなりました。', english: 'Because the room is dark, my eyes got worse.', romaji: 'Heya ga kurai sei de, me ga waruku narimashita.' },
          { japanese: '彼が怒っているのは、私のせいです。', english: 'The reason he is angry is my fault.', romaji: 'Kare ga okotte iru no wa, watashi no sei desu.' },
          { japanese: '値段が高いせいで、あまり売れません。', english: 'Because the price is high, it doesn\'t sell well.', romaji: 'Nedan ga takai sei de, amari uremasen.' }
        ],
        conversation: {
          context: 'Complaining about the weather.',
          dialogue: [
            { speaker: 'ジョン', japanese: '今日はとても暑いですね。', english: 'It is very hot today, isn\'t it.' },
            { speaker: 'さくら', japanese: 'ええ、暑いせいで、全然仕事に集中できません。', english: 'Yes, because it is hot, I cannot concentrate on my work at all.' },
            { speaker: 'ジョン', japanese: '私もです。早く帰りたいですね。', english: 'Me too. I want to go home early.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Because of him (彼), we lost (負けた - maketa)."',
            'Translate: "It is the boss\'s (部長 - buchou) fault."',
            'Translate: "Because I forgot (忘れた)..."'
          ],
          answers: [
            '彼のせいで、負けました。 (Kare no sei de, makemashita.)',
            '部長のせいです。 (Buchou no sei desu.)',
            '忘れたせいで (Wasureta sei de)'
          ]
        },
        jlptQuestions: [
          {
            question: '事故（じこ）___せいで、電車（でんしゃ）が止（と）まっています。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 2,
            explanation: '事故 (accident) is a noun. It connects to せいで with the particle の. 事故のせいで.'
          },
          {
            question: '私（わたし）が試験（しけん）に落（お）ちたのは、友達（ともだち）が遊（あそ）びに誘（さそ）った___。',
            options: ['おかげだ', 'せいだ', 'ためだ', 'ことだ'],
            correctIndex: 1,
            explanation: 'Failing an exam is a negative result. Blaming the friend for inviting you to play requires せいだ (It is their fault).'
          }
        ],
        realLifeUsage: 'Can be used to playfully blame someone: 「君が可愛いせいで、仕事に集中できない」 (Because you are so cute, I can\'t concentrate on work!).'
      },
      {
        id: 'n3-l5-t3',
        pattern: '〜反面',
        pronunciation: 'hanmen',
        meaning: 'On the other hand',
        isImplemented: true,
        whenAndWhy: 'Used to present two opposing characteristics or aspects of the EXACT SAME thing, person, or situation.',
        explanation: '反面 (hanmen) literally means "the opposite side (of a coin)". It shows that while A is true, the flip side B is also true. It highlights a contradiction within a single subject.',
        formation: {
          formula: 'Plain Form + 反面',
          rules: [
            'Verbs/i-adjectives: Plain form + 反面 (e.g. 便利な反面 - wait, benri is na-adj. 高い反面 - expensive but...)',
            'na-adjectives: Add な / である + 反面 (e.g. 便利な反面 - convenient, but on the other hand...)',
            'Nouns: Add である + 反面 (e.g. 教師である反面 - a teacher, but on the other hand...)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Verb', '疲れる反面 (tsukareru hanmen)', 'Tiring, but on the other hand...'],
            ['i-adjective', '高い反面 (takai hanmen)', 'Expensive, but on the other hand...'],
            ['na-adjective', '便利な反面 (benri na hanmen)', 'Convenient, but on the other hand...']
          ]
        },
        notes: 'The two clauses must be about the same subject. (e.g. "Living in Tokyo is convenient, but on the other hand, it is expensive" - Both refer to "Living in Tokyo").',
        mistakes: 'Do not use 反面 to compare two DIFFERENT things. (✕ 東京は便利な反面、大阪は… - Wrong. Use に対して for comparing two different things).',
        comparison: {
          similarPattern: '〜に対して (In contrast to)',
          difference: '兄に対して弟は… (Contrasting two DIFFERENT people). 兄は優しい反面、厳しいところもある (Contrasting two sides of the SAME person).'
        },
        memoryTips: 'Han (Anti/Opposite) + Men (Face/Side). The opposite face of the same coin.',
        examples: [
          { japanese: '都会の生活は便利な反面、物価が高い。', english: 'City life is convenient, but on the other hand, the cost of living is high.', romaji: 'Tokai no seikatsu wa benri na hanmen, bukka ga takai.' },
          { japanese: 'この薬はよく効く反面、副作用も強い。', english: 'This medicine works well, but on the other hand, the side effects are also strong.', romaji: 'Kono kusuri wa yoku kiku hanmen, fukusayou mo tsuyoi.' },
          { japanese: '彼は優しい反面、怒るととても怖い。', english: 'He is kind, but on the other hand, he is very scary when he gets angry.', romaji: 'Kare wa yasashii hanmen, okoru to totemo kowai.' },
          { japanese: '一人暮らしは自由な反面、寂しい時もある。', english: 'Living alone is free, but on the other hand, there are times when it is lonely.', romaji: 'Hitorigurashi wa jiyuu na hanmen, sabishii toki mo aru.' },
          { japanese: 'パソコンは便利な反面、目が疲れやすい。', english: 'Computers are convenient, but on the other hand, your eyes get tired easily.', romaji: 'Pasokon wa benri na hanmen, me ga tsukareyasui.' },
          { japanese: 'フリーランスは時間が自由な反面、収入が不安定だ。', english: 'Freelancing has free time, but on the other hand, income is unstable.', romaji: 'Furiiransu wa jikan ga jiyuu na hanmen, shuunyuu ga fuantei da.' },
          { japanese: '新しい仕事はやりがいがある反面、残業が多い。', english: 'The new job is rewarding, but on the other hand, there is a lot of overtime.', romaji: 'Atarashii shigoto wa yarigai ga aru hanmen, zangyou ga ooi.' },
          { japanese: 'インターネットは便利な反面、危険な情報もある。', english: 'The internet is convenient, but on the other hand, there is also dangerous information.', romaji: 'Intaanetto wa benri na hanmen, kiken na jouhou mo aru.' },
          { japanese: 'この車はデザインがいい反面、燃費が悪い。', english: 'This car has a good design, but on the other hand, the fuel efficiency is bad.', romaji: 'Kono kuruma wa dezain ga ii hanmen, nenpi ga warui.' },
          { japanese: 'あの先生は厳しい反面、学生思いだ。', english: 'That teacher is strict, but on the other hand, cares about the students.', romaji: 'Ano sensei wa kibishii hanmen, gakuseiomoi da.' }
        ],
        conversation: {
          context: 'Discussing remote work.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'リモートワークはどうですか。', english: 'How is remote work?' },
            { speaker: 'さくら', japanese: '通勤がなくて楽な反面、運動不足になりますね。', english: 'It is easy without commuting, but on the other hand, I suffer from a lack of exercise.' },
            { speaker: 'ジョン', japanese: '確かに、ずっと家にいますからね。', english: 'True, because you are at home all the time.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Airplanes are fast (速い), but on the other hand, they are expensive."',
            'Translate: "Smartphones are convenient (便利), but on the other hand..."',
            'Why is it wrong to say: "東京は大きい反面、京都は小さい"?'
          ],
          answers: [
            '飛行機は速い反面、高いです。 (Hikouki wa hayai hanmen, takai desu.)',
            'スマートフォンは便利な反面… (Sumaatofon wa benri na hanmen...)',
            'Because 反面 must be used to contrast two sides of the SAME subject, not two different cities.'
          ]
        },
        jlptQuestions: [
          {
            question: '一人暮（ひとりぐ）らしは、自由（じゆう）___反面（はんめん）、家事（かじ）を全部（ぜんぶ）自分（じぶん）でしなければならない。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 1,
            explanation: '自由 is a na-adjective (自由だ). To modify 反面, you use な. 自由な反面.'
          },
          {
            question: 'この仕事（しごと）は給料（きゅうりょう）がいい___、休（やす）みがほとんどない。',
            options: ['おかげで', 'かわりに', '反面', 'せいで'],
            correctIndex: 2,
            explanation: 'The sentence highlights two opposing qualities of the SAME job (good salary vs. no days off). 反面 is the perfect fit. (代わりに could theoretically work as a trade-off, but 反面 is the standard grammar for "A but negatively B").'
          }
        ],
        realLifeUsage: 'Often used in product reviews or essays to show a balanced, objective view.'
      },
      {
        id: 'n3-l5-t4',
        pattern: '〜たとえ〜ても',
        pronunciation: 'tatoe ... temo',
        meaning: 'Even if',
        isImplemented: true,
        whenAndWhy: 'Used to express a strong hypothetical concession. "Even if [extreme or unlikely situation] happens, my action/feeling will not change."',
        explanation: 'It pairs the adverb たとえ (tatoe - assuming/even if) at the beginning of the clause with the 〜ても (temo - even if) form at the end of the clause. Using たとえ adds strong emphasis that the condition is hypothetical.',
        formation: {
          formula: 'たとえ + Verb(te-form) + も / Adjective + ても',
          rules: [
            'Verbs: たとえ + te-form + も (e.g. たとえ雨が降っても - even if it rains)',
            'i-adjectives: たとえ + (drop い) くても (e.g. たとえ高くても - even if it is expensive)',
            'na-adjectives/Nouns: たとえ + でも (e.g. たとえ子供でも - even if it is a child)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Structure', 'Translation'],
          rows: [
            ['Verb', 'たとえ失敗しても', 'Even if I fail...'],
            ['i-adjective', 'たとえ苦しくても', 'Even if it is painful...'],
            ['Noun', 'たとえ冗談でも', 'Even if it is a joke...']
          ]
        },
        notes: 'You can actually drop たとえ and just use 〜ても, but adding たとえ shows strong determination or drama.',
        mistakes: 'Make sure the ending always matches the te-form + も rule. (✕ たとえ雨が降る - Incomplete. ◯ たとえ雨が降っても).',
        comparison: {
          similarPattern: '〜ても (Even if - N4)',
          difference: '雨が降っても行きます (Even if it rains, I will go - normal statement). たとえ雨が降っても行きます (Even if it rains—no matter what happens—I will absolutely go - strong determination).'
        },
        memoryTips: 'Tatoe sounds like "tattoo". Even if I get a tattoo, I won\'t regret it.',
        examples: [
          { japanese: 'たとえ雨が降っても、明日の試合は行われます。', english: 'Even if it rains, tomorrow\'s match will be held.', romaji: 'Tatoe ame ga futtemo, ashita no shiai wa okonawaremasu.' },
          { japanese: 'たとえ両親に反対されても、私は彼と結婚します。', english: 'Even if I am opposed by my parents, I will marry him.', romaji: 'Tatoe ryoushin ni hantai saretemo, watashi wa kare to kekkon shimasu.' },
          { japanese: 'たとえ高くても、このパソコンが買いたいです。', english: 'Even if it is expensive, I want to buy this computer.', romaji: 'Tatoe takakutemo, kono pasokon ga kaitai desu.' },
          { japanese: 'たとえ冗談でも、そんなことを言ってはいけません。', english: 'Even if it is a joke, you must not say such a thing.', romaji: 'Tatoe joudan demo, sonna koto o itte wa ikemasen.' },
          { japanese: 'たとえ失敗しても、諦めずにまた挑戦します。', english: 'Even if I fail, I will challenge it again without giving up.', romaji: 'Tatoe shippai shitemo, akiramezu ni mata chousen shimasu.' },
          { japanese: 'たとえ遠くても、毎日自転車で通います。', english: 'Even if it is far, I will commute by bicycle every day.', romaji: 'Tatoe tookutemo, mainichi jitensha de kayoimasu.' },
          { japanese: 'たとえ子供でも、ルールは守らなければならない。', english: 'Even if it is a child, rules must be followed.', romaji: 'Tatoe kodomo demo, ruuru wa mamoranakereba naranai.' },
          { japanese: 'たとえ忙しくても、家族との時間は大切にします。', english: 'Even if I am busy, I value time with my family.', romaji: 'Tatoe isogashikutemo, kazoku to no jikan wa taisetsu ni shimasu.' },
          { japanese: 'たとえ世界中が敵になっても、私はあなたの味方です。', english: 'Even if the whole world becomes your enemy, I am on your side.', romaji: 'Tatoe sekaijuu ga teki ni nattemo, watashi wa anata no mikata desu.' },
          { japanese: 'たとえお金がなくても、幸せになることはできる。', english: 'Even if you have no money, it is possible to become happy.', romaji: 'Tatoe okane ga nakutemo, shiawase ni naru koto wa dekiru.' }
        ],
        conversation: {
          context: 'Declaring one\'s dream.',
          dialogue: [
            { speaker: 'ケン', japanese: '歌手になるのは、すごく難しいよ。', english: 'Becoming a singer is extremely difficult, you know.' },
            { speaker: 'マリー', japanese: 'わかっている。でも、たとえ何年かかっても、絶対に歌手になるつもりだ。', english: 'I know. But, even if it takes many years, I absolutely intend to become a singer.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Even if it is hard/painful (辛い - tsurai)..."',
            'Translate: "Even if you dislike it (嫌い - kirai)..."',
            'Combine たとえ with 負ける (to lose).'
          ],
          answers: [
            'たとえ辛くても (Tatoe tsurakutemo)',
            'たとえ嫌いでも (Tatoe kirai demo)',
            'たとえ負けても (Tatoe maketemo)'
          ]
        },
        jlptQuestions: [
          {
            question: '___熱（ねつ）があっても、今日（きょう）は会社（かいしゃ）を休（やす）めない。',
            options: ['もし', 'たとえ', 'いくら', 'どんなに'],
            correctIndex: 1,
            explanation: 'The sentence ends with 〜ても (あっても). The adverb that strongly pairs with 〜ても to mean "Even if [hypothetical extreme]" is たとえ.'
          },
          {
            question: 'たとえ病気（びょうき）___、彼（かれ）は仕事（しごと）を続（つづ）けるだろう。',
            options: ['でも', 'ても', 'なっても', 'しても'],
            correctIndex: 0,
            explanation: '病気 is a noun. Nouns connect to 〜ても by becoming 〜でも. たとえ病気でも (Even if it is illness / Even if he is sick).'
          }
        ],
        realLifeUsage: 'Often used in romantic or dramatic statements: 「たとえ何があっても君を守る」 (I will protect you even if anything happens).'
      },
      {
        id: 'n3-l5-t5',
        pattern: '〜さえ',
        pronunciation: 'sae',
        meaning: 'Even (Extreme example)',
        isImplemented: true,
        whenAndWhy: 'Used to present an extreme or fundamental example to imply that if *even this* is true, then other less extreme things are obviously true.',
        explanation: 'さえ (sae) replaces the particles は, が, or を. It translates to "even". Often used in negative sentences (He can\'t *even* write hiragana -> implies he definitely can\'t write kanji).',
        formation: {
          formula: 'Noun + さえ',
          rules: [
            'Replaces は, が, を: 水さえ飲めない (Cannot even drink water).',
            'Attaches AFTER other particles (に, で, から): 先生にさえわからない (Even the teacher doesn\'t know).'
          ]
        },
        conjugations: {
          headers: ['Usage Type', 'Phrase', 'Translation'],
          rows: [
            ['Replaces を', '名前さえ書けない', 'Cannot even write his name'],
            ['After に', '子供にさえわかる', 'Even a child understands'],
            ['After で', '日本でさえ暑い', 'It is hot even in Japan']
          ]
        },
        notes: 'Another N3 pattern is 〜さえ〜ば (If only X happens...). Example: お金さえあればいい (If only I have money, it\'s fine).',
        mistakes: 'Do not use さえ with positive, expected examples. You use it for the extreme baseline. (✕ 彼は難しい漢字さえ読める - While technically okay, it\'s better to use も. さえ shines in negatives: 彼は簡単な漢字さえ読めない).',
        comparison: {
          similarPattern: '〜も (Also/Even)',
          difference: 'も is a general "also/even". さえ carries a stronger nuance of astonishment at an extreme case ("To the point where *even* X...").'
        },
        memoryTips: 'Sae sounds like "sigh". *Sigh*, he can\'t *even* do this basic thing.',
        examples: [
          { japanese: '喉が痛くて、水さえ飲めない。', english: 'My throat hurts, and I cannot even drink water.', romaji: 'Nodo ga itakute, mizu sae nomenai.' },
          { japanese: '忙しすぎて、寝る時間さえありません。', english: 'I am so busy, I don\'t even have time to sleep.', romaji: 'Isogashisugite, neru jikan sae arimasen.' },
          { japanese: 'こんな簡単な問題、小学生でさえわかるよ。', english: 'Even an elementary schooler understands such a simple problem.', romaji: 'Konna kantan na mondai, shougakusei de sae wakaru yo.' },
          { japanese: '彼は家族にさえ、その秘密を言わなかった。', english: 'He did not tell that secret even to his family.', romaji: 'Kare wa kazoku ni sae, sono himitsu o iwanakatta.' },
          { japanese: '冷蔵庫には卵さえない。', english: 'There isn\'t even an egg in the refrigerator.', romaji: 'Reizouko ni wa tamago sae nai.' },
          { japanese: 'あの人は、自分の名前さえ漢字で書けない。', english: 'That person cannot write even his own name in kanji.', romaji: 'Ano hito wa, jibun no namae sae kanji de kakenai.' },
          { japanese: '風邪を引いて、声さえ出ない。', english: 'I caught a cold, and my voice doesn\'t even come out.', romaji: 'Kaze o hiite, koe sae denai.' },
          { japanese: 'お金さえあれば、何でもできると思っている人がいる。', english: 'There are people who think they can do anything if only they have money.', romaji: 'Okane sae areba, nandemo dekiru to omotte iru hito ga iru.' },
          { japanese: '携帯電話を持たない人さえいる。', english: 'There are even people who don\'t have mobile phones.', romaji: 'Keitaidenwa o motanai hito sae iru.' },
          { japanese: 'プロの選手でさえ、時には失敗する。', english: 'Even professional athletes sometimes fail.', romaji: 'Puro no senshu de sae, toki ni wa shippai suru.' }
        ],
        conversation: {
          context: 'Visiting a sick friend.',
          dialogue: [
            { speaker: 'マリー', japanese: '具合はどう？ご飯は食べられた？', english: 'How is your condition? Were you able to eat?' },
            { speaker: 'ケン', japanese: 'ううん、気持ち悪くて、お粥（かゆ）さえ食べられないんだ。', english: 'No, I feel sick, I cannot even eat porridge.' },
            { speaker: 'マリー', japanese: 'それは大変。病院に行ったほうがいいよ。', english: 'That is terrible. You should go to the hospital.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I do not have even 100 yen (百円)."',
            'Translate: "Even a child (子供) knows it."',
            'Translate: "If only I have time (時間)... (Use sae + ba form)"'
          ],
          answers: [
            '百円さえありません。 (Hyakuen sae arimasen.)',
            '子供でさえ知っています。 (Kodomo de sae shitte imasu.)',
            '時間さえあれば (Jikan sae areba)'
          ]
        },
        jlptQuestions: [
          {
            question: 'とても疲（つか）れていて、立（た）つこと___できない。',
            options: ['まで', 'ばかり', 'さえ', 'しか'],
            correctIndex: 2,
            explanation: 'To express "cannot *even* do X", you use さえ. 立つことさえできない (Cannot even stand).'
          },
          {
            question: '専門家（せんもんか）___わからない問題（もんだい）を、私（わたし）が解（と）けるわけがない。',
            options: ['にさえ', 'でさえ', 'からさえ', 'とさえ'],
            correctIndex: 0,
            explanation: 'The verb わかる (to understand) takes the particle に for the person who understands (専門家にわかる - experts understand). Attach さえ after に -> 専門家にさえわからない (Even experts don\'t understand).'
          }
        ],
        realLifeUsage: 'Often used to express shock: 「日本人にさえ読めない漢字がある」 (There are kanji that even Japanese people cannot read).'
      }
    ]
  }
];
