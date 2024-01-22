$(document).ready(function() {
  // This declares a global variable named globalDurationYears
  var globalDurationYears;
  // This select the element with the ID `property-items` and hides it from the user
  $('#property-items').hide();

  // Select the form with the ID "mortgage-form" and attach a submit event listener to it
  $('#mortgage-form').submit(function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // This leaves the `property-items` element itself intact but completely empty
    $('#property-items').empty();
  
    // Extract the loan amount value from the field with ID "loan-amount"
    const loanAmount = $('#loan-amount').val();
    // Extract the interest rate value from the field with ID "interest-rate"
    const interestRate = $('#interest-rate').val();
    // Extract the loan duration in years from the field with ID "duration-years"
    const durationYears = $('#duration-years').val();
    // This assigns the value of the variable durationYears to the globalDurationYears
    globalDurationYears = durationYears;
  
    // Construct the query URL for the API call, incorporating the form data
    const queryURL = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${durationYears}`;
  
    // Call the function to fetch mortgage data from the API using the constructed URL
    fetchMortgageData(queryURL);
    //
  });

});

