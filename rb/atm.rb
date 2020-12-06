def withdraw (amount) 

    solution = [0, 0, 0]

    number_of_100s, remainder_from_100s = get_with_remainder(100, amount)

    number_of_50s, remainder_from_50s = get_with_remainder(50, remainder_from_100s)

    number_of_20s = (remainder_from_50s / 20).floor

    return [number_of_100s, number_of_50s, number_of_20s]
  
end

def get_with_remainder(note, amount)
  number_of_bills, remainder = amount.divmod(note)

  if (remainder == 10 || remainder == 30)
    number_of_bills = number_of_bills - 1 
    remainder += note
  end
  
  return [number_of_bills, remainder]
end