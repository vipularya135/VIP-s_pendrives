function calculate() {
    var name = document.querySelector('.name').value;
    var selectedFood = document.getElementById('pendrive').value;
    var quantity = parseInt(document.getElementById('numberList').value);
    var foodType = document.querySelector('input[name="foodType"]:checked').value;
    var allergies = document.querySelectorAll('input[name="allergy"]:checked');
    var totalAmount = 0;
  
    if (name.length <= 3) {
        alert("Error: Name should be more than 3 letters.");
        return; 
      }

    if (selectedFood === 'bread') {
        totalAmount = quantity * 300;
    } else if (selectedFood === 'baguette') {
        totalAmount = quantity * 400;
    } else if (selectedFood === 'croissant') {
        totalAmount = quantity * 2000;
    }
  
    var message = "Hello " + name + ". You need to pay: Rs. " + totalAmount + " (" + quantity + " x Rs." + totalAmount / quantity + "). ";
  
    if (foodType === 'vegetarian') {
        message += "thank you for choosing to buy in online website";
    } else if (foodType === 'nonvegetarian') {
        message += "thank you for choosing to buy in offline store";
    }
  

    document.getElementById("para").innerHTML=message;
  }