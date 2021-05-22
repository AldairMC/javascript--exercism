# frozen_string_literal: true

# Exercism sum of multiples
class SumOfMultiples
  attr_reader :args

  def initialize(*args)
    @args = args
  end

  def to(limit)
    return 0 if args.empty? || args[0].zero?

    (args.min...limit).select { |ele| args.any? { |itr| (ele % itr).zero? } }.sum
  end
end
