// Fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    
    //Declare Required variables
    const nigeria = response.data;
    const abia =  response.data.states[33];
    const imo =  response.data.states[31];
    const enugu =  response.data.states[27];
    const ebonyi =  response.data.states[28];
   

    // get  our ui elements

    const el_nigeria = document.querySelector('.nigeria');
    const el_nigeriaConfirmedCases = document.querySelector('.nigeria__confirmed_cases ');
    const el_activeCases = document.querySelector('.nigeria__active_cases');
    const el_discharged = document.querySelector('.nigeria__discharge_cases');
    const el_death = document.querySelector('.nigeria__death_cases');



    const el_abia = document.querySelector('.abia');
    const el_abiaReport = document.querySelector('.abia__report');
    const el_abiaDischarge = document.querySelector('.abia__discharge');
    const el_abiaDeath = document.querySelector('.abia__death')

    const el_imo = document.querySelector('.imo');
    const el_imoReport = document.querySelector('.imo__report');
    const el_imoDischarge = document.querySelector('.imo__discharge');
    const el_imoDeath = document.querySelector('.imo__death')

    // const el_lagos = document.querySelector('.lagos');
    // const el_lagosReport = document.querySelector('.lagos__report');

    const el_enugu = document.querySelector('.enugu');
    const el_enuguReport = document.querySelector('.enugu__report');
    const el_enuguDischarge = document.querySelector('.enugu__discharge');
    const el_enuguDeath = document.querySelector('.enugu__death')


    const el_ebonyi = document.querySelector('.ebonyi');
    const el_ebonyiReport = document.querySelector('.ebonyi__report');
    const el_ebonyiDischarge = document.querySelector('.ebonyi__discharge');
    const el_ebonyiDeath = document.querySelector('.ebonyi__death')

    //append data from api
    el_abia.textContent = abia.state;
    el_abiaReport.textContent = abia.confirmedCases;
    el_abiaDischarge.textContent = abia.discharged;
    el_abiaDeath.textContent = abia.death;
    

    el_imo.textContent = imo.state;
    el_imoReport.textContent = imo.confirmedCases;
    el_imoDischarge.textContent = imo.discharged;
    el_imoDeath.textContent = imo.death;

    el_enugu.textContent = enugu.state;
    el_enuguReport.textContent = enugu.confirmedCases;
    el_enuguDischarge.textContent = imo.discharged;
    el_enuguDeath.textContent = imo.death;


//    el_lagos.textContent = lagos.state;
//    el_lagosReport.textContent = lagos.confirmedCases;
   
   el_ebonyi.textContent = ebonyi.state;
   el_ebonyiReport.textContent = ebonyi.confirmedCases;
   el_ebonyiDischarge.textContent = ebonyi.discharged;
   el_ebonyiDeath.textContent = ebonyi.death;


   el_nigeria.textContent = "Nigeria";
   el_nigeriaConfirmedCases.textContent = nigeria.totalConfirmedCases;
   el_activeCases.textContent = nigeria.totalActiveCases;
   el_discharged.textContent = nigeria.discharged;
   el_death.textContent = nigeria.death;

  })
    .catch((err) => console.log(err));
  






