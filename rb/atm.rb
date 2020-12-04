def withdraw amount 

    solution = [0, 0, 0]
# $100
    number_of_100s = (amount / 100).floor
    remainder_from_100s = amount - (number_of_100s * 100)

    if (remainder_from_100s == 10 || remainder_from_100s == 30) do
        solution[0] = number_of_100s - 1 
        remainder_from_100s += 100
    else
        solution[0] = number_of_100s
    end

# $50
    number_of_50s = (remainder_from_100s / 50).floor
    remainder_from_50s = remainder_from_100s - (remainder_from_50s * 50)
    
    if (remainder_from_50s == 10 || remainder_from_50s == 30) do
        solution[1] = number_of_50s - 1
        remainder_from_50s += 50
    else
        solution[1] = number_of_50s
    end

    number_of_20s = (remainder_from_50s / 20).floor
        solution[2] = number_of_20s

    return solution




end
