module BookKeeping
  VERSION = 1
end
#two_fer exercism
class TwoFer
  def self.two_fer(name)
    if name == "" || name == nil
      "One for you, one for me."
    else
      "One for #{name}, one for me."
    end
  end
end
