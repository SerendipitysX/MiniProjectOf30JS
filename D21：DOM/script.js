// const strings = document.querySelector('h1').innerText = "Asabeneh Yetayeh challenges in "
// const strings1 = document.querySelectorAll('h1')[1].innerText = "2020"
// document.querySelectorAll('h1')[1].style.color = "green"

let i = 1;
function updateColor(){
    const colorList = ["#6525B9","#98B36F","#5B9536","#C6BADA","#9F79CF"];
    const index = i % colorList.length;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.querySelector('p').innerHTML = dateTime
    document.querySelector('p').style.backgroundColor = colorList[index]
    document.querySelector('h1').innerHTML= "Asabeneh Yetayeh challenges in 2020".replace('2020','2020'.fontcolor(colorList[index]).fontsize(24));  
    i++;
}

setInterval(updateColor, 1000)

const selections = document.querySelectorAll('li')
selections.forEach((selection) => {
    if (selection.textContent.includes("Challenge Done")){
        selection.style.backgroundColor = '#D3FE57'
    }
    if (selection.textContent.includes("Challenge Ongoing")){
        selection.style.backgroundColor = 'cornflowerblue'
    }
})
