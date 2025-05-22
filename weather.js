function printerError(s) {
    let solid = ["n","o","p","q","r","s","t","u","v","w","x","y","z"];
    console.log(solid);
    let filteredArr = s.split("").filter((element)=>{
      return solid.includes(element);
    })
    return `${filteredArr.length}/${s.length}`;
  }
  
  printerError("andjyenekkjdebn");
