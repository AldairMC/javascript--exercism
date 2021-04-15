# frozen_string_literal: true

# Matrix exercism
class Matrix
  attr_reader :matrix_string

  def initialize(matrix_string)
    @matrix_string = matrix_string.split("\n").map { |key| key.split(' ').map(&:to_i) }
  end

  def rows
    matrix_string
  end

  def columns
    matrix_string.transpose
  end
end
