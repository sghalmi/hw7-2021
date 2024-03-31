var video = document.getElementById("player1");
var volume = 1;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
});

//Play the video and update the volume information.  
document.getElementById("play").addEventListener("click", function () {
	video.play();
	document.getElementById("volume").innerHTML = volume * 100 + '%';
	console.log(video.volume);
});
//Pause the video.
document.getElementById("pause").addEventListener("click", function () {
	video.pause();
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.getElementById("slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate - .1;
	console.log(video.playbackRate)
});

//Increase the current video speed each time the button is clicked and log the new speed to the console.  
document.getElementById("faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate + .1;
	console.log(video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function () {
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime);
});

//Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function () {
	if (video.volume == 0) {
		video.volume = volume;
		document.getElementById("volume").innerHTML = volume * 100 + '%';
	}
	else {
		document.getElementById("volume").innerHTML = 0 + '%';
		video.volume = 0;
	}
});

// Change the volume based on the slider and update the volume information.
document.getElementById('slider').addEventListener('input', function () {
	document.getElementById("volume").innerHTML = slider.value + '%';
	volume = slider.value / 100;
	video.volume = volume;
});

//Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video.
document.getElementById("orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");

});
