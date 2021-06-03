# froze_string_literal: true

# Exercism Word Count
class Phrase
  attr_reader :phrase

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    phrase.scan(/\b[\w']+\b/i).each_with_object(Hash.new(0)){|a,(k,v)| k[a]+=1}
  end
end
