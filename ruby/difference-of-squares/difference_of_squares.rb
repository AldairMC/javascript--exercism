# frozen_string_literal:  true

# Diference of squares exercism
class Squares
  attr_reader :number

  def initialize(number)
    @number = number
  end

  def sum_of_squares
    (1..number).map { |key| key.pow(2) }.sum
  end

  def square_of_sum
    (1..number).sum.pow(2)
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
