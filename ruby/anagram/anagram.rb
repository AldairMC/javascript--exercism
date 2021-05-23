# frozen_string_literal: true

# Exercism Anagram
class Anagram
  attr_reader :word

  def initialize(word)
    @word = word
  end

  def match(anagrams)
    anagrams.select do |element|
      element.upcase != word.upcase && modify_word(element) == modify_word(word)
    end
  end

  private

  def modify_word(str)
    str.upcase.split('').sort.reverse.join
  end
end
