- A User is also a player only if that person is on a team .
- A team can have maximum of 4 players.
- A player will belong to only one team at a time.(But can change to other team after the completion of the competition).
- A user can create none or any number of quests but all the quests created are associated with users.
- A quest will have 4 locations but each location is associated with only one quest.
- A location will have 3 clues but each clue is associated with only one location.
- A competition starts only after hunt master makes the quest as the competition with start and end dates.
- A competition is comprised of quest and can be participated by many teams and each teams can participate in any competition that are open.
- A player can score points from any number of locations and the same time one location can have many player scores.

## User Entity
- Any person with a valid email and wishes to register for the game is defined as user.

## Player Entity
- A Player is a user who is already registered and joined a team else that person remains as the user.

## Team Entity
- A team is defined by the group of players (max 4 people) and one who creates the team will act as team leader.

## Quest Entity
- The quest can be designed by any user which will have 4 loactions.

## Location Entity
- This entity is comprised of location coordinates and is designed during the creation of the quest.

## Competition Entity
- This is conducted by the huntmaster and the team with maximum points wins the competition.

## Clues Entity
- This is the field which contains the set of clues(3) which when cracked by the players gives the location coordinates.

## Player Score
- This entity comprises of the score of the player based on the location they reache and at which position they reached the location.

## Competition Team Mapping
- This entity stores the information of the competition start and end times along with the information of the teams participating in the competition.