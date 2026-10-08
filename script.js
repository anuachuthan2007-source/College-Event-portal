function showEvents() {
    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });
}

function registerEvent(eventName) {
    document.getElementById("eventName").value = eventName;

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}

function submitRegistration(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const eventName = document.getElementById("eventName").value;

    document.getElementById("registrationMessage").textContent =
        name + ", you are successfully registered for " + eventName + "!";

    event.target.reset();
}