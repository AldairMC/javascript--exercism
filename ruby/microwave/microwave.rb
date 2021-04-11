# frozen_string_literal: true

# Microwave exercism
class Microwave
  attr_reader :buttons

  def initialize(buttons)
    @buttons = buttons
  end

  def seconds_minutes_less_ten(num)
    num < 10 ? "0#{num}" : num
  end

  def number_less_sxty
    "00:#{seconds_minutes_less_ten(buttons)}"
  end

  def number_between_sixty_one_hundred
    seconds = buttons - 60
    "01:#{seconds_minutes_less_ten(seconds)}"
  end

  def number_more_one_hundred
    minutes = buttons / 100
    seconds = buttons - minutes * 100
    if seconds >= 60
      seconds -= 60
      minutes += 1
    end
    "#{seconds_minutes_less_ten(minutes)}:#{seconds_minutes_less_ten(seconds)}"
  end

  def timer
    if buttons < 60
      number_less_sxty
    elsif buttons >= 60 && buttons < 100
      number_between_sixty_one_hundred
    else
      number_more_one_hundred
    end
  end
end
