var means = [
	"Alcohol",
	"Amoeba",
	"Arsenic",
	"Arson",
	"Axe",
	"Bamboo Tip",
	"Bat",
	"Belt",
	"Bite And Tear",
	"Blender",
	"Blood Release",
	"Box Cutter",
	"Brick",
	"Bury",
	"Candlestick",
	"Chainsaw",
	"Chemicals",
	"Cleaver",
	"Crutch",
	"Dagger",
	"Dirty Water",
	"Dismember",
	"Drill",
	"Drown",
	"Dumbbell",
	"E-Bike",
	"Electric Baton",
	"Electric Current",
	"Explosives",
	"Folding Chair",
	"Gunpowder",
	"Hammer",
	"Hook",
	"Ice Skates",
	"Illegal Drug",
	"Injection",
	"Kerosene",
	"Kick",
	"Knife And Fork",
	"Lighter",
	"Liquid Drug",
	"Locked Room",
	"Machete",
	"Machine",
	"Mad Dog",
	"Match",
	"Mercury",
	"Metal Chain",
	"Metal Wire",
	"Overdose",
	"Packing Tape",
	"Pesticide",
	"Pill",
	"Pillow",
	"Pistol",
	"Plague",
	"Plastic Bag",
	"Poisonous Gas",
	"Poisonous Needle",
	"Potted Plant",
	"Powder Drug",
	"Punch",
	"Push",
	"Radiation",
	"Razor Blade",
	"Rope",
	"Scarf",
	"Scissors",
	"Sculpture",
	"Smoke",
	"Sniper",
	"Starvation",
	"Steel Tube",
	"Stone",
	"Sulfuric Acid",
	"Surgery",
	"Throat Slit",
	"Towel",
	"Trophy",
	"Trowel",
	"Unarmed",
	"Venomous Scorpion",
	"Venomous Snake",
	"Video Game Console",
	"Virus",
	"Whip",
	"Wine",
	"Wire",
	"Work",
	"Wrench"
];
var evidence = [
	"Air Conditioning",
	"Ants",
	"Antique",
	"Apple",
	"Badge",
	"Bandage",
	"Banknote",
	"Bell",
	"Betting Chips",
	"Blood",
	"Bone",
	"Book",
	"Bracelet",
	"Bread",
	"Briefs",
	"Broom",
	"Bullet",
	"Button",
	"Cake",
	"Calender",
	"Candy",
	"Carton",
	"Cassette Tape",
	"Cat",
	"Certificate",
	"Chalk",
	"Cigar",
	"Cigarette Ash",
	"Cigarette Butt",
	"Cleaning Cloth",
	"Cockroach",
	"Coffee",
	"Coins",
	"Comics",
	"Computer",
	"Computer Disk",
	"Computer Mouse",
	"Confidential Letter",
	"Cosmetic Mask",
	"Cotton",
	"Cup",
	"Curtains",
	"Dentures",
	"Diamond",
	"Diary",
	"Dice",
	"Dictionary",
	"Dirt",
	"Documents",
	"Dog Fur",
	"Dust",
	"Earrings",
	"Eggs",
	"Electric Circuit",
	"Envelope",
	"Exam Paper",
	"Express Courier",
	"Fan",
	"Fax",
	"Fiber Optics",
	"Fingernails",
	"Flashlight",
	"Flip-Flop",
	"Flute ",
	"Flyer",
	"Food Ingredients",
	"Gear",
	"Gift",
	"Gloves",
	"Glue",
	"Graffiti",
	"Hair",
	"Hairpin",
	"Handcuffs",
	"Hanger",
	"Hat",
	"Headset",
	"Helmet",
	"Herbal Medicine",
	"High Heel",
	"Hourglass",
	"Ice",
	"ID Card",
	"Ink",
	"Insect",
	"Internet Cable",
	"Invitation Card",
	"IOU Note",
	"Iron",
	"IV Bag",
	"Jacket",
	"Jewelry",
	"Juice",
	"Key",
	"Leaf",
	"Leather Bag",
	"Leather Shoe",
	"Lens",
	"Light Bulb",
	"Lipstick",
	"Lock",
	"Lottery Ticket",
	"Love Letter",
	"Luggage",
	"Lunch Box",
	"Magazine",
	"Mahjong Tiles",
	"Map",
	"Mark",
	"Mask",
	"Maze",
	"Menu",
	"Mirror",
	"Mobile Phone",
	"Model",
	"Mosquito",
	"Mosquito Coil",
	"Nail",
	"Name Card",
	"Necklace",
	"Needle And Thread",
	"Newspaper",
	"Note",
	"Notebook",
	"Numbers",
	"Office Supplies",
	"Oil Painting",
	"Oil Stain",
	"Paint",
	"Panties",
	"Peanut",
	"Perfume",
	"Photograph",
	"Plant",
	"Plastic",
	"Playing Cards",
	"Pocket Watch",
	"Postal Stamp",
	"Powder",
	"Prescription",
	"Puppet",
	"Push Pin",
	"Puzzle",
	"Raincoat",
	"Rat",
	"Receipt",
	"Red Wine",
	"Riddle",
	"Ring",
	"Rose",
	"Rubber Stamp",
	"Sack",
	"Safety Pin",
	"Sand",
	"Sawdust",
	"Seasoning",
	"Signature",
	"Skull",
	"Snacks",
	"Soap",
	"Sock",
	"Soft Drink",
	"Speaker",
	"Specimen",
	"Spider",
	"Spinning Top",
	"Sponge",
	"Spring",
	"Steamed Buns",
	"Stockings",
	"Stuffed Toy",
	"Suit",
	"Sunglasses",
	"Surgical Mask",
	"Surveillance Camera",
	"Switch",
	"Syringe",
	"Table Lamp",
	"Take-Out",
	"Tattoo",
	"Tea Leaves",
	"Telephone",
	"Test Tube",
	"Tie",
	"Timber",
	"Tissue",
	"Tool Box",
	"Toothpicks",
	"Toy",
	"Toy Blocks",
	"Tweezers",
	"Umbrella",
	"Uniform",
	"USB Flash Drive",
	"Vegetables",
	"Video Camera",
	"Violin",
	"Wallet",
	"Watch",
	"Wig"
];
var locations = [
	[
		"Living Room",
		"Bedroom",
		"Storeroom",
		"Bathroom",
		"Kitchen",
		"Balcony"
	],
	[
		"Vacation Home",
		"Park",
		"Supermarket",
		"School",
		"Woods",
		"Bank"
	], [
		"Pub",
		"Bookstore",
		"Restaurant",
		"Hotel",
		"Hospital",
		"Building Site"
	], [
		"Playground",
		"Classroom",
		"Dormitory",
		"Cafeteria",
		"Elevator",
		"Toilet"
	]
]
var playerNum = $("#playerNum option:selected").text() - 1;
// console.log(means[Math.floor(Math.random() * means.length)]);

$("#playReset").click(function() {
	// if (confirm("Are you sure?")) {
	reset();
	// }
});

function reset() {
	resetSetup();
	eventSetup();
}
reset();
function eventSetup(){
	var eventsSetup = $("#events");
	eventsSetup.empty();

	//add header for each player
	var cat = "";
	cat += '<tr>';
	for (var i = 0; i < 4; i++) {
		cat += '<td colspan="2"><button type="button">Select</button></td>';
	}
	eventsSetup.append(cat + '</tr>');
}
function resetSetup(){
	var playerTab = $("#playerTab");
	playerTab.empty();

	//add header for each player
	var cat = "";
	cat += '<tr>';
	for (var i = 0; i < playerNum; i++) {
		cat += '<td colspan="2"><input placeholder="Player ' + (i + 1) + '" style="width:auto" type="text" name="fname"><br></td>';
	}
	playerTab.append(cat + '</tr>');

	//add means/evidence
	var selectedEvidence = [];
	var selectedMeans = [];

	function selectedSetup(arr) {
		while (arr.length < playerNum * 4) {
			var temp = means[Math.floor(Math.random() * means.length)]
			var dupe = false;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === temp) {
					dupe = true;
				}
			}
			if (!dupe) {
				arr.push(temp);
			}
		};
	};
	selectedSetup(selectedMeans);
	selectedSetup(selectedEvidence);
	// console.log(selectedEvidence);
	// console.log(selectedMeans);
	cat = '';
	// playerTab.append('<tr>');
	for (var i = 0; i < 4; i++) {
		cat += '<tr>';
		for (var j = 0; j < playerNum; j++) {
			cat += '<td>' + selectedMeans[(i * playerNum) + j] + '</td>';
			cat += '<td>' + selectedEvidence[(i * playerNum) + j] + '</td>';
		}
		cat += '</tr>';

	}
	playerTab.append(cat);
	
}

$('td').click(function() {
	if ($(this).hasClass('red')) {
		$(this).removeClass('red');
	} else {
		$(this).addClass('red');
	}
});