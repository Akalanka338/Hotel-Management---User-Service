loadAllUser();

function loadAllUser() {

    function loadHotelData() {
        $.ajax({
            url: 'http://localhost:8090/Mapping/api/user', // Replace with your actual backend URL
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.code === '200') {
                    var vehicles = data.data;
                    var vehiclelList = $('#card-container');

                    // Iterate through the hotel data and create card elements
                    for (var i = 0; i < vehicles.length; i++) {
                        var vehicle = vehicles[i];
                        var card = `
                                      <div class="col-12 col-md-6 col-lg-3 card-wrapper mt-4">
                                        <div class="card">
                                          <img class="card-img-top" src="images/1.jpg" alt="...">
                                          <div class="card-body">
                                            <!--  Customize this section  -->
                                             <div class="card-title" title=""><u><h5>`+vehicle.vehicle_brand+`</h5></u></div>
                                              <div class="card-title" title="">`+vehicle.vehicle_category+`</div>
                                              <div class="card-title" title="">`+vehicle.fuel_type+`</div>
                                              <div class="card-title" title="">`+vehicle.hybrid_OR_nonHybrid+`</div>
                                              <div class="card-title" title="">`+vehicle.fuel_usage+`</div>
                                              <div class="card-title" title="">`+vehicle.seatCapacity+`</div>
                                              <div class="card-title" title="">`+vehicle.vehicle_type+`</div>
                                              <div class="card-title" title="">`+vehicle.driver_name+`</div>
                                              <div class="card-title" title="">`+vehicle.driver_contact+`</div>

                                          
                                            <!--  End  -->
                                          </div>
                                        </div>
                                      </div>
                        `;



                        vehiclelList.append(card);

                        $("#card-container .col-12:last-child div img").attr('src', `data:image/png;base64,`+vehicle.user_img+``);
                    }
                } else {
                    // Handle the error case here
                    console.log('Error: ' + data.message);
                }
            },
            error: function (error) {
                // Handle the error case here
                console.log('Error: ' + error);
            }
        });
    }

    // Call the function to load hotel data
    loadHotelData();



}

