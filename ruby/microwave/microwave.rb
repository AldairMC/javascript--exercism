# frozen_string_literal: true

# Microwave exercism
class Microwave
  attr_reader :buttons

  def initialize(buttons)
    @buttons = buttons
  end

  def minutes
    num = buttons.to_s[0]
    "0#{num}:00"
  end

  def seconds
    minutes = buttons / 60
    seconds = buttons - (minutes.floor * 60)
    "0#{minutes.floor}:#{seconds}"
  end

  def timer
    if buttons >= 2 && (buttons % 100).zero?
      get_minutes
    else
      get_seconds
    end
  end
end
