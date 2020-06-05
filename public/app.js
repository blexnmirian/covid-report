// Fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
  .then(response => response.json())
  .then((response) => {
  
    
    //Declare Required variables
    const nigeria = response.data;
    const states = response.data.states;
    const section = document.querySelector('.states');

    const filter = document.querySelector('#filter');
    //Event listener for filter
    filter.addEventListener('keyup', filterState);
    // filter states
    function filterState(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.states-collection').forEach(function(eachState){
      const item = eachState.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        eachState.style.display = 'block';
      }else{
        eachState.style.display = 'none'
      }
    })
    }
    

    states.forEach(eachState => {
          // create elements
        console.log(eachState)
        const div = document.createElement('div');
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardColumn = document.createElement('div')
        const cardTitle = document.createElement('h6');
        const cardText = document.createElement('p');

        const cardColumn2 = document.createElement('div');
        const cardTitle2 = document.createElement('h6');
        const cardText2 = document.createElement('p');

        const cardColumn3 = document.createElement('div');
        const cardTitle3 = document.createElement('h6');
        const cardText3 = document.createElement('p');



        // add classes

        div.className = 'col-sm-6 states-collection';
        card.className = 'card mb-3 text-white bg-info';
        cardHeader.className = 'card-header  text-center';
        cardBody.className = 'card-body row text-center mt-3';
        cardTitle.className ='card-title';
        cardText.className = 'card-text btn btn-outline-warning';
        cardColumn.className = ' col-sm-4 mt-3';
        
        cardColumn2.className = 'col-sm-4 mt-3';
        cardTitle2.className = 'card-title';
        cardText2.className = 'card-text btn btn-outline-dark';

        cardColumn3.className = 'col-sm-4 mt-3';
        cardTitle3.className = 'card-title';
        cardText3.className = 'card-text btn btn-outline-danger'




        
        //fetch data
        cardTitle.textContent = "Confirmed Cases";
        cardTitle2.textContent = "Discharged";
        cardTitle3.textContent = "Death";
        cardHeader.appendChild(document.createTextNode(eachState.state));
        cardText.appendChild(document.createTextNode(eachState.confirmedCases));
        cardText2.appendChild(document.createTextNode(eachState.discharged));
        cardText3.appendChild(document.createTextNode(eachState.death));



        //Append  elements

        cardColumn.appendChild(cardTitle);
        cardColumn.appendChild(cardText);

        cardColumn2.appendChild(cardTitle2);
        cardColumn2.appendChild(cardText2);

        cardColumn3.appendChild(cardTitle3);
        cardColumn3.appendChild(cardText3);

        cardBody.appendChild(cardColumn);
        cardBody.appendChild(cardColumn2);
        cardBody.appendChild(cardColumn3);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        div.appendChild(card);

        section.appendChild(div);
      
      });
    
    // get  our ui elements

    const el_nigeria = document.querySelector('.nigeria');
    const el_nigeriaConfirmedCases = document.querySelector('.nigeria__confirmed_cases ');
    const el_activeCases = document.querySelector('.nigeria__active_cases');
    const el_discharged = document.querySelector('.nigeria__discharge_cases');
    const el_death = document.querySelector('.nigeria__death_cases');



   
    

   el_nigeria.textContent = "Nigeria";
   el_nigeriaConfirmedCases.textContent = nigeria.totalConfirmedCases;
   el_activeCases.textContent = nigeria.totalActiveCases;
   el_discharged.textContent = nigeria.discharged;
   el_death.textContent = nigeria.death;

  })
    .catch((err) => console.log(err));
  






