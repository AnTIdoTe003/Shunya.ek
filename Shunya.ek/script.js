const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})



  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bubble',

    data: {
      labels: [0,100,200,300,400,500,600,700],


      datasets: [{
        label: 'Average Cost Per Integration',
        data: [300,350,450,250,500,250],
        backgroundColor: ['blue','lime','yellow','red','purple','teal'],
        radius:30,
        borderWidth: 5,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('myChart1');
  new Chart(ctx2, {
    type: 'line',

    data: {
      labels: ['','9am', '12pm','15pm','18pm','19pm'],



      datasets: [{
        data: [65,80,80,60,45,45,80,70,70,90,90,80,80,60,60,50],
        borderColor: ['#3E97FF'],
        borderWidth: 2,
        radius:0
      },
      {
        data: [90,110,110,95,85,85,95,115,115,100,100,110,95,95,85],
        borderColor: ['lime'],
        borderWidth: 2,
        radius:0
      }
    
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx3 = document.getElementById('myChart2');
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['10am','10:30am', '11am','11:15am', '11:30','12pm','13pm', '14pm', '16pm', '17pm','18pm','19pm', '20pm', '21pm'],



      datasets: [{
        data: [2100,3100,3100,2400,2400,1800,1800,2400,2400,3200,3200,2800,2800,3250,3250],
        borderColor: ['#3E97FF'],
        borderWidth: 2,
        radius:0
      }
    
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });