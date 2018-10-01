const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Games collection and inserts the games below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ontap"
  );

const gamesSeed = [
    {
        title: "Cheers To the Governor",
        description: [
        "1. Everyone goes around in a circle and take turns counting to 21.",

        "2. The only thing you need to know is that you start off with a base rule (I explain this in more detail in a section later in this article).",
        
        "3. Whoever messes up has to drink, and the round starts back at the number 1." ,
        
        "4. When someone gets to 21, they say 'cheers to the governor!' Everyone raises their glasses and drinks.",
        
        "5. Whoever says 21 gets to make up a new rule. New rules can be things like, 'whoever says 5 has to drink', 'number 10 says the pledge of allegiance', etc. The only limit is your imagination.",
        ],
        rating: 3  
    },
    {
        title: "King's Cup",
        description:[
            "Prepping for the game:",

            "First get a new beer that is unopened and place it in the middle of a table that everyone can sit around.",

            "Use a deck of cards and lay them out face down making a circle around the unopned beer.",

            "Go around the circle clockwise taking turns pulling a single card from the circle of cards on the table.",

            "Each card has it's own instrctions on what to do.",

            "Follow the action of each card below for when it is picked up.",

            "After the action is completed for that card, the player that drew the card must put the card underneith the tap of the beer, BUT BE CAREFUL NOT TO POP THE TAP ON THE BEER!",

            "If the player inserting the card under the tap of the beer opens the beer in anyway, they must drink the entier beer as fast as they can.",

            "If a player knocks any cards that hvae already been placed inside of the tap has to reinsert all cards back into the tap of the beer.",

            "Here are the actions for each card:",

            "Ace: Waterfall, Every player starts drinking and can not stop until the person their left stops. Whoever drew the ace is can choose when stop whenever they want. ",

            "2: 'You': Player who drew this card picks any player to take a drink.",

            "3: 'Me': Player who drew this card must take a drink.",

            "4: 'Whores': All women must take a drink.",

            "5: 'Drive': All players interact with this card. Everyone holds out their hands as if they were holding on to a steering wheele. You will use the terms 'Vroom' and 'Skert to saw which direction you turn your hands. The first person starts the directoin of the 'Vroom' and which ever direction the player turns their hands like turning a steering wheele is the direction stated. The player in which he turned towards now has to either keep the same direction and say 'Vroom' or this player can switch the original direction but has to say 'Skert'. If a player turns their hands the wrong direction as the term they use, they have to drink. ",

            "6: 'Dicks': All men must take a drink.",

            "7: 'Heaven: Everyone must put their hands straight up into the air and the last person to put their hands up loses and has to take a drink.",

            "8: 'Date': The player who draws this card picks another player to be their 'Date' and every time the player who drew this card drinks their date has to drink as well. This date is cancelled out by the next person who draws this card.",

            "9: 'Rhyme': The player who draws this card starts out with a word that everyone else has to rhyme with. It will go counterclock wise around the circle untill someone messes up or takes too long to think of a word. If you mess up or take to long you have to drink.",

            "10: 'Categories': This card is exactly like the 9 card but instead of rhyming the starting player picks a category that everyone has to say something in that category. If you take too long to think of something then you lose and you have to drink.",

            "Jack: 'Back': Whoever drew the previous card in the rotation has to take a drink.",

            "Queen: 'Question Master': This person can now at anytime ask any player a question and if they answer this question then that player has to take a drink.",

            "King: 'Rules': This person can now make up any rule that they can imagine and it is in affect until the next King is drawn."

        ],
        rating: 8
    },
    {
        title: "Waterfall",
        description:[
        "2: Give 2 – The player can make another player take two sips",

        "3: Drink 3 – The player who picks this card has to drink 3 sips",

        "4: Girls drink! – All the girls in the game have to drink!",

        "5: Bust a jive! – The person who picks the card has to come up with a dance move. The next person has to do that dance move and add to it. This continues until someone makes a mistake and has to drink.",

        "6: Guys drink – All the guys in the game have to drink!",

        "7: Heaven – All players reach for the sky. The last person to do so has to drink.",

        "8: Mate – The player who picks the card chooses another player to be their mate. This means when one of them drinks they both drink.",

        "9: Bust a Rhyme – The player who picks this card says a word and all the players after him/her has to say a word that rhymes with this word. First one to not come up with a word has to drink.",

        "10: Categories – The player who picked the card chooses a category. Then everyone goes around and says something that fits in the chosen category. Whoever cannot think of anything in the category has to drink. Good categories to use include types of liquor, car companies, and types of cereal.",

        "Jack: Thumb – Drawing a Jack makes you the Thumb Master. Whenever you choose you can put your thumb on the table causing all players to race to do the same. Last player to do so has to drink. You remain Thumb Master until a new Jack is drawn.",

        "Queen: Question – Ask a question from any other player, who must in turn ask a different player a question. Whoever doesn’t answer with a question has to drink, and you can’t ask a question back to the person who last asked you.",

        "King: New rule – The player who picks a King gets to create a new rule for the game. If the rule is not followed the person who broke the rule has to drink. A good rule is to for example only be allowed to hold the drink in your left hand.",

        "Ace: Waterfall – Once an ace is drawn, everyone starts to drink. The player who picked the card can stop whenever he/she wants, but others have to keep drinking. Once he/she decides to stop, the player on his/her right can stop and so on. The last player in the ring has to finish last."
        ],
        rating: 9
    },
    {
        title: "Beer Pong",
        description: [
        "Beer Pong Rules",

        "Although there are currently no 'official' beer pong rules, we’ve provided a skeleton below with the most basic, commonly accepted rules. Feel free to add, subtract, or alter these rules when you play with your friends.",
        
        "Start Your Beer Pong Game:",

        "One player from each team is selected to take an initial shot to determine which team goes first in the actual game.",
        
        "While looking each other in the eye, the chosen opposing players count to three and take a shot at the same time. If only one of them makes the shot, their team goes first. If they both make or miss their shot, players go again.",
        
        "After the first game, the winning team gets the first shot.",
        
        "Turns:",

        "Each beer pong team shoots twice per turn; each player taking one shot. If both players make their shot, “throwbacks” are given, and that team receives another turn.",
        
        "Shooting:",

        "The ball can be tossed or bounced into the cup.",
        
        "A tossed ball that sinks is worth one cup (the cup it lands in). A bounced shot that sinks is worth two cups (the one in which the shot was made and another from the pyramid)",
        
        "There’s a catch: the defending (non-throwing) team may block a bounced ball once it hits the table, whereas tossed shots are indefensible.",
        
        "Sinking Cups",
        "A beer pong cup is “sunk” as soon as the ball touches the contents of the cup.",
        
        "Any cup that is sunk must be immediately removed from the table and the defending team is responsible for drinking its contents. Team members alternate drinking.",
        
        "Warning: Watch your cups that have been sunk but are left undrank. If the opposing team sinks a ball in the cup you’re drinking from, it’s game over.",
        
        "If one cup is sunk, and the next player shoots, hitting the same cup, that also ends the game.",
        
        "Any cups accidentally knocked over are considered sunk.",
        
        "Re-Racking",
        "A team is allowed to request a “re-rack” at the end of a turn, in order to maintain a compact shape.",
        
        "Each team gets two re-racks per game, which can be used at almost any time*. The standard beer pong rule is to take one re-rack with 6 cups remaining, and the other when 2 or 3 cups remain. Note: if you’re playing beer pong with 6 cups each – there is one re-rack allowed per team, per game.",
        
        "You can not re-rack if you’re shooting during 'throwbacks'"
        
        *"You can not re-rack during a 'redemption round'", 
        
        "Game Ending Situations",

        "When a team eliminates the last beer pong cup of the opposing team, they haven’t won yet. The defending team has a “redemption round” where each player gets a turn. Redemption rounds are shoot until you miss. If the defending team sinks the remaining cups in the redemption round, overtime is forced. If the team is not able to force the game into overtime, they lose and are responsible for drinking the contents of the remaining team’s cups in addition to their own remaining cups.",
        
        "Overtime",

        "Should the game be forced into overtime, each team sets up three cups in a triangle and fills them with beer. The team who hit the last cup to force the overtime shoots first.",
        
        "Overtime is played like a normal game (without re-racks), and double or triple overtime may be necessary, until one team wins.",
        ],
        rating: 20
    },
    {
        title: "21 Cup",
        description:[
        "Set up 21 cups in a triangle on each side of the table.  If you really want to turn your enemy into a drunken slob, fill the middle cup all the way to brim with alcohol.  The remaining 20 cups should be halfway full of beer.",

        "Three team members choose “enemies” from the opposite team.  Each team member gets one ball and stands directly across from their opponent.  You are playing with two other people, but you are only concerned with your enemy.",

        "If a player makes the ball into a cup on the other side, the opponent must drink the entire cup of beer before they can shoot.  If you shoot before the enemy finishes drinking, you have to re-shoot, and your shot doesn’t count if you made it the first time.  If your ball lands in the same cup as your teammate’s ball, both enemies have to drink a cup.",

        "If a player’s ball lands in the middle cup, the opponent must finish the ENTIRE cup of beer.  Just a heads up, if the cup falls off the table, it is still in play, and the opponent has to refill it and drink it up.",

        "The team that gets rid of all of the cups first is the victors, and they advance to the next round.  If both teams duel at the end, with a one-on-one cup faceoff, and each team lands the shot at the same time, they all advance to the next round. "
        ],
        rating: 40
    },
    {
        title: "Odds",
        description:[
        "This is by far one of my favorite games when drinking with buds. Best played casually throughout a night, especially if out bar hopping or wandering around.",

        "It's really simple, and works basically like Dare or Dare. Person A asks person B 'What are the odds you'll do X?' person B responds with '1 in 20' or '1 in 5' etc.",

        "Then person C counts down from 3, and persons A and B say a number between 1 and 20, or whatever person B dictated as the odds. IF you both say the same number, person B must do the thing.",

        "Example:", 
        
        "'Hey Nick, what are the odds you'll cut a huge clump of your hair off right now?'",
        
        "'1 in 30' 3 2 1",
        
        "'17'",
        
        "'17!'",
        
       "Nick has to cut his hair.",
        ],
        rating: -2
    },
    {
        title: "Skull and Dice",
        description:[
        "This game happens very fast, so you have to be very alert!",

        "Step 1: You need to make sure you have your dice in hand.",
        
        "Step 2: Make sure that all players understand the scoring system / rules as you don't want anyone complaining that they didn't understand when they 'fail'(I've listed the rules below).",
        
        "Step 3: Make sure that there is plenty of alcohol and mixers on deck (avoid playing with shots).",
        
        "Step 4: All players need to sit in a circle - there should be at least four players.", 
        
        "Next, the host shouts 'SKULL' and everyone has to drink whatever is in front of them. Each player then rolls the dice in turn clockwise.",
        
        "The rules are as follows:",
        
        "If a player rolls a '1' or '6' he/she has to drink.",
        
        "If a '2' or '4' is rolled, the player is safe and doesn't have to drink.",
        
        "If a '3' is rolled, the player has to take two gulps from their drink and roll again. If that player rolls another drink, then he shouts 'SKULL' and everyone playing has to drink.",
        
        "If a '5' is rolled, then that player chooses another player to drink.",
        ],
        rating: 100
    }
]

db.Games
    .remove({})
    .then(() => db.Games.collection.insertMany(gamesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
    process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })