# frozen_string_literal: true

# Matrix exercism
class Matrix
  attr_reader :matrix_string

  def initialize(matrix_string)
    @matrix_string = matrix_string
  end

  def rows
    @rows ||= matrix_string.each_line.map { |key| key.split.map(&:to_i) }
  end

  def columns
    rows.transpose
  end
end
