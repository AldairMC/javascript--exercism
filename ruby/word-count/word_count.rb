# frozen_string_literal: true

# Exercism Word Count
class Phrase
  attr_reader :phrase

  def initialize(phrase)
    @phrase = phrase.downcase
  end

  def word_count
    phrase.scan(/\b[\w']+\b/i).each_with_object(Hash.new(0)) do |a, k|
      k[a] += 1
    end
  end
end
