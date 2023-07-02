
chrome.runtime.onMessage.addListener(function(message, sender) {
      if(message.showVideo) showVideo();

      // Do your stuff
});

// // // do the thing *slightly* later than page load, because the notifs wouldn't have loaded yet
// // setTimeout(dothings(), 100);
function showVideo() {
  var test = document.getElementsByClassName("boringless-vid-div");

  console.log(test);

  if (test.length >= 1) {
    alert("you already have one boringless running!")
    return;
  }

  // var div = document.createElement("div");
  // div.classList.add("boringless-vid");
  // document.body.appendChild(div);
  var div = document.createElement("div");
  div.classList.add("boringless-vid-div");

  var move = document.createElement("div");
  move.classList.add("boringless-movement");
  dragElement(move, div);


  var hidebutton = document.createElement("button");
  move.appendChild(hidebutton);
  hidebutton.innerHTML = "x";
  hidebutton.classList.add("boringless-hidebutton");
  hidebutton.addEventListener('click', hideVideo)

  div.appendChild(move);



  var video = document.createElement("iframe");
  video.classList.add("boringless-vid");
  video.src = "https://www.youtube.com/embed/BkWT66jE8Hs?start=60&autoplay=1&mute=1&controls=0&fs=0&modestbranding=1";
  video.allow = "autoplay";
  video.volume = 0.2;
  // video.

  div.appendChild(video);
  document.body.appendChild(div);

}


function hideVideo() {
  var test = document.getElementsByClassName("boringless-vid-div");

  console.log(test);

  if (test.length >= 1) {
    test[0].remove()
  }

}



function dragElement(elmnt, toMove) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    toMove.style.top = (toMove.offsetTop - pos2) + "px";
    toMove.style.left = (toMove.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



console.log('content loaded');

// showVideo()
