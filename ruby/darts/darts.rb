# frozen_string_literal: true

# Darts exercism
class Darts
  KYES = {
    0 => 10,
    1 => 10,
    2 => 5,
    3 => 5,
    4 => 5,
    5 => 5,
    6 => 1,
    7 => 1,
    8 => 1,
    9 => 1,
    10 => 1
  }.freeze

  attr_reader :axis_x, :axis_y

  def initialize(axis_x, axis_y)
    @axis_x = axis_x
    @axis_y = axis_y
  end

  def score
    hypot = Math.hypot(axis_x, axis_y).ceil
    KYES[hypot] || 0
  end
end
