# frozen_string_literal: true

# Exercism series
class Series
  attr_reader :digits

  def initialize(digits)
    @digits = digits
  end

  def slices(slice)
    lower_limit = slice - 1
    iterator = (digits.length - (slice - 1))
    raise ArgumentError if slice > digits.length

    separate_digits(0, lower_limit, iterator)
  end

  private

  def separate_digits(higher_limit, lower_limit, iterator)
    result = []
    iterator.times do
      result << digits[higher_limit..lower_limit]
      higher_limit += 1
      lower_limit += 1
    end
    result
  end
end
