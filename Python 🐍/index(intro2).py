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


