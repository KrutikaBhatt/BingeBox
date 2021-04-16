export function sendDatabase(firebase) {
    function getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
     
    }
  /*
    // Documentaries
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Tiger King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description:
        'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Super Size Me',
      description:
        "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Man on Wire',
      description:
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
      
    });
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Office',
      description:
        'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arrested Development',
      description:
        'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Curb Your Enthusiasm',
      description:
        'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Family Guy',
      description:
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
      
    });
  
    // Children
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Peppa Pig',
      description:
        'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Dora The Explorer',
      description:
        'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'PAW Patrol',
      description:
        'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arthur',
      description:
        'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'SpongeBob',
      description:
        'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ',
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
      
    });
  
    // Crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Making a Murderer',
      description:
        'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
      
    });
    
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Innocent Man',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
      
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Staircase',
      description:
        "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
      
    });
  
    // Films
    // ============================================ 
    // Drama
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Prestige',
      description:
        'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Fight Club',
      description:
        'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Kings Speech',
      description:
        'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Revenant',
      description:
        'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Social Network',
      description:
        'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
      
    });
  
    // Suspense
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Shutter Island',
      description:
        'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Gone Girl',
      description:
        'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Prisoners',
      description:
        "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Seven',
      description:
        'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Zodiac',
      description:
        'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
      
    });
  
    // Children
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Hotel Transylvania',
      description:
        'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
      genre: 'children',
      maturity: '0',
      slug: 'hotel-transylvania',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Despicable Me',
      description:
        'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
      genre: 'children',
      maturity: '0',
      slug: 'despicable-me',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Frozen',
      description:
        'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
      genre: 'children',
      maturity: '0',
      slug: 'frozen',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Spirited Away',
      description:
        'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
      genre: 'children',
      maturity: '0',
      slug: 'spirited-away',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Up',
      description:
        "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
      genre: 'children',
      maturity: '0',
      slug: 'up',
      
    });
  
    // Thriller
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Joker',
      description:
        'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Quiet Place',
      description:
        'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
      genre: 'thriller',
      maturity: '15',
      slug: 'a-quiet-place',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Black Swan',
      description:
        'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Nightcrawler',
      description:
        'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
      genre: 'thriller',
      maturity: '15',
      slug: 'nightcrawler',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Silence of The Lambs',
      description:
        'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-lambs',
      
    });
  
    // Romance
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Star Is Born',
      description:
        'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-is-born',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Blue Valentine',
      description:
        'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
      genre: 'romance',
      maturity: '15',
      slug: 'blue-valentine',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'La La Land',
      description:
        'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Notebook',
      description:
        "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
      genre: 'romance',
      maturity: '15',
      slug: 'the-notebook',
      
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Titanic',
      description:
        'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
      
    });
    */

    // Popular in India
    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Roohi',
    //   description:
    //     'Roohi is set in a fictional town of North India. The film revolves around two small-town boys Bhaura and Kattanni who are stuck in a forest with Roohi. But there’s an insidious spirit following them with feet turned backwards.',
    //   genre: 'horror',
    //   maturity: '16',
    //   slug: 'roohi',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Zindagi Na Milegi Dobara',
    //   description:
    //     'Three friends who were inseparable in childhood decide to go on a three-week-long bachelor road trip to Spain, in order to re-establish their bond and explore thrilling adventures, before one of them gets married. What will they learn of themselves and each other during the adventure?',
    //   genre: 'comedy',
    //   maturity: '14',
    //   slug: 'zindagi-na-milegi-dobara',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: '3 Idiots',
    //   description:
    //     "In the tradition of “Ferris Bueller’s Day Off” comes this refreshing comedy about a rebellious prankster with a crafty mind and a heart of gold. Rascal. Joker. Dreamer. Genius... You've never met a college student quite like \"Rancho.\" From the moment he arrives at India's most prestigious university, Rancho's outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for \"Virus,\" the school’s uptight and heartless dean. But when Rancho catches the eye of the dean's sexy daughter, Virus sets his sights on flunking out the \"3 idiots\" once and for all.",
    //   genre: 'comedy',
    //   maturity: '12',
    //   slug: '3-idiots',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Article 15',
    //   description:
    //     'A young IPS officer’s new posting in rural India has him confronting caste disparities and uncomfortable truths in the face of a gruesome crime. When three girls go missing in the fictional village of Lalgaon, two of them are found dead and there is no trace of the third one. Where is she and who is responsible for this heinous act?',
    //   genre: 'crime',
    //   maturity: '18',
    //   slug: 'article-15',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Bareilly Ki Barfi',
    //   description:
    //     'Bitti Mishra is a bohemian Bareilly girl who falls deeply in love with Pritam Vidrohi, an author because she admires his progressive way of thinking. Finding him though proves to be as hard as looking for a needle in the haystack. So Bitti seeks the help of the local printing press-owner, Chirag Dubey on her journey of love.',
    //   genre: 'romance',
    //   maturity: '14',
    //   slug: 'bareilly-ki-barfi',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Drishyam',
    //   description:
    //     'A simple, street-smart man tries to protect his family from a tough cop looking for his missing son.',
    //   genre: 'thriller',
    //   maturity: '16',
    //   slug: 'drishyam',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Welcome',
    //   description:
    //     "Dubai-based criminal don Uday takes it upon himself to try and get his sister Sanjana married - in vain, as no one wants to be associated with a crime family. Uday's associate Sagar Pandey finds a young man, Rajiv, who lives with his maternal uncle and aunt - Dr. and Mrs. Ghunghroo. Through extortion he compels Ghunghroo to accept this matrimonial alliance. But Rajiv has already fallen in love with young woman in South Africa. When the time comes to get Rajiv formally engaged to this woman, he finds out that Sanjana and she are the very same. With no escape from this predicament, the wedding is planned, with hilarious consequences.",
    //   genre: 'comedy',
    //   maturity: '12',
    //   slug: 'welcome',
    // });
    
    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Queen',
    //   description:
    //     "Rani, a 24-year-old homely girl, decides to go on her honeymoon alone when her fiancé calls off the wedding. Traveling around Europe, she finds joy, makes friends, and gains new-found independence.",
    //   genre: 'comedy',
    //   maturity: '14',
    //   slug: 'queen',
    // });
    
    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Kabir Singh',
    //   description:
    //     "When his girlfriend is forced to marry another man, a troubled young surgeon begins to self-destruct.",
    //   genre: 'drama',
    //   maturity: '16',
    //   slug: 'kabir-singh',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Dangal',
    //   description:
    //     "Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat. The film traces the inspirational journey of a father who trains his daughters to become world class wrestlers.",
    //   genre: 'action',
    //   maturity: '13',
    //   slug: 'dangal',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Gunjan Saxena: The Kargil Girl',
    //   description:
    //     "Inspired by the life of a fearless young officer who made history by becoming the first Indian female Air Force officer to fly in a combat zone during the 1999 Kargil War",
    //   genre: 'action',
    //   maturity: '14',
    //   slug: 'gunjan-saxena-the-kargil-girl',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Phir Hera Pheri',
    //   description:
    //     "Babu Rao, Raju and Shyam, are living happily after having risen from rags to riches. Still, money brings the joy of riches and with it the greed to make more money - and so, with a don as an unknowing investor, Raju initiates a new game.",
    //   genre: 'comedy',
    //   maturity: '12',
    //   slug: 'phir-hera-pheri',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Special 26',
    //   description:
    //     "In the early 1980s in India, a group of con artists rob well-known businessmen and politicians by posing as officers of the Central Bureau of Intelligence or income tax officials. The gang stages fake raids during which they steal great amounts of money from their targets.",
    //   genre: 'thriller',
    //   maturity: '14',
    //   slug: 'special-26',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Andhadhun',
    //   description:
    //     "A series of mysterious events changes the life of a blind pianist who now must report a crime that was actually never witnessed by him.",
    //   genre: 'crime',
    //   maturity: '15',
    //   slug: 'andhadhun',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Yeh Jawaani Hai Deewani',
    //   description:
    //     "Bunny and Naina meet when they graduate from college and again in their late 20s.",
    //   genre: 'romance',
    //   maturity: '15',
    //   slug: 'yeh-jawaani-hai-deewani',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Naam Shabhana',
    //   description:
    //     "Shabana Khan is the special agent who is entrusted the task of assassinating a deadly arms dealer by the Indian Intelligence Agencies.",
    //   genre: 'thriller',
    //   maturity: '15',
    //   slug: 'naam-shabhana',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Barfi!',
    //   description:
    //     "He is cute. He's shrewd. The girls love him. The cops hate him. He can't speak but is always talked about. His naughty antics will make you scream, but he will never listen. Cos he can't! Next summer ride a rollercoaster of emotions with Barfii - the Chalu Chaplin!",
    //   genre: 'drama',
    //   maturity: '12',
    //   slug: 'barfi',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Haider',
    //   description:
    //     "A young man returns to Kashmir after his father's disappearance to confront his uncle - the man he suspects to have a role in his father's fate.",
    //   genre: 'action',
    //   maturity: '16',
    //   slug: 'haider',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Dear Zindagi',
    //   description:
    //     "An unconventional thinker helps a budding cinematographer gain a new perspective on life.",
    //   genre: 'drama',
    //   maturity: '14',
    //   slug: 'dear-zindagi',
    // });

    // firebase.firestore().collection('India').add({
    //   id: getUUID(),
    //   title: 'Mom',
    //   description:
    //     "The bliss of a biology teacher’s family life in Delhi is shattered when her daughter, Arya is physically assaulted by Jagan and gang. Does Devki Sabarwal wait for the law to take its course? Or does Devki become Maa Durga and hunt down the perpetrators of the crime?",
    //   genre: 'crime',
    //   maturity: '16',
    //   slug: 'mom',
    // });

    // firebase.firestore().collection('series').add({
    //   id: getUUID(),
    //   title: 'Our Planet',
    //   description:
    //     "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
    //   genre: 'documentaries',
    //   maturity: '16',
    //   slug: 'our-planet',
    // });

    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Day Break',
      description:
        "Living his best life in post-apocalyptic LA, a slacker strives to find the girl of his dreams while outwitting mindless ghouls and cliquish gangs.",
      genre: 'comedies',
      maturity: '18',
      slug: 'day-break',
    });

    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Wizards: Tales of Arcadia',
      description:
        "Merlin’s apprentice joins Arcadia’s heroes on a time-bending adventure in Camelot, where conflict is brewing between the human, troll and magical worlds.",
      genre: 'children',
      maturity: '12',
      slug: 'wizards-tales-of-arcadia',
    });

    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Undercover',
      description:
        "Undercover agents infiltrate a drug kingpin's operation by posing as a couple at the campground where he spends his weekends. Inspired by real events.",
      genre: 'crime',
      maturity: '18',
      slug: 'undercover',
    });

    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Sinner',
      description:
        "A young mother kills a stranger in a fit of unexplainable rage. An inquisitive detective obsesses over the case, attempting to get to the bottom of the true motive behind the act.",
      genre: 'crime',
      maturity: '16',
      slug: 'the-sinner',
    });

    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Midnight In Paris',
      description:
        'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    });

    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'School of Rock',
      description:
        "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    });

    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Juno',
      description:
        "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    });

    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Forrest Gump',
      description:
        'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    });

    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Good Will Hunting',
      description:
        'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    });
  }
  