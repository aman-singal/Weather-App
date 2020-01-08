// $(document).ready(function () {
    let inp = $('#inpT');
let btn = $("#btn");
let place = $("#place")

btn.click(()=>{
    $.post(
        '/checking',
        {city: inp.val()},
        function(data){
            
           
            if(data.min > -273){
                console.log("data received is: "  + data);
                let min = (data.min - 273.15).toFixed(2);
                let max = (data.max - 273.15).toFixed(2);
                place.text("Min Temp is: " + min + "          Max Temp is: " + max );
            }
            else{
                console.log(data);
                
                place.text("Invalid City");
            }
           
        }
    )
})

//   });

