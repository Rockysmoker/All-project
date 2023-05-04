print("Welcome to the TIP calculator!")
bill_price = float(input("What is your bill value? $"))

tip = int(input("How much tip would you like to give? 10,12 or 15? "))

number_of_people = int(input("How many people should I split?"))

bill_with_tip = tip / 100 * bill_price + bill_price

each_person_price = bill_with_tip / number_of_people

final_amount = round(each_person_price, 2)
final_amount = "{:.2f}".format(each_person_price)

print(f"Each person should pay: ${final_amount}")