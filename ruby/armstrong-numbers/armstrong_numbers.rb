# frozen_string_literal: true

# Exercism armstrong number
class ArmstrongNumbers
  def self.include?(number)
    num_length = number.to_s.length
    arm_number = number.to_s.each_char.map { |i| i.to_i.pow(num_length) }.sum
    number.to_i == arm_number
  end
end
