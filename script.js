// Call the function to initialize the event listener
showTimeDisplay();

// Set the date we're starting with
var startMonth = 'January';
var startDay = '16';
var startYear = '2023';
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Raw challenge day total
var numberOfDays = 45;

// Initialize startDate and endDate
var startDate = new Date(startMonth + " " + startDay + ", " + startYear + " 00:00:00");
startDate.setHours(0);
var endDate = new Date(startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
endDate.setHours(0);

// Set title for number of days in challenge
document.getElementById('totalDaysTitle').innerHTML = numberOfDays;

//Set title for number of days in challenge
document.getElementById('totalDaysTitle').innerHTML = numberOfDays;

// Get date input
var dateAsk = document.getElementById('dateAsk');
dateAsk.addEventListener("change", function () {
    const dateAskValue = dateAsk.value;
    console.log(dateAskValue);

    startDate = new Date(dateAskValue + " 00:00:00");
    startDate.setHours(0);

    // Check if the calculated endDate is a valid date
    if (!isNaN(endDate)) {
        endDate = new Date(startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
        endDate.setHours(0);
    }

    document.getElementById('startDate').textContent = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Calculate total days
    var totalDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
    document.getElementById('totalDays').textContent = totalDays;

    resetInterval(); // Reset the setInterval with the updated dates
});

// Calculate the end date 50 days away from the start date
var endDate = new Date(startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
endDate.setHours(0);


var date, now, distance, done, total, year, getMonth, today, dayOfWeek;
var days, hours, minutes, seconds;
var daysDone, hoursDone, minutesDone, secondsDone;
var totalDays;

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Create the countdown
var interval;

function progress() {
    var progressBar = document.getElementById("myBar");
    date = new Date();
    now = date.getTime();
    done = now - startDate;

    // Calculate progress based on the current day and total days
    var progressPercentage = (done / (numberOfDays * 24 * 60 * 60 * 1000)) * 100;

    // Ensure the progress is within the valid range [0, 100]
    progressPercentage = Math.min(100, Math.max(0, progressPercentage));

    progressBar.style.width = progressPercentage + "%";
    progressBar.innerHTML = progressPercentage.toFixed(2) + "%";
}

function resetProgress() {
    var progressBar = document.getElementById("myBar");
    progressBar.style.width = "0%";
    progressBar.innerHTML = "0%";
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(startCountdown, 1000);
    resetProgress(); // Reset the progress bar
    progress();
}

function startCountdown() {
    // Get today's date and time
    var date = new Date();
    // Timezones from moment.js
    // date = convertTZ(date,"America/Chicago");
    var now = date.getTime();

    var year = date.getFullYear();
    var getMonth = month[date.getMonth()];
    var today = date.getDate();

    // Find the distance between now and the count down date
    var distance = endDate - now;
    var done = now - startDate;
    var total = endDate - startDate;

    // What day of the week
    var dayOfWeek = weekday[date.getDay()];

    // Time calculations for days, hours, minutes, and seconds to go
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes, and seconds already passed
    var daysDone = Math.floor(done / (1000 * 60 * 60 * 24));
    var hoursDone = Math.floor((done % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesDone = Math.floor((done % (1000 * 60 * 60)) / (1000 * 60));
    var secondsDone = Math.floor((done % (1000 * 60)) / 1000);

    var totalDays = Math.floor(total / (1000 * 60 * 60 * 24));

    // Display the results
    document.getElementById("countdown").innerHTML =
        days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds to go ";

    document.getElementById("total").innerHTML =
        "You have gone a total of " +
        daysDone +
        " days " +
        hoursDone +
        " hours " +
        minutesDone +
        " minutes " +
        secondsDone +
        " seconds";

    // If the count down is finished, write some text
    if (distance < 0) {
        document.getElementById("myBar").innerHTML = "EXPIRED";
    }

    document.getElementById("today").innerHTML = getMonth + " " + today + ", " + year;
    document.getElementById("dayOfWeek").innerHTML = dayOfWeek;

    document.getElementById('currentDay').innerHTML = daysDone + 1;
    document.getElementById('totalDays').innerHTML = numberOfDays;

    // Update the HTML content for the end date
    document.getElementById("endDate").innerHTML = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Progress Bar
    progress();
}

//Time zone
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}

//Songs
var songs = ['https://open.spotify.com/embed/track/5Gl1gvZJujOHi2Jw2wcDdX?utm_source=generator', 'https://open.spotify.com/embed/track/3TirfpSyUYfXE9osoQmhxV?utm_source=generator', 'https://open.spotify.com/embed/track/2goLsvvODILDzeeiT4dAoR?utm_source=generator', 'https://open.spotify.com/embed/track/7sI80PK0P3tDCvULKszqzL?utm_source=generator', 'https://open.spotify.com/embed/track/4wajJ1o7jWIg62YqpkHC7S?utm_source=generator', 'https://open.spotify.com/embed/track/4x8g2OO1JhtmZz6psVAEOH?utm_source=generator', 'https://open.spotify.com/embed/track/2EuIkhXkq3Eo8MioInRm7e?utm_source=generator', 'https://open.spotify.com/embed/track/3kFkvYHAMnE8yMPD2fKzZb?utm_source=generator', 'https://open.spotify.com/embed/track/64qZB8xZ3u2EmH8zSqc7mU?utm_source=generator', 'https://open.spotify.com/embed/track/3yNH4HdWyljKSeLLhktrBd?utm_source=generator', 'https://open.spotify.com/embed/track/7a4AhwfxpHTVW939FsxXZb?utm_source=generator', 'https://open.spotify.com/embed/track/5N7ln3zfkVPd7c8I1Dws3c?utm_source=generator', 'https://open.spotify.com/embed/track/2WZyfujzMweFLnozyUJBkW?utm_source=generator', 'https://open.spotify.com/embed/track/5hkdfA87RZvNaxl6XiveOA?utm_source=generator', 'https://open.spotify.com/embed/track/6f5ExP43esnvdKPddwKXJH?utm_source=generator', 'https://open.spotify.com/embed/track/31dHe2I4tzOKT0ypVpVsuu?utm_source=generator', 'https://open.spotify.com/embed/track/6Up545NUflOiXo8cEraH49?utm_source=generator', 'https://open.spotify.com/embed/track/2LD2gT7gwAurzdQDQtILds?utm_source=generator', 'https://open.spotify.com/embed/track/1wH3PxeMNXKVkuG67czNOQ?utm_source=generator', 'https://open.spotify.com/embed/track/5ovcVaOus1Wv4vTtyGXlhB?utm_source=generator', 'https://open.spotify.com/embed/track/11utMtW3EPeTe1UoUWLfFM?utm_source=generator', 'https://open.spotify.com/embed/track/1DUR7k78QHSWvuCLpU2y4b?utm_source=generator', 'https://open.spotify.com/embed/track/6CU0zWIWVTEnmWpSjVHM93?utm_source=generator', 'https://open.spotify.com/embed/track/423o3ZHIaBtGXyhF1uH41a?utm_source=generator', 'https://open.spotify.com/embed/track/3RgR3cFZ6xh7MlB9DURK6e?utm_source=generator', 'https://open.spotify.com/embed/track/4N6HYihypXOVL24bnaR4fp?utm_source=generator', 'https://open.spotify.com/embed/track/37oLDb3119IdKSIFQmSGRj?utm_source=generator', 'https://open.spotify.com/embed/track/1LiwqqaafXkNQuWGW3HeId?utm_source=generator', 'https://open.spotify.com/embed/track/74k56xjvucElX9S5lY2O6t?utm_source=generator', 'https://open.spotify.com/embed/track/3oqi3tCQ1n2aZUBatDuy3Q?utm_source=generator', 'https://open.spotify.com/embed/track/7jZ4UZAmg006Qx3rVuF7JI?utm_source=generator', 'https://open.spotify.com/embed/track/6zgCycfVETCfk2TNY7Othq?utm_source=generator', 'https://open.spotify.com/embed/track/2bzBI23EJWHjXmGj3xlYaM?utm_source=generator', 'https://open.spotify.com/embed/track/4PkJ7c9y1CwpuVOiJODnCZ?utm_source=generator', 'https://open.spotify.com/embed/track/3jFP1e8IUpD9QbltEI1Hcg?utm_source=generator', 'https://open.spotify.com/embed/track/3cfOd4CMv2snFaKAnMdnvK?utm_source=generator', 'https://open.spotify.com/embed/track/4ZiAnGIZFFUybp0NZXIYEG?utm_source=generator', 'https://open.spotify.com/embed/track/02oAqE4RUmemtnHDBMgkWl?utm_source=generator', 'https://open.spotify.com/embed/track/6Qpfsw8OS5HW5XxgmXYLWS?utm_source=generator', 'https://open.spotify.com/embed/track/0wJyFu6JHwUoKQN5X3uzVe?utm_source=generator', 'https://open.spotify.com/embed/track/7yIhpQsHXI4VXNkQS0meWZ?utm_source=generator', 'https://open.spotify.com/embed/track/50f6Sc85lbQgEaOfQm41Zr?utm_source=generator', 'https://open.spotify.com/embed/track/7hV4x7PMKGC4qD3NWLt2UJ?utm_source=generator', 'https://open.spotify.com/embed/track/6vC90OOjZR165Hw8CpsqEm?utm_source=generator'];

var videos = ['https://www.youtube.com/embed/pGgNBTYzY8E', 'https://www.youtube.com/embed/salUViy2uoA', 'https://www.youtube.com/embed/n7wvAEDOxAs', 'https://www.youtube.com/embed/LQ9tq9b0Bd4', 'https://www.youtube.com/embed/TNRCvG9YtYI', 'https://www.youtube.com/embed/Qt87bLX7m_o', 'https://www.youtube.com/embed/wP0-SEmcHWI', 'https://www.youtube.com/embed/GzhZFVRecJo', 'https://www.youtube.com/embed/rDhZJYgTgKk', 'https://www.youtube.com/embed/ck2c3rOGCeI', 'https://www.youtube.com/embed/Z5ZkohRiwK8', 'https://www.youtube.com/embed/vsM_NzNyxlU', 'https://www.youtube.com/embed/INuS80qe_qU', 'https://www.youtube.com/embed/0tZ4SFhqbN8', 'https://www.youtube.com/embed/uYCX19nFmZ0', 'https://www.youtube.com/embed/nIvgTGYZTpE', 'https://www.youtube.com/embed/sIaT8Jl2zpI', 'https://www.youtube.com/embed/OgcY6qlzdf8', 'https://www.youtube.com/embed/odGRbYBU1u8', 'https://www.youtube.com/embed/Ox2g83kGE-U', 'https://www.youtube.com/embed/uP3RjvofwAs', 'https://www.youtube.com/embed/TnzdYbs6Fbc', 'https://www.youtube.com/embed/tLonNru58X4', 'https://www.youtube.com/embed/nUW6G5QdyYU', 'https://www.youtube.com/embed/daGcpvxPbCo', 'https://www.youtube.com/embed/nxz1DuVaRr8', 'https://www.youtube.com/embed/Rq-7NgH-hcs', 'https://www.youtube.com/embed/lK6wOG_aDl8', 'https://www.youtube.com/embed/wdaeYD8--84', 'https://www.youtube.com/embed/wGpAb94Vvjs', 'https://www.youtube.com/embed/rRrT37ruAtE', 'https://www.youtube.com/embed/SBD4vH2wRcM', 'https://www.youtube.com/embed/pFebeoSlo6s', 'https://www.youtube.com/embed/8Zc4S1shXas', 'https://www.youtube.com/embed/2Xqm-zvart0', 'https://www.youtube.com/embed/LYG7sMtb6u8', 'https://www.youtube.com/embed/jgc8a7ikd2w', 'https://www.youtube.com/embed/Rq3o8gj4amQ', 'https://www.youtube.com/embed/FKIlve29-_U', 'https://www.youtube.com/embed/qceCB4OL-8k', 'https://www.youtube.com/embed/ef4TTa5kIsQ', 'https://www.youtube.com/embed/qv-SXz_exKE', 'https://www.youtube.com/embed/uuBFmjE5FWA', 'https://www.youtube.com/embed/Ddfyc9GJLVY'];

//Alert if songs to videos doesn't match
if (songs.length != videos.length) {
    console.log('Not all songs synced with youtube backup');
}


//Keep record of what songs have shown
var randomNumTracker = [];

//Music
var music = document.getElementById("music");
var refresh = document.getElementById("refresh");
var mediaLinks = document.getElementById("media-links");
var frame = document.getElementById("iframe");
var spotify = document.getElementById("spotify");
var youtube = document.getElementById("youtube");
var toggle = 0;

//Events
music.addEventListener("click", showSong);
youtube.addEventListener("click", switchMode);
refresh.addEventListener("click", switchSong);
//Automatically switchSongs when video finishes playing
//Detect if youtube finsihed playing
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('iframe', {
        events: {
            onStateChange: onPlayerStateChange
        }
    });
}
// when video ends
function onPlayerStateChange(event) {
    if (event.data === 0) {
        alert('done');
    }
}


//Random
var ranNum = Math.floor(Math.random() * songs.length);
//Keep the record
randomNumTracker.push(ranNum);
frame.src = songs[ranNum];

//Mode
var videoOn = false;

function showSong() {
    if (toggle == 0) {
        mediaLinks.style.bottom = "180px";
        refresh.style.display = "flex";
        frame.style.display = "block";
        if (videoOn == false) {
            spotify.style.display = "block";
            youtube.style.display = "block";
        } else {
            spotify.style.display = "none";
            youtube.style.display = "none";
        }
        frame.style.right = "0";
        music.style.marginBottom = "10px";
        toggle = 1;
    } else {
        mediaLinks.style.bottom = "10px";
        frame.style.right = "-500px";
        frame.style.display = "none";
        spotify.style.display = "none";
        youtube.style.display = "none";
        music.style.marginBottom = "0px";
        refresh.style.display = "none";
        toggle = 0;
    }
}

function switchMode() {
    frame.src = videos[ranNum];
    spotify.style.display = "none";
    youtube.style.display = "none";
    videoOn = true;
}

function switchSong() {
    ranNum = Math.floor(Math.random() * songs.length);
    randomNumTracker.push(ranNum);
    // console.log(ranNum);

    if (checkForDuplicates(randomNumTracker)) {
        // console.log('Showing this song again: ' + ranNum);
        randomNumTracker.pop();
        ranNum = Math.floor(Math.random() * songs.length);
        if (randomNumTracker.length === songs.length) {
            randomNumTracker = [];
        } else {
            switchSong();
        }
    } else {
        if (videoOn == false) {
            frame.src = songs[ranNum];
        } else {
            frame.src = videos[ranNum];
            //Automatic play
        }
    }
}

function checkForDuplicates(array) {
    let valuesAlreadySeen = [];

    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}

//Toggle color mode
function colorMode() {

    var links = document.getElementsByTagName("a");

    if (document.getElementById('toggle').checked) {

        //Body
        document.body.style.backgroundColor = 'var(--white-dark)';
        document.body.style.color = 'var(--youtube-dark)';

        //Progress Bar
        document.getElementById('myProgress').style.backgroundColor = 'var(--gray-dark)';
        document.getElementById('myBar').style.backgroundColor = 'var(--blue-dark)';
        document.getElementById('myBar').style.color = 'var(--white-dark)';

        //Image
        document.getElementById('image').src = "carrots-dark.jpg";

        //Links
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = 'var(--blue-dark)';
            }
        }

        //Refresh Music
        document.getElementById('refresh').style.backgroundColor = 'var(--blue-dark)';
        document.getElementById('refresh').style.color = 'var(--white-dark)';

        document.documentElement.style.setProperty('--beforeItem', "#000000");

        document.getElementById("refresh").addEventListener("mouseover", function () {
            document.getElementById("refresh").style.backgroundColor = "var(--blueHover-dark)";
        });

        document.getElementById("refresh").addEventListener("mouseout", function () {
            document.getElementById("refresh").style.backgroundColor = "var(--blue-dark)";
        });

        //Youtube
        document.getElementById('youtube').style.backgroundColor = 'var(--youtube-dark)';
        document.getElementById('youtube').style.color = 'var(--white-dark)';

        document.getElementById("youtube").addEventListener("mouseover", function () {
            document.getElementById("youtube").style.backgroundColor = "var(--youtubeHover-dark)";
        });

        document.getElementById("youtube").addEventListener("mouseout", function () {
            document.getElementById("youtube").style.backgroundColor = "var(--youtube-dark)";
        });

        //Spotify
        document.getElementById('spotify').style.backgroundColor = 'var(--spotify-dark)';
        document.getElementById('spotify').style.color = 'var(--black-dark)';

        document.getElementById("spotify").addEventListener("mouseover", function () {
            document.getElementById("spotify").style.backgroundColor = "var(--spotifyHover-dark)";
        });

        document.getElementById("spotify").addEventListener("mouseout", function () {
            document.getElementById("spotify").style.backgroundColor = "var(--spotify-dark)";
        });

        //Music Button
        document.getElementById('music').style.backgroundColor = 'var(--gray-dark)';
        document.getElementById('music').style.color = 'var(--black-dark)';

        document.getElementById("music").addEventListener("mouseover", function () {
            document.getElementById("music").style.backgroundColor = "var(--grayHover-dark)";
        });

        document.getElementById("music").addEventListener("mouseout", function () {
            document.getElementById("music").style.backgroundColor = "var(--gray-dark)";
        });

        //Dark Text
        document.querySelector('.darkText').style.color = "var(--youtube)";

    } else {

        //Body
        document.body.style.backgroundColor = 'var(--white)';
        document.body.style.color = 'var(--youtube)';

        //Progress Bar
        document.getElementById('myProgress').style.backgroundColor = 'var(--gray)';
        document.getElementById('myBar').style.backgroundColor = 'var(--blue)';
        document.getElementById('myBar').style.color = 'var(--white)';

        //Image
        document.getElementById('image').src = "carrots.jpg";

        //Links
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = 'var(--blue)';
            }
        }

        //Refresh Music
        document.getElementById('refresh').style.backgroundColor = 'var(--blue)';
        document.getElementById('refresh').style.color = 'var(--white)';

        document.documentElement.style.setProperty('--beforeItem', "#ffffff");

        document.getElementById("refresh").addEventListener("mouseover", function () {
            document.getElementById("refresh").style.backgroundColor = "var(--blueHover)";
        });

        document.getElementById("refresh").addEventListener("mouseout", function () {
            document.getElementById("refresh").style.backgroundColor = "var(--blue)";
        });

        //Youtube
        document.getElementById('youtube').style.backgroundColor = 'var(--youtube)';
        document.getElementById('youtube').style.color = 'var(--white)';

        document.getElementById("youtube").addEventListener("mouseover", function () {
            document.getElementById("youtube").style.backgroundColor = "var(--youtubeHover)";
        });

        document.getElementById("youtube").addEventListener("mouseout", function () {
            document.getElementById("youtube").style.backgroundColor = "var(--youtube)";
        });

        //Spotify
        document.getElementById('spotify').style.backgroundColor = 'var(--spotify)';
        document.getElementById('spotify').style.color = 'var(--black)';

        document.getElementById("spotify").addEventListener("mouseover", function () {
            document.getElementById("spotify").style.backgroundColor = "var(--spotifyHover)";
        });

        document.getElementById("spotify").addEventListener("mouseout", function () {
            document.getElementById("spotify").style.backgroundColor = "var(--spotify)";
        });


        //Music Button
        document.getElementById('music').style.backgroundColor = 'var(--gray)';
        document.getElementById('music').style.color = 'var(--black)';

        document.getElementById("music").addEventListener("mouseover", function () {
            document.getElementById("music").style.backgroundColor = "var(--grayHover)";
        });

        document.getElementById("music").addEventListener("mouseout", function () {
            document.getElementById("music").style.backgroundColor = "var(--gray)";
        });

        //Dark Text
        document.querySelector('.darkText').style.color = "var(--gray)";
    }
}

function showTimeDisplay() {
    var dateInput = document.getElementById("dateAsk");
    var timeDisplay = document.querySelector(".timeDisplay");

    // Add an event listener to the date input
    dateInput.addEventListener('input', function () {
        // Check if a date is selected
        if (dateInput.value !== "") {
            // Set initial height to 0
            timeDisplay.style.height = "0";

            // Show the timeDisplay
            timeDisplay.style.display = "block";

            // Trigger the slideDownAndGrow effect
            slideDownAndGrow(timeDisplay);

            // Add your existing code for calculating and updating the countdown here

        } else {
            // Hide the timeDisplay if no date is selected
            timeDisplay.style.display = "none";
        }
    });
}

function slideDownAndGrow(element) {
    var height = 0;
    var maxHeight = 200; // Adjust this value based on your preference
    element.style.height = height + "px";

    var slideDownInterval = setInterval(function () {
        if (height < maxHeight) {
            height += 5; // Adjust the increment based on your preference
            element.style.height = height + "px";
        } else {
            clearInterval(slideDownInterval);
        }
    }, 10);
}

