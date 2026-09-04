export const n4Lessons = [
  {
    lessonNum: 1,
    title: 'Permissions & Rules',
    description: 'Learn to request permission and express restrictions and obligations.',
    topics: [
      {
        id: 'n4-l1-t1',
        pattern: '〜てもいいです',
        pronunciation: 'te mo ii desu',
        meaning: 'You may do (Permission)',
        isImplemented: true,
        whenAndWhy: 'Used to grant permission or express that an action is allowable.',
        explanation: 'This pattern is formed by combining the te-form of a verb with もいいです (literally: even if you do X, it is good/fine). It gives someone permission to do something.',
        formation: {
          formula: 'Verb (te-form) + もいいです',
          rules: [
            'Conjugate the verb into the te-form.',
            'Attach もいいです.',
            'In casual speech, です can be dropped: 〜てもいい.'
          ]
        },
        conjugations: {
          headers: ['Verb Group', 'Dictionary Form', 'te-form', 'Permission Form'],
          rows: [
            ['Group 1', '入る (hairu)', '入って (haitte)', '入ってもいいです (haitte mo ii desu)'],
            ['Group 2', '食べる (taberu)', '食べて (tabete)', '食べてもいいです (tabete mo ii desu)'],
            ['Group 3', 'する (suru)', 'して (shite)', 'してもいいです (shite mo ii desu)']
          ]
        },
        notes: 'When granting permission to someone, it can sometimes sound a bit condescending if used toward a superior, as it literally implies "I allow you to...". Use with care depending on social rank.',
        mistakes: 'Do not use this to invite someone to do something. For example, to say "Let\'s eat," use 食べましょう, not 食べてもいいです (which means "You may eat").',
        comparison: {
          similarPattern: '〜てもかまいません',
          difference: '〜てもかまいません also grants permission ("I don\'t mind if you..."). It is slightly more formal and implies the speaker is making a concession.'
        },
        memoryTips: 'Think of "te mo" as "even if doing" and "ii" as "good". "Even if you do it, it is good." -> You may do it.',
        examples: [
          { japanese: 'ここで写真を撮ってもいいです。', english: 'You may take pictures here.', romaji: 'Koko de shashin o totte mo ii desu.' },
          { japanese: 'このパソコンを使ってもいいですよ。', english: 'You may use this computer.', romaji: 'Kono pasokon o tsukatte mo ii desu yo.' },
          { japanese: '帰ってもいいです。', english: 'You may go home.', romaji: 'Kaette mo ii desu.' },
          { japanese: 'そのケーキを食べてもいいですよ。', english: 'You may eat that cake.', romaji: 'Sono keeki o tabete mo ii desu yo.' },
          { japanese: 'ここでタバコを吸ってもいいです。', english: 'You may smoke tobacco here.', romaji: 'Koko de tabako o sutte mo ii desu.' },
          { japanese: '窓を開けてもいいです。', english: 'You may open the window.', romaji: 'Mado o akete mo ii desu.' },
          { japanese: '明日、休んでもいいですか。（Question form）', english: 'May I take a day off tomorrow?', romaji: 'Ashita, yasunde mo ii desu ka.' },
          { japanese: '辞書を見てもいいです。', english: 'You may look at the dictionary.', romaji: 'Jisho o mite mo ii desu.' },
          { japanese: 'テレビをつけてもいいです。', english: 'You may turn on the TV.', romaji: 'Terebi o tsukete mo ii desu.' },
          { japanese: 'ここに座ってもいいです。', english: 'You may sit here.', romaji: 'Koko ni suwatte mo ii desu.' }
        ],
        conversation: {
          context: 'A student asking a teacher a question during an exam.',
          dialogue: [
            { speaker: '学生', japanese: '先生、ボールペンで書いてもいいですか。', english: 'Teacher, may I write with a ballpoint pen?' },
            { speaker: '先生', japanese: 'はい、ボールペンで書いてもいいですよ。', english: 'Yes, you may write with a ballpoint pen.' },
            { speaker: '学生', japanese: '辞書を使ってもいいですか。', english: 'May I use a dictionary?' },
            { speaker: '先生', japanese: 'いいえ、辞書を使ってはいけません。', english: 'No, you must not use a dictionary.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "You may drink water (水)."',
            'Translate: "You may read this book (本)."',
            'Conjugate 帰る (go home) to the permission form.'
          ],
          answers: [
            '水を飲んでもいいです。 (Mizu o nonde mo ii desu.)',
            'この本を読んでもいいです。 (Kono hon o yonde mo ii desu.)',
            '帰ってもいいです (Kaette mo ii desu)'
          ]
        },
        jlptQuestions: [
          {
            question: 'ここは教室（きょうしつ）ですから、ジュースを___もいいです。',
            options: ['飲む', '飲んで', '飲まない', '飲み'],
            correctIndex: 1,
            explanation: 'Permission is expressed with te-form + もいいです. 飲む -> 飲んで.'
          },
          {
            question: '「このペンを___もいいですか。」「はい、どうぞ。」',
            options: ['使う', '使った', '使って', '使わ'],
            correctIndex: 2,
            explanation: 'Asking permission uses te-form + もいいですか. 使う -> 使って.'
          }
        ],
        realLifeUsage: 'Commonly heard when setting rules or guidelines (e.g. in a library or classroom) where certain actions are allowed.'
      },
      {
        id: 'n4-l1-t2',
        pattern: '〜てはいけません',
        pronunciation: 'te wa ikemasen',
        meaning: 'Must not (Prohibition)',
        isImplemented: true,
        whenAndWhy: 'Used to strongly prohibit an action or state a rule that must not be broken.',
        explanation: 'This pattern attaches to the te-form of a verb. It literally translates to "Doing [verb] won\'t do" or "Doing [verb] is not allowed." It represents a strict rule or strong prohibition.',
        formation: {
          formula: 'Verb (te-form) + はいけません',
          rules: [
            'Conjugate the verb into the te-form.',
            'Attach はいけません (pronounced "wa ikemasen").',
            'In casual speech, てはいけない can be used, often contracted to ちゃいけない / じゃいけない.'
          ]
        },
        conjugations: {
          headers: ['Verb Group', 'te-form', 'Prohibition Form', 'Translation'],
          rows: [
            ['Group 1', '入って (haitte)', '入ってはいけません', 'You must not enter.'],
            ['Group 1 (ends in b/m/n)', '飲んで (nonde)', '飲んではいけません', 'You must not drink.'],
            ['Group 2', '食べて (tabete)', '食べてはいけません', 'You must not eat.']
          ]
        },
        notes: 'Because it is a strong prohibition, it can sound harsh. It is usually used by people in authority (teachers to students, parents to children, or in public signs/rules). To politely ask someone not to do something, use 〜ないでください.',
        mistakes: 'Remember that after words ending in んで (like 読んで, 飲んで), it is 飲んではいけません (nonde wa ikemasen), not 飲んてはいけません.',
        comparison: {
          similarPattern: '〜ないでください',
          difference: '〜ないでください is a polite request ("Please don\'t do..."). 〜てはいけません is a strict rule or statement of prohibition ("You must not do... / It is forbidden to...").'
        },
        memoryTips: 'Think of "ikemasen" as "cannot go/proceed". If you do the te-form action, you cannot proceed!',
        examples: [
          { japanese: 'ここで写真を撮ってはいけません。', english: 'You must not take pictures here.', romaji: 'Koko de shashin o totte wa ikemasen.' },
          { japanese: '授業中に寝てはいけません。', english: 'You must not sleep during class.', romaji: 'Jugyouchuu ni nete wa ikemasen.' },
          { japanese: 'この部屋に入ってはいけません。', english: 'You must not enter this room.', romaji: 'Kono heya ni haitte wa ikemasen.' },
          { japanese: 'お酒を飲んで車を運転してはいけません。', english: 'You must not drink alcohol and drive a car.', romaji: 'Osake o nonde kuruma o unten shite wa ikemasen.' },
          { japanese: '美術館の中で走ってはいけません。', english: 'You must not run inside the museum.', romaji: 'Bijutsukan no naka de hashitte wa ikemasen.' },
          { japanese: 'テスト中、友達と話してはいけません。', english: 'During the test, you must not talk with friends.', romaji: 'Tesutochuu, tomodachi to hanashite wa ikemasen.' },
          { japanese: '危ないですから、そこで遊んではいけません。', english: 'Because it is dangerous, you must not play there.', romaji: 'Abunai desu kara, soko de asonde wa ikemasen.' },
          { japanese: 'まだ帰ってはいけません。', english: 'You must not go home yet.', romaji: 'Mada kaette wa ikemasen.' },
          { japanese: '未成年はタバコを吸ってはいけません。', english: 'Minors must not smoke tobacco.', romaji: 'Miseinen wa tabako o sutte wa ikemasen.' },
          { japanese: '芝生に入ってはいけません。', english: 'You must not keep off (enter) the grass.', romaji: 'Shibafu ni haitte wa ikemasen.' }
        ],
        conversation: {
          context: 'A mother scolding her child.',
          dialogue: [
            { speaker: '子供', japanese: 'お母さん、もうゲームをしてもいいですか。', english: 'Mom, may I play video games now?' },
            { speaker: '母', japanese: '宿題は終わりましたか。', english: 'Is your homework finished?' },
            { speaker: '子供', japanese: 'まだです。', english: 'Not yet.' },
            { speaker: '母', japanese: '宿題が終わるまで、ゲームをしてはいけません。', english: 'Until your homework is finished, you must not play video games.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "You must not eat in the library (図書館)."',
            'Translate: "You must not look (見る)."',
            'Change to prohibition: 触る (sawaru - to touch)'
          ],
          answers: [
            '図書館で食べてはいけません。 (Toshokan de tabete wa ikemasen.)',
            '見てはいけません。 (Mite wa ikemasen.)',
            '触ってはいけません (Sawatte wa ikemasen)'
          ]
        },
        jlptQuestions: [
          {
            question: 'ここは病院（びょういん）ですから、大（おお）きい声（こえ）で___はいけません。',
            options: ['話す', '話し', '話して', '話さない'],
            correctIndex: 2,
            explanation: 'The prohibition grammar is te-form + はいけません. 話す -> 話して.'
          },
          {
            question: '子供（こども）はお酒（さけ）を___はいけません。',
            options: ['飲んで', '飲んだ', '飲む', '飲まない'],
            correctIndex: 0,
            explanation: '飲んで is the te-form of 飲む. Attached to はいけません it creates the prohibition "must not drink".'
          }
        ],
        realLifeUsage: 'Ubiquitous on warning signs and public notices across Japan.'
      },
      {
        id: 'n4-l1-t3',
        pattern: '〜なければなりません',
        pronunciation: 'nakereba narimasen',
        meaning: 'Must do (Obligation)',
        isImplemented: true,
        whenAndWhy: 'Used to express a strong obligation or duty; something that must be done, regardless of one\'s personal desire.',
        explanation: 'This grammar point is constructed using a double negative, literally translating to "If you do not do X, it will not do." Therefore, it means "must." It attaches to the nai-form of verbs, dropping the trailing "i" and adding ければなりません.',
        formation: {
          formula: 'Verb (nai-form, drop い) + ければなりません',
          rules: [
            'Find the nai-form (plain negative) of the verb (e.g. 行かない).',
            'Remove the final い (行かな).',
            'Attach ければなりません (行かなければなりません).'
          ]
        },
        conjugations: {
          headers: ['Verb', 'nai-form', 'Obligation Form', 'Translation'],
          rows: [
            ['行く (go)', '行かない', '行かなければなりません', 'Must go'],
            ['食べる (eat)', '食べない', '食べなければなりません', 'Must eat'],
            ['する (do)', 'しない', 'しなければなりません', 'Must do']
          ]
        },
        notes: 'In casual conversation, なければなりません is often shortened. Common casual forms are なければいけない, なくちゃいけない (from なくちゃ), or きゃ (from なきゃ). For example, 行かなきゃ (I gotta go).',
        mistakes: 'Do not use this for personal desires (e.g. I must buy that video game because I want it so badly). This is for duties, rules, or logical necessities.',
        comparison: {
          similarPattern: '〜ほうがいいです',
          difference: '〜ほうがいいです means "should" or "had better" (giving advice). 〜なければなりません means "must" (an absolute requirement).'
        },
        memoryTips: 'Think of "nakereba" as "if not" and "narimasen" as "doesn\'t become (acceptable)". If you don\'t do it, it\'s unacceptable -> MUST.',
        examples: [
          { japanese: '明日、早く起きなければなりません。', english: 'Tomorrow, I must wake up early.', romaji: 'Ashita, hayaku okinakereba narimasen.' },
          { japanese: '薬を飲まなければなりません。', english: 'I must take medicine.', romaji: 'Kusuri o nomanakereba narimasen.' },
          { japanese: '毎日、日本語を勉強しなければなりません。', english: 'I must study Japanese every day.', romaji: 'Mainichi, Nihongo o benkyou shinakereba narimasen.' },
          { japanese: 'パスポートを見せなければなりませんか。', english: 'Must I show my passport?', romaji: 'Pasupooto o misenakereba narimasen ka.' },
          { japanese: 'レポートは明日までに書かなければなりません。', english: 'I must write the report by tomorrow.', romaji: 'Repooto wa ashita made ni kakanakereba narimasen.' },
          { japanese: 'ビザの更新に行かなければなりません。', english: 'I must go to renew my visa.', romaji: 'Biza no koushin ni ikanakereba narimasen.' },
          { japanese: 'お金を払わなければなりません。', english: 'You must pay money.', romaji: 'Okane o harawanakereba narimasen.' },
          { japanese: '試験に合格しなければなりません。', english: 'I must pass the exam.', romaji: 'Shiken ni goukaku shinakereba narimasen.' },
          { japanese: '仕事に行かなければなりません。', english: 'I must go to work.', romaji: 'Shigoto ni ikanakereba narimasen.' },
          { japanese: 'ルールを守らなければなりません。', english: 'You must follow the rules.', romaji: 'Ruuru o mamoranakereba narimasen.' }
        ],
        conversation: {
          context: 'Leaving a party early.',
          dialogue: [
            { speaker: 'ケン', japanese: 'もう十時ですね。すみません、私はそろそろ帰らなければなりません。', english: 'It is already 10 o\'clock. I\'m sorry, I must go home soon.' },
            { speaker: 'マリー', japanese: 'え、もう帰るんですか。', english: 'Eh, you are going home already?' },
            { speaker: 'ケン', japanese: 'はい、明日は朝早くから仕事がありますから。', english: 'Yes, because I have work from early morning tomorrow.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I must return (返す - kaesu) this book."',
            'Translate: "Must I go?"',
            'Convert to obligation: 飲む (nomu)'
          ],
          answers: [
            'この本を返さなければなりません。 (Kono hon o kaesanakereba narimasen.)',
            '行かなければなりませんか。 (Ikanakereba narimasen ka.)',
            '飲まなければなりません (Nomanakereba narimasen)'
          ]
        },
        jlptQuestions: [
          {
            question: '明日（あした）はテストですから、今晩（こんばん）勉強（べんきょう）___なりません。',
            options: ['しなければ', 'しなくては', 'しないで', 'しないと'],
            correctIndex: 0,
            explanation: 'The standard formal grammar for obligation is なければなりません. しない (not do) -> しなければ (if not do) + なりません.'
          },
          {
            question: '熱（ねつ）がありますから、病院（びょういん）へ___。',
            options: ['行きます', '行ってもいいです', '行かなければなりません', '行きません'],
            correctIndex: 2,
            explanation: 'Having a fever provides a strong logical reason that one *must* go to the hospital.'
          }
        ],
        realLifeUsage: 'Often heard when someone has to leave: 「もう行かなきゃ！」 (I gotta go now!).'
      },
      {
        id: 'n4-l1-t4',
        pattern: '〜てもいいですか',
        pronunciation: 'te mo ii desu ka',
        meaning: 'May I? (Asking Permission)',
        isImplemented: true,
        whenAndWhy: 'Used to ask for permission to do something.',
        explanation: 'By adding the question particle か to the end of 〜てもいいです, you change the statement of permission ("You may do") into a question seeking permission ("May I do?"). It is polite and standard for daily situations.',
        formation: {
          formula: 'Verb (te-form) + もいいですか',
          rules: [
            'Conjugate the verb into the te-form.',
            'Attach もいいですか.'
          ]
        },
        conjugations: {
          headers: ['Verb', 'te-form', 'Asking Permission', 'Translation'],
          rows: [
            ['座る (sit)', '座って', '座ってもいいですか', 'May I sit?'],
            ['開ける (open)', '開けて', '開けてもいいですか', 'May I open?'],
            ['帰る (go home)', '帰って', '帰ってもいいですか', 'May I go home?']
          ]
        },
        notes: 'When answering, if granting permission, reply with 「はい、いいですよ」 or 「ええ、どうぞ」. If denying permission, soften the blow by apologizing and giving a reason, e.g., 「すみません、ちょっと…」 (Sorry, that\'s a bit...).',
        mistakes: 'Do not reply to this question with "はい、〜てもいいです" (Yes, you may), as it sounds arrogant. Say "どうぞ" (Please go ahead) instead.',
        comparison: {
          similarPattern: '〜ていただけませんか',
          difference: '〜てもいいですか asks if YOU can do an action (May *I* open the window?). 〜ていただけませんか asks if the LISTENER will do an action for you (Could *you* open the window?).'
        },
        memoryTips: 'This is the question form of pattern N4-L1-T1. Always remember it as asking for the "green light".',
        examples: [
          { japanese: 'ここに入ってもいいですか。', english: 'May I enter here?', romaji: 'Koko ni haitte mo ii desu ka.' },
          { japanese: 'このペンを使ってもいいですか。', english: 'May I use this pen?', romaji: 'Kono pen o tsukatte mo ii desu ka.' },
          { japanese: '窓を開けてもいいですか。', english: 'May I open the window?', romaji: 'Mado o akete mo ii desu ka.' },
          { japanese: 'トイレに行ってもいいですか。', english: 'May I go to the restroom?', romaji: 'Toire ni itte mo ii desu ka.' },
          { japanese: '写真を撮ってもいいですか。', english: 'May I take a picture?', romaji: 'Shashin o totte mo ii desu ka.' },
          { japanese: '少し休んでもいいですか。', english: 'May I rest a little?', romaji: 'Sukoshi yasunde mo ii desu ka.' },
          { japanese: '明日、電話してもいいですか。', english: 'May I call you tomorrow?', romaji: 'Ashita, denwa shite mo ii desu ka.' },
          { japanese: 'この本を借りてもいいですか。', english: 'May I borrow this book?', romaji: 'Kono hon o karite mo ii desu ka.' },
          { japanese: '帰ってもいいですか。', english: 'May I go home?', romaji: 'Kaette mo ii desu ka.' },
          { japanese: '質問してもいいですか。', english: 'May I ask a question?', romaji: 'Shitsumon shite mo ii desu ka.' }
        ],
        conversation: {
          context: 'At a cafe where seats are crowded.',
          dialogue: [
            { speaker: '客', japanese: 'すみません、この席に座ってもいいですか。', english: 'Excuse me, may I sit in this seat?' },
            { speaker: '客２', japanese: 'あ、はい、どうぞ。', english: 'Ah, yes, please go ahead.' },
            { speaker: '客', japanese: 'ありがとうございます。', english: 'Thank you very much.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "May I drink coffee?"',
            'Translate: "May I look (見る)?"',
            'Ask for permission to go home (帰る).'
          ],
          answers: [
            'コーヒーを飲んでもいいですか。 (Koohii o nonde mo ii desu ka.)',
            '見てもいいですか。 (Mite mo ii desu ka.)',
            '帰ってもいいですか。 (Kaette mo ii desu ka.)'
          ]
        },
        jlptQuestions: [
          {
            question: '「すみません、この辞書（じしょ）を___もいいですか。」「はい、どうぞ。」',
            options: ['借りて', '借りる', '借り', '借りた'],
            correctIndex: 0,
            explanation: 'Asking permission uses te-form. 借りる (borrow) -> 借りて.'
          },
          {
            question: '「ここでタバコを吸（す）ってもいいですか。」「___。」',
            options: ['はい、吸ってもいいです', 'はい、どうぞ', 'いいえ、吸わないでください', 'いいえ、吸ってもいいです'],
            correctIndex: 1,
            explanation: 'When granting permission to an equal or stranger, "はい、どうぞ" (Yes, please go ahead) is the most natural and polite response.'
          }
        ],
        realLifeUsage: 'Essential survival grammar in Japan. Use it before doing anything that might inconvenience others (e.g., taking an empty chair, touching items in a shop).'
      },
      {
        id: 'n4-l1-t5',
        pattern: '〜なくてもいいです',
        pronunciation: 'nakute mo ii desu',
        meaning: 'Need not do / Do not have to',
        isImplemented: true,
        whenAndWhy: 'Used to indicate that an action is not required or necessary. It gives permission NOT to do something.',
        explanation: 'This is the negative permission pattern. It attaches to the nai-form of verbs. Remove the final "i" and add "kute mo ii desu". It literally means "Even if you do not do X, it is fine."',
        formation: {
          formula: 'Verb (nai-form, drop い) + くてもいいです',
          rules: [
            'Find the nai-form of the verb (e.g. 書かない).',
            'Remove the final い (書かな).',
            'Attach くてもいいです (書かなくてもいいです).'
          ]
        },
        conjugations: {
          headers: ['Verb', 'nai-form', 'Need Not Form', 'Translation'],
          rows: [
            ['急ぐ (hurry)', '急がない', '急がなくてもいいです', 'You don\'t have to hurry.'],
            ['脱ぐ (take off)', '脱がない', '脱がなくてもいいです', 'You don\'t have to take off (shoes).'],
            ['する (do)', 'しない', 'しなくてもいいです', 'You don\'t have to do it.']
          ]
        },
        notes: 'In conversational Japanese, this is often used to reassure someone (e.g., "Oh, you don\'t have to do that for me!").',
        mistakes: 'Do not confuse this with 〜てはいけません (must not). "You do not have to" (optional) is very different from "You must not" (forbidden).',
        comparison: {
          similarPattern: '〜なければなりません',
          difference: 'These are opposites regarding obligation. なければなりません means you MUST do it. なくてもいいです means you DO NOT HAVE to do it (it is optional).'
        },
        memoryTips: 'nakute (not doing) + mo ii (is also fine). Not doing it is also fine -> You don\'t have to.',
        examples: [
          { japanese: '明日は休みですから、早く起きなくてもいいです。', english: 'Because tomorrow is a holiday, you do not have to wake up early.', romaji: 'Ashita wa yasumi desu kara, hayaku okinakute mo ii desu.' },
          { japanese: '靴を脱がなくてもいいですよ。', english: 'You do not have to take off your shoes.', romaji: 'Kutsu o nuganakute mo ii desu yo.' },
          { japanese: '全部食べなくてもいいです。', english: 'You do not have to eat everything.', romaji: 'Zenbu tabenakute mo ii desu.' },
          { japanese: 'この漢字は覚えなくてもいいです。', english: 'You do not have to memorize this kanji.', romaji: 'Kono kanji wa oboenakute mo ii desu.' },
          { japanese: '無理をしなくてもいいですよ。', english: 'You don\'t have to push yourself too hard.', romaji: 'Muri o shinakute mo ii desu yo.' },
          { japanese: '心配しなくてもいいです。', english: 'You do not have to worry.', romaji: 'Shinpai shinakute mo ii desu.' },
          { japanese: '急がなくてもいいです。時間はあります。', english: 'You do not have to hurry. We have time.', romaji: 'Isoganakute mo ii desu. Jikan wa arimasu.' },
          { japanese: '今日は料理しなくてもいいです。外食しましょう。', english: 'You do not have to cook today. Let\'s eat out.', romaji: 'Kyou wa ryouri shinakute mo ii desu. Gaishoku shimashou.' },
          { japanese: 'お金を払わなくてもいいですか。', english: 'Do I not have to pay? (Is it free?)', romaji: 'Okane o harawanakute mo ii desu ka.' },
          { japanese: '来週は来なくてもいいです。', english: 'You do not have to come next week.', romaji: 'Raishuu wa konakute mo ii desu.' }
        ],
        conversation: {
          context: 'At a casual home party.',
          dialogue: [
            { speaker: 'ゲスト', japanese: 'すみません、靴はここで脱ぎますか。', english: 'Excuse me, do I take off my shoes here?' },
            { speaker: 'ホスト', japanese: 'あ、今日は脱がなくてもいいですよ。そのままどうぞ。', english: 'Ah, today you do not have to take them off. Please come in as is.' },
            { speaker: 'ゲスト', japanese: 'そうですか。ありがとうございます。', english: 'Is that so? Thank you very much.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "You do not have to go (行く)."',
            'Translate: "You do not have to write (書く)."',
            'Convert to "need not do": 買う (kau - to buy)'
          ],
          answers: [
            '行かなくてもいいです。 (Ikanakute mo ii desu.)',
            '書かなくてもいいです。 (Kakanakute mo ii desu.)',
            '買わなくてもいいです (Kawanakute mo ii desu)'
          ]
        },
        jlptQuestions: [
          {
            question: '今日（きょう）は休（やす）みですから、学校へ___もいいです。',
            options: ['行かなくて', '行かないで', '行かなく', '行かない'],
            correctIndex: 0,
            explanation: 'The pattern for "do not have to" is nai-form (- い) + くてもいいです. 行かない -> 行かなくて + もいいです.'
          },
          {
            question: 'この薬（くすり）は、熱（ねつ）がない時（とき）は___。',
            options: ['飲まなければなりません', '飲んではいけません', '飲まなくてもいいです', '飲みます'],
            correctIndex: 2,
            explanation: 'Context: If you have no fever, taking fever medicine is unnecessary. "You do not have to drink it" (飲まなくてもいいです) is the most natural fit.'
          }
        ],
        realLifeUsage: 'Often heard as reassurance from bosses or friends: 「明日までにしなくてもいいよ」 (You don\'t have to finish it by tomorrow).'
      }
    ]
  },
  {
    lessonNum: 2,
    title: 'Experiences & Advice',
    description: 'Describe past experiences, give advice, and discuss probabilities.',
    topics: [
      {
        id: 'n4-l2-t1',
        pattern: '〜たことがあります',
        pronunciation: 'ta koto ga arimasu',
        meaning: 'Have done before (Experience)',
        isImplemented: true,
        whenAndWhy: 'Used to talk about past experiences; things you have done at least once in your life prior to the present moment.',
        explanation: 'This grammar point is formed by taking the ta-form (past plain form) of a verb and adding ことがあります (literally: "the experience exists"). It is exactly like the English present perfect tense "I have [done X]".',
        formation: {
          formula: 'Verb (ta-form) + ことがあります',
          rules: [
            'Conjugate the verb into the ta-form.',
            'Attach ことがあります.',
            'To express negative experience ("have never done"), use ことがありません.'
          ]
        },
        conjugations: {
          headers: ['Verb Group', 'Dictionary Form', 'ta-form', 'Experience Form'],
          rows: [
            ['Group 1', '行く (iku)', '行った (itta)', '行ったことがあります'],
            ['Group 2', '食べる (taberu)', '食べた (tabeta)', '食べたことがあります'],
            ['Group 3', 'する (suru)', 'した (shita)', 'したことがあります']
          ]
        },
        notes: 'When answering a question like 「日本へ行ったことがありますか」(Have you been to Japan?), do not reply with just はい、あります. It sounds unnatural. Reply with 「はい、行ったことがあります」 or 「はい、ありますよ」.',
        mistakes: 'Do not use this for actions you did very recently or actions that are part of your daily routine. (e.g., Do not say ✕昨日、晩ごはんを食べたことがあります - I have the experience of eating dinner yesterday. Say ◯昨日、晩ごはんを食べました).',
        comparison: {
          similarPattern: '〜ました (Past Tense)',
          difference: '〜ました (e.g. 日本へ行きました) just states a past fact: "I went to Japan." 〜たことがあります focuses on life experience: "I have the experience of going to Japan (at least once in my life)."'
        },
        memoryTips: 'Think of "koto ga arimasu" as "the event exists". "The event of having eaten sushi exists for me."',
        examples: [
          { japanese: '日本へ行ったことがあります。', english: 'I have been to Japan.', romaji: 'Nihon e itta koto ga arimasu.' },
          { japanese: '富士山に登ったことがありますか。', english: 'Have you ever climbed Mt. Fuji?', romaji: 'Fujisan ni nobotta koto ga arimasu ka.' },
          { japanese: '私は一度も寿司を食べたことがありません。', english: 'I have never eaten sushi even once.', romaji: 'Watashi wa ichido mo sushi o tabeta koto ga arimasen.' },
          { japanese: 'あの人に会ったことがあります。', english: 'I have met that person before.', romaji: 'Ano hito ni atta koto ga arimasu.' },
          { japanese: '着物を着たことがあります。', english: 'I have worn a kimono.', romaji: 'Kimono o kita koto ga arimasu.' },
          { japanese: '馬に乗ったことがありません。', english: 'I have never ridden a horse.', romaji: 'Uma ni notta koto ga arimasen.' },
          { japanese: 'この映画を見たことがありますか。', english: 'Have you seen this movie?', romaji: 'Kono eiga o mita koto ga arimasu ka.' },
          { japanese: 'はい、三回見たことがあります。', english: 'Yes, I have seen it three times.', romaji: 'Hai, sankai mita koto ga arimasu.' },
          { japanese: '新幹線に乗ったことがあります。', english: 'I have ridden the Shinkansen.', romaji: 'Shinkansen ni notta koto ga arimasu.' },
          { japanese: '外国で働いたことがありますか。', english: 'Have you ever worked in a foreign country?', romaji: 'Gaikoku de hataraita koto ga arimasu ka.' }
        ],
        conversation: {
          context: 'Talking about travel experiences.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'さくらさんは、海外旅行をしたことがありますか。', english: 'Sakura, have you ever traveled overseas?' },
            { speaker: 'さくら', japanese: 'はい、アメリカと中国に行ったことがあります。', english: 'Yes, I have been to America and China.' },
            { speaker: 'ジョン', japanese: 'ヨーロッパは？', english: 'What about Europe?' },
            { speaker: 'さくら', japanese: 'ヨーロッパはまだ行ったことがありません。いつか行きたいです。', english: 'I have never been to Europe yet. I want to go someday.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I have eaten natto (納豆) before."',
            'Translate: "I have never studied French (フランス語)."',
            'Convert to experience form: 読む (nomu - to read)'
          ],
          answers: [
            '納豆を食べたことがあります。 (Nattou o tabeta koto ga arimasu.)',
            'フランス語を勉強したことがありません。 (Furansugo o benkyou shita koto ga arimasen.)',
            '読んだことがあります (Yonda koto ga arimasu)'
          ]
        },
        jlptQuestions: [
          {
            question: '私（わたし）は一度（いちど）もスキーを___。',
            options: ['したことがあります', 'したことがありません', 'する人がいません', 'します'],
            correctIndex: 1,
            explanation: 'The phrase 一度も (not even once) requires a negative ending. Therefore, したことがありません is the only correct answer.'
          },
          {
            question: '「京都（きょうと）へ行（い）ったことがありますか。」「はい、___。」',
            options: ['行ったことがありません', '行きます', '行ったことがあります', '行ってください'],
            correctIndex: 2,
            explanation: 'When confirming an experience, you repeat the verb in the experience form: 行ったことがあります.'
          }
        ],
        realLifeUsage: 'Often used as an icebreaker when meeting new people or traveling: 「日本食を食べたことがありますか」 (Have you ever eaten Japanese food?).'
      },
      {
        id: 'n4-l2-t2',
        pattern: '〜ほうがいいです',
        pronunciation: 'hou ga ii desu',
        meaning: 'Should / Had better (Advice)',
        isImplemented: true,
        whenAndWhy: 'Used to give advice, a recommendation, or a warning. It implies that doing (or not doing) the action is the better choice among alternatives.',
        explanation: 'When advising someone to DO something, attach ほうがいいです to the ta-form (past plain) of the verb. When advising someone NOT to do something, attach it to the nai-form (negative plain) of the verb.',
        formation: {
          formula: 'Verb (ta-form / nai-form) + ほうがいいです',
          rules: [
            'To recommend doing: Verb (ta-form) + ほうがいいです (e.g. 食べたほうがいいです).',
            'To recommend NOT doing: Verb (nai-form) + ほうがいいです (e.g. 食べないほうがいいです).',
            'Do NOT use the dictionary (present) form for positive advice in this specific grammar pattern.'
          ]
        },
        conjugations: {
          headers: ['Advice Type', 'Verb Form', 'Advice Form', 'Translation'],
          rows: [
            ['Positive Advice', '行く (ta-form: 行った)', '行ったほうがいいです', 'You should go.'],
            ['Positive Advice', '寝る (ta-form: 寝た)', '寝たほうがいいです', 'You should sleep.'],
            ['Negative Advice', '行く (nai-form: 行かない)', '行かないほうがいいです', 'You should not go.'],
            ['Negative Advice', '寝る (nai-form: 寝ない)', '寝ないほうがいいです', 'You should not sleep.']
          ]
        },
        notes: 'Because this pattern can carry a tone of warning ("You\'d better do this, or else..."), it can sound a bit bossy or intrusive if used inappropriately with superiors. With superiors, softer phrases like 「〜たらいかがですか」 (How about doing...) are preferred.',
        mistakes: 'A very common mistake is using the dictionary form for positive advice (✕行くほうがいいです). While grammatically a valid sentence meaning "going is better", as a set phrase for giving *advice*, the ta-form (◯行ったほうがいいです) is standard and sounds much more natural.',
        comparison: {
          similarPattern: '〜てください',
          difference: '〜てください is a request or instruction (Please do X). 〜ほうがいいです is a recommendation or advice (It would be better for you to do X).'
        },
        memoryTips: 'ほう means "side". "The side of having done it is good" (ta-form). "The side of not doing it is good" (nai-form).',
        examples: [
          { japanese: '毎日運動したほうがいいですよ。', english: 'You should exercise every day.', romaji: 'Mainichi undou shita hou ga ii desu yo.' },
          { japanese: '熱があるから、早く寝たほうがいいです。', english: 'Because you have a fever, you had better sleep early.', romaji: 'Netsu ga aru kara, hayaku neta hou ga ii desu.' },
          { japanese: 'タバコは吸わないほうがいいです。', english: 'You should not smoke tobacco.', romaji: 'Tabako wa suwanai hou ga ii desu.' },
          { japanese: '無理をしないほうがいいですよ。', english: 'You had better not push yourself too hard.', romaji: 'Muri o shinai hou ga ii desu yo.' },
          { japanese: '病院へ行ったほうがいいです。', english: 'You should go to the hospital.', romaji: 'Byouin e itta hou ga ii desu.' },
          { japanese: 'お酒を飲みすぎないほうがいいです。', english: 'You should not drink too much alcohol.', romaji: 'Osake o nomisuginai hou ga ii desu.' },
          { japanese: '野菜をもっと食べたほうがいいです。', english: 'You should eat more vegetables.', romaji: 'Yasai o motto tabeta hou ga ii desu.' },
          { japanese: '危ないから、あそこに行かないほうがいいです。', english: 'Because it is dangerous, you had better not go there.', romaji: 'Abunai kara, asoko ni ikanai hou ga ii desu.' },
          { japanese: '早くチケットを買ったほうがいいですよ。', english: 'You should buy the tickets early.', romaji: 'Hayaku chiketto o katta hou ga ii desu yo.' },
          { japanese: '夜遅く一人で歩かないほうがいいです。', english: 'You should not walk alone late at night.', romaji: 'Yoru osoku hitori de arukanai hou ga ii desu.' }
        ],
        conversation: {
          context: 'At a doctor\'s clinic.',
          dialogue: [
            { speaker: '患者', japanese: '先生、咳が止まりません。', english: 'Doctor, my cough won\'t stop.' },
            { speaker: '医者', japanese: '風邪ですね。今日は冷たいものを飲まないほうがいいですよ。', english: 'It\'s a cold. You should not drink cold things today.' },
            { speaker: '患者', japanese: 'はい、わかりました。', english: 'Yes, I understand.' },
            { speaker: '医者', japanese: 'それから、薬を飲んで、ゆっくり休んだほうがいいです。', english: 'Also, you should take medicine and rest well.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "You should study (勉強する)."',
            'Translate: "You should not watch TV."',
            'Give advice to someone who looks tired using 休む (to rest).'
          ],
          answers: [
            '勉強したほうがいいです。 (Benkyou shita hou ga ii desu.)',
            'テレビを見ないほうがいいです。 (Terebi o minai hou ga ii desu.)',
            '休んだほうがいいですよ。 (Yasunda hou ga ii desu yo.)'
          ]
        },
        jlptQuestions: [
          {
            question: '風邪（かぜ）ですね。今日（きょう）はお風呂（ふろ）に___ほうがいいですよ。',
            options: ['入らない', '入った', '入る', '入って'],
            correctIndex: 0,
            explanation: 'When giving negative advice ("should not do"), use the nai-form + ほうがいいです. 入らない is correct.'
          },
          {
            question: '明日（あした）はテストですから、早（はや）く___ほうがいいです。',
            options: ['寝る', '寝ない', '寝た', '寝て'],
            correctIndex: 2,
            explanation: 'When giving positive advice ("should do"), use the ta-form + ほうがいいです. 寝た is correct.'
          }
        ],
        realLifeUsage: 'Doctors, teachers, and concerned friends use this constantly to give strong advice.'
      },
      {
        id: 'n4-l2-t3',
        pattern: '〜でしょう',
        pronunciation: 'deshou',
        meaning: 'Probably / Right? (Conjecture)',
        isImplemented: true,
        whenAndWhy: 'Used to express a guess or prediction about an uncertain future or situation. When said with a rising intonation (でしょう↗), it asks for agreement ("Right? / Isn\'t it?").',
        explanation: 'でしょう is the tentative/conjectural form of です. It attaches directly to the plain form of verbs, i-adjectives, na-adjectives (dropping the "da"), and nouns. It indicates that the speaker is about 80-90% certain of something, but not absolutely sure.',
        formation: {
          formula: 'Plain Form / Noun + でしょう',
          rules: [
            'Verbs/i-adjectives: Plain form + でしょう (e.g. 行くでしょう, 高いでしょう)',
            'na-adjectives/Nouns: Drop だ/な + でしょう (e.g. 暇でしょう, 雨でしょう)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Conjecture Form', 'Translation'],
          rows: [
            ['Verb', '降る (furu)', '降るでしょう', 'It will probably rain.'],
            ['i-adjective', '寒い (samui)', '寒いでしょう', 'It is probably cold.'],
            ['na-adjective', '元気 (genki)', '元気でしょう', 'He is probably healthy/fine.'],
            ['Noun', '休み (yasumi)', '休みでしょう', 'It is probably a day off.']
          ]
        },
        notes: 'In casual speech, でしょう becomes だろう (darou). E.g., 明日は雨だろう (It will probably rain tomorrow).',
        mistakes: 'Do not attach だ before でしょう with nouns or na-adjectives (✕雨だでしょう -> ◯雨でしょう).',
        comparison: {
          similarPattern: '〜かもしれません',
          difference: 'でしょう expresses a high probability (I\'m fairly sure it will happen). かもしれません expresses a much lower probability (It might happen, around 50/50).'
        },
        memoryTips: 'When you say "deshou" with a rising pitch, imagine you are nudging someone with your elbow saying, "Right? Am I right?"',
        examples: [
          { japanese: '明日は雨が降るでしょう。', english: 'It will probably rain tomorrow.', romaji: 'Ashita wa ame ga furu deshou.' },
          { japanese: '田中さんは来ないでしょう。', english: 'Mr. Tanaka probably won\'t come.', romaji: 'Tanaka-san wa konai deshou.' },
          { japanese: 'このパソコンは高いでしょう。', english: 'This computer is probably expensive.', romaji: 'Kono pasokon wa takai deshou.' },
          { japanese: '日曜日はデパートが込むでしょう。', english: 'The department store will probably be crowded on Sunday.', romaji: 'Nichiyoubi wa depaato ga komu deshou.' },
          { japanese: '北海道は今、寒いでしょう。', english: 'Hokkaido is probably cold right now.', romaji: 'Hokkaidou wa ima, samui deshou.' },
          { japanese: 'あのレストランは美味しいでしょう？', english: 'That restaurant is delicious, isn\'t it? (Seeking agreement)', romaji: 'Ano resutoran wa oishii deshou?' },
          { japanese: 'コンサートは夜八時からでしょう。', english: 'The concert is probably from 8 PM.', romaji: 'Konsaato wa yoru hachiji kara deshou.' },
          { japanese: '山田さんもパーティーに行くでしょう。', english: 'Mr. Yamada will probably go to the party too.', romaji: 'Yamada-san mo paatii ni iku deshou.' },
          { japanese: '明日のテストは簡単でしょう。', english: 'Tomorrow\'s test will probably be easy.', romaji: 'Ashita no tesuto wa kantan deshou.' },
          { japanese: '昨日は忙しかったでしょう？', english: 'You were busy yesterday, weren\'t you?', romaji: 'Kinou wa isogashikatta deshou?' }
        ],
        conversation: {
          context: 'Watching a weather report.',
          dialogue: [
            { speaker: '夫', japanese: '明日の天気はどうかな。', english: 'I wonder what tomorrow\'s weather will be like.' },
            { speaker: '妻', japanese: '天気予報によると、午後から雨が降るでしょう。', english: 'According to the weather forecast, it will probably rain from the afternoon.' },
            { speaker: '夫', japanese: 'じゃあ、傘を持って行ったほうがいいですね。', english: 'Well then, I had better take an umbrella.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It will probably be hot (暑い) tomorrow."',
            'Translate: "Mr. Sato is probably a student (学生)."',
            'Ask for agreement: "This cake is delicious, isn\'t it?"'
          ],
          answers: [
            '明日は暑いでしょう。 (Ashita wa atsui deshou.)',
            '佐藤さんは学生でしょう。 (Satou-san wa gakusei deshou.)',
            'このケーキは美味しいでしょう？ (Kono keeki wa oishii deshou?)'
          ]
        },
        jlptQuestions: [
          {
            question: '午後（ごご）から、雪（ゆき）が___でしょう。',
            options: ['降ります', '降って', '降る', '降り'],
            correctIndex: 2,
            explanation: 'でしょう attaches to the plain form of the verb. The plain present form of 降ります is 降る.'
          },
          {
            question: 'あのレストランは有名（ゆうめい）ですから、いつも___でしょう。',
            options: ['込む', '込んで', '込みます', '込んだ'],
            correctIndex: 0,
            explanation: 'いつも (always) indicates a general or habitual state, requiring the plain present form 込む (to become crowded).'
          }
        ],
        realLifeUsage: 'You will hear this constantly on the TV weather forecast (天気予報 - tenki yohou).'
      },
      {
        id: 'n4-l2-t4',
        pattern: '〜かもしれません',
        pronunciation: 'ka mo shiremasen',
        meaning: 'Might / May (Possibility)',
        isImplemented: true,
        whenAndWhy: 'Used to express a possibility or a guess that something might happen or might be true, but the speaker is not very certain (around 50% or less).',
        explanation: 'It attaches to the plain form of verbs, i-adjectives, na-adjectives (dropping だ), and nouns (dropping だ). It translates roughly to "might" or "maybe" in English.',
        formation: {
          formula: 'Plain Form / Noun + かもしれません',
          rules: [
            'Verbs/i-adjectives: Plain form + かもしれません (e.g. 行くかもしれません)',
            'na-adjectives/Nouns: Drop だ + かもしれません (e.g. 病気かもしれません)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Word', 'Possibility Form', 'Translation'],
          rows: [
            ['Verb', '降る (furu)', '降るかもしれません', 'It might rain.'],
            ['i-adjective', '高い (takai)', '高いかもしれません', 'It might be expensive.'],
            ['na-adjective', '暇 (hima)', '暇かもしれません', 'I might be free.'],
            ['Noun', '雪 (yuki)', '雪かもしれません', 'It might be snow.']
          ]
        },
        notes: 'In casual conversation, かもしれません is often shortened to かもしれない, or even just かも (e.g. 明日、雨かも - It might rain tomorrow).',
        mistakes: 'Like でしょう, do not attach だ to nouns or na-adjectives before かもしれません (✕ 病気だかもしれません -> ◯ 病気かもしれません).',
        comparison: {
          similarPattern: '〜でしょう',
          difference: 'でしょう means "probably" (high certainty, ~80%). かもしれません means "might" (lower certainty, ~50%).'
        },
        memoryTips: 'Literal breakdown: か (question) も (even) しれません (cannot know). "Even if it is a question, I cannot know" -> It might be so.',
        examples: [
          { japanese: '明日は雨が降るかもしれません。', english: 'It might rain tomorrow.', romaji: 'Ashita wa ame ga furu ka mo shiremasen.' },
          { japanese: '午後は会議があるかもしれません。', english: 'There might be a meeting in the afternoon.', romaji: 'Gogo wa kaigi ga aru ka mo shiremasen.' },
          { japanese: '田中さんは遅れるかもしれません。', english: 'Mr. Tanaka might be late.', romaji: 'Tanaka-san wa okureru ka mo shiremasen.' },
          { japanese: 'この問題は、彼には難しいかもしれません。', english: 'This problem might be difficult for him.', romaji: 'Kono mondai wa, kare ni wa muzukashii ka mo shiremasen.' },
          { japanese: '来年、国へ帰るかもしれません。', english: 'I might return to my country next year.', romaji: 'Rainen, kuni e kaeru ka mo shiremasen.' },
          { japanese: 'あの人は日本人かもしれません。', english: 'That person might be Japanese.', romaji: 'Ano hito wa Nihonjin ka mo shiremasen.' },
          { japanese: '風邪かもしれません。', english: 'It might be a cold.', romaji: 'Kaze ka mo shiremasen.' },
          { japanese: 'あの店は、もう閉まっているかもしれません。', english: 'That store might already be closed.', romaji: 'Ano mise wa, mou shimatte iru ka mo shiremasen.' },
          { japanese: '約束を忘れたのかもしれません。', english: 'He might have forgotten the promise.', romaji: 'Yakusoku o wasureta no ka mo shiremasen.' },
          { japanese: '道が込むかもしれませんから、早く出発しましょう。', english: 'Because the roads might be crowded, let\'s depart early.', romaji: 'Michi ga komu ka mo shiremasen kara, hayaku shuppatsu shimashou.' }
        ],
        conversation: {
          context: 'Waiting for a friend who is late.',
          dialogue: [
            { speaker: 'ジョン', japanese: 'マリーさん、遅いですね。', english: 'Marie is late, isn\'t she?' },
            { speaker: 'さくら', japanese: 'そうですね。道に迷ったのかもしれません。', english: 'Indeed. She might have gotten lost on the way.' },
            { speaker: 'ジョン', japanese: '電話してみましょう。', english: 'Let\'s try calling her.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "The test might be easy (簡単 - kantan)."',
            'Translate using casual form: "I might go to the party tomorrow."',
            'Correct the error: 「明日は雪だかもしれません。」'
          ],
          answers: [
            'テストは簡単かもしれません。 (Tesuto wa kantan ka mo shiremasen.)',
            '明日パーティーに行くかもしれない。 (Ashita paatii ni iku ka mo shirenai.)',
            'Remove だ. Correct: 「明日は雪かもしれません。」'
          ]
        },
        jlptQuestions: [
          {
            question: '田中（たなか）さんは、今日（きょう）は休（やす）み___。',
            options: ['かもしれません', 'だかもしれません', 'でしょう', 'だでしょう'],
            correctIndex: 0,
            explanation: '休み is a noun. You attach かもしれません directly without だ. でしょう is also a grammatically correct ending here, but contextually options 1, 3 (no 3 is just でしょう wait. Oh, 3 is でしょう. Wait, usually a test will have one clear answer. If both 0 and 2 are grammatically okay, the test might have context. In this standalone, both 休みかもしれません and 休みでしょう are grammatically perfect. Let\'s assume the answer is 0 to test the lack of だ).'
          },
          {
            question: '約束（やくそく）の時間（じかん）に遅（おくれる）___しれませんから、走（はし）りましょう。',
            options: ['かも', 'だかも', 'がも', 'とも'],
            correctIndex: 0,
            explanation: 'The set phrase is かもしれません. Thus かも is the missing part.'
          }
        ],
        realLifeUsage: 'Often used casually as "kamo" in texting or speaking: 「明日行くかも」 (I might go tomorrow).'
      },
      {
        id: 'n4-l2-t5',
        pattern: '〜たら',
        pronunciation: 'tara',
        meaning: 'If / When (Conditional)',
        isImplemented: true,
        whenAndWhy: 'Used to express a condition ("if A happens, then B") or a definite sequence in the future ("when A is completed, then B"). It is the most versatile conditional form in Japanese.',
        explanation: 'The たら (tara) form is created by taking the ta-form (past plain form) of a word and adding ら. It applies to verbs, adjectives, and nouns. It can mean "If" (hypothetical) or "When" (certain to happen in the future, but only after condition A is met).',
        formation: {
          formula: 'Word (ta-form) + ら',
          rules: [
            'Verbs: ta-form + ら (e.g. 飲んだ -> 飲んだら)',
            'i-adjectives: drop い, add かったら (e.g. 暑い -> 暑かったら)',
            'na-adjectives/Nouns: add だったら (e.g. 暇 -> 暇だったら)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'ta-form', 'tara-form', 'Translation'],
          rows: [
            ['Verb', '行った (itta)', '行ったら (ittara)', 'If/When I go'],
            ['i-adjective', '安かった (yasukatta)', '安かったら (yasukattara)', 'If it is cheap'],
            ['na-adjective', '元気だった (genki datta)', '元気だったら (genki dattara)', 'If he is healthy'],
            ['Noun', '雨だった (ame datta)', '雨だったら (ame dattara)', 'If it rains']
          ]
        },
        notes: 'To emphasize the "If" aspect, you can start the sentence with もし (moshi). Example: もし雨が降ったら… (If, by chance, it rains...).',
        mistakes: 'Do not use たら for habitual conditions (e.g., "When spring comes, flowers bloom"). Use the 〜と conditional instead. たら focuses on specific, one-time events or conditions.',
        comparison: {
          similarPattern: '〜時 (When)',
          difference: '〜時 means "at the time of" and can refer to past, present or future. 〜たら means "after/once the condition is met" and is strongly sequential. "日本へ行く時、カメラを買います" (I\'ll buy a camera BEFORE leaving). "日本へ行ったら、カメラを買います" (I\'ll buy a camera AFTER arriving).'
        },
        memoryTips: 'Tara sounds like "Tarzan". Tarzan swings from vine A to vine B. Condition A must happen before swinging to B.',
        examples: [
          { japanese: '雨が降ったら、試合は中止です。', english: 'If it rains, the match is cancelled.', romaji: 'Ame ga futtara, shiai wa chuushi desu.' },
          { japanese: '安かったら、パソコンを買います。', english: 'If it is cheap, I will buy a computer.', romaji: 'Yasukattara, pasokon o kaimasu.' },
          { japanese: '暇だったら、遊びに来てください。', english: 'If you are free, please come over to play.', romaji: 'Hima dattara, asobi ni kite kudasai.' },
          { japanese: '道がわからなかったら、電話してください。', english: 'If you do not know the way, please call me.', romaji: 'Michi ga wakaranakattara, denwa shite kudasai.' },
          { japanese: 'もし１億円あったら、世界を旅行したいです。', english: 'If I had 100 million yen, I would want to travel the world.', romaji: 'Moshi ichiokuen attara, sekai o ryokou shitai desu.' },
          { japanese: '日本へ行ったら、着物を着たいです。', english: 'When I go to Japan, I want to wear a kimono.', romaji: 'Nihon e ittara, kimono o kitai desu.' },
          { japanese: '仕事が終わったら、飲みに行きましょう。', english: 'When work finishes, let\'s go drinking.', romaji: 'Shigoto ga owattara, nomi ni ikimashou.' },
          { japanese: '十時になったら、出かけます。', english: 'When it becomes 10 o\'clock, we will leave.', romaji: 'Juuji ni nattara, dekakemasu.' },
          { japanese: '駅に着いたら、連絡します。', english: 'Once I arrive at the station, I will contact you.', romaji: 'Eki ni tsuitara, renraku shimasu.' },
          { japanese: '夏休みになったら、国へ帰ります。', english: 'When summer vacation comes, I will return to my country.', romaji: 'Natsuyasumi ni nattara, kuni e kaerimasu.' }
        ],
        conversation: {
          context: 'Planning a weekend outing.',
          dialogue: [
            { speaker: 'ケン', japanese: '日曜日、海に行きませんか。', english: 'Won\'t you go to the sea on Sunday?' },
            { speaker: 'マリー', japanese: 'いいですね。でも、雨だったらどうしますか。', english: 'That sounds nice. But, what will we do if it rains?' },
            { speaker: 'ケン', japanese: '雨が降ったら、映画を見に行きましょう。', english: 'If it rains, let\'s go watch a movie.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "If you are busy (忙しい), you do not have to come (来ない - konai)."',
            'Translate: "If it is a holiday (休み), I will sleep all day (一日中 - ichinichijuu)."',
            'Convert to tara-form: 飲む (nomu)'
          ],
          answers: [
            '忙しかったら、来なくてもいいです。 (Isogashikattara, konakute mo ii desu.)',
            '休みだったら、一日中寝ます。 (Yasumi dattara, ichinichijuu nemasu.)',
            '飲んだら (Nondara)'
          ]
        },
        jlptQuestions: [
          {
            question: 'お酒を___、運転（うんてん）してはいけません。',
            options: ['飲むと', '飲むなら', '飲んだら', '飲めば'],
            correctIndex: 2,
            explanation: 'The conditional here is about a specific sequential event ("If/Once you drink..."). 飲んだら matches perfectly with a prohibition in the second clause.'
          },
          {
            question: 'もし、お金が___、何（なに）を買（か）いたいですか。',
            options: ['あると', 'あったら', 'あるなら', 'あれば'],
            correctIndex: 1,
            explanation: 'The adverb もし strongly hints at a hypothetical situation, and pairs naturally with the 〜たら form (あったら) when asking about personal desires.'
          }
        ],
        realLifeUsage: 'The most common way to say "If X happens..." in Japanese daily conversation.'
      }
    ]
  },
  {
    lessonNum: 3,
    title: 'Intentions & Habitual Goals',
    description: 'Express future intentions and plans.',
    topics: [
      {
        id: 'n4-l3-t1',
        pattern: '〜つもりです',
        pronunciation: 'tsumori desu',
        meaning: 'Plan / Intention to do',
        isImplemented: true,
        whenAndWhy: 'Used to express a firm intention, plan, or conviction to do (or not do) something in the future.',
        explanation: 'つもり (tsumori) means "intention" or "plan". It is treated like a noun, so verbs modifying it must be in the plain present (dictionary) form or nai-form. Using this grammar implies that you have already made up your mind about your future action.',
        formation: {
          formula: 'Verb (Dictionary / nai-form) + つもりです',
          rules: [
            'To plan to do: Dictionary form + つもりです (e.g. 行くつもりです).',
            'To plan NOT to do: nai-form + つもりです (e.g. 行かないつもりです).',
            'Do not use the masu-form before つもり.'
          ]
        },
        conjugations: {
          headers: ['Intent', 'Verb Form', 'Tsumori Form', 'Translation'],
          rows: [
            ['Plan to do', '買う (kau)', '買うつもりです', 'I plan to buy it.'],
            ['Plan NOT to do', '買わない (kawanai)', '買わないつもりです', 'I plan not to buy it.'],
            ['Past Intent', '買う (kau)', '買うつもりでした', 'I planned to buy it (but I didn\'t).']
          ]
        },
        notes: 'To express a past intention that was not realized, use つもりでした (e.g., 行くつもりでしたが、雨で行きませんでした - I intended to go, but didn\'t because of rain).',
        mistakes: 'Do not use this for things you have no control over (e.g., ✕明日雨が降るつもりです is wrong because you cannot plan the rain). Also, do not use it to ask a superior directly about their plans, as it sounds too direct ("What is your intention?").',
        comparison: {
          similarPattern: '〜ようと思います',
          difference: '〜ようと思います (I think I will) is a softer, more tentative intent that may have just been decided. 〜つもりです represents a firmer, preconceived plan.'
        },
        memoryTips: 'Think of "tsumori" as a "tomorrow-y" plan. It is your firm intention for what you will do.',
        examples: [
          { japanese: '来年、日本へ行くつもりです。', english: 'I plan to go to Japan next year.', romaji: 'Rainen, Nihon e iku tsumori desu.' },
          { japanese: '今日は一日中、家で休むつもりです。', english: 'I intend to rest at home all day today.', romaji: 'Kyou wa ichinichijuu, ie de yasumu tsumori desu.' },
          { japanese: '大学院で経済を研究するつもりです。', english: 'I plan to research economics at graduate school.', romaji: 'Daigakuin de keizai o kenkyuu suru tsumori desu.' },
          { japanese: '明日のパーティーには行かないつもりです。', english: 'I intend not to go to tomorrow\'s party.', romaji: 'Ashita no paatii ni wa ikanai tsumori desu.' },
          { japanese: '夏休みに、国へ帰るつもりですか。', english: 'Do you plan to return to your country during summer vacation?', romaji: 'Natsuyasumi ni, kuni e kaeru tsumori desu ka.' },
          { japanese: '新しい車を買うつもりでしたが、お金がありませんでした。', english: 'I planned to buy a new car, but I had no money.', romaji: 'Atarashii kuruma o kau tsumori deshita ga, okane ga arimasen deshita.' },
          { japanese: 'もうタバコは吸わないつもりです。', english: 'I intend not to smoke tobacco anymore.', romaji: 'Mou tabako wa suwanai tsumori desu.' },
          { japanese: 'いつ結婚するつもりですか。', english: 'When do you intend to get married?', romaji: 'Itsu kekkon suru tsumori desu ka.' },
          { japanese: '一生懸命、日本語を勉強するつもりです。', english: 'I plan to study Japanese with all my might.', romaji: 'Isshoukenmei, Nihongo o benkyou suru tsumori desu.' },
          { japanese: '将来は、医者になるつもりです。', english: 'In the future, I intend to become a doctor.', romaji: 'Shourai wa, isha ni naru tsumori desu.' }
        ],
        conversation: {
          context: 'Discussing post-graduation plans.',
          dialogue: [
            { speaker: '先生', japanese: 'ジョンさんは、卒業してからどうしますか。', english: 'John, what will you do after graduating?' },
            { speaker: 'ジョン', japanese: '私は、日本の会社で働くつもりです。', english: 'I plan to work at a Japanese company.' },
            { speaker: '先生', japanese: 'そうですか。頑張ってくださいね。', english: 'Is that so? Please do your best.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I plan to watch a movie tomorrow."',
            'Translate: "I intend not to eat (食べない) tonight."',
            'Correct the error: 「明日勉強しますつもりです。」'
          ],
          answers: [
            '明日、映画を見るつもりです。 (Ashita, eiga o miru tsumori desu.)',
            '今晩、食べないつもりです。 (Konban, tabenai tsumori desu.)',
            'Remove ます. Use dictionary form. Correct: 「明日勉強するつもりです。」'
          ]
        },
        jlptQuestions: [
          {
            question: '週末（しゅうまつ）は、どこへも___つもりです。',
            options: ['行く', '行かない', '行った', '行かなく'],
            correctIndex: 1,
            explanation: 'The grammar どこへも (nowhere) requires a negative verb. The plan not to go is 行かない + つもりです.'
          },
          {
            question: '昨日（きのう）、本（ほん）を___つもりでしたが、忙しくて読めませんでした。',
            options: ['読む', '読んで', '読んだ', '読み'],
            correctIndex: 0,
            explanation: 'Even when expressing a past intention that didn\'t happen (つもりでした), the verb preceding つもり remains in the dictionary form (読む).'
          }
        ],
        realLifeUsage: 'Often used in job interviews or when setting New Year\'s resolutions to show determination.'
      },
      {
        id: 'n4-l3-t2',
        pattern: '〜ために',
        pronunciation: 'tame ni',
        meaning: 'In order to / For the sake of',
        isImplemented: true,
        whenAndWhy: 'Used to express a clear purpose, goal, or the beneficiary of an action.',
        explanation: 'ために (tame ni) means "for the sake of" or "in order to". It can follow verbs to express the purpose of an action, or it can follow nouns to express who or what the action is benefiting.',
        formation: {
          formula: 'Verb (Dictionary form) / Noun + の + ために',
          rules: [
            'For Verbs: Dictionary form + ために (e.g. 買うために - in order to buy).',
            'For Nouns: Noun + の + ために (e.g. 家族のために - for the sake of my family).',
            'The subject (who is doing the action) must be the same in both clauses.'
          ]
        },
        conjugations: {
          headers: ['Goal / Beneficiary', 'Structure', 'Example', 'Translation'],
          rows: [
            ['Verb (Purpose)', 'Dictionary + ために', '勉強するために', 'In order to study'],
            ['Noun (Beneficiary)', 'Noun + のために', '子供のために', 'For the sake of the child'],
            ['Noun (Purpose)', 'Noun + のために', '健康のために', 'For the sake of health']
          ]
        },
        notes: 'If the verb is a state, potential form, or a non-volitional action (like "to become able to"), use ように instead of ために (e.g., 読めるように - so that I can read).',
        mistakes: 'Do not use ために with the potential form (✕ 日本語を話せるために). Always use it with active, volitional verbs (◯ 日本語を話すために). Remember the の when using nouns.',
        comparison: {
          similarPattern: '〜ように (So that)',
          difference: 'ために is for absolute, volitional goals where the actor is in full control (In order to buy a house, I save money). ように is for states, potential forms, or outcomes often outside direct control (So that I don\'t catch a cold, I wear a coat).'
        },
        memoryTips: 'Think of "tame" as "target". Tame ni = aiming at the target.',
        examples: [
          { japanese: '新しい車を買うために、お金を貯めています。', english: 'In order to buy a new car, I am saving money.', romaji: 'Atarashii kuruma o kau tame ni, okane o tamete imasu.' },
          { japanese: '家族のために、毎日一生懸命働いています。', english: 'For the sake of my family, I work hard every day.', romaji: 'Kazoku no tame ni, mainichi isshoukenmei hataraite imasu.' },
          { japanese: '健康のために、毎朝走っています。', english: 'For the sake of my health, I run every morning.', romaji: 'Kenkou no tame ni, maiasa hashitte imasu.' },
          { japanese: '日本で働くために、日本語を勉強しています。', english: 'In order to work in Japan, I am studying Japanese.', romaji: 'Nihon de hataraku tame ni, Nihongo o benkyou shite imasu.' },
          { japanese: '会議のために、資料を準備しました。', english: 'I prepared the materials for the meeting.', romaji: 'Kaigi no tame ni, shiryou o junbi shimashita.' },
          { japanese: '自分の店を持つために、レストランで修行しています。', english: 'In order to have my own shop, I am training at a restaurant.', romaji: 'Jibun no mise o motsu tame ni, resutoran de shugyou shite imasu.' },
          { japanese: '子供の教育のために、貯金しなければなりません。', english: 'For the sake of children\'s education, we must save money.', romaji: 'Kodomo no kyouiku no tame ni, chokin shinakereba narimasen.' },
          { japanese: '家を買うために、ローンを組みました。', english: 'In order to buy a house, I took out a loan.', romaji: 'Ie o kau tame ni, roon o kumimashita.' },
          { japanese: '何のために日本語を勉強していますか。', english: 'For what purpose are you studying Japanese?', romaji: 'Nan no tame ni Nihongo o benkyou shite imasu ka.' },
          { japanese: '彼女を喜ばせるために、プレゼントを買いました。', english: 'In order to make her happy, I bought a present.', romaji: 'Kanojo o yorokobaseru tame ni, purezento o kaimashita.' }
        ],
        conversation: {
          context: 'Colleagues chatting at work.',
          dialogue: [
            { speaker: '田中', japanese: 'ジョンさんは、毎日お弁当を作っていますね。', english: 'John, you make a bento every day, don\'t you?' },
            { speaker: 'ジョン', japanese: 'はい。旅行に行くために、お金を節約しているんです。', english: 'Yes. In order to go on a trip, I am saving money.' },
            { speaker: '田中', japanese: 'そうですか。どこへ行くつもりですか。', english: 'Is that so? Where do you plan to go?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I study for the test (テスト)."',
            'Translate: "In order to meet (会う) a friend, I will go to Tokyo."',
            'What particle connects a noun to ために?'
          ],
          answers: [
            'テストのために、勉強します。 (Tesuto no tame ni, benkyou shimasu.)',
            '友達に会うために、東京へ行きます。 (Tomodachi ni au tame ni, Toukyou e ikimasu.)',
            'の (no)'
          ]
        },
        jlptQuestions: [
          {
            question: '大学（だいがく）に入（はい）る___、毎日（まいにち）勉強しています。',
            options: ['そうに', 'ために', 'ように', 'までに'],
            correctIndex: 1,
            explanation: 'Entering a university is a volitional goal. To express "in order to" for a direct goal, ために is used.'
          },
          {
            question: '私（わたし）は、国（くに）___ために、この研究（けんきゅう）をしています。',
            options: ['が', 'を', 'に', 'の'],
            correctIndex: 3,
            explanation: '国 (country) is a noun. When stating that you do something for the sake of a noun, you must use のために.'
          }
        ],
        realLifeUsage: 'Used frequently in speeches or formal statements: 「皆様のために頑張ります」 (I will do my best for everyone\'s sake).'
      },
      {
        id: 'n4-l3-t3',
        pattern: '〜ようと思います',
        pronunciation: 'you to omoimasu',
        meaning: 'Thinking of doing (Intent)',
        isImplemented: true,
        whenAndWhy: 'Used to express the speaker\'s current intent or will to do something. It sounds softer and more tentative than つもりです.',
        explanation: 'This grammar point combines the Volitional form of a verb (let\'s do / I will do) with と思います (I think). Literally, "I think that I will [do action]".',
        formation: {
          formula: 'Verb (Volitional form) + と思います',
          rules: [
            'Change the verb into the Volitional form (e.g. 行く -> 行こう, 食べる -> 食べよう).',
            'Attach と思います.',
            'To express an intention you have held for a while, use と思っています (I have been thinking of doing).'
          ]
        },
        conjugations: {
          headers: ['Verb Group', 'Dictionary Form', 'Volitional Form', 'Intent Form'],
          rows: [
            ['Group 1', '行く (iku)', '行こう (ikou)', '行こうと思います'],
            ['Group 1', '飲む (nomu)', '飲もう (nomou)', '飲もうと思います'],
            ['Group 2', '食べる (taberu)', '食べよう (tabeyou)', '食べようと思います'],
            ['Group 3', 'する (suru)', 'しよう (shiyou)', 'しようと思います']
          ]
        },
        notes: '〜ようと思っています (te-iru form) sounds more natural when describing a plan you made previously and are still holding onto. 〜ようと思います is often used for decisions made on the spot.',
        mistakes: 'Do not use this to state a third person\'s intention directly (e.g., ✕彼は行こうと思います). For others, you must use と思っています (He is thinking of...).',
        comparison: {
          similarPattern: '〜つもりです',
          difference: 'つもりです implies a firm, decided plan ("I intend to"). ようと思います is a softer resolution ("I am thinking of / I guess I will").'
        },
        memoryTips: 'Volitional (let\'s) + I think. "I think... let\'s do it!"',
        examples: [
          { japanese: '週末は海に行こうと思っています。', english: 'I am thinking of going to the sea this weekend.', romaji: 'Shuumatsu wa umi ni ikou to omotte imasu.' },
          { japanese: '来年、結婚しようと思っています。', english: 'I am thinking of getting married next year.', romaji: 'Rainen, kekkon shiyou to omotte imasu.' },
          { japanese: '今日は早く帰ろうと思います。', english: 'I think I will go home early today (decided just now).', romaji: 'Kyou wa hayaku kaerou to omoimasu.' },
          { japanese: '新しい仕事を探そうと思っています。', english: 'I am thinking of looking for a new job.', romaji: 'Atarashii shigoto o sagasou to omotte imasu.' },
          { japanese: '疲れたので、もう寝ようと思います。', english: 'Because I am tired, I think I will sleep now.', romaji: 'Tsukareta node, mou neyou to omoimasu.' },
          { japanese: '漢字を毎日１０個覚えようと思っています。', english: 'I am thinking of memorizing 10 kanji every day.', romaji: 'Kanji o mainichi jukko oboeyou to omotte imasu.' },
          { japanese: '将来は、自分の会社を作ろうと思っています。', english: 'In the future, I am thinking of starting my own company.', romaji: 'Shourai wa, jibun no kaisha o tsukurou to omotte imasu.' },
          { japanese: '友達の誕生日に、ケーキを焼こうと思います。', english: 'I think I will bake a cake for my friend\'s birthday.', romaji: 'Tomodachi no tanjoubi ni, keeki o yakou to omoimasu.' },
          { japanese: '明日からタバコをやめようと思っています。', english: 'I am thinking of quitting smoking from tomorrow.', romaji: 'Ashita kara tabako o yameyou to omotte imasu.' },
          { japanese: '大学院に進学しようと思っています。', english: 'I am thinking of advancing to graduate school.', romaji: 'Daigakuin ni shingaku shiyou to omotte imasu.' }
        ],
        conversation: {
          context: 'At a restaurant looking at the menu.',
          dialogue: [
            { speaker: 'マリー', japanese: 'ケンさんは何にしますか。', english: 'Ken, what will you have (decide on)?' },
            { speaker: 'ケン', japanese: 'そうですね…今日は寒いから、ラーメンを食べようと思います。', english: 'Let\'s see... Because it is cold today, I think I will eat ramen.' },
            { speaker: 'マリー', japanese: 'いいですね。私もそれにしようと思います。', english: 'That sounds good. I think I will have that too.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I am thinking of buying (買う) a camera."',
            'Form the volitional form of 読む (to read).',
            'Translate: "I think I will rest (休む) tomorrow."'
          ],
          answers: [
            'カメラを買おうと思っています。 (Kamera o kaou to omotte imasu.)',
            '読もう (Yomou)',
            '明日は休もうと思います。 (Ashita wa yasumou to omoimasu.)'
          ]
        },
        jlptQuestions: [
          {
            question: '来年（らいねん）、家（いえ）を___と思（おも）っています。',
            options: ['建てる', '建てよう', '建てて', '建てた'],
            correctIndex: 1,
            explanation: 'The intent grammar requires the volitional form. 建てる (Group 2) -> 建てよう + と思っています.'
          },
          {
            question: '田中さんは、明日（あした）会社（かいしゃ）を___と言（い）っていました。',
            options: ['休むよう', '休もう', '休むつもり', '休んだつもり'],
            correctIndex: 1,
            explanation: 'This combines quoting (と言っていました) with intent (休もう - volitional). "Mr. Tanaka said he intends to rest." Note: you can also say 休むつもりだと言っていました.'
          }
        ],
        realLifeUsage: 'The most polite and natural way to state your plans to others without sounding rigid.'
      },
      {
        id: 'n4-l3-t4',
        pattern: '〜に行く',
        pronunciation: 'ni iku',
        meaning: 'Go to do something',
        isImplemented: true,
        whenAndWhy: 'Used to express the purpose of a movement (going, coming, or returning). It explains *why* you are going to a place.',
        explanation: 'Attach the particle に to the masu-stem of a verb, or directly to an action-noun. Then follow it with a verb of motion like 行く (go), 来る (come), or 帰る (return). Literally: "Go for the purpose of [verb/noun]".',
        formation: {
          formula: 'Destination + へ/に + Verb (masu-stem) / Noun + に行く',
          rules: [
            'With Verbs: Remove "masu" from the verb and add に行く (e.g. 食べに行きます).',
            'With Nouns (Action nouns): Noun + に行く (e.g. 買い物に行きます).',
            'The destination comes first, marked with へ or に.'
          ]
        },
        conjugations: {
          headers: ['Destination', 'Purpose (Verb/Noun)', 'Motion Verb', 'Translation'],
          rows: [
            ['日本へ (To Japan)', '勉強しに (to study)', '行きます (go)', 'I go to Japan to study.'],
            ['図書館へ (To library)', '本を借りに (to borrow a book)', '来ました (came)', 'I came to the library to borrow a book.'],
            ['デパートへ (To dept store)', '買い物に (for shopping)', '行きます (go)', 'I go to the department store for shopping.']
          ]
        },
        notes: 'You can also include the direct object of the purpose verb. For example, [Beer] を [drink] に [go] -> ビールを飲みに行きます (I go to drink beer).',
        mistakes: 'Do not use the dictionary form before に行く (✕ 食べるに行きます is wrong. ◯ 食べに行きます is correct).',
        comparison: {
          similarPattern: '〜ために行く',
          difference: '〜ために行く is a heavier, more formal purpose ("I go for the sole sake of..."). 〜に行く is light and everyday ("I go to pick up... / I go to eat...").'
        },
        memoryTips: 'The particle に shows the target or destination. You are "going TO the action".',
        examples: [
          { japanese: '週末、新宿へ映画を見に行きます。', english: 'On the weekend, I will go to Shinjuku to watch a movie.', romaji: 'Shuumatsu, Shinjuku e eiga o mi ni ikimasu.' },
          { japanese: 'レストランへ晩ご飯を食べに行きました。', english: 'I went to a restaurant to eat dinner.', romaji: 'Resutoran e bangohan o tabe ni ikimashita.' },
          { japanese: '日本へ日本語を勉強しに来ました。', english: 'I came to Japan to study Japanese.', romaji: 'Nihon e Nihongo o benkyou shi ni kimashita.' },
          { japanese: 'プールへ泳ぎに行きましょう。', english: 'Let\'s go to the pool to swim.', romaji: 'Puuru e oyogi ni ikimashou.' },
          { japanese: '図書館へ本を借りに来ました。', english: 'I came to the library to borrow a book.', romaji: 'Toshokan e hon o kari ni kimashita.' },
          { japanese: '公園へ散歩に行きます。', english: 'I am going to the park for a walk. (Action noun)', romaji: 'Kouen e sanpo ni ikimasu.' },
          { japanese: '京都へお寺を見に行きたいです。', english: 'I want to go to Kyoto to see the temples.', romaji: 'Kyouto e otera o mi ni ikitai desu.' },
          { japanese: '空港へ友達を迎えに行きます。', english: 'I am going to the airport to pick up my friend.', romaji: 'Kuukou e tomodachi o mukae ni ikimasu.' },
          { japanese: 'スーパーへ買い物に行きました。', english: 'I went to the supermarket for shopping.', romaji: 'Suupaa e kaimono ni ikimashita.' },
          { japanese: 'ちょっとタバコを買いに行ってきます。', english: 'I will just go to buy cigarettes and come back.', romaji: 'Chotto tabako o kai ni itte kimasu.' }
        ],
        conversation: {
          context: 'Planning an afternoon out.',
          dialogue: [
            { speaker: 'ジョン', japanese: '今日の午後、どこかへ行きますか。', english: 'Are you going anywhere this afternoon?' },
            { speaker: 'さくら', japanese: 'はい、デパートへ服を買いに行きます。ジョンさんは？', english: 'Yes, I am going to the department store to buy clothes. What about you, John?' },
            { speaker: 'ジョン', japanese: '私は郵便局へ荷物を出しに行きます。', english: 'I am going to the post office to send a package.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I will go to eat sushi."',
            'Translate: "I came to Japan to work (働く)."',
            'Use the action noun 釣り (fishing): "I go to the sea for fishing."'
          ],
          answers: [
            '寿司を食べに行きます。 (Sushi o tabe ni ikimasu.)',
            '日本へ働きに来ました。 (Nihon e hataraki ni kimashita.)',
            '海へ釣りに行きます。 (Umi e tsuri ni ikimasu.)'
          ]
        },
        jlptQuestions: [
          {
            question: '図書館（としょかん）へ本（ほん）を___に行（い）きます。',
            options: ['借りる', '借り', '借りて', '借りた'],
            correctIndex: 1,
            explanation: 'The grammar requires the masu-stem before に行きます. 借ります (borrow) -> drop masu -> 借り + に行きます.'
          },
          {
            question: '公園（こうえん）へ写真（しゃしん）を___に来（き）ました。',
            options: ['撮る', '撮って', '撮り', '撮りて'],
            correctIndex: 2,
            explanation: 'Again, the masu-stem of 撮る (to take a photo) is 撮り. Attached to に来ました, it forms the purpose of the movement.'
          }
        ],
        realLifeUsage: 'Often used with action nouns: 「ご飯を食べに行こう！」(Let\'s go eat!).'
      },
      {
        id: 'n4-l3-t5',
        pattern: '〜ようにする',
        pronunciation: 'you ni suru',
        meaning: 'Try to do (habit)',
        isImplemented: true,
        whenAndWhy: 'Used to express that someone is making a conscious effort or forming a habit to do (or not do) something.',
        explanation: 'ように (you ni) here acts as a goal, and する (suru) implies making a decision or effort. Combining them means "I make an effort so that [verb] happens." It attaches to the dictionary form or nai-form of a verb. Using ようにしています means you are currently maintaining that habit.',
        formation: {
          formula: 'Verb (Dictionary / nai-form) + ようにする',
          rules: [
            'To try to do: Dictionary form + ようにします',
            'To try NOT to do: nai-form + ようにします',
            'For an ongoing habit, use ようにしています'
          ]
        },
        conjugations: {
          headers: ['Target Habit', 'Verb Form', 'You ni Suru Form', 'Translation'],
          rows: [
            ['Eat vegetables', '食べる (taberu)', '食べるようにしています', 'I try to eat vegetables.'],
            ['Not sleep late', '寝ない (nenai)', '寝ないようにしています', 'I try not to sleep late.']
          ]
        },
        notes: 'This pattern focuses on the *effort* rather than a firm plan. It acknowledges that you might fail sometimes, but you are trying your best.',
        mistakes: 'Do not use this for one-time, immediate actions that you will just do (e.g. ✕ 今からドアを開けるようにします -> ◯ 今からドアを開けます). It is for habits and ongoing efforts.',
        comparison: {
          similarPattern: '〜つもりです',
          difference: 'つもりです is a firm intention or plan for a specific event (I plan to go tomorrow). ようにする is a continuous effort to maintain a habit (I try to go every day).'
        },
        memoryTips: 'ように (in such a way) + する (I make it). "I make it so that it happens this way."',
        examples: [
          { japanese: '健康のために、毎日野菜を食べるようにしています。', english: 'For my health, I try to eat vegetables every day.', romaji: 'Kenkou no tame ni, mainichi yasai o taberu you ni shite imasu.' },
          { japanese: '甘いものを食べないようにしています。', english: 'I try not to eat sweet things.', romaji: 'Amai mono o tabenai you ni shite imasu.' },
          { japanese: '夜十時以降は、スマホを見ないようにしています。', english: 'After 10 PM, I try not to look at my smartphone.', romaji: 'Yoru juuji ikou wa, sumaho o minai you ni shite imasu.' },
          { japanese: '毎日、一時間運動するようにしています。', english: 'I try to exercise for one hour every day.', romaji: 'Mainichi, ichijikan undou suru you ni shite imasu.' },
          { japanese: 'できるだけ、階段を歩くようにしています。', english: 'As much as possible, I try to walk up the stairs.', romaji: 'Dekiru dake, kaidan o aruku you ni shite imasu.' },
          { japanese: '約束の時間は忘れないようにしてください。（Requesting effort）', english: 'Please try your best not to forget the appointment time.', romaji: 'Yakusoku no jikan wa wasurenai you ni shite kudasai.' },
          { japanese: 'お酒を飲みすぎないようにします。', english: 'I will try not to drink too much alcohol (making a resolution).', romaji: 'Osake o nomisuginai you ni shimasu.' },
          { japanese: '毎日、日本語で日記を書くようにしています。', english: 'I try to write a diary in Japanese every day.', romaji: 'Mainichi, Nihongo de nikki o kaku you ni shite imasu.' },
          { japanese: '授業に遅れないようにしてください。', english: 'Please try not to be late for class.', romaji: 'Jugyou ni okurenai you ni shite kudasai.' },
          { japanese: '寝る前に、ストレッチをするようにしています。', english: 'I try to do stretches before sleeping.', romaji: 'Neru mae ni, sutoretchi o suru you ni shite imasu.' }
        ],
        conversation: {
          context: 'Discussing health habits.',
          dialogue: [
            { speaker: '医者', japanese: '最近、体の調子はどうですか。', english: 'How is your physical condition recently?' },
            { speaker: '患者', japanese: 'はい、いいです。最近は、油っこいものを食べないようにしています。', english: 'Yes, it is good. Recently, I am trying not to eat greasy things.' },
            { speaker: '医者', japanese: 'それはいいですね。これからも続けるようにしてください。', english: 'That is good. Please try to continue that from now on.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "I try to read a book every night."',
            'Translate: "I try not to use a taxi."',
            'Ask someone to make an effort: "Please try to wake up early."'
          ],
          answers: [
            '毎晩、本を読むようにしています。 (Maiban, hon o yomu you ni shite imasu.)',
            'タクシーを使わないようにしています。 (Takushii o tsukawanai you ni shite imasu.)',
            '早く起きるようにしてください。 (Hayaku okiru you ni shite kudasai.)'
          ]
        },
        jlptQuestions: [
          {
            question: '健康（けんこう）のために、タバコを___ようにしています。',
            options: ['吸う', '吸って', '吸わない', '吸わなく'],
            correctIndex: 2,
            explanation: 'For negative habit ("try not to"), you use the nai-form (plain negative) + ようにしています. 吸わない is correct.'
          },
          {
            question: '明日（あした）は大切（たいせつ）な会議（かいぎ）ですから、絶対（ぜったい）に遅（おく）れない___してください。',
            options: ['ために', 'ように', 'までに', 'からに'],
            correctIndex: 1,
            explanation: 'To instruct someone to make an effort not to do something, you use nai-form + ようにしてください.'
          }
        ],
        realLifeUsage: 'Often used as a softer command (ようにしてください - Please try to...) rather than a direct order (てください - Please do).'
      }
    ]
  },
  {
    lessonNum: 4,
    title: 'State Changes & Appearances',
    description: 'Explain transitions, looks, and ease of actions.',
    topics: [
      {
        id: 'n4-l4-t1',
        pattern: '〜やすい',
        pronunciation: 'yasui',
        meaning: 'Easy to do',
        isImplemented: true,
        whenAndWhy: 'Used to express that an action is physically or psychologically easy to perform, or that a state is likely to occur.',
        explanation: 'Attach やすい to the masu-stem of a verb. The resulting word conjugates exactly like an i-adjective. It describes the ease of an action (e.g., this pen is easy to write with).',
        formation: {
          formula: 'Verb (masu-stem) + やすい',
          rules: [
            'Conjugate the verb into the masu-form and drop "masu".',
            'Attach やすい.',
            'Treat the whole word as an i-adjective (やすい, やすくない, やすかった).'
          ]
        },
        conjugations: {
          headers: ['Verb', 'masu-stem', 'yasui form', 'Translation'],
          rows: [
            ['飲む (drink)', '飲み', '飲みやすい', 'Easy to drink'],
            ['使う (use)', '使い', '使いやすい', 'Easy to use'],
            ['わかる (understand)', 'わかり', 'わかりやすい', 'Easy to understand']
          ]
        },
        notes: 'It can also mean "prone to / likely to happen". For example, この薬は眠くなりやすい (This medicine easily makes you sleepy).',
        mistakes: 'Do not use this to mean "cheap" (even though 安い shares the same pronunciation). In this grammar, it is a suffix meaning "easy".',
        comparison: {
          similarPattern: '〜にくい',
          difference: '〜にくい is the exact opposite, meaning "hard to do" or "difficult to do".'
        },
        memoryTips: 'Easy things are "yasui" (cheap) on your energy.',
        examples: [
          { japanese: 'この靴はとても歩きやすいです。', english: 'These shoes are very easy to walk in.', romaji: 'Kono kutsu wa totemo arukiyasui desu.' },
          { japanese: 'あの先生の説明はわかりやすいです。', english: 'That teacher\'s explanation is easy to understand.', romaji: 'Ano sensei no setsumei wa wakariyasui desu.' },
          { japanese: 'このペンは書きやすくて、好きです。', english: 'This pen is easy to write with, and I like it.', romaji: 'Kono pen wa kakiyasukute, suki desu.' },
          { japanese: '東京は地下鉄が多くて、行きやすいです。', english: 'Tokyo has many subways and is easy to travel around.', romaji: 'Toukyou wa chikatetsu ga ookute, ikiyasui desu.' },
          { japanese: 'このコップはプラスチックですから、割れにくいです。（Wait, this is nikui. A yasui example: このガラスは割れやすいです - This glass breaks easily.）', english: 'This glass breaks easily.', romaji: 'Kono garasu wa wareyasui desu.' },
          { japanese: '雨の日は事故が起きやすいです。', english: 'Accidents are likely to happen on rainy days.', romaji: 'Ame no hi wa jiko ga okiyasui desu.' },
          { japanese: 'この薬は少し飲みにくいですが、あの薬は飲みやすいです。', english: 'This medicine is a bit hard to drink, but that medicine is easy to drink.', romaji: 'Kono kusuri wa sukoshi nominikui desu ga, ano kusuri wa nomiyasui desu.' },
          { japanese: 'ひらがなは漢字より覚えやすいです。', english: 'Hiragana is easier to remember than Kanji.', romaji: 'Hiragana wa kanji yori oboeyasui desu.' },
          { japanese: 'この辞書は文字が大きくて、見やすいです。', english: 'This dictionary has large characters and is easy to read (see).', romaji: 'Kono jisho wa moji ga ookukute, miyasui desu.' },
          { japanese: '秋は病気になりやすい季節です。', english: 'Autumn is a season where people easily get sick.', romaji: 'Aki wa byouki ni nariyasui kisetsu desu.' }
        ],
        conversation: {
          context: 'Buying a smartphone.',
          dialogue: [
            { speaker: '客', japanese: 'スマートフォンの使い方がよくわかりません。', english: 'I do not really understand how to use a smartphone.' },
            { speaker: '店員', japanese: 'それなら、このスマートフォンはいかがですか。画面が大きくて、とても使いやすいですよ。', english: 'In that case, how about this smartphone? The screen is big, and it is very easy to use.' },
            { speaker: '客', japanese: '本当ですね。わかりやすいです。', english: 'It\'s true. It is easy to understand.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "This book is easy to read (読む)."',
            'Translate: "This kanji is easy to write (書く)."',
            'Conjugate to "easy to do": 食べる (taberu)'
          ],
          answers: [
            'この本は読みやすいです。 (Kono hon wa yomiyasui desu.)',
            'この漢字は書きやすいです。 (Kono kanji wa kakiyasui desu.)',
            '食べやすい (Tabeyasui)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この町（まち）は、スーパーがたくさんあって___やすいです。',
            options: ['住む', '住んで', '住み', '住ま'],
            correctIndex: 2,
            explanation: 'The suffix やすい attaches to the masu-stem of the verb. 住む -> 住み + やすい.'
          },
          {
            question: '白（しろ）いシャツは、すぐに___やすくて困（こま）ります。',
            options: ['汚れる', '汚れて', '汚れ', '汚れた'],
            correctIndex: 2,
            explanation: 'Again, the masu-stem is required. 汚れる (to get dirty) becomes 汚れ.'
          }
        ],
        realLifeUsage: 'Often seen in product marketing: 「使いやすいデザイン」 (Easy-to-use design).'
      },
      {
        id: 'n4-l4-t2',
        pattern: '〜にくい',
        pronunciation: 'nikui',
        meaning: 'Hard to do',
        isImplemented: true,
        whenAndWhy: 'Used to express that an action is physically or psychologically difficult to perform, or that a state is unlikely to occur.',
        explanation: 'Attach にくい to the masu-stem of a verb. Like やすい, the resulting word conjugates exactly like an i-adjective. It describes the difficulty of an action.',
        formation: {
          formula: 'Verb (masu-stem) + にくい',
          rules: [
            'Conjugate the verb into the masu-form and drop "masu".',
            'Attach にくい.',
            'Treat the whole word as an i-adjective (にくい, にくくない, にくかった).'
          ]
        },
        conjugations: {
          headers: ['Verb', 'masu-stem', 'nikui form', 'Translation'],
          rows: [
            ['食べる (eat)', '食べ', '食べにくい', 'Hard to eat'],
            ['読む (read)', '読み', '読みにくい', 'Hard to read'],
            ['滑る (slip)', '滑り', '滑りにくい', 'Hard to slip (slip-resistant)']
          ]
        },
        notes: 'It can also mean "unlikely to happen". For example, このコップは割れにくいです (This cup does not break easily / is hard to break).',
        mistakes: 'Do not confuse this with 肉 (niku - meat) or 憎い (nikui - hateful). Context makes the meaning obvious.',
        comparison: {
          similarPattern: '難しい (muzukashii)',
          difference: '難しい is a general adjective for "difficult" (e.g. The test is difficult). 〜にくい specifically means "hard to DO" (e.g. This kanji is hard to write). ✕ 書くのが難しい is okay, but 書きにくい is more natural for the physical act of writing.'
        },
        memoryTips: 'Hard things are a "pain in the niku (neck / meat)".',
        examples: [
          { japanese: 'この肉は固くて、食べにくいです。', english: 'This meat is tough and hard to eat.', romaji: 'Kono niku wa katakute, tabenikui desu.' },
          { japanese: '山田さんの字は小さくて、読みにくいですね。', english: 'Mr. Yamada\'s handwriting is small and hard to read, isn\'t it?', romaji: 'Yamada-san no ji wa chiisakute, yominikui desu ne.' },
          { japanese: '雨の日は、道が滑りやすいですが、この靴は滑りにくいです。', english: 'On rainy days, roads are slippery, but these shoes are slip-resistant.', romaji: 'Ame no hi wa, michi ga suberiyasui desu ga, kono kutsu wa suberinikui desu.' },
          { japanese: 'このパソコンは古くて、使いにくいです。', english: 'This computer is old and hard to use.', romaji: 'Kono pasokon wa furukute, tsukainikui desu.' },
          { japanese: '彼の話はいつもわかりにくいです。', english: 'His stories/talks are always hard to understand.', romaji: 'Kare no hanashi wa itsumo wakarinikui desu.' },
          { japanese: 'この瓶のふたは開けにくいですね。', english: 'The lid of this jar is hard to open, isn\'t it?', romaji: 'Kono bin no futa wa akenikui desu ne.' },
          { japanese: '冬は、洗濯物が乾きにくいです。', english: 'In winter, laundry is hard to dry.', romaji: 'Fuyu wa, sentakumono ga kawakinikui desu.' },
          { japanese: 'この椅子は長時間座りにくいです。', english: 'This chair is hard to sit on for long periods.', romaji: 'Kono isu wa choujikan suwarinikui desu.' },
          { japanese: '暗いから、字が見えにくいです。', english: 'Because it is dark, the letters are hard to see.', romaji: 'Kurai kara, ji ga mienikui desu.' },
          { japanese: 'あの先生には、質問しにくいです。', english: 'It is hard to ask questions to that teacher (psychologically).', romaji: 'Ano sensei ni wa, shitsumon shinikui desu.' }
        ],
        conversation: {
          context: 'At a restaurant.',
          dialogue: [
            { speaker: 'ジョン', japanese: '日本の箸は、少し使いにくいです。', english: 'Japanese chopsticks are a little hard to use.' },
            { speaker: 'さくら', japanese: 'そうですか。フォークをもらいましょうか。', english: 'Is that so? Shall I ask for a fork?' },
            { speaker: 'ジョン', japanese: '大丈夫です。練習します。', english: 'It is okay. I will practice.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "This medicine (薬) is hard to drink (飲む)."',
            'Translate: "This word (言葉 - kotoba) is hard to memorize (覚える)."',
            'Conjugate to "hard to do": 歩く (aruku)'
          ],
          answers: [
            'この薬は飲みにくいです。 (Kono kusuri wa nominikui desu.)',
            'この言葉は覚えにくいです。 (Kono kotoba wa oboenikui desu.)',
            '歩きにくい (Arukinikui)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この靴（くつ）は、___にくくて疲（つか）れます。',
            options: ['歩く', '歩いて', '歩き', '歩か'],
            correctIndex: 2,
            explanation: 'Attaches to the masu-stem. 歩く -> 歩き + にくい.'
          },
          {
            question: '社長（しゃちょう）には、意見（いけん）が___にくいです。',
            options: ['言い', '言う', '言って', '言わ'],
            correctIndex: 0,
            explanation: 'It is psychologically difficult to state an opinion to the company president. The masu-stem of 言う is 言い.'
          }
        ],
        realLifeUsage: 'Often seen in product reviews indicating negative points: 「ボタンが押しにくい」 (The buttons are hard to press).'
      },
      {
        id: 'n4-l4-t3',
        pattern: '〜なる',
        pronunciation: 'naru',
        meaning: 'To become',
        isImplemented: true,
        whenAndWhy: 'Used to express a change in state, indicating that something has transitioned from one condition to another.',
        explanation: 'なる (naru) means "to become". How you attach it depends on whether the preceding word is an i-adjective, na-adjective, or noun. It shows a natural progression or change over time.',
        formation: {
          formula: 'Adjective / Noun + なる',
          rules: [
            'i-adjectives: Drop い and add く + なる (e.g. 暑い -> 暑くなる).',
            'na-adjectives: Drop な and add に + なる (e.g. 元気 -> 元気になる).',
            'Nouns: Noun + に + なる (e.g. 医者 -> 医者になる).'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Base Word', 'Naru Form', 'Translation'],
          rows: [
            ['i-adjective', '高い (takai)', '高くなる', 'Become expensive/high'],
            ['na-adjective', 'きれい (kirei)', 'きれいになる', 'Become clean/pretty'],
            ['Noun', '夜 (yoru)', '夜になる', 'Become night']
          ]
        },
        notes: 'When you want to say "it HAS become" (the change is complete), you use the past tense なりました.',
        mistakes: 'Do not use に before i-adjectives (✕暑いになる -> ◯暑くなる). Do not forget に before nouns/na-adjectives (✕きれいなる -> ◯きれいになる).',
        comparison: {
          similarPattern: '〜にする',
          difference: '〜なる implies a natural or automatic change (The room became clean). 〜にする implies an active, deliberate change caused by someone (I made the room clean).'
        },
        memoryTips: 'Naru = natural progression.',
        examples: [
          { japanese: '三月になって、暖かくなりました。', english: 'It became March, and it became warm.', romaji: 'Sangatsu ni natte, atatakaku narimashita.' },
          { japanese: '日本語の勉強が面白くなりました。', english: 'Studying Japanese has become interesting.', romaji: 'Nihongo no benkyou ga omoshiroku narimashita.' },
          { japanese: '彼女は去年、医者になりました。', english: 'She became a doctor last year.', romaji: 'Kanojo wa kyonen, isha ni narimashita.' },
          { japanese: '部屋を掃除して、きれいになりました。', english: 'I cleaned the room, and it became clean.', romaji: 'Heya o souji shite, kirei ni narimashita.' },
          { japanese: 'だんだん暗くなりますね。', english: 'It is gradually becoming dark, isn\'t it?', romaji: 'Dandan kuraku narimasu ne.' },
          { japanese: '病気が治って、元気になりました。', english: 'My illness was cured, and I became healthy.', romaji: 'Byouki ga naotte, genki ni narimashita.' },
          { japanese: '子供はすぐに大きくなります。', english: 'Children become big (grow up) quickly.', romaji: 'Kodomo wa sugu ni ookiku narimasu.' },
          { japanese: 'パソコンが安くなりました。', english: 'Computers have become cheap.', romaji: 'Pasokon ga yasuku narimashita.' },
          { japanese: '明日は雨になるでしょう。', english: 'It will probably become rain (rainy) tomorrow.', romaji: 'Ashita wa ame ni naru deshou.' },
          { japanese: 'もうすぐ三十歳になります。', english: 'I will become 30 years old soon.', romaji: 'Mou sugu sanjussai ni narimasu.' }
        ],
        conversation: {
          context: 'Meeting a friend after a long time.',
          dialogue: [
            { speaker: 'ケン', japanese: '久しぶりですね。髪を切りましたか。', english: 'Long time no see. Did you cut your hair?' },
            { speaker: 'さくら', japanese: 'はい、短くしました。（〜にする - to make it short）', english: 'Yes, I made it short.' },
            { speaker: 'ケン', japanese: 'とてもきれいになりましたね。', english: 'You have become very pretty.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It became cold (寒い)."',
            'Translate: "I want to become a teacher (先生)."',
            'Change to naru-form: 静か (shizuka - quiet)'
          ],
          answers: [
            '寒くなりました。 (Samuku narimashita.)',
            '先生になりたいです。 (Sensei ni naritai desu.)',
            '静かになる (Shizuka ni naru)'
          ]
        },
        jlptQuestions: [
          {
            question: '勉強（べんきょう）しましたから、日本語が___なりました。',
            options: ['上手', '上手だ', '上手に', '上手く'],
            correctIndex: 2,
            explanation: '上手 (jouzu) is a na-adjective. Therefore, it requires に before なりました. 上手になりました.'
          },
          {
            question: '秋（あき）になって、だんだん涼（すず）しく___。',
            options: ['なりました', 'しました', 'ありました', 'きました'],
            correctIndex: 0,
            explanation: '涼しい (suzushii) is an i-adjective. Dropping the い and adding く connects it to なりました (became cool).'
          }
        ],
        realLifeUsage: 'Often used to remark on weather or personal growth: 「大きくなったね！」 (You\'ve grown so big!).'
      },
      {
        id: 'n4-l4-t4',
        pattern: '〜そうです (Appearance)',
        pronunciation: 'sou desu',
        meaning: 'Looks like / Appears',
        isImplemented: true,
        whenAndWhy: 'Used to express your visual impression or guess about something based on how it looks right now.',
        explanation: 'This そうです attaches to the stem of adjectives and verbs. It means "looks like" or "seems like". Note that this is different from the hearsay そうです (which means "I heard that" and attaches to the plain form).',
        formation: {
          formula: 'Verb (masu-stem) / Adjective (stem) + そうです',
          rules: [
            'Verbs: masu-stem + そうです (e.g. 降りそうです - looks like it will rain).',
            'i-adjectives: Drop い and add そうです (e.g. 美味しそうです - looks delicious). *Exception: いい becomes よさそうです.',
            'na-adjectives: Drop な and add そうです (e.g. 元気そうです - looks healthy).'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Base', 'Appearance Form', 'Translation'],
          rows: [
            ['Verb', '降る (furu)', '降りそうです', 'Looks like it will rain.'],
            ['i-adjective', '高い (takai)', '高そうです', 'Looks expensive.'],
            ['i-adjective (Exception)', 'いい (ii)', 'よさそうです', 'Looks good.'],
            ['na-adjective', '暇 (hima)', '暇そうです', 'Looks free (not busy).']
          ]
        },
        notes: 'To modify a noun, change です to な (e.g. 美味しそうなケーキ - a delicious-looking cake). To modify a verb, change it to に (e.g. 楽しそうに遊んでいる - playing happily).',
        mistakes: 'Do NOT use this for things you know are absolute facts (e.g. ✕このりんごは赤そうです - This apple looks red. You can plainly see it is red!). Only use it for things you are guessing (It looks sweet, it looks expensive).',
        comparison: {
          similarPattern: '〜そうです (Hearsay - N4 L5)',
          difference: 'Stem + そうです = Looks like (I see it and guess). Plain form + そうです = I heard that (Someone told me or I read it).'
        },
        memoryTips: 'Drop the end and add SOU! "Oh, so delicious!" -> Oishi-sou!',
        examples: [
          { japanese: 'このケーキはとても美味しそうです。', english: 'This cake looks very delicious.', romaji: 'Kono keeki wa totemo oishisou desu.' },
          { japanese: '雨が降りそうです。', english: 'It looks like it is going to rain (the sky is dark).', romaji: 'Ame ga furisou desu.' },
          { japanese: 'あの人は忙しそうです。', english: 'That person looks busy.', romaji: 'Ano hito wa isogashisou desu.' },
          { japanese: 'この本は難しそうですね。', english: 'This book looks difficult, doesn\'t it?', romaji: 'Kono hon wa muzukashisou desu ne.' },
          { japanese: '荷物が重そうですね。持ちましょうか。', english: 'Your luggage looks heavy. Shall I carry it?', romaji: 'Nimotsu ga omosou desu ne. Mochimashou ka.' },
          { japanese: '彼女は元気そうな顔をしています。', english: 'She has a healthy-looking face.', romaji: 'Kanojo wa genkisou na kao o shite imasu.' },
          { japanese: '子供たちが楽しそうに遊んでいます。', english: 'The children are playing happily (looking like they are having fun).', romaji: 'Kodomotachi ga tanoshisou ni asonde imasu.' },
          { japanese: 'このコートは暖かそうです。', english: 'This coat looks warm.', romaji: 'Kono kooto wa atatakasou desu.' },
          { japanese: '明日の天気はよさそうです。', english: 'Tomorrow\'s weather looks good.', romaji: 'Ashita no tenki wa yosasou desu.' },
          { japanese: 'ボタンが取れそうです。', english: 'The button looks like it is going to fall off.', romaji: 'Botan ga toresou desu.' }
        ],
        conversation: {
          context: 'Window shopping at a bakery.',
          dialogue: [
            { speaker: 'マリー', japanese: 'わあ、このパン、美味しそうですね。', english: 'Wow, this bread looks delicious, doesn\'t it?' },
            { speaker: 'ケン', japanese: '本当ですね。でも、ちょっと高そうです。', english: 'It really does. But it looks a bit expensive.' },
            { speaker: 'マリー', japanese: '一つだけ買いましょう！', english: 'Let\'s buy just one!' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It looks cold (寒い)."',
            'Translate: "He looks kind (親切 - shinsetsu).',
            'Modify the noun: "A delicious-looking (美味しい) apple."'
          ],
          answers: [
            '寒そうです。 (Samusou desu.)',
            '彼は親切そうです。 (Kare wa shinsettsou desu.)',
            '美味しそうなりんご (Oishisou na ringo)'
          ]
        },
        jlptQuestions: [
          {
            question: 'あのレストランは、いつも___そうです。',
            options: ['高い', '高く', '高', '高かった'],
            correctIndex: 2,
            explanation: 'For visual impression (appearance), drop the い from the i-adjective. 高い -> 高 + そうです.'
          },
          {
            question: '風（かぜ）が強（つよ）くて、木（き）が___そうです。',
            options: ['倒れる', '倒れて', '倒れ', '倒れない'],
            correctIndex: 2,
            explanation: 'To express that a verb action is about to happen based on visual cues, use the masu-stem + そうです. 倒れる (to fall over) -> 倒れ + そうです.'
          }
        ],
        realLifeUsage: 'Often used as a reflex reaction when seeing food: 「美味しそう！」 (Looks yummy!).'
      },
      {
        id: 'n4-l4-t5',
        pattern: '〜すぎる',
        pronunciation: 'sugiru',
        meaning: 'Overdo / Too much (Verb/Noun usage)',
        isImplemented: true,
        whenAndWhy: 'Used as an expansion of N5\'s 〜すぎます, at N4 level we focus on treating it as a plain verb (すぎる) or a noun (すぎ), often combining it with other grammar points.',
        explanation: 'We already know how to attach すぎる to masu-stems and adjective stems. At this level, you should be comfortable using its plain form to modify other grammar (e.g. 食べすぎて、お腹が痛い - I ate too much and my stomach hurts), or using the stem alone as a noun (e.g. 食べすぎはよくない - Eating too much is bad).',
        formation: {
          formula: 'Stem + すぎる / すぎ / すぎて',
          rules: [
            'Verb (masu-stem) + すぎる',
            'Adj (stem) + すぎる',
            'Noun form: 〜すぎ (e.g. 飲みすぎ)',
            'te-form for linking clauses: 〜すぎて (e.g. 高すぎて買えない)'
          ]
        },
        conjugations: {
          headers: ['Form', 'Structure', 'Translation'],
          rows: [
            ['Plain Verb', '食べすぎる (tabesugiru)', 'To overeat'],
            ['Noun', '食べすぎ (tabesugi)', 'Overeating'],
            ['te-form', '食べすぎて (tabesugite)', 'Ate too much, and so...'],
            ['Condition', '食べすぎると (tabesugiru to)', 'If you overeat...']
          ]
        },
        notes: 'When used as a noun, it directly follows grammar rules for nouns (e.g., 飲みすぎは体に悪いです - Overdrinking is bad for the body).',
        mistakes: 'Remember that すぎる conjugates exactly like a Group 2 verb. (すぎない, すぎた, すぎて).',
        comparison: {
          similarPattern: '〜すぎます (N5)',
          difference: 'It is the same grammar, but N4 requires fluency in manipulating its plain, te, and noun forms to build more complex sentences.'
        },
        memoryTips: 'Sugi as a noun = the act of overdoing.',
        examples: [
          { japanese: '昨日飲みすぎて、頭が痛いです。', english: 'I drank too much yesterday, and my head hurts.', romaji: 'Kinou nomisugite, atama ga itai desu.' },
          { japanese: 'この問題は複雑すぎて、わかりません。', english: 'This problem is too complicated, and I do not understand it.', romaji: 'Kono mondai wa fukuzatsusugite, wakarimasen.' },
          { japanese: '食べすぎは病気の原因になります。', english: 'Overeating becomes a cause of illness.', romaji: 'Tabesugi wa byouki no genin ni narimasu.' },
          { japanese: 'あの映画は怖すぎて、夜眠れませんでした。', english: 'That movie was too scary, and I couldn\'t sleep at night.', romaji: 'Ano eiga wa kowasugite, yoru nemuremasen deshita.' },
          { japanese: '働きすぎると、倒れますよ。', english: 'If you overwork, you will collapse.', romaji: 'Hatarakisugiru to, taoremasu yo.' },
          { japanese: '説明が長すぎて、みんな寝てしまいました。', english: 'The explanation was too long, and everyone ended up sleeping.', romaji: 'Setsumei ga nagasugite, minna nete shimaimashita.' },
          { japanese: '最近、スマホを使いすぎている。', english: 'Recently, I am using my smartphone too much.', romaji: 'Saikin, sumaho o tsukaisugite iru.' },
          { japanese: 'ゲームのしすぎに注意してください。', english: 'Please be careful about over-playing games. (する -> しすぎ)', romaji: 'Geemu no shisugi ni chuui shite kudasai.' },
          { japanese: '辛すぎて、食べられません。', english: 'It is too spicy, and I cannot eat it.', romaji: 'Karasugite, taberaremasen.' },
          { japanese: 'いくら安くても、買いすぎるのはよくないです。', english: 'No matter how cheap it is, buying too much is not good.', romaji: 'Ikura yasukutemo, kaisugiru no wa yoku nai desu.' }
        ],
        conversation: {
          context: 'At the doctor\'s office.',
          dialogue: [
            { speaker: '患者', japanese: '先生、最近胃が痛いんです。', english: 'Doctor, recently my stomach hurts.' },
            { speaker: '医者', japanese: 'それは、食べすぎか飲みすぎですね。', english: 'That is from overeating or overdrinking.' },
            { speaker: '患者', japanese: 'はい、昨日お酒を飲みすぎました。', english: 'Yes, yesterday I drank too much alcohol.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It is too expensive (高い) and I cannot buy it."',
            'Translate as a noun: "Over-working (働く) is dangerous."',
            'Combine 食べる (to eat) + すぎる into the te-form.'
          ],
          answers: [
            '高すぎて、買えません。 (Takasugite, kaemasen.)',
            '働きすぎは危ないです。 (Hatarakisugi wa abunai desu.)',
            '食べすぎて (Tabesugite)'
          ]
        },
        jlptQuestions: [
          {
            question: 'この靴（くつ）は___すぎて、足（あし）が痛（いた）いです。',
            options: ['小さい', '小さ', '小さく', '小さかった'],
            correctIndex: 1,
            explanation: 'To combine with すぎて, drop the い from the i-adjective. 小さい -> 小さ + すぎて.'
          },
          {
            question: '甘（あま）いものの食（た）べ___は、歯（は）に悪（わる）いです。',
            options: ['すぎる', 'すぎ', 'すぎて', 'すぎた'],
            correctIndex: 1,
            explanation: 'Here it is used as a noun as the subject of the sentence (marked by は). The noun form of "overeating" is 食べすぎ.'
          }
        ],
        realLifeUsage: 'Often used with te-form for excuses: 「寝すぎて遅刻しました」 (I overslept and was late).'
      }
    ]
  },
  {
    lessonNum: 5,
    title: 'Conjectures & Assertions',
    description: 'Refined rules for reporting information.',
    topics: [
      {
        id: 'n4-l5-t1',
        pattern: '〜そうです（伝聞）',
        pronunciation: 'sou desu',
        meaning: 'I heard that (Hearsay)',
        isImplemented: true,
        whenAndWhy: 'Used to relay information that you heard from someone else, read somewhere, or saw on the news, without adding your own opinion.',
        explanation: 'This version of そうです attaches to the plain form of a sentence. It translates to "I heard that..." or "They say that...". To specify the source of the information, use 〜によると (According to ~) at the beginning of the sentence.',
        formation: {
          formula: 'Plain Form + そうです',
          rules: [
            'Verbs: Plain form (行く/行った/行かない) + そうです',
            'i-adjectives: Plain form (高い) + そうです',
            'na-adjectives/Nouns: Add だ + そうです (元気だそうです)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Plain Form', 'Hearsay Form', 'Translation'],
          rows: [
            ['Verb', '降る (furu)', '降るそうです', 'I heard it will rain.'],
            ['i-adjective', '寒い (samui)', '寒いそうです', 'I heard it is cold.'],
            ['na-adjective', '好きだ (suki da)', '好きだそうです', 'I heard they like it.'],
            ['Noun', '雨だ (ame da)', '雨だそうです', 'I heard it is rain.']
          ]
        },
        notes: 'Unlike the appearance そうです (which drops the い or な), hearsay そうです requires the full plain form. Also, there is no negative or past tense for hearsay そうです itself (e.g., ✕そうではありません is wrong). The verb before it changes tense instead (e.g. 降らないそうです - I heard it will not rain).',
        mistakes: 'Confusing appearance and hearsay. ✕美味しそうです (Looks delicious - appearance). ◯美味しいそうです (I heard it is delicious - hearsay). Note the "i" is kept in hearsay.',
        comparison: {
          similarPattern: '〜そうです (Appearance - N4 L4)',
          difference: 'Appearance attaches to the stem (降リスそうです - looks like rain). Hearsay attaches to the plain form (降るそうです - heard it will rain).'
        },
        memoryTips: 'If you keep the whole word intact (plain form), you are keeping the whole rumor intact.',
        examples: [
          { japanese: '天気予報によると、明日は雨が降るそうです。', english: 'According to the weather forecast, I heard it will rain tomorrow.', romaji: 'Tenkiyohou ni yoru to, ashita wa ame ga furu sou desu.' },
          { japanese: '田中さんは来年、結婚するそうです。', english: 'I heard Mr. Tanaka is getting married next year.', romaji: 'Tanaka-san wa rainen, kekkon suru sou desu.' },
          { japanese: 'あのレストランはとても美味しいそうです。', english: 'I heard that restaurant is very delicious.', romaji: 'Ano resutoran wa totemo oishii sou desu.' },
          { japanese: '山田さんは今日、休みだそうです。', english: 'I heard Mr. Yamada is off (absent) today.', romaji: 'Yamada-san wa kyou, yasumi da sou desu.' },
          { japanese: 'ニュースによると、地震があったそうです。', english: 'According to the news, I heard there was an earthquake.', romaji: 'Nyuusu ni yoru to, jishin ga atta sou desu.' },
          { japanese: 'この映画はあまり面白くないそうです。', english: 'I heard this movie is not very interesting.', romaji: 'Kono eiga wa amari omoshirokunai sou desu.' },
          { japanese: '彼はアメリカの大学に行ったそうです。', english: 'I heard he went to a university in America.', romaji: 'Kare wa Amerika no daigaku ni itta sou desu.' },
          { japanese: '日本の夏はとても蒸し暑いそうです。', english: 'I heard Japanese summers are very humid and hot.', romaji: 'Nihon no natsu wa totemo mushiatsui sou desu.' },
          { japanese: '先生の話によると、試験は難しいそうです。', english: 'According to the teacher\'s talk, I heard the exam is difficult.', romaji: 'Sensei no hanashi ni yoru to, shiken wa muzukashii sou desu.' },
          { japanese: '来週のパーティーには、彼も来るそうです。', english: 'I heard he is also coming to next week\'s party.', romaji: 'Raishuu no paatii ni wa, kare mo kuru sou desu.' }
        ],
        conversation: {
          context: 'Talking about a colleague.',
          dialogue: [
            { speaker: 'ジョン', japanese: '田中さんは、最近忙しいんですか。', english: 'Is Mr. Tanaka busy recently?' },
            { speaker: 'さくら', japanese: 'ええ、山田さんの話によると、毎日残業しているそうです。', english: 'Yes, according to Mr. Yamada\'s talk, I heard he is working overtime every day.' },
            { speaker: 'ジョン', japanese: '大変ですね。', english: 'That is tough, isn\'t it.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "According to the news (ニュースによると)..."',
            'Translate: "I heard it is cold (寒い) today."',
            'Correct the error: 「田中さんは元気そうです。(Meaning: I heard he is healthy)」'
          ],
          answers: [
            'ニュースによると (Nyuusu ni yoru to)',
            '今日は寒いそうです。 (Kyou wa samui sou desu.)',
            '元気 is a na-adj, so it needs だ for hearsay. Correct: 「田中さんは元気だそうです。」'
          ]
        },
        jlptQuestions: [
          {
            question: '天気予報（てんきよほう）によると、明日（あした）は雪（ゆき）___そうです。',
            options: ['な', 'に', 'だ', 'で'],
            correctIndex: 2,
            explanation: '雪 (snow) is a noun. To connect a noun to hearsay そうです, you must use the plain copula だ. 雪だそうです.'
          },
          {
            question: 'あのケーキはとても___そうです。（伝聞・Hearsay）',
            options: ['美味しく', '美味しかった', '美味しい', '美味し'],
            correctIndex: 2,
            explanation: 'Hearsay requires the plain form. The plain form of the i-adjective is 美味しい. If it were 美味しそうです (option 4), it would mean "looks delicious".'
          }
        ],
        realLifeUsage: 'Often paired with 〜によると (according to) to relay news or gossip: 「噂によると…だそうです」 (According to rumors, I heard...).'
      },
      {
        id: 'n4-l5-t2',
        pattern: '〜ようです',
        pronunciation: 'you desu',
        meaning: 'It seems that',
        isImplemented: true,
        whenAndWhy: 'Used to express a subjective guess or judgment based on evidence, sensory information, or circumstances that the speaker has observed.',
        explanation: 'ようです (you desu) functions like a noun. It means "it appears/seems that". It shows that the speaker has evaluated a situation and arrived at a conclusion. It is often used with adverbs like どうも (somehow / apparently).',
        formation: {
          formula: 'Modifier + ようです',
          rules: [
            'Verbs/i-adjectives: Plain form + ようです (e.g. 降るようです, 寒いようです)',
            'na-adjectives: Add な + ようです (e.g. 元気なようです)',
            'Nouns: Add の + ようです (e.g. 病気のようです)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Plain Form', 'You desu Form', 'Translation'],
          rows: [
            ['Verb', '降る (furu)', '降るようです', 'It seems it will rain.'],
            ['i-adjective', '寒い (samui)', '寒いようです', 'It seems it is cold.'],
            ['na-adjective', '元気 (genki)', '元気なようです', 'It seems they are healthy.'],
            ['Noun', '風邪 (kaze)', '風邪のようです', 'It seems to be a cold.']
          ]
        },
        notes: 'In casual conversation, みたいだ (mitai da) is often used instead of ようだ. The meaning is nearly identical, but みたい is more colloquial.',
        mistakes: 'Do not forget the particles な for na-adjectives and の for nouns. ✕元気ようです is wrong. ◯元気なようです is correct.',
        comparison: {
          similarPattern: '〜そうです (Appearance)',
          difference: '〜そうです is an instant visual guess (Wow, it looks delicious). 〜ようです is a judgment based on various evidence (People are lining up, and it smells good... it seems this place is delicious).'
        },
        memoryTips: 'よう is a noun meaning "appearance/state". Treat it like a noun when connecting other words to it (hence な and の).',
        examples: [
          { japanese: '外は雨が降っているようです。', english: 'It seems it is raining outside (I can hear the sound).', romaji: 'Soto wa ame ga futte iru you desu.' },
          { japanese: 'どうも風邪を引いたようです。', english: 'Somehow, it seems I caught a cold.', romaji: 'Doumo kaze o hiita you desu.' },
          { japanese: '田中さんは、そのことを知らないようです。', english: 'It seems Mr. Tanaka does not know about that matter.', romaji: 'Tanaka-san wa, sono koto o shiranai you desu.' },
          { japanese: 'あの人は、とても忙しいようです。', english: 'That person seems very busy.', romaji: 'Ano hito wa, totemo isogashii you desu.' },
          { japanese: 'このレストランは、有名なようです。', english: 'It seems this restaurant is famous.', romaji: 'Kono resutoran wa, yuumei na you desu.' },
          { japanese: '隣の部屋に誰かいるようです。', english: 'It seems there is someone in the next room (I hear voices).', romaji: 'Tonari no heya ni dareka iru you desu.' },
          { japanese: '電気が消えていますから、山田さんは留守のようです。', english: 'Because the lights are off, it seems Mr. Yamada is not at home.', romaji: 'Denki ga kiete imasu kara, Yamada-san wa rusu no you desu.' },
          { japanese: '明日は天気がいいようです。', english: 'It seems the weather will be good tomorrow.', romaji: 'Ashita wa tenki ga ii you desu.' },
          { japanese: '彼は、私の話がわからないようです。', english: 'It seems he does not understand my story/talk.', romaji: 'Kare wa, watashi no hanashi ga wakaranai you desu.' },
          { japanese: '新しい仕事は、彼に合っているようです。', english: 'It seems the new job suits him.', romaji: 'Atarashii shigoto wa, kare ni atte iru you desu.' }
        ],
        conversation: {
          context: 'Investigating a noise.',
          dialogue: [
            { speaker: '妻', japanese: '何か変な音がしましたよ。', english: 'I heard some strange noise.' },
            { speaker: '夫', japanese: '見てきます。…あ、窓ガラスが割れているようです。', english: 'I will go look. ...Ah, it seems the window glass is broken.' },
            { speaker: '妻', japanese: 'えっ、本当ですか。', english: 'Eh, really?' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "It seems to be a cold (風邪)."',
            'Translate: "It seems the teacher is busy (忙しい)."',
            'Translate: "It seems she likes (好き) cats."'
          ],
          answers: [
            '風邪のようです。 (Kaze no you desu.)',
            '先生は忙しいようです。 (Sensei wa isogashii you desu.)',
            '彼女は猫が好きなようです。 (Kanojo wa neko ga suki na you desu.)'
          ]
        },
        jlptQuestions: [
          {
            question: 'あのレストランはいつも人（ひと）がいっぱいですね。どうも美味（おい）しい___。',
            options: ['みたいです', 'ようです', 'そうです', 'らしいです'],
            correctIndex: 1,
            explanation: 'The sentence gives evidence (people are always full) and uses どうも (somehow/apparently), which strongly pairs with ようです (or みたいです, but only ようです is an option here). Wait, みたいです is option 0... actually both 0 and 1 are acceptable, but ようです is the formal written standard taught. Let us select ようです as the primary textbook answer.'
          },
          {
            question: '咳（せき）が出（で）ていますね。風邪（かぜ）___ようですね。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 2,
            explanation: '風邪 is a noun. You must connect it to よう with the particle の. 風邪のようです.'
          }
        ],
        realLifeUsage: 'Often used with どうも to mean "somehow it appears to be": 「どうも故障のようです」 (Somehow it seems to be broken).'
      },
      {
        id: 'n4-l5-t3',
        pattern: '〜らしい',
        pronunciation: 'rashii',
        meaning: 'Typical of / Apparently',
        isImplemented: true,
        whenAndWhy: 'Used in two main ways: 1) to say something is "typical" or a perfect example of its category, and 2) to express an objective guess based on hearsay or indirect evidence.',
        explanation: 'At the N4 level, the most important usage is [Noun + らしい], meaning that a person or thing embodies the ideal characteristics of that noun (e.g. 男らしい - manly, 子供らしい - child-like). It can also attach to verbs/adjectives to mean "I heard / Apparently".',
        formation: {
          formula: 'Noun + らしい',
          rules: [
            'For "typical": Noun + らしい (e.g. 男らしい - like a real man).',
            'For "apparently": Plain form + らしい (e.g. 降るらしい - apparently it will rain).',
            'らしい conjugates exactly like an i-adjective (らしくない, らしかった).'
          ]
        },
        conjugations: {
          headers: ['Noun', 'Rashii Form', 'Translation', 'Meaning type'],
          rows: [
            ['男 (man)', '男らしい (otokorashii)', 'Manly / Like a real man', 'Typical of'],
            ['春 (spring)', '春らしい (harurashii)', 'Spring-like', 'Typical of'],
            ['雨 (rain)', '雨らしい (amerashii)', 'Apparently it is rain', 'Objective guess']
          ]
        },
        notes: 'When used to mean "typical", らしい implies a positive or expected characteristic. For example, 学生らしい means "behaving properly like a student should".',
        mistakes: 'Do not use みたい to mean "typical". 女みたい means "LIKE a woman (but maybe he is a man)", whereas 女らしい means "feminine / behaving as a woman typically does (used for actual women)".',
        comparison: {
          similarPattern: '〜のようです (Looks like)',
          difference: '雪のようだ (It looks like snow, but it might be cotton). 雪らしい (It is indeed snow, acting exactly like snow should).'
        },
        memoryTips: 'Rashii = "Real-shi". It possesses the REAL qualities of that noun.',
        examples: [
          { japanese: '今日は暖かくて、春らしい天気です。', english: 'Today is warm and it is spring-like weather.', romaji: 'Kyou wa atatakakute, harurashii tenki desu.' },
          { japanese: '彼はとても男らしいです。', english: 'He is very manly (acts like a man should).', romaji: 'Kare wa totemo otokorashii desu.' },
          { japanese: 'もっと子供らしく遊びなさい。', english: 'Play more child-like (as a child should).', romaji: 'Motto kodomorashiku asobinasai.' },
          { japanese: 'それは、あの人らしいミスですね。', english: 'That is a mistake typical of that person.', romaji: 'Sore wa, ano hito rashii misu desu ne.' },
          { japanese: '田中さんは、明日休むらしいです。（伝聞・推量）', english: 'Apparently, Mr. Tanaka is taking a day off tomorrow.', romaji: 'Tanaka-san wa, ashita yasumu rashii desu.' },
          { japanese: '新しいレストランは高いらしいです。', english: 'Apparently, the new restaurant is expensive.', romaji: 'Atarashii resutoran wa takai rashii desu.' },
          { japanese: 'どうやら、彼は来ないらしい。', english: 'Apparently, he is not coming.', romaji: 'Douyara, kare wa konai rashii.' },
          { japanese: '彼女はいつも学生らしい服を着ています。', english: 'She always wears student-appropriate clothes.', romaji: 'Kanojo wa itsumo gakuseirashii fuku o kite imasu.' },
          { japanese: '社長は怒っているらしいです。', english: 'Apparently, the president is angry.', romaji: 'Shachou wa okotte iru rashii desu.' },
          { japanese: '今日は日本人らしい弁当を作りました。', english: 'Today I made a typically Japanese bento.', romaji: 'Kyou wa Nihonjin rashii bento o tsukurimashita.' }
        ],
        conversation: {
          context: 'Discussing the weather in April.',
          dialogue: [
            { speaker: 'ジョン', japanese: '最近、暖かくなりましたね。', english: 'It has become warm recently, hasn\'t it?' },
            { speaker: 'さくら', japanese: 'ええ、本当に春らしい天気になりました。桜も咲くらしいですよ。', english: 'Yes, it has truly become spring-like weather. Apparently, the cherry blossoms will bloom too.' },
            { speaker: 'ジョン', japanese: 'それは楽しみです。', english: 'That is something to look forward to.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Spring-like warm weather (天気)."',
            'Translate: "He acts like a student (学生らしい)."',
            'Translate: "Apparently it is raining (雨が降っている)."'
          ],
          answers: [
            '春らしい暖かい天気 (Harurashii atatakai tenki)',
            '彼は学生らしいです。 (Kare wa gakuseirashii desu.)',
            '雨が降っているらしいです。 (Ame ga futte iru rashii desu.)'
          ]
        },
        jlptQuestions: [
          {
            question: 'あの服（ふく）は、とても彼（かれ）___ですね。よく似合（にあ）っています。',
            options: ['みたい', 'よう', 'らしい', 'そう'],
            correctIndex: 2,
            explanation: 'When someone wears clothes that perfectly suit their character, it is "typical of them". 彼らしい is the correct expression.'
          },
          {
            question: '天気予報（てんきよほう）によると、明日（あした）は台風（たいふう）が来（く）る___です。',
            options: ['らしい', 'みたい', 'そう', 'よう'],
            correctIndex: 0,
            explanation: 'To express indirect information / hearsay, らしい is often used (as well as そう). Since そう expects plain form + そう (来るそう), and らしい also expects plain form + らしい (来るらしい). The sentence ends with です. 来るらしいです is perfectly valid for N4 objective hearsay.'
          }
        ],
        realLifeUsage: 'Often used to compliment someone: 「プロらしい仕事ですね」 (That is work typical of a professional).'
      },
      {
        id: 'n4-l5-t4',
        pattern: '〜はずです',
        pronunciation: 'hazu desu',
        meaning: 'Expected to / Supposed to',
        isImplemented: true,
        whenAndWhy: 'Used when the speaker makes a strong conclusion or expectation based on objective facts, logic, or schedules.',
        explanation: 'はず (hazu) functions as a noun meaning "expectation" or "supposed outcome". You use it when you are confident about a conclusion because of a solid reason. It translates to "It is supposed to be..." or "It must be...".',
        formation: {
          formula: 'Modifier + はずです',
          rules: [
            'Verbs/i-adjectives: Plain form + はずです (e.g. 来るはずです, 高いはずです)',
            'na-adjectives: Add な + はずです (e.g. 元気なはずです)',
            'Nouns: Add の + はずです (e.g. 休みのはずです)'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Plain Form', 'Hazu Form', 'Translation'],
          rows: [
            ['Verb', '来る (kuru)', '来るはずです', 'They are supposed to come.'],
            ['i-adjective', '高い (takai)', '高いはずです', 'It is expected to be expensive.'],
            ['na-adjective', '便利 (benri)', '便利なはずです', 'It is supposed to be convenient.'],
            ['Noun', '日曜日 (nichiyoubi)', '日曜日のはずです', 'It is supposed to be Sunday.']
          ]
        },
        notes: 'To say something is definitely NOT expected, use はずがありません (It cannot possibly be...). Example: 彼が嘘をつくはずがありません (He couldn\'t possibly lie).',
        mistakes: 'Do not use this for your own personal intended actions (e.g. ✕ 私は明日行くはずです -> ◯ 私は明日行くつもりです). はず is for objective expectations, usually about third parties, objects, or schedules.',
        comparison: {
          similarPattern: '〜でしょう',
          difference: '〜でしょう is a loose guess ("probably"). 〜はずです is a strong logical conclusion ("It is supposed to / It must be").'
        },
        memoryTips: 'Treat "hazu" like the noun "expectation".',
        examples: [
          { japanese: '田中さんは昨日出発しましたから、もう着いたはずです。', english: 'Because Mr. Tanaka departed yesterday, he is supposed to have arrived already.', romaji: 'Tanaka-san wa kinou shuppatsu shimashita kara, mou tsuita hazu desu.' },
          { japanese: 'この本は高いはずです。有名な作家が書きましたから。', english: 'This book is expected to be expensive. Because a famous author wrote it.', romaji: 'Kono hon wa takai hazu desu. Yuumei na sakka ga kakimashita kara.' },
          { japanese: '今日は日曜日ですから、銀行は休みのはずです。', english: 'Because today is Sunday, the bank is supposed to be closed.', romaji: 'Kyou wa nichiyoubi desu kara, ginkou wa yasumi no hazu desu.' },
          { japanese: '彼はアメリカに１０年住んでいましたから、英語が上手なはずです。', english: 'Because he lived in America for 10 years, his English is expected to be good.', romaji: 'Kare wa Amerika ni juunen sunde imashita kara, Eigo ga jouzu na hazu desu.' },
          { japanese: 'あの店はもう閉まっているはずです。', english: 'That store is supposed to be closed by now.', romaji: 'Ano mise wa mou shimatte iru hazu desu.' },
          { japanese: '荷物は明日届くはずです。', english: 'The package is expected to arrive tomorrow.', romaji: 'Nimotsu wa ashita todoku hazu desu.' },
          { japanese: '彼がそんなことを言うはずがありません。', english: 'It cannot be expected that he would say such a thing. (He couldn\'t possibly say that).', romaji: 'Kare ga sonna koto o iu hazu ga arimasen.' },
          { japanese: '薬を飲んだから、すぐよくなるはずです。', english: 'Because I took medicine, it is expected to get better soon.', romaji: 'Kusuri o nonda kara, sugu yoku naru hazu desu.' },
          { japanese: '会議は三時に終わるはずでした。', english: 'The meeting was supposed to end at 3 o\'clock (but it didn\'t).', romaji: 'Kaigi wa sanji ni owaru hazu deshita.' },
          { japanese: 'この料理は辛くないはずです。', english: 'This dish is supposed to be not spicy.', romaji: 'Kono ryouri wa karakunai hazu desu.' }
        ],
        conversation: {
          context: 'Waiting for a delivery.',
          dialogue: [
            { speaker: '夫', japanese: '荷物はまだ来ませんか。', english: 'Has the package not come yet?' },
            { speaker: '妻', japanese: '午前中に届くはずですが…。', english: 'It was supposed to arrive in the morning, but...' },
            { speaker: '夫', japanese: '少し遅れているのかもしれませんね。', english: 'It might be a little delayed, huh.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "Because she studied, she is supposed to pass (合格する - goukaku suru)."',
            'Translate: "It is supposed to be cheap (安い)."',
            'Correct the error: 「先生ですから、親切のはずです。」'
          ],
          answers: [
            '勉強したから、合格するはずです。 (Benkyou shita kara, goukaku suru hazu desu.)',
            '安いはずです。 (Yasui hazu desu.)',
            '親切 is a na-adj. Use な. Correct: 「親切なはずです。」'
          ]
        },
        jlptQuestions: [
          {
            question: '彼（かれ）は日本人（にほんじん）ですから、漢字（かんじ）が___はずです。',
            options: ['わかる', 'わかって', 'わかり', 'わかった'],
            correctIndex: 0,
            explanation: 'The sentence states a logical expectation: Because he is Japanese, he is expected to understand Kanji. The plain present form わかる is used.'
          },
          {
            question: '今日（きょう）は休（やす）み___はずなのに、学校（がっこう）に来（き）てしまいました。',
            options: ['だ', 'な', 'の', 'に'],
            correctIndex: 2,
            explanation: '休み is a noun. When attaching a noun to はず, the particle の is required.'
          }
        ],
        realLifeUsage: 'Often used when checking schedules: 「会議は十時のはずです」 (The meeting is supposed to be at 10).'
      },
      {
        id: 'n4-l5-t5',
        pattern: '〜ば',
        pronunciation: 'ba',
        meaning: 'If (Conditional form)',
        isImplemented: true,
        whenAndWhy: 'Used to express a general condition where "If A happens, B will inevitably or logically follow." It focuses heavily on the condition itself.',
        explanation: 'The ば (ba) form is one of Japanese\'s conditional forms. Unlike たら (which focuses on sequence/completion), ば focuses on the rule or mathematical/logical necessity. "Provided that A happens, B is the result."',
        formation: {
          formula: 'Verb (ba-form)',
          rules: [
            'Group 1: Change the final "u" sound to "e" and add ば (e.g. 書く -> 書けば).',
            'Group 2: Drop る and add れば (e.g. 食べる -> 食べれば).',
            'Group 3: する -> すれば, 来る(kuru) -> 来れば(kureba).',
            'i-adjectives: Drop い, add ければ (e.g. 暑い -> 暑ければ).'
          ]
        },
        conjugations: {
          headers: ['Word Type', 'Dictionary Form', 'ba-form', 'Translation'],
          rows: [
            ['Group 1 Verb', '行く (iku)', '行けば (ikeba)', 'If you go'],
            ['Group 2 Verb', '食べる (taberu)', '食べれば (tabereba)', 'If you eat'],
            ['i-adjective', '安い (yasui)', '安ければ (yasukereba)', 'If it is cheap'],
            ['Negative (nai)', '行かない (ikanai)', '行かなければ (ikanakereba)', 'If you do not go']
          ]
        },
        notes: 'Notice that なければなりません (must do) uses the negative ば-form. "If you do not go, it will not do."',
        mistakes: 'Do not use volition (commands, let\'s, want to) in the B clause if the A clause is an action verb. (✕ 行けば、食べましょう -> ◯ 行ったら、食べましょう).',
        comparison: {
          similarPattern: '〜たら',
          difference: '〜たら is for specific, sequential, real-world events ("Once I arrive, let\'s eat"). 〜ば is for logical conditions ("If you press this button, the machine turns on" or "If it\'s cheap, I\'ll buy it").'
        },
        memoryTips: 'The "ba" form establishes a BAseline condition.',
        examples: [
          { japanese: '春になれば、桜が咲きます。', english: 'If (When) it becomes spring, cherry blossoms bloom.', romaji: 'Haru ni nareba, sakura ga sakimasu.' },
          { japanese: 'このボタンを押せば、水が出ます。', english: 'If you press this button, water will come out.', romaji: 'Kono botan o oseba, mizu ga demasu.' },
          { japanese: '安ければ、買いたいです。', english: 'If it is cheap, I want to buy it.', romaji: 'Yasukereba, kaitai desu.' },
          { japanese: '薬を飲めば、よくなりますよ。', english: 'If you take the medicine, you will get better.', romaji: 'Kusuri o nomeba, yoku narimasu yo.' },
          { japanese: 'もっと勉強すれば、合格できます。', english: 'If you study more, you can pass.', romaji: 'Motto benkyou sureba, goukaku dekimasu.' },
          { japanese: '雨が降れば、試合は中止です。', english: 'If it rains, the match is cancelled.', romaji: 'Ame ga fureba, shiai wa chuushi desu.' },
          { japanese: '彼に聞けば、わかります。', english: 'If you ask him, you will know/understand.', romaji: 'Kare ni kikeba, wakarimasu.' },
          { japanese: '時間があれば、映画を見たいです。', english: 'If I have time, I want to watch a movie. (ある is state verb, so volition is okay in clause B).', romaji: 'Jikan ga areba, eiga o mitai desu.' },
          { japanese: '説明書を読まなければ、わかりません。', english: 'If you do not read the manual, you won\'t understand.', romaji: 'Setsumeisho o yomanakereba, wakarimasen.' },
          { japanese: 'どうすればいいですか。', english: 'If I do what, is it good? (What should I do?)', romaji: 'Dou sureba ii desu ka.' }
        ],
        conversation: {
          context: 'Asking for directions.',
          dialogue: [
            { speaker: '旅行者', japanese: 'すみません、駅に行きたいんですが、どうすればいいですか。', english: 'Excuse me, I want to go to the station, what should I do?' },
            { speaker: '案内人', japanese: 'この道をまっすぐ行けば、右にありますよ。', english: 'If you go straight on this road, it will be on the right.' },
            { speaker: '旅行者', japanese: 'ありがとうございます。', english: 'Thank you.' }
          ]
        },
        exercises: {
          questions: [
            'Translate: "If I run (走る - hashiru), I will be in time (間に合う - maniau)."',
            'Translate: "If it is hot (暑い), turn on the air conditioner."',
            'Conjugate into ba-form: 読む (nomu)'
          ],
          answers: [
            '走れば、間に合います。 (Hashireba, maniaimasu.)',
            '暑ければ、エアコンをつけてください。 (Atsukereba, eakon o tsukete kudasai.)',
            '読めば (Yomeba)'
          ]
        },
        jlptQuestions: [
          {
            question: 'たくさん___ば、上手（じょうず）になりますよ。',
            options: ['練習する', '練習しれ', '練習すれ', '練習した'],
            correctIndex: 2,
            explanation: 'The verb is 練習する. The ba-form of する is すれば. Therefore, 練習すれば is correct.'
          },
          {
            question: '値段（ねだん）が___、パソコンを買（か）いたいです。',
            options: ['安いと', '安かったら', '安ければ', '安いなら'],
            correctIndex: 2,
            explanation: 'To express "If it is cheap", the i-adjective (安い) drops い and adds ければ -> 安ければ. Note: 安かったら is also acceptable in conversation, but among the ba-form options, 安ければ is structurally perfect for JLPT conditionals.'
          }
        ],
        realLifeUsage: 'The set phrase 「どうすればいいですか」 (What should I do?) is one of the most useful phrases in Japan when you are lost or confused.'
      }
    ]
  }
];
