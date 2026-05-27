


window.onload = function() {
    console.log("Portal Initialized.");
    const savedEvent = localStorage.getItem("userEventPref");
    if (savedEvent) {
        document.getElementById("eventSelect").value = savedEvent;
        console.log("Restored preference: " + savedEvent);
    }
};

function savePreference(select) {
    const value = select.value;
    localStorage.setItem("userEventPref", value);
    console.log("Saved to LocalStorage: " + value);
}


function updateCounter(textarea) {
    const countDisplay = document.getElementById("charCount");
    const len = textarea.value.length;
    countDisplay.innerText = len + " / 150";
    
    if (len > 150) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "#999";
    }
}

function submitForm(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("fullName").value;
    const output = document.getElementById("formResult");
    
    output.innerText = "Success! Thank you, " + name + ". Your registration is confirmed.";
}

function logClick() {
    console.log("Submit button clicked.");
}



function zoomImage(img) {
    if (img.style.transform === "scale(1.5)") {
        img.style.transform = "scale(1)";
        img.style.zIndex = "1";
    } else {
        img.style.transform = "scale(1.5)";
        img.style.zIndex = "50";
        img.style.position = "relative";
    }
}


function videoStatus() {
    const msg = document.getElementById("videoMsg");
    msg.innerText = "Video ready to play!";
    msg.style.color = "green";
    msg.style.marginTop = "10px";
}


function getLocation() {
    const output = document.getElementById("locationOutput");
    output.innerText = "Searching for location...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                output.innerText = `Found you! Latitude: ${pos.coords.latitude.toFixed(2)}, Longitude: ${pos.coords.longitude.toFixed(2)}`;
            },
            (err) => {
                output.innerText = "Geolocation error: " + err.message;
            }
        );
    } else {
        output.innerText = "Geolocation not supported by this browser.";
    }
}


window.onbeforeunload = function() {
    const name = document.getElementById("fullName").value;
    if (name) {
        return "You have unsaved changes!";
    }
};