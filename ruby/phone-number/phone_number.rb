# frozen_string_literal: true

# Exercism phone number
class PhoneNumber
  def self.clean(number)
    phone_number = number.gsub(/\D/, '')
    return phone_number if phone_number_correct(phone_number)

    phone_number[1..-1] if valid?(phone_number) || invalid?(phone_number)
  end

  class << self
    def phone_number_correct(number)
      phone_number = number.size == 10
      area_code = number[0].to_i.between?(2, 9)
      exchange_code = number[3].to_i.between?(2, 9)
      phone_number && area_code && exchange_code
    end

    def invalid?(number)
      number.size < 10 && number.size > 11
    end

    def valid?(number)
      phone_number = number.size == 11
      area_code = number[1..-1][0].to_i.between?(2, 9)
      exchange_code = number[1..-1][3].to_i.between?(2, 9)
      nanp = number[0].to_i == 1
      phone_number && area_code && exchange_code && nanp
    end
  end
end
