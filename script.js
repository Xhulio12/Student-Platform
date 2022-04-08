function changeIconL(announcmentIndex) {
  const element = document.getElementsByClassName("fa-heart")[announcmentIndex];
  if (element.className == "fa-regular fa-heart") {
    element.className = "fa-solid fa-heart";
  } else {
    element.className = "fa-regular fa-heart";
  }
}

function changeIconC(announcmentIndex) {
  const element = document.getElementsByClassName("fa-comments")[announcmentIndex];
  if (element.className == "fa-regular fa-comments") {
    element.className = "fa-solid fa-comments";
  } else {
    element.className = "fa-regular fa-comments";
  }
}

function changeIconS(announcmentIndex) {
  const element = document.getElementsByClassName("fa-share-from-square")[announcmentIndex];
  if (element.className == "fa-regular fa-share-from-square") {
    element.className = "fa-solid fa-share-from-square";
  } else {
    element.className = "fa-regular fa-share-from-square";
  }
}