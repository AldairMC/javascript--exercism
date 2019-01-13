# Acronym exercism
class Acronym
  def self.abbreviate(str)
    a=[]
    x = str.split(" ")
    x.each do |i|
      a.push(i[0])
    end
    a.join().upcase()
  end
end
