window['geoloc_example1_options'] = {
    onLocateFunctions: [
      function(position){
          alert("position recived. See javascript console for more information");
          console.log(position);
      }  
    ]
};