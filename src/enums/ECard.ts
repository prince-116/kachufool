export enum ECard {
	CLUBS_OF_2 = "2 of Clubs",
	CLUBS_OF_3 = "3 of Clubs",
	CLUBS_OF_4 = "4 of Clubs",
	CLUBS_OF_5 = "5 of Clubs",
	CLUBS_OF_6 = "6 of Clubs",
	CLUBS_OF_7 = "7 of Clubs",
	CLUBS_OF_8 = "8 of Clubs",
	CLUBS_OF_9 = "9 of Clubs",
	CLUBS_OF_10 = "10 of Clubs",
	CLUBS_OF_JACK = "Jack of Clubs",
	CLUBS_OF_QUEEN = "Queen of Clubs",
	CLUBS_OF_KING = "King of Clubs",
	CLUBS_OF_ACE = "Ace of Clubs",
	DIAMONDS_OF_2 = "2 of Diamonds",
	DIAMONDS_OF_3 = "3 of Diamonds",
	DIAMONDS_OF_4 = "4 of Diamonds",
	DIAMONDS_OF_5 = "5 of Diamonds",
	DIAMONDS_OF_6 = "6 of Diamonds",
	DIAMONDS_OF_7 = "7 of Diamonds",
	DIAMONDS_OF_8 = "8 of Diamonds",
	DIAMONDS_OF_9 = "9 of Diamonds",
	DIAMONDS_OF_10 = "10 of Diamonds",
	DIAMONDS_OF_JACK = "Jack of Diamonds",
	DIAMONDS_OF_QUEEN = "Queen of Diamonds",
	DIAMONDS_OF_KING = "King of Diamonds",
	DIAMONDS_OF_ACE = "Ace of Diamonds",
	HEARTS_OF_2 = "2 of Hearts",
	HEARTS_OF_3 = "3 of Hearts",
	HEARTS_OF_4 = "4 of Hearts",
	HEARTS_OF_5 = "5 of Hearts",
	HEARTS_OF_6 = "6 of Hearts",
	HEARTS_OF_7 = "7 of Hearts",
	HEARTS_OF_8 = "8 of Hearts",
	HEARTS_OF_9 = "9 of Hearts",
	HEARTS_OF_10 = "10 of Hearts",
	HEARTS_OF_JACK = "Jack of Hearts",
	HEARTS_OF_QUEEN = "Queen of Hearts",
	HEARTS_OF_KING = "King of Hearts",
	HEARTS_OF_ACE = "Ace of Hearts",
	SPADES_OF_2 = "2 of Spades",
	SPADES_OF_3 = "3 of Spades",
	SPADES_OF_4 = "4 of Spades",
	SPADES_OF_5 = "5 of Spades",
	SPADES_OF_6 = "6 of Spades",
	SPADES_OF_7 = "7 of Spades",
	SPADES_OF_8 = "8 of Spades",
	SPADES_OF_9 = "9 of Spades",
	SPADES_OF_10 = "10 of Spades",
	SPADES_OF_JACK = "Jack of Spades",
	SPADES_OF_QUEEN = "Queen of Spades",
	SPADES_OF_KING = "King of Spades",
	SPADES_OF_ACE = "Ace of Spades",
}

export const allCards = (): Array<ECard> => {
	return Object.keys(ECard).map((_, index) => Object.values(ECard)[index]);
};