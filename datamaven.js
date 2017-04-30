// Copyright 2014 Geeky Ventures

// Globals for lesson state
var currentLesson = 0;
var currentLessonStorageName = "dataMavenCurrentLesson";

// Init the lessons
if (window.localStorage && window.localStorage[currentLessonStorageName] != null) {
    // Ooo, HTML5 storage is fun!  Cookies aren't needed in this case, since
    // the server doesn't care about this data.  Anyway, load the last lesson
    // this person was on, if any.
    data = window.localStorage[currentLessonStorageName];
    data = parseInt(data, 10);
    if (!isNaN(data) && data >= 0 && data < lessons.length) {
	// We're paranoid, but the data checks out, use it.
	currentLesson = data;
    }
}

// Special functionality to allow teachers to bookmark a particular lesson
if (window.location.hash) {
    var jumpTo = window.location.hash.slice(1);
    // Allow people to jump to lessons (overriding the HTML5 storage) using
    // hash locations in their URL.  This is useful for, for example, teachers.
    for (var i = 0; i < lessons.length; i++) {
	var section = lessons[i].lessonSection;
	if (section && section.indexOf(jumpTo) == 0) {
	    currentLesson = i;
	    break;
	}
    }
    // Might want to clear the URL, but leave it alone for now
    // window.location.hash = "";
}

// The Lesson Sections info link requires some special set up since
// the content is generated dynamically
// Warning: There's some gotchas here, this needs to be done with the original
// lessons array (so before initLessonData(), which modifies that, though maybe
// it shouldn't), and also depends on none of the lesson sections having the
// same name (though it warns if they do).
var data = "";
for (var i = 0; i < lessons.length; i++) {
    var nameUsed = {};
    var section = lessons[i].lessonSection;
    if (section) {
	if (nameUsed[section]) {
	    console.log("Warning: Some lesson sections have the same name, that's a problem.");
	} else {
	    var jsLambda = "$.modal.close(); jumpToLesson(" + i + "); return false;";
	    data += '<li><a href="#' + section + '" onclick="' + jsLambda + '">' + section + '</a>'
	    nameUsed[section] = 1;
	}
    }
}
$('#lesson-sections-list').html(data);

initLessonData();
initLesson();

function initLessonData() {
    var keys = ["quiz", "chart", "lessonSection", "tutorImage"];
    var prevLesson = {};
    // Any defined value should be copied forward into any nulls
    for (i = 0; i < lessons.length; i++) {
	keys.forEach( function(key) {
	    if (key in lessons[i]) {
		prevLesson[key] = lessons[i][key];
	    } else {
		lessons[i][key] = prevLesson[key];
	    }
	});
    }
}

function nextLesson() {
    var prevLesson = currentLesson;
    currentLesson += 1;
    // Don't advance past the beginning or end
    if (currentLesson >= lessons.length) {
	currentLesson = lessons.length - 1;
    } else if (currentLesson < 0) {
	currentLesson = 0;
    }
    initLesson(prevLesson);
}

function changeTutorMessage(message) {
    var tutorMessage = $('#tutor-message');
    if (tutorMessage.html().length < 2) {
	// There's nothing there yet, so put something in immediately
	tutorMessage.html(message);
    } else {
	// New message with nice transition
	tutorMessage.stop(true).fadeTo(250, 0.1, function() {
	    tutorMessage.html(message);
	    tutorMessage.fadeTo(500, 1.0);
	});
    }
}

function changeLessonSection(name) {
    var lessonSection = $('#lesson-section');
    // Do nothing if the lessonSection is the same
    if (lessonSection.html() == name) { return; }
    // Show the name of the section of lessons with nice transition
    lessonSection.stop(true).fadeTo(50, 0.5, function() {
	lessonSection.html(name);
	lessonSection.fadeTo(250, 1.0);
    });
}

function changeTutorImage(filename) {
    var currentTutorImage = $('#tutor-img');
    var imgPath = filename;
    // Do nothing if the tutor image is the same
    if (currentTutorImage.attr("src") == imgPath) { return }

    // We need to make sure the image is loaded, so change the
    // image in this rather complicated way
    var i = new Image();
    // Very small chance of a race condition here because we wait for the image to load
    // Deal with it by aborting if the tutorImage has changed by the time this is called
    var oldTutorImage = lessons[currentLesson].tutorImage;
    i.onload = function() {
	if (oldTutorImage != lessons[currentLesson].tutorImage) { return }
	// Show the new tutor with a nice transition
	currentTutorImage.stop(true, true).fadeTo(100, 0.7, function() {
	    currentTutorImage.attr("src", imgPath);
	    currentTutorImage.fadeTo(200, 1.0);
	});
    };
    i.src = imgPath;
}

function createQuizHtml(quiz) {
    // A quiz is an array where each element of the array
    // is an object with question, answers, and explanation.
    // Answers is also an array of objects with answer and
    // isCorrect.  If at least one of the answers isCorrect,
    // then we should use a greenish color when it is picked
    // and a reddish color for all not isCorrect answers.
    // Finnaly, explanation should start hidden and show
    // the first time any radio button is picked.
    // To do all this, we have to create divs, buttons,
    // and bind javascript code to each of the radio buttons.
    var html = "";
    for (var i = 0; i < quiz.length; i++) {
	var quizItem = quiz[i];
	// Start a new quiz item
	html += "<div class=quiz-question-container>";
	// The div for the question itself
	html += "<div class=quiz-question>" + quizItem.question + "</div>";
	// Radio buttons for each of the multiple choice answers
	var answers = quizItem.answers;
	// First see how many answers are marked isCorrect
	var numCorrect = 0;
	for (var j = 0; j < answers.length; j++) {
	    var answer = answers[j];
	    if (answer.isCorrect) {
		numCorrect++;
	    }
	}
	// Start all the answers
	html += "<div class=quiz-answers>";
	for (var j = 0; j < answers.length; j++) {
	    var answer = answers[j];
	    // Each answer
	    html += "<div class=quiz-answer>";
	    html += "<label class=quiz-button>";
	    html += "<input type=radio name=question"+ i +" />";
	    // Spans for custom radio button
	    html += "<span class=outer>";
	    if (answer.isCorrect) {
		html += "<span class=inner-correct>";
	    } else if (numCorrect > 0 && !answer.isCorrect) {
		html += "<span class=inner-wrong>";
	    } else {
		html += "<span class=inner>";
	    }
	    html += "</span></span>";
	    html += "<span class=quiz-answer-text>" + answer.answer + "</span>";
	    html += "</label>";
	    // Done with this answer
	    html += "</div>";
	}
	// We're done with all the answers
	html += "</div>";
	// The div for the explanation 
	html += "<div class=quiz-explanation>" + quizItem.explanation + "</div>";
	// And we're done with this quiz item
	html += "</div>";
    }
    return html;
}


function changeQuiz(quiz) {
    var div = $('#quiz');
    
    // We have to build up the html for the quiz.
    var quizHtml = createQuizHtml(quiz);
    div.stop(true).fadeTo(50, 0.5, function() {
	div.html(quizHtml);
	div.fadeTo(250, 1.0);
	// Show the explanation for this answer (whether they are right or wrong)
	div.find("input[type=radio]").change(function (evt) {
	    $(evt.delegateTarget).parents(".quiz-answers")
		.siblings(".quiz-explanation").slideDown();
	});
    });
}

function changeChart(prevLesson) {
    var chart = lessons[currentLesson].chart;

    // Do nothing if the chart has not changed
    if (prevLesson != null &&
	chart == lessons[prevLesson].chart) {
	return;
    }
    
    // Switch to the new chart html with a nice transition
    var div = $('#chart');
    div.stop(true).fadeTo(50, 0.5, function() {
	div.html(chart);
	div.fadeTo(250, 1.0);
    });
}

function initLesson(prevLesson) {
    var lesson = lessons[currentLesson];

    changeTutorMessage(lesson.message);
    changeQuiz(lesson.quiz);
    changeChart(prevLesson);
    if (lesson.lessonSection != null) {
	changeLessonSection(lesson.lessonSection);
    }
    if (lesson.tutorImage != null) {
	changeTutorImage(tutorImages[lesson.tutorImage - 1]);
    }
    if (window.localStorage) {
	// Save progress
	window.localStorage[currentLessonStorageName] = currentLesson;
    }
    // Update progress bar display
    var percent = Math.floor((currentLesson + 1) * 100 / lessons.length);
    $('#lesson-progress').attr('value', percent);
    $('#lesson-progress').attr('title', percent + "% completed");
}

// Clicking on the maven or her speech advances to the next lesson
$('#tutor-talk').mousedown(
    function(evt) { 
	// Allow clickable anchor tags in the tutor messages.  Done
	// this way for a reason, this isn't as simple as always
	// returning true because nextLesson() changes the message,
	// destroying the anchor tag.
	if ($(evt.target).is("#tutor-message a")) { return true; }
	nextLesson();
    }
);
$('#tutor-avatar').mousedown(nextLesson);

// Jumping to a different lesson resets the quiz and charts, and briefly
// says what lesson we are on
function jumpToLesson(lessonNum) {
    // Don't allow illegal values
    if (lessonNum < 0) {
	lessonNum = 0;
    } else if (lessonNum >= lessons.length) {
	lessonNum = lessons.length - 1;
    }
    if (currentLesson != lessonNum) {
	// Only update everything if this is a change
	var prevLesson = currentLesson;
	currentLesson = lessonNum;
	initLesson(prevLesson);
	// For small screens, jump to top so the new lesson content is visible
	window.scrollTo(0, 0);
    }
    // ... but always show the current lesson
    var lessonNum = $('#lesson-number');
    lessonNum.stop(true).fadeOut(50, function() {
	lessonNum.html("Lesson " + (currentLesson+1));
	lessonNum.fadeIn(100).fadeOut(700);
    });
}

// Back button moves back one lesson, resets the code, and briefly
// says what lesson we are on
$('#back-button').click(function() {
    jumpToLesson(currentLesson - 1);
});
// Next button goes to next lesson
$('#next-button').click(function() {
    nextLesson();
    // For small screens, jump to top so the new lesson content is visible
    // [This is also done in jumpToLesson()]
    window.scrollTo(0, 0);
});

// Disable dragging the image (because it can be confusing to the user)
$('#tutor-avatar img').bind('dragstart', function(evt) { evt.preventDefault(); } );

// Selection is disabled in the CSS, but IE9 seems to have bugs that
// still allow it in rare cases.  Here's yet another attempt to
// prevent IE9 from allowing selection of the tutor text.
$('#tutor').bind('selectstart', function(evt) { evt.preventDefault(); } );

// Enable all the info links at the bottom of the page
// We just use modal dialogs for all of them, never leave the page.
$('.info-link').click( function(evt) {
    // Take the html string and convert it into an id
    // (just the lower case version of the string with spaces made into dashes
    var id = $(evt.target).html().toLowerCase().replace(/\s+/g, "-");
    id = "#" + id;
    // Open the modal dialog using the content for that id
    $(id).modal({
	onOpen: function(d) { 
	    // We could make these sequential, but they look good in parallel
	    d.overlay.fadeIn(300);
	    d.container.fadeIn(700);
	    d.data.fadeIn(1000);
	    // Hack to bold the current lesson name. This could be
	    // done better.
	    var lessonSection = lessons[currentLesson].lessonSection;
	    $('#lesson-sections-list li a').each(function() {
		if ($(this).html() == lessonSection) {
		    $(this).css("font-weight", "700");
		} else {
		    $(this).css("font-weight", "400");
		}
	    });
	},
	onClose: function(d) { 
	    d.data.fadeOut(200);
	    d.container.fadeOut(200);
	    // $.model.close() needs to be called at the end to clean up
	    d.overlay.fadeOut(400, $.modal.close);
	},
	minWidth: 500,
	maxWidth: 500,
	minHeight: 500,
	maxHeight: 700,
	autoResize: true,
	fixed: false,
	overlayClose: true,
    });
});

// Preload the tutor images
for (var i=0; i < tutorImages.length; i++) {
    (new Image()).src = tutorImages[i];
}
