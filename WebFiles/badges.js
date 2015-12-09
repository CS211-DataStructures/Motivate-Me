<script>
//VARIABLES
var levels = 0;
var badgeArray = new Array(9);
var earnedBadges = new List(); //list is a doubly linked list with a head node
earnedBadges = require("collections/list");
var loginStreak = 0;

//METHODS

/**
This function sets up an array with images
**/
function initializeArray() {
	//logged in 3 days in a row
	badgeArray[0] = new Image (50,50);
	badgeArray[0].src = "Badges/activeUser.png";
	//equal amounts of work and play
	badgeArray[1] = new Image (50,50);
  	badgeArray[1].src = "Badges/balanced.png";
	//completed all tasks
	badgeArray[2] = new Image (50,50);
	badgeArray[2].src = "Badges/focused.png";
	//excersized 9 times in 3 weeks
	badgeArray[3] = new Image (50,50);
	badgeArray[3].src = "Badges/gymEnthusiast.png";
	//drank enough water
	badgeArray[4] = new Image (50,50);
	badgeArray[4].src = "Badges/hydrated.png";
	//logged in 2 weeks in a row
	badgeArray[5] = new Image (50,50);
	badgeArray[5].src = "Badges/onFire.png";
	//attended 3 socials in one week
	badgeArray[6] = new Image (50,50);
	badgeArray[6].src = "Badges/partyAnimal.png";
	//excersized 3 times in one week
	badgeArray[7] = new Image (50,50);
	badgeArray[7].src = "Badges/pumpedUp.png";
	//completed a long term goal
	badgeArray[8] = new Image (50,50);
	badgeArray[8].src = "Badges/thoughtful.png";
}

/**
*This function checks if a condition has been met.
*If it has, it adds the image onto a doubly linked list.
**/
function check() {
	//BADGE 1
	
	//BADGE 2
	if (academics.numAcademicGoals != 0 && fun.numFunItems != 0) {
		if (fun.numFunItems == academics.numAcademicGoals) {
			windowAlert(badgeArray[1]); //shows the badge in the current screen
			earnedBadges.push(badgeArray[1]); //adds value to the end of a collection
		}
	}

}

/**
*This function shows the badges earned
**/
function show() {
	for (var i = 0; i < earnedBadges.length; i++)
	{
	document.write(earnedBadges.next());
	console.log(earnedBadges.next());
	}
}

/**
*This function checks how many days in a row the user has logged in
**/
</script>