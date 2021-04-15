# frozen_string_literal: true

# Triangle exercism
class Triangle
  attr_reader :sides

  def initialize(sides)
    @sides = sides.drop_while(&:zero?)
  end

  def sides_order
    sides.sort
  end

  def invalid_triangle?
    return false if sides_order.empty?

    sides_order.first + sides_order[1] > sides_order.last
  end

  def equilateral?
    invalid_triangle? ? sides_order.first == sides_order.last : false
  end

  def isosceles?
    invalid_triangle? ? sides_order.reverse.first == sides_order.reverse[1] : false
  end

  def scalene?
    condition_a_and_b = sides_order.first != sides_order.last
    condition_b_and_c = sides_order[1] != sides_order.last
    invalid_triangle? ? condition_a_and_b && condition_b_and_c : false
  end
end
