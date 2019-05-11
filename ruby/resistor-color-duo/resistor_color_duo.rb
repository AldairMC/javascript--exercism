# Resistor color duo
class ResistorColorDuo
  COLORS = %w[black brown red orange yellow green blue violet grey white].freeze
  def self.value(color)
    Integer(color.map { |i| COLORS.index(i) }.join)
  end
end
