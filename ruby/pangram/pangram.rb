# Pangram
class Pangram
  def self.pangram?(pharse)
    alph = ('a'..'z').to_a
    (alph - pharse.downcase.chars).empty?
  end
end
