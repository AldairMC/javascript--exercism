# frozen_string_literal: true

# Exercism phone number
class PhoneNumber
  def self.clean(number)
    number_phone = number.gsub(/\D/, '')
    return number_phone if number_phone_equal_ten_digits(number_phone)
    return nil if number_phone.size < 10 && number_phone.size > 11
    return number_phone[1..-1] if number_phone.size == 11 && number_phone[1..-1][0].to_i.between?(2, 9) && number_phone[1..-1][3].to_i.between?(2, 9) && number_phone[0].to_i == 1
  end

  private

  def self.number_phone_equal_ten_digits(number)
    number_phone_length = number.size == 10
    verify_second_digit = number[3].to_i.between?(2, 9)
    verify_first_digit = number[0].to_i.between?(2, 9)
    number_phone_length && verify_first_digit && verify_second_digit
  end
end
