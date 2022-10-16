const pizzaTime = [3000, 2000, 3000, 5000, 6000]
const prepare = document.getElementById('prepare');
const currentTime = document.querySelector('.curr_time')

//function to clear previous order
const clearContent = ()=>  document.getElementById('ready').textContent = '';

//function for duration to process the order
const processTime = (num)=>{
  document.getElementById('process').textContent = `Your pizza will be ready in ${pizzaTime[num]/1000} seconds`;
} 

//function to display order
const displayPizza = ()=>{
   const select = document.getElementById('pizza')
   const option = select.options[select.selectedIndex].text;  
    const result = `Here is your ${option} 🤭🤭🍕`;
   prepare.addEventListener('click', ()=>{
    if (option == 'Sausage Pizza'){
      
      setTimeout(() =>
        document.getElementById('ready').textContent = `${result}`, pizzaTime[0]);
        processTime(0);
    }
    else if(option == 'Chicken BBQ Pizza'){
       clearTimeout()
       clearContent()
       setTimeout(()=>
      document.getElementById('ready').textContent = `${result}`,pizzaTime[1]);
      processTime(1);

    }
    else if(option == 'Pepperoni Pizza'){
      clearTimeout()
      clearContent()
      setTimeout(()=>
      document.getElementById('ready').textContent = `${result}`,pizzaTime[2]);
      processTime(2);
    }
    else if(option == "Meat-lover's Pizza"){
      clearTimeout()
      clearContent()
      setTimeout(()=>
      document.getElementById('ready').textContent = `${result}`,pizzaTime[3]);
      processTime(3);
    }
    else if(option == "Greek Pizza"){
      clearTimeout()
      clearContent()
      setTimeout(()=>
      document.getElementById('ready').textContent = `${result}`,pizzaTime[4]);
      processTime(4);
    }
    else{
      clearTimeout()
      clearContent()
    }
})
}
document.getElementById('pizza').addEventListener("change", displayPizza);

