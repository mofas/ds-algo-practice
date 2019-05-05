seq = ['A', 'B', 'C']

current = []
next = []
for char in seq:
    for c in current:
        next.append(c + char)
        next.append(char + c)
    next.append(char)
    current = current + next
    next = []

print(current)
