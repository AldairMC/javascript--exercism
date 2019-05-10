# Acronym exercism
class Acronym
  def self.abbreviate(str)
    str.gsub(/\s+|[_]|[-]|\W^[']/, ' ')
       .split(' ')
       .map { |i| i[0] }
       .join
       .upcase
  end
end
