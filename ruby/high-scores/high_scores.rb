# HighScore exercism
class HighScores
  def initialize(scores)
    @scores = scores.delete_if(&:zero?)
  end

  def scores
    @scores
  end

  def latest
    @scores.min
  end

  def personal_best
    @scores.sort.max
  end

  def personal_top_three
    @scores.sort.reverse.take(3)
  end
end
