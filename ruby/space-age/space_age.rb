# frozen_string_literal: true

# Space age exercism
class SpaceAge
  EARTH = 31_557_600

  TIME_FOR_PLANET = {
    'mercury' => 0.2408467
  }

  attr_reader :time

  def initialize(time)
    @time = time
  end

  def on_mercury
    self.calculated('mercury')
  end

  def self.calculated(planet)
    (time / (TIME_FOR_PLANET[planet] * EARTH)).round(2)
  end
end
