"""-------------------------PYTHON-INTRO-2-------------------------------"""

##--------------------------------LOOPS----------------------------------

# Here we create loop, we got new varible "frut" that store single fruit f.e. Apple, next loop go once again and print "Peach".

fruits = ["Apple", "Peach", "Pear"]
for fruit in fruits:
    print(fruit)
    print(fruit + " pie")
print(fruits)  
#------------------------------------------------------------------------------
#----------------------------------Important-----------------------------------

# len - count number of ithems inside varible
print (len(student_heights))

# sum - sum all values of varibles 
print (sum(student_heights))

##-------------------------Average-Height-TASK---------------------------------
#------------------------------------------------------------------------------
# 🚨 Don't change the code below 👇
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
  student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆

#Write your code below this row 👇

total_height = 0
for height in student_heights:
    total_height += height
#print(total_height) # using loop we count total_height

number_of_students = 0 
for student in student_heights:
    number_of_students += 1
#print(number_of_students) # using loop we count the number of all students 

average_height = round(total_height/number_of_students)
print(average_height)

##--------------------------High-Score-TASK------------------------------------
#------------------------------------------------------------------------------
# 🚨 Don't change the code below 👇
student_scores = input("Input a list of student scores ").split()
for n in range(0, len(student_scores)):
  student_scores[n] = int(student_scores[n])
print(student_scores)
# 🚨 Don't change the code above 👆

#Write your code below this row 👇

higest_score = 0
for score in student_scores:
    if score > higest_score:
        higest_score = score 
print(f"The highest score in the class is: {higest_score}")

#------------------------FOR-LOOP-with-Range----------------------------------
# to make range between 1-10 we need to set range 1-11, 3 value is steped by three

for number in range(1, 11, 3):
    print(number)

#-------------------------------------
total = 0
for number in range(1, 101):
    total += number
print (total)

#--------------------------------------
total = 0
for number in range(2, 101, 2):
    total += number
print(total)

#----------------------------------FIZZ-BUZZ------------------------------------
# we got the range between 1-100, firt check if number is devided by 3 and 5 then chceck another conditions

total = 0 
for number in range (1, 101):
  if number % 3 == 0 and number % 5 == 0:
    print ("FizzBuzz")
  elif number % 3 == 0:
    print ("Fizz")
  elif number % 5 == 0:
    print ("Buzz")
  else:
    print(number)

#---------------------------------PASSWORD-GENERATOR----------------------------
#Password Generator Project

import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters= int(input("How many letters would you like in your password?\n")) 
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

#Eazy Level - Order not randomised:
#e.g. 4 letter, 2 symbol, 2 number = JduE&!91

password = ""

for char in range(1, nr_letters + 1):
  password += random.choice(letters)
for char in range(1, nr_symbols + 1):
  password += random.choice(symbols)
for char in range(1, nr_numbers + 1):
  password += random.choice(numbers)
  

print(password)


#Hard Level - Order of characters randomised:
#e.g. 4 letter, 2 symbol, 2 number = g^2jk8&P

password_list = []

for char in range(1, nr_letters + 1):
  password_list.append (random.choice(letters))
for char in range(1, nr_symbols + 1):
  password_list += random.choice(symbols)
for char in range(1, nr_numbers + 1):
  password_list += random.choice(numbers)
  

print(password_list)
random.shuffle(password_list)
print(password_list)

password = ""
for char in password_list:
  password += char

print(f"Your password is: {password}")


##---------------------------------FUNCTIONS------------------------------------
#-------------------------------------------------------------------------------
#---------------------------------WHILE-LOOP------------------------------------
# below we got while loop that both is writen diffrent but do the same 

while at_goal() != True: # != mean not true
  move_squere()
while not at_goal():     # this mean the same above 
  move_squere()