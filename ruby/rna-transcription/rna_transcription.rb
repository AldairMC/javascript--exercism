# RNA Transcription
class Complement
  CODE = { 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U' }.freeze
  def self.of_dna(dna)
    dna.split('').map { |i| CODE[i] }.join
  end
end
