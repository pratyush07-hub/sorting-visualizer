let sizeArray = 20;
let array = [sizeArray];
let sortedarray = [sizeArray];

// generate new array
function generateArray(){
    for(let i=0; i< sizeArray; i++){
        array[i] = randomValue();
    }
    console.log(array);
}
// random  values
function randomValue(){
    const random = Math.floor(Math.random()*100);
    return random;
}

function newArray(){
    generateArray();
    chart.data.datasets[0].data = 'array';
    chart.update();
}

// bubble sort algo
function bubblesort(){
        sortedarray = Array.from(array);  // copied sortedarray from array
        for(let i=0; i< sizeArray; i++){
            for(let j=0; j< sizeArray-1-i; j++){
                if(sortedarray[j]> sortedarray[j+1]){
                    [sortedarray[j], sortedarray[j+1]] = [sortedarray[j+1], sortedarray[j]];
                }
            }
        }
    
    console.log(sortedarray);
}
function sortArray(){
    bubblesort();
    chart.data.datasets[0].data = 'sortedarray';
    chart.update();
}
// Bar chart

  let ctx = document.getElementById('myChart').getContext("2d");

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        "Element 1",
        "Element 2",
        "Element 3",
        "Element 4",
        "Element 5",
        "Element 6",
        "Element 7",
        "Element 8",
        "Element 9",
        "Element 10",
        "Element 11",
        "Element 12",
        "Element 13",
        "Element 14",
        "Element 15",
        "Element 16",
        "Element 17",
        "Element 18",
        "Element 19",
        "Element 20",
      ],
      datasets: [{
        label: "Array",
        data: array,
        fill: false,
        borderColor: "009688",
        backgroundcolor: "#FFF",
        borderWidth: 5,
      },
    ],
    },
    options: {
        reponsive: true,
        maintainAspectRatio: false,
      scales: {
        y: {
            ticks: {
              color: "black",
            },
          },
        y: {
          ticks: {
            color: "white",
          },
        },
      },
    }
  });
