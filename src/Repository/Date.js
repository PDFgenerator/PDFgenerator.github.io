export function DateTime() {

    let date = new Date()

    let day   = date.getDate()  < 10 ? "0" + date.getDate()  : date.getDate();
    let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    let years = date.getFullYear()

    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    let dateNow = `${day}/${month}/${years}`
    let timeNow = `${hours}:${minutes}:${seconds}`

    // console.log(dateNow, timeNow, {date: dateNow, time: timeNow})
    return {date: dateNow, time: timeNow}
}
