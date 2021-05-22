# frozen_string_literal: true

# Exercism sum of multiples
class SumOfMultiples
  attr_reader :args

  def initialize(*args)
    @args = args
  end

  def to(limit)
    args
      .to_a
      .map { |itr| (1...limit).select { |ele| (ele % itr).zero? } }
      .flatten
      .uniq
      .sum
  end
end
