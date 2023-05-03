const tripTime = (arr) => {
	let result = {
		avgSpeedLimits: [],
		segmentTimes: [],
		totalTime: null,
	};

	arr.forEach((e) => {
		let totalMinutes = e.speedLimits.reduce((acc, cur) => {
			let minutes = (60 / cur.speedLimit) * cur.distance;
			acc += minutes;
			return acc;
		}, 0);

		totalMinutes += e.traffic;
		totalHours = totalMinutes / 60;

		let multiplied = e.speedLimits.reduce((acc, cur) => {
			let multiply = cur.distance * cur.speedLimit;
			acc += multiply;
			return acc;
		}, 0);

		let totalDistance = e.speedLimits.reduce((acc, cur) => {
			return (acc += cur.distance);
		}, 0);

		let weightedAverage = multiplied / totalDistance;

		result.avgSpeedLimits.push(weightedAverage);
		result.totalTime += totalHours;
		result.segmentTimes.push(totalHours);
	});

	return result;
};

const stops = [
	{
		name: `Gus's Gas`,
		speedLimits: [
			{
				distance: 5,
				speedLimit: 45,
			},
			{
				distance: 97,
				speedLimit: 65,
			},
			{
				distance: 72,
				speedLimit: 70,
			},
			{
				distance: 25,
				speedLimit: 50,
			},
		],
		traffic: 12,
	},
	{
		name: `Halle's House of Pancakes`,
		speedLimits: [
			{
				distance: 36,
				speedLimit: 50,
			},
			{
				distance: 141,
				speedLimit: 75,
			},
		],
		traffic: 0,
	},
	{
		name: `Jake's Great Shakes`,
		speedLimits: [
			{
				distance: 100,
				speedLimit: 75,
			},
			{
				distance: 84,
				speedLimit: 70,
			},
			{
				distance: 20,
				speedLimit: 75,
			},
		],
		traffic: 30,
	},
	{
		name: `Luna's Lunch Counter`,
		speedLimits: [
			{
				distance: 3,
				speedLimit: 35,
			},
			{
				distance: 5,
				speedLimit: 45,
			},
			{
				distance: 20,
				speedLimit: 65,
			},
			{
				distance: 85,
				speedLimit: 75,
			},
			{
				distance: 3,
				speedLimit: 65,
			},
			{
				distance: 5,
				speedLimit: 55,
			},
		],
		traffic: 7,
	},
];

console.log(tripTime(stops));
