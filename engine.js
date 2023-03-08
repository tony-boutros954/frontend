function GetList(){
    fetch('https://ill-pink-duck-tutu.cyclic.app/data')
      .then(response => response.json())
      .then(json => {
        var mylist = document.getElementById('mylist');
        for(var i=0; i<json.length; i++){
            var createlist = document.createElement('li')
            createlist.innerHTML=json[i].name;
            mylist.appendChild(createlist);
            console.log(json[i]);
        }
      })
}