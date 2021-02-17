# frozen_string_literal: true

# Space age exercism
class SpaceAge
  EARTH = 31_557_600

  TIME_FOR_PLANET = {
    'on_mercury' => 0.2408467,
    'on_venus' => 0.61519726,
    'on_earth' => 1.0,
    'on_mars' => 1.8808158,
    'on_jupiter' => 11.862615,
    'on_saturn' => 29.447498,
    'on_uranus' => 84.016846,
    'on_neptune' => 164.79132
  }.freeze

  attr_reader :time

  def initialize(time)
    @time = time
  end

  TIME_FOR_PLANET.keys.each do |element|
    define_method element do
      (time / (TIME_FOR_PLANET[element] * EARTH)).round(2)
    end
  end
end
