
$('#btnVehicledAdd').on('click', () => {

    alert("user added")
    VehicleAddRequest();
});

VehicleAddRequest=()=>{


    const id=document.getElementById('txtvehicleid0').value;
    const user_name=document.getElementById('txtvehiclebrand0').value;
    const age=document.getElementById('txtvehiclecategory0').value;
    const gender=document.getElementById('txtfueltype0').value;
    const email = document.getElementById('txthybridornon0').value;
    const user_contact = document.getElementById('txtfuelusage0').value;
    const userImg=document.getElementById('txtVehicleImage0');

    AddVehicleObj(id,brand,category,fueltype,hybridornon,fuelusage,vehicleImg,seatcapacity,vehicletype,drivername,drivercontact,drivernicimg);

}



AddVehicleObj=(id,brand,category,fueltype,hybridornon,fuelusage,vehicleImg,seatcapacity,vehicletype,drivername,drivercontact,drivernicimg) => {
    const addVehicleData = new FormData();
    addVehicleData.append("id", id);
    addVehicleData.append("vehicle_brand", brand);
    addVehicleData.append("vehicle_category", category);
    addVehicleData.append("fuel_type", fueltype);
    addVehicleData.append("hybrid_OR_nonHybrid", hybridornon);
    addVehicleData.append("fuel_usage", fuelusage);
    addVehicleData.append("vehicle_img", vehicleImg.files[0]);
    addVehicleData.append("seatCapacity", seatcapacity);
    addVehicleData.append("vehicle_type", vehicletype);
    addVehicleData.append("driver_name", drivername);
    addVehicleData.append("driver_contact", drivercontact);
    addVehicleData.append("driver_license_image", drivernicimg.files[0]);



    console.log(id)


    sendAjaxVehicleRequest(addVehicleData);
};

sendAjaxVehicleRequest = (addVehicleData) => {
    console.log("Added vehicle");
    $.ajax({
        url: "http://localhost:8090/Mapping/api/user",
        type: "POST",
        data: addVehicleData,
        processData: false,  // Prevent jQuery from processing the data
        contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
        success:function (resp) {
            console.log(resp);
            alert(resp.message);
        },
        error: (e) => {
            console.error(e);
            alert(e);
        }
    });
};


//Update Vehicle


$('#btnvehicleUpdate').on('click', () => {

    alert("updated")
    VehicleUpdateRequest();
});

VehicleUpdateRequest=()=>{

    const id=document.getElementById('txtvehicleid0').value;
    const brand=document.getElementById('txtvehiclebrand0').value;
    const category=document.getElementById('txtvehiclecategory0').value;
    const fueltype=document.getElementById('txtfueltype0').value;
    const hybridornon = document.getElementById('txthybridornon0').value;
    const fuelusage = document.getElementById('txtfuelusage0').value;
    const vehicleImg=document.getElementById('txtVehicleImage0');
    const seatcapacity =document.getElementById('txtseatcapacity0').value;
    const vehicletype =document.getElementById('txtvehicletype0').value;
    const drivername =document.getElementById('txtdrivername0').value;
    const drivercontact =document.getElementById('txtdrivercontact0').value;
    const drivernicimg =document.getElementById('txtDriverNicImage0');
    updateVehicleObj(id,brand,category,fueltype,hybridornon,fuelusage,vehicleImg,seatcapacity,vehicletype,drivername,drivercontact,drivernicimg);

}



updateVehicleObj=(id,brand,category,fueltype,hybridornon,fuelusage,vehicleImg,seatcapacity,vehicletype,drivername,drivercontact,drivernicimg) => {
    const updateVehicleData = new FormData();
    updateVehicleData.append("id", id);
    updateVehicleData.append("vehicle_brand", brand);
    updateVehicleData.append("vehicle_category", category);
    updateVehicleData.append("fuel_type", fueltype);
    updateVehicleData.append("hybrid_OR_nonHybrid", hybridornon);
    updateVehicleData.append("fuel_usage", fuelusage);
    updateVehicleData.append("vehicle_img", vehicleImg.files[0]);
    updateVehicleData.append("seatCapacity", seatcapacity);
    updateVehicleData.append("vehicle_type", vehicletype);
    updateVehicleData.append("driver_name", drivername);
    updateVehicleData.append("driver_contact", drivercontact);
    updateVehicleData.append("driver_license_image", drivernicimg.files[0]);


    UpdateAjaxVehicleRequest(updateVehicleData);
};

UpdateAjaxVehicleRequest = (updateVehicleData) => {

    $.ajax({
        url: "http://localhost:8090/Mapping/api/user",
        type: "PUT",
        data: updateVehicleData,
        processData: false,  // Prevent jQuery from processing the data
        contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
        success:function (resp) {
            console.log(resp);
            alert(resp.message);
        },
        error: (e) => {
            console.error(e);
            alert(e);
        }
    });
};

//delete vehicle by id

$("#btnVehicleDelete").click(function () {
    let vehicleid=$("#txtvehicleid0").val();
    $.ajax({
        url: "http://localhost:8090/Mapping/api/user?id="+vehicleid,
        type:"DELETE",
        dataType: "json",
        success:function (resp){
            alert(resp.message);

        },
        error:function (e) {
            alert(JSON.parse(e.responseText).message);

        }
    });
});

