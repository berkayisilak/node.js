let myName = document.querySelector(`#myName`)
myName.innerHTML = prompt("Adınızı giriniz")

function updateClock() {
    let myClock = document.querySelector(`#myClock`)
    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();

    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    var day = days[date.getDay()];

    var time = `${hour}:${minutes}:${second}, ${day}`
    myClock.innerHTML = time
    setInterval(updateClock, 1000)
}
updateClock()