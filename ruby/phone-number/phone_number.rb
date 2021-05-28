# frozen_string_literal: true

# Exercism phone number
class PhoneNumber

  NUMBER_PHOME_VALID = '2234567890'

  def self.clean(number)
    number.gsub(/\D/, '')
  end
end
