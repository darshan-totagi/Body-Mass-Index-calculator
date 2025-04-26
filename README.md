# Body-Mass-Index-calculator
It’s a simple number calculated from a person’s weight and height

What is BMI?

BMI stands for Body Mass Index.
It’s a simple number calculated from a person’s weight and height.
It tells whether your body weight is appropriate for your height.


You take weight and height input from the user.
You calculate BMI using the formula.
You display the BMI and a health message based on the value.
You have a reload button to reset the app.

1. useState hooks:
   
   weight, height: store the values entered by the user.
   bmi: stores the calculated BMI result.
   message: stores the health status ("underweight", "healthy", etc.).

2.calbmi function (Calculate BMI):

   Prevents form from submitting the normal way (so page doesn't reload).
   Checks if weight or height are 0 — if so, gives an alert.
   Else, it calculates the BMI.





