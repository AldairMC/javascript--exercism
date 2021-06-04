# frozen_string_literal: true

# Exercism Hamming
class Hamming
  def self.compute(dna_one, dna_two)
    raise ArgumentError if dna_one.size != dna_two.size

    result = 0
    dna_one.split('').each_with_index do |element, index|
      result += 1 if element != dna_two[index]
    end
    result
  end
end
