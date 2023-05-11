"""----------------PYTHON POCZĄTKI---------------"""

print("Hello World")

## Generator tworzący nazwę bandu 👇

print(" Welcome to the brand name generator")
city = input("Which city did you grow up in?\n")
pet = input("What is the name of a pet?\n")
print("Your band name could be " + city + " " + pet)


print("Hello"[0])

##---------------------------DATA TYPES-------------------------------

# String

"hello"[4]
print("123" + "345")

# Integer

print(123 + 345)

123_345

# Float

3.14123

# Boolean

True
False

"""PEMDAS"""
# kolejność wykonywania działań
# - ()
# - **
# - * /
# - + -

print(3 * 3 + 3 / 3 - 3)

##-------------------------------------------------------------------


num_char = len(input("What is your name?"))
new_num_char = str(num_char)
print("Your name has " + new_num_char + " characters")


##-------------------Adding two digits numbers--------------------------

# 🚨 Don't change the code below 👇
two_digit_number = input("Type a two digit number: ")
# 🚨 Don't change the code above 👆

####################################
# Write your code below this line 👇
first_digit = two_digit_number[0]
second_digit = two_digit_number[1]

result = int(first_digit) + int(second_digit)
print(result)


##--------------------------BMI CALCULATOR------------------------------

print("Welcome to BMI Calculator!")
height = input("What is your height?\n")
weight = input("What is your weight?\n")
bmi = int(weight) / float(height) ** 2
bmi_as_int = int(bmi)
print(bmi_as_int)
print(
    "Your BMI = " + str(bmi_as_int) + " kg/m2"
)  # tu jest błąd, jeszcze nie wiem czemu
# trzeba było dodać str, żeby zamienić bmi_as_int z int w str

##------------------------------------------------------------------------

score = 0
height = 1.8
isWinning = True  # Gdy mamy dużo różnych data types, możemy zamienić używająć f-String

# f-String
print(
    f"Your score is {score}, your height is {height}, you are winning is {isWinning}."
)

##----------------------DAYS LEFT CALCULATOR----------------------------

age = input("What is your age?")
age = int(age)
years_remaning = 90 - age
days = int(years_remaning) * 365

weeks = int(years_remaning) * 52

months = int(years_remaning) * 12

days_as_int = int(days)
weeks_as_int = int(weeks)
months_as_int = int(months)

print(
    f"You have {days_as_int} days, {weeks_as_int} weeks, and {months_as_int} months left."
)

##--------------------------TIP CALCULATOR--------------------------------

# If the bill was $150.00, split between 5 people, with 12% tip.

# Each person should pay (150.00 / 5) * 1.12 = 33.6
# Format the result to 2 decimal places = 33.60

# Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

# Write your code below this line 👇
print("Welcome to the TIP calculator!")
bill_price = float(input("What is your bill value? $"))

tip = int(input("How much tip would you like to give? 10,12 or 15? "))

number_of_people = int(input("How many people should I split?"))

bill_with_tip = tip / 100 * bill_price + bill_price

each_person_price = bill_with_tip / number_of_people

final_amount = round(each_person_price, 2)
final_amount = "{:.2f}".format(each_person_price)

print(f"Each person should pay: ${final_amount}")


##---------------------------ROLLERCOSTER HEIGHT------------------------------

print("Welcome to the Rollercoster!")
height = int(input("What is your height in cm? "))
bill = 0

if height >= 120:
    print("You can ride the rollercoster!")
    age = int(input("What is your age? "))
    if age < 12:
        bill = 5
        print("Child tickets are 5$.")
    elif age <= 18:
        bill = 7
        print("Your tickets are 7$.")
    else:
        bill = 12
        print("Adults tickets are 12$.")
    if age > 45 and age < 55:
        print("Everything is going to be ok. Have a free ride on us!")
        bill = 0
    photo = input("Do you want a photo? Type Y for Yes and N for No.\n")
    if photo == "Y":
        bill += 3  # bill = bill + 3
    print(f"Your final bill is {bill}$.")
else:
    print("Sorry, you have to grow taller before you can ride.")


##--------------------------ODD and EVEN NUMBER--------------------------------

# 🚨 Don't change the code below 👇
number = int(input("Which number do you want to check? "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇

if number % 2 == 0:
    print("This is an even number.")
else:
    print("This is an odd number.")


##----------------------------BMI CALCULATOR 2.0-------------------------------


print("Welcome to BMI Calculator!")
height = input("What is your height?\n")
weight = input("What is your weight?\n")
bmi = int(weight) / float(height) ** 2
bmi_as_int = int(bmi)
if bmi_as_int <= 18.5:
    print(f"Your BMI = {bmi_as_int} kg/m2. You are underweight :(")
elif bmi_as_int <= 25:
    print(f"Your BMI = {bmi_as_int} kg/m2. You are normal weight ;)")
elif bmi_as_int <= 30:
    print(f"Your BMI = {bmi_as_int} kg/m2. You are slightly overweight ;|")
elif bmi_as_int <= 35:
    print(f"Your BMI = {bmi_as_int} kg/m2. You are are obese :/")
else:
    print(f"Your BMI = {bmi_as_int} kg/m2. You are are critically obese :(")


##-----------------------------LEAP YEAR---------------------------------------

print("Welcome to Leap Year calculator!")
year = int(input("What year would you check?"))
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("Leap Year")
        else:
            print("Not Leap Year")

    else:
        print("Leap Year")
else:
    print("Not Leap Year")


##--------------------------PIZZA ORDER PRACTICE------------------------------

# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
bill = 0
if size == "S":
    bill += 15
elif size == "M":
    bill += 20
else:
    bill += 25
if add_pepperoni == "Y":
    if size == "S":
        bill += 2
    else:
        bill += 3
if extra_cheese == "Y":
    bill += 1
print(f"Your final bill is: ${bill}.")

##--------------------------LOVE CALCULATOR--------------------------------

# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
combined_string = name1 + name2
lower_case_string = combined_string.lower()

t = lower_case_string.count("t")
r = lower_case_string.count("r")
u = lower_case_string.count("u")
e = lower_case_string.count("e")

true = t + r + u + e

l = lower_case_string.count("l")
o = lower_case_string.count("o")
v = lower_case_string.count("v")
e = lower_case_string.count("e")

love = l + o + v + e

love_score = int(str(true) + str(love))


if (love_score<10) or (love_score>90):
    print(f"Your love score is {love_score}, you go together like coke and mentos.")
elif (love_score>=40) or (love_score<=50):
    print(f"Your score is {love_score}, you are alright together.")
else:
    print(f"Your love socore is {love_score}.")
    
    
##-----------------------------RANDOM MODULE---------------------------------

# To make this work we need to remember that we have to import random.
# This is how we can generate random number between 1,10. 

import random 
random_integer = random.randint(1,10)
print (random_integer)

# Random number betwen 0 and 1 but not include 1.
import random 
random_float = random.random() * 5
print (random_float)

# We use random number before, but here is much simplier. 
import random 
love_score = random.randint(1,100)
print(f"Your love score is {love_score}!")


##------------------------------Head or Tails-------------------------------
#Simple program that prints Head or tails
import random

random_side = random.randint(0, 1)
if random_side == 1:
    print("Heads")
else:
    print("Tails")

##----------------------------------------------------------------------------
# We got varible that store all states of america 
# Then we can print random stat like before 

states_of_america = ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut", "Massachusetts", "Maryland", "South Carolina", "New Hampshire", "Virginia", "New York", "North Carolina", "Rhode Island", "Vermont", "Kentucky", "Tennessee", "Ohio", "Louisiana", "Indiana", "Mississippi", "Illinois", "Alabama", "Maine", "Missouri", "Arkansas", "Michigan", "Florida", "Texas", "Iowa", "Wisconsin", "California", "Minnesota", "Oregon", "Kansas", "West Virginia", "Nevada", "Nebraska", "Colorado", "North Dakota", "South Dakota", "Montana", "Washington", "Idaho", "Wyoming", "Utah", "Oklahoma", "New Mexico", "Arizona", "Alaska", "Hawaii"]

import random
print(states_of_america[random.randint(0, 51)])

##---------------------------Banker Roulette---------------------------------
# Split string method
names_string = input("Give me everybody's names, separated by a comma. ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
import random
num_names= len(names)
random_choice = random.randint(0, num_names - 1)
person_who_will_pay = names[random_choice]
print(person_who_will_pay + " is going to buy the meal today!")

##-------------------------------------------------------------------------
# Below we got two lists that were inside another list 
# [1][1]First number is list number and second is number of ithem 
fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"]
vegetables = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"]
 
dirty_dozen = [fruits, vegetables]
 
print(dirty_dozen[1][1])


##------------------------------Treasure Map---------------------------------

# 🚨 Don't change the code below 👇
row1 = ["⬜️","️⬜️","️⬜️"]
row2 = ["⬜️","⬜️","️⬜️"]
row3 = ["⬜️️","⬜️️","⬜️️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
# 🚨 Don't change the code above 👆

#Write your code below this row 👇

horizontal = int(position[0])
vertical = int(position[1])

map [vertical - 1][horizontal - 1] = "X"

#Write your code above this row 👆

# 🚨 Don't change the code below 👇
print(f"{row1}\n{row2}\n{row3}")

##--------------------------------------------------------------------------


