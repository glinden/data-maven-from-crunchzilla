// Copyright 2014 Geeky Ventures

// A lesson has a message (from the tutor, a string)
// an optional lesson section (what we are teaching, a string)
// an optional tutor image (1-based index into the tutorImages array, int)
// a chart (arbitrary html esp. script or svg, a string)
// a quiz, a complicated structure consisting of
//   an array of questions where each question contains
//      question (a string)
//      answers, an array of 
//        answer (a string)
//        isCorrect (a boolean), 0, 1, or more of these can be marked
//      explanation (a string, shown after an answer is picked)

var lessons =
    [
	{
	    message: "Hello, I'm Data Maven.  Work with me, and you'll learn a little about data and statistics!  (click on my words to see what's next)", 
	    lessonSection: "Hello",
	    tutorImage: 1,
	    quiz: [],
	    chart: '',
	},
	{
	    message: "Data and statistics can answer questions. Doing this tutorial will introduce you to how you can use data and statistics to answer questions. (click again)", 
	    chart: '',
	},
	{
	    message: "There will be little quizzes along the way. Like this one!", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "Why should you care about statistics and using data?",
		    answers: [
			{ answer: "Helps make better decisions", isCorrect: true }, 
			{ answer: "Understand news and information better", isCorrect: true },
			{ answer: "Figure out what's important and what's not", isCorrect: true },
			{ answer: "Valuable for work", isCorrect: true },
			{ answer: "All of the above", isCorrect: true },
		    ],
		    explanation: "All of these are true! Statistics and data analysis are not only valuable for success at work, but also they make you more powerful in everyday life. You can use them as tools to prioritize, understand, explain, figure out which things you are told are true and which are not, and even discover new things no one has ever found before!",
		},
	    ],
	    chart: '',
	},
	{
	    message: "Some of the quizzes will ask you to think about what a question means and how answers might differ depending on what the question means.", 
	    tutorImage: 6,
	    quiz: [
		{
		    question: "How many people would you guess are taller than you?",
		    answers: [
			{ answer: "Few" }, 
			{ answer: "About half" },
			{ answer: "Most" },
		    ],
		    explanation: "As you might guess, how many people are taller than you depends on a lot of things, including who you are comparing against. You might be a giant in a room full of toddlers but tiny stepping on to an NBA basketball court! <p>We'll look more at how tall you are compared to others later.",
		},
	    ],
	    chart: '',
	},
	{
	    message: "Sometimes, you'll need to use data from a chart. Here's a chart! Can you use it to do the quiz?", 
	    lessonSection: "Getting Started",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "How many babies born in the US are girls?",
		    answers: [ 
			{ answer: "25%" }, 
			{ answer: "50%", isCorrect: true }, 
			{ answer: "75%" } ],
		    explanation: "The chart says about half of the children born in the US are girls. <p>You might be surprised to hear it's actually just a little bit less than half, 49% girls and 51% boys. It's curious that it's not exactly 50%, isn't it? It makes you wonder why. And that's what data does, answers questions and raises new questions!"
		},
	    ],
	    chart: '<div style="margin: 8px;"><style scoped> .bar { fill: green; } .bar:hover { fill: steelblue; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 12px;">Births in the US</div> <svg id=svg-births-chart width=380 height=250></svg><script> var margin = {top: 5, right: 0, bottom: 20, left: 35}, width = 380 - margin.left - margin.right, height = 250 - margin.top - margin.bottom; var svg = d3.select("#svg-births-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [{x: "Boys", y: 0.51}, {x: "Girls", y: 0.49}]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([0, 1]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis); </script> </div>'
	},
	{
	    message: "A lot of the questions might look simple, but turn out to be more complicated as you get into them.", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "Does this data tell you how many people in the US are female?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" } ],
		    explanation: "How many girls are born doesn't quite tell you how many people are female. It turns out 51% of people in the US are women, even though only 49% of births are girls. Do you know why? It's because women tend to live longer than men. But why do women live longer than men? Questions, questions, questions!"
		},
	    ],
	},
	{
	    message: "In Data Maven, you'll answer questions using real data, charts, some statistics, and a little brain power. On each lesson, read what I say first and then try the quiz.", 
	    tutorImage: 6,
	    quiz: [
		{
		    question: "How unusual is it to be more than 6 feet tall?",
		    answers: [ { answer: "It's rare", isCorrect: true }, { answer: "It depends", isCorrect: true }, { answer: "How should I know?" } ],
		    explanation: "The data in the chart can help you answer this question. If you look at the data for above 6', you can see few people are that tall. We'll get to look at data like this in depth very soon!"
		},
	    ],
	    chart: '<style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height for adults in US</div>\n<svg id=svg-height-chart width=380 height=200></svg>\n\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar rawHeightData = {};\nvar sexes = ["Female", "Male"];\nvar data = [];\nvar convertInchesToHeightLabel = function(i) {\n return Math.floor(i / 12) + "\'" + i % 12 + \'"\'; };var svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nrawHeightData.female = [0.00900, 0.02267, 0.06333, 0.13033, 0.20933, 0.32800, 0.47767, 0.62533, 0.75300, 0.85433, 0.92733, 0.96033, 0.98533, 0.99433, 0.99633, 0.99800, 0.99833, 0.99883, 0.99933, 1.00000, 1.00000],\nrawHeightData.male = [0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.01667, 0.04167, 0.06633, 0.11700, 0.19200, 0.30933, 0.42333, 0.55600, 0.69667, 0.79600, 0.89333, 0.93400, 0.96700, 0.98700, 0.99467, 0.99800];\nvar lastPercent = 0;\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\nlastPercent = 0;\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.020 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); })\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n</script>\n',
	},
	{
	    message: "As in real life, some of the questions will be hard and open-ended. Finding a good answer not only will require looking at data, but also figuring out what the question really means.", 
	    tutorImage: 1,
	    quiz: [
		{
		    question: "What dangers should you be afraid of?",
		    answers: [ 
			{ answer: "Sharks" },
			{ answer: "Terrorists" },
			{ answer: "Lightning" },
			{ answer: "Criminals" },
			{ answer: "Monsters" },
			{ answer: "Really big rocks" },
		    ],
		    explanation: "These answers are all mostly wrong. Statistically, none of them are the biggest dangers, those things that are most likely to kill or badly hurt you. Later, we'll look at what are likely dangers."
		},
	    ],
            chart: '<div style="text-align: center; margin-top: 20px;"><svg xmlns="http://www.w3.org/2000/svg" height="300" width="300" viewBox="0 0 490 510">\n <path stroke-linejoin="round" d="m335,412c25.7,16.7,62.6,22.4,75.6,53.8,21,31.4,49.3-13.1,53.9-34.9,3.18-34.2-36.6-20.6-55.9-28.1-36-12-68-34-106-43-73-26-149-47-217-85-5.1-22-42.2-48-55.3-20-16.4,17.1-21.8,65.3,15.2,53.3,50,3.68,88,41.6,136,53.4,50.7,18,103,32.7,154,50.2z" stroke="#000" stroke-linecap="round" stroke-dasharray="none" stroke-miterlimit="4" stroke-width="10" fill="#FFF"/>\n <path stroke-linejoin="round" d="m350,355c32.6-15.1,64.8-31,97.7-45.7,24.5,19.5,61.6-17.5,40.3-41.4-4.37-31.4-48.8-32.4-55.3-1.82-41.3,36.2-97.2,46.4-147,67-52.5,17.5-106,32.5-155,59-22,23.3-58.8,4.3-82.8,23.6-0.979,21.9,9.07,47.3,29.6,57.4,30-3.46,44.6-46.5,78.7-50.3,62.4-28.4,130-44,194-67.8z" stroke="#000" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="10" fill="#FFF"/>\n <path d="M128,222c-51-51-44.1-151,20-187,67-36.9,153-34.5,220,2.5,57,39.9,68,135,14,182" stroke="#000" stroke-width="12.5" fill="#FFF"/>\n <path fill="#FFF" d="m130,215c-10.2,26.5-9.92,62.6,15.3,80.7,25.1,37.7,5.53,91.7,40,125,42.5,41.7,127,33.6,153-22.8,13.8-29.6,8.18-64.2,19.3-93.8,18.7-19.1,39.8-44.4,26.7-72.9-14-31-55-12-82-15-57-2-114,0-172-1z"/>\n <path stroke-linejoin="round" d="m130,112c-17.9,28.8,11.1,59.6,3.32,89.7-4.05,27.3-15.5,60.2,5.12,83.7,20,16.8,62.7,17.3,60.2,52.1" stroke="#000" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="8" fill="none"/>\n <path d="m382,112c18.5,30.7-13.8,63.5-2.28,95.3,7.16,29.1,14,72.7-20.8,86.8-18.8,8.93-48.5,16.7-45.5,43.4" stroke="#000" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="8" fill="none"/>\n <path d="m152,297c25.6,36.2,0.207,88,31.8,122,18.1,19.6,45.9,29.5,72.3,26.3" stroke="#000" stroke-width="12.5" fill="none"/>\n <path d="m359,297c-26,36.9,0.881,91-34.3,124-18,17.9-44.4,27-69.6,24.3" stroke="#000" stroke-width="12.5" fill="none"/>\n <path stroke-width="1pt" d="m252,246c-25.9,7.37-38.3,67.3-4.34,61.5l2.24-2.75,1.96-2.83" stroke="#000"/>\n <path stroke-width="1pt" d="m259,246c25.9,7.37,38.3,67.3,4.34,61.5l-2.24-2.75-1.96-2.83" stroke="#000"/>\n <path stroke-width="1pt" d="m169,190c21.9-15.6,68.6-3.82,60.2,28.9-5.03,25.2-35.7,49.1-60.2,33.3-18.9-13.5-28.5-53.6,0.0383-62.2z" stroke="#000"/>\n <path stroke-width="1pt" d="m342,190c-21.9-15.6-68.6-3.82-60.2,28.9,5.03,25.2,35.8,49.1,60.2,33.3,18.8-13.6,28.5-53.5-0.0648-62.2z" stroke="#000"/>\n <path d="m169,305c9.68,21.8,16.3,45.1,18.5,69" stroke="#000" stroke-width="6.25" fill="none"/>\n <path d="m341,304c-9.68,21.8-16.3,45.1-18.5,69" stroke="#000" stroke-width="6.25" fill="none"/>\n <path d="m194,336c39.6,15.5,84.7,13.6,124-0.588" stroke="#000" stroke-width="5" fill="none"/>\n <path d="m199,359c34.7,18.8,78.5,17.7,113-0.294" stroke="#000" stroke-width="5" fill="none"/>\n <path d="m187,372c35.5,34.6,98.9,35,135,1.49l0.787-1.12,0.251-0.359" stroke="#000" stroke-width="6.25" fill="none"/>\n <path stroke-width="5" d="m198,340c-0.139,13.7-0.277,27.5-0.416,41.2" stroke="#000"/>\n <path stroke-width="5" d="m212,345c-0.0693,14.7-0.139,29.4-0.208,44.1" stroke="#000"/>\n <path stroke-width="5" d="m227,346c-0.139,15.4-0.277,30.8-0.416,46.2" stroke="#000"/>\n <path stroke-width="5" d="m240,348c-0.0697,15.6-0.139,31.2-0.209,46.8" stroke="#000"/>\n <path stroke-width="5" d="m256,348v46.8" stroke="#000"/>\n <path stroke-width="5" d="m270,348c0.0693,15.6,0.139,31.2,0.208,46.8" stroke="#000"/>\n <path stroke-width="5" d="m283,346c0.139,15.3,0.277,30.7,0.416,46" stroke="#000"/>\n <path stroke-width="5" d="m299,344c0.0693,14.7,0.139,29.4,0.208,44.1" stroke="#000"/>\n <path stroke-width="5" d="m312,339c0.139,13.9,0.278,27.8,0.417,41.6" stroke="#000"/>\n</svg></div>',
	},
	{
	    message: "Let's start with guessing the answers to a couple questions someone else already answered with data. First question: Does getting too little sleep lower your grades?", 
	    lessonSection: "Grades and Sleep",
	    tutorImage: 6,
	    quiz: [ 
		{ 
		    question: "Does not getting enough sleep hurt school performance?",
		    answers: [
			{ answer: "Yes", isCorrect: true }, 
			{ answer: "No" }, 
		    ],
		    explanation: "Yes. Data from many studies shows not getting enough sleep hurts school performance. <p>Students who feel sleepy at school or didn't sleep well or for long enough often have lower performance at school. The data says about 30% of bad grades can be attributed just to not getting enough sleep. If you aren't getting enough sleep, your grades are likely to be worse." 
		}, 
	    ],
	    chart: '<div style="margin-top: 40px; text-align: center;"><style scoped> #zzz { font-size: 80px; text-shadow: 0 0 5px rgba(0,0,0,0.8),0 0 10px rgba(0,0,0,0.6),0 0 15px rgba(0,0,0,0.4),0 0 20px rgba(0,0,0,0.2); } </style><div id=zzz>Zzz</div></div>',
	},
	{
	    message: "How about this one: Are good baseball players paid more?", 
	    lessonSection: "Baseball Players and Salary",
	    tutorImage: 2,
	    quiz: [ 
		{ 
		    question: "For baseball players, are salaries related to performance?",
		    answers: [
			{ answer: "Yes" }, 
			{ answer: "Maybe" }, 
			{ answer: "Not really", isCorrect: true }, 
		    ],
		    explanation: "Not much, no. A lot of people have looked at this and found that baseball player salaries are only very weakly related to how well that player does on the field. This chart simplifies the data, just showing salaries and batting averages. As salary goes up, batting averages don't improve much if at all. In this data, and in other studies, it appears salary is related to about 10% of differences in performance between baseball players.<p>So, according to data, it doesn't seem paying more matters much. Does that surprise you? Did you expect better baseball players would be much better paid?" 
		}, 
	    ],
	    chart: ' <div style="margin: 14px;">\n <style scoped>\n .axis { font: 11px sans-serif; } \n .axis path, .axis line { \n  fill: none; \n  stroke: #000; \n  shape-rendering: crispEdges; \n } \n </style>\n <div style="font: 18px sans-serif;">Baseball batting average vs. salary</div>\n <svg id=svg-scatter-chart width=420 height=400></svg>\n <script type="text/javascript">\n\n //Width and height\n var w = 420;\n var h = 400;\n var paddingY = 20, paddingX = 35;\n \n\n var dataX = [ 3300, 2600, 2500, 2475, 2313, 2175, 600, 460, 240, 200, 177, 140, 117, 115, 2600, 1907, 1190, 990, 925, 365, 302, 300, 129, 111, 6100, 4125, 3213, 2319, 2000, 1600, 1394, 935, 850, 775, 760, 629, 275, 120, 2567, 2500, 2350, 2317, 2000, 715, 660, 650, 260, 250, 200, 180, 180, 5150, 4450, 2000, 1850, 1192, 875, 825, 525, 367, 325, 320, 150, 113, 113, 2425, 2367, 2050, 2000, 1617, 1167, 992, 400, 315, 315, 230, 135, 130, 3150, 2785, 2700, 2400, 1750, 1262, 940, 555, 500, 370, 350, 148, 146, 4350, 2833, 2833, 2750, 1550, 1300, 1000, 750, 430, 260, 120, 1500, 1458, 1210, 935, 800, 395, 350, 285, 139, 133, 4050, 3600, 3333, 2183, 1150, 840, 587, 400, 350, 135, 135, 135, 4075, 3300, 2387, 2100, 1750, 805, 725, 687, 200, 130, 125, 120, 117, 114, 4275, 3563, 2000, 1600, 1533, 940, 850, 650, 360, 150, 145, 140, 109, 109, 3415, 2100, 1300, 1200, 1025, 730, 687, 380, 365, 175, 150, 150, 140, 3050, 2900, 2850, 2700, 2400, 2300, 1650, 1600, 1075, 550, 350, 340, 155, 145, 950, 700, 550, 525, 525, 333, 325, 300, 200, 175, 158, 145, 4500, 3358, 2400, 2200, 2017, 1567, 1050, 375, 355, 300, 230, 150, 120, 109, 3453, 3200, 2530, 2167, 1150, 750, 500, 395, 300, 284, 230, 109, 5300, 3620, 2500, 2167, 2150, 1950, 1300, 360, 280, 255, 147, 125, 109, 3742, 3633, 2983, 2383, 2300, 1375, 1000, 1000, 900, 775, 600, 387, 117, 2700, 2317, 1650, 640, 190, 170, 135, 130, 130, 3650, 3575, 3500, 2500, 1900, 1350, 740, 650, 620, 565, 235, 225, 200, 145, 120, 109, 4200, 3417, 3100, 1650, 1150, 900, 740, 575, 425, 400, 287, 275, 183, 170, 153, 109, 3100, 2992, 2800, 2500, 1933, 1200, 1075, 950, 450, 360, 175, 155, 5000, 3250, 2825, 2600, 2050, 1583, 1150, 1100, 760, 525, 500, 205, 185, 115, 3750, 2188, 2167, 2167, 2050, 1445, 875, 560, 360, 162, 133, 109, 4300, 3850, 2387, 950, 675, 600, 287, 230, 215, 183, 170, 160, 142, 140, 109 ];\n dataX = dataX.map(function(x) { return x * 1000; });\n var dataY = [ 0.272, 0.269, 0.249, 0.26, 0.273, 0.291, 0.258, 0.228, 0.25, 0.203, 0.262, 0.222, 0.227, 0.261, 0.3, 0.225, 0.255, 0.29, 0.246, 0.208, 0.238, 0.267, 0.353, 0.213, 0.302, 0.26, 0.255, 0.259, 0.223, 0.225, 0.258, 0.275, 0.327, 0.272, 0.241, 0.293, 0.257, 0.225, 0.196, 0.252, 0.294, 0.297, 0.258, 0.205, 0.272, 0.243, 0.337, 0.228, 0.24, 0.298, 0.249, 0.292, 0.265, 0.265, 0.289, 0.295, 0.27, 0.246, 0.288, 0.273, 0.239, 0.244, 0.275, 0.34, 0.25, 0.272, 0.219, 0.24, 0.285, 0.307, 0.24, 0.264, 0.227, 0.305, 0.28, 0.251, 0.216, 0.243, 0.319, 0.297, 0.251, 0.253, 0.275, 0.32, 0.259, 0.275, 0.249, 0.188, 0.241, 0.242, 0.251, 0.302, 0.28, 0.256, 0.301, 0.281, 0.234, 0.26, 0.267, 0.318, 0.216, 0.286, 0.253, 0.295, 0.285, 0.262, 0.214, 0.218, 0.294, 0.254, 0.243, 0.153, 0.265, 0.235, 0.296, 0.264, 0.294, 0.287, 0.278, 0.222, 0.248, 0.268, 0.214, 0.195, 0.278, 0.267, 0.317, 0.272, 0.265, 0.262, 0.194, 0.217, 0.228, 0.286, 0.269, 0.246, 0.275, 0.243, 0.301, 0.312, 0.268, 0.262, 0.221, 0.175, 0.238, 0.264, 0.225, 0.123, 0.246, 0.24, 0.115, 0.12, 0.227, 0.323, 0.278, 0.263, 0.26, 0.216, 0.233, 0.204, 0.23, 0.243, 0.233, 0.278, 0.269, 0.3, 0.249, 0.229, 0.332, 0.231, 0.251, 0.262, 0.283, 0.258, 0.225, 0.263, 0.295, 0.26, 0.457, 0.262, 0.243, 0.224, 0.217, 0.288, 0.243, 0.258, 0.209, 0.284, 0.282, 0.249, 0.264, 0.261, 0.263, 0.248, 0.279, 0.179, 0.284, 0.247, 0.237, 0.26, 0.259, 0.257, 0.289, 0.291, 0.216, 0.325, 0.26, 0.289, 0.213, 0.286, 0.283, 0.244, 0.311, 0.206, 0.265, 0.238, 0.364, 0.316, 0.288, 0.268, 0.225, 0.267, 0.247, 0.285, 0.245, 0.23, 0.22, 0.242, 0.238, 0.308, 0.273, 0.252, 0.295, 0.282, 0.262, 0.25, 0.244, 0.234, 0.216, 0.25, 0.243, 0.256, 0.275, 0.246, 0.238, 0.296, 0.263, 0.258, 0.2, 0.211, 0.203, 0.293, 0.285, 0.304, 0.268, 0.259, 0.273, 0.241, 0.284, 0.246, 0.318, 0.274, 0.241, 0.165, 0.281, 0.251, 0.217, 0.225, 0.301, 0.259, 0.255, 0.301, 0.272, 0.25, 0.277, 0.28, 0.252, 0.188, 0.277, 0.261, 0.217, 0.251, 0.216, 0.271, 0.284, 0.319, 0.277, 0.311, 0.265, 0.279, 0.31, 0.286, 0.303, 0.281, 0.286, 0.283, 0.307, 0.268, 0.201, 0.276, 0.274, 0.295, 0.063, 0.238, 0.226, 0.261, 0.249, 0.249, 0.238, 0.235, 0.256, 0.248, 0.254, 0.194, 0.327, 0.244, 0.305, 0.307, 0.23, 0.247, 0.205, 0.216, 0.266, 0.322, 0.341, 0.278, 0.271, 0.252, 0.264, 0.269, 0.194, 0.213, 0.111, 0.264, 0.187, 0.264, 0.258 ];\n\n dataset = d3.zip(dataX, dataY);\n\n //Create scale functions\n var xScale = d3.scale.linear()\n .domain([0, 6500000])\n // .domain([0, d3.max(dataX) + 500000])\n .range([paddingX, w - paddingX * 2]);\n\n var yScale = d3.scale.linear()\n .domain([0, 0.5])\n  // .domain([0, d3.max(dataY) + 0.05])\n .range([h - paddingY, paddingY]);\n\n var rScale = d3.scale.linear()\n   .domain([0, d3.max(dataX)])\n   .range([2.5, 4]);\n var redScale = d3.scale.linear()\n   .domain([0, d3.max(dataY)])\n   .range([0, 250]);\n var greenScale = d3.scale.linear()\n   .domain([0, d3.max(dataX)])\n   .range([0, 200]);\n\n //Define X axis\n var xAxis = d3.svg.axis()\n  .scale(xScale)\n  .orient("bottom")\n  .ticks(7, "$s");\n\n //Define Y axis\n var yAxis = d3.svg.axis()\n  .scale(yScale)\n  .orient("left")\n  .ticks(6)\n     .tickFormat(function(x) { if (x == 0) { return ".000" } return "." + Math.floor(x * 1000); });\n     // .ticks(6, ".3f");\n\n //Create SVG element\n var svg = d3.select("#svg-scatter-chart");\n\n //Create circles\n svg.selectAll("circle")\n  .data(dataset)\n  .enter()\n  .append("circle")\n  .attr("cx", function(d) {\n  return xScale(d[0]);\n  })\n  .attr("cy", function(d) {\n  return yScale(d[1]);\n  })\n  .attr("r", function(d) {\n  return rScale(d[0]);\n  })\n  .attr("stroke", "rgba(100,100,100,0.5)")\n  .attr("fill", function(d) {\n  return "rgb(" + Math.floor(redScale(d[1])) + "," + Math.floor(greenScale(d[0])) + ",50)";\n  });\n\n //Create X axis\n svg.append("g")\n .attr("class", "axis")\n .attr("transform", "translate(0," + (h - paddingY) + ")")\n .call(xAxis);\n \n //Create Y axis\n svg.append("g")\n .attr("class", "axis")\n .attr("transform", "translate(" + paddingX + ",0)")\n .call(yAxis);\n\n </script>\n </div>',
	},
	{
	    message: "Okay, let's look at how you can use data to answer questions. Let's start with something that looks simple at first.  How many people have your birthday?", 
	    lessonSection: "Same Birthday?",
	    tutorImage: 4,
	    quiz: [ 
		{ 
		    question: "To answer this, we need some data. Our first attempt to answer this will just use how many days are in a year. So, how many days are in a year?",
		    answers: [
			{ answer: "365", isCorrect: true }, 
			{ answer: "100" }, 
			{ answer: "365.242", isCorrect: true } ],
		    explanation: "Ignoring leap years, there are 365 days in a year.  It's fine to use 365 or even a rough approximation like 360 or 350 for these calculations.  We're making an estimate. A little error is ok." 
		}, 
            ],
	    chart: '<div id=chart-calendar style="text-align: center; width: 100%; margin-top: 20px;"></div>\n<script>\nvar daySpacing = 15;\nvar monthXSpacing = 130;\nvar monthYSpacing = 115;\nvar topMargin = 30;\n\nvar monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];\nvar now = new Date();\nvar year = now.getFullYear();\n\nvar cal = document.getElementById("chart-calendar");\n\nvar i = new Date(year, 0, 1);\nvar yIndex = 0;\nvar html = \'<svg xmlns="http://www.w3.org/2000/svg" width="365px" height="450px">\';\nhtml += \'<g font-family="sans-serif" font-size="9px">\';\nwhile (i.getDate() != 31 || i.getMonth() != 11) {\n var dayOfWeek = i.getDay();\n var dayOfMonth = i.getDate();\n var month = i.getMonth();\n \n // Calculate position of day\n var x = dayOfWeek * daySpacing + (month % 3) * monthXSpacing;\n if (dayOfMonth == 1) {\n	yIndex = 0;\n } else if (dayOfWeek == 0) {\n	yIndex += 1;\n }\n var y = yIndex * daySpacing + Math.floor(month / 3) * monthYSpacing + topMargin;\n \n // Print the day\n html += \'<text x="\' + x + \'" y="\' + y + \'">\' + dayOfMonth + \'</text>\';\n \n // Move to the next day\n i.setDate(dayOfMonth + 1);\n}\nhtml += \'</g><g font-family="sans-serif" font-size="11px" text-anchor="middle">\';\nfor (var i = 0; i < 12; i++) {\n var m = monthNames[i];\n var x = (i % 3) * monthXSpacing + 48;\n var y = Math.floor(i / 3) * monthYSpacing + Math.floor(topMargin * 0.4);\n\n // Print the month\n html += \'<text x="\' + x + \'" y="\' + y + \'">\' + m + \'</text>\';\n}\nhtml += "</g></svg>";\ncal.innerHTML = html;\n</script>',
	},
	{
	    message: "To answer a question, sometimes it's easier if you rephrase the question into something that makes the answer easier to see. Out of a group of people, how many people have your birthday?", 
	    tutorImage: 7,
	    quiz: [ 
		{
		    question: "If there are 1000 people at your school, and there are 365 days in a year, how many other students would you expect to have the same birthday as you?",
		    answers: [
			{ answer: "3", isCorrect: true }, 
			{ answer: "0" }, 
			{ answer: "10" }, 
			{ answer: "I have no idea" } ],
		    explanation: "Well, 1000 / 365 is about 3, so you might expect about 3 other students at the school to have your birthday, but there's going to be a lot of variation.  Keep going so we can dive into this a little deeper."
		},
            ],
	},
	{
	    message: "We said the probability of someone having the same birthday might be <sup>1</sup>&frasl;<sub>365</sub>, so about 3 in 1000. Let's talk a little about probability. Statistics at its core depends on probability.  Probability is the math of chance and randomness.  For example, when you flip a fair coin, you would expect heads to come up half the time.  What about six-sided dice?", 
	    tutorImage: 1,
	    lessonSection: "Probability",
	    quiz: [ 
		{ 
		    question: "If you roll a six-sided die, what is the likelihood you will get a 6?",
		    answers: [
			{ answer: "6" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>2</sub>" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>6</sub>", isCorrect: true } ],
		    explanation: "When you roll the die, there is an equal chance of each side coming up. There are six possible outcomes: 1, 2, 3, 4, 5, and 6. If there are six possibilities and you only want one of them, the likelihood of getting it is 1 in 6, so <sup>1</sup>&frasl;<sub>6</sub>." 
		}, {
		    question: "If you roll a six-sided die, what is the likelihood you will get either a 5 or 6?",
		    answers: [
			{ answer: "<sup>1</sup>&frasl;<sub>2</sub>" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>3</sub>", isCorrect: true }, 
			{ answer: "<sup>1</sup>&frasl;<sub>6</sub>" } ],
		    explanation: "There are two outcomes you want out of six possible outcomes. That's <sup>2</sup>&frasl;<sub>6</sub>, which is <sup>1</sup>&frasl;<sub>3</sub>. So, if you roll a six-sided die a bunch of times, you'd expect to see a 5 or a 6 about a third of the time."
		},
            ],
	    chart: '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="400" height="500" viewBox="0 0 1024 1024"><style>.style0{fill:	#404040;fill-rule:	evenodd;stroke:	#404040;stroke-width:	2;stroke-linecap:	round;stroke-linejoin:	round;}.style1{overflow:	visible;}.style2{fill:	#ffffff;stroke:	#000000;stroke-width:	7;}.style3{fill:	#404040;stroke:	#000000;stroke-width:	5;}</style><defs/><g transform="matrix(1.5,0,0,1.5,109.02942,-468.01519)"><path d="M 245 341.5 C 252.5 329 270 314 282.5 314 L 557.5 469 C 562.5 474 575 506.5 565 519 L 292.5 679 C 285 681.5 252.5 679 242.5 654 L 245 341.5 z" class="style0"/><g transform="matrix(0.1910977,-0.3317217,0.1910977,0.3317217,152.64427,500.07482)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="278.5" cy="278.5" r="57.1" class="style3"/></g><g transform="matrix(-0.3828283,3.653872e-4,0.1917306,-0.3313563,472.998,680.25529)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="117" cy="440" r="57.1" class="style3"/><circle cx="440" cy="440" r="57.1" class="style3"/><circle cx="440" cy="117" r="57.1" class="style3"/><circle cx="278.5" cy="278.5" r="57.1" class="style3"/><circle cx="117" cy="117" r="57.1" class="style3"/></g><g transform="matrix(0.1917306,0.3313563,-0.3828283,-3.653872e-4,468.80258,313.31549)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="117" cy="440" r="57.1" class="style3"/><circle cx="440" cy="440" r="57.1" class="style3"/><circle cx="440" cy="117" r="57.1" class="style3"/><circle cx="117" cy="117" r="57.1" class="style3"/></g></g><g transform="matrix(1.5,0,0,1.5,-774.05268,372.6114)"><g transform="matrix(0,1,-1,0,1481.1182,-519.93236)"><path d="M 628.9 528.6 C 636.4 516.1 653.9 501.1 666.4 501.1 L 945.1 661.9 C 949.2 668.6 957.5 683 950.4 703.5 L 676.4 866.1 C 668.9 868.6 636.4 866.1 626.4 841.1 L 628.9 528.6 z" class="style0"/><g transform="matrix(0.1910977,-0.3317217,0.1910977,0.3317217,536.57663,687.19304)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="278.5" cy="278.5" r="57.1" class="style3"/></g><g transform="matrix(-0.3828283,3.653872e-4,0.1917306,-0.3313563,856.93036,867.37351)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="117" cy="440" r="57.1" class="style3"/><circle cx="440" cy="117" r="57.1" class="style3"/></g><g transform="matrix(0.1917306,0.3313563,-0.3828283,-3.653872e-4,852.73494,500.43371)" class="style1"><path d="M 71.5 553.5 C 34.1 553.5 3.5 522.9 3.5 485.5 L 3.5 71.5 C 3.5 34.1 34.1 3.5 71.5 3.5 L 485.5 3.5 C 522.9 3.5 553.5 34.1 553.5 71.5 L 553.5 485.5 C 553.5 522.9 522.9 553.5 485.5 553.5 L 71.5 553.5 z" class="style2"/><circle cx="117" cy="440" r="57.1" class="style3"/><circle cx="440" cy="117" r="57.1" class="style3"/><circle cx="278.5" cy="278.5" r="57.1" class="style3"/></g></g></g></svg>',
	},
	{
	    message: "Combining probabilities is a little trickier. What happens when you flip two coins?", 
	    tutorImage: 4,
	    quiz: [ 
		{ 
		    question: "If you flip a coin twice, what is the likelihood that it comes up heads both times?",
		    answers: [
			{ answer: "1" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>2</sub>" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>4</sub>", isCorrect: true } ],
		    explanation: "There are two possibilities for each coin, heads or tails, and each comes up half the time. Each coin flip is <i>independent</i> (the previous flip doesn't change the next one). If two events are independent, you can multiply their likelihood to get the likelihood of both events happening. So, the likelihood of both coming up heads is <sup>1</sup>&frasl;<sub>2</sub> * <sup>1</sup>&frasl;<sub>2</sub> = <sup>1</sup>&frasl;<sub>4</sub>. <p>Another way of seeing this is to list each possibility &ndash; two heads, a head and then a tails, a tails and then a heads, or two tails &ndash; and see that only one of the four is two heads." 
		}, 
            ],
	},
	{
	    message: "What happens when you roll two dice?", 
	    quiz: [ 
		{
		    question: "If you roll two six-sided dice, what is the likelihood that both dice come up sixes?",
		    answers: [
			{ answer: "<sup>1</sup>&frasl;<sub>4</sub>" }, 
			{ answer: "<sup>1</sup>&frasl;<sub>36</sub>", isCorrect: true }, 
			{ answer: "<sup>1</sup>&frasl;<sub>6</sub>" } ],
		    explanation: "Each die has six faces labeled 1 to 6.  So, each die has a <sup>1</sup>&frasl;<sub>6</sub> chance of being a six. <sup>1</sup>&frasl;<sub>6</sub> * <sup>1</sup>&frasl;<sub>6</sub> = <sup>1</sup>&frasl;<sub>36</sub>"
		},
            ],
	},
	{
	    message: "Let's go back to birthdays. If there are 365 days in a year and birthdays are <i>uniformly distributed</i> across the year, you would expect someone else to have the same birthday about <sup>1</sup>&frasl;<sub>365</sub> of the time. But is it really true that babies have the same chance of being born on any day of the year?  Here is a chart showing frequency of births by day of the week. What does it say?",
	    lessonSection: "Probability and Birthdays",
	    tutorImage: 6,
	    quiz: [ 
		{ 
		    question: "Do people have the same chance of being born on any day?",
		    answers: [ 
			{ answer: "Yes"}, 
			{ answer: "No", isCorrect: true },
		    ],
		    explanation: "It doesn't look like it, does it? At least in the US, it seems much less likely to be born on a weekend." 
		},
		{ 
		    question: "Weekends have fewer births?  Weird.  Why would weekends matter?",
		    answers: [ 
			{ answer: "Doctors don't like to work weekends", isCorrect: true}, 
			{ answer: "Babies love weekdays" },
			{ answer: "Moms prefer to go into labor on weekdays" },
		    ],
		    explanation: "C-sections are about a third of US births.  Doctors often try not to schedule those on weekends.  It is surprising to see that in the data, isn't it?" 
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped>\n .bar { fill: steelblue; } \n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin-bottom: 4px;">Births in the US by day of the week</div>\n<svg id=svg-week-chart width=350 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 31},\n width = 350 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\nvar svg = d3.select("#svg-week-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\nvar data = [\n { x: "Sun", y: 393299},\n { x: "Mon", y: 610141},\n { x: "Tue", y: 676052},\n { x: "Wed", y: 667683},\n { x: "Thu", y: 650751},\n { x: "Fri", y: 644579},\n { x: "Sat", y: 447445},\n];\nvar freqSum = d3.sum(data, \n function(d) {return d.y;});\ndata.forEach(function(d) {\n d.y /= freqSum;\n});\nvar barWidth = width / data.length;\nvar xScale = d3.scale.ordinal()\n .rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear()\n .range([height, 0]);\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\nxScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nyScale.domain([0, \n d3.max(data, \n  function(d) {\n  return d.y;})\n ]);\n\nsvg.selectAll(".bar")\n .data(data)\n .enter().append("rect")\n .attr("class", "bar")\n .attr("x", function(d) { \n return xScale(d.x); })\n .attr("width", xScale.rangeBand())\n .attr("y", function(d) { \n return yScale(d.y); })\n .attr("height", function(d) { \n return height - yScale(d.y); });\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n</script></div>',
	},
	{
	    message: "So, it doesn't look like it is entirely correct to say that births have the same chance of happening on any day or in any month.  That's what <i>uniformly distributed</i> means.  We assumed each day has a <sup>1</sup>&frasl;<sub>365</sub> chance of being a baby's birthday.  As we can see in these charts, it turns out that's not quite true!", 
	    tutorImage: 7,
	    quiz: [ 
		{ 
		    question: "Take a look at the bottom chart. Why are more babies born in the summer months?",
		    answers: [ 
			{ answer: "Evolutionary pressure" }, 
			{ answer: "Purposeful timing" }, 
			{ answer: "Cold weather" },
			{ answer: "Why not?" }, 
		    ],
		    explanation: "It's not really well understood, but some theories are that people are indoors more nine months earlier (in early winter) and that mothers purposely time for summer births.  What do you think?" 
		}, {
		    question: "Why are so few babies born in February?",
		    answers: [ 
			{ answer: "Bad weather" }, 
			{ answer: "It's cold"}, 
			{ answer: "It's short", isCorrect: true } ],
		    explanation: "February only has 28 days in most years, so it's about 10% shorter than other months, explaining much of the variation." 
		},
	    ],
	    chart: '<div style="margin: 8px;"><style scoped>\n .bar { fill: steelblue; } \n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin-bottom: 4px;">Births in the US by day of the week</div>\n<svg id=svg-week-chart width=350 height=200></svg>\n<p>\n<div style="font: 18px sans-serif; margin-bottom: 4px;">Births in the US by month</div>\n<svg id=svg-month-chart width=350 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 31},\n width = 350 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\nvar svg = d3.select("#svg-week-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\nvar data = [\n { x: "Sun", y: 393299},\n { x: "Mon", y: 610141},\n { x: "Tue", y: 676052},\n { x: "Wed", y: 667683},\n { x: "Thu", y: 650751},\n { x: "Fri", y: 644579},\n { x: "Sat", y: 447445},\n];\nvar freqSum = d3.sum(data, \n function(d) {return d.y;});\ndata.forEach(function(d) {\n d.y /= freqSum;\n});\nvar barWidth = width / data.length;\nvar xScale = d3.scale.ordinal()\n .rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear()\n .range([height, 0]);\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\nxScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nyScale.domain([0, \n d3.max(data, \n  function(d) {\n  return d.y;})\n ]);\n\nsvg.selectAll(".bar")\n .data(data)\n .enter().append("rect")\n .attr("class", "bar")\n .attr("x", function(d) { \n return xScale(d.x); })\n .attr("width", xScale.rangeBand())\n .attr("y", function(d) { \n return yScale(d.y); })\n .attr("height", function(d) { \n return height - yScale(d.y); });\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar svg = d3.select("#svg-month-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\nvar data = [\n { x: "Jan", y: 329803},\n { x: "Feb", y: 307248},\n { x: "Mar", y: 336920},\n { x: "Apr", y: 330106},\n { x: "May", y: 346754},\n { x: "Jun", y: 337425},\n { x: "Jul", y: 364226},\n { x: "Aug", y: 360103},\n { x: "Sep", y: 359644},\n { x: "Oct", y: 354048},\n { x: "Nov", y: 320094},\n { x: "Dec", y: 343579},\n];\nvar freqSum = d3.sum(data, \n function(d) {return d.y;});\ndata.forEach(function(d) {\n d.y /= freqSum;\n});\nvar barWidth = width / data.length;\nvar xScale = d3.scale.ordinal()\n .rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear()\n .range([height, 0]);\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\nxScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nyScale.domain([0, \n .05 + d3.max(data, \n  function(d) {\n  return d.y;})\n ]);\n\nsvg.selectAll(".bar")\n .data(data)\n .enter().append("rect")\n .attr("class", "bar")\n .attr("x", function(d) { \n return xScale(d.x); })\n .attr("width", xScale.rangeBand())\n .attr("y", function(d) { \n return yScale(d.y); })\n .attr("height", function(d) { \n return height - yScale(d.y); });\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n</script></div>',
	},
	{
	    message: "Even so, the differences are pretty small from a uniform distribution.  The chances are almost the same, 1 in 365, of someone else having the same birthday regardless of on what day you were born.", 
	    tutorImage: 3,
	    quiz: [ 
		{
		    question: "Does a slightly non-uniform distribution matter?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No", isCorrect: true },
			{ answer: "Not really", isCorrect: true } ],
		    explanation: "The odds of being born on the same day are nearly the same no matter what month you were born in, and day of the week changes year-to-year, so nothing is changed much by these or similar factors. <sup>1</sup>&frasl;<sub>365</sub> or even <sup>1</sup>&frasl;<sub>360</sub> is a good enough approximation of the odds of being born on the same day.  <p>We need to keep the purpose in mind when we are trying to answer questions.  In this case, the purpose is to get a rough guess of how many people might have the same birthday. Trying to be overly accurate not only will make little difference, but also is very hard since birth rates vary by location and with factors like weather.  <p>Now that we've looked at some factors that might cause inaccuracies, let's keep it simple and assume a uniform distribution. So, if you go to a school with a thousand other students, it's a good rough guess that three of them have the same birthday as you."
		},
            ],
	},
	{
	    message: "Let's ask another question.  Let's say you've got a friend delivering pizzas and she sometimes has an extra pizza.  What is the chance that you'd like what's on it?  When you get a question like this, the first thing to ask is how you might answer it.  How would you answer this?  Think about that for a second before doing the quiz.", 
	    lessonSection: "Free Pizza",
	    tutorImage: 1,
	    quiz: [ 
		{ 
		    question: "How likely are you to enjoy the pizza?",
		    answers: [ 
			{ answer: "It's free pizza, what's not to like?" }, 
			{ answer: "20%" }, 
			{ answer: "I don't know" } ],
		    explanation: "The answer depends on what pizza toppings you like and what pizza toppings other people like.  It's hard to know without knowing more, but you might be able to take a good guess!  Let's try!" 
		}
            ],
	    chart: '<div style="text-align:center; margin-top:40px;"><svg xmlns="http://www.w3.org/2000/svg" height="225" width="300" viewBox="0 0 600 450"> <path opacity="0.5" d="M120,313c157-16,313-33,470-49-11-56-57-95-92-137-53-51-116-93.7-186-117-38.6-8.7-81.4,41.6-50.6,73.8,30,20.1,67.7,24.5,99.6,41.5,40.8,18.2,82.7,47.1,98.4,90.2-10.3,26.8-43.7,18.9-66.2,27.4-72.3,16.2-145,32.4-217,48.6-19.5-13.8-49.9-1.76-55.7,21.2z" fill-rule="evenodd" fill="#c97"/> <path fill-rule="evenodd" fill="#eeb" d="m251,82.4c76.1,15.8,156,45.8,203,111,11.8,31.5-3.44,77.1-28.1,95.7-12.1-26.9-26.3-58.5-62.4-35.4-32,6.78-65.8,0.92-94.3,21.5-30.5,3.7-16.7,78.7-41.6,50.9,3.42-44.5-47.6-47.5-78.1-34.7-20.4,18.6-51,21.3-65.4,41.6,10.9,28.1-60.4,11.4-30,49,17.2,17.1,16,76.3-15.2,42.9-19.1-33.7-11.1-75.1-19.8-111,8.91-40.6,43.6-68.5,78.4-87.5,20.8-25.8,45.3-47.3,70.7-69.1,17.1-34.3,52.3-54.5,83.2-75.1z"/> <path fill-rule="evenodd" fill="#000" d="M300,4.45c-44-11.4-58,40.2-59,72.4-24.4,30.1-68.1,39.8-83.3,79.4-37.1,28.1-59.3,70.9-103,90.4-22.2,23.8-54.4,53.4-42.2,90,20.6,31-2.29,75.6,27.4,104,37.9,27.8,52.6-35.9,21.8-54.6-17.8-33.4,27.9-24.8,35.1-52.1,31.7-18.9,73.6-12.3,110-19.4,19.2-7.87-5.66,34.3,22.9,39.1,36.4,11.9,9.25-57.5,52.1-48.8,43.7-1.12,87.5-8.72,131-12.4,23.5,19.6,50.6-14.8,78.8-8.4,32.1-3.42,64.2-6.83,96.3-10.2,3.6-32.2-44-8.82-64.5-10.1-25.1,2.91-50.2,5.83-75.3,8.74,0.594-35.2,38.6-78.9,75.2-64.2,17.3,8.81,74.4,63.4,59.2,17-24-36-49-69-77-101-54-58.7-123-116-206-121zm-12,14.4c109,12.3,190,95.4,259,174,14.6,13.5,32.8,39.2,0.341,23.4-28.4-33.2-71.3-32.6-89.4,10.1-22.6,12.2-8.91,67.1-35.6,59.2,15.5-34.5-24.7-68.3-53.4-40.4-37.4,3.73-76.8,1.83-107,28.5-26.8,7.04-12,57.2-31,53.8,6.32-33.8-21.4-71.3-54.4-42.2-22,23.3,57.5,7.24,11.9,17.4-19.9,2.31-39.8,4.61-59.7,6.92,19.3-37.1-17.3,12.8-36.5,0.723-27.7-0.0421-12.5,33.8-39.8,36.9-35.7,19.8,37.9,73.4-5.36,78.5-26.2-31-12.2-75-21.1-111,10.8-35.5,43.1-61.8,73.9-80.4,37.5-14.1,40.1-72.6,88.8-64,39.4,11.1,80,17.8,120,2.55,49.6-3.42,16.1-43.4-15-41.9-22.4-0.966-50.3-23.6-56.8,4.98-11.5,22.9-64.4,41.1-43.2-0.349,21.7-25,66.2-35,67.2-74,1.5-16.4,3.12-45.2,26.4-43.1zm112,233c24.5,30-29.8,32.4-50.7,32.3-29.2,3.4-58.4,6.8-87.7,10.2,35.3-10.5,66.4-34.3,105-33,11.5-1.28,23.4-2.96,33.3-9.43z"/> <path fill-rule="evenodd" fill="#000" d="m436,209c-36.5-6.61-68.8,37-104,14-16.9,1.85-42.7,7.57-38.5-15.4-44.7-19,28.5,0.561,40.9-16.7,34.1-26.4,68.3-11.5,93.1,17.4l8.52,0.7z"/> <path fill-rule="evenodd" fill="#000" d="m129,226c46,16.4-57.3,43.2,0.485,41.6,47.4,11.8,83.6-20.6,123-39.8-4.37-8.22-71.6,8.71-38.2-25.9-9.47-17.4-42,30.9-66.6,24.8-6.09,0.685-12.3,0.474-18.3-0.747z"/> <path fill-rule="evenodd" fill="#d22" d="m148,255c21.7,30,75.4-32.4,23.1-20.5-9.81,3.79-18.4,11.1-23.1,20.5z"/> <path fill-rule="evenodd" fill="#d22" d="m224,167c26.7,7.52,82.9,4.09,89.8-15.1-24.6-27.6-69.7-8.45-89.8,15.1z"/> <path fill-rule="evenodd" fill="#d22" d="m324,212c20.5,13.2,86.6,5.55,57.6-25.9-21.5-8.4-46.6,7.85-57.6,25.9z"/> </svg></div>',
	},
	{
	    message: "See the chart?  It's data from one company on the percentage of pizzas delivered in the US that have a topping.  According to this, 36% of pizzas they delivered have pepperoni and maybe other toppings too.  3% of pizzas have olives as at least one of the toppings.", 
	    tutorImage: 2,
	    quiz: [ 
		{ 
		    question: "Can we use this to make our guess?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" }, 
			{ answer: "Maybe" } ],
		    explanation: "Sure, but it's not going to be perfect.  Pizza preferences vary a lot by restaurant, menu, and location (especially by part of the world).  In addition, some combinations of toppings (like pepperoni and sausage) are more popular than others (like tuna and pepperoni); in statistical terms, the likelihood of a topping is not <i>independent</i> of other toppings.  More on that soon."
		},
            ],
	    chart: '<style scoped>\n .bar { fill: steelblue; } \n .bar:hover { fill: brown; }\n .bar-label { fill: white; text-anchor: end; font: 9px sans-serif;}\n .axis { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Pizza topping preferences in US</div>\n<svg id=svg-chart width=380 height=450></svg>\n<script>\nvar margin = {top: 5, right: 10, \n bottom: 20, left: 75},\n width = 380 - margin.left - margin.right,\n height = 450 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [\n { x: "Pepperoni", y: 36},\n { x: "Sausage", y: 14},\n { x: "Mushrooms", y: 11},\n { x: "Cheese Only", y: 8},\n { x: "Chicken", y: 7},\n { x: "Beef", y: 4},\n { x: "Onions", y: 3},\n { x: "Olives", y: 3},\n { x: "Peppers", y: 2},\n { x: "Tomatoes", y: 2},\n { x: "Anchovies", y: 2},\n { x: "Other", y: 10},\n];\n\ndata.forEach(function(d) {\n d.y /= 100;\n});\n\nvar barWidth = height / data.length;\n\nvar xScale = d3.scale.linear().range([0, width]);\nvar yScale = d3.scale.ordinal().rangeRoundBands([0, height], 0.1);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom")\n .ticks(10, "%");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left");\n\nyScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nxScale.domain([0, 0.01 + d3.max(data, function(d) { return d.y;})\n ]);\n\n\nvar bars = svg.selectAll(".bar")\n .data(data)\n .enter().append("g")\n .attr("class", "bar")\n .attr("transform", \n function(d) { return "translate(0, " + yScale(d.x) + ")"; })\nbars.append("rect")\n .attr("height", yScale.rangeBand())\n .attr("width", function(d) { \n return xScale(d.y); })\nbars.append("text")\n .attr("x", function(d) { return xScale(d.y) - 3; })\n .attr("y", barWidth / 2)\n .attr("dy", ".15em")\n .attr("class", "bar-label")\n .text(function(d) { return Math.round(d.y * 100); });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis);\n\n</script>',
	},
	{
	    message: "Let's try answering a few questions about this data and probabilities (and pizzas). Try the quiz!",
	    lessonSection: "Free Pizza and Probabilities",
	    tutorImage: 5,
	    quiz: [ 
		{ 
		    question: "Let's say you hate mushrooms. How many pizzas have mushrooms on them?",
		    answers: [ 
			{ answer: "8%" }, 
			{ answer: "11%", isCorrect: true }, 
			{ answer: "32%" }, 
			{ answer: "92%" } ],
		    explanation: "According to the data, 11% of pizzas have mushrooms as at least one of the toppings. So, about 1 in 9 (100 / 11 = 9.1) pizzas have mushrooms on them." 
                },        
		{ 
		    question: "How many pizzas have no toppings?",
		    answers: [ 
			{ answer: "8%", isCorrect: true  }, 
			{ answer: "11%" }, 
			{ answer: "18%" }, 
			{ answer: "92%" } ],
		    explanation: "\"Cheese only\" is supposed to be no toppings. So, only 8% of pizzas have no toppings." 
                },        
	    ],
	},
	{
	    message: "Let's say you really don't like plain cheese pizza.  You don't care what's on your pizza, but it better have a topping on it. How likely are you to get that if you get a pizza at random?", 
	    tutorImage: 6,
	    quiz: [ 
		{ 
		    question: "How often do pizzas have at least one topping?",
		    answers: [ 
			{ answer: "8%" }, 
			{ answer: "50%" }, 
			{ answer: "82%" }, 
			{ answer: "92%", isCorrect: true }, 
			{ answer: "100%" } ],
		    explanation: "92% of pizzas have at least one topping.  The quickest way to see this is to see that 8% of pizzas are cheese only.  All the rest of the pizzas must not be cheese only.  That means 100% of pizzas - 8% of pizzas, or 92% of pizzas, are not only plain cheese." 
		}        
	    ],
	},
	{
	    message: "What about combinations of toppings? For example, how many pizzas have pepperoni and sausage? Can we answer that question with this data?", 
	    tutorImage: 4,
	    quiz: [ 
		{ 
		    question: "How many pizzas have pepperoni and sausage?",
		    answers: [ 
			{ answer: "5%" }, 
			{ answer: "14%" }, 
			{ answer: "36%" },
			{ answer: "Between 5% and 14%", isCorrect: true},
			{ answer: "We can't tell", isCorrect: true }, 
		    ],
		    explanation: "36% of pizzas have pepperoni and 14% have sausage. So, if people choose toppings <i>independently</i> of each other (they didn't care what else is on the pizza when they add another topping), then you could multiply the probabilities, so 5% (36% &times; 14% = 5%) of pizzas would have both pepperoni and sausage. But pepperoni and sausage is a common combination, and it's likely that they are not independently picked, so it probably is more common than 5%.<p>So, the best we can guess is between 5% (completely independent) and 14% (all pizzas with sausage also have pepperoni)." 
		},
	    ],
	},
	{
	    message: "<i>Independence</i> assumptions can really mess up probability calculations, especially if you don't realize you are making that assumption.  Let's try an extreme example.  How many pizzas have all the toppings? Can we answer that question with this data?", 
	    tutorImage: 6,
	    quiz: [ 
		{ 
		    question: "How many pizzas have all toppings?",
		    answers: [ 
			{ answer: "0%" }, 
			{ answer: "2%" }, 
			{ answer: "Between 0% and 2%", isCorrect: true},
			{ answer: "We can't tell", isCorrect: true }, 
		    ],
		    explanation: "This is a great example of when an assumption that probabilities are independent are violated. If you try to multiply the probabilities, you'll get something very near 0%. But it's very likely a lot of the pizzas that have peppers (2% of pizzas) also have other toppings, often many other toppings. <p>We really can't tell from this data but, if we were going to guess how many pizzas are combination pizzas, we'd guess very few, somewhere between 0% and 2%." 
		},
	    ],
	},
	{
	    message: "Getting back to the big question, how likely are you to enjoy a random free pizza from your friend?", 
	    tutorImage: 3,
	    quiz: [ 
		{ 
		    question: "How likely are you to enjoy a random free pizza from your friend?",
		    answers: [ 
			{ answer: "10%" }, 
			{ answer: "20%" }, 
			{ answer: "0%" }, 
			{ answer: "50%" }, 
			{ answer: "100%" } ],
		    explanation: "It depends what toppings you like, but let's say you only like pizzas that have sausage (and maybe something else) on them.  Then, at least according to this data, you're pretty unlikely to be happy, since the data for this company says sausage is not that common (only 14% of pizzas have it).  But if you like everything but anchovies, you're very likely to be happy (98% of pizzas don't have anchovies).  <p>What did you get for what you like?"
		}        ],
	},
	{
	    message: "Let's try another question. What percentage of people are taller than you?",
	    lessonSection: "Asking a Question",
	    tutorImage: 1,
	    quiz: [ 
		{ 
		    question: "How many people would you guess are taller than you?",
		    answers: [ 
			{ answer: "10%" }, 
			{ answer: "25%" }, 
			{ answer: "50%" }, 
			{ answer: "75%" }, 
			{ answer: "90%" } ],
		    explanation: "A good spot to start with any question is to take a guess at the answer. That way, you'll start thinking about how to solve the question. And, you get a feel for whether you should be surprised by any answer you get later." 
		},
            ],
	    chart: '<div style="margin-top:40px; margin-left: 30px;"><svg width=350 height=400 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 700">\n<defs></defs>\n<path d="m180,223c0.0119,0.325-2.08,0.756-6.13,1.07-4.05,0.311-10.1,0.5-17.8-0.0491-7.76-0.549-17.3-1.84-28-4.83-5.35-1.5-11-3.43-16.8-5.94s-11.8-5.61-17.7-9.47c-5.47-3.56-10.9-7.73-16-12.5-5.18-4.8-10.1-10.2-14.8-16.3-4.62-6.03-8.91-12.7-12.7-19.8-3.8-7.17-7.12-14.9-9.82-23-4.33-12.9-7.85-26.8-8.97-41.7-0.818-10.7-0.253-22,2.93-33.1,2.56-8.85,6.95-17.4,13.3-24.7,5.89-6.74,13.2-12.2,21.3-16.1,8.4-4.11,17.5-6.73,26.7-8.18,3.27-0.516,6.57-0.896,9.88-1.15,6.76-0.518,13.5-0.505,20.1-0.0929,22.1,1.37,43.1,6.91,62.2,14.9,10,4.15,19.6,9,28.4,14.6,8.86,5.56,17,11.8,24.3,18.7,7.02,6.66,13.2,14,18,22,4.71,7.8,8.04,16.2,9.55,24.8,1.61,9.2,1.01,18.4-1.24,26.7-1.44,5.27-3.49,10.2-5.88,14.7-2.4,4.5-5.15,8.61-8.06,12.4-4.46,5.74-9.24,10.7-14,15-4.78,4.32-9.54,8.04-14.1,11.3-6.56,4.7-12.7,8.47-18.1,11.6-5.43,3.09-10.2,5.49-14.1,7.34s-6.95,3.14-9.04,3.93c-2.09,0.791-3.23,1.08-3.34,0.865-0.106-0.216,0.823-0.93,2.7-2.13s4.7-2.89,8.36-5.11c3.65-2.22,8.14-4.96,13.3-8.35,5.13-3.39,10.9-7.42,17.1-12.3,4.27-3.39,8.72-7.18,13.1-11.5,4.41-4.31,8.78-9.14,12.8-14.7,2.58-3.58,5-7.45,7.07-11.6s3.79-8.58,4.92-13.3c1.79-7.33,2.11-15.4,0.548-23.3-1.45-7.44-4.57-14.8-8.9-21.8-4.45-7.13-10.2-13.8-16.8-19.9-6.87-6.37-14.6-12.1-23-17.3-8.44-5.15-17.6-9.68-27.2-13.6-18.3-7.44-38.3-12.6-59.1-13.9-6.22-0.368-12.5-0.379-18.7,0.0955-3.06,0.233-6.09,0.581-9.08,1.06-8.44,1.34-16.6,3.65-23.9,7.24-7.02,3.43-13.4,8.04-18.3,13.7-5.32,6.02-9.11,13.3-11.4,20.9-2.9,9.6-3.46,19.8-2.86,29.7,0.852,13.8,4.05,27.1,8,39.6,2.44,7.68,5.45,15,8.91,21.8,3.45,6.84,7.35,13.2,11.6,19,4.22,5.79,8.76,11,13.5,15.7,4.75,4.65,9.7,8.72,14.8,12.2,5.49,3.83,11,6.98,16.5,9.59,5.44,2.61,10.8,4.68,15.8,6.36,10.2,3.35,19.3,5.13,26.8,6.23,7.52,1.1,13.4,1.51,17.4,1.82,4.01,0.308,6.12,0.516,6.13,0.841z" fill-rule="evenodd" fill="#000"/>\n<path d="m177,208c0.444-0.115,1.62,2.6,3.37,7.82,1.75,5.21,4.07,12.9,6.7,22.8,2.63,9.89,5.58,22,8.5,35.9s5.8,29.8,8.25,47.1c2.46,17.4,4.49,36.5,5.5,56.6,1,20.2,0.97,41.5-0.748,63.4-0.0606,0.773-0.123,1.55-0.188,2.32-1.79,21.5-5.2,42.3-10.2,61.5-5,19.3-11.6,37-19.3,52.7-7.83,16-16.9,29.6-25.8,40.9-8.98,11.3-17.9,20.2-25.6,27-7.76,6.82-14.4,11.6-19,14.5-4.65,2.99-7.35,4.26-7.61,3.88-0.262-0.377,1.92-2.38,6.01-6s10.1-8.89,17.2-16.1c7.08-7.2,15.3-16.3,23.5-27.7,8.23-11.3,16.5-24.8,23.7-40.4,7.07-15.3,13.1-32.6,17.7-51.3,4.62-18.7,7.81-39,9.57-60,0.0632-0.755,0.125-1.51,0.184-2.27,1.69-21.5,1.84-42.4,1.08-62.2-0.758-19.9-2.42-38.6-4.42-56-1.99-17.2-4.33-33-6.64-46.9-2.3-13.9-4.57-26.1-6.47-36.1s-3.44-17.9-4.36-23.3c-0.926-5.41-1.24-8.35-0.796-8.46z" fill-rule="evenodd" fill="#000"/>\n<path d="m4.09,209c0.25-0.146,1,0.606,2.28,2.12,1.27,1.52,3.07,3.79,5.5,6.64s5.49,6.26,9.29,10.1c3.79,3.79,8.32,7.96,13.5,12.4,0.000002,0.00001,0.000005,0.00001,0.000007,0.00001,5.54,4.64,11.9,9.52,19,14.4,7.13,4.93,15.1,9.92,23.7,14.9,15.2,8.67,32.6,17.1,51.7,24.6,16,6.3,33.2,12,51.3,16.5,1.62,0.403,3.24,0.795,4.86,1.17,19.2,4.51,38.1,7.37,56,8.32,9.26,0.488,18.3,0.493,26.8-0.0382,8.6-0.531,16.8-1.6,24.5-3.18,8.54-1.75,16.5-4.13,23.6-7.01,7.12-2.87,13.4-6.24,18.8-9.85,0-0.00001,0.00001-0.00001,0.00001-0.00001,7.01-4.65,12.6-9.66,16.9-14.3,5.03-5.38,8.38-10.2,10.7-13.4,2.28-3.28,3.52-5.06,3.89-4.88,0.188,0.0899,0.146,0.662-0.139,1.69-0.285,1.02-0.816,2.5-1.64,4.37-0.829,1.87-1.96,4.14-3.47,6.72s-3.41,5.47-5.79,8.53c-4.07,5.24-9.57,11-16.8,16.4h-0.00001c-5.57,4.18-12.1,8.11-19.5,11.5-7.43,3.4-15.8,6.25-24.7,8.36-8.07,1.91-16.7,3.27-25.6,4.03-8.98,0.768-18.3,0.945-27.9,0.568-18.6-0.719-38.1-3.5-57.9-8.12-1.66-0.389-3.33-0.79-4.99-1.2-18.6-4.62-36.2-10.5-52.5-17.2-20-7-37.6-16-52.9-26-8.7-5-16.6-11-23.7-16s-13.4-11-18.8-16c-0.000002,0-0.000005-0.00001-0.000007-0.00001-5.1-4.82-9.45-9.46-13-13.7s-6.32-8.09-8.4-11.3c-2.07-3.24-3.46-5.87-4.29-7.7-0.825-1.83-1.09-2.88-0.841-3.02z" fill-rule="evenodd" fill="#000"/>\n<path d="m207,466c0.397-0.231,1.67,1.1,3.78,3.72s5.06,6.51,8.95,11.3c3.89,4.82,8.72,10.6,14.6,16.8,5.85,6.27,12.7,13.1,20.6,20,7.88,6.92,16.8,14,26.5,20.9,9.78,6.95,20.4,13.8,31.8,20.3,0.114,0.0659,0.228,0.132,0.342,0.198,17.1,9.84,33.9,18.1,49.5,25.1,15.6,6.97,30,12.6,42.2,17.3,12.2,4.62,22.1,8.2,28.9,10.8,6.83,2.64,10.5,4.34,10.4,5-0.186,0.664-4.26,0.23-11.5-1.27-7.2-1.5-17.5-4.06-30.1-7.87s-27.4-8.87-43.5-15.5c-16.1-6.62-33.4-14.8-50.9-24.9-0.117-0.0673-0.234-0.135-0.351-0.202-11.6-6.7-22.5-13.8-32.4-21.2-9.92-7.35-18.9-14.9-26.7-22.4-7.85-7.48-14.6-14.9-20.1-21.7-5.56-6.85-9.98-13.2-13.3-18.5-3.37-5.36-5.7-9.77-7.11-12.9-1.41-3.1-1.91-4.88-1.52-5.11z" fill-rule="evenodd" fill="#000"/>\n</svg></div>'
	},
	{
	    message: "Wait, what does this mean?  When you ask a question, you need to think about what question you are asking.  Heights vary a lot.  When you say, people taller than you, who is included?  Who is taller than you?",
	    tutorImage: 4,
	    quiz: [ 
	        {
		    question: "Who are you comparing yourself against?  Who is included in people taller or shorter than you?",
		    answers: [ 
			{ answer: "Everyone" }, 
			{ answer: "People in the US" }, 
			{ answer: "People my age" }, 
			{ answer: "People like me" } ],
		    explanation: "When you use statistics to answer a question, you'll often need to first figure out what question is being asked.  In this case, you're going to get very different answers if you ask, \"What percentage of people in the world are taller than I am?\" than \"What percentage of people my age and my gender in my country are taller than I am?\" <p>So, what did you mean?"
		},
	    ],
	},
	{
	    message: "Let's narrow it down. What percentage of US adults are taller than you?  To answer this question, you need to get your hands on data.  Here is a chart showing the percentage of people at each height. This is called a <i>frequency distribution</i> (or also a <i>histogram</i>).  Mmm, data!  Data answers questions!  Take a look at the data and do the quiz.",
	    lessonSection: "Distributions",
	    tutorImage: 6,
	    quiz: [ 
		{ 
		    question: "What percentage of adult men in the US are 5'10\"?",
		    answers: [ 
			{ answer: "5%" }, 
			{ answer: "10%" }, 
			{ answer: "13%", isCorrect: true }, 
			{ answer: "16%" } ],
		    explanation: "This will be the blue line at 5 feet 10 inches (5'10\"), which has a frequency of 13%. So, about 13% of men are 5'10\" tall."
		},
		{ 
		    question: "What percentage of adult women in the US are at your height?",
		    answers: [ 
			{ answer: "1-2%" }, 
			{ answer: "3-5%" }, 
			{ answer: "5-10%" }, 
			{ answer: "10%+" } ],
		    explanation: "Your answer will depend on your height.  For example, if you are 5' 10\", then about 3% of adult women will be your height."
		}
            ],
	    chart: '<style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height for adults in US</div>\n<svg id=svg-height-chart width=380 height=200></svg>\n<p>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-cumm-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawHeightData = {};\nrawHeightData.female = [0.00900, 0.02267, 0.06333, 0.13033, 0.20933, 0.32800, 0.47767, 0.62533, 0.75300, 0.85433, 0.92733, 0.96033, 0.98533, 0.99433, 0.99633, 0.99800, 0.99833, 0.99883, 0.99933, 1.00000, 1.00000],\nrawHeightData.male = [0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.01667, 0.04167, 0.06633, 0.11700, 0.19200, 0.30933, 0.42333, 0.55600, 0.69667, 0.79600, 0.89333, 0.93400, 0.96700, 0.98700, 0.99467, 0.99800];\nvar sexes = ["Female", "Male"];\nvar data = [];\nvar convertInchesToHeightLabel = function(i) {\n return Math.floor(i / 12) + "\'" + i % 12 + \'"\'; }; \nvar svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nvar lastPercent = 0;\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\nlastPercent = 0;\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.012 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); })\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n</script>\n',
	},
	{
	    message: "Let's add a second chart. This is the <i>cumulative distribution</i> (also called a <i>cumulative histogram</i>) which shows the percentage of people at or below a height. So, the top chart is a frequency distribution that shows percentage at a height, and the bottom chart is a cumulative distribution that shows percent at or below a height.",
	    tutorImage: 6,
	    quiz: [ 
		{
		    question: "About what percentage of women are 5'8\" tall or less?",
		    answers: [ 
			{ answer: "10%" }, 
			{ answer: "30%" }, 
			{ answer: "60%" }, 
			{ answer: "90%", isCorrect: true } ],
		    explanation: "This will be the pink line in the bottom chart at 5'8\". It has a frequency of a little over 90%, so about 90% of women are 5'8\" tall or shorter."
		},
		{
		    question: "About what percentage of men are at or below your height?",
		    answers: [ 
			{ answer: "10%" }, 
			{ answer: "20%" }, 
			{ answer: "30%" }, 
			{ answer: "50%" }, 
			{ answer: "80%" } ],
		    explanation: "Your answer will depend on your height.  For example, if you are 5' 8\", then about 30% of adult men will be as tall as you or shorter."
		},
            ],
	    chart: '<style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height for adults in US</div>\n<svg id=svg-height-chart width=380 height=200></svg>\n<p>\n<div style="font: 18px sans-serif; margin: 8px;">Percentage adults in US at or below height</div>\n<svg id=svg-cumm-height-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-cumm-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawHeightData = {};\nrawHeightData.female = [0.00900, 0.02267, 0.06333, 0.13033, 0.20933, 0.32800, 0.47767, 0.62533, 0.75300, 0.85433, 0.92733, 0.96033, 0.98533, 0.99433, 0.99633, 0.99800, 0.99833, 0.99883, 0.99933, 1.00000, 1.00000],\nrawHeightData.male = [0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.01667, 0.04167, 0.06633, 0.11700, 0.19200, 0.30933, 0.42333, 0.55600, 0.69667, 0.79600, 0.89333, 0.93400, 0.96700, 0.98700, 0.99467, 0.99800];\nvar sexes = ["Female", "Male"];\nvar data = [];\nvar convertInchesToHeightLabel = function(i) {\n return Math.floor(i / 12) + "\'" + i % 12 + \'"\'; }; \nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h };\n data.push(row);\n});\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h };\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 1.0]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); })\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", 80)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", 72)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n\nvar svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nvar lastPercent = 0;\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\nlastPercent = 0;\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.012 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); })\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n</script>\n',
	},
	{
	    message: "Let's do a couple harder questions about our height frequency and cumulative distributions. Look again at the data and do the quiz.",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "What percentage of women are taller than 5'8\"?",
		    answers: [ 
			{ answer: "1%" }, 
			{ answer: "10%", isCorrect: true }, 
			{ answer: "90%" }, 
			{ answer: "99%" } ],
		    explanation: "This is the opposite of the question about how many women are 5'8\" or less. According to the second chart, about 90% of women are 5'8\" or shorter. So, 100% - 90%, or 10% of women are taller than 5'8\"."
		},
		{
		    question: "What percentage of men are taller than 5'10\"?",
		    answers: [ 
			{ answer: "10%" }, 
			{ answer: "25%" }, 
			{ answer: "45%", isCorrect: true }, 
			{ answer: "65%" } ],
		    explanation: "According to the second chart, about 55% of adult men are 5'10\" or shorter, so 100% - 55%, or about 45% of adult men are taller."
		},
            ],
	},
	{
	    message: "Here's a much harder question. Spend a little time thinking about it. I bet you can get it!",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "If you are 5'10\", about what percentage of adults (both men and women) are shorter than you?",
		    answers: [ 
			{ answer: "25%" }, 
			{ answer: "50%" }, 
			{ answer: "75%", isCorrect: true }, 
			{ answer: "We can't tell" } ],
		    explanation: "This requires combining the data from men and women.  <p>If you are 5'10\" and you meet a random adult woman in the US, the chart says you are 99% likely to be as tall or taller than she is.  If you meet a man, you have a 56% chance of being as tall or taller than he is.  About half of adults in the US are men and half are women, and so you might assume you have an equal chance of meeting either. (99% + 56%) &divide; 2 = 77%.  <p>So, if you are 5'10\", you are likely to be taller than about 75% of the adults in the US."
		},
            ],
	},
	{
	    message: "When you have data, you can answer a lot of questions, but not every question.  Let's talk about the limitations of this data, what it can and cannot answer. Try doing the quiz and see if you can guess what the data can and can't answer.",
	    tutorImage: 6,
	    lessonSection: "What This Data Can Answer",
	    quiz: [	
		{
		    question: "Can you use this data to tell you how many Japanese grandmothers are taller than you?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No", isCorrect: true }, 
			{ answer: "Maybe" } ],
		    explanation: "Nope.  You would need different data, like from a survey of a random sample of Japanese grandmothers, to be able to answer that question.  This data only lets you answer questions about the people it is about, US adults."
		},
		{
		    question: "Can you use this data to tell you how many high school freshmen are taller than you?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No", isCorrect: true }, 
			{ answer: "Maybe" } ],
		    explanation: "No. The heights of teenagers are a lot different from the heights of fully grown adults.  To answer questions about teenagers, you would need data on the heights of teenagers.  This data is only about full grown adults in the US."
		},
	    ],
	},
	{
	    message: "Let's do one more question, this one a little harder, about using data and limitations on how you use data.",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "Can you use this data to tell you how many people in California are taller than you?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" }, 
			{ answer: "Maybe", isCorrect: true } ],
		    explanation: "Maybe is probably the best answer.  <p>The data would work if it is true that the heights of the people of California are very similar to the heights of adults across the entire United States.  There may be reason to believe that is not the case, such as the number of children and elderly in California (who will be shorter) or maybe that California is relatively wealthy (better nutrition increases height).  <p>So, if you only need approximate answers, or if you check if the heights of people in California is about the same as the heights of people in the US, the data then might be good enough to use."
		},
            ],
	},
	{
	    message: "You might have noticed that this height data for women and men has a curved shape, a little like a bell.  The chart at the bottom is a type of bell curve called a  <i>normal distribution</i> (or <i>Gaussian distribution</i>) fitted to the height data.  See how similar it is?",
	    tutorImage: 4,
	    lessonSection: "Normal Distribution",
	    quiz: [	
		{
		    question: "Why does real data often look like a normal distribution?",
		    answers: [ 
			{ answer: "Magic" }, 
			{ answer: "It's often rare to be far away from the norm", isCorrect: true, }, 
			{ answer: "It's not real data"} ],
		    explanation: "In the real world, it's common not only to have a small range of likely values, but also for there to be a normal (or average) value and for differences (or deviations) from that norm to be increasingly rare the further away you get from the norm. <p>For example, 5'10\" is the normal height of a man in the US. It's very common for a boy to grow to be close to 5'10\" as an adult, but very rare to be only 4'5\" or get to 6'8\"."
		},
            ],
	    chart: '<style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height for adults in US</div>\n<svg id=svg-height-chart width=380 height=200></svg>\n<p>\n<div style="font: 18px sans-serif; margin: 8px;">Normal distributions fitted to data</div>\n<svg id=svg-normal-dist-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-normal-dist-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawHeightData = {};\nrawHeightData.female = [0.0072236002, 0.0166540133, 0.0335345345, 0.0589757978, 0.0905865111, 0.1215238189, 0.1423860529, 0.1457074172, 0.1302278995, 0.1016563654, 0.0693063915, 0.0412686406, 0.0214622478, 0.0097485139, 0.0038673172, 0.0013399523, 0.0004054871, 0.0001071699, 0, 0, 0];\nrawHeightData.male = [0, 0.0001251083, 0.000422438, 0.0012698433, 0.0033981882, 0.0080957093, 0.0171700897, 0.0324190591, 0.0544927128, 0.08154299, 0.1086288085, 0.1288289836, 0.1360167289, 0.1278442655, 0.1069745233, 0.0796873983, 0.0528456345, 0.0311988629, 0.0163975361, 0.0076723536, 0.0031958678];\nvar sexes = ["Female", "Male"];\nvar data = [];\nvar convertInchesToHeightLabel = function(i) {\n return Math.floor(i / 12) + "\'" + i % 12 + \'"\'; }; // "\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h };\n data.push(row);\n});\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h };\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.016 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); })\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n\nvar svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nrawHeightData.female = [0.00900, 0.02267, 0.06333, 0.13033, 0.20933, 0.32800, 0.47767, 0.62533, 0.75300, 0.85433, 0.92733, 0.96033, 0.98533, 0.99433, 0.99633, 0.99800, 0.99833, 0.99883, 0.99933, 1.00000, 1.00000],\nrawHeightData.male = [0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.01667, 0.04167, 0.06633, 0.11700, 0.19200, 0.30933, 0.42333, 0.55600, 0.69667, 0.79600, 0.89333, 0.93400, 0.96700, 0.98700, 0.99467, 0.99800];\nvar lastPercent = 0;\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\nlastPercent = 0;\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.012 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); })\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n</script>\n',
	},
	{
	    message: "A lot of data looks similar to a normal distribution. It's usually common to be average and uncommon to deviate far from the average.",
	    tutorImage: 7,
	    quiz: [	
		{
		    question: "Why does the normal distribution matter?",
		    answers: [ 
			{ answer: "It doesn't" }, 
			{ answer: "It's a useful approximation", isCorrect: true, }, 
			{ answer: "It can be used in place of real data", isCorrect: true } ],
		    explanation: "Because real data often looks like a normal distribution, we can often substitute a normal distribution for missing data as an approximation.  We can often assume that missing data might be normally distributed and make predictions using that and other assumptions.  More on that later!",
		},
            ],
	},
	{
	    message: "Let's take a look at making predictions. To start, here's some new data showing heights in the US for 14-year-old girls and boys. Unsurprisingly, teens are shorter than fully grown adults. But can you see other differences?",
	    tutorImage: 1,
	    lessonSection: "Spread and Deviation",
	    quiz: [	
		{
		    question: "Girls seem closer to their full grown height than boys. Why might that be?",
		    answers: [ 
			{ answer: "Girls are better than boys" }, 
			{ answer: "Girls hit puberty earlier than boys", isCorrect: true, }, 
			{ answer: "Women are shorter than men"} ],
		    explanation: "On average, 14-year-old girls are less than one inch from their full grown height, but 14 year boys are almost two and a half inches away from their full grown height.  <p>The reason is that girls start and complete puberty over a year earlier than boys. The chart shows that difference clearly. At 14, many girls are at the middle or end of puberty, but many boys are at the beginning or middle, leading to big differences in growth and height."
		},
            ],
	    chart: '<style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height at age 14 in US</div>\n<svg id=svg-14-year-old-height-chart width=380 height=200></svg>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of height for adults in US</div>\n<svg id=svg-height-chart width=380 height=200></svg>\n<p>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-14-year-old-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawHeightData = {};\nrawHeightData.female = [0.001510574, 0.0317220544, 0.0619335347, 0.081570997, 0.1329305136, 0.16918429, 0.1178247734, 0.1087613293, 0.1223564955, 0.0725075529, 0.0589123867, 0.0226586103, 0.0090634441, 0.0045317221, 0.0045317221, 0, 0, 0, 0, 0, 0];\nrawHeightData.male = [0.0017331023, 0.0034662045, 0.0173310225, 0.013864818, 0.0398613518, 0.0485268631, 0.0658578856, 0.0831889081, 0.116117851, 0.1143847487, 0.1126516464, 0.0762564991, 0.0935875217, 0.0641247834, 0.0658578856, 0.0467937608, 0.0467937608, 0.0173310225, 0.0121317158, 0.0051993068, 0.0017331023];\nvar sexes = ["Female", "Male"];\nvar data = [];\nvar convertInchesToHeightLabel = function(i) {\n return Math.floor(i / 12) + "\'" + i % 12 + \'"\'; }; // "\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h };\n data.push(row);\n});\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h };\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.0 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); })\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n\nvar svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nrawHeightData.female = [0.00900, 0.02267, 0.06333, 0.13033, 0.20933, 0.32800, 0.47767, 0.62533, 0.75300, 0.85433, 0.92733, 0.96033, 0.98533, 0.99433, 0.99633, 0.99800, 0.99833, 0.99883, 0.99933, 1.00000, 1.00000],\nrawHeightData.male = [0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.01667, 0.04167, 0.06633, 0.11700, 0.19200, 0.30933, 0.42333, 0.55600, 0.69667, 0.79600, 0.89333, 0.93400, 0.96700, 0.98700, 0.99467, 0.99800];\nvar lastPercent = 0;\nrawHeightData.female.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Female",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\nlastPercent = 0;\nrawHeightData.male.forEach(function(h, i) {\n var row = { height: convertInchesToHeightLabel(i + 10 + 4 * 12),\n sex: "Male",\n percent: h - lastPercent};\n lastPercent = h;\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.height; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.020 + d3.max(data, function(d) { return d.percent; })]);\n\nvar heights = svg.selectAll(".heights")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.height) + ",0)"; })\n .append("rect")\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); })\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", width - 30)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", width - 40)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n</script>\n',
	},	  
	{
	    message: "Another difference is the shape of the data. The height of girls still looks fairly bell shaped, maybe just shifted over a little from the adult women.  But the data on boys' heights is very different, like a squashed bell, much lower, flatter, and spread out.",
	    tutorImage: 4,
	    quiz: [	
		{
		    question: "Why does the data on boys heights look flatter and more spread out?",
		    answers: [ 
			{ answer: "Girls are better than boys" }, 
			{ answer: "Girls hit puberty earlier than boys", isCorrect: true, }, 
			{ answer: "Girls are further along in puberty at 14 years old", isCorrect: true} ],
		    explanation: "At 14, most girls will be pretty far along in their growth, nearly done in fact, but many boys will have just started puberty.  The boys that hit puberty early will be taller (toward the right in the chart), but the other boys will be much shorter (toward the left in the chart), leading to a much wider spread."
		},
            ],
	},		
	{
	    message: "When there is data spread out by different amounts, you might want a way to measure and compare how spread out it is. One of the most widely used metrics is <i>standard deviation</i>.  It's a measure of how much we should expect the data to differ from the average (or <i>mean</i>).",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "Which is more spread out, the heights of 14-year-old boys or girls?",
		    answers: [ 
			{ answer: "Boys", isCorrect: true }, 
			{ answer: "Girls", }, 
			{ answer: "Neither"} ],
		    explanation: "There's a big difference here. For girls, the standard deviation is about the same as women, and you would expect most 14-year-old girls and most women to be within 2.5\" of the average height.  For boys, there is much more spread. Most men are within 2.5\" of the average height, but you have to go all the way out to within 3.5\" to include most boys."
		},
            ],
	},		
	{
	    message: "Yet another difference is that age 14 is an unusual time where an unusual number of girls will be taller than a lot of boys around them.  It isn't just your imagination.  You can see that in the charts.  For adults, there's only a little overlap between heights of men and women, but boys and girls have much more overlap.",
	    lessonSection: "Boys and Girls, Men and Women",
	    tutorImage: 2,
	    quiz: [	
		{
		    question: "Take a guess.  What percentage of 14-year-old girls are taller than most of the 14-year-old boys they might meet?",
		    answers: [ 
			{ answer: "1%" }, 
			{ answer: "10%", isCorrect: true, }, 
			{ answer: "50%"} ],
		    explanation: "Boys are, on average, a lot taller than girls. It is going to be unusual for a girl to be taller than most boys. If you look at the chart and guess the average height is for boys (it's about 5'7\" or 5'8\"), then you can total the frequencies of the girls at least as tall as the average boy.  If you do that, it works out to about 10%.  So, about 10% of 14-year-old girls are taller than most of the boys they meet."
		},
		{
		    question: "Take a guess for adults too.  What percentage of women look like they're taller than at least half of the men they meet?",
		    answers: [ 
			{ answer: "1%", isCorrect: true }, 
			{ answer: "10%", }, 
			{ answer: "50%"} ],
		    explanation: "Men are a lot taller than women. Only about 1% of women are that tall.  So, at age 14, nearly 10 times more girls will be taller than most boys than fully grown women will be taller than most men! It's an unusual time."
		},
            ],
	},
	{
	    message: "Looking at the data is fun, but let's get back to trying to make a prediction. Let's say you wanted to predict how tall a 14-year-old might be when he or she is an adult.  How would you do that?  What might be important to do that?",
	    lessonSection: "Predictions",
	    tutorImage: 1,
	    quiz: [	
		{
 		    question: "What might determine how tall a 14-year-old is when they grow to be an adult?",
		    answers: [ 
			{ answer: "Current height" }, 
			{ answer: "Location"}, 
			{ answer: "Gender (boy or girl)"}, 
			{ answer: "Genetics (parents' heights)"}, 
			{ answer: "Wealth"},
			{ answer: "All of these and more"},],
		    explanation: "All of these could make a difference.  And other things could matter too."
		},
            ],
	},
	{
	    message: "Some data is going to be easier to get your hands on than others.  For example, it probably is easy to get your hands on height distributions for various ages and genders in the US or Europe.  It probably is harder to get that heights just for a city, to know how well each person was fed during their childhood, or to know the height of each person's parents.",
	    tutorImage: 3,
	    quiz: [	
		{
		    question: "What should we use to make a prediction?",
		    answers: [ 
			{ answer: "Everything", }, 
			{ answer: "As little as possible", isCorrect: true}, 
			{ answer: "Whatever we can get easily"},
			{ answer: "Whatever works", isCorrect: true},
		    ],
		    explanation: "Generally, you want to try something simple and easy first, then see if you can get better accuracy by doing more."
		},
            ],
	},
	{
	    message: "Using just what is in front of us, just these charts, how might you predict how tall a 5' tall 14-year-old boy might be as an adult?",
	    tutorImage: 3,
	    quiz: [	
		{
 		    question: "Let's start with something easier. If all you know about someone is that they are a male adult, that's it, what guess should you make for how tall they probably are?",
		    answers: [ 
			{ answer: "5'10\"", isCorrect: true }, 
			{ answer: "5'0\""}, 
			{ answer: "6'20\""},],
		    explanation: "Without any other information, you might expect that someone would be a normal height.  Normal height, the average height, the height most men are or are close to, is 5'10\". By guessing the average, you probably won't get the height exactly, but you'll be as close as you can be (minimizing your error)."
		},
            ],
	},
	{
	    message: "So, as a starting point, we could predict every 14-year-old boy will be average height as a man. A boy who is 5' tall would be predicted to be 5'10\". And a 5'11\" boy also would be predicted to be 5'10\" as an adult.",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "How good of a prediction is the average likely to be?",
		    answers: [ 
			{ answer: "Great!", }, 
			{ answer: "Probably not very good", isCorrect: true}, 
			{ answer: "Awful"},
		    ],
		    explanation: "On the one hand, predicting the average is a good guess. It's the expected value, what we expect the height to be if we know nothing else. And, since most men are within 3\" or so of 5'10\", it's likely to be close to correct more often than not. <p>On the other hand, we aren't using very much information to make this prediction &ndash; just the gender and average for all males &ndash; and we have other information we could use, like that one person is 5' or another is 5'11\" at age 14. Let's see what we can do with that next."
		},
            ],
	},
	{
	    message: "5' tall is unusually short for a 14-year-old boy.  The average for 14-year-old boys is 5'7\". Can you use that?",
	    tutorImage: 4,
	    quiz: [	
		{
 		    question: "Will a short 14-year-old boy usually be a short adult?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true }, 
			{ answer: "No" },
		    ],
		    explanation: "On average, someone who is short as a child will be short as an adult. There are many exceptions too. Late puberty, nutrition, illness, atypical growth rates, and many other factors can cause someone to be short in their childhood and tall as an adult. <p>Even so, on average, if you predict that shorter teens will be shorter adults, you'll be right much more often than wrong. So, this is useful for predicting adult heights. Let's try using it next."
		},
            ],
	},
	{
	    message: "Let's assume teens that are shorter than other teens will tend to be adults who are shorter than other adults.",
	    tutorImage: 1,
	    quiz: [	
		{
 		    question: "How should we use this for our 5' tall 14-year-old boy?",
		    answers: [ 
			{ answer: "Guess a short height for an adult man", isCorrect: true }, 
			{ answer: "Pick a height as unusual for adult men as 5' is for a boy", isCorrect: true},
			{ answer: "Both of the above", isCorrect: true},
		    ],
		    explanation: "Both of these are pretty good ideas."
		},
		{
		    question: "What would be a likely height for a 14-year-old 5' boy when he is an adult?",
		    answers: [ 
			{ answer: "5'0\"", }, 
			{ answer: "5'6\"", isCorrect: true}, 
			{ answer: "6'1\""},
		    ],
		    explanation: "Of the choices, only 5'6\" seems likely, since the norm is that a short teenage boy will grow more, but still be a shorter adult. How much shorter? Let's look at that next."
		},
            ],
	},
	{
	    message: "Being 5' tall as a 14-year-old boy means you are in the 10th percentile, so only 10% of other boys will be your height or shorter. It also turns out that's about twice the standard deviation away from the average height of 14-year-old boys. The 10th percentile and also twice the standard deviation shorter for grown men is 5'6\".",
	    tutorImage: 7,
	    quiz: [	
		{
 		    question: "What are we assuming if we guess that teens in the 10th percentile will be adults in the 10th percentile?",
		    answers: [ 
			{ answer: "Short people stay short", isCorrect: true }, 
			{ answer: "People don't change height percentiles very often", isCorrect: true}, 
			{ answer: "People grow similarly", isCorrect: true},
			{ answer: "All of the above", isCorrect: true},
		    ],
		    explanation: "We are making a lot of quiet assumptions. Among other things, we assume height percentiles are constant over time, so people don't change percentiles very often, and shorter people will stay just as short relative to others as everyone grows."
		},
		{
		    question: "Are those reasonable assumptions?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true }, 
			{ answer: "Maybe", isCorrect: true}, 
			{ answer: "No"},
		    ],
		    explanation: "It's not perfect, but using percentiles is actually how most parents and doctors predict heights for children. Let's explore ways we might be able to improve this next."
		},
            ],
	},
	{
	    message: "One common thing you see in data like this is that it isn't true that people who are unusual stay unusual. A 14-year-old boy who is unusually short often is just a late bloomer who hasn't started growing yet. In general, this tendency of people to move closer to the norm is called <i>regression to the mean</i>. How could you use that?",
	    tutorImage: 6,
	    quiz: [	
		{
 		    question: "5'6\" was our prediction for our 5' teen earlier, but the average height of an adult man is 5'10\". What might be a more accurate prediction?",
		    answers: [ 
			{ answer: "5'7\"", isCorrect: true }, 
			{ answer: "5'5\""}, 
			{ answer: "We don't know", isCorrect: true},
		    ],
		    explanation: "It's pretty likely that closer to the average would be a better guess, so 5'7\". It is likely someone in the 10th percentile as a teen would move to the 15th or 20th or even higher percentile as an adult."
		},
            ],
	},
	{
	    message: "This is good, but it could be even better. How could we improve these predictions further?",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "What additional data might help us?",
		    answers: [ 
			{ answer: "Heights for men who were 5' tall at age 14", isCorrect: true}, 
			{ answer: "Make predictions, then check how many we get right", isCorrect: true}, 
			{ answer: "Investigating how people move between percentiles", isCorrect: true},
			{ answer: "All of these", isCorrect: true},
		    ],
		    explanation: "All of these might help. <p>At one extreme, if we have a huge amount of data and the right data, we could filter (or <i>condition</i>) it down to just men who were 5' tall at age 14, which might yield very accurate predictions about other 5' tall 14-year-old boys. <p>Much simpler than that, if we make a <i>model</i> that contains a fudge factor for regression to the mean (like changing a 5'6\" prediction to 5'7\" to move it toward the norm), we could test if the predictions have lower error now. <p>In general, by looking at the data, we might be able to see patterns and come up with a way to describe how people move between percentiles, and models built using that might help improve our predictions. All of these are good ideas!"
		},
            ],
	},
	{
	    message: "Before we move on, let's try to make a couple more predictions. Let's say a 14-year-old girl is 5'5\". How tall would you guess she would be as an adult?",
	    tutorImage: 4,
	    quiz: [	
		{
 		    question: "What's your prediction for the adult height of a 5'5\" 14-year-old girl?",
		    answers: [ 
			{ answer: "5'5\""}, 
			{ answer: "5'6\"", isCorrect: true}, 
			{ answer: "5'10\""}, 
			{ answer: "5'11\""}, 
			{ answer: "We don't know"},
		    ],
		    explanation: "5'6\" is the best choice here. On average, a 14-year-old girl grows one additional inch. Both 5'5\" as a 14-year-old and 5'6\" as an adult woman are the 60th percentile, just a bit above average. So, it's likely 5'6\" might be a good prediction."
		},
            ],
	},
	{
	    message: "One more prediction!",
	    tutorImage: 2,
	    quiz: [	
		{
		    question: "What adult height would you predict for a 5'10\" tall 14-year-old girl?",
		    answers: [ 
			{ answer: "5'9\""}, 
			{ answer: "5'10\"", isCorrect: true}, 
			{ answer: "5'11\"", isCorrect: true}, 
			{ answer: "6'1\""},
		    ],
		    explanation: "5'10\" or 5'11\" are good guesses. <p>The girl isn't going to shrink, so 5'9\" is out. Regression to the mean and guessing someone that tall at 14 hit puberty early and is full grown supports 5'10\" as your guess.  But that the average 14-year-old girl still grows another inch and that we're already in the 99th percentile might support a higher guess like 5'11\"."
		},
            ],
	},
	{
	    message: "Let's loop back and cover some core concepts now. We've talked a bit about the <i>average</i> (or <i>mean</i>). It is what is normal and expected.  For example, the average height for an adult man in the US is 5'10\", and that is the typical height, the height we would expect a man to be at or near.  The average is computed by adding together all the data and then dividing by how many numbers we added together.",
	    tutorImage: 1,
	    lessonSection: "Mean",
	    quiz: [	
		{
 		    question: "Let's try calculating the average. Say we have four kids in the room, ages 3, 4, 4, and 5. What is the average age?",
		    answers: [ 
			{ answer: "3"}, 
			{ answer: "4", isCorrect: true}, 
			{ answer: "5"}, 
			{ answer: "(3 + 4 + 4 + 5) / 4 = 4", isCorrect: true},
		    ],
		    explanation: "The average is the sum divided by the count. The sum is 3 + 4 + 4 + 5 = 16. The count is 4. 16 / 4 = 4. So, the average is 4."
		},
            ],
	    chart: '<div style="margin: 8px;">\n<div style="font: 24px sans-serif; margin-bottom: 8px;">Formula for computing the average</div>\n<div style="font: 14px sans-serif; line-height: 16px; margin-bottom: 8px;"><span style="vertical-align: 3px;">&sum;</span> means sum, x<sub>i</sub> is each item, and n is the number of items.<br>So, this cryptic-looking (but common in math) formula just means add up everything, then divide by the number of items we added together.</div>\n<br><div style="text-align: center;"><svg height="100pt" width="110pt" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.0734 63.157">\n<defs>\n<path id="g0-88" d="M31.5,34.8l3-7.9h-0.613c-0.987,2.6-3.59,4.2-6.49,5-0.5,0.1-2.9,0.8-7.7,0.8h-15l12.6-14.9c0.2-0.2,0.3-0.3,0.3-0.4,0,0,0-0.1-0.2-0.4l-11.6-15.8h13.6c3.37,0,5.57,0.35,5.87,0.4,1.3,0.2,3.5,0.62,5.4,1.87,0.6,0.4,2.3,1.52,3.2,3.53h0.609l-3.01-6.99h-29.4c-0.57,0-0.6,0.0249-0.67,0.174-0.03,0.075-0.03,0.548-0.03,0.821l13.2,18-12.9,15.1c-0.25,0.3-0.25,0.4-0.25,0.5,0,0.2,0.22,0.2,0.67,0.2h29.4z"/>\n<path id="g1-105" d="M7.04-3.56c0-0.12-0.1-0.22-0.25-0.22-0.22,0-0.25,0.07-0.37,0.5-0.65,2.26-1.67,3.03-2.49,3.03-0.3,0-0.65-0.074-0.65-0.821,0-0.67,0.3-1.42,0.58-2.16l1.74-4.63c0.07-0.2,0.25-0.65,0.25-1.12,0-1.02-0.75-2.02-1.97-2.02-2.29,0-3.21,3.64-3.21,3.83,0,0.1,0.099,0.23,0.273,0.23,0.225,0,0.245-0.1,0.345-0.45,0.6-2.09,1.55-3.11,2.52-3.11,0.22,0,0.64,0.1,0.64,0.85,0,0.64-0.32,1.46-0.52,2.01l-1.74,4.63c-0.15,0.4-0.3,0.8-0.3,1.24,0,1.12,0.77,2.02,1.97,2.02,2.29,0,3.18-3.63,3.18-3.81zm-0.2-11.9c0-0.4-0.3-0.8-0.84-0.8-0.58,0-1.22,0.5-1.22,1.1,0,0.7,0.52,0.9,0.82,0.9,0.67,0,1.24-0.7,1.24-1.2z"/>\n<path id="g1-110" d="M5.13-7.29c0.05-0.15,0.67-1.39,1.59-2.19,0.64-0.62,1.49-1.02,2.46-1.02,1.02,0,1.32,0.77,1.32,1.77,0,1.42-1,4.25-1.49,5.6-0.23,0.59-0.35,0.92-0.35,1.36,0,1.12,0.77,2.02,1.94,2.02,2.3,0,3.2-3.66,3.2-3.81,0-0.12-0.1-0.22-0.2-0.22-0.3,0-0.3,0.07-0.4,0.5-0.6,2.04-1.5,3.03-2.5,3.03-0.3,0-0.6-0.025-0.6-0.821,0-0.62,0.2-1.37,0.4-1.72,0.5-1.36,1.5-4.15,1.5-5.57,0-1.49-0.9-2.64-2.74-2.64-2.22,0-3.39,1.6-3.84,2.22-0.07-1.42-1.09-2.22-2.19-2.22-0.79,0-1.34,0.5-1.76,1.35-0.45,0.89-0.798,2.39-0.798,2.48s0.099,0.23,0.273,0.23c0.195,0,0.225-0.03,0.375-0.6,0.4-1.52,0.84-2.96,1.84-2.96,0.57,0,0.77,0.4,0.77,1.17,0,0.55-0.25,1.52-0.42,2.29l-0.7,2.69c-0.1,0.47-0.37,1.59-0.5,2.04-0.17,0.64-0.44,1.81-0.44,1.94,0,0.348,0.27,0.622,0.64,0.622,0.3,0,0.65-0.15,0.85-0.523,0.05-0.124,0.27-0.996,0.4-1.5l0.54-2.24,0.83-3.28z"/>\n<path id="g1-120" d="M11.8-10.2c-0.8,0.2-1.1,0.8-1.1,1.27,0,0.6,0.5,0.79,0.8,0.79,0.8,0,1.3-0.64,1.3-1.31,0-1.05-1.2-1.55-2.3-1.55-1.47,0-2.31,1.52-2.54,1.99-0.57-1.89-2.11-1.99-2.56-1.99-2.54,0-3.88,3.29-3.88,3.83,0,0.1,0.1,0.23,0.27,0.23,0.2,0,0.25-0.15,0.3-0.25,0.85-2.76,2.51-3.31,3.23-3.31,1.12,0,1.35,1.07,1.35,1.67,0,0.54-0.15,1.12-0.45,2.31l-0.85,3.41c-0.37,1.49-1.09,2.86-2.41,2.86-0.12,0-0.75,0-1.27-0.323,0.9-0.174,1.1-0.918,1.1-1.22,0-0.5-0.38-0.8-0.85-0.8-0.6,0-1.24,0.52-1.24,1.32,0,1.05,1.17,1.52,2.24,1.52,1.19,0,2.04-0.946,2.56-1.97,0.4,1.47,1.64,1.97,2.56,1.97,2.54,0,3.84-3.26,3.84-3.81,0-0.12-0.1-0.22-0.2-0.22-0.2,0-0.3,0.12-0.3,0.32-0.7,2.19-2.14,3.21-3.26,3.21-0.88,0-1.35-0.647-1.35-1.67,0-0.54,0.1-0.94,0.5-2.58l0.87-3.39c0.37-1.49,1.22-2.61,2.34-2.61,0.1,0,0.8,0,1.3,0.3z"/>\n<use id="g2-105" xlink:href="#g1-105" transform="scale(0.833601)"/>\n<use id="g2-110" xlink:href="#g1-110" transform="scale(0.833601)"/>\n</defs>\n<g transform="matrix(1.12578 0 0 1.12578 -65.342 -61.02)">\n<use y="56.488" x="57.8248" xlink:href="#g0-88"/>\n<use y="80.1242" x="97.9093" xlink:href="#g1-120"/>\n<use y="85.1513" x="111.753" xlink:href="#g2-105"/>\n<rect y="94.8" width="61.4" x="57.8" height="0.995"/>\n<use y="110.101" x="82.4418" xlink:href="#g2-110"/>\n</g>\n</svg>\n</div></div>'
	},
	{
	    message: "The average age was 4 when we had four kids in the room ages 3, 4, 4, and 5. What if we add another person to the room?",
	    tutorImage: 4,
	    quiz: [	
		{
		    question: "Let's say grandma comes into the room, so the ages of the five people in the room are now 3, 4, 4, 5, and 74. What is the average age now?",
		    answers: [ 
			{ answer: "4"}, 
			{ answer: "5"}, 
			{ answer: "18", isCorrect: true}, 
			{ answer: "(3 + 4 + 4 + 5 + 74) / 5", isCorrect: true},
		    ],
		    explanation: "The average is the sum divided by the count. 3 + 4 + 4 + 5 + 74 = 90. 90 / 5 = 18. <p>See how much the average age changed? It no longer describes anyone in the room! This is a problem with the average; extreme <i>outliers</i> can move it and make it useless. <p>Sometimes people use the <i>median</i> (which is the middle of the sorted data, so, in 3, 4, 4, 5, 74, it would be the third one, so 4) to also describe what is typical or expected (and, here, 4 is a much better description of the normal age in the room).  When the median and mean differ by a lot, it usually indicates outliers, which often is handled by just discarding the outlier data."
		},
            ],
	},
	{
	    message: "We also talked about standard deviation. Let's look at it in more depth. The standard deviation is the expected (standard) spread (deviation) around the most likely value (the average or mean).  So, in plain English, it's how far we expect data to be away from the average. It's also how much we should be surprised if we see something far away from the average. To compute it, we look at how far each point is away from the average.  Try doing it in the quiz.",
	    tutorImage: 6,
	    lessonSection: "Standard Deviation",
	    quiz: [	
		{
		    question: "Let's say we have the data (3, 4, 5, 5, 5, 6, 7). The average is 5.  What is the standard deviation?",
		    answers: [ 
			{ answer: "&radic;<span style='text-decoration:overline'>(2&times;2 + 1 + 0 + 0 + 0 + 1 + 2&times;2) / 7&nbsp;</span>", isCorrect: true}, 
			{ answer: "&radic;<span style='text-decoration:overline'>10 / 7&nbsp;</span>", isCorrect: true}, 
			{ answer: "1.2", isCorrect: true},
			{ answer: "All of the above", isCorrect: true},
		    ],
		    explanation: "All of these are correct.  It tells you that you'd expect most of the data to be close to 5, mostly within the range 4-6, which it is. And twice the standard deviation is where you'd expect almost all the data to be, about in the range 3-7, which it is."
		},
            ],
	    chart: '<div style="margin: 8px;">\n<div style="font: 24px sans-serif; margin-bottom: 8px;">Formula for the standard deviation</div>\n<div style="font: 14px sans-serif; line-height: 16px; margin-bottom: 8px;"><span style="vertical-align: 3px;">&sum;</span> means sum, x<sub>i</sub> is each item,  <span style="text-decoration: overline">x</span> is the average, and n is the number of items.<div style="margin-top:4px;">So, this formula means compute each difference, square it, add up all the squared differences, divide by the number of items we added together, and finally take the square root.</div><div style="margin-top:4px;">You can also think of it as the square root of the average of the squared differences.</div></div>\n<div style="margin-top: 10px; text-align: center;"><svg height="100pt" width="200pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 10 170 50">\n<defs>\n<path id="g0-80" d="M10.5,13.3l-8.86,10.9c-0.2,0.3-0.22,0.3-0.22,0.4,0,0.3,0.22,0.3,0.67,0.3h20.6l2.18-6.2h-0.667c-0.633,1.9-2.33,3.4-4.43,4.1-0.4,0.1-2.1,0.7-5.7,0.7h-10.6l8.62-10.7c0.2-0.2,0.2-0.3,0.2-0.4s0-0.1-0.1-0.3l-8.12-11.1h9.85c2.87,0,8.57,0.175,10.3,4.82h0.655l-2.16-5.82h-20.6c-0.67,0-0.7,0.0249-0.7,0.796l9.11,12.5z"/>\n<path id="g0-114" d="M11.6,53.8h-0.0308l-5.37-24.9-3.26,5.1c-0.18,0.2-0.18,0.3-0.18,0.3,0,0.1,0.33,0.4,0.35,0.4l1.69-2.7,5.7,26.7c0.9,0,0.9,0,1.1-0.6l13.7-58.1c0-0.174,0.1-0.398,0.1-0.523,0-0.273-0.2-0.497-0.5-0.497-0.4,0-0.5,0.323-0.6,0.672l-12.7,54.1z"/>\n<path id="g1-22" d="M9.93-13.8v-0.531h-8.46v0.572h8.46z"/>\n<path id="g1-40" d="M7.61,6.07c0-0.02,0-0.07-0.07-0.15-1.15-1.17-4.21-4.35-4.21-12.1s3.01-10.9,4.23-12.2l0.05-0.1s-0.07-0.1-0.17-0.1c-0.27,0-2.39,1.8-3.61,4.5-1.24,2.8-1.59,5.49-1.59,7.88,0,1.79,0.17,4.83,1.67,8.04,1.19,2.58,3.23,4.4,3.53,4.4,0.12,0,0.17-0.05,0.17-0.15z"/>\n<path id="g1-41" d="M6.54-6.2c0-1.79-0.17-4.8-1.66-8-1.2-2.6-3.24-4.4-3.54-4.4-0.07,0-0.17,0-0.17,0.1s0.02,0.1,0.05,0.1c1.19,1.3,4.23,4.4,4.23,12.2,0,7.76-3.01,10.9-4.23,12.2-0.03,0.05-0.05,0.07-0.05,0.12,0,0.13,0.1,0.15,0.17,0.15,0.28,0,2.39-1.84,3.61-4.58,1.25-2.76,1.59-5.45,1.59-7.84z"/>\n<path id="g1-50" d="M10.4-3.86h-0.473c-0.247,1.77-0.447,2.07-0.547,2.22-0.12,0.2-1.92,0.2-2.26,0.2h-4.78c0.891-0.97,2.64-2.74,4.75-4.78,1.52-1.44,3.31-3.13,3.31-5.58,0-3-2.36-4.6-4.98-4.6-2.73,0-4.4,2.4-4.4,4.6,0,1,0.72,1.1,1.02,1.1,0.25,0,1-0.1,1-1,0-0.8-0.65-1-1-1-0.15,0-0.3,0-0.4,0.1,0.47-2.2,1.92-3.2,3.44-3.2,2.16,0,3.58,1.7,3.58,4,0,2.15-1.27,4.01-2.69,5.63l-4.95,5.6v0.572h8.76l0.622-3.86z"/>\n<path id="g2-105" d="M7.04-3.56c0-0.12-0.1-0.22-0.25-0.22-0.22,0-0.25,0.07-0.37,0.5-0.65,2.26-1.67,3.03-2.49,3.03-0.3,0-0.65-0.074-0.65-0.821,0-0.67,0.3-1.42,0.58-2.16l1.74-4.63c0.07-0.2,0.25-0.65,0.25-1.12,0-1.02-0.75-2.02-1.97-2.02-2.29,0-3.21,3.64-3.21,3.83,0,0.1,0.099,0.23,0.273,0.23,0.225,0,0.245-0.1,0.345-0.45,0.6-2.09,1.55-3.11,2.52-3.11,0.22,0,0.64,0.1,0.64,0.85,0,0.64-0.32,1.46-0.52,2.01l-1.74,4.63c-0.15,0.4-0.3,0.8-0.3,1.24,0,1.12,0.77,2.02,1.97,2.02,2.29,0,3.18-3.63,3.18-3.81zm-0.2-11.9c0-0.4-0.3-0.8-0.84-0.8-0.58,0-1.22,0.5-1.22,1.1,0,0.7,0.52,0.9,0.82,0.9,0.67,0,1.24-0.7,1.24-1.2z"/>\n<path id="g2-110" d="M5.13-7.29c0.05-0.15,0.67-1.39,1.59-2.19,0.64-0.62,1.49-1.02,2.46-1.02,1.02,0,1.32,0.77,1.32,1.77,0,1.42-1,4.25-1.49,5.6-0.23,0.59-0.35,0.92-0.35,1.36,0,1.12,0.77,2.02,1.94,2.02,2.3,0,3.2-3.66,3.2-3.81,0-0.12-0.1-0.22-0.2-0.22-0.3,0-0.3,0.07-0.4,0.5-0.6,2.04-1.5,3.03-2.5,3.03-0.3,0-0.6-0.025-0.6-0.821,0-0.62,0.2-1.37,0.4-1.72,0.5-1.36,1.5-4.15,1.5-5.57,0-1.49-0.9-2.64-2.74-2.64-2.22,0-3.39,1.6-3.84,2.22-0.07-1.42-1.09-2.22-2.19-2.22-0.79,0-1.34,0.5-1.76,1.35-0.45,0.89-0.798,2.39-0.798,2.48s0.099,0.23,0.273,0.23c0.195,0,0.225-0.03,0.375-0.6,0.4-1.52,0.84-2.96,1.84-2.96,0.57,0,0.77,0.4,0.77,1.17,0,0.55-0.25,1.52-0.42,2.29l-0.7,2.69c-0.1,0.47-0.37,1.59-0.5,2.04-0.17,0.64-0.44,1.81-0.44,1.94,0,0.348,0.27,0.622,0.64,0.622,0.3,0,0.65-0.15,0.85-0.523,0.05-0.124,0.27-0.996,0.4-1.5l0.54-2.24,0.83-3.28z"/>\n<path id="g2-120" d="M11.8-10.2c-0.8,0.2-1.1,0.8-1.1,1.27,0,0.6,0.5,0.79,0.8,0.79,0.8,0,1.3-0.64,1.3-1.31,0-1.05-1.2-1.55-2.3-1.55-1.47,0-2.31,1.52-2.54,1.99-0.57-1.89-2.11-1.99-2.56-1.99-2.54,0-3.88,3.29-3.88,3.83,0,0.1,0.1,0.23,0.27,0.23,0.2,0,0.25-0.15,0.3-0.25,0.85-2.76,2.51-3.31,3.23-3.31,1.12,0,1.35,1.07,1.35,1.67,0,0.54-0.15,1.12-0.45,2.31l-0.85,3.41c-0.37,1.49-1.09,2.86-2.41,2.86-0.12,0-0.75,0-1.27-0.323,0.9-0.174,1.1-0.918,1.1-1.22,0-0.5-0.38-0.8-0.85-0.8-0.6,0-1.24,0.52-1.24,1.32,0,1.05,1.17,1.52,2.24,1.52,1.19,0,2.04-0.946,2.56-1.97,0.4,1.47,1.64,1.97,2.56,1.97,2.54,0,3.84-3.26,3.84-3.81,0-0.12-0.1-0.22-0.2-0.22-0.2,0-0.3,0.12-0.3,0.32-0.7,2.19-2.14,3.21-3.26,3.21-0.88,0-1.35-0.647-1.35-1.67,0-0.54,0.1-0.94,0.5-2.58l0.87-3.39c0.37-1.49,1.22-2.61,2.34-2.61,0.1,0,0.8,0,1.3,0.3z"/>\n<path id="g4-0" d="M16.4-5.72c0.4,0,0.9,0,0.9-0.5s-0.5-0.5-0.9-0.5h-13.5c-0.426,0-0.866,0-0.866,0.5s0.44,0.5,0.87,0.5h13.5z"/>\n<use id="g3-105" xlink:href="#g2-105" transform="scale(0.833601)"/>\n<use id="g5-50" xlink:href="#g1-50" transform="scale(0.833601)"/>\n</defs>\n<g transform="matrix(1.12578 0 0 1.12578 -63.986 -62.1445)">\n<use y="55.9903" x="56.6248" xlink:href="#g0-114"/>\n<rect y="55" width="122" x="81.5" height="0.995"/>\n<use y="61.8549" x="82.7049" xlink:href="#g0-80"/>\n<use y="80.515" x="108.967" xlink:href="#g1-40"/>\n<use y="80.515" x="117.778" xlink:href="#g2-120"/>\n<use y="85.5422" x="131.622" xlink:href="#g3-105"/>\n<use y="80.515" x="144.578" xlink:href="#g4-0"/>\n<use y="80.5134" x="171.352" xlink:href="#g1-22"/>\n<use y="80.515" x="169.458" xlink:href="#g2-120"/>\n<use y="80.515" x="183.302" xlink:href="#g1-41"/>\n<use y="73.3275" x="192.113" xlink:href="#g5-50"/>\n<rect y="90.6" width="119" x="82.7" height="0.995"/>\n<use y="114.413" x="135.144" xlink:href="#g2-110"/>\n</g>\n</svg>\n</div></div>'
	},
	{
	    message: "Okay, so, if the data is (3, 4, 5, 5, 5, 6, 7), the mean is 5 and the standard deviation is 1.2. Let's try another calculation of the standard deviation with different data.",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "Let's say the data is (1, 2, 3, 4, 5, 6, 7, 8, 9). Looks like the average is 5 again.  What is the standard deviation?",
		    answers: [ 
			{ answer: "&radic;<span style='text-decoration:overline'>(4&times;4 + 3&times;3 + 2&times;2 + 1 + 0 + 1 + 2&times;2 + 3&times;3 + 4&times;4) / 9&nbsp;</span>", isCorrect: true}, 
			{ answer: "&radic;<span style='text-decoration:overline'>60 / 9&nbsp;</span>", isCorrect: true}, 
			{ answer: "2.6", isCorrect: true},
			{ answer: "All of the above", isCorrect: true},
		    ],
		    explanation: "The differences are (4, 3, 2, 1, 0, 1, 2, 3, 4). Squaring those gets (16, 9, 4, 1, 0, 1, 4, 9, 16). Add those up, 60. 60 / 9 is 6.66. Take the square root, and you get 2.6. <p>Even though the average is the same with these two data sets, this new data is much more spread out, and notice that the standard deviation is much bigger, 2.6 instead of 1.2. <p>Because the standard deviation is 2.6, we'd expect most of the data to be between 2.4 - 7.6 (one standard deviation away) and almost all to be between 0 - 10 (two standard deviations away)."
		},
            ],
	},
	{
	    message: "And, finally, we talked about the normal distribution. The charts are normal distributions for an average of 5 and a standard deviation of 1.2 and 2.6, like we just had for the data in the last quiz.  Do you see how different they look from each other?  With a standard deviation of 1.2, all the data is expected to be bunched around 5, and things far away from 5 are very unlikely. With a standard deviation of 2.6, it's almost flat, almost uniform, with data expected very far away from 5.",
	    lessonSection: "Normal Distribution and Standard Deviation",
	    tutorImage: 1,
	    quiz: [	
		{
		    question: "How likely are you to get a value right at the average when the standard deviation is 1.2?",
		    answers: [ 
			{ answer: "16%"}, 
			{ answer: "33%", isCorrect: true}, 
			{ answer: "80%"},
		    ],
		    explanation: "If you look at the first graph, about 33% of the data is expected to be very close to 5. When the standard deviation is only 1.2, you expect most of your data to be very close to the average, between 4-6."
		},
		{
		    question: "How about when the standard deviation is 2.6?",
		    answers: [ 
			{ answer: "16%", isCorrect: true}, 
			{ answer: "33%"}, 
			{ answer: "80%"},
		    ],
		    explanation: "If you look at the second graph, about 16% of the data is expected to be very close to 5.  When the standard deviation is 2.6, the data is a lot more spread out, and a lot of it should be expected to be a lot further away from the average."
		},
            ],
	    chart: '<div style="margin:8px;"><style scoped>\n .bar { fill: steelblue; } \n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin-bottom: 4px;">Standard Deviation = 1.2</div>\n<svg id=svg-1-2-chart width=380 height=200></svg>\n<p>\n<div style="font: 18px sans-serif; margin-bottom: 4px;">Standard Deviation = 2.6</div>\n<svg id=svg-2-6-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 31},\n width = 350 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-1-2-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nvar mean = 5; stddev = 1.2;\nfor (var i = 1; i < 10; i++) {\n var y = (i - mean) / stddev;\n y *= y;\n y /= -2;\n y = Math.pow(Math.E, y);\n y /= stddev * Math.sqrt(2 * Math.PI);\n var d = {x: i, y: y};\n data.push(d);\n}\n\nvar freqSum = d3.sum(data, \n function(d) {return d.y;});\ndata.forEach(function(d) {\n d.y /= freqSum;\n});\n\nvar barWidth = width / data.length;\n\nvar xScale = d3.scale.ordinal()\n .rangeRoundBands([0, width], 0.1);\n\nvar yScale = d3.scale.linear()\n .range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nyScale.domain([0, 0.351]);\n\n\nsvg.selectAll(".bar")\n .data(data)\n .enter().append("rect")\n .attr("class", "bar")\n .attr("x", function(d) { \n return xScale(d.x); })\n .attr("width", xScale.rangeBand())\n .attr("y", function(d) { \n return yScale(d.y); })\n .attr("height", function(d) { \n return height - yScale(d.y); });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\n\nvar svg = d3.select("#svg-2-6-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar data = [];\nvar mean = 5; stddev = 2.6;\nfor (var i = 1; i < 10; i++) {\n var y = (i - mean) / stddev;\n y *= y;\n y /= -2;\n y = Math.pow(Math.E, y);\n y /= stddev * Math.sqrt(2 * Math.PI);\n var d = {x: i, y: y};\n data.push(d);\n}\n\nvar freqSum = d3.sum(data, \n function(d) {return d.y;});\ndata.forEach(function(d) {\n d.y /= freqSum;\n});\n\nvar barWidth = width / data.length;\n\nvar xScale = d3.scale.ordinal()\n .rangeRoundBands([0, width], 0.1);\n\nvar yScale = d3.scale.linear()\n .range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain(\n data.map(\n function(d) {\n return d.x;\n }\n ));\nyScale.domain([0, 0.351]);\n\n\nsvg.selectAll(".bar")\n .data(data)\n .enter().append("rect")\n .attr("class", "bar")\n .attr("x", function(d) { \n return xScale(d.x); })\n .attr("width", xScale.rangeBand())\n .attr("y", function(d) { \n return yScale(d.y); })\n .attr("height", function(d) { \n return height - yScale(d.y); });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\n</script></div>',
	},
	{
	    message: "A lot of real data looks like a normal distribution, including that height data we had earlier.  Standard deviation indicates what values you expect to see in your data and works for most data (anything that is normally distributed, which is a lot).  Almost all of the data should be less than two standard deviations away from the average. Anything three or more standard deviations out from the mean is really unusual.",
	    tutorImage: 6,
	    quiz: [	
		{
		    question: "How likely is it to be less than one standard deviation away (in either direction)?",
		    answers: [ 
			{ answer: "20%"}, 
			{ answer: "68%", isCorrect: true}, 
			{ answer: "95%"},
		    ],
		    explanation: "34% + 34% = 68%.  Standard deviation is a measure of how far you expect anything to be from the norm. You can expect most of the data to be within one standard deviation of the average."
		},
		{
		    question: "How likely is it to be within two standard deviations (in either direction)?",
		    answers: [ 
			{ answer: "20%"}, 
			{ answer: "68%"}, 
			{ answer: "95%", isCorrect: true},
		    ],
		    explanation: "Almost all the data will be within two standard deviations, about 95%.  And, 99.7%, or 997 of 1000, should be within three standard deviations. <p>If you see data three or more standard deviations away from the mean, you should wonder what's going on with it. It could be measurement error or some other problem with your data.",
		},
            ],
	    chart: '<div style="margin: 8px; font: 24px sans-serif;">Likelihood of Distance from Average</div><div style="margin: 8px; font: 14px sans-serif;">&sigma; means standard deviation, and &mu; means average.<div style="margin-top: 4px;">This is the likelihood of being less than 1, between 1 and 2, beween 2 and 3, and more than 3 standard deviations away from the mean.</div></div><div style="margin: 3px;"><svg xmlns="http://www.w3.org/2000/svg" height="220pt" width="290pt" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 504 252"> <defs> <symbol id="glyph0-1" overflow="visible"> <path d="M0.125-3.53v0.65h6.3v-0.65z"/> </symbol> <symbol id="glyph0-2" overflow="visible"> <path d="M7.06-4.95v-1.05h-2.73c-0.94,0-1.6,0.11-2.14,0.34-1.17,0.54-1.83,1.47-1.83,2.58,0,0.78,0.297,1.58,0.861,2.2,0.62,0.719,1.3,1.03,2.25,1.03,0.81,0,1.51-0.25,2.06-0.75,0.55-0.486,0.86-1.18,0.86-1.82,0-0.92-0.69-1.81-1.97-2.54zm-3.2,0c1.03,1.06,1.26,1.51,1.26,2.5,0,1.25-0.59,2.09-1.48,2.09-1.11,0-2.02-1.22-2.02-2.69,0-1.15,0.74-1.9,1.86-1.9z"/> </symbol> <symbol id="glyph0-3" overflow="visible"> <path d="M5.3-6h-1.07l0.02,4.42c-0.44,0.627-0.84,0.877-1.34,0.877-0.71,0-1.11-0.487-1.11-1.33v-3.97h-1.05v5.77c0,0.25-0.047,0.546-0.141,0.906-0.203,0.748-0.218,0.808-0.218,1.1,0,0.5,0.25,0.85,0.609,0.85,0.34,0,0.58-0.35,0.58-0.89,0-0.25-0.03-0.4-0.22-1.09-0.13-0.438-0.14-0.563-0.14-0.891v-0.141c0.5,0.422,0.76,0.547,1.19,0.547,0.59,0,1.2-0.375,1.84-1.11,0.09,0.375,0.16,0.515,0.28,0.703,0.17,0.25,0.5,0.406,0.85,0.406,0.74,0,1.26-0.531,1.42-1.46l-0.32-0.01c-0.04,0.451-0.29,0.826-0.57,0.826-0.36,0-0.61-0.438-0.61-1.1z"/> </symbol> <symbol id="glyph1-1" overflow="visible"> <path d="M2.66-3.91h0.57c1.16,0,1.75,0.52,1.75,1.55,0,1.06-0.65,1.7-1.75,1.7-1.15,0-1.71-0.574-1.79-1.81h-1.05c0.047,0.69,0.156,1.13,0.359,1.52,0.44,0.812,1.28,1.23,2.44,1.23,1.75,0,2.89-1.05,2.89-2.66,0-1.07-0.42-1.68-1.46-2.03,0.8-0.31,1.19-0.9,1.19-1.76,0-1.45-0.97-2.35-2.58-2.35-1.71,0-2.64,0.94-2.67,2.75h1.06c0-0.51,0.07-0.79,0.19-1.06,0.24-0.47,0.77-0.75,1.42-0.75,0.94,0,1.5,0.55,1.5,1.46,0,0.59-0.2,0.95-0.67,1.14-0.29,0.12-0.67,0.17-1.4,0.18z"/> </symbol> <symbol id="glyph1-2" overflow="visible"> <path d="M6.08-1.05h-4.49c0.11-0.68,0.5-1.14,1.53-1.75l1.21-0.64c1.19-0.65,1.79-1.53,1.79-2.58,0-0.7-0.28-1.36-0.78-1.82s-1.12-0.68-1.93-0.68c-1.08,0-1.88,0.4-2.35,1.11-0.31,0.46-0.435,0.99-0.466,1.85h1.07c0.03-0.56,0.11-0.92,0.25-1.19,0.28-0.52,0.82-0.83,1.47-0.83,0.95,0,1.67,0.67,1.67,1.6,0,0.67-0.39,1.25-1.14,1.67l-1.11,0.62c-1.78,1.02-2.3,1.81-2.39,3.69h5.67z"/> </symbol> <symbol id="glyph1-3" overflow="visible"> <path d="M3.11-6.06v6.06h1.05v-8.52h-0.69c-0.38,1.32-0.61,1.5-2.25,1.71v0.75z"/> </symbol> <symbol id="glyph1-4" overflow="visible"> <path d="M3.92-2.05v2.05h1.06v-2.05h1.25v-0.93h-1.25v-5.54h-0.78l-3.86,5.36v1.11zm0-0.93h-2.65l2.65-3.72z"/> </symbol> <symbol id="glyph1-5" overflow="visible"> <path d="M2.3-1.25h-1.25v1.25h1.25z"/> </symbol> <symbol id="glyph1-6" overflow="visible"> <path d="M2.39-8.22c-1.12,0-2.05,0.92-2.05,2.05,0,1.12,0.926,2.06,2.07,2.06,1.11,0,2.03-0.94,2.03-2.03,0-1.17-0.89-2.08-2.05-2.08zm0,0.84c0.69,0,1.22,0.54,1.22,1.22,0,0.66-0.55,1.21-1.2,1.21-0.68,0-1.24-0.57-1.24-1.22,0-0.67,0.56-1.21,1.22-1.21zm4.92-1.14l-4.75,8.75h0.8l4.73-8.75zm0.94,4.66c-1.11,0-2.03,0.92-2.03,2.03,0,1.13,0.92,2.06,2.05,2.06,1.11,0,2.03-0.937,2.03-2.03,0-1.15-0.89-2.06-2.05-2.06zm0,0.83c0.69,0,1.23,0.55,1.23,1.23,0,0.64-0.56,1.19-1.21,1.19-0.68,0-1.22-0.551-1.22-1.22,0-0.65,0.54-1.2,1.2-1.2z"/> </symbol> <symbol id="glyph1-7" overflow="visible"> <path d="M5.97-6.28c-0.2-1.41-1.11-2.24-2.41-2.24-0.94,0-1.78,0.47-2.28,1.22-0.53,0.83-0.764,1.88-0.764,3.42,0,1.43,0.218,2.35,0.714,3.1,0.46,0.687,1.21,1.06,2.15,1.06,1.6,0,2.78-1.2,2.78-2.87,0-1.58-1.08-2.71-2.61-2.71-0.83,0-1.5,0.33-1.96,0.96,0.02-2.08,0.69-3.24,1.89-3.24,0.75,0,1.27,0.47,1.44,1.3zm-2.55,1.92c1.02,0,1.66,0.72,1.66,1.84,0,1.08-0.72,1.86-1.69,1.86-0.98,0-1.73-0.814-1.73-1.9,0-1.06,0.72-1.8,1.76-1.8z"/> </symbol> <symbol id="glyph1-8" overflow="visible"> <path d="M3.3-8.52c-0.78,0-1.52,0.36-1.96,0.94-0.543,0.75-0.824,1.89-0.824,3.47,0,2.86,0.954,4.39,2.78,4.39,1.79,0,2.78-1.53,2.78-4.33,0-1.65-0.27-2.75-0.83-3.53-0.44-0.59-1.14-0.94-1.95-0.94zm0,0.94c1.14,0,1.7,1.16,1.7,3.44,0,2.41-0.55,3.55-1.72,3.55-1.12,0-1.69-1.19-1.69-3.52s0.57-3.47,1.71-3.47z"/> </symbol> <clipPath id="clip1"> <path d="M28.8,220h60.2v4h-60.2z"/> </clipPath> <clipPath id="clip2"> <path d="M28.8,222h1.2v2h-1.2z"/> </clipPath> <clipPath id="clip3"> <path d="M28.8,0h475v224h-475z"/> </clipPath> </defs> <rect height="252" width="504" y="14.5" x="28.5" fill="#FFF"/> <path stroke-linejoin="round" d="M28.8,0v223h475" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#2070B4" d="M266,223v-222l6,1.11,6,3.3,6,5.4,6,7.3,6,9,6,10.6,6,11.7,6,12.6,6,13.1,6,13.5v135z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M266,223v-222" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#2070B4" d="M207,223v-135l6-13.5,6-13.1,6-12.6,6-11.7,6-10.6,6-9,6-7.3,6-5.4,5-3.3,6-1.11v222z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M207,223v-135" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#6AADD6" d="M326,223v-135l6,13.8,6,13,6,13,6,12,6,11,5,10,6,10,6,8,6,8,6,6v30z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M326,223v-135" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#6AADD6" d="M148,223v-30l6-6,5-8,6-8,6-10,6-10,6-11,6-12,6-13,6-13,6-13.8v135z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M148,223v-30" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#BCD6E6" d="M385,223v-30l6,6,6,4,6,4,6,4,6,2,6,3,6,1,6,2,6,1,6,1v2z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M385,223v-30" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#BCD6E6" d="M88.2,223v-2l5.9-1,5.9-1,6-2,6-1,6-3,6-2,6-4,6-4,6-4,6-6v30z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M88.2,223v-2" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#EEF3FF" d="M445,223v-2h6l5,1h6l6,1h36z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M445,223v-2" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g clip-rule="nonzero" clip-path="url(#clip1)"> <path fill="#EEF3FF" d="M28.8,223h35.6l6-1h5.9l6-1h5.9v2z" fill-rule="nonzero"/> </g> <g clip-rule="nonzero" clip-path="url(#clip2)"> <path stroke-linejoin="round" d="M28.8,223" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> </g> <g clip-rule="nonzero" clip-path="url(#clip3)"> <path stroke-linejoin="round" d="M28.8,223h35.6l6-1h5.9l6-1h5.9l5.9-1,5.9-1,6-2,6-1,6-3,6-2,6-4,6-4,6-4,6-6,6-6,5-8,6-8,6-10,6-10,6-11,6-12,6-13,6-13,12-27.3,6-13.1,6-12.6,6-11.7,6-10.6,6-9,6-7.3,6-5.4,5-3.3,6-1.11,6,1.11,6,3.3,6,5.4,6,7.3,6,9,6,10.6,6,11.7,6,12.6,6,13.1,6,13.5,6,13.8,6,13,6,13,6,12,6,11,5,10,6,10,6,8,6,8,6,6,6,6,6,4,6,4,6,4,6,2,6,3,6,1,6,2,6,1,6,1h6l5,1h6l6,1h36" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> </g> <path stroke-linejoin="round" d="M88.2,223h357" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M88.2,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M148,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M207,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M266,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M326,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M385,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M445,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g fill="#000"> <use y="247.241211" x="76.367188" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="85.035156" xlink:href="#glyph1-1"/> </g> <g fill="#000"> <use y="247.241211" x="92.035156" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.241211" x="135.765625" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="144.433594" xlink:href="#glyph1-2"/> </g> <g fill="#000"> <use y="247.241211" x="151.433594" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.241211" x="195.167969" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="203.832031" xlink:href="#glyph1-3"/> </g> <g fill="#000"> <use y="247.241211" x="210.832031" xlink:href="#glyph0-2"/> </g> <g fill="#000" transform="matrix(1.6461421,0,0,1.3000468,-172.28713,-71.782653)"> <use xlink:href="#glyph0-3" height="252" width="504" y="245.24121" x="262.89844"/> </g> <g fill="#000"> <use y="247.556641" x="318.300781" xlink:href="#glyph1-3"/> </g> <g fill="#000"> <use y="247.241211" x="325.300781" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.556641" x="377.699219" xlink:href="#glyph1-2"/> </g> <g fill="#000"> <use y="247.241211" x="384.699219" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.556641" x="437.101562" xlink:href="#glyph1-1"/> </g> <g fill="#000"> <use y="247.241211" x="444.101562" xlink:href="#glyph0-2"/> </g> <g fill="#FFF" transform="matrix(1.4980073,0,0,1.6470508,-148.06928,-85.717169)"> <use xlink:href="#glyph1-1" height="252" width="504" y="137.35742" x="278.60156"/> <use xlink:href="#glyph1-4" height="252" width="504" y="137.35742" x="285.27344"/> <use xlink:href="#glyph1-5" height="252" width="504" y="137.35742" x="291.94531"/> <use xlink:href="#glyph1-3" height="252" width="504" y="137.35742" x="295.28125"/> <use xlink:href="#glyph1-6" height="252" width="504" y="137.35742" x="301.95312"/> </g> <g fill="#FFF" transform="matrix(1.3192204,0,0,1.5294052,-113.83873,-99.666234)"> <use xlink:href="#glyph1-3" height="252" width="504" y="198.736" x="338"/> <use xlink:href="#glyph1-1" height="252" width="504" y="198.736" x="344.67188"/> <use xlink:href="#glyph1-5" height="252" width="504" y="198.736" x="351.34375"/> <use xlink:href="#glyph1-7" height="252" width="504" y="198.736" x="354.67969"/> <use xlink:href="#glyph1-6" height="252" width="504" y="198.736" x="361.35156"/> </g> <g fill="#000" transform="matrix(1.1948531,0,0,1.4141125,-79.796974,-84.704421)"> <use xlink:href="#glyph1-2" height="252" width="504" y="204.31445" x="400.89844"/> <use xlink:href="#glyph1-5" height="252" width="504" y="204.31445" x="407.57031"/> <use xlink:href="#glyph1-3" height="252" width="504" y="204.31445" x="410.90625"/> <use xlink:href="#glyph1-6" height="252" width="504" y="204.31445" x="417.57812"/> </g> <g fill="#000" transform="matrix(1.2738458,0,0,1.3529368,-129.29857,-76.665386)"> <use xlink:href="#glyph1-8" height="252" width="504" y="215.47461" x="460.30078"/> <use xlink:href="#glyph1-5" height="252" width="504" y="215.47461" x="466.97266"/> <use xlink:href="#glyph1-3" height="252" width="504" y="215.47461" x="470.30859"/> <use xlink:href="#glyph1-6" height="252" width="504" y="215.47461" x="476.98047"/> </g> <path stroke-linejoin="round" d="M118,213v-7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M58.5,223v-5" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M415,213v-7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M474,223v-5" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g fill="#FFF" transform="matrix(1.4980073,0,0,1.6470508,-206.28265,-85.988514)"> <use xlink:href="#glyph1-1" height="252" width="504" y="137.35742" x="278.60156"/> <use xlink:href="#glyph1-4" height="252" width="504" y="137.35742" x="285.27344"/> <use xlink:href="#glyph1-5" height="252" width="504" y="137.35742" x="291.94531"/> <use xlink:href="#glyph1-3" height="252" width="504" y="137.35742" x="295.28125"/> <use xlink:href="#glyph1-6" height="252" width="504" y="137.35742" x="301.95312"/> </g> <g fill="#000" transform="matrix(1.1948531,0,0,1.4141125,-377.40546,-84.849677)"> <use xlink:href="#glyph1-2" height="252" width="504" y="204.31445" x="400.89844"/> <use xlink:href="#glyph1-5" height="252" width="504" y="204.31445" x="407.57031"/> <use xlink:href="#glyph1-3" height="252" width="504" y="204.31445" x="410.90625"/> <use xlink:href="#glyph1-6" height="252" width="504" y="204.31445" x="417.57812"/> </g> <g fill="#000" transform="matrix(1.2738458,0,0,1.3529368,-544.85381,-76.395963)"> <use xlink:href="#glyph1-8" height="252" width="504" y="215.47461" x="460.30078"/> <use xlink:href="#glyph1-5" height="252" width="504" y="215.47461" x="466.97266"/> <use xlink:href="#glyph1-3" height="252" width="504" y="215.47461" x="470.30859"/> <use xlink:href="#glyph1-6" height="252" width="504" y="215.47461" x="476.98047"/> </g> <g fill="#FFF" transform="matrix(1.3192204,0,0,1.5294052,-289.27682,-99.481853)"> <use xlink:href="#glyph1-3" height="252" width="504" y="198.736" x="338"/> <use xlink:href="#glyph1-1" height="252" width="504" y="198.736" x="344.67188"/> <use xlink:href="#glyph1-5" height="252" width="504" y="198.736" x="351.34375"/> <use xlink:href="#glyph1-7" height="252" width="504" y="198.736" x="354.67969"/> <use xlink:href="#glyph1-6" height="252" width="504" y="198.736" x="361.35156"/> </g> </svg> </div>',
	},
	{
	    message: "Let's go back to answering questions.  Let's try something that looks impossible.  How long will you live?", 
	    lessonSection: "How Long Will You Live?",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What does the question mean?",
		    answers: [ 
			{ answer: "Average lifespan in the world"}, 
			{ answer: "Average lifespan for people like me", isCorrect: true}, 
			{ answer: "Predict the exact date you will die"},
		    ],
		    explanation: "Statistics isn't magical.  The best we can do here is look at people like you and come up with how long people like you usually live (mean and standard deviation).  That gives us a pretty good range for how long you are likely to live."
		},
            ],
	    chart: '<div style="margin-top:40px; margin-left:40px;"><svg xmlns="http://www.w3.org/2000/svg" width=350px height=400px viewBox="100 0 250 700">\n<path d="m180,223c0.0119,0.325-2.08,0.756-6.13,1.07-4.05,0.311-10.1,0.5-17.8-0.0491-7.76-0.549-17.3-1.84-28-4.83-5.35-1.5-11-3.43-16.8-5.94s-11.8-5.61-17.7-9.47c-5.47-3.56-10.9-7.73-16-12.5-5.18-4.8-10.1-10.2-14.8-16.3-4.62-6.03-8.91-12.7-12.7-19.8-3.8-7.17-7.12-14.9-9.82-23-4.33-12.9-7.85-26.8-8.97-41.7-0.818-10.7-0.253-22,2.93-33.1,2.56-8.85,6.95-17.4,13.3-24.7,5.89-6.74,13.2-12.2,21.3-16.1,8.4-4.11,17.5-6.73,26.7-8.18,3.27-0.516,6.57-0.896,9.88-1.15,6.76-0.518,13.5-0.505,20.1-0.0929,22.1,1.37,43.1,6.91,62.2,14.9,10,4.15,19.6,9,28.4,14.6,8.86,5.56,17,11.8,24.3,18.7,7.02,6.66,13.2,14,18,22,4.71,7.8,8.04,16.2,9.55,24.8,1.61,9.2,1.01,18.4-1.24,26.7-1.44,5.27-3.49,10.2-5.88,14.7-2.4,4.5-5.15,8.61-8.06,12.4-4.46,5.74-9.24,10.7-14,15-4.78,4.32-9.54,8.04-14.1,11.3-6.56,4.7-12.7,8.47-18.1,11.6-5.43,3.09-10.2,5.49-14.1,7.34s-6.95,3.14-9.04,3.93c-2.09,0.791-3.23,1.08-3.34,0.865-0.106-0.216,0.823-0.93,2.7-2.13s4.7-2.89,8.36-5.11c3.65-2.22,8.14-4.96,13.3-8.35,5.13-3.39,10.9-7.42,17.1-12.3,4.27-3.39,8.72-7.18,13.1-11.5,4.41-4.31,8.78-9.14,12.8-14.7,2.58-3.58,5-7.45,7.07-11.6s3.79-8.58,4.92-13.3c1.79-7.33,2.11-15.4,0.548-23.3-1.45-7.44-4.57-14.8-8.9-21.8-4.45-7.13-10.2-13.8-16.8-19.9-6.87-6.37-14.6-12.1-23-17.3-8.44-5.15-17.6-9.68-27.2-13.6-18.3-7.44-38.3-12.6-59.1-13.9-6.22-0.368-12.5-0.379-18.7,0.0955-3.06,0.233-6.09,0.581-9.08,1.06-8.44,1.34-16.6,3.65-23.9,7.24-7.02,3.43-13.4,8.04-18.3,13.7-5.32,6.02-9.11,13.3-11.4,20.9-2.9,9.6-3.46,19.8-2.86,29.7,0.852,13.8,4.05,27.1,8,39.6,2.44,7.68,5.45,15,8.91,21.8,3.45,6.84,7.35,13.2,11.6,19,4.22,5.79,8.76,11,13.5,15.7,4.75,4.65,9.7,8.72,14.8,12.2,5.49,3.83,11,6.98,16.5,9.59,5.44,2.61,10.8,4.68,15.8,6.36,10.2,3.35,19.3,5.13,26.8,6.23,7.52,1.1,13.4,1.51,17.4,1.82,4.01,0.308,6.12,0.516,6.13,0.841z" fill-rule="evenodd" fill="#000"/>\n<path d="m177,208c0.444-0.115,1.62,2.6,3.37,7.82,1.75,5.21,4.07,12.9,6.7,22.8,2.63,9.89,5.58,22,8.5,35.9s5.8,29.8,8.25,47.1c2.46,17.4,4.49,36.5,5.5,56.6,1,20.2,0.97,41.5-0.748,63.4-0.0606,0.773-0.123,1.55-0.188,2.32-1.79,21.5-5.2,42.3-10.2,61.5-5,19.3-11.6,37-19.3,52.7-7.83,16-16.9,29.6-25.8,40.9-8.98,11.3-17.9,20.2-25.6,27-7.76,6.82-14.4,11.6-19,14.5-4.65,2.99-7.35,4.26-7.61,3.88-0.262-0.377,1.92-2.38,6.01-6s10.1-8.89,17.2-16.1c7.08-7.2,15.3-16.3,23.5-27.7,8.23-11.3,16.5-24.8,23.7-40.4,7.07-15.3,13.1-32.6,17.7-51.3,4.62-18.7,7.81-39,9.57-60,0.0632-0.755,0.125-1.51,0.184-2.27,1.69-21.5,1.84-42.4,1.08-62.2-0.758-19.9-2.42-38.6-4.42-56-1.99-17.2-4.33-33-6.64-46.9-2.3-13.9-4.57-26.1-6.47-36.1s-3.44-17.9-4.36-23.3c-0.926-5.41-1.24-8.35-0.796-8.46z" fill-rule="evenodd" fill="#000"/>\n<path d="m4.09,209c0.25-0.146,1,0.606,2.28,2.12,1.27,1.52,3.07,3.79,5.5,6.64s5.49,6.26,9.29,10.1c3.79,3.79,8.32,7.96,13.5,12.4,0.000002,0.00001,0.000005,0.00001,0.000007,0.00001,5.54,4.64,11.9,9.52,19,14.4,7.13,4.93,15.1,9.92,23.7,14.9,15.2,8.67,32.6,17.1,51.7,24.6,16,6.3,33.2,12,51.3,16.5,1.62,0.403,3.24,0.795,4.86,1.17,19.2,4.51,38.1,7.37,56,8.32,9.26,0.488,18.3,0.493,26.8-0.0382,8.6-0.531,16.8-1.6,24.5-3.18,8.54-1.75,16.5-4.13,23.6-7.01,7.12-2.87,13.4-6.24,18.8-9.85,0-0.00001,0.00001-0.00001,0.00001-0.00001,7.01-4.65,12.6-9.66,16.9-14.3,5.03-5.38,8.38-10.2,10.7-13.4,2.28-3.28,3.52-5.06,3.89-4.88,0.188,0.0899,0.146,0.662-0.139,1.69-0.285,1.02-0.816,2.5-1.64,4.37-0.829,1.87-1.96,4.14-3.47,6.72s-3.41,5.47-5.79,8.53c-4.07,5.24-9.57,11-16.8,16.4h-0.00001c-5.57,4.18-12.1,8.11-19.5,11.5-7.43,3.4-15.8,6.25-24.7,8.36-8.07,1.91-16.7,3.27-25.6,4.03-8.98,0.768-18.3,0.945-27.9,0.568-18.6-0.719-38.1-3.5-57.9-8.12-1.66-0.389-3.33-0.79-4.99-1.2-18.6-4.62-36.2-10.5-52.5-17.2-20-7-37.6-16-52.9-26-8.7-5-16.6-11-23.7-16s-13.4-11-18.8-16c-0.000002,0-0.000005-0.00001-0.000007-0.00001-5.1-4.82-9.45-9.46-13-13.7s-6.32-8.09-8.4-11.3c-2.07-3.24-3.46-5.87-4.29-7.7-0.825-1.83-1.09-2.88-0.841-3.02z" fill-rule="evenodd" fill="#000"/>\n<path d="m207,466c0.397-0.231,1.67,1.1,3.78,3.72s5.06,6.51,8.95,11.3c3.89,4.82,8.72,10.6,14.6,16.8,5.85,6.27,12.7,13.1,20.6,20,7.88,6.92,16.8,14,26.5,20.9,9.78,6.95,20.4,13.8,31.8,20.3,0.114,0.0659,0.228,0.132,0.342,0.198,17.1,9.84,33.9,18.1,49.5,25.1,15.6,6.97,30,12.6,42.2,17.3,12.2,4.62,22.1,8.2,28.9,10.8,6.83,2.64,10.5,4.34,10.4,5-0.186,0.664-4.26,0.23-11.5-1.27-7.2-1.5-17.5-4.06-30.1-7.87s-27.4-8.87-43.5-15.5c-16.1-6.62-33.4-14.8-50.9-24.9-0.117-0.0673-0.234-0.135-0.351-0.202-11.6-6.7-22.5-13.8-32.4-21.2-9.92-7.35-18.9-14.9-26.7-22.4-7.85-7.48-14.6-14.9-20.1-21.7-5.56-6.85-9.98-13.2-13.3-18.5-3.37-5.36-5.7-9.77-7.11-12.9-1.41-3.1-1.91-4.88-1.52-5.11z" fill-rule="evenodd" fill="#000"/>\n<path d="m85.9,60.8c0.425-0.543,1.64-0.448,3.45,0.302s4.2,2.17,6.89,4.26,5.66,4.87,8.63,8.21c2.97,3.35,5.94,7.27,8.72,11.5,0.157,0.24,0.313,0.479,0.467,0.718,2.72,4.18,5.02,8.28,6.97,12,1.95,3.77,3.54,7.21,4.77,10.2,2.47,5.89,3.52,9.81,2.37,10.5-0.574,0.365-1.65-0.113-3.1-1.32-1.44-1.2-3.25-3.13-5.28-5.64-2.02-2.51-4.26-5.6-6.63-9.06-2.36-3.46-4.85-7.29-7.47-11.3-0.151-0.228-0.303-0.456-0.455-0.684-2.69-4.05-5.24-7.88-7.61-11.3s-4.55-6.44-6.42-8.99c-1.86-2.55-3.39-4.63-4.36-6.23-0.968-1.6-1.36-2.72-0.937-3.27z" fill-rule="evenodd" fill="#000"/>\n<path d="m90.2,113c-0.67-0.164-1.13-1.12-1.27-2.75-0.139-1.63,0.0542-3.93,0.749-6.67s1.9-5.91,3.7-9.19,4.19-6.67,7.09-9.83c0.538-0.585,1.08-1.15,1.63-1.7v-0.000001c2.81-2.81,5.66-5.13,8.27-7.08s5-3.54,7.05-4.8c2.04-1.27,3.76-2.21,5.09-2.74,1.33-0.533,2.28-0.648,2.77-0.2,0.482,0.448,0.44,1.43-0.112,2.81s-1.62,3.16-3.14,5.16-3.48,4.21-5.69,6.52-4.67,4.73-7.08,7.29v0.000002c-0.464,0.494-0.929,0.997-1.39,1.51-2.51,2.76-4.77,5.49-6.73,8.05-1.95,2.56-3.6,4.96-4.99,7.02s-2.52,3.79-3.49,4.97c-0.969,1.18-1.78,1.82-2.45,1.65z" fill-rule="evenodd" fill="#000"/>\n<path d="m162,64.7c0.193-0.419,0.707-0.68,1.51-0.747,0.808-0.0667,1.91,0.0643,3.23,0.448s2.86,1.02,4.51,1.95c1.65,0.924,3.4,2.13,5.14,3.6,3.45,2.89,6.92,6.78,9.97,11.2,0.174,0.253,0.346,0.506,0.516,0.758,3.17,4.71,5.55,9.33,7.29,13.3,1.56,3.54,2.58,6.52,3.1,8.73,0.525,2.22,0.531,3.69-0.194,4.17-0.725,0.476-2.11-0.13-3.89-1.66s-3.91-4.01-6.2-7.02c-2.58-3.4-5.38-7.54-8.37-11.9-0.161-0.232-0.322-0.465-0.484-0.699-2.83-4.09-5.47-7.77-7.9-10.8-1.23-1.53-2.37-2.92-3.41-4.14s-1.97-2.28-2.74-3.2c-0.773-0.918-1.39-1.7-1.76-2.36-0.375-0.663-0.511-1.21-0.317-1.63z" fill-rule="evenodd" fill="#000"/>\n<path d="m166,112c-0.639-0.261-0.942-1.28-0.862-2.93,0.0806-1.64,0.553-3.91,1.48-6.56,0.928-2.66,2.32-5.71,4.15-8.91s4.1-6.55,6.68-9.83c0.286-0.365,0.573-0.725,0.861-1.08,0-0.000001,0.00001-0.000001,0.00001-0.000002,2.53-3.14,5.09-5.93,7.51-8.35s4.68-4.46,6.67-6.1c3.98-3.26,6.88-4.9,7.92-4.05,1.04,0.849-0.0137,4.08-2.66,8.55-1.32,2.24-3.04,4.78-5.03,7.5-1.98,2.72-4.23,5.63-6.58,8.64v0.000002c-0.268,0.347-0.538,0.695-0.81,1.04-2.45,3.15-4.79,6.11-6.9,8.8s-3.99,5.11-5.61,7.15-3,3.69-4.13,4.78c-1.14,1.09-2.05,1.61-2.69,1.35z" fill-rule="evenodd" fill="#000"/>\n</svg></div>',
	},
	{
	    message: "What might matter for trying to guess how long you will live?", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "What might matter for how long you will live?",
		    answers: [ 
			{ answer: "Age" },
			{ answer: "Gender" },
			{ answer: "Genetics" },
			{ answer: "What you eat" },
			{ answer: "Exercise" }, 
			{ answer: "Where you live" },
			{ answer: "Risks like smoking" },
			{ answer: "All of these", isCorrect: true}, 
		    ],
		    explanation: "All of these and more! <p>You'll have to figure out what you mean by people like you.  You'll have to figure out what is important to include in the meaning of people like you, as some things will impact life span (like smoking) and other things won't matter (like whether you like pretzels).  And, lastly, some data might be easier to get (like smoking risk) than others (like the health risks from eating cheesy poofs).",
		},
            ],
	},
	{
	    message: "Often, when something looks hard to answer, it's best to start with a simpler version, then work from it to make it more complicated.  Let's answer a simpler question.  If you live in the US, how long are you likely to live?",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "The chart shows the probability of dying at specific ages in the US. What's the likelihood of dying near 30 years old?",
		    answers: [ 
			{ answer: "less than 1%", isCorrect: true },
			{ answer: "5%"}, 
			{ answer: "10%"},
		    ],
		    explanation: "It's very rare, less than 1%. Most people die much older than that. The peak of the distribution is near 85, and most of the likely ages are between 65 and 95."
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .both { fill: #98B; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of adult dying near age</div>\n<svg id=svg-mortality-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-mortality-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawData = [ 507, 653, 987, 1530, 2258, 3145, 4465, 6374, 8949, 12061, 15597, 17750, 14706, 6904, 2097 ];\nvar data = [];\nvar startAge = 30;\nvar total = d3.sum(rawData);\nrawData.forEach(function(x, i) {\n var row = { age: i * 5 + startAge,\n percent: x / total};\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.map( function(d) { return d.age; } ));\nyScale.domain([0, 0.013 + d3.max(data, function(d) { return d.percent; })]);\n\nvar percentiles = svg.selectAll(".percentiles")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; })\n .append("rect")\n .attr("class", "bar both")\n .attr("width", xScale.rangeBand())\n .attr("x", 0)\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n</script></div>',
	},
	{
	    message: "Let's try a harder question using this data, one that requires a little work to answer.",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What's the likelihood of living to at least 80?",
		    answers: [ 
			{ answer: "15%"}, 
			{ answer: "55%", isCorrect: true}, 
			{ answer: "95%"},
		    ],
		    explanation: "It's pretty good.  You need to add up everything for age 80 and above, which is roughly 16 + 18 + 15 + 6 + 2 = 57%. <p>Turns out the average life expectancy in the US is 79, so this is about right.  The average life expectancy is lower because we only asked about adults, and people sometimes die very young, which makes the distribution <i>long-tailed</i> and pulls the average lower. This means that even though life expectancy in the US is less than 80, the majority of teens and adults probably can expect to live to be 80 or older."
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .both { fill: #98B; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of adult dying near age</div>\n<svg id=svg-mortality-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-mortality-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawData = [ 507, 653, 987, 1530, 2258, 3145, 4465, 6374, 8949, 12061, 15597, 17750, 14706, 6904, 2097 ];\nvar data = [];\nvar startAge = 30;\nvar total = d3.sum(rawData);\nrawData.forEach(function(x, i) {\n var row = { age: i * 5 + startAge,\n percent: x / total};\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.map( function(d) { return d.age; } ));\nyScale.domain([0, 0.013 + d3.max(data, function(d) { return d.percent; })]);\n\nvar percentiles = svg.selectAll(".percentiles")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; })\n .append("rect")\n .attr("class", "bar both")\n .attr("width", xScale.rangeBand())\n .attr("x", 0)\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n</script></div>',
	},
	{
	    message: "Many things influence how long you are likely to live. As you can see, one is gender. Women live a lot longer than men. If you are trying to figure out how long you are likely to live, whether you are a woman or a man will make a big difference.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "Women live a lot longer than men. About how much longer?",
		    answers: [ 
			{ answer: "1 year"}, 
			{ answer: "5 years", isCorrect: true}, 
			{ answer: "15 years"},
		    ],
		    explanation: "It's roughly five years. <p>In the bottom chart, you can see that women's mortality peaks a lot later than men's, about five years later. You can also add up everything for 80+ for men and 85+ for women and see they are about equal. It turns out the life expectancy of men is 77 and for women is 82, so that's also a five year difference.",
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped>\n .female { fill: hotpink; }\n .male { fill: steelblue; }\n .both { fill: #98B; }\n .bar:hover { fill: brown; } \n .axis { font: 10px sans-serif; } \n .legend { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .x.axis path { display: none; }\n</style>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of adult dying near age</div>\n<svg id=svg-mortality-chart width=380 height=200></svg>\n<p>\n<div style="font: 18px sans-serif; margin: 8px;">Likelihood of adult dying near age</div>\n<svg id=svg-mortality-by-sex-chart width=380 height=200></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 45},\n width = 380 - margin.left - margin.right,\n height = 200 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-mortality-by-sex-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\n\nvar rawData = {};\nrawData.male = [673, 818, 1191, 1849, 2782, 3883, 5312, 7386, 10052, 13054, 16040, 16646, 12033, 4601, 1071 ];\nrawData.female = [337, 487, 781, 1211, 1736, 2413, 3633, 5386, 7879, 11126, 15328, 19043, 17382, 8963, 2878 ];\nvar sexes = ["Male", "Female"];\nvar data = [];\nvar startAge = 30;\nvar total = d3.sum(rawData.female);\nrawData.female.forEach(function(x, i) {\n var row = { age: i * 5 + startAge,\n sex: "Female",\n percent: x / total};\n data.push(row);\n});\ntotal = d3.sum(rawData.male);\nrawData.male.forEach(function(x, i) {\n var row = { age: i * 5 + startAge,\n sex: "Male",\n percent: x / total};\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar x1Scale = d3.scale.ordinal();\n\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.age; } ));\nx1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]);\nyScale.domain([0, 0.0 + d3.max(data, function(d) { return d.percent; })]);\n\nvar percentiles = svg.selectAll(".percentiles")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; })\n .append("rect")\n .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); })\n .attr("width", x1Scale.rangeBand())\n .attr("x", function(d) { return x1Scale(d.sex); })\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nvar legend = svg.selectAll(".legend")\n .data(sexes)\n .enter().append("g")\n .attr("class", "legend")\n .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; });\nlegend.append("rect")\n .attr("x", 160)\n .attr("width", 8)\n .attr("height", 8)\n .attr("class", function(d) { return d.toLowerCase(); });\nlegend.append("text")\n .attr("x", 150)\n .attr("y", 3)\n .attr("dy", ".35em")\n .style("text-anchor", "end")\n .text(function(d) { return d; });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n\n\nvar svg = d3.select("#svg-mortality-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar rawData = [ 507, 653, 987, 1530, 2258, 3145, 4465, 6374, 8949, 12061, 15597, 17750, 14706, 6904, 2097 ];\nvar data = [];\nvar startAge = 30;\nvar total = d3.sum(rawData);\nrawData.forEach(function(x, i) {\n var row = { age: i * 5 + startAge,\n percent: x / total};\n data.push(row);\n});\n\nvar xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);\nvar yScale = d3.scale.linear().range([height, 0]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(10, "%");\n\nxScale.domain( data.map( function(d) { return d.age; } ));\nyScale.domain([0, 0.013 + d3.max(data, function(d) { return d.percent; })]);\n\nvar percentiles = svg.selectAll(".percentiles")\n .data(data)\n .enter().append("g")\n .attr("class", "g")\n .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; })\n .append("rect")\n .attr("class", "bar both")\n .attr("width", xScale.rangeBand())\n .attr("x", 0)\n .attr("y", function(d) { return yScale(d.percent); })\n .attr("height", function(d) { return height - yScale(d.percent); });\n\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Frequency");\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.selectAll(".x.axis text")\n .filter(function(d, i) { return i % 2 == 1; })\n .style("display", "none");\n\n\n\n</script></div>',
	},
	{
	    message: "Let's try something a little harder, a bit of a trick question, to check your understanding of this kind of data and these kinds of charts.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Women have twice the likelihood of dying around 95 as men. Why is that?",
		    answers: [ 
			{ answer: "Men tend to be healthier"},
			{ answer: "Differences in risky behavior"}, 
			{ answer: "More women living to 95", isCorrect: true}, 
		    ],
		    explanation: "It's just that men die earlier, so there are fewer 95-year-old men. <p>The distribution is shifted to the left for men, which means most men are dying younger than women. The reason women are more likely to die at 95 then men is just that they are more likely to not die before 95."
		},
            ],
	},
	{
	    message: "Let's look at other factors that might matter for how long you might live.  Let's say we want to figure out how much smoking reduces your life.  How might we do that?", 
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What data would be useful to figure out how much smoking reduces your life?",
		    answers: [ 
			{ answer: "List of smokers and when they died"}, 
			{ answer: "List of people and when they died"},
			{ answer: "Ask a few friends whether they know anyone who died, how old they were, and whether they smoked"},
			{ answer: "Likelihood of death at age, separated by smoker and non-smoker", isCorrect: true}, 
			{ answer: "Random sample of US deaths, age at death, and whether they smoked", isCorrect: true}, 
		    ],
		    explanation: "The last two are data sets we could use. Likelihood of death at an age separated by smoker and non-smoker is similar to what we used before.  We can get that and other summaries from the random sample data. But, the interviews and the list of smokers isn't a large random sample (a <i>random sample</i> prevents <i>bias</i>, to a particular city or part of the US, for example). And, we definitely need data for both smokers and non-smokers."
		},
            ],
	    chart: '<div style="text-align:center; margin: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 0 350 350"> <circle cx="175" cy="175" r="156" style="fill:#ffffff;fill-opacity:1;stroke:#da0000;stroke-width:30;stroke-opacity:1" /> <path d="M59.7483,209.467 V249.486 H250.102 V209.467Z M255.785,249.486 H265.746 V209.467 H255.785Z M272.03,249.486 H281.991 V209.467 H272.03Z M160.051,84.2327 C160.051,102.393,169.657,118.16,183.557,122.83 C187.861,124.275,187.93,124.185,187.93,127.637 C187.93,129.433,187.829,130.331,187.829,132.127 C187.829,151.457,197.011,159.099,205.082,164.344 L224.26,164.737 C244.561,165.154,246.11,165.386,250.101,168.615 C252.408,170.481,254.615,174.785,255.245,178.644 C255.542,180.464,255.786,186.358,255.786,191.742 C255.786,197.125,255.937,201.729,256.122,201.971 C256.306,202.214,258.574,202.413,261.161,202.413 L265.865,202.413 V190.635 C265.865,177.843,265.377,173.908,263.046,167.864 C261.304,163.348,257.214,158.077,253.704,155.824 C247.87,152.08,246.931,151.931,226.556,151.5 C205.715,151.059,205.68,151.052,202.448,146.731 C199.57,142.883,198.055,137.403,198.055,131.818 C198.055,124.69,200.816,120.414,200.816,117.563 C200.816,104.901,174.998,119.671,170.517,88.0042 C170.329,86.6763,170.238,85.301,170.238,83.9031 C170.238,69.6112,179.831,57.4187,186.226,57.4187 C189.42,57.4187,189.722,55.8288,189.722,53.444 C189.722,51.9333,189.731,50.6405,189.731,49.5378 C189.731,44.9082,189.569,43.6276,187.887,43.6276 C176.753,43.6276,160.058,57.0817,160.051,84.2327Z M200.099,57.0876 V69.5769 C200.099,69.5774,224.269,71.7478,224.268,99.608 C224.218,116.056,218.089,121.242,218.089,126.44 C218.089,131.946,220.504,132.895,231.779,132.895 C243.694,132.895,247.812,133.773,253.658,137.559 C261.031,142.334,266.826,151.498,269.758,163.019 C271.041,168.061,271.113,169.066,271.267,183.875 C271.356,192.432,271.542,200.104,271.68,200.923 C271.92,202.348,272.153,202.413,277.017,202.413 L282.102,202.413 L281.866,185.695 C281.651,170.384,281.521,168.434,280.326,162.511 C275.877,140.465,263.425,124.636,247.352,120.596 C245.29,120.078,241.141,119.654,238.133,119.654 C233.42,119.654,232.351,119.304,232.351,118.778 C232.351,115.184,234.82,111.589,234.82,100.806 C234.82,71.2675,214.692,56.8612,203.104,56.8612 C202.804,56.8612,202.501,56.886,200.099,57.0876Z"/>   <path transform="translate(-14,14)" d="M65,65 L285,285"        style="fill:none;stroke:#da0000;stroke-width:39;stroke-linecap:butt;stroke-opacity:1" /> </svg></div>',
	},
	{
	    message: "Let's say you have a big random sample of people who died in the last few years, their age at death, and whether they smoked. How could you use that to determine how much smoking matters?", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "You have a sample of age at death for a lot of smokers and non-smokers. How might you start to determine how much smoking matters?",
		    answers: [ 
			{ answer: "Look at the difference between the ages when smokers and non-smokers died", isCorrect: true }, 
			{ answer: "Compute the average lifespan for smokers and non-smokers", isCorrect: true },
			{ answer: "Chart the data", isCorrect: true },
			{ answer: "Compute the standard deviation for lifespan of smokers and non-smokers", isCorrect: true },
		    ],
		    explanation: "All of these are good. You want to see how much smoking matters for the expected age of death, so you definitely want to compare averages, probably averages for smokers, non-smokers, and everyone whether they smoke or not.  You should also compute the medians (to check for outliers and bad data), standard deviation (to see if the spreads, the expected distance from the average, are very different), and chart the data (to understand the data better and look for bad data or other problems).",
		},
            ],
	},
	{
	    message: "<i>Linear regression</i> is a simple but surprisingly powerful technique for solving problems like how long someone might live given a bunch of characteristics of that person.  Let's start with just using whether a person smokes or not. What we want to come up with is an estimate of their life expectancy.  This ends up looking like a simple equation, something like <br><span style=\"font-family: monospace; margin-left: 50px;\">82 - X &times; (do you smoke?)</span><br>82 years old is the average lifespan in the US of non-smokers.  (<i>do you smoke?</i>) will be either 1 or 0, 1 if you smoke, 0 if you don't.  What is X?", 
	    tutorImage: 1,
	    quiz: [
		{
		    question: "What would you guess X should be?",
		    answers: [ 
			{ answer: "The difference between the average age someone lives if they smoke versus the average age if they don't.", isCorrect: true}, 
			{ answer: "The difference between the average age someone lives if they smoke versus the average age of everyone whether they smoke or not"}, 
			{ answer: "15 years"},
		    ],
		    explanation: "The way we've set this up, we're using the average life expectancy, 82 years old, of people, both men or women, who do not smoke. So, we'd want X to be the difference between 82 years old and the average life expectancy of people who do smoke."
		},
            ],
	},
	{
	    message: "Here is data showing the difference in how long people are likely to live depending on whether they smoke heavily or if they don't smoke at all. See how much more likely you are to die in your 50s if you smoke a lot? All the likelihoods are shifted far to the left, meaning that you are much more likely to die earlier if you smoke heavily.",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "Can you guess from the chart how many years earlier you will die if you smoke heavily?",
		    answers: [ 
			{ answer: "6"}, 
			{ answer: "11", isCorrect: true },
			{ answer: "20"},
		    ],
		    explanation: "Turns out it's a lot. Smoking is very bad for you. This data says, on average, people who smoke a pack or more a day die about 11 years earlier than people who don't smoke at all. <p>In our linear regression formula, it looks like we could use 11 for X. So, the predicted life expectancy would be <span style='font-family: monospace'>82 - 11 &times; (do you smoke?)</span>."
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped> .female { fill: hotpink; } .male { fill: steelblue; } .nonsmoker { fill: green; } .smoker { fill: lightslategray; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .legend { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin: 8px;">Likelihood of dying near age</div> <svg id=svg-mortality-by-smoking-chart width=380 height=200></svg> <script> var margin = {top: 5, right: 0, bottom: 20, left: 45}, width = 380 - margin.left - margin.right, height = 200 - margin.top - margin.bottom; var svg = d3.select("#svg-mortality-by-smoking-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var rawData = {}; rawData.smoker = [ 0, 0, 2, 6, 13, 20, 21, 16, 12, 6, 3, 1, 0, 0 ]; rawData.nonsmoker = [ 0, 0, 0, 1, 3, 6, 10, 13, 16, 18, 16, 10, 4, 1 ]; var sexes = ["Smoker", "Nonsmoker"]; var data = []; var total = d3.sum(rawData.nonsmoker); var startAge = 30; rawData.nonsmoker.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Nonsmoker", percent: x / total}; data.push(row); }); var total = d3.sum(rawData.smoker); rawData.smoker.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Smoker", percent: x / total}; data.push(row); }); var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1); var x1Scale = d3.scale.ordinal(); var yScale = d3.scale.linear().range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.age; } )); x1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]); yScale.domain([0, 0.0 + d3.max(data, function(d) { return d.percent; })]); var percentiles = svg.selectAll(".percentiles") .data(data) .enter().append("g") .attr("class", "g") .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; }) .append("rect") .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); }) .attr("width", x1Scale.rangeBand()) .attr("x", function(d) { return x1Scale(d.sex); }) .attr("y", function(d) { return yScale(d.percent); }) .attr("height", function(d) { return height - yScale(d.percent); }); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "9px") .text("Frequency"); var legend = svg.selectAll(".legend") .data(sexes) .enter().append("g") .attr("class", "legend") .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; }); legend.append("rect") .attr("x", 95) .attr("width", 8) .attr("height", 8) .attr("class", function(d) { return d.toLowerCase(); }); legend.append("text") .attr("x", 85) .attr("y", 3) .attr("dy", ".35em") .style("text-anchor", "end") .text(function(d) { return d; }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.selectAll(".x.axis text") .filter(function(d, i) { return i % 2 == 1; }) .style("display", "none"); </script> </div>',
	},
	{
	    message: "On average, men die earlier than women, and smokers die earlier than non-smokers. It's interesting to look at the two together. Here is a comparison of the impact of smoking and the impact of gender on life expectancy. See the difference in the peaks and mid-points of the distributions? There seems to be a dramatic difference between heavy smokers and non-smokers and between men and women, but one of them looks like it makes a much bigger difference. Which one?",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Looking at the charts, on average, who can expect to live longer, a woman who smokes or a male non-smoker? By about how many years?",
		    answers: [ 
			{ answer: "A female smoker can expect to live a few years longer than a male non-smoker" }, 
			{ answer: "A male non-smoker can expect to live a few years longer than a female smoker", isCorrect: true}, 
			{ answer: "Neither makes any difference" },
		    ],
		    explanation: "From the charts, you should be able to get a guess at the difference between the average life expectancies. You should be able to eyeball that the smoking and non-smoking curves are much further apart than the male and female curves, so smoking appears to have a bigger impact on life expectancy, and that the difference is likely a few years. <p>If you run the numbers, it turns out you gain about 11 years of life by not smoking compared to a smoker and about 5 years of life by being female rather than male. <p>So, a woman non-smoker has a life expectancy of 85, a woman smoker of 74, a male non-smoker of 80, and a male smoker just 69. Putting all this together, a male non-smoker, on average, can expect to live 6 years longer (80 - 74 = 6)."
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped> .female { fill: hotpink; } .male { fill: steelblue; } .nonsmoker { fill: green; } .smoker { fill: lightslategray; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .legend { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin: 8px;">Likelihood of dying near age</div> <svg id=svg-mortality-by-smoking-chart width=380 height=200></svg> <p> <div style="font: 18px sans-serif; margin: 8px;">Likelihood of dying near age</div> <svg id=svg-mortality-by-sex-chart width=380 height=200></svg> <script> var margin = {top: 5, right: 0, bottom: 20, left: 45}, width = 380 - margin.left - margin.right, height = 200 - margin.top - margin.bottom; var svg = d3.select("#svg-mortality-by-sex-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var rawData = {}; rawData.male = [ 0, 0, 1, 3, 8, 14, 18, 17, 15, 11, 8, 4, 1, 0 ]; rawData.female = [ 0, 0, 1, 2, 5, 7, 10, 12, 15, 17, 15, 10, 5, 1]; var sexes = ["Male", "Female"]; var data = []; var total = d3.sum(rawData.female); var startAge = 30; rawData.female.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Female", percent: x / total}; data.push(row); }); var total = d3.sum(rawData.male); rawData.male.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Male", percent: x / total}; data.push(row); }); var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1); var x1Scale = d3.scale.ordinal(); var yScale = d3.scale.linear().range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.age; } )); x1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]); yScale.domain([0, 0.03 + d3.max(data, function(d) { return d.percent; })]); var percentiles = svg.selectAll(".percentiles") .data(data) .enter().append("g") .attr("class", "g") .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; }) .append("rect") .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); }) .attr("width", x1Scale.rangeBand()) .attr("x", function(d) { return x1Scale(d.sex); }) .attr("y", function(d) { return yScale(d.percent); }) .attr("height", function(d) { return height - yScale(d.percent); }); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "9px") .text("Frequency"); var legend = svg.selectAll(".legend") .data(sexes) .enter().append("g") .attr("class", "legend") .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; }); legend.append("rect") .attr("x", 95) .attr("width", 8) .attr("height", 8) .attr("class", function(d) { return d.toLowerCase(); }); legend.append("text") .attr("x", 85) .attr("y", 3) .attr("dy", ".35em") .style("text-anchor", "end") .text(function(d) { return d; }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.selectAll(".x.axis text") .filter(function(d, i) { return i % 2 == 1; }) .style("display", "none"); var svg = d3.select("#svg-mortality-by-smoking-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var rawData = {}; rawData.smoker = [ 0, 0, 2, 6, 13, 20, 21, 16, 12, 6, 3, 1, 0, 0 ]; rawData.nonsmoker = [ 0, 0, 0, 1, 3, 6, 10, 13, 16, 18, 16, 10, 4, 1 ]; var sexes = ["Smoker", "Nonsmoker"]; var data = []; var total = d3.sum(rawData.nonsmoker); var startAge = 30; rawData.nonsmoker.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Nonsmoker", percent: x / total}; data.push(row); }); var total = d3.sum(rawData.smoker); rawData.smoker.forEach(function(x, i) { var row = { age: i * 5 + startAge, sex: "Smoker", percent: x / total}; data.push(row); }); var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1); var x1Scale = d3.scale.ordinal(); var yScale = d3.scale.linear().range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.filter(function(d) { return d.sex == sexes[0]; }).map( function(d) { return d.age; } )); x1Scale.domain(sexes).rangeRoundBands([0, xScale.rangeBand()]); yScale.domain([0, 0.0 + d3.max(data, function(d) { return d.percent; })]); var percentiles = svg.selectAll(".percentiles") .data(data) .enter().append("g") .attr("class", "g") .attr("transform", function(d) { return "translate(" + xScale(d.age) + ",0)"; }) .append("rect") .attr("class", function(d) { return "bar " + d.sex.toLowerCase(); }) .attr("width", x1Scale.rangeBand()) .attr("x", function(d) { return x1Scale(d.sex); }) .attr("y", function(d) { return yScale(d.percent); }) .attr("height", function(d) { return height - yScale(d.percent); }); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "9px") .text("Frequency"); var legend = svg.selectAll(".legend") .data(sexes) .enter().append("g") .attr("class", "legend") .attr("transform", function(d, i) { return "translate(0," + (5 + i * 14) + ")"; }); legend.append("rect") .attr("x", 95) .attr("width", 8) .attr("height", 8) .attr("class", function(d) { return d.toLowerCase(); }); legend.append("text") .attr("x", 85) .attr("y", 3) .attr("dy", ".35em") .style("text-anchor", "end") .text(function(d) { return d; }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.selectAll(".x.axis text") .filter(function(d, i) { return i % 2 == 1; }) .style("display", "none"); </script> </div>',
	},
	{
	    message: "Smoking is so bad for you, it is a bigger factor than whether you are male or female. But using both is better than just using one of them. Putting them together, we can get a predictor on how long you will live based on whether you smoke and your gender.",
	    tutorImage: 3,
	    quiz: [
		{
		    question: "What might be an equation to predict how long you will live using both smoking and gender?",
		    answers: [ 
			{ answer: "85 - 11 &times; (do you smoke?) - 5 &times; (are you male?)", isCorrect: true}, 
			{ answer: "69 + 11 &times; (do you not smoke?) + 5 &times; (are you female?)", isCorrect: true}, 
		    ],
		    explanation: "Both of these linear equations are correct. They're just different ways of saying the same thing. <p>On average, you gain about 11 years of life by not smoking and about 5 years of life by being female. This formula is the beginning of a predictor of how long you will live. With more data, you could add other factors like wealth, fitness, location, and genetics, which likely would improve the accuracy of the predictions."
		},
            ],
	},
	{
	    message: "In the end, you might end up with a formula to predict your life expectancy with a large number of factors, including whether you smoke, your gender, how overweight or underweight you are, whether you exercise regularly, your location, your genetic background, and many other things. Being able to guess how long you will live is valuable. Many people have built these kinds of formulas and tried to make them as accurate as they can.", 
	    tutorImage: 6,
	    quiz: [
		{
		    question: "Why would obesity matter for life expectancy?",
		    answers: [ 
			{ answer: "Obesity is hard on the body", isCorrect: true}, 
			{ answer: "Many diseases are related to obesity", isCorrect: true},
			{ answer: "It doesn't"},
		    ],
		    explanation: "Obesity is hard on the body, especially as it ages, and is a major factor in many diseases, including heart disease and strokes. In the US, obesity probably is the third biggest factor in reducing life expectancy, with a reduction of about three years. <p>On average, heavy smoking takes about 11 years off your life, being male takes 5 years off your life, and obesity costs 3 years. Genetic susceptibility to diseases, lack of exercise, poverty, and exposure to pollution all are smaller but still have a noticeable impact."
		},
            ],
	    chart: '<div style="margin: 8px;">A linear equation for predicting life expectancy<div style="margin: 8px; font-family: monospace"><div>Life expectancy =</div><div style="margin-left: 70px">(<i>base life span</i>) +</div><div style="margin-left: 70px">w<sub>1</sub> &times; (<i>smoker</i>) +</div><div style="margin-left: 70px">w<sub>2</sub> &times; (<i>gender</i>) +</div><div style="margin-left: 70px">w<sub>3</sub> &times; (<i>obesity</i>) +</div><div style="margin-left: 70px">w<sub>4</sub> &times; (<i>family history</i>) +</div><div style="margin-left: 70px">w<sub>5</sub> &times; (<i>exercise</i>) + </div><div style="margin-left: 70px">w<sub>6</sub> &times; (<i>wealth</i>) +</div><div style="margin-left: 70px">w<sub>7</sub> &times; (<i>pollution</i>)</div><div style="margin: 10px">where w<sub>1</sub> .. w<sub>7</sub> are weights for how important each factor turns out to be in the data</div></div></div>',
	},
	{
	    message: "Let's take a simpler version of that with a couple of the weights filled in and try to predict how long a couple people will live. Take a look at the formula and then try the quiz.", 
	    tutorImage: 2,
	    quiz: [
		{
		    question: "Let's say we know a woman who is very overweight and smokes. How long, on average, will she live according to our predictor?",
		    answers: [ 
			{ answer: "About 60 years old"}, 
			{ answer: "About 70", isCorrect: true},
			{ answer: "About 80"},
		    ],
		    explanation: "Using our predictor, we get 85 - 11 + 0 - 3 = 71. So, on average, we might expect her to live to about 70 years old."
		},
		{
		    question: "What about a woman who is in good shape and doesn't smoke?",
		    answers: [ 
			{ answer: "75"}, 
			{ answer: "85", isCorrect: true},
			{ answer: "95"},
		    ],
		    explanation: "Using our predictor, we get 85 + 0 + 0 + 0 = 85. So, on average, we might expect her to live to about 85 years old."
		},
            ],
	    chart: '<div style="margin: 8px;">A simple life expectancy predictor:<div style="margin-top: 30px; margin-left: 8px; font-family: monospace; font-size: 16px;"><div>Life expectancy =</div><div style="margin-left: 70px">85 +</div><div style="margin-left: 70px">-11 &times; (<i>smokes?</i>) +</div><div style="margin-left: 70px">-5 &times; (<i>is male?</i>) +</div><div style="margin-left: 70px">-3 &times; (<i>is obese?</i>)',
	},
	{
	    message: "Let's talk more abstractly about what a linear regression is doing to come up with weights. It's trying to find a linear equation (in two dimensions, just a line) that predicts the relationship between the variables with as little error as possible.",
	    lessonSection: "Linear Regression",
	    tutorImage: 7,
	    quiz: [
		{
		    question: "What assumptions does linear regression make?",
		    answers: [ 
			{ answer: "A simple, linear relationship", isCorrect: true}, 
			{ answer: "Independence between variables", isCorrect: true},
			{ answer: "Both of these and more", isCorrect: true},
		    ],
		    explanation: "Linear regression builds a linear model. That model, and what we do to build it, makes a bunch of assumptions that might not be true, including linearity, independence, and many more."
		},
		{
		    question: "Does that mean linear regression is useless?",
		    answers: [ 
			{ answer: "Yes",}, 
			{ answer: "No", isCorrect: true},
			{ answer: "Maybe"},
		    ],
		    explanation: "Not at all! In practice, linear models often work well, even when its assumptions are violated. And it's often a good idea to do something simple before trying to do something more complicated. Keep it simple when you can!"
		},
            ],
	    chart: '<div style="margin: 8px;"><div style="text-align:center;"><svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" height="350" width="350" stroke-width="28.2" viewBox="0 0 16000 15000"><path stroke="none" d="M8030,15000h-8030v-15000h16100v15000h-8070z" fill="#FFF"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M2200,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M2200,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M3680,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M3680,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M5160,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M5160,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M6640,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M6640,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M8120,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M8120,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M9600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M9600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M11100,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M11100,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M12600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M12600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M14000,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M14000,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M15500,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M15500,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14300h14800" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,14300h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,14300h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,12900h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,12900h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,11500h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,11500h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,10100h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,10100h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,8730h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,8730h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,7340h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,7340h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,5950h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,5950h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,4560h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,4560h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,3170h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,3170h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,1780h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,1780h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,393h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,393h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14300v-13900" fill="none"/><path stroke="none" d="M6510,7910v250h250v-250h-250z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M6510,7910v250h250v-250h-250z" fill="none"/><path stroke="none" d="M8000,9990v210h240v-210h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M8000,9990v210h240v-210h-240z" fill="none"/><path stroke="none" d="M9480,6520v250h240v-250h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M9480,6520v250h240v-250h-240z" fill="none"/><path stroke="none" d="M7250,5830v250h250v-250h-250z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M7250,5830v250h250v-250h-250z" fill="none"/><path stroke="none" d="M9480,3740v250h240v-250h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M9480,3740v250h240v-250h-240z" fill="none"/><path stroke="none" d="M10200,1660v250h300v-250h-300z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M10200,1660v250h300v-250h-300z" fill="none"/><defs/><path stroke-linejoin="round" d="M5160,10900,11800,1600" stroke="#579d1c" stroke-width="102" fill="none"/><path d="m9600,6610a1.5,1.5,0,1,1,-3,0,1.5,1.5,0,1,1,3,0z" fill="#000"/><path stroke-linejoin="miter" opacity="0.6" d="M340,235c-32-24-32-24-32-24" transform="matrix(28.22,0,0,28.22,-5.1676436e-5,0)" stroke-dashoffset="0" stroke="#ff2a2a" stroke-linecap="butt" stroke-miterlimit="4" stroke-dasharray="2,4" stroke-width="2" fill="#f22"/></svg></div><div style="font-size: 12px;">The green line is a model of the relationship between the two dimensions (x and y) of the data points. The red dotted line is the error for one of the data points. A linear regression tries to pick a green line that minimizes the error for all the data.</div></div>',
	},
	{
	    message: "Okay, back to questions. Let's try to figure out how we might answer another question. When people use a larger bowl, do they get more ice cream? What do you think?", 
	    tutorImage: 1,
	    lessonSection: "Bigger Bowl, More Ice Cream?",
	    quiz: [
		{
		    question: "Bigger bowl, more ice cream? What is your guess?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
		    ],
		    explanation: "When you start trying to answer a question, you should come up with an initial guess, your <i>hypothesis</i>. Not only does this force you to think about the answer, but also your guess tells you whether you should be surprised by the result."
		},
            ],
	    chart: '<div style="margin: 40px; font-size: 24px; min-height: 300px;"><div id="typing"> </div> <script> var totype = "I scream for ice cream"; var iceclosure = function() { var pos = 0; var divId = Math.random(); document.getElementById("typing").setAttribute("id", "typing" + divId); var typeLetter = function() { var div = document.getElementById("typing" + divId); if (!div) { return } var typingDelay = 600 - 500 * Math.random(); div.innerHTML += totype[pos % totype.length]; pos += 1; if (pos % totype.length == 0) {  div.innerHTML += "<br>";  typingDelay += 1000; } if (pos < totype.length * 8) {  setTimeout(typeLetter, typingDelay); } }; typeLetter(); }; iceclosure(); </script></div>',
	},
	{
	    message: "Now that we have a question and our guess at the answer to that question, the next step is to get data. Data answers questions!", 
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What data might be useful to answer this question?",
		    answers: [ 
			{ answer: "A random sample of people who got ice cream, the weight of the ice cream, and the size of the bowl"}, 
			{ answer: "Take a group of people, give them different size bowls, ask them to get some ice cream, then see how much they got"},
			{ answer: "Randomly survey people, asking how big a bowl they use to get ice cream and how much ice cream they got"},
		    ],
		    explanation: "All of these are possibilities. The first will be hardest to get, but would provide the most reliable data. The last would be easiest, but self-reported data like that often is very noisy and unreliable."
		},
            ],
	},
	{
	    message: "A published 2006 scientific study looked at this exact question. They gave out different sized bowls and spoons to nutritionists, asked them to get ice cream, and weighed how much ice cream they took. People got 31% more ice cream with a larger bowl and 15% more ice cream when they had a larger spoon.", 
	    tutorImage: 5,
	    quiz: [
		{
		    question: "Does this surprise you?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
		    ],
		    explanation: "When you get data that gives you an answer, the first thing to do is check it against your hypothesis. Was the answer what you guessed it would be? <p>In this case, it's a strong effect. Larger bowls and larger spoons affect portion size dramatically, even for people who should know better like nutritionists. <p>If you guessed the bowl wouldn't make any difference, you should be very surprised. Even if you guessed the bowl would matter, you might be surprised by how much of a difference it made. A bigger bowl made quite a difference."
		},
            ],
	},
	{
	    message: "So, a bigger bowl causes people to get more ice cream. Even people who spend their lives advising people about what to eat got more ice cream when they had a bigger bowl, probably without even noticing what they were doing.", 
	    tutorImage: 4,
	    quiz: [
		{
		    question: "Why does this matter?",
		    answers: [ 
			{ answer: "It could help people eat less", isCorrect: true}, 
			{ answer: "It's valuable information", isCorrect: true},
			{ answer: "It's an example of what you can do with stats and data", isCorrect: true},
		    ],
		    explanation: "All of these are true. A simple study like this using data and a little statistics was published, is very useful to doctors, and is helpful to anyone trying to lose weight."
		},
            ],
	},
	{
	    message: "Another question. Does watching too much television make you fatter?", 
	    tutorImage: 1,
	    lessonSection: "Does TV Make You Fat?",
	    quiz: [
		{
		    question: "What is your guess?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
		    ],
		    explanation: "Start with a hypothesis. Good!"
		},
            ],
	    chart: '<div style="margin-top: 30px; margin-left: 70px;"><svg xmlns="http://www.w3.org/2000/svg" height="400" width="300" viewBox="0 0 450 650"> <path d="m180,223c0.0119,0.325-2.08,0.756-6.13,1.07-4.05,0.311-10.1,0.5-17.8-0.0491-7.76-0.549-17.3-1.84-28-4.83-5.35-1.5-11-3.43-16.8-5.94s-11.8-5.61-17.7-9.47c-5.47-3.56-10.9-7.73-16-12.5-5.18-4.8-10.1-10.2-14.8-16.3-4.62-6.03-8.91-12.7-12.7-19.8-3.8-7.17-7.12-14.9-9.82-23-4.33-12.9-7.85-26.8-8.97-41.7-0.818-10.7-0.253-22,2.93-33.1,2.56-8.85,6.95-17.4,13.3-24.7,5.89-6.74,13.2-12.2,21.3-16.1,8.4-4.11,17.5-6.73,26.7-8.18,3.27-0.516,6.57-0.896,9.88-1.15,6.76-0.518,13.5-0.505,20.1-0.0929,22.1,1.37,43.1,6.91,62.2,14.9,10,4.15,19.6,9,28.4,14.6,8.86,5.56,17,11.8,24.3,18.7,7.02,6.66,13.2,14,18,22,4.71,7.8,8.04,16.2,9.55,24.8,1.61,9.2,1.01,18.4-1.24,26.7-1.44,5.27-3.49,10.2-5.88,14.7-2.4,4.5-5.15,8.61-8.06,12.4-4.46,5.74-9.24,10.7-14,15-4.78,4.32-9.54,8.04-14.1,11.3-6.56,4.7-12.7,8.47-18.1,11.6-5.43,3.09-10.2,5.49-14.1,7.34s-6.95,3.14-9.04,3.93c-2.09,0.791-3.23,1.08-3.34,0.865-0.106-0.216,0.823-0.93,2.7-2.13s4.7-2.89,8.36-5.11c3.65-2.22,8.14-4.96,13.3-8.35,5.13-3.39,10.9-7.42,17.1-12.3,4.27-3.39,8.72-7.18,13.1-11.5,4.41-4.31,8.78-9.14,12.8-14.7,2.58-3.58,5-7.45,7.07-11.6s3.79-8.58,4.92-13.3c1.79-7.33,2.11-15.4,0.548-23.3-1.45-7.44-4.57-14.8-8.9-21.8-4.45-7.13-10.2-13.8-16.8-19.9-6.87-6.37-14.6-12.1-23-17.3-8.44-5.15-17.6-9.68-27.2-13.6-18.3-7.44-38.3-12.6-59.1-13.9-6.22-0.368-12.5-0.379-18.7,0.0955-3.06,0.233-6.09,0.581-9.08,1.06-8.44,1.34-16.6,3.65-23.9,7.24-7.02,3.43-13.4,8.04-18.3,13.7-5.32,6.02-9.11,13.3-11.4,20.9-2.9,9.6-3.46,19.8-2.86,29.7,0.852,13.8,4.05,27.1,8,39.6,2.44,7.68,5.45,15,8.91,21.8,3.45,6.84,7.35,13.2,11.6,19,4.22,5.79,8.76,11,13.5,15.7,4.75,4.65,9.7,8.72,14.8,12.2,5.49,3.83,11,6.98,16.5,9.59,5.44,2.61,10.8,4.68,15.8,6.36,10.2,3.35,19.3,5.13,26.8,6.23,7.52,1.1,13.4,1.51,17.4,1.82,4.01,0.308,6.12,0.516,6.13,0.841z" fill-rule="evenodd" fill="#000"/> <path d="m177,208c0.444-0.115,1.62,2.6,3.37,7.82,1.75,5.21,4.07,12.9,6.7,22.8,2.63,9.89,5.58,22,8.5,35.9s5.8,29.8,8.25,47.1c2.46,17.4,4.49,36.5,5.5,56.6,1,20.2,0.97,41.5-0.748,63.4-0.0606,0.773-0.123,1.55-0.188,2.32-1.79,21.5-5.2,42.3-10.2,61.5-5,19.3-11.6,37-19.3,52.7-7.83,16-16.9,29.6-25.8,40.9-8.98,11.3-17.9,20.2-25.6,27-7.76,6.82-14.4,11.6-19,14.5-4.65,2.99-7.35,4.26-7.61,3.88-0.262-0.377,1.92-2.38,6.01-6s10.1-8.89,17.2-16.1c7.08-7.2,15.3-16.3,23.5-27.7,8.23-11.3,16.5-24.8,23.7-40.4,7.07-15.3,13.1-32.6,17.7-51.3,4.62-18.7,7.81-39,9.57-60,0.0632-0.755,0.125-1.51,0.184-2.27,1.69-21.5,1.84-42.4,1.08-62.2-0.758-19.9-2.42-38.6-4.42-56-1.99-17.2-4.33-33-6.64-46.9-2.3-13.9-4.57-26.1-6.47-36.1s-3.44-17.9-4.36-23.3c-0.926-5.41-1.24-8.35-0.796-8.46z" fill-rule="evenodd" fill="#000"/> <path d="m4.09,209c0.25-0.146,1,0.606,2.28,2.12,1.27,1.52,3.07,3.79,5.5,6.64s5.49,6.26,9.29,10.1c3.79,3.79,8.32,7.96,13.5,12.4,0.000002,0.00001,0.000005,0.00001,0.000007,0.00001,5.54,4.64,11.9,9.52,19,14.4,7.13,4.93,15.1,9.92,23.7,14.9,15.2,8.67,32.6,17.1,51.7,24.6,16,6.3,33.2,12,51.3,16.5,1.62,0.403,3.24,0.795,4.86,1.17,19.2,4.51,38.1,7.37,56,8.32,9.26,0.488,18.3,0.493,26.8-0.0382,8.6-0.531,16.8-1.6,24.5-3.18,8.54-1.75,16.5-4.13,23.6-7.01,7.12-2.87,13.4-6.24,18.8-9.85,0-0.00001,0.00001-0.00001,0.00001-0.00001,7.01-4.65,12.6-9.66,16.9-14.3,5.03-5.38,8.38-10.2,10.7-13.4,2.28-3.28,3.52-5.06,3.89-4.88,0.188,0.0899,0.146,0.662-0.139,1.69-0.285,1.02-0.816,2.5-1.64,4.37-0.829,1.87-1.96,4.14-3.47,6.72s-3.41,5.47-5.79,8.53c-4.07,5.24-9.57,11-16.8,16.4h-0.00001c-5.57,4.18-12.1,8.11-19.5,11.5-7.43,3.4-15.8,6.25-24.7,8.36-8.07,1.91-16.7,3.27-25.6,4.03-8.98,0.768-18.3,0.945-27.9,0.568-18.6-0.719-38.1-3.5-57.9-8.12-1.66-0.389-3.33-0.79-4.99-1.2-18.6-4.62-36.2-10.5-52.5-17.2-20-7-37.6-16-52.9-26-8.7-5-16.6-11-23.7-16s-13.4-11-18.8-16c-0.000002,0-0.000005-0.00001-0.000007-0.00001-5.1-4.82-9.45-9.46-13-13.7s-6.32-8.09-8.4-11.3c-2.07-3.24-3.46-5.87-4.29-7.7-0.825-1.83-1.09-2.88-0.841-3.02z" fill-rule="evenodd" fill="#000"/> <path d="m207,466c0.397-0.231,1.67,1.1,3.78,3.72s5.06,6.51,8.95,11.3c3.89,4.82,8.72,10.6,14.6,16.8,5.85,6.27,12.7,13.1,20.6,20,7.88,6.92,16.8,14,26.5,20.9,9.78,6.95,20.4,13.8,31.8,20.3,0.114,0.0659,0.228,0.132,0.342,0.198,17.1,9.84,33.9,18.1,49.5,25.1,15.6,6.97,30,12.6,42.2,17.3,12.2,4.62,22.1,8.2,28.9,10.8,6.83,2.64,10.5,4.34,10.4,5-0.186,0.664-4.26,0.23-11.5-1.27-7.2-1.5-17.5-4.06-30.1-7.87s-27.4-8.87-43.5-15.5c-16.1-6.62-33.4-14.8-50.9-24.9-0.117-0.0673-0.234-0.135-0.351-0.202-11.6-6.7-22.5-13.8-32.4-21.2-9.92-7.35-18.9-14.9-26.7-22.4-7.85-7.48-14.6-14.9-20.1-21.7-5.56-6.85-9.98-13.2-13.3-18.5-3.37-5.36-5.7-9.77-7.11-12.9-1.41-3.1-1.91-4.88-1.52-5.11z" fill-rule="evenodd" fill="#000"/> <path style="enable-background:accumulate;color:#000;" d="m307,354a102,127,0,1,1,-204,0,102,127,0,1,1,204,0z" fill-rule="nonzero" transform="matrix(1.2653617,0,0,1.1904831,-70.57765,-65.408812)" stroke="#000" stroke-miterlimit="4" stroke-width="6.7" fill="#FFF"/></svg></div>',
	},
	{
	    message: "Think about what data you would want to answer this question. What data would answer whether watching too much TV makes you fat?", 
	    tutorImage: 4,
	    quiz: [
		{
		    question: "Would it be enough to ask people how much TV they watch and their weight and height?",
		    answers: [ 
			{ answer: "Yes" },
			{ answer: "No", isCorrect: true },
			{ answer: "Maybe" },
		    ],
		    explanation: "This data would be easy to get, but it probably wouldn't be enough. <p>First, it is self-reported, so likely inaccurate. Second, it might give you a <i>correlation</i> (overweight is associated with more TV) but not <i>causation</i> (what causes what). In particular, you wouldn't know whether obesity causes people to watch more TV or if TV watching causes people to gain weight. And you wouldn't know if less TV helps people lose weight."
		},
            ],
	},
	{
	    message: "A 1999 medical study looked at children to answer this question. The study randomly separated the kids into two groups, test and control. The test group was given instruction that discouraged television watching. All children were weighed frequently for six months.", 
	    tutorImage: 6,
	    quiz: [
		{
		    question: "What would you expect to see in the test group compared to the control if it is true that less TV reduces weight?",
		    answers: [ 
			{ answer: "Everyone in the test group steadily loses weight" },
			{ answer: "Average weight is lower at the end of six months in the control group" },
			{ answer: "Control group watches less TV" },
			{ answer: "Test group watches less TV and scores lower on measures of obesity over time", isCorrect: true },
		    ],
		    explanation: "Only one of the groups, the test group, received instruction designed to discourage TV watching. You would hope that group and only that group would see a reduction both in time spent watching TV and in measures of obesity such as body-mass index (BMI) and waist-to-height ratio."
		},
            ],
	},
	{
	    message: "The study found that children in the test group who were given about weekly classes designed to discourage TV did in fact watch less TV and also ate fewer meals in front of the television. The children in the test group had lower measures of obesity &ndash; BMI lower by about 3%, waist circumference lower by 4%, waist-to-hip ratio lower by 3% &ndash; by the end of the six months. All these changes were determined to be <i>statistically significant</i>, unlikely to happen by chance.", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "So, does watching TV make you fat?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true },
			{ answer: "Probably", isCorrect: true },
			{ answer: "No" },
		    ],
		    explanation: "This study should be pretty convincing to you. They were able to get kids to watch less TV and found reducing TV made kids less obese than other kids who didn't change how much TV they watched. If reducing TV makes you lose weight, it's probably true that watching more TV makes you fatter. <p>Even so, this is only for one group of children and studied in only one way. It is only one piece of evidence. You would want to see other studies using similar methods that confirm this data before you decided it is almost certainly true that TV makes you fat."
		},
		
            ],
	},
	{
	    message: "Another question. Would a smoke alarm work better if it used your mother's voice?",
	    lessonSection: "Mom Smoke Alarm?",
	    tutorImage: 7,
	    quiz: [
		{
		    question: "What is your guess?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
		    ],
		    explanation: "Start with a hypothesis. Great!",
		},
	    ],
	    chart: '<div style="margin: 30px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="308" height="270" viewBox="0 0 616 540"> <path style="fill:none;fill-rule:evenodd;stroke:black;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 24.69,-160.5 C 24.757,-160.56 24.69,-160.34 24.69,-160.5 z " id="path1965" /> <g id="g1891" transform="translate(8.146,8)"> <path id="path1877" d="M 299.1,-8 C 285.3,-8 277,5.376 271.875,16.53 C 179,177.959 85.1,338.776 -7,500.56 C -12.655568,516.743 3.6,534.9 20.3,531.6 C 209.9,531.32 399.55,532.2 589.125,531.1 C 605.7,527.93 613.8,504.94 602.5,492.166 C 507.364,328 413.4,163.195 317.5,-0.437 C 312.77,-5.3226 305.97,-8.3168 299.1,-8 z " style="fill:yellow" /> <g id="g4"> <path  id="sign_border"  d="M 597.6,499.6 L 313.8,8 C 310.9,3 305.6,0 299.9,0 C 294.2,0 288.9,3.1 286,8 L 2.2,499.6 C -0.7,504.6 -0.7,510.7 2.2,515.6 C 5.1,520.6 10.4,523.6 16.1,523.6 L 583.7,523.6 C 589.4,523.6 594.7,520.5 597.6,515.6 C 600.5,510.6 600.5,504.5 597.6,499.6 z " /> <polygon  points="43.9,491.5 299.9,48.2 555.9,491.5 43.9,491.5 "  id="sign_bg"  style="fill:#f7f619" /> </g> <g id="g2863"> <path  style="fill:black;fill-rule:evenodd;stroke:black;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"  d="M 290,194.42 C 278.3,197.9 283.94,264 278.286,255.8 C 277.337,251.7 264,234 255.5,235.546 C 255.5,235.546 267.54,255.467 249.5,308 C 249.5,308 242.23,287.13 231.47,285.2335 C 231.47355,285.2335 229.24,335.516 225.44,348.17 C 225.44,348.17 223.88,345.32 213.44,338.36 C 209.118,361.312 201.72,464.3 278.9,449.733 C 265.94,444 242.55,422.838 238.7548,386.14 C 238.755,386.14 245,389 247.59855,390.89 C 248.4,391.5 254.25,359.88 257.1,355.452 C 257.1,355.452 263.116,402.6 279.5673,410.827 C 279.5673,410.827 270,375.37 278.91,356.39 C 278.91,356.39 288,382.355 294.41,385.2 C 294.41,385.2 312.453,358 306.44,319 C 306.4423,319 333.323,351 320,380.76 C 319.5,381.95567 335.22388,366.52 337.7548,355.7647 C 337.7548,355.7647 344.71904,365.9 339.97,390.26473 C 339.7316,391.5 347.57,387 349.786,384.546 C 349.786,384.546 350.729,425.693 301.69,446.89 C 317.54,460.36 401.68,447.829 387.1298,365.89 C 383.52554,374.90037 377,380.765 377,380.76473 C 375.1066,363 398.8,326.339 370.97,294.7 C 370.97,294.7 364.965,315.28 360.536,316.54598 C 360.536,316.546 348.83437,245.67 329.536,245.67 C 329.536,245.67 329.856,268.769 326.7,271 C 326.6923,270.98348 311.17942,223.542 302,221.327 C 297,217.47 290,194.42 290,194.42 z M 298.536,262.14 C 298.22,273.53 299.8,275.1 293.786,283.64 C 293.24,278.8 293.13,261.98 298.536,262.14 z "  id="path1933" /> <rect  style="fill:black;fill-opacity:1;stroke:black;stroke-width:0.6378;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:0.4"  id="rect1935"  width="118.32"  height="6.643687"  x="235.58"  y="454.4757" /> </g> </g> </svg> </div>',
	},
	{
	    message: "A 2006 scientific study had 24 children, ages 6-12, and used smoke alarms that randomly would pick between a normal siren and the child's Mom's voice shouting, \"<i>First name</i>! Wake up! Get out of bed!\", after the child fell deeply asleep. The results are in the charts.", 
	    tutorImage: 3,
	    quiz: [
		{
		    question: "Does it look like the Mom smoke alarm works better?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true },
			{ answer: "No" },
			{ answer: "Maybe" },
		    ],
		    explanation: "This looks like a very strong effect. There are huge differences between the test and control group. <p>The likelihood of differences this large occurring by chance is very low. There are statistical significance tests you can use to check this. The authors of the study computed the <i>p-value</i>, which is the probability of these results happening just by chance, and found the p-value to be less than 0.004, so a 4 in 1000 chance of this result happening by chance."
		},
            ],
	    chart: '<div style="margin: 8px;"><style scoped> .bar { fill: green; } .bar:hover { fill: steelblue; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 8px;">Children that woke</div> <svg id=svg-woke-chart width=350 height=200></svg> <p> <div style="font: 18px sans-serif; margin-bottom: 8px;">Children that got up and left room</div> <svg id=svg-up-chart width=350 height=200></svg> <script> var margin = {top: 5, right: 0, bottom: 20, left: 35}, width = 350 - margin.left - margin.right, height = 200 - margin.top - margin.bottom; var svg = d3.select("#svg-woke-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [{x: "Mom", y: 0.96}, {x: "Siren", y: 0.58}]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([0, 1]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis); var svg = d3.select("#svg-up-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [{x: "Mom", y: 0.83}, {x: "Siren", y: 0.38}]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(10, "%"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([0, 1]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis); </script> </div>'
	},
	{
	    message: "A huge difference with the Mom smoke alarm, so big that it is very unlikely to occur by chance. Looks like the Mom smoke alarm works?", 
	    tutorImage: 5,
	    quiz: [
		{
		    question: "Does this study mean the Mom smoke alarm works better?",
		    answers: [ 
			{ answer: "Yes" },
			{ answer: "Probably", isCorrect: true },
			{ answer: "No" },
		    ],
		    explanation: "This result is convincing. But, the number of children studied was small and there were a few choices in the experiment (such as the volume of the alarms and the speakers used) that might have been responsible for the effect. So, it would be good to see another study before concluding that the Mom smoke alarm definitely works well."
		},
		
            ],
	},
	{
	    message: "This will be the last question before moving to something else. Would basketball free throws be more accurate if shot underhand?",
	    lessonSection: "Underhand Is Better For Free Throws?",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "What is your guess?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true }, 
			{ answer: "No", isCorrect: true },
			{ answer: "Maybe" }, 
		    ],
		    explanation: "You should pick yes or no. Make a guess! You need to start with a hypothesis.",
		},
	    ],
	    chart: '<div style="margin-top: 70px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 300 300"> <path fill="#000" d="M247,8.47c-12,0-22,9.63-22,21.4s10,21.5,22,21.5c11,0,21-9.7,21-21.5s-10-21.4-21-21.4zm0,5.63c8,0,15,7,15,15.7,0,8.6-7,15.6-15,15.6-9,0-16-7-16-15.6,0-8.7,7-15.7,16-15.7z"/> <path fill="#000" d="M83.6,60.1a17.1,17.1,0,1,1,-34.3,0,17.1,17.1,0,1,1,34.3,0z" transform="matrix(1.2926928,0,0,1.2926928,34.197113,-27.463538)"/> <path fill-rule="nonzero" fill="#050505" d="M165,54.3c25-13.5,45-32.8,65-51.4-5,12-11,24-20,34.2-13,16.2-27,32.9-46,42.9-6,3.7-16-1.4-14-9,1-8.3,9-12.5,15-16.6z"/> <path fill-rule="nonzero" fill="#050505" d="M116,162c7-2,13,7,12,13,0,19-11,37-20,53-13.3,22-25.1,44-40.2,64,4.4-17,10.4-34,14.7-51,5.8-23,10.9-46,21.5-67,3-5,6-11,12-12z"/> <path fill-rule="nonzero" fill="#050505" d="M164,125c4-2,10-2,13,2,4,6,5,14,5,21-4,32-25,59-45,82,5-15,14-29,17-45,1-6,2-13,3-19-3,3-5,6-8,8-5,2-10-1-12-6-3-6-1-14,1-20,5-10,14-20,26-23z"/> <path fill-rule="nonzero" fill="#050505" d="M68.4,100c7.6-6.2,15.9-14.2,26.7-14,5.9-0.4,9.9,6,7.9,11.2-1,4.8-5.7,6.8-9.1,9.8-16.3,11-33.1,21-47.1,35-9.3,9-16.7,20-27.3,27,10.2-26,28.1-49,48.9-69z"/> <path fill-rule="nonzero" fill="#050505" d="M221,54.9c21-1.4,41-1.3,61-0.2-1,7.2-3,14.1-5,21.2-1,7.7-2,15.5-3,23.2-2,0-4-0.1-6-0.1,0-13.3,3-26.3,6-38.9-15-0.1-30-0.1-45-0.1,4,11.7,6,23.7,6,36,0,2.6-3,2.7-5,3.9-1-9.3-2-18.7-4-27.8-2-5.7-4-11.3-5-17.2z"/></svg></div>',
	},
	{
	    message: "There was a basketball player, Rick Barry, who made over 90% of his free throws unusually shooting underhand, granny style, which made him the best free throw shooter in many years and one of the best ever. In addition, many have studied the physics of shooting free throws and concluded that underhand should be easier given the human body and physical dynamics of the shot.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "What data might prove shooting underhand is better?",
		    answers: [ 
			{ answer: "Compare players randomly trying both shots" }, 
			{ answer: "Train children on both shots" },
			{ answer: "Train children on only one of the shots" },
		    ],
		    explanation: "It's going to be hard to get good data to use to answer this question. <p>People take a long time to learn how to shoot free throws accurately. If you just have players shoot underhand, they'll do much better on the technique they know, overhand. Even if you train someone who never shot before, you won't learn about how pros will shoot after decades of practice.",
		},
	    ],
	},
	{
	    message: "It's hard to get data here. We have a player or two with exceptional performance shooting underhand. We have a few physics studies saying it could be easier. But it's hard to train people to shoot both ways and test for it.",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "So, is shooting free throws granny style better?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
			{ answer: "Maybe", isCorrect: true },
			{ answer: "We don't know", isCorrect: true },
		    ],
		    explanation: "We don't know. <p>The many studies done so far haven't been able to convincingly prove this one way or the other. Combined with social pressure against shooting underhand because many players think it looks silly, few professional players do it.",
		},
	    ],
	},
	{
	    message: "Sometimes differences are just expected variation in the data, not a real, significant difference between experiments. Take a look at this chart. Let's say we ran four experiments and this was the data we got.",
	    lessonSection: "Detecting Real Differences",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Looking at the chart, which of the experimental results would you say look like they might be showing a real difference?",
		    answers: [ 
			{ answer: "None of them" }, 
			{ answer: "#1 is different" },
			{ answer: "#4 is different"},
			{ answer: "#1 and #4 are different"},
			{ answer: "All of them look very different"},
		    ],
		    explanation: "Real data usually has a lot of variation in it, which is sometimes called <i>noise</i>. When an experiment randomly samples the data, differences that look large could actually be just from the expected variation you see in all of the data. <p>It's easy to see differences, but which ones are likely to be just from chance? Which differences are real?",
		},
	    ],
	    chart: '<div style="margin-top: 20px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 1000 1000"> <g font-size="24px" font-family="Arial" font-weight="bold"> <text x="200" y="1000" font-size="48px">1</text> <text x="191" y="392">x</text> <text x="170" y="791">x</text> <text x="206" y="491">x</text> <text x="216" y="607">x</text> <text x="178" y="64">x</text> <text x="208" y="343">x</text> <text x="224" y="496">x</text> <text x="172" y="397">x</text> <text x="223" y="634">x</text> <text x="213" y="415">x</text> <!-- mu=463.0 stdev=195.7 stderr=47.4 z=-0.78 --> </g> <g font-size="24px" font-family="Arial" font-weight="bold"> <text x="400" y="1000" font-size="48px">2</text> <text x="381" y="395">x</text> <text x="393" y="373">x</text> <text x="391" y="282">x</text> <text x="430" y="533">x</text> <text x="386" y="679">x</text> <text x="389" y="374">x</text> <text x="373" y="430">x</text> <text x="394" y="348">x</text> <text x="374" y="488">x</text> <text x="371" y="643">x</text> <text x="430" y="558">x</text> <text x="389" y="409">x</text> <text x="407" y="511">x</text> <text x="375" y="573">x</text> <text x="416" y="385">x</text> <text x="390" y="395">x</text> <!-- mu=461.0 stdev=112.336 stderr=37.5 z=-1.04 --> </g> <g font-size="24px" font-family="Arial" font-weight="bold"> <text x="600" y="1000" font-size="48px">3</text> <text x="612" y="595">x</text> <text x="610" y="426">x</text> <text x="594" y="452">x</text> <text x="600" y="577">x</text> <text x="589" y="728">x</text> <text x="596" y="538">x</text> <text x="606" y="331">x</text> <text x="596" y="494">x</text> <text x="628" y="386">x</text> <text x="591" y="142">x</text> <text x="590" y="585">x</text> <text x="609" y="423">x</text> <text x="571" y="429">x</text> <text x="598" y="657">x</text> <text x="617" y="345">x</text> <text x="621" y="486">x</text> <!-- mu=474.625 stdev=142.05 stderr=37.5 z=-0.68 --> </g> <g font-size="24px" font-family="Arial" font-weight="bold"> <text x="800" y="1000" font-size="48px">4</text> <text x="804" y="567">x</text> <text x="790" y="508">x</text> <text x="816" y="513">x</text> <text x="775" y="306">x</text> <text x="829" y="872">x</text> <text x="804" y="627">x</text> <text x="777" y="563">x</text> <text x="776" y="569">x</text> <text x="823" y="617">x</text> <text x="802" y="750">x</text> <!-- mu=589.2 stdev=149.9 stderr=47.4 z=1.88 --> </g> <line x1="10" y1="10" x2="10" y2="950" stroke="black" stroke-width="4" /> <line x1="10" y1="950" x2="990" y2="950" stroke="black" stroke-width="4" /> </svg> </div>',
	},
	{
	    message: "What we need is some way of objectively determining if experimental results are different. What we want to know is whether the differences we see in the data from experiments is likely to occur by chance.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "How can you determine if experimental results really are different?",
		    answers: [ 
			{ answer: "Compare the medians" },
			{ answer: "Chart them and see how they look" }, 
			{ answer: "Use statistical tests designed to detect real differences", isCorrect: true },
		    ],
		    explanation: "Depending on the data, there are statistical tests you can run to determine the likelihood (<i>p-value</i>) of the data occurring by chance. Often, a p-value of 0.05 or less (5% or less chance of it occurring by chance) is considered sufficient to have evidence of a real effect. <p>But keep in mind it's easy to violate the assumptions of these statistical tests (by having a bias sample, unusual distribution, testing over and over until you get the p-value you want, or other experimental problems), so a reported effect often needs to be confirmed by separate experiments before you can be very confident that it is real.",
		},
	    ],
	},
	{
	    message: "Detecting significant differences is very important if you are trying to answer a question using data. Almost all data will have a lot of uncontrolled, natural variation. It's easy to confuse that randomness with a real effect.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "Are the results in the chart actually different from each other?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No", isCorrect: true },
			{ answer: "Maybe" }, 
		    ],
		    explanation: "In this example, no, they are not different from each other. <p>These are four samples all drawn randomly from the same normal distribution. Statistical tests (specifically, the <i>one-way ANOVA test</i>) show that all four samples are reasonably likely to occur by random chance. <p>So, even though they look different to the eye, they aren't different enough to show a real effect. It's all just expected random variation.",
		},
	    ],
	},
	{
	    message: "This chart shows the four data sets in a different way, first all the data together, and then what happened when we randomly split it into four groups. All the data came from the same normally distributed data. The four groups look fairly different to the eye, even though differences like these will happen frequently by random chance.",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "Can two experiments that actually do not show a significant difference pass a statistical significance test?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true  }, 
			{ answer: "No" },
			{ answer: "Maybe" }, 
		    ],
		    explanation: "Yes. A statistical significance test just says that it is unlikely that the difference you see in the data could occur by chance. <p>Usually, the criteria for \"unlikely\" is that it would only happen 5% of the time by chance. But that means that, 1 out of 20 times, the test will be wrong and will say something wasn't by chance that actually was just by chance.",
		},
	    ],
	    chart: '<div style="margin-top: 20px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 1000 1000"> <g font-size="24px" font-family="Arial" font-weight="bold" transform="translate(50)"> <text x="191" y="392">x</text> <text x="170" y="791">x</text> <text x="206" y="491">x</text> <text x="216" y="607">x</text> <text x="178" y="64">x</text> <text x="208" y="343">x</text> <text x="224" y="496">x</text> <text x="172" y="397">x</text> <text x="223" y="634">x</text> <text x="213" y="415">x</text> <!-- mu=463.0 stdev=195.7 stderr=47.4 z=-0.78 --> </g>  <g font-size="24px" font-family="Arial" font-weight="bold" transform="translate(-125)"> <text x="381" y="395">x</text> <text x="393" y="373">x</text> <text x="391" y="282">x</text> <text x="430" y="533">x</text> <text x="386" y="679">x</text> <text x="389" y="374">x</text> <text x="373" y="430">x</text> <text x="394" y="348">x</text> <text x="374" y="488">x</text> <text x="371" y="643">x</text> <text x="430" y="558">x</text> <text x="389" y="409">x</text> <text x="407" y="511">x</text> <text x="375" y="573">x</text> <text x="416" y="385">x</text> <text x="390" y="395">x</text> <!-- mu=461.0 stdev=112.336 stderr=37.5 z=-1.04 --> </g>  <g font-size="24px" font-family="Arial" font-weight="bold" transform="translate(-300)"> <text x="570" y="1000" font-size="48px">all</text> <text x="612" y="595">x</text> <text x="610" y="426">x</text> <text x="594" y="452">x</text> <text x="600" y="577">x</text> <text x="589" y="728">x</text> <text x="596" y="538">x</text> <text x="606" y="331">x</text> <text x="596" y="494">x</text> <text x="628" y="386">x</text> <text x="591" y="142">x</text> <text x="590" y="585">x</text> <text x="609" y="423">x</text> <text x="571" y="429">x</text> <text x="598" y="657">x</text> <text x="617" y="345">x</text> <text x="621" y="486">x</text> <!-- mu=474.625 stdev=142.05 stderr=37.5 z=-0.68 --> </g>  <g font-size="24px" font-family="Arial" font-weight="bold" transform="translate(-475)"> <text x="804" y="567">x</text> <text x="790" y="508">x</text> <text x="816" y="513">x</text> <text x="775" y="306">x</text> <text x="829" y="872">x</text> <text x="804" y="627">x</text> <text x="777" y="563">x</text> <text x="776" y="569">x</text> <text x="823" y="617">x</text> <text x="802" y="750">x</text> <!-- mu=589.2 stdev=149.9 stderr=47.4 z=1.88 --> </g> <line x1="10" y1="10" x2="10" y2="950" stroke="black" stroke-width="4" /> <line x1="10" y1="950" x2="990" y2="950" stroke="black" stroke-width="4" />  <g font-size="24px" font-family="Arial" stroke="red" fill="red" font-weight="bold" transform="translate(400)"> <text x="200" y="1000" font-size="48px">1</text> <text x="191" y="392">x</text> <text x="170" y="791">x</text> <text x="206" y="491">x</text> <text x="216" y="607">x</text> <text x="178" y="64">x</text> <text x="208" y="343">x</text> <text x="224" y="496">x</text> <text x="172" y="397">x</text> <text x="223" y="634">x</text> <text x="213" y="415">x</text> <!-- mu=463.0 stdev=195.7 stderr=47.4 z=-0.78 --> </g>  <g font-size="24px" font-family="Arial" stroke="blue" fill="blue" font-weight="bold" transform="translate(250)"> <text x="400" y="1000" font-size="48px">2</text> <text x="381" y="395">x</text> <text x="393" y="373">x</text> <text x="391" y="282">x</text> <text x="430" y="533">x</text> <text x="386" y="679">x</text> <text x="389" y="374">x</text> <text x="373" y="430">x</text> <text x="394" y="348">x</text> <text x="374" y="488">x</text> <text x="371" y="643">x</text> <text x="430" y="558">x</text> <text x="389" y="409">x</text> <text x="407" y="511">x</text> <text x="375" y="573">x</text> <text x="416" y="385">x</text> <text x="390" y="395">x</text> <!-- mu=461.0 stdev=112.336 stderr=37.5 z=-1.04 --> </g>  <g font-size="24px" font-family="Arial" stroke="green" fill="green" font-weight="bold" transform="translate(100)"> <text x="600" y="1000" font-size="48px">3</text> <text x="612" y="595">x</text> <text x="610" y="426">x</text> <text x="594" y="452">x</text> <text x="600" y="577">x</text> <text x="589" y="728">x</text> <text x="596" y="538">x</text> <text x="606" y="331">x</text> <text x="596" y="494">x</text> <text x="628" y="386">x</text> <text x="591" y="142">x</text> <text x="590" y="585">x</text> <text x="609" y="423">x</text> <text x="571" y="429">x</text> <text x="598" y="657">x</text> <text x="617" y="345">x</text> <text x="621" y="486">x</text> <!-- mu=474.625 stdev=142.05 stderr=37.5 z=-0.68 --> </g>  <g font-size="24px" font-family="Arial" stroke="purple" fill="purple" font-weight="bold" transform="translate(-50)"> <text x="800" y="1000" font-size="48px">4</text> <text x="804" y="567">x</text> <text x="790" y="508">x</text> <text x="816" y="513">x</text> <text x="775" y="306">x</text> <text x="829" y="872">x</text> <text x="804" y="627">x</text> <text x="777" y="563">x</text> <text x="776" y="569">x</text> <text x="823" y="617">x</text> <text x="802" y="750">x</text> <!-- mu=589.2 stdev=149.9 stderr=47.4 z=1.88 --> </g> <line x1="10" y1="10" x2="10" y2="950" stroke="black" stroke-width="4" /> <line x1="10" y1="950" x2="990" y2="950" stroke="black" stroke-width="4" />  </svg> </div>',
	},
	{
	    message: "In general, when you are looking at data from an experiment, you need to be careful about concluding that there is a real difference that did not occur by random chance. Even if the experiment passes statistical tests, you often want to see someone attempt to duplicate the result independently before you conclude that the effect is real and not just chance.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Are there reasons other than just bad luck that an experiment may appear to show a big and important change when it turns out the experiment really has no effect?",
		    answers: [ 
			{ answer: "Yes", isCorrect: true  }, 
			{ answer: "No" },
			{ answer: "Maybe" }, 
		    ],
		    explanation: "Absolutely. An experiment can appear to show big results for many reasons, including not properly taking a random sample (<i>selection bias</i>), running experiments repeatedly until you get the result you want (<i>p-value shopping</i> or <i>reporting bias</i>), throwing away outliers that were not outliers, math errors in the analyses, and many others. <p>You usually want to see a second experiment independently attempt to reproduce the results of the first before getting too confident that the effect the experimenters are claiming is real actually is real.",
		},
	    ],
	},
	{
	    message: "Let's do a couple more questions to explore how you might answer them. How about this one.  What should you be afraid of?",
	    lessonSection: "What Should You Be Afraid Of?",
	    tutorImage: 7,
	    quiz: [
		{
		    question: "What are you afraid of?",
		    answers: [ 
			{ answer: "Sharks" },
			{ answer: "Guns" },
			{ answer: "Cars" },
			{ answer: "Cancer" },
			{ answer: "Crime" },
			{ answer: "Really big rocks" },
			{ answer: "Angry monsters" },
			{ answer: "Something else" },
			{ answer: "Nothing" },
		    ],
		    explanation: "This is a good question to ask. You should think about what you are afraid of before thinking about what you actually should be afraid of. Then you can be surprised by the answer if it is different once you get data.",
		},
	    ],
	    chart: '<div style="text-align: center;"><style scoped>\n text { font-size: 120px; font-family: sans-serif; text-shadow: 0 0 5px rgba(0,0,0,0.5),0 0 10px rgba(0,0,0,0.2); \n}\n</style>\n<svg id=svg-text>\n<g id="fear-text-g">\n<text id="fear-text" text-anchor="middle">FEAR</text>\n<g>\n</svg>\n<script>\n\nvar width = 380,\n height = 300;\n\nvar svg = d3.select("#svg-text")\n .attr("width", width)\n .attr("height", height);\n\nd3.select("#fear-text-g")\n .attr("transform", "translate(" + width / 2 + " " + height / 2 + ")");\n\nvar text = d3.select("#fear-text");\n\ntext\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Grow\n .transition()\n .duration(3600)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(4400)\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Shrink\n .transition()\n .duration(9600)\n .attr("transform", "scale(0.01 0.01)")\n .transition()\n .duration(300)\n .ease("bounce")\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .ease("cubic-in-out")\n .duration(300)\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Breathe\n .transition()\n .duration(1200)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(1000)\n .attr("transform", "scale(0.9 0.9)")\n .transition()\n .duration(1200)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(1000)\n .attr("transform", "scale(0.9 0.9)")\n .transition()\n .duration(1200)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(1000)\n .attr("transform", "scale(0.9 0.9)")\n .transition()\n .duration(1200)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(1000)\n .attr("transform", "scale(0.9 0.9)")\n .transition()\n .duration(1200)\n .attr("transform", "scale(1.2 1.2)")\n .transition()\n .duration(1000)\n .attr("transform", "");</script></div>',
	},
	{
	    message: "What you <i>should</i> be afraid of might be different from what you <i>are</i> afraid of. And what you should be afraid of may be different depending on what you mean.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "What do you think you should be afraid of?",
		    answers: [ 
			{ answer: "What is scary to me" }, 
			{ answer: "What is dangerous" },
			{ answer: "What might cause me to die" }, 
		    ],
		    explanation: "Deciding what the question means is important. You'll get very different answers depending on what exact question you are asking.",
		},
	    ],
	},
	{
	    message: "Let's say we mean, what things are likely to kill you. It's not a bad idea to be afraid of things that are likely to kill you.",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What would you guess is most likely to be a danger to you?",
		    answers: [ 
			{ answer: "Sharks" },
			{ answer: "Guns" },
			{ answer: "Cars" },
			{ answer: "Cancer" },
			{ answer: "Heart attacks" },
			{ answer: "Crime" },
			{ answer: "Really big rocks" },
			{ answer: "Rampaging monsters" },
		    ],
		    explanation: "Start with a hypothesis so you know if you should be surprised by the answer you find. Very good. Let's try to answer this question with data next.",
		},
	    ],
	},
	{
	    message: "We need data! What data might help you determine likely causes of death? Where could you find that kind of data?",
	    tutorImage: 2,
	    quiz: [
		{
		    question: "Where could you look for data on what is dangerous and kills people?",
		    answers: [ 
			{ answer: "Government websites" }, 
			{ answer: "Google searches" },
			{ answer: "The library" }, 
		    ],
		    explanation: "There are government websites that have data on cause of death for people who die, such as CDC.gov and WHO.int. The library usually has free access to databases that otherwise cost money to access, some of which might be able to provide data on the likelihood of severe injuries or death from various causes. Google searches might find studies or news articles that already tried to answer the question, and reading previous attempts to answer this question might give you additional insight and change what you do. All of these are good ideas!",
		},
	    ],
	},
	{
	    message: "It is almost certainly going to be the case that different people have different things to fear. A professional tight-rope walker who lives downtown in a big city is going to have different dangers than a grandmother living in Arizona. A child in rural Mississippi is going to have different dangers than a musician in urban Oregon.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "What factors might make a big difference for what might be dangerous to you?",
		    answers: [ 
			{ answer: "Location" },
			{ answer: "Age" },
			{ answer: "Gender" },
			{ answer: "Work and activities" },
			{ answer: "Genetics" },
			{ answer: "All of the above" },
		    ],
		    explanation: "All of these might matter, some of them a lot. Turns out one of the biggest differences is age. Causes of death are very different for people in their 20s than people in their 70s.",
		},
	    ],
	},
	{
	    message: "If you get the data, for people in the US, it turns out the greatest danger to young people, ages 15-30, is automobile accidents. You should be careful driving or crossing the street, it's by far the biggest danger! The greatest dangers to the elderly are heart attacks and cancers. A lot of what is really dangerous often gets lost by the news media. Let's try comparing a few dangers.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Are you more likely to die from sharks or furniture?",
		    answers: [ 
			{ answer: "Sharks" }, 
			{ answer: "Furniture", isCorrect: true },
		    ],
		    explanation: "Both are rare, but, in the US, you're more than twice as likely to be killed by furniture falling on you than by sharks.",
		},
		{
		    question: "Terrorism or showering?",
		    answers: [ 
			{ answer: "Terrorism" },
			{ answer: "Showering", isCorrect: true },
		    ],
		    explanation: "Falls in the bathroom kill way more people than terrorism, hundreds of times more.",
		},
		{
		    question: "Airplane travel or swimming?",
		    answers: [ 
			{ answer: "Airplane travel" },
			{ answer: "Swimming", isCorrect: true },
		    ],
		    explanation: "Swimming is far more dangerous than flying in an airplane.",
		},
	    ],
	},

	{
	    message: "Back when we were looking at predicting heights, we decided it was important to get height data from people like you for the prediction, so we used recent height data from the United States. This chart shows how much heights vary around the world and over the last century. They vary a lot!",
	    lessonSection: "Adult Heights Around the World",
	    tutorImage: 3,
	    quiz: [
		{
		    question: "How tall was the average man in the US back in 1920?",
		    answers: [ 
			{ answer: "About 173 cm", isCorrect: true }, 
			{ answer: "About 1.7 meters", isCorrect: true  },
			{ answer: "About 5'8\"", isCorrect: true  }, 
		    ],
		    explanation: "These are all correct. A hundred years ago or so, people were shorter in the United States. The average man was about 5'8\" (173 cm or 1.7m) tall back in 1920. Now the average man is 5'10\" (178 cm) tall.",
		},
	    ],
 	    chart: '<div style="margin: 8px;"><style scoped>\n .axis { font: 10px sans-serif; } \n .axis path, .axis line { fill: none; stroke: #000; \n  shape-rendering: crispEdges; } \n .line { fill: none; stroke-width: 1.5px; }\n .line:hover { stroke-width: 2px; }\n .legend text { font: 11px sans-serif; }\n</style>\n<div style="font: 18px sans-serif; margin-bottom: 8px;">Adult male heights by year by region</div>\n<svg id=svg-height-chart width=350 height=300></svg>\n<script>\nvar margin = {top: 5, right: 0, \n bottom: 20, left: 35},\n width = 350 - margin.left - margin.right,\n height = 300 - margin.top - margin.bottom;\n\nvar svg = d3.select("#svg-height-chart")\n .append("g")\n .attr("transform", "translate(" + margin.left + "," + margin.top + ")");\n\nvar xScale = d3.scale.linear()\n .range([0, width]);\n\nvar yScale = d3.scale.linear()\n .range([height, 0]);\n\nxScale.domain([1900, 2010]);\nyScale.domain([160, 180]);\n\nvar xAxis = d3.svg.axis()\n .scale(xScale)\n .orient("bottom")\n .ticks(5, "d");\n\nvar yAxis = d3.svg.axis()\n .scale(yScale)\n .orient("left")\n .ticks(5);\n\nvar line = d3.svg.line()\n .interpolate("basis")\n .x(function(d) { return xScale(d.x); })\n .y(function(d) { return yScale(d.y); });\n\nvar data = [\n { name: "North America",\n values: [ { x: 1900, y: 170 }, { x: 1960, y: 177.5 }, { x: 2010, y: 178.5 } ] },\n { name: "Latin America",\n values: [ { x: 1900, y: 164 }, { x: 1940, y: 165 }, { x: 2010, y: 175 } ] },\n { name: "Europe",\n values: [ { x: 1900, y: 169 }, { x: 1990, y: 178 }, { x: 2010, y: 178.65 } ] },\n { name: "Asia",\n values: [ { x: 1900, y: 163.5 }, { x: 1980, y: 165 }, { x: 2010, y: 174 } ] },\n { name: "Africa",\n values: [ { x: 1900, y: 168 }, { x: 2010, y: 168.5 } ] },\n];\nvar color = d3.scale.category10().domain(data.map(function(d) { return d.name; }));\n\nvar continent = svg.selectAll(".continent")\n .data(data)\n .enter().append("g")\n .attr("class", "continent");\n\ncontinent.append("path")\n .attr("class", "line")\n .attr("d", function(d) { return line(d.values); })\n .style("stroke", function(d) { return color(d.name); });\n\nsvg.append("g")\n .attr("class", "x axis")\n .attr("transform", "translate(0," + height + ")")\n .call(xAxis);\n\nsvg.append("g")\n .attr("class", "y axis")\n .call(yAxis)\n .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Height in cm");\n\nvar legend = svg.append("g")\n .attr("class","legend")\n .attr("transform","translate(" + (width - 90) + "," + (height - 60) + ")")\n .style("font-size","12px");\nlegend.selectAll("text")\n .data(data.map(function(d) { return d.name; }))\n .enter()\n .append("text")\n .attr("x", "1em")\n .attr("y", function(d, i) { return i + "em"; })\n .text(function(d) { return d; });\nlegend.selectAll("rect")\n .data(data.map(function(d) { return d.name; }))\n .enter()\n .append("rect")\n .attr("width", 6)\n .attr("height", 6) \n .style("fill",function(d) { return color(d); }) \n .attr("y", function(d, i) { return (i * 11 - 6) + "px"; });\n\n</script> </div>',
	},
	{
	    message: "You can see that the average male height grew steadily over the 20th century in the US and Europe, nearing the peak around the 1970's in the US and in the 1990's in Europe.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "Why the difference between the United States and Europe?",
		    answers: [ 
			{ answer: "World War II", isCorrect: true }, 
			{ answer: "Genetics" },
			{ answer: "Disco music" },
			{ answer: "Cheeseburgers" },
		    ],
		    explanation: "WWII devastated Europe and caused widespread hardship for most people in Europe for decades afterwards while they rebuilt. The United States came out of WWII intact and had a boom of rapid economic growth in the decades immediately following WWII. <p>Wealth often means better nutrition and taller children. Interesting to see that in the height data, isn't it?.",
		},
	    ],
	},
	{
	    message: "You can also see that male heights started climbing rapidly for Latin America and Asia, with heights in Asia starting a strong upswing in the late 1980s. Why is that?",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What is causing the recent increase in average male height in Latin America and Asia?",
		    answers: [ 
			{ answer: "World War II" }, 
			{ answer: "Genetics" },
			{ answer: "Nutrition", isCorrect: true }, 
			{ answer: "Median per capita income", isCorrect: true }, 
		    ],
		    explanation: "Better nutrition, caused by higher median per capita income, which allows the average person to be able to buy better food for their families, is what is causing the change. <p>The trend line is particularly sharp in Asia, which has seen a surge in economic growth in very recent decades.",
		},
	    ],
	},
	{
	    message: "The correlation between nutrition and income of the average person in a country or region is so strong that height data is often used as a proxy measure for malnutrition and economic growth. The data for this chart came from an international group that tracks and works to improve the well-being of people around the world.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Why is the trend line for Africa different?",
		    answers: [ 
			{ answer: "World War II" }, 
			{ answer: "Genetics" },
			{ answer: "Nutrition", isCorrect: true }, 
			{ answer: "Median per capita income", isCorrect: true }, 
		    ],
		    explanation: "Median GDP per capita and the poverty rate had not improved in most of Africa during most of the 20th century. In the first decade of the 21st century, this trend may have started to change, but it is too early to see that in the height data.",
		},
	    ],
	},
	{
	    message: "As you can see, it matters a lot what data you use when you are trying to answer a question. If you were trying to predict adult heights of teenagers in China, you would need to use recent data from China, not older data or data from the United States or elsewhere, to make that prediction.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "Which is statistical term for using the wrong data?",
		    answers: [ 
			{ answer: "Sampling bias", isCorrect: true }, 
			{ answer: "Selection bias", isCorrect: true },
			{ answer: "Exclusion bias", isCorrect: true }, 
			{ answer: "All of the above", isCorrect: true }, 
		    ],
		    explanation: "All of these are correct and are various forms of picking a non-representative sample when trying to answer your question. To have confidence in your answer, you need to use data on people that are similar to those people you want to know about. <p>This is actually a fairly big problem across many studies and papers. For example, many psychological and medical studies are done on college students or adult men in the United States or Europe, which raises questions about whether the results apply to other groups, such as children, women, people with a different genetic background, or people with very different nutrition or cultural norms. <p>When you use data to answer a question, it is important to get the right data!",
		},
	    ],
	},
	{
	    message: "This is the last question we are going to look at. Should you go to college and, if so, what should you major in?",
	    lessonSection: "College and College Majors",
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What is your goal?",
		    answers: [ 
			{ answer: "More money" }, 
			{ answer: "Meaningful work" },
			{ answer: "Happiness" }, 
		    ],
		    explanation: "You'll get radically different answers depending on what the question means to you. Some majors lead to jobs that pay more. People in different jobs rate their satisfaction and happiness differently. The jobs that pay the most often are not the ones that lead to the highest job satisfaction and happiness.",
		},
	    ],
 	    chart: '<div style="margin-top: 40px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" height="165" width="300" viewBox="0 0 60 33">  <path d="m15.2,11.1,0,5.59c5.67,0.638,10.8,3.12,14.8,6.81,3.96-3.7,9.08-6.17,14.8-6.81v-5.59h-29.5z" fill="#000"/>  <path d="m31.2,2.88,26,5.74c0.659,0.154,0.659,0.401,0,0.555l-26,6.42c-0.659,0.154-1.72,0.154-2.38-0.000022l-26-6.43c-0.659-0.154-0.659-0.401,0-0.555l26-5.74c0.659-0.154,1.72-0.154,2.38-0.0000227z" fill="#000"/>  <path d="m31.1,9.18-0.365,0.319,7.9,4.23-0.0508,6.99c-0.0093,1.28-0.971,1.09-0.971,2.27v7.08c0,2.01,2.84,2.01,2.84,0v-7.08c0-1.1-0.953-1.07-0.951-2.27l0.0117-7.22-8.41-4.32z" fill-rule="evenodd" fill="#000"/>  <path d="m32.6,8.8a2.6,1.1,0,0,1,-5.2,0,2.6,1.1,0,1,1,5.2,0z" fill="#000"/> </svg> </div>',
	},
	{
	    message: "Let's start with hitting the question of whether you should go to college with some data. Let's look at the earnings of people who go to college. What does this tell you about whether you should go to college?",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Another thing to think about, will you definitely finish college once you start it?",
		    answers: [ 
			{ answer: "Yes" }, 
			{ answer: "No" },
			{ answer: "Maybe" }, 
		    ],
		    explanation: "Salaries are much higher for people who finish college. Doing some college is not really better than just a high school degree. If you start college and don't finish, you'll not only get little benefit, but also you may get saddled with a lot of student debt. <p>If you start, you want to graduate, but only about half of people who start at college successfully graduate.",
		},
	    ],
 	    chart: '<div style="margin-top: 15px; margin-left: 10px;"> <style scoped> .bar { fill: steelblue; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 15px;">Earnings by education</div> <svg id=svg-earnings-chart width=380 height=300></svg> <script> var margin = {top: 5, right: 0, bottom: 20, left: 35}, width = 380 - margin.left - margin.right, height = 300 - margin.top - margin.bottom; var svg = d3.select("#svg-earnings-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [ {x: "Master", y: 1329}, {x: "Bachelor", y: 1108}, {x: "Some College", y: 727}, {x: "High School", y: 651}, ]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(4, "$s"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([1, 1500]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .style("font-size", "10px") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "10px") .text("Median weekly salary"); </script> </div>',
	},
	{
	    message: "Next, let's look at what you should major in. Let's start by looking only at salary, what majors lead to jobs that make the most money.",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "If you only care about starting salary, what should you major in?",
		    answers: [ 
			{ answer: "Engineering", isCorrect: true }, 
			{ answer: "Business", isCorrect: true },
			{ answer: "Art History" }, 
		    ],
		    explanation: "Engineering degrees, which usually require strong performance in math, tend to yield the highest salaries. <p>The very highest is petroleum engineering, but most engineering degrees do very well, including computer science. Business degrees do fairly well too, and business is by far the most popular major. Science degrees outside of engineering, like biology or astrophysics, tend to get lower salaries, although PreMed (going for a medical degree) yields extremely high salaries if you finish medical school. <p>Very popular majors like social sciences, nursing, and psychology yield some of the lower salaries.",
		},
	    ],
 	    chart: '<div style="margin-top: 15px; margin-left: 10px;"> <style scoped> .bar { fill: steelblue; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;    shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 10px;">Earnings by major</div> <svg id=svg-earnings-chart width=350 height=300></svg> <script> var margin = {top: 5, right: 0,  bottom: 20, left: 35}, width = 350 - margin.left - margin.right, height = 300 - margin.top - margin.bottom; var svg = d3.select("#svg-earnings-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [  {x: "Engineering", y: 62100 },  {x: "Business", y: 55600 },  {x: "Sciences", y: 42700 },  {x: "Education", y: 40300 },  {x: "Humanities", y: 37800 },  ]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(7, "$s"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([1, 70000]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .style("font-size", "9px") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "10px") .text("Annual salary"); </script> </div>',
	},
	{
	    message: "But this isn't all there is to picking a major. Your job satisfaction, and general happiness with your work, is important. Let's look at surveys of job meaning and satisfaction.",
	    tutorImage: 6,
	    quiz: [
		{
		    question: "If you care about coming home from work feeling like you did something good that day, what major should you pick?",
		    answers: [ 
			{ answer: "Engineering" }, 
			{ answer: "Business" },
			{ answer: "Education" }, 
			{ answer: "Nursing" }, 
		    ],
		    explanation: "Things are getting more complicated now. Majors that lead to jobs that help people &ndash; like nursing, special education, social work, and teaching &ndash; lead to highest career satisfaction and the most meaning, but they also yield some of the lowest salaries. <p>Business does very poorly on meaning and satisfaction, but has one of the highest salaries. Engineering, especially when tied to the medical fields, does well on both meaning and salary, as do medical doctor degrees. And the sciences yield a moderate salary and do well on the job meaning and satisfaction.",
		},
	    ],
 	    chart: '<div style="margin-top: 15px; margin-left: 10px;"> <style scoped> .bar { fill: steelblue; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;    shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 10px;">Majors that lead to meaningful work</div> <svg id=svg-meaningful-chart width=375 height=300></svg> <script> var margin = {top: 15, right: 0,  bottom: 20, left: 35}, width = 375 - margin.left - margin.right, height = 300 - margin.top - margin.bottom; var svg = d3.select("#svg-meaningful-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [  {x: "Nursing", y: 0.86 },  {x: "Special Ed", y: 0.83 },  {x: "Social Work", y: 0.78 },  {x: "Education", y: 0.75 },  {x: "Business", y: 0.45 },  ]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(7, "%"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([0, 1]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .style("font-size", "9px") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text")\n .attr("transform", "rotate(-90)")\n .attr("y", 6)\n .attr("dy", ".71em")\n .style("text-anchor", "end")\n .style("font-size", "9px")\n .text("Percentage who say their work is meaningful")</script> </div>',
	},
	{
	    message: "So, if you go to college, and are committed to completing it, which major should you pick?",
	    tutorImage: 7,
	    quiz: [
		{
		    question: "Which major?",
		    answers: [ 
			{ answer: "Engineering" }, 
			{ answer: "Business" },
			{ answer: "Education" }, 
			{ answer: "Nursing" }, 
			{ answer: "Don't know" },
		    ],
		    explanation: "This is a very personal decision. You need to weigh what you like learning, what you want to do, how much you care about money, and how much you care about job satisfaction. <p>But it's good to go into that decision with as much information as possible. You should know that some of the most popular majors, like communications, humanities, and psychology, usually end up with low salary jobs that also have low job satisfaction. And you should know that degrees like business, engineering, sciences, education, and nursing lead to jobs with either high salary, high satisfaction, or both.",
		},
	    ],
 	    chart: '<div style="margin-top: 8px; margin-left: 10px;"> <style scoped> .bar { fill: steelblue; } .bar:hover { fill: brown; } .axis { font: 10px sans-serif; } .axis path, .axis line { fill: none; stroke: #000;  shape-rendering: crispEdges; } .x.axis path { display: none; } </style> <div style="font: 18px sans-serif; margin-bottom: 10px;">Earnings by major</div> <svg id=svg-earnings-chart width=350 height=200></svg> <div style="font: 18px sans-serif; margin-bottom: 10px; margin-top: 12px;">Majors that say work is meaningful</div> <svg id=svg-meaningful-chart width=350 height=200></svg> <script> var margin = {top: 5, right: 0, bottom: 20, left: 35}, width = 350 - margin.left - margin.right, height = 200 - margin.top - margin.bottom; var svg = d3.select("#svg-meaningful-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [ {x: "Nursing", y: 0.86 }, {x: "Special Ed", y: 0.83 }, {x: "Social Work", y: 0.78 }, {x: "Education", y: 0.75 }, {x: "Business", y: 0.45 }, ]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(7, "%"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([0, 1]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .style("font-size", "9px") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis); var svg = d3.select("#svg-earnings-chart") .append("g") .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); var data = [ {x: "Engineering", y: 62100 }, {x: "Business", y: 55600 }, {x: "Sciences", y: 42700 }, {x: "Education", y: 40300 }, {x: "Humanities", y: 37800 }, ]; var barWidth = width / data.length; var xScale = d3.scale.ordinal() .rangeRoundBands([0, width], 0.4); var yScale = d3.scale.linear() .range([height, 0]); var xAxis = d3.svg.axis() .scale(xScale) .orient("bottom"); var yAxis = d3.svg.axis() .scale(yScale) .orient("left") .ticks(7, "$s"); xScale.domain( data.map( function(d) { return d.x; } )); yScale.domain([1, 70000]); svg.selectAll(".bar") .data(data) .enter().append("rect") .attr("class", "bar") .attr("x", function(d) { return xScale(d.x); }) .attr("width", xScale.rangeBand()) .attr("y", function(d) { return yScale(d.y); }) .attr("height", function(d) { return height - yScale(d.y); }); svg.append("g") .attr("class", "x axis") .attr("transform", "translate(0," + height + ")") .style("font-size", "9px") .call(xAxis); svg.append("g") .attr("class", "y axis") .call(yAxis) .append("text") .attr("transform", "rotate(-90)") .attr("y", 6) .attr("dy", ".71em") .style("text-anchor", "end") .style("font-size", "10px") .text("Annual salary"); </script> </div>',
	},


	// TO DO: Wrap up with review and summary of what we didn't cover, what's next
	{
	    message: "Wrapping up, let's review what we covered. We started with the idea that data answers questions, but quickly found that different questions yield very different answers, and different questions require very different data to answer. We looked at how to answer a question with data and what questions cannot be answered with data we have but would require new data.", 
	    lessonSection: "Review",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "What data might help you predict how tall a teenager in China is likely to be as an adult?",
		    answers: [ 
			{ answer: "Any height data"}, 
			{ answer: "US height data"},
			{ answer: "Height data from China by age", isCorrect: true}, 
		    ],
		    explanation: "The correct answer is the last, you really want recent height data by age from China to be most accurate. <p>But this is a bit of a trick question. All of the answers are at least partially correct. It is true that you can predict the adult height of a teenager in China using non-representative data, like height data for people in the the world, Asia, Europe, or the US, but you will be introducing biases and errors that will make your prediction a lot less accurate. So, any height data <i>might</i> help make this prediction, but what probably would help the most is as close as we can get to a good sample from the population in question, ideally recent height data by age for the same region of China."
		},
            ],
	    chart: '<div style="margin-top:40px; margin-left: 30px;"><svg width=350 height=400 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 700">\n<defs></defs>\n<path d="m180,223c0.0119,0.325-2.08,0.756-6.13,1.07-4.05,0.311-10.1,0.5-17.8-0.0491-7.76-0.549-17.3-1.84-28-4.83-5.35-1.5-11-3.43-16.8-5.94s-11.8-5.61-17.7-9.47c-5.47-3.56-10.9-7.73-16-12.5-5.18-4.8-10.1-10.2-14.8-16.3-4.62-6.03-8.91-12.7-12.7-19.8-3.8-7.17-7.12-14.9-9.82-23-4.33-12.9-7.85-26.8-8.97-41.7-0.818-10.7-0.253-22,2.93-33.1,2.56-8.85,6.95-17.4,13.3-24.7,5.89-6.74,13.2-12.2,21.3-16.1,8.4-4.11,17.5-6.73,26.7-8.18,3.27-0.516,6.57-0.896,9.88-1.15,6.76-0.518,13.5-0.505,20.1-0.0929,22.1,1.37,43.1,6.91,62.2,14.9,10,4.15,19.6,9,28.4,14.6,8.86,5.56,17,11.8,24.3,18.7,7.02,6.66,13.2,14,18,22,4.71,7.8,8.04,16.2,9.55,24.8,1.61,9.2,1.01,18.4-1.24,26.7-1.44,5.27-3.49,10.2-5.88,14.7-2.4,4.5-5.15,8.61-8.06,12.4-4.46,5.74-9.24,10.7-14,15-4.78,4.32-9.54,8.04-14.1,11.3-6.56,4.7-12.7,8.47-18.1,11.6-5.43,3.09-10.2,5.49-14.1,7.34s-6.95,3.14-9.04,3.93c-2.09,0.791-3.23,1.08-3.34,0.865-0.106-0.216,0.823-0.93,2.7-2.13s4.7-2.89,8.36-5.11c3.65-2.22,8.14-4.96,13.3-8.35,5.13-3.39,10.9-7.42,17.1-12.3,4.27-3.39,8.72-7.18,13.1-11.5,4.41-4.31,8.78-9.14,12.8-14.7,2.58-3.58,5-7.45,7.07-11.6s3.79-8.58,4.92-13.3c1.79-7.33,2.11-15.4,0.548-23.3-1.45-7.44-4.57-14.8-8.9-21.8-4.45-7.13-10.2-13.8-16.8-19.9-6.87-6.37-14.6-12.1-23-17.3-8.44-5.15-17.6-9.68-27.2-13.6-18.3-7.44-38.3-12.6-59.1-13.9-6.22-0.368-12.5-0.379-18.7,0.0955-3.06,0.233-6.09,0.581-9.08,1.06-8.44,1.34-16.6,3.65-23.9,7.24-7.02,3.43-13.4,8.04-18.3,13.7-5.32,6.02-9.11,13.3-11.4,20.9-2.9,9.6-3.46,19.8-2.86,29.7,0.852,13.8,4.05,27.1,8,39.6,2.44,7.68,5.45,15,8.91,21.8,3.45,6.84,7.35,13.2,11.6,19,4.22,5.79,8.76,11,13.5,15.7,4.75,4.65,9.7,8.72,14.8,12.2,5.49,3.83,11,6.98,16.5,9.59,5.44,2.61,10.8,4.68,15.8,6.36,10.2,3.35,19.3,5.13,26.8,6.23,7.52,1.1,13.4,1.51,17.4,1.82,4.01,0.308,6.12,0.516,6.13,0.841z" fill-rule="evenodd" fill="#000"/>\n<path d="m177,208c0.444-0.115,1.62,2.6,3.37,7.82,1.75,5.21,4.07,12.9,6.7,22.8,2.63,9.89,5.58,22,8.5,35.9s5.8,29.8,8.25,47.1c2.46,17.4,4.49,36.5,5.5,56.6,1,20.2,0.97,41.5-0.748,63.4-0.0606,0.773-0.123,1.55-0.188,2.32-1.79,21.5-5.2,42.3-10.2,61.5-5,19.3-11.6,37-19.3,52.7-7.83,16-16.9,29.6-25.8,40.9-8.98,11.3-17.9,20.2-25.6,27-7.76,6.82-14.4,11.6-19,14.5-4.65,2.99-7.35,4.26-7.61,3.88-0.262-0.377,1.92-2.38,6.01-6s10.1-8.89,17.2-16.1c7.08-7.2,15.3-16.3,23.5-27.7,8.23-11.3,16.5-24.8,23.7-40.4,7.07-15.3,13.1-32.6,17.7-51.3,4.62-18.7,7.81-39,9.57-60,0.0632-0.755,0.125-1.51,0.184-2.27,1.69-21.5,1.84-42.4,1.08-62.2-0.758-19.9-2.42-38.6-4.42-56-1.99-17.2-4.33-33-6.64-46.9-2.3-13.9-4.57-26.1-6.47-36.1s-3.44-17.9-4.36-23.3c-0.926-5.41-1.24-8.35-0.796-8.46z" fill-rule="evenodd" fill="#000"/>\n<path d="m4.09,209c0.25-0.146,1,0.606,2.28,2.12,1.27,1.52,3.07,3.79,5.5,6.64s5.49,6.26,9.29,10.1c3.79,3.79,8.32,7.96,13.5,12.4,0.000002,0.00001,0.000005,0.00001,0.000007,0.00001,5.54,4.64,11.9,9.52,19,14.4,7.13,4.93,15.1,9.92,23.7,14.9,15.2,8.67,32.6,17.1,51.7,24.6,16,6.3,33.2,12,51.3,16.5,1.62,0.403,3.24,0.795,4.86,1.17,19.2,4.51,38.1,7.37,56,8.32,9.26,0.488,18.3,0.493,26.8-0.0382,8.6-0.531,16.8-1.6,24.5-3.18,8.54-1.75,16.5-4.13,23.6-7.01,7.12-2.87,13.4-6.24,18.8-9.85,0-0.00001,0.00001-0.00001,0.00001-0.00001,7.01-4.65,12.6-9.66,16.9-14.3,5.03-5.38,8.38-10.2,10.7-13.4,2.28-3.28,3.52-5.06,3.89-4.88,0.188,0.0899,0.146,0.662-0.139,1.69-0.285,1.02-0.816,2.5-1.64,4.37-0.829,1.87-1.96,4.14-3.47,6.72s-3.41,5.47-5.79,8.53c-4.07,5.24-9.57,11-16.8,16.4h-0.00001c-5.57,4.18-12.1,8.11-19.5,11.5-7.43,3.4-15.8,6.25-24.7,8.36-8.07,1.91-16.7,3.27-25.6,4.03-8.98,0.768-18.3,0.945-27.9,0.568-18.6-0.719-38.1-3.5-57.9-8.12-1.66-0.389-3.33-0.79-4.99-1.2-18.6-4.62-36.2-10.5-52.5-17.2-20-7-37.6-16-52.9-26-8.7-5-16.6-11-23.7-16s-13.4-11-18.8-16c-0.000002,0-0.000005-0.00001-0.000007-0.00001-5.1-4.82-9.45-9.46-13-13.7s-6.32-8.09-8.4-11.3c-2.07-3.24-3.46-5.87-4.29-7.7-0.825-1.83-1.09-2.88-0.841-3.02z" fill-rule="evenodd" fill="#000"/>\n<path d="m207,466c0.397-0.231,1.67,1.1,3.78,3.72s5.06,6.51,8.95,11.3c3.89,4.82,8.72,10.6,14.6,16.8,5.85,6.27,12.7,13.1,20.6,20,7.88,6.92,16.8,14,26.5,20.9,9.78,6.95,20.4,13.8,31.8,20.3,0.114,0.0659,0.228,0.132,0.342,0.198,17.1,9.84,33.9,18.1,49.5,25.1,15.6,6.97,30,12.6,42.2,17.3,12.2,4.62,22.1,8.2,28.9,10.8,6.83,2.64,10.5,4.34,10.4,5-0.186,0.664-4.26,0.23-11.5-1.27-7.2-1.5-17.5-4.06-30.1-7.87s-27.4-8.87-43.5-15.5c-16.1-6.62-33.4-14.8-50.9-24.9-0.117-0.0673-0.234-0.135-0.351-0.202-11.6-6.7-22.5-13.8-32.4-21.2-9.92-7.35-18.9-14.9-26.7-22.4-7.85-7.48-14.6-14.9-20.1-21.7-5.56-6.85-9.98-13.2-13.3-18.5-3.37-5.36-5.7-9.77-7.11-12.9-1.41-3.1-1.91-4.88-1.52-5.11z" fill-rule="evenodd" fill="#000"/>\n</svg></div>'
	},
	{
	    message: "We also did a light introduction to statistics, touching briefly on probability, odds, histograms, spread and variance of data, normal distributions, mean, standard deviation, prediction, linear regression, statistical tests for significant differences that are unlikely to occur by chance, and biases that can cause problems with our data and results.", 
	    tutorImage: 4,
	    quiz: [
		{
		    question: "What is the likelihood of seeing exactly one heads and one tails when you flip a coin twice?",
		    answers: [ 
			{ answer: "25%"}, 
			{ answer: "50%", isCorrect: true}, 
			{ answer: "75%"},
		    ],
		    explanation: "There are two ways to get this answer. First, you could count all possibilities, HH (both heads), HT (heads, then tails), TH, and TT. Of those, two of the four are exactly one heads and one tails, so the likelihood is 2 in 4 or 50%. Second, you can compute the probability, so adding the probability of getting heads then tails (25%) to the probability of getting tails then heads (25%), so 25% + 25% = 50%."
		},
		{
		    question: "If the average height of a man is 5'10\" with a standard deviation of 3\", how frequently would you expect to see men below 5'4\"?",
		    answers: [ 
			{ answer: "2%", isCorrect: true}, 
			{ answer: "10%"}, 
			{ answer: "50%"},
		    ],
		    explanation: "5'4\" and below is at least two standard deviations away. The likelihood of being at least two standard deviations below the mean, according to the chart, is very small, only about 2%."
		},
            ],
	    chart: '<div style="margin: 8px; font: 24px sans-serif;">Likelihood of Distance from Average</div><div style="margin: 8px; font: 14px sans-serif;">&sigma; means standard deviation, and &mu; means average.<div style="margin-top: 4px;">This is the likelihood of being less than 1, between 1 and 2, beween 2 and 3, and more than 3 standard deviations away from the mean.</div></div><div style="margin: 3px;"><svg xmlns="http://www.w3.org/2000/svg" height="220pt" width="290pt" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 504 252"> <defs> <symbol id="glyph0-1" overflow="visible"> <path d="M0.125-3.53v0.65h6.3v-0.65z"/> </symbol> <symbol id="glyph0-2" overflow="visible"> <path d="M7.06-4.95v-1.05h-2.73c-0.94,0-1.6,0.11-2.14,0.34-1.17,0.54-1.83,1.47-1.83,2.58,0,0.78,0.297,1.58,0.861,2.2,0.62,0.719,1.3,1.03,2.25,1.03,0.81,0,1.51-0.25,2.06-0.75,0.55-0.486,0.86-1.18,0.86-1.82,0-0.92-0.69-1.81-1.97-2.54zm-3.2,0c1.03,1.06,1.26,1.51,1.26,2.5,0,1.25-0.59,2.09-1.48,2.09-1.11,0-2.02-1.22-2.02-2.69,0-1.15,0.74-1.9,1.86-1.9z"/> </symbol> <symbol id="glyph0-3" overflow="visible"> <path d="M5.3-6h-1.07l0.02,4.42c-0.44,0.627-0.84,0.877-1.34,0.877-0.71,0-1.11-0.487-1.11-1.33v-3.97h-1.05v5.77c0,0.25-0.047,0.546-0.141,0.906-0.203,0.748-0.218,0.808-0.218,1.1,0,0.5,0.25,0.85,0.609,0.85,0.34,0,0.58-0.35,0.58-0.89,0-0.25-0.03-0.4-0.22-1.09-0.13-0.438-0.14-0.563-0.14-0.891v-0.141c0.5,0.422,0.76,0.547,1.19,0.547,0.59,0,1.2-0.375,1.84-1.11,0.09,0.375,0.16,0.515,0.28,0.703,0.17,0.25,0.5,0.406,0.85,0.406,0.74,0,1.26-0.531,1.42-1.46l-0.32-0.01c-0.04,0.451-0.29,0.826-0.57,0.826-0.36,0-0.61-0.438-0.61-1.1z"/> </symbol> <symbol id="glyph1-1" overflow="visible"> <path d="M2.66-3.91h0.57c1.16,0,1.75,0.52,1.75,1.55,0,1.06-0.65,1.7-1.75,1.7-1.15,0-1.71-0.574-1.79-1.81h-1.05c0.047,0.69,0.156,1.13,0.359,1.52,0.44,0.812,1.28,1.23,2.44,1.23,1.75,0,2.89-1.05,2.89-2.66,0-1.07-0.42-1.68-1.46-2.03,0.8-0.31,1.19-0.9,1.19-1.76,0-1.45-0.97-2.35-2.58-2.35-1.71,0-2.64,0.94-2.67,2.75h1.06c0-0.51,0.07-0.79,0.19-1.06,0.24-0.47,0.77-0.75,1.42-0.75,0.94,0,1.5,0.55,1.5,1.46,0,0.59-0.2,0.95-0.67,1.14-0.29,0.12-0.67,0.17-1.4,0.18z"/> </symbol> <symbol id="glyph1-2" overflow="visible"> <path d="M6.08-1.05h-4.49c0.11-0.68,0.5-1.14,1.53-1.75l1.21-0.64c1.19-0.65,1.79-1.53,1.79-2.58,0-0.7-0.28-1.36-0.78-1.82s-1.12-0.68-1.93-0.68c-1.08,0-1.88,0.4-2.35,1.11-0.31,0.46-0.435,0.99-0.466,1.85h1.07c0.03-0.56,0.11-0.92,0.25-1.19,0.28-0.52,0.82-0.83,1.47-0.83,0.95,0,1.67,0.67,1.67,1.6,0,0.67-0.39,1.25-1.14,1.67l-1.11,0.62c-1.78,1.02-2.3,1.81-2.39,3.69h5.67z"/> </symbol> <symbol id="glyph1-3" overflow="visible"> <path d="M3.11-6.06v6.06h1.05v-8.52h-0.69c-0.38,1.32-0.61,1.5-2.25,1.71v0.75z"/> </symbol> <symbol id="glyph1-4" overflow="visible"> <path d="M3.92-2.05v2.05h1.06v-2.05h1.25v-0.93h-1.25v-5.54h-0.78l-3.86,5.36v1.11zm0-0.93h-2.65l2.65-3.72z"/> </symbol> <symbol id="glyph1-5" overflow="visible"> <path d="M2.3-1.25h-1.25v1.25h1.25z"/> </symbol> <symbol id="glyph1-6" overflow="visible"> <path d="M2.39-8.22c-1.12,0-2.05,0.92-2.05,2.05,0,1.12,0.926,2.06,2.07,2.06,1.11,0,2.03-0.94,2.03-2.03,0-1.17-0.89-2.08-2.05-2.08zm0,0.84c0.69,0,1.22,0.54,1.22,1.22,0,0.66-0.55,1.21-1.2,1.21-0.68,0-1.24-0.57-1.24-1.22,0-0.67,0.56-1.21,1.22-1.21zm4.92-1.14l-4.75,8.75h0.8l4.73-8.75zm0.94,4.66c-1.11,0-2.03,0.92-2.03,2.03,0,1.13,0.92,2.06,2.05,2.06,1.11,0,2.03-0.937,2.03-2.03,0-1.15-0.89-2.06-2.05-2.06zm0,0.83c0.69,0,1.23,0.55,1.23,1.23,0,0.64-0.56,1.19-1.21,1.19-0.68,0-1.22-0.551-1.22-1.22,0-0.65,0.54-1.2,1.2-1.2z"/> </symbol> <symbol id="glyph1-7" overflow="visible"> <path d="M5.97-6.28c-0.2-1.41-1.11-2.24-2.41-2.24-0.94,0-1.78,0.47-2.28,1.22-0.53,0.83-0.764,1.88-0.764,3.42,0,1.43,0.218,2.35,0.714,3.1,0.46,0.687,1.21,1.06,2.15,1.06,1.6,0,2.78-1.2,2.78-2.87,0-1.58-1.08-2.71-2.61-2.71-0.83,0-1.5,0.33-1.96,0.96,0.02-2.08,0.69-3.24,1.89-3.24,0.75,0,1.27,0.47,1.44,1.3zm-2.55,1.92c1.02,0,1.66,0.72,1.66,1.84,0,1.08-0.72,1.86-1.69,1.86-0.98,0-1.73-0.814-1.73-1.9,0-1.06,0.72-1.8,1.76-1.8z"/> </symbol> <symbol id="glyph1-8" overflow="visible"> <path d="M3.3-8.52c-0.78,0-1.52,0.36-1.96,0.94-0.543,0.75-0.824,1.89-0.824,3.47,0,2.86,0.954,4.39,2.78,4.39,1.79,0,2.78-1.53,2.78-4.33,0-1.65-0.27-2.75-0.83-3.53-0.44-0.59-1.14-0.94-1.95-0.94zm0,0.94c1.14,0,1.7,1.16,1.7,3.44,0,2.41-0.55,3.55-1.72,3.55-1.12,0-1.69-1.19-1.69-3.52s0.57-3.47,1.71-3.47z"/> </symbol> <clipPath id="clip1"> <path d="M28.8,220h60.2v4h-60.2z"/> </clipPath> <clipPath id="clip2"> <path d="M28.8,222h1.2v2h-1.2z"/> </clipPath> <clipPath id="clip3"> <path d="M28.8,0h475v224h-475z"/> </clipPath> </defs> <rect height="252" width="504" y="14.5" x="28.5" fill="#FFF"/> <path stroke-linejoin="round" d="M28.8,0v223h475" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#2070B4" d="M266,223v-222l6,1.11,6,3.3,6,5.4,6,7.3,6,9,6,10.6,6,11.7,6,12.6,6,13.1,6,13.5v135z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M266,223v-222" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#2070B4" d="M207,223v-135l6-13.5,6-13.1,6-12.6,6-11.7,6-10.6,6-9,6-7.3,6-5.4,5-3.3,6-1.11v222z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M207,223v-135" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#6AADD6" d="M326,223v-135l6,13.8,6,13,6,13,6,12,6,11,5,10,6,10,6,8,6,8,6,6v30z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M326,223v-135" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#6AADD6" d="M148,223v-30l6-6,5-8,6-8,6-10,6-10,6-11,6-12,6-13,6-13,6-13.8v135z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M148,223v-30" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#BCD6E6" d="M385,223v-30l6,6,6,4,6,4,6,4,6,2,6,3,6,1,6,2,6,1,6,1v2z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M385,223v-30" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#BCD6E6" d="M88.2,223v-2l5.9-1,5.9-1,6-2,6-1,6-3,6-2,6-4,6-4,6-4,6-6v30z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M88.2,223v-2" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path fill="#EEF3FF" d="M445,223v-2h6l5,1h6l6,1h36z" fill-rule="nonzero"/> <path stroke-linejoin="round" d="M445,223v-2" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g clip-rule="nonzero" clip-path="url(#clip1)"> <path fill="#EEF3FF" d="M28.8,223h35.6l6-1h5.9l6-1h5.9v2z" fill-rule="nonzero"/> </g> <g clip-rule="nonzero" clip-path="url(#clip2)"> <path stroke-linejoin="round" d="M28.8,223" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> </g> <g clip-rule="nonzero" clip-path="url(#clip3)"> <path stroke-linejoin="round" d="M28.8,223h35.6l6-1h5.9l6-1h5.9l5.9-1,5.9-1,6-2,6-1,6-3,6-2,6-4,6-4,6-4,6-6,6-6,5-8,6-8,6-10,6-10,6-11,6-12,6-13,6-13,12-27.3,6-13.1,6-12.6,6-11.7,6-10.6,6-9,6-7.3,6-5.4,5-3.3,6-1.11,6,1.11,6,3.3,6,5.4,6,7.3,6,9,6,10.6,6,11.7,6,12.6,6,13.1,6,13.5,6,13.8,6,13,6,13,6,12,6,11,5,10,6,10,6,8,6,8,6,6,6,6,6,4,6,4,6,4,6,2,6,3,6,1,6,2,6,1,6,1h6l5,1h6l6,1h36" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> </g> <path stroke-linejoin="round" d="M88.2,223h357" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M88.2,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M148,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M207,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M266,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M326,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M385,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M445,223v7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g fill="#000"> <use y="247.241211" x="76.367188" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="85.035156" xlink:href="#glyph1-1"/> </g> <g fill="#000"> <use y="247.241211" x="92.035156" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.241211" x="135.765625" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="144.433594" xlink:href="#glyph1-2"/> </g> <g fill="#000"> <use y="247.241211" x="151.433594" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.241211" x="195.167969" xlink:href="#glyph0-1"/> </g> <g fill="#000"> <use y="247.556641" x="203.832031" xlink:href="#glyph1-3"/> </g> <g fill="#000"> <use y="247.241211" x="210.832031" xlink:href="#glyph0-2"/> </g> <g fill="#000" transform="matrix(1.6461421,0,0,1.3000468,-172.28713,-71.782653)"> <use xlink:href="#glyph0-3" height="252" width="504" y="245.24121" x="262.89844"/> </g> <g fill="#000"> <use y="247.556641" x="318.300781" xlink:href="#glyph1-3"/> </g> <g fill="#000"> <use y="247.241211" x="325.300781" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.556641" x="377.699219" xlink:href="#glyph1-2"/> </g> <g fill="#000"> <use y="247.241211" x="384.699219" xlink:href="#glyph0-2"/> </g> <g fill="#000"> <use y="247.556641" x="437.101562" xlink:href="#glyph1-1"/> </g> <g fill="#000"> <use y="247.241211" x="444.101562" xlink:href="#glyph0-2"/> </g> <g fill="#FFF" transform="matrix(1.4980073,0,0,1.6470508,-148.06928,-85.717169)"> <use xlink:href="#glyph1-1" height="252" width="504" y="137.35742" x="278.60156"/> <use xlink:href="#glyph1-4" height="252" width="504" y="137.35742" x="285.27344"/> <use xlink:href="#glyph1-5" height="252" width="504" y="137.35742" x="291.94531"/> <use xlink:href="#glyph1-3" height="252" width="504" y="137.35742" x="295.28125"/> <use xlink:href="#glyph1-6" height="252" width="504" y="137.35742" x="301.95312"/> </g> <g fill="#FFF" transform="matrix(1.3192204,0,0,1.5294052,-113.83873,-99.666234)"> <use xlink:href="#glyph1-3" height="252" width="504" y="198.736" x="338"/> <use xlink:href="#glyph1-1" height="252" width="504" y="198.736" x="344.67188"/> <use xlink:href="#glyph1-5" height="252" width="504" y="198.736" x="351.34375"/> <use xlink:href="#glyph1-7" height="252" width="504" y="198.736" x="354.67969"/> <use xlink:href="#glyph1-6" height="252" width="504" y="198.736" x="361.35156"/> </g> <g fill="#000" transform="matrix(1.1948531,0,0,1.4141125,-79.796974,-84.704421)"> <use xlink:href="#glyph1-2" height="252" width="504" y="204.31445" x="400.89844"/> <use xlink:href="#glyph1-5" height="252" width="504" y="204.31445" x="407.57031"/> <use xlink:href="#glyph1-3" height="252" width="504" y="204.31445" x="410.90625"/> <use xlink:href="#glyph1-6" height="252" width="504" y="204.31445" x="417.57812"/> </g> <g fill="#000" transform="matrix(1.2738458,0,0,1.3529368,-129.29857,-76.665386)"> <use xlink:href="#glyph1-8" height="252" width="504" y="215.47461" x="460.30078"/> <use xlink:href="#glyph1-5" height="252" width="504" y="215.47461" x="466.97266"/> <use xlink:href="#glyph1-3" height="252" width="504" y="215.47461" x="470.30859"/> <use xlink:href="#glyph1-6" height="252" width="504" y="215.47461" x="476.98047"/> </g> <path stroke-linejoin="round" d="M118,213v-7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M58.5,223v-5" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M415,213v-7" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <path stroke-linejoin="round" d="M474,223v-5" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.75" fill="none"/> <g fill="#FFF" transform="matrix(1.4980073,0,0,1.6470508,-206.28265,-85.988514)"> <use xlink:href="#glyph1-1" height="252" width="504" y="137.35742" x="278.60156"/> <use xlink:href="#glyph1-4" height="252" width="504" y="137.35742" x="285.27344"/> <use xlink:href="#glyph1-5" height="252" width="504" y="137.35742" x="291.94531"/> <use xlink:href="#glyph1-3" height="252" width="504" y="137.35742" x="295.28125"/> <use xlink:href="#glyph1-6" height="252" width="504" y="137.35742" x="301.95312"/> </g> <g fill="#000" transform="matrix(1.1948531,0,0,1.4141125,-377.40546,-84.849677)"> <use xlink:href="#glyph1-2" height="252" width="504" y="204.31445" x="400.89844"/> <use xlink:href="#glyph1-5" height="252" width="504" y="204.31445" x="407.57031"/> <use xlink:href="#glyph1-3" height="252" width="504" y="204.31445" x="410.90625"/> <use xlink:href="#glyph1-6" height="252" width="504" y="204.31445" x="417.57812"/> </g> <g fill="#000" transform="matrix(1.2738458,0,0,1.3529368,-544.85381,-76.395963)"> <use xlink:href="#glyph1-8" height="252" width="504" y="215.47461" x="460.30078"/> <use xlink:href="#glyph1-5" height="252" width="504" y="215.47461" x="466.97266"/> <use xlink:href="#glyph1-3" height="252" width="504" y="215.47461" x="470.30859"/> <use xlink:href="#glyph1-6" height="252" width="504" y="215.47461" x="476.98047"/> </g> <g fill="#FFF" transform="matrix(1.3192204,0,0,1.5294052,-289.27682,-99.481853)"> <use xlink:href="#glyph1-3" height="252" width="504" y="198.736" x="338"/> <use xlink:href="#glyph1-1" height="252" width="504" y="198.736" x="344.67188"/> <use xlink:href="#glyph1-5" height="252" width="504" y="198.736" x="351.34375"/> <use xlink:href="#glyph1-7" height="252" width="504" y="198.736" x="354.67969"/> <use xlink:href="#glyph1-6" height="252" width="504" y="198.736" x="361.35156"/> </g> </svg> </div>',
	},
	{   message: "Now, when the news tells you to be scared of sharks, will you know if you should be? If you keep staying up late and your grades start dropping, will you wonder if those are related? Do you have new ideas about what majors to pick in college? Do you know what might matter if you want to live longer? Data and statistics let you separate spin from fact and help you make well-informed choices at work and in life.",
	    tutorImage: 3,
	    quiz: [
		{
		    question: "Which is true?",
		    answers: [
			{ answer: "You are going to be eaten by a shark" },
			{ answer: "It's safer to drive than fly" },
			{ answer: "Four hours of sleep is plenty" },
			{ answer: "A bear will eat you if the shark doesn't" },
			{ answer: "None of these", isCorrect: true },
		    ],
		    explanation: "The data says none of these are true. Driving rather than flying is much more dangerous. You aren't likely to get eaten by a shark, bear, or anything else. And, lack of sleep increases your risk of obesity, illness, and dying, in addition to hurting your grades, reducing your performance at work, and making you grumpy.",
		},
	    ],
	    chart: '<div style="text-align: center; margin-top: 80px;"><svg xmlns="http://www.w3.org/2000/svg" height="130" width="330" viewBox="0 0 500 200">  <defs id="defs2926">   <linearGradient id="linearGradient3026" y2="75.3" gradientUnits="userSpaceOnUse" x2="504" y1="75.3" x1="-2.97">    <stop id="stop3787" stop-color="#010167" stop-opacity="0" offset="0"/>    <stop id="stop3793" stop-color="#010167" offset="0.312"/>    <stop id="stop3795" stop-color="#010167" offset="0.758"/>    <stop id="stop3789" stop-color="#010167" stop-opacity="0" offset="1"/>   </linearGradient>  </defs>  <path id="path2948" d="m292,15.3c-54.8,2.18-85.2,51.7-101,76.2-77-3.68-138,10.8-191,33.1l4.25,10.2c52.6-22.1,112-36.3,189-32.2a5.5,5.5,0,0,0,4.94,-2.53c14.3-22.5,39.9-65.7,84-72.8-3.4,8.69-5.75,19.8-6.41,31.5-0.464,8.3,0.0217,16.7,2.16,24.2,2.13,7.56,6.04,14.5,12.7,18.8,7.09,4.57,18.2,6.68,33.2,8.81s33.6,3.78,53.7,5.22c40.1,2.88,86,4.98,120,8.53l1.16-10.9c-34.3-3.61-80.3-5.7-120-8.56-19.9-1.43-38.3-3.06-52.9-5.12-14.6-2.07-25.6-5.11-28.8-7.19-3.7-2.38-6.37-6.62-8.03-12.5s-2.2-13.2-1.78-20.6c0.831-14.9,5.88-30.6,9.28-35.5a5.5,5.5,0,0,0,-4.75,-8.62z" style="block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" fill="url(#linearGradient3026)"/> </svg></div>',
	},
	{
	    message: "Let's also discuss what we didn't cover here. It's a lot. This isn't a statistics textbook, so we didn't have anything like complete coverage of statistics. In any depth, we didn't cover probability, all the common types of distributions or fully discuss normal distributions, nor cover all the descriptive metrics (we didn't do mode, range, quantiles, standard error, variance, and many types of charts and plots).",
	    lessonSection: "What We Didn't Cover",
	    tutorImage: 1,
	    quiz: [
		{
		    question: "But we did discuss why calculating both the median and mean might be useful. Why was that?",
		    answers: [ 
			{ answer: "More work is always good"},
			{ answer: "Helps find problems like outliers", isCorrect: true}, 
			{ answer: "Not useful, they're the same"}, 
		    ],
		    explanation: "The median is the middle point, what you get after sorting the data and jumping to the center. The mean is the average, what you get after adding everything up. <p>While both describe the most common value in the data, the mean is susceptible to outliers. Hence the old joke about what happens when a billionaire walks into the room, everyone else in the room, on average, is now a millionaire. But the mean is very useful, especially if the distribution is approximately normal, since we can then use it and things like standard deviation to predict data we haven't actually seen."
		},
            ],
	    chart: '<div style="margin: 8px;">\n<div style="font: 24px sans-serif; margin-bottom: 8px;">Formula for computing the average</div>\n<div style="font: 14px sans-serif; line-height: 16px; margin-bottom: 8px;"><span style="vertical-align: 3px;">&sum;</span> means sum, x<sub>i</sub> is each item, and n is the number of items.<br>So, this formula just means add up everything, then divide by the number of items we added together.</div>\n<br><div style="text-align: center;"><svg height="100pt" width="110pt" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.0734 63.157">\n<defs>\n<path id="g0-88" d="M31.5,34.8l3-7.9h-0.613c-0.987,2.6-3.59,4.2-6.49,5-0.5,0.1-2.9,0.8-7.7,0.8h-15l12.6-14.9c0.2-0.2,0.3-0.3,0.3-0.4,0,0,0-0.1-0.2-0.4l-11.6-15.8h13.6c3.37,0,5.57,0.35,5.87,0.4,1.3,0.2,3.5,0.62,5.4,1.87,0.6,0.4,2.3,1.52,3.2,3.53h0.609l-3.01-6.99h-29.4c-0.57,0-0.6,0.0249-0.67,0.174-0.03,0.075-0.03,0.548-0.03,0.821l13.2,18-12.9,15.1c-0.25,0.3-0.25,0.4-0.25,0.5,0,0.2,0.22,0.2,0.67,0.2h29.4z"/>\n<path id="g1-105" d="M7.04-3.56c0-0.12-0.1-0.22-0.25-0.22-0.22,0-0.25,0.07-0.37,0.5-0.65,2.26-1.67,3.03-2.49,3.03-0.3,0-0.65-0.074-0.65-0.821,0-0.67,0.3-1.42,0.58-2.16l1.74-4.63c0.07-0.2,0.25-0.65,0.25-1.12,0-1.02-0.75-2.02-1.97-2.02-2.29,0-3.21,3.64-3.21,3.83,0,0.1,0.099,0.23,0.273,0.23,0.225,0,0.245-0.1,0.345-0.45,0.6-2.09,1.55-3.11,2.52-3.11,0.22,0,0.64,0.1,0.64,0.85,0,0.64-0.32,1.46-0.52,2.01l-1.74,4.63c-0.15,0.4-0.3,0.8-0.3,1.24,0,1.12,0.77,2.02,1.97,2.02,2.29,0,3.18-3.63,3.18-3.81zm-0.2-11.9c0-0.4-0.3-0.8-0.84-0.8-0.58,0-1.22,0.5-1.22,1.1,0,0.7,0.52,0.9,0.82,0.9,0.67,0,1.24-0.7,1.24-1.2z"/>\n<path id="g1-110" d="M5.13-7.29c0.05-0.15,0.67-1.39,1.59-2.19,0.64-0.62,1.49-1.02,2.46-1.02,1.02,0,1.32,0.77,1.32,1.77,0,1.42-1,4.25-1.49,5.6-0.23,0.59-0.35,0.92-0.35,1.36,0,1.12,0.77,2.02,1.94,2.02,2.3,0,3.2-3.66,3.2-3.81,0-0.12-0.1-0.22-0.2-0.22-0.3,0-0.3,0.07-0.4,0.5-0.6,2.04-1.5,3.03-2.5,3.03-0.3,0-0.6-0.025-0.6-0.821,0-0.62,0.2-1.37,0.4-1.72,0.5-1.36,1.5-4.15,1.5-5.57,0-1.49-0.9-2.64-2.74-2.64-2.22,0-3.39,1.6-3.84,2.22-0.07-1.42-1.09-2.22-2.19-2.22-0.79,0-1.34,0.5-1.76,1.35-0.45,0.89-0.798,2.39-0.798,2.48s0.099,0.23,0.273,0.23c0.195,0,0.225-0.03,0.375-0.6,0.4-1.52,0.84-2.96,1.84-2.96,0.57,0,0.77,0.4,0.77,1.17,0,0.55-0.25,1.52-0.42,2.29l-0.7,2.69c-0.1,0.47-0.37,1.59-0.5,2.04-0.17,0.64-0.44,1.81-0.44,1.94,0,0.348,0.27,0.622,0.64,0.622,0.3,0,0.65-0.15,0.85-0.523,0.05-0.124,0.27-0.996,0.4-1.5l0.54-2.24,0.83-3.28z"/>\n<path id="g1-120" d="M11.8-10.2c-0.8,0.2-1.1,0.8-1.1,1.27,0,0.6,0.5,0.79,0.8,0.79,0.8,0,1.3-0.64,1.3-1.31,0-1.05-1.2-1.55-2.3-1.55-1.47,0-2.31,1.52-2.54,1.99-0.57-1.89-2.11-1.99-2.56-1.99-2.54,0-3.88,3.29-3.88,3.83,0,0.1,0.1,0.23,0.27,0.23,0.2,0,0.25-0.15,0.3-0.25,0.85-2.76,2.51-3.31,3.23-3.31,1.12,0,1.35,1.07,1.35,1.67,0,0.54-0.15,1.12-0.45,2.31l-0.85,3.41c-0.37,1.49-1.09,2.86-2.41,2.86-0.12,0-0.75,0-1.27-0.323,0.9-0.174,1.1-0.918,1.1-1.22,0-0.5-0.38-0.8-0.85-0.8-0.6,0-1.24,0.52-1.24,1.32,0,1.05,1.17,1.52,2.24,1.52,1.19,0,2.04-0.946,2.56-1.97,0.4,1.47,1.64,1.97,2.56,1.97,2.54,0,3.84-3.26,3.84-3.81,0-0.12-0.1-0.22-0.2-0.22-0.2,0-0.3,0.12-0.3,0.32-0.7,2.19-2.14,3.21-3.26,3.21-0.88,0-1.35-0.647-1.35-1.67,0-0.54,0.1-0.94,0.5-2.58l0.87-3.39c0.37-1.49,1.22-2.61,2.34-2.61,0.1,0,0.8,0,1.3,0.3z"/>\n<use id="g2-105" xlink:href="#g1-105" transform="scale(0.833601)"/>\n<use id="g2-110" xlink:href="#g1-110" transform="scale(0.833601)"/>\n</defs>\n<g transform="matrix(1.12578 0 0 1.12578 -65.342 -61.02)">\n<use y="56.488" x="57.8248" xlink:href="#g0-88"/>\n<use y="80.1242" x="97.9093" xlink:href="#g1-120"/>\n<use y="85.1513" x="111.753" xlink:href="#g2-105"/>\n<rect y="94.8" width="61.4" x="57.8" height="0.995"/>\n<use y="110.101" x="82.4418" xlink:href="#g2-110"/>\n</g>\n</svg>\n</div></div>'
	},
	{
	    message: "There is more to learn about how to calculate a linear regression, other types of regressions (other than linear), how to calculate tests of statistical significance that show a difference is unlikely from chance (like the z-test or p-values), how to collect data and do sampling correctly to avoid biases, details on hypothesis testing, statistical theory, machine learning, or large scale data analysis, among many other things.",
	    tutorImage: 2,
	    quiz: [
		{
		    question: "Why is linear regression \"linear\"?",
		    answers: [ 
			{ answer: "Because it was invented by a guy named Lin"}, 
			{ answer: "Because it uses linear equations", isCorrect: true }, 
			{ answer: "Because it is a model based on lines", isCorrect: true },
		    ],
		    explanation: "Linear regression uses linear equations (in 2-dimensions, a line) to model the relationship between the variables. <p>There are some relationships that are non-linear, such as y = x<sup>2</sup> or y = 2<sup>x</sup>, which can only be poorly approximated using a line, but can be modeled very well using a curve. Sometimes people use non-linear models for these, sometimes they use many linear models to approximate a curve or complex shape, or sometimes they transform the data (such as taking the square root or log of the data) to make it easier to model using a linear model. <p>This is only an introduction, so all we can do is touch on this topic, but, as you dive in deeper and work more with data, you'll find linear regression and linear models end up working surprisingly well for much more than you might expect.",
		},
            ],
	    chart: '<div style="margin: 8px;"><div style="text-align:center;"><svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" height="350" width="350" stroke-width="28.2" viewBox="0 0 16000 15000"><path stroke="none" d="M8030,15000h-8030v-15000h16100v15000h-8070z" fill="#FFF"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M2200,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M2200,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M3680,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M3680,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M5160,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M5160,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M6640,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M6640,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M8120,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M8120,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M9600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M9600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M11100,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M11100,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M12600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M12600,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M14000,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M14000,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M15500,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M15500,14400v-100" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14300h14800" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,14300h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,14300h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,12900h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,12900h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,11500h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,11500h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,10100h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,10100h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,8730h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,8730h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,7340h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,7340h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,5950h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,5950h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,4560h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,4560h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,3170h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,3170h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,1780h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,1780h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,393h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M564,393h150" fill="none"/><path stroke-linejoin="round" stroke="#BBB" d="M714,14300v-13900" fill="none"/><path stroke="none" d="M6510,7910v250h250v-250h-250z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M6510,7910v250h250v-250h-250z" fill="none"/><path stroke="none" d="M8000,9990v210h240v-210h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M8000,9990v210h240v-210h-240z" fill="none"/><path stroke="none" d="M9480,6520v250h240v-250h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M9480,6520v250h240v-250h-240z" fill="none"/><path stroke="none" d="M7250,5830v250h250v-250h-250z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M7250,5830v250h250v-250h-250z" fill="none"/><path stroke="none" d="M9480,3740v250h240v-250h-240z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M9480,3740v250h240v-250h-240z" fill="none"/><path stroke="none" d="M10200,1660v250h300v-250h-300z" fill="#049"/><path stroke-linejoin="round" stroke="#049" d="M10200,1660v250h300v-250h-300z" fill="none"/><defs/><path stroke-linejoin="round" d="M5160,10900,11800,1600" stroke="#579d1c" stroke-width="102" fill="none"/><path d="m9600,6610a1.5,1.5,0,1,1,-3,0,1.5,1.5,0,1,1,3,0z" fill="#000"/><path stroke-linejoin="miter" opacity="0.6" d="M340,235c-32-24-32-24-32-24" transform="matrix(28.22,0,0,28.22,-5.1676436e-5,0)" stroke-dashoffset="0" stroke="#ff2a2a" stroke-linecap="butt" stroke-miterlimit="4" stroke-dasharray="2,4" stroke-width="2" fill="#f22"/></svg></div><div style="font-size: 12px;">The green line is a model of the relationship between the two dimensions (x and y) of the data points. The red dotted line is the error for one of the data points. A linear regression tries to pick a green line that minimizes the error for all the data.</div></div>',
	},
	{
	    message: "Congratulations! You have puzzled your way through this introduction to data and statistics, and now you better understand how they can help you to answer questions.",
	    lessonSection: "The End",
	    tutorImage: 5,
	    quiz: [
		{
		    question: "Did you like this? Did you like Data Maven?",
		    answers: [ 
			{ answer: "Absolutely!"}, 
			{ answer: "Interesting."}, 
			{ answer: "It was okay"},
			{ answer: "I don't know, maybe"},
			{ answer: "Not really"},
		    ],
		    explanation: "Statistics is really about giving you the power to answer questions and predict the future. With data and statistics, you can do things others can't. It's like a superpower!"
		},
            ],
	    chart: '<div style="text-align: center;"><style scoped>\n text { font-size: 60px; font-family: sans-serif; }\n</style>\n<svg id=svg-text>\n<g id="data-maven-text-g">\n<text id="data-maven-text" text-anchor="middle">Data Maven</text>\n<g>\n</svg>\n<script>\n\nvar width = 380,\n height = 400;\n\nvar svg = d3.select("#svg-text")\n .attr("width", width)\n .attr("height", height);\n\nd3.select("#data-maven-text-g")\n .attr("transform", "translate(" + width / 2 + " " + height / 2 + ")");\n\nvar text = d3.select("#data-maven-text");\n\ntext\n // Do nothing\n .transition()\n .duration(2000)\n .attr("transform", "")\n // Shrink\n .transition()\n .duration(1600)\n .attr("transform", "scale(0.1 0.1)")\n .transition()\n .duration(400)\n .ease("bounce")\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Rotate\n .transition()\n .duration(8000)\n .ease("back-in")\n .attr("transform", "rotate(160)")\n .transition()\n .ease("cubic-in-out")\n .duration(1000)\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Jump around\n .transition()\n .duration(800)\n .ease("bounce")\n .attr("transform", "translate(-20 -10)")\n .transition()\n .duration(800)\n .ease("bounce")\n .attr("transform", "translate(20 10)")\n .transition()\n .duration(800)\n .ease("bounce")\n .attr("transform", "translate(20 -30)")\n .transition()\n .duration(800)\n .ease("bounce")\n .attr("transform", "translate(-20 30)")\n .transition()\n .duration(800)\n .ease("bounce")\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(5000)\n .attr("transform", "")\n // Grow, then shrink\n .transition()\n .duration(400)\n .ease("bounce")\n .attr("transform", "scale(.2 3)")\n .transition()\n .duration(400)\n .attr("transform", "scale(.2 .2)")\n .transition()\n .duration(400)\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Rotate\n .transition()\n .duration(400)\n .attr("transform", "rotate(-40)")\n .transition()\n .duration(400)\n .attr("transform", "rotate(140)")\n .transition()\n .duration(1200)\n .attr("transform", "")\n // Do nothing\n .transition()\n .duration(3000)\n .attr("transform", "")\n // Shrink\n .transition()\n .duration(1600)\n .ease("bounce")\n .attr("transform", "scale(0.01 0.01)")\n .transition()\n .duration(400)\n .ease("bounce")\n .attr("transform", "")\n;\n\n</script>\n</div>',
	},
	{
	    message: "Data Maven was an introduction to data and statistics. What's next? If you want more, there are a lot of good books on data and statistics (\"Cartoon Guide to Statistics\" is a fun start) and free online classes (from Coursera, Udacity, Khan Academy, and others). We hope you enjoyed it!", 
	    tutorImage: 1,
	    quiz: [
		{
		    question: "Data and statistics, what do you think?",
		    answers: [ 
			{ answer: "I love data and statistics! Give me more!"}, 
			{ answer: "There's a little math, sure, but it's really interesting!"}, 
			{ answer: "Data! Yum! Data! Yummy, yummy data!"},
			{ answer: "I need more! This can't be over. Give me more!"},
		    ],
		    explanation: "Math, statistics, data analysis, and programming, these are all tools that let us do more. If you go and learn more about statistics, you'll be able to look at large amounts of data, answer questions that baffle others, and have the power to predict the future. Go, learn more, learn more about data and statistics!"
		},
            ],
	    chart: '<div style="text-align: center;">\n<svg id=svg-force-chart></svg>\n<script>\n\nvar width = 390,\n height = 300;\n\nvar nodes = [];\nvar foci = [];\n\n// Draw a D\nvar x = 40;\nvar y = 60;\nvar dx = 20;\nvar dy = 10;\nfor (var i = 0; i < 10; i++) {\n foci.push({x: x, y: y + i * dy});\n}\ndy = 4;\nfor (var i = 0; i <= 3; i++) {\n foci.push({x: x + i * dx, y: y + i * i * dy});\n}\ndy = -4;\ny = 150;\nfor (var i = 0; i <= 3; i++) {\n foci.push({x: x + i * dx, y: y + i * i * dy});\n}\nfoci.push({x: 102, y: 105});\n\n// Draw an A\nvar x = 140;\nvar y = 60;\nvar dx = 7;\nvar dy = 15;\nfoci.push({x: x, y: y});\nfor (var i = 1; i <= 6; i++) {\n foci.push({x: x - i * dx, y: y + i * dy});\n foci.push({x: x + i * dx, y: y + i * dy});\n if (i == 3) {\n foci.push({x: x - dx, y: y + i * dy});\n foci.push({x: x + dx, y: y + i * dy});\n }\n}\n\n// Draw a T\nvar x = 225;\nvar y = 60;\nvar dx = 6;\nvar dy = 10;\nfoci.push({x: x, y: y});\nfor (var i = 1; i <= 9; i++) {\n if (i % 2 == 0) {\n foci.push({x: x - i * dx, y: y });\n foci.push({x: x + i * dx, y: y });\n }\n foci.push({x: x, y: y + i * dy});\n}\n\n\n// Draw an A\nvar x = 300;\nvar y = 60;\nvar dx = 7;\nvar dy = 15;\nfoci.push({x: x, y: y});\nfor (var i = 1; i <= 6; i++) {\n foci.push({x: x - i * dx, y: y + i * dy});\n foci.push({x: x + i * dx, y: y + i * dy});\n if (i == 3) {\n foci.push({x: x - dx, y: y + i * dy});\n foci.push({x: x + dx, y: y + i * dy});\n }\n}\n\nvar maxnodes = foci.length;\n\nvar forceclosure = function() { var svg = d3.select("#svg-force-chart")\n .attr("width", width)\n .attr("height", height);\nvar idsalt = Math.random(); svg.attr("id", "#svg-force-chart" + idsalt); \nvar mousepos = {x: -100, y: -100};\nsvg.on("mousemove", function() {\n mousepos.x = d3.mouse(this)[0];\n mousepos.y = d3.mouse(this)[1];\n});\nsvg.on("mouseleave", function() {\n mousepos.x = -1000;\n mousepos.y = -1000;\n});\n\nvar force = d3.layout.force()\n .nodes(nodes)\n .links([])\n .gravity(0)\n .friction(0.7)\n .charge(-20)\n .size([width, height])\n .on("tick", tick);\n\nforce.start();\n\n\nvar node = svg.selectAll("circle");\n\nfunction tick(e) {\n if (!document.getElementById("#svg-force-chart" + idsalt)) { force.stop(); return; }\n if (( nodes.length < maxnodes) && ( Math.random() < 0.2 )) {\n nodes.push({id: nodes.length});\n force.start();\n\n node = node.data(nodes);\n\n node.enter().append("circle")\n  .attr("class", "node")\n  .attr("cx", function(d) { return d.x; })\n  .attr("cy", function(d) { return d.y; })\n  .attr("r", 8)\n  .style("fill", function(d) { return d3.rgb(d.y, d.x, 255); })\n  .style("stroke", "#333");\n }\n\n var k = .3 * e.alpha;\n\n // Push nodes toward their designated focus.\n nodes.forEach(function(o, i) {\n o.y += (foci[o.id].y - o.y) * k;\n o.x += (foci[o.id].x - o.x) * k;\n });\n\n // Make the nodes flee the mouse\n var fleeStrength = 50.0;\n nodes.forEach(function(o, i) {\n var dy = mousepos.y - o.y;\n // Min diff should be 1\n if (dy == 0) { dy = 1; }\n dy += dy / Math.abs(dy);\n var dx = mousepos.x - o.x;\n // Min diff should be 1\n if (dx == 0) { dx = 1; }\n dx += dx / Math.abs(dx);\n var dist = dx * dx + dy * dy;\n o.y -= fleeStrength * dy / dist;\n o.x -= fleeStrength * dx / dist;\n });\n\n force.resume();\n\n node\n  .style("fill", function(d) { return d3.rgb(d.y, d.x, 255); })\n  .attr("cx", function(d) { return d.x; })\n  .attr("cy", function(d) { return d.y; });\n}\n};\nforceclosure();\n</script>\n</div>',
	},
    ];


// Images for tutor, referenced by the lessons to switch
var tutorImages = [ "i/maven1-h250.png",
		    "i/maven2-h250.png",
		    "i/maven3-h250.png",
		    "i/maven4-h250.png",
		    "i/maven5-h250.png",
		    "i/maven6-h250.png",
		    "i/maven7-h250.png",
		  ];
