# frozen_string_literal: true

# HighScore exercism
class HighScores
  attr_reader :scores

  def initialize(scores)
    @scores = scores.delete_if(&:zero?)
  end

  def latest
    scores.min
  end

  def personal_best
    scores.sort.max
  end

  def personal_top_three
    scores.sort.reverse.take(3)
  end

  def latest_is_personal_best?
    scores.last == scores.max
  end
end
