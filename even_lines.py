'''
Created on Jul 2, 2014

@author: Anis
'''
INPUT = 'C:\Users\Anis\Desktop\paper\latex\paper.tex'
OUTPUT = 'C:\Users\Anis\Desktop\paper\latex\paper2.tex'

lines = []
with open(INPUT) as f:
    for i, line in enumerate(f):
        if (i % 2 == 0):
            lines.append(line)

with open(OUTPUT, 'w') as f:
    f.writelines(lines)
