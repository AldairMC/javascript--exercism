# frozen_string_literal: true

# Exercism series
class Series
  attr_reader :digits

  def initialize(digits)
    @digits = digits
  end

  def slices(num)
    _end = num-1
    num_loop = (digits.length-(num-1))
    if(num > digits.length)
      raise "Your number is invalid"
    else
      separate(0, _end, num_loop)
    end 
  end

  private

  def separate(_start, _end, num_loop)
    aux = []
    num_loop.times do |x|
      aux << digits[_start.._end]
      _start += 1
      _end += 1
    end
    aux
  end
end
