## High score exercism
class HighScores
  def initialize(scores)
    @scores = scores
  end

  def scores
    return @scores
  end

  def latest
    @scores.sort()[0]
  end

  def personal_best
    @scores.sort{ |a, b| b <=> a }[0]
  end
end
