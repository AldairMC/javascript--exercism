# frozen_string_literal: true

# Exercism sum of multiples
class SumOfMultiples
  attr_reader :args

  def initialize(*args)
    @args = args
  end

  def to(limit)
    return 0 if args.empty? || args.first.zero?

    (args.min...limit).select do |number|
      args.any? { |i| (number % i).zero? }
    end.sum
  end
end
