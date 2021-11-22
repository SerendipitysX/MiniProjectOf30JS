const sumNum = 101
const rowNum = (sumNum+1)/6
colorList = ['#f9844a','aqua','#a7c957']

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

function isEven(num){
    if (num%2 === 0){
        return true;
    }
    return false;
} 

function isOdd(num){
    if (num%2 === 0){
        return false;
    }
    return true;
} 

for (let i=1;i<=rowNum;i++) {
    let div = document.createElement('div')
    div.classList.add('row')
    for (let j=0;j<6;j++) {
        let div1 = document.createElement('div')
        div1.className = 'num'
        theNum = 6*(i-1)+j
        div1.textContent = theNum
        div.appendChild(div1)
        if (isPrime(theNum)){
            div1.style.backgroundColor=colorList[0]
        }
        if (isEven(theNum)){
            div1.style.backgroundColor=colorList[1]
        }
        if (isEven(theNum)){
            div1.style.backgroundColor=colorList[2]
        }
    }
    container = document.getElementsByClassName('container')[0]
    container.appendChild(div)
}
count = document.querySelectorAll('.num')
console.log(count)


