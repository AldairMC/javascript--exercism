# frozen_string_literal: true

# Exercism series
class Series
  attr_reader :digits

  def initialize(digits)
    @digits = digits
  end

  def slices(slice)
    raise ArgumentError if slice > digits.length

    digits.each_char.each_cons(slice).map(&:join)
  end
end
