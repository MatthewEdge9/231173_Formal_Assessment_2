let carBooking = []

addBooking = () => {

    let carCost = 0;
    let carMake = document.getElementById ("make").value;
    let carModel = document.getElementById ("model").value;

    let carServices = document.getElementsByName ("services");
    let carArray = [];
    for (let i = 0; i < carServices.length; i++){
        
        if (carServices[i].checked){
            carArray.push(carServices[i].value);
            carCost = carCost + + carServices[i].dataset.cost;
        }

    }   


    carBooking.push({

        carMake: carMake,
        carModel: carModel,
        bookingCost: carCost,
        carServices: carArray
    
    });

    console.log(carBooking);
    document.getElementById("bookingForm").reset();

}



displayBooking = () => {

    let card = document.getElementById("bookingCard");
    
    card.innerHTML = "";
    
    for (let i = 0;i < carBooking.length; i ++) {

        let make = carBooking [i].carMake;
        let model = carBooking [i].carModel;
        let services = carBooking [i].carServices;
        let cost = carBooking [i].bookingCost;

        card.innerHTML += `
        <div class="row">
            <div class="col-12">
                <div class="card" style="width: 100%;">
                    <div class="card-body" id="bookingCard">

                        <h5 class="card-title">${make} & ${model}</h5>
                        <p>Cleaning Services: ${services}, </p>
                        <p id="bookingCost">Total Cost: R${cost}:00</p>
                
                    </div>
                </div>
            </div>
        </div>
        `
    }
}




