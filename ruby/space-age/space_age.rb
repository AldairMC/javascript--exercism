# frozen_string_literal: true

# Space age exercism
class SpaceAge
  EARTH = 31_557_600

  TIME_FOR_PLANET = {
    'mercury' => 0.2408467,
    'venus' => 0.61519726,
    'earth' => 1.0,
    'mars' => 1.8808158,
    'jupiter' => 11.862615,
    'saturn' => 29.447498,
    'uranus' => 84.016846,
    'neptune' => 164.79132
  }.freeze

  attr_reader :time

  def initialize(time)
    @time = time
  end

  def calculated(planet)
    (time / (TIME_FOR_PLANET[planet] * EARTH)).round(2)
  end

  def on_mercury
    calculated('mercury')
  end

  def on_venus
    calculated('venus')
  end

  def on_earth
    calculated('earth')
  end

  def on_mars
    calculated('mars')
  end

  def on_jupiter
    calculated('jupiter')
  end

  def on_saturn
    calculated('saturn')
  end

  def on_uranus
    calculated('uranus')
  end

  def on_neptune
    calculated('neptune')
  end
end
