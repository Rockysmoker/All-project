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
    
    
##-------------------------------------------------------------------------


