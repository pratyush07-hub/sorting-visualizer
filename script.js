// import Chart from 'chart.js/auto';

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
    chart.data.datasets[0].data = array;
    chart.update();
}

// bubble sort algo
async function bubblesort(){
        sortedarray = Array.from(array);  // copied sortedarray from array
        for(let i=0; i< sizeArray-1; i++){
            for(let j=0; j< sizeArray-1-i; j++){
               // Highlight current elements being compared
            colors[j] = 'red';
            colors[j + 1] = 'red';
            chart.update();
            await new Promise(resolve => setTimeout(resolve, 800)); // Delay for visualization
                if(sortedarray[j]> sortedarray[j+1]){
                    [sortedarray[j], sortedarray[j+1]] = [sortedarray[j+1], sortedarray[j]];
                }
                // Reset colors
            colors[j] = '#4bc0c0';
            colors[j + 1] = '#4bc0c0';
            }
            colors[sizeArray - i - 1] = 'green'; // Color sorted elements
        }
    // Final update to mark the last sorted element
    colors[0] = 'green'; 
    chart.update();
    console.log(sortedarray);
}
function sortArray(array){
    bubblesort();
    chart.data.datasets[0].data = sortedarray;
    chart.update();
}


// Bar chart
  let myChart = document.getElementById('myChart').getContext("2d");
  const colors = array.map(() => '#4bc0c0'); // Default color
  let chart = new Chart(myChart, {
    type: "bar",
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
        borderColor: "#009688",
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
    },
    options: {
        reponsive: true,
        maintainAspectRatio: false,
        // animation: {
        //   duration: 2200
        // },

      scales: {
        x: {
            ticks: {
              color: "black",
            },
          },
        y: {
          ticks: {
            color: "black",
          },
        },
      },
    }
  });

