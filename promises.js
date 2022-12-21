const fetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>(res.json()))
    .then((data)=>(data))

   
}
//fetchData();
const getdata=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>(res.json()))
    .then(function(data){
        for(let i=0;i<data.length;i++){
            console.log(data[i]);
            
        }
    })


}
//getdata();

const getdata1=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>(res.json()))
    .then((data)=>{
        data.map((x)=>document.getElementById("id1").innerHTML=`<li>${x.id}</li>`)
        data.map((x)=>document.getElementById("name").innerHTML=`<li>${x.name}</li>`)
        
    })
}
//getdata1();


function showList(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
         tryTableList1(data);//show in TableWise
         //createList(data);//show in Listbox
        
       });
  }
  
  function createList(data) {
    const mainUL = document.createElement('ul');
    mainUL.id="mainUl";//unorderedlist
    for (let i = 0; i < data.length; i++) {
      const userLI = document.createElement('li');
      userLI.id="userLI"+`${i}`;//firstlistItem
      userLI.style.color="red";
      const userCityLI=document.createElement('li');//secondListItem
     const userphonenumber=document.createElement('li');//thirdlistitem
      userLI.innerHTML = data[i].id+ data[i].name;//x.id+x.name//x->data[i]
      userCityLI.innerHTML = data[i].address.city;
      userphonenumber.innerHTML=data[i].phone;//appending data to listitem
      mainUL.appendChild(userLI);
      mainUL.appendChild(userCityLI);
      mainUL.appendChild(userphonenumber);//appending listitem to mainUL

    }
   
    // append mainUL to body
    document.body.appendChild(mainUL);
    console.log(mainUL);
  }
  //showList();
//console.log(userdata);



    
//showList();



function tryTableList1(data)
{
    var rows='';

    for( var i = 0; i <data.length; i++ )
    {
        
        rows += '<tr id = "row' + i + '"><td id="col0">'+data[i].id+'</td><td id="col1">'+data[i].name+'</td><td id="col2">'+data[i].address.city+'</td><td id="col3">'+data[i].phone+'</td></tr>';
    }
    
    //console.log(rows);
    document.getElementById("table1").innerHTML='<tr id="mainrow"><td>S.No</td><td>Name</td><td>City</td><td>PhoneNumber</td></tr>'+rows;
    

    
}
//showList();


function createFlexList(data) {

    const divelement=document.createElement("div");
    divelement.className="maindiv";
    for (let i = 0; i < data.length; i++) {
        const mainUL = document.createElement('ul');
    mainUL.id="mainul"+`${i}`;//unorderedlist
    mainUL.className="parent";
      const userLI = document.createElement('li');
      userLI.id="userLI"+`${i}`;//firstlistItem
      userLI.className="child";

      const userCityLI=document.createElement('li');
      userCityLI.className="child";//secondListItem
     const userphonenumber=document.createElement('li');//thirdlistitem
      userLI.innerHTML = data[i].id+ "." + data[i].name;//x.id+x.name//x->data[i]
      userCityLI.innerHTML =`<label>City :</label> ${data[i].address.city} `;
      userphonenumber.innerHTML=data[i].phone;//appending data to listitem
      userphonenumber.className="child";
      mainUL.appendChild(userLI); 
      mainUL.appendChild(userCityLI);
      mainUL.appendChild(userphonenumber);//appending listitem to mainUL
      divelement.appendChild( mainUL);

    } 
    
    document.body.appendChild(divelement);
}
//document.getElementById("maindiv").innerHTML=showList();

//showList();

    
// const display=`<li>${getdata.name}</li>`
// document.getElementById("div1").innerHTML=display;


function showListToTable(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var rows='';
         data.map((x,i)=>{
            rows += '<tr id = "row' + i + '"><td id="col0">'+x.id+'</td><td id="col1">'+x.name+'</td><td id="col2">'+x.address.city+'</td><td id="col3">'+x.phone+'</td></tr>';

         })
         document.getElementById("table1").innerHTML='<tr id="mainrow"><td>S.No</td><td>Name</td><td>City</td><td>PhoneNumber</td></tr>'+rows;

        console.log(rows);
       });
  }
  showListToTable();