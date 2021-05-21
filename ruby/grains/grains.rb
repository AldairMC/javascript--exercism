# frozen_string_literal: true

# Exercism grains
class Grains
  def self.square(num)
    raise ArgumentError if num <= 0 || num > 64

    2 << (num - 2)
  end

  def self.total
    (2 << 63) - 1
  end
end
