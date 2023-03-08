fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(json => {
        for(var i=0; i<json.length; i++){
            console.log(json[i]);
        }
      })