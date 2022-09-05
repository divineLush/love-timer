var loveDate = new Date('September 9, 2022 18:00:00')
function updateTimer() {
    var totalMinutes = Math.floor(Math.abs(new Date() - loveDate) / 1000 / 60)
    var hours = Math.floor(totalMinutes / 60)
    var minutes = Math.floor(totalMinutes % 60)
    document.getElementById('timer').textContent = hours + ' : ' + minutes
}

updateTimer()

setInterval(updateTimer, 1000)
