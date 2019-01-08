module BookKeeping
  VERSION = 1
end
# two_fer exercism
class TwoFer
  def self.two_fer(name = 'you')
    if name == 'you'
      'One for you, one for me.'
    else
      "One for #{name}, one for me."
    end
  end
end
