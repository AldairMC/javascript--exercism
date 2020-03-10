CODE = {'A': 'U', 'G': 'C', 'C': 'G', 'T': 'A'}


def to_rna(dna_strand):
    return ''.join([CODE[i] for i in dna_strand])
