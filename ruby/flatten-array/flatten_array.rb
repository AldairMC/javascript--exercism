# Flatten array exercism
class FlattenArray
  def self.flatten(arr)
    arr.flatten.delete_if { |x| x == nil }
  end
end
