var questions_list = {};
var ending_text_list = {};
var quote_list = {};
var end_message_list = {};
var cnt = 0;
var NUM_OF_QUOTES = 24;
create_question = function(q,a1,a2,a3,a4,c){
	var question = {
		question:q ,
		ans1:a1 ,
		ans2:a2 ,
		ans3:a3 ,
		ans4:a4 ,
		correct:c ,
		
	};
	
	questions_list[cnt] = question;
	cnt++;
}
take_questions_from_list2 = function(id){
	
	
	return questions_list[id];
}
//level-1
end_message_list[0] = 'You are weaker than Chopper. A den-den mushi would be a fair opponent for you!                                    ';
end_message_list[1] = 'You are a hatchling, attending your first training on a mountain, until you are qualified to join the big league!                                      ';
end_message_list[2] = 'You seem like a promising youngster! The local authorities are noticing your actions. Beware, because the greater your power, the greater your responsibility!                                       ';
end_message_list[3] = 'You are a part of an influential family ! You can now hang out with some pretty awesome guys (if you think speedos are still in fashion)                                      ';
end_message_list[4] = 'Having your own crew and your own poster. Seems like you are a big fella now!                                    ';
end_message_list[5] = 'You have a strong crew and your own island !You are strong... for a weakling! Is that all you can accomplish   ?                                    ';
//level-2
end_message_list[6] = 'Even though you are supposed to be strong, having such a cute face and getting rekt besides your reputation does make you a failure. Maybe try the less competitive league?                                    ';
end_message_list[7] = 'You have the capability of becoming someone really strong. But the qualifications are not enough. You got to work hard too                                    ';
end_message_list[8] = 'Numerous days on gym, building a steel like body... Your fingers got muscles... and yet, muscles are not enough. Mr.Olympia would be a better title for you...                                    ';
end_message_list[9] = 'You still insist on goin to the gym. Though you know discovered some steroids. Well now you are strong, but how long till you are a dry old fart? Try to get stronger!                                    ';
end_message_list[10] = 'Cool...check. Strong...check. Smart...check. Loveable...check. Do not try to just check these attributes, you can aim for greatness.                                    ';
end_message_list[11] = 'I think you can now own this little army of stupid-malfuctioning-teddy-human-based droids. Time to start looking for some real opponents dont you aggre?                                    ';
//level-3
end_message_list[12] = 'You are a fraud. I dont know you survive up untill here. If i were you, I would run away from here as soon as possible and sign up on a dojo,maybe go on a diet or stop the ale?                                    ';
end_message_list[13] = 'Yeeeehaaa! You almost got zero questions right! Maybe you should try the Okama way. At least you will forget the manly thoughts that stress you and become more carefree and beautifull!                                    ';
end_message_list[14] = 'The generation that will shape history. You belong there. You got the ability to become someone special. I will keep an eye on you!                                     ';
end_message_list[15] = 'You are a King! You are a Pirate! You are a noble! You are many things, but you top noone of them...                                    ';
end_message_list[16] = 'Tremendous power and the World Goverment covering your ass. Not bad at all. Though, is that all you want?...                                    ';
end_message_list[17] = 'The strongest of your level! The strongest of your era! Though a new era is coming. Can you survive there?                                    ';
//level-4
end_message_list[18] = 'Phewww. We got a badass here! I think the Tontatta Dwarves are not the best fit for you... Maybe try the dwarves from Snowhite? Yeah, that would make an equal battle!                                    ';
end_message_list[19] = 'Zehahahaha! You are still too small to enter this place. Maybe I ll take your Devil Fruit?                                    ';
end_message_list[20] = 'You are bound for greatness though there are still guyz with more power their hands than you. If you want to be their equal, you need allies                                    ';
end_message_list[21] = 'You are strong enough to not care about trivia matters. But if someone touches your nakama, the world will shake by your fury                                    ';
end_message_list[22] = 'Power. The power you posses can turn the world upside down. You can finally help those who are weak stand against the World Goverment.                                     ';
end_message_list[23] = 'Your knowledge of One Piece is on par with Odas\'. The Gorosei are the only opponents left for you!                                    ';

quote_list[0] = 'There are things you can\'t see unless you change your standing </br>&nbsp; ~Trafalgar D Watel Law';
quote_list[1] = 'It is a sad truth that greater the authority a person possesses, the more he tends to fear change </br>&nbsp; ~Jimbei';
quote_list[2] = 'Life is like a pencil that will surely run out,but will leave the beautiful writing of life </br>&nbsp; ~Nami';
quote_list[3] = '        If I die here, then I\'m a man that could only make it this far </br>&nbsp; ~Roronoa Zoro';
quote_list[4] = 'There can be no happiness in a world where the undesirables are thrown away  </br>&nbsp; ~ Monkey D Dragon';
quote_list[5] = 'You came without fear. Don\'t have any regrets, no matter what happens. This is the duel you wanted </br>&nbsp; ~Monkey D Luffy';
quote_list[6] = 'I\'ll die smiling! Because if you ever think of me in the future, I want you to remember me smiling </br>&nbsp; ~ Donquixote Rosinante';
quote_list[7] = 'Old man, everyone!! And you.. Luffy. Even though I\'ve been good for nothing my whole life, even though I have the blood of a demon within me... You guys still loved me! Thank you so much!! </br>&nbsp; ~ Portgas D. Ace';
quote_list[8] = 'Inherited will, the swelling of the changing times, and the dreams of people. These are things that cannot be stopped. As long as people seek the answer to freedom, these will never cease to be';
quote_list[9] = 'The thing called "justice" changes its shape... Depending on where you stand </br>&nbsp; ~Kuzan';
quote_list[10] = 'Compared to the "righteous" greed of the rulers, the criminals of the world seem much more honorable.    When scum rules the world, only more scum is born </br>&nbsp; ~Eustass Kid';
quote_list[11] = 'Bring on the hardship. It\'s preferred in a path of carnage </br>&nbsp; ~Roronoa Zoro';
quote_list[12] = 'The world...what a glorious place! Seek freedom, and it will lie stretched out before your eyes. If the endless dream guides your restless spirit, seize it! Raise your flag, and stand tall! </br>&nbsp; ~Gol D. Roger';
quote_list[13] = 'Listen up... You can pour drinks on me, you can throw food at me... You can even spit on me. I\'ll just laugh that stuff off. But... Good reason or not... Nobody hurts a friend of mine </br>&nbsp; ~Shanks';
quote_list[14] = 'Hero? No! We\'re pirates! I love heroes, but I don\'t wanna be one! Do you know what heroes are? Say there is a chunk of meat. Pirates will have a banquet and eat it, but heroes will share it with other people. I want all the meat! </br>&nbsp; ~Monkey D. Luffy';
quote_list[15] = 'When do you think people die?When they are shot through the heart by the bullet of a pistol?No.When they are ravaged by an incurable disease?No.When they drink a soup made from a poisonous mushroom!? No! It\'s when... they are forgotten. </br>&nbsp; ~Dr Hiluluk ';
quote_list[16] = 'A wound that\'d make an ordinary man unconscious... I won\'t lose to it. A wound that would kill an ordinary    person... I won\'t lose to it! To face one who is extraordinary, Hawk Eyes... I can\'t allow myself to be ordinary! </br>&nbsp; ~Zoro';
quote_list[17] = 'Let the heavens deal with life and death, even the most fearful lose to that. Let\'s live for another moment! </br>&nbsp; ~Marshall D. Teach';
quote_list[18] = 'Well,how about this.My "luck" versus this thing\'s "curse".Wanna see what\'s stronger..?If I lose, then I\'m just that much of a man anyways... </br>&nbsp; ~Roronoa Zoro';
quote_list[19] = 'I don\'t want to conquer anything. I just think the guy with the most freedom in this whole ocean...is the Pirate King! </br>&nbsp; ~Monkey D. Luffy';
quote_list[20] = 'Would you let me see your panties? </br>&nbsp; ~Brook';
quote_list[21] = 'My wealth and treasures? If you want it, I\'ll let you have it. Look for it, I left all of it at that place! </br>&nbsp; ~Gol D. Roger';
quote_list[22] = 'Cooking is a gift from the gods. Spices are a gift from the devil. Looks like it was a little too spicy for you </br>&nbsp; ~Sanji';
quote_list[23] = 'Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form. </br>&nbsp; ~Silver Rayleigh';

create_question('How many are the Shichibukai ?','7','8','10','11',1);
create_question('How many are the Supernovas ?','7','8','10','11',4);
create_question('What is Sanji\'s dream ?','To be the best cook in the world.','To become the best ladiesman.','To have the strongest kick in the world ','To find a sea with all kinds of fish',4);	
create_question('What is Chopper\'s dream ?','To be the best doctor in the world.','To become the best pet ever existed.','To make strawberry-flavored rumble  balls','To become a doctor that can cure any illness',4);
create_question('Who is Luffy\'s biggest fan ?','Princess Vivi','Reyleigh','Bartolomeo','Coby',3);
create_question('Who is the fleet admiral currently ? \n (post-timeskip)','Sakazuki','Fujitora','Aokiji','Sengoku',1);
create_question('What is Luffy\'s favorite food ?','Meat','Fish','Noodles','Tacoyaki',1) ; 
create_question('Who is in love with luffy ?','Nico Robin','Boa Hanckock','Nami','Curly Dadan',2);
create_question('How many members does Luffy want to be in his crew ?','5','9','15','10',4);
create_question('What animal is Laboon ?','Deer','Shark','Whale','Octapus',3);
create_question('Who inspired Luffy in becoming a pirate ?','His grandpa','Shanks','Ace','His father',2);
create_question('How does Sanji call Zoro \(in a mocking way)','Loser','Slowpoke','Drunk','Marimo',4);
create_question('What is the name of Luffy\'s Devil Fruit ?','Gomu-Gomu no mi','Goro-Goro no mi','Mero-Mero no mi','Hito-Hito no mi',1);
create_question('How many swords does Zoro have ?','1','2','3','4',3);
create_question('What was Sanji\'s job before join the Straw Hat crew ?','Sous chef', 'Singer', 'Waiter', 'Bodyguard',1);
create_question('Who is the first Devil Fruit User Luffy fought ?','Buggy','Captain Morgan','Ace','Garp',1);
create_question('Which martial art does Jinbei practice ?','Fishman karate','Fishman tae kwon do','Fishman kick box','Fishman box',1);
create_question('Where is Vivi from ?','Skypea','Arrabasta','Dressrossa','Water-7',2);
create_question('What fuels Franky ?','Cola','Tea','Gasoline','Soda',1);
create_question('What happens if a Devil Fruit User falls into the sea ?','He drowns','He explodes','He melts','He swims',1);
create_question('What relationship does Gol D. Roger share with Luffy ?','Grandparent','Father','Uncle','None',4);
create_question('Which is the animal Going Merry represents ?','Lion','Goat','Sheep','Cat',2);
create_question('What is Whitebeard\'s name ?','Marshal D. Teach','Bon Clay','Edward Newgate','Trafalgar D. Water Law',3);
create_question('Who is the oldest Straw Hat ?','Zoro','Luffy','Robin','Brook',4);
create_question('Who did Luffy beat so that Nami could join the crew?','Sanji','Arlong','Crocodile','Buggy',2);
create_question('Which Devil Fruit did Rob Lucci eat ?','Giraffe','Wolf','Leopard','Lion',3);
create_question('Which of these is not one of Luffy\'s moves ?', 'Gomu-Gomu no rifle','Gomu-Gomu no knife','Gomu-Gomu no fusen','Gomu-Gomu no red hawk',4);
create_question('What is the name of the owner of Baratie?','Sanji','Don Krieg','Zeff','Tenryuubito',3);
create_question('Who is Franky\'s master?','Tom','Iceburg','Jack','Sunny',1);
create_question('Who is Borsalino?','Kizaru','Aokiji','Marco','Vista',1);
//===========================================================================================================================================
//edw 3ekinaei to level 2
create_question('Who is also called Poseidon ?','Franky','Blackbeard','King Neptune','Shirahoshi',4);
create_question('Where did Luffy grow up ?','North Blue','East Blue','South Blue','West Blue',2);
create_question('Who is the strongest creature in the world?','Kaido','Whitebeard','Mihawk','Dragon',1);
create_question('How many times did Luffy win Ace in a battle between them ? ','0','1','2','5',1);
create_question('How is Hacchi\'s friend the star called ?','Pappug','Keimi','Arlong','Patrick',1)
create_question('Who didn\'t Zoro want to join the crew ?','Sanji','Chopper','Brook','Robin',4) ;
create_question('Who is the first one to beat Luffy after he set sail to become a pirate ?','Crocodile','Smoker','Belamy','Kuma',2);
create_question('What is the name of Nami\'s sister ','Kaya ','Nojiko ','Vivi ','Bell-mere ',2);
create_question('What was the name of Brook\'s crew before he joined Straw Hat Crew ','Rumbar Pirates ','Runda Pirates ','Orchest Pirates ','Straw Hat Pirates ',1);
create_question('Which is the Water 7\'s train ','Puffing Tom ','Hogwarts Express ','Rocket man ','Rocket Tom ',1);
create_question('Who is Robin\'s mother ','Nico Orlumbus ','Nico Olivia ','Nico Otohime ','Nico Olvia ',4);
create_question('Which Galley-La member uses ropes to fight?','Paulie','Kaku','Tilestone','Iceburg',1);
create_question('Who is the first mermaid the crew runs upon ','Otohime ','Keimi ','Kokoro ','Shyarly ',3);
create_question('Who had an arguement (and fight) with the crew during the Water 7 arc ','Usopp ','Franky ','Robin ','Sanji ',1);
create_question('Who posses the power of the Horo Horo no mi ','Nami ','Shakky ','Nojiko ','Perona ',4);
create_question('What is the name of the sword Zoro took from the zombie-samurai ','Durandal ','Wado Ichimonji ','Yubashiri ','Shusui ',4);
create_question('Who is Kizaru\'s nephiew ','Sentomaru ','Bibic ','Basil Hawkins ','Coby ',1);
create_question('Who ate the invisibility fruit ','Fox ','Hogback ','Absalom ','Sanji ',1);
create_question('Who is the former Pirate Empress ','Boa Hancock ','Catarina Devon ','Elder Nyon ','Otohime ',1);
create_question('Who is Gloriosa?','Nyon','Nojiko','Shirahosi','Boa Hancock',1);
create_question('After the timeskip, which Straw Hat arrived 1st at Sabaody archipelago ','Zoro ','Sanji ','Franky ','Robin ',1);
create_question('After the timeskip, which Straw Hat arrived 7th at Sabaody archipelago ','Zoro ','Sanji ','Franky ','Robin ',2);
create_question('Who is Ivankov\'s associate introduced at Impel Down arc ','Caroline ','Bon Clay ','Luffy ','Inazuma ',4);
create_question('Who is the substitute Okama queen?','Ivankov','Tibany','Caroline','Bon Clay',3)
create_question('Who is the vice warden ','Hannyabal ','Magellan ','Garp ','Shiliew ',1);
create_question('Who is a former marine? ','Whitebeard ','X Drake ','Orlumbus ','Garp ',2);//4 akoma
create_question('Who ate Goro Goro no mi?','Crocodile','Enel','Gecko Moria','Caribou',2);
create_question('Who is the second in command of the Revolutionary Army','Ivankov','Dragon','Sabo','Koala',3);
create_question('Who is NOT one of the Red Hair Pirates?','Lucky Roo','Benn Beckman','Rockstar','Higuma',4);
create_question('What is the name of Roger\'s ship?','Oro Jackson','Whydah','Black Joke','Going Merry',1);
//===========================================================================================================================================
//edw 3ekinaei to level 3
create_question('What is Luffy\'s current age ? (post-timeskip','17','18','19','20',3);
create_question('What is the name of the crew led by Apoo ?','On Air Pirates','Orchestr Pirates','Sound Pirates','On Sky Pirates',1);
create_question('What is the name of the island Franky spent the timeskip on?','Water 7','Ohara','Tequila Wolf','Barujimoa',4);
create_question('What is the name of the island Robin spent the first days of the timeskip on?','Alabasta','Ohara','Tequila Wolf','Barujimoa',3);
create_question('What was the name of Ace\'s crew before he joined Whitebeard ?','Fire Fist Pirates','Spade Pirates','Whitebeard Pirates','Hiken Pirates',2);
create_question('Which one is from North Blue?','Zoro','Crocodile','Sanji','Luffy',3)
create_question('What is the name of Cavendish\'s horse','Durandal','Farul','Carue','Dolly',2);
create_question('What was the name of the 4th division Whitebeard Commander?','Vista','Thach','Ace','Jozu',2)
create_question('In what age did Ace firstly used Conqueror\'s Haki for the first time?','11','10','9','8',2)
create_question('What is the name of the girl from Zoros past that motivates him to be the strongest swordsman ','Tashigi ','Kuina ','Kina ','Kuna ',2);
create_question('Which one is Namis\' favorite fruit ?','Strawberry','Watermelon','Orange','Melon',3);
create_question('Whose laugh sounds like “Fos fos fos” ','Rayleigh ','Bonnie ','Catarina Devon ','Hogback ',1);
create_question('Who gifted the Straw Hat Crew their first ship, Going Merry ',' Boa Hancock',' Zoro',' Franky','Kaya ',4);
create_question('Whose laugh sounds like \“Zehahahaha\” ','Donflamingo ','Blackbeard ','Whitebeard ','Gecko Moria ',2);
create_question('Which pirate defeated Brownbeard and left in a bad shape ','Monkey D Luffy ','Ceasar Clown ','Trafalgar Law ','Basil Hawkins ',4);
create_question('Who is Vivi\'s animal partner ','Cowboy ','Ivan','Stomp','Carue',4);
create_question('Who is the owner of the pab Rayleigh visits often at Sabaody Archipelago ','Shakuyaku','Shyarly','Rayleigh ','Tenryobito ',1);
create_question('Who rusted Zoro\'s sword Yubashiri?','Ryuma','Shu','Aokiji','Kaku',2);
create_question('What is the name of Cavendish\'s sword','Shusui','Wado Ichimonji','Yubashiri','Durandal',4);
create_question('Who has the habit of ending his sentences with \“-dasuyan\”? ','Dosun ','Buffalo ','Chaka ','Tom ',2);
create_question('What is the name of Urouge\'s crew? ','Fallen Monk Pirates ','Sky Monk Pirates ','Angel Monk Pirates ','Flying Monk Pirates ',1);
create_question('What is the name of Capone “Gang” Beke\'s crew? ','Capone Family Pirates ','Firetank Pirates ','Family Army Pirates ','Gank Pirates ',2);//8 akoma
create_question('What is Klabautermann','A sword','An island','A soul','A ship',3);
create_question('What is Charlotte Linlin\'s occupation?','Pirate','Bandit','Marine','Princess',1);
create_question('Which one is the Swamp Swamp Fruit?','Buki Buki no mi','Gura Gura no mi','Sara Sara no mi','Numa Numa no mi',4);
create_question('In what dock does \'Black Rhino\' belong?','Dock 2','Dock 3','Dock 4','Dock 5',3);
create_question('In what dock does \'Shark Submerge\' belong?','Dock 2','Dock 3','Dock 4','Dock 5',2);
create_question('What is Wiper\'s occupation?','King','Robber','Assasin','Warrior',4);
create_question('What is Helmeppos\' rank?','Lieutenant Commander','Commander','Captain','Vice Admiral',1);
create_question('Who stabbed Whitebeard at Marineford?','Blackbeard','Momonga','Squard','Mihawk',3);
//===========================================================================================================================================
//edw 3ekinaei to level 4
create_question('How many sword wounds did Whitebeard sustain during the battle of Marineford ?','85','152','267','339',3);
create_question('How many bullets hit Whitebeard during the battle of Marineford ?','95','173','267','339',1);
create_question('How many cannonballs hit Whitebeard sustain during the battle of Marineford ?','25','37','46','67',3);
create_question('How many people have been confirmed to have D. in their names ?','5','7','9','11',3);
create_question('How many are the confirmed (manga introduced) Conqueror\'s Haki users?','7','8','9','10',2);
create_question('What was the number of the key, that unlocked Robins\' handcuffs?','4','2','3','5',4);
create_question('What was the name of the ancient city that Enel found in the moon ?','Skypea ','Moonland ','Blika','Kotan ',3);
create_question('What was Papaneels occupation?','Cook','Musician','Robber','Navigator',3);
create_question('Which one of the follow is NOT  a Demon Guard at Impel Down ','Minochihuahua ','Minokoala ','Minozebra ','Minolion ',4);
create_question('Which fruit lets you transform into an Axolotl?  ','Awa Awa no mi','Sara Sara no mi','Ushi Ushi no mi','Ito Ito no mi',2);
create_question('Which fruit lets you be a snowman/woman?  ','Awa Awa no mi ','Yuki Yuki no mi ','Ushi Ushi no mi','Supa Supa no mi ',2);
create_question('How many are the Straw Hats plus the allied crews? ','9 ','5609 ','5649 ','5639 ',3);
create_question('Which one is an introduced Dong Krieg\'s subortinate? ','Krieg Junior','Pell','Chaka','Gin',4);//15
create_question('Who was the first to mention Big Mom by her name(Charlotte Linlin)','Rayleigh','Hachi','Pappug','Shyarly',3);
create_question('Who is Charlotte Linlin?','Whitebeard Captain','Big Mom','Mermaid Waitress','Impel Down escapee',2);
create_question('What was the name of the box the Energy Steroids were in?','Tamatebako','Tematebako','Tametebako','Tamatabako',1);
create_question('What is Rika\'s occupation?','Waitress','Musician','Marine','Doctor',1);
create_question('What is the name of the bandit that purred drink on Shanks?','Higame','Higuma','Hogima','Hagime',2);
create_question('Who was Buggy\'s second mate?','Cabaji','Mohji','Richie','Mr.3',1);
create_question('Who was Buggy\'s first mate?','Cabaji','Mohji','Richie','Mr.3',2);
create_question('How many are the O Wazamono Grade Swords?','12','21','50','undetermined',2);
create_question('How many are the Ryo Wazamono Grade Swords?','12','21','50','undetermined',3);
create_question('What is Woop Slap\'s occupation?','Mayor','Carpenter','Bandit','Robber',1);
create_question('Who is X Drake\'s father?','Diez Barrels','Dez Barrels','Dieuz Barrels','Deuz Barrels',1);
create_question('Which of the following is shown smoking ciggaretes?','Bian','Biyo','Big Pan','Banchi',4);
create_question('Who ate the Mushi Mushi no mi?','Bian','Biyo','Big Pan','Banchi',1);
create_question('Which one is a pig?','Banchi','Ivan','Buhichuck','Chuchun',3);
create_question('What was Byron\'s occupation?','Robber','Musician','Prince','Marine',2);
create_question('Who is Garp\'s right hand?','Coby','Bogard','Bellett','Capote',2);
create_question('Whose subortinate is Fen Bock?','Marco','Hody Jones','Ceasar Clown','Donquixote Donflamingo',3);

create_question('','','','','',1);
create_question('Who can turn any part of his body into steel blades?','Bellett','Gatz','Shiliew','Daz Bones',4);
create_question('','','','','',1);
create_question('','','','','',1);
create_question('Which one is allied with Whitebeard?','Kohza','Doma','Donovan','Damask',2);
create_question('Which one is a member of the Rebel Army?','Koala','Dorry','Bogard','Kohza',4);
create_question('Whose sword is Terry Sword?','Bogard','Dorry','Kohza','Vista',2);
create_question('Who is a pyromaniac?','Doma','Bogard','Biyo','Damask',4);
create_question('','','','','',1);