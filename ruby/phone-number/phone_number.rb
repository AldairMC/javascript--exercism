# frozen_string_literal: true

# Exercism phone number
class PhoneNumber
  REGEXP_NANP = /^1?[2-9][0-9]{2}[2-9][0-9]{6}$/.freeze

  def self.clean(number)
    phone_number = number.gsub(/\D/, '')
    return phone_number[1..-1] if phone_number.size == 11 && phone_number.match(REGEXP_NANP)

    phone_number if phone_number =~ REGEXP_NANP
  end
end
