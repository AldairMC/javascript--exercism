# frozen_string_literal: true

# Exercism phone number
class PhoneNumber
  def self.clean(number)
    number_phone = number.gsub(/\D/, '')
    return number_phone if number_phone.size == 10 && number_phone[3].to_i.between?(2, 9) && number_phone[0].to_i.between?(2, 9)
    return nil if number_phone.size < 10 && number_phone.size > 11
    return number_phone[1..-1] if number_phone.size == 11 && number_phone[1..-1][0].to_i.between?(2, 9) && number_phone[1..-1][3].to_i.between?(2, 9) && number_phone[0].to_i == 1
  end
end
