# frozen_string_literal: true

# Microwave exercism
class Microwave
  attr_reader :buttons

  def initialize(buttons)
    @buttons = buttons
  end

  def timer
    if buttons < 60
      buttons_less_than_sixty
    elsif buttons.between?(60, 99)
      buttons_between_sixty_and_one_hundred
    else
      buttons_greather_than_one_hundred
    end
  end

  private

  def format_seconds_and_minutes(num)
    num.to_s.rjust(2, '0')
  end

  def buttons_less_than_sixty
    "00:#{format_seconds_and_minutes(buttons)}"
  end

  def buttons_between_sixty_and_one_hundred
    seconds = buttons - 60
    "01:#{format_seconds_and_minutes(seconds)}"
  end

  def buttons_greather_than_one_hundred
    minutes = buttons / 100
    seconds = buttons - minutes * 100
    if seconds >= 60
      seconds -= 60
      minutes += 1
    end
    "#{format_seconds_and_minutes(minutes)}:#{format_seconds_and_minutes(seconds)}"
  end
end
