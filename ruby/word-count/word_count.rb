# frozen_string_literal: true

# Exercism Word Count
class Phrase
  attr_reader :phrase

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    phrase.downcase.scan(/\b[\w']+\b/i).tally do |a, k|
      k[a] += 1
    end
  end
end
