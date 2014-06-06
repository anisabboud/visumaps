'''
Created on May 30, 2014

@author: Anis
'''

import math
import time
# from pprint import pprint

areas = [1, 21, 26, 458, 61, 2, 160, 261, 181, 754, 468, 455, 443, 811, 344, 748, 389, 702, 1001, 616, 2944, 12200, 431, 300, 103000, 22966, 13940, 5770, 316, 2586, 4033, 163270, 28450, 2170, 28051, 47000, 214970, 9250, 665, 18270, 23000, 15007, 17363, 2040, 45226, 5128, 267667, 36120, 11437, 11300, 600370, 25333, 20273, 30355, 825418, 64589, 10991, 1565000, 212460, 17820, 28748, 29800, 78200, 65200, 1030700, 176200, 111370, 33843, 342000, 51129, 10400, 268680, 56542, 69700, 70280, 622984, 51100, 82880, 324220, 693, 488100, 121320, 337030, 48845, 43094, 198500, 129494, 71740, 21040, 236800, 406750, 92300, 1759540, 56785, 462840, 143100, 110910, 20770, 112090, 41290, 619745, 83858, 27830, 86600, 112620, 637657, 449964, 207600, 102350, 93030, 1098580, 27750, 48730, 26338, 245857, 163610, 78866, 92391, 30510, 110860, 1284000, 131940, 390580, 196190, 752614, 181040, 283560, 108890, 1240000, 118480, 1267000, 2717300, 274200, 41526, 756950, 1246700, 475440, 65610, 587040, 237500, 322460, 185180, 801590, 7686850, 120540, 527970, 239460, 1960582, 447400, 329750, 912050, 647500, 1285220, 140800, 437072, 446550, 1886068, 236040, 9976140, 2381740, 312685, 2766890, 582650, 945087, 1138910, 603700, 504782, 98480, 1219912, 678500, 301230, 244820, 514000, 547030, 2345410, 780580, 1648000, 1001450, 1127127, 357021, 329560, 300000, 1972550, 377835, 17075200, 144000, 923768, 803940, 8511965, 1919440, 9629091, 3287590, 9596960, ]
COLORS = 6  # E.g., white, yellow, orange, red, gray, black.
VERBOSE = True
optimal_chunk = sum(areas) / float(COLORS)

def FormatNumber(x):
    """Formats a long number to add thousand commas."""
    return '{0:10,d}'.format(int(round(x)))

def PrintChunks(chunks, avg_chunk):
    """Prints a list of chunks, along with the sum of their areas, and finally the length of the optimal/average chunk."""
    for i, chunk in enumerate(chunks):
        print 'Chunk %d sum = %s' % (i + 1, FormatNumber(sum(chunk))), chunk
    print 'Optimal chunk:\t%s (average of the above)' % FormatNumber(avg_chunk)

def EvaluateError(numbers, chunks, verbose=VERBOSE):
    """Given a list of numbers and their corresponding partitioned chunks list, evaluates the error.
    
    When verbose==True, also prints the given chunks.
    """
    chunk_areas = [sum(chunk) for chunk in chunks]
    avg_chunk = sum(chunk_areas) / float(len(chunks))
    diffs = [abs(chunk_area - avg_chunk) for chunk_area in chunk_areas]
    avg_diff = sum(diffs) / len(chunks)
    if verbose:
        PrintChunks(chunks, avg_chunk)
    print 'Avg. diff:\t%s\n' % FormatNumber(avg_diff)
    return avg_diff

def EvaluatePivots(numbers, pivots, verbose=VERBOSE):
    """Given a list of pivots, splits the list of numbers on those pivots into chunks, and evaluates
    the error. I.e., evaluates the average difference (in absolute value) between the 
    optimal/average chunk and the chunks resulted from the given pivots.
    """
    bounded_pivots = [0] + pivots + [len(numbers)]
    chunks = [numbers[left:right] for left, right in zip(bounded_pivots, bounded_pivots[1:])]
    return EvaluateError(numbers, chunks, verbose)

def Diff(a, b):
    return abs(a - b)

####################################################################################################
# 1

def GetEqualLengthChunks(l, n):
    """Yield successive n-sized chunks from l."""
    for i in xrange(0, len(l), n):
        yield l[i:i+n]

print '1. Simplest split. Equal number of elements in each chunk.'        
equal_length_chunks = list(GetEqualLengthChunks(areas, int(math.ceil(len(areas) / float(COLORS)))))
EvaluateError(areas, equal_length_chunks)

####################################################################################################
# 2

print ('2. Greedy algorithm that opens a new chunk only once the sum of the current chunk has ' 
       'passed the average/optimal chunk sum (always over-estimates a little bit).')
over_estimated_chunks = []
new_chunk = []
for area in areas:
    new_chunk.append(area)
    if sum(new_chunk) >= optimal_chunk:
        over_estimated_chunks.append(new_chunk)
        new_chunk = []
if new_chunk:
    over_estimated_chunks.append(new_chunk)
EvaluateError(areas, over_estimated_chunks)

####################################################################################################
# 3

print ('3. Greedy like #2, but looks at everything so far, and opens a new chunk only when ' 
       '"in total", we are over-estimating.')
balanced_chunks = []
balanced_pivots = []
new_chunk = []
for i, area in enumerate(areas):
    new_chunk.append(area)
    if sum(areas[:i + 1]) >= optimal_chunk * (len(balanced_chunks) + 1):
        balanced_chunks.append(new_chunk)
        balanced_pivots.append(i +  1)
        new_chunk = []
if new_chunk:
    balanced_chunks.append(new_chunk)
EvaluateError(areas, balanced_chunks)

####################################################################################################
# 4

print '4. Improve the result of #3 by trying to shift each index left or right, until you converge.'
print '   (AI-approach to the problem, but that did not work very well. Skipping.' 

def ShiftAnIndex(numbers, pivots, index, direction):
    """Shifts the given index in the pivots list in the given direction.
    
    Args:
        numbers is the areas list. E.g., [1, 21, 26, 458, 61, 2, 160, 261, ...]
        pivots are the split indices. E.g., [5, 14, 23, 55, 103]
        index is the index to shift.
        direction is +1 or -1.
    Returns:
        The new pivots if succeeded, or None if not.
    """
    if pivots[index] == 0 and direction == -1:
        return None
    if pivots[index] == len(numbers) - 1 and direction == +1:
        return None
    if index + direction in range(len(pivots)) and pivots[index] == pivots[index + direction]:
        return None
    new_pivots = [pivot if i != index else pivot + direction
                  for i, pivot in enumerate(pivots)]
    return new_pivots

def GetNextStates(numbers, pivots):
    """Tries all possible shifts on the pivots, and returns a list of all the "next" candidates."""
    next_states = []
    for index in range(len(pivots)):
        for direction in (-1, +1):
            next_state = ShiftAnIndex(numbers, pivots, index, direction)
            if next_state:
                next_states.append(next_state)
    return next_states

def ImprovePivots(numbers, pivots):
    """Greedy gradient-descent-like search for a local minimum of error. While there's room for 
    improvement by shifting the pivots a little bit, improve by doing so.
    
    This algorithm doesn't work very well for our problem.
    """
    error = EvaluatePivots(numbers, pivots)
    stuck = False
    while not stuck:
        stuck = True
        for next_state in GetNextStates(numbers, pivots):
            next_error = EvaluatePivots(numbers, next_state)
            if next_error < error:
                pivots = next_state
                error = next_error
                stuck = False
                print 'Improved...', error, pivots
                break

#ImprovePivots(areas, balanced_pivots)

####################################################################################################
# 5

print '5. Optimal dynamic programming algorithm.'
print '   Complexity: O(N^2 * K) time, O(N * K) space, to split a list of N numbers into K optimal chunks.'

def DynamicProgramming(numbers, num_chunks):
    n = len(numbers)
    k = num_chunks
    avg_chunk = sum(numbers) / float(k)
    best_error = [[0 for unused_x in xrange(k)] for unused_y in xrange(n + 1)]  # 2D matrix.
    best_pivots = [[[] for unused_x in xrange(k)] for unused_y in xrange(n + 1)]  # 2D matrix.
    
    # Fill the first row (0).
    for q in range(n + 1):
        best_error[q][0] = Diff(sum(numbers[:q]), avg_chunk)

    # Fill the second row (1).
    q = 0
    pivot = 0
    while q <= n:
        # Adjust pivot.
        while (pivot < q and 
                Diff(sum(numbers[:pivot]), sum(numbers[pivot:q])) > 
                Diff(sum(numbers[:pivot + 1]), sum(numbers[pivot + 1:q]))):
            pivot += 1
        best_error[q][1] = Diff(sum(numbers[:pivot]), avg_chunk) + Diff(sum(numbers[pivot:q]), avg_chunk)
        best_pivots[q][1].append(pivot)
        q += 1

    for p in range(2, k):
        for q in range(n + 1):
            min_error = -1
            min_pivots = (-1, -1)
            # The following loop works but it takes O(n^2) in each p q iteration, making the complexity O(n^3 * k) total.
#             for m in range(q + 1):
#                 for pivot in range(m, q + 1):
#                         error = best_error[m][p - 2] + Diff(sum(numbers[m:pivot]), avg_chunk) + Diff(sum(numbers[pivot:q]), avg_chunk)
#                         if min_error == -1 or error < min_error:
#                             min_error = error
#                             min_pivots = best_pivots[m][p - 2] + [m, pivot]
            # The following loop is more efficient - takes O(n) linear time in each p q iteration, making the complexity O(n^2 * k) total.
            pivot = 0
            for m in range(q + 1):
                if pivot < m:
                    pivot = m
                while (pivot < q and 
                       Diff(sum(numbers[m:pivot]), sum(numbers[pivot:q])) > 
                       Diff(sum(numbers[m:pivot + 1]), sum(numbers[pivot + 1:q]))):
                    pivot += 1
                error = best_error[m][p - 2] + Diff(sum(numbers[m:pivot]), avg_chunk) + Diff(sum(numbers[pivot:q]), avg_chunk)
                if min_error == -1 or error < min_error:
                    min_error = error
                    min_pivots = best_pivots[m][p - 2] + [m, pivot]
            
            best_error[q][p] = min_error
            best_pivots[q][p] = min_pivots
    #pprint(best_error)
    #pprint(best_pivots)
    #print best_error[n][k - 1] / num_chunks
    #print best_pivots[n][k - 1]
    return best_pivots[n][k - 1]

#EvaluatePivots(areas[:10], DynamicProgramming(areas[:10], 3))
EvaluatePivots(areas, DynamicProgramming(areas, COLORS))

####################################################################################################
# 6
print '6. Optimal dynamic programming algorithm that runs in linear time!!!'
print '   Complexity: O(N * K) time and space, to split a list of N numbers into K optimal chunks.'

class Summator:
    """Returns the sum of a sub-array in O(1) by pre-computing the incremental-sums array."""
    def __init__(self, numbers):
        self.sum_array = [0]
        s = 0
        for x in numbers:
            s += x
            self.sum_array.append(s)
    def Sum(self, i, j):
        return self.sum_array[j] - self.sum_array[i]

def DynamicProgrammingLinear(numbers, num_chunks):
    n = len(numbers)
    k = num_chunks
    s = Summator(numbers)  # s.Sum(i, j) returns sum(numbers[i:j]) in O(1).
    avg_chunk = s.Sum(0, n) / float(k)
    best_error = [[0 for unused_x in xrange(k)] for unused_y in xrange(n + 1)]  # 2D matrix.
    best_pivots = [[[] for unused_x in xrange(k)] for unused_y in xrange(n + 1)]  # 2D matrix.
    
    # Fill the first row (0).
    for m in range(n + 1):
        best_error[m][0] = Diff(s.Sum(0, m), avg_chunk)

    for p in range(1, k):
        m = n
        pivot = n
        while m >= 0:
            if pivot > m:
                pivot = m
            while s.Sum(pivot, m) < avg_chunk and pivot > 0:
                pivot -= 1
            if (best_error[pivot + 1][p - 1] + Diff(s.Sum(pivot + 1, m), avg_chunk) < 
                    best_error[pivot][p - 1] + Diff(s.Sum(pivot, m), avg_chunk)):
                pivot += 1
            best_error[m][p] = best_error[pivot][p - 1] + Diff(s.Sum(pivot, m), avg_chunk)
            best_pivots[m][p] = best_pivots[pivot][p - 1] + [pivot]
            m -= 1
    return best_pivots[n][k - 1]

start_time = time.clock()
EvaluatePivots(areas, DynamicProgrammingLinear(areas, COLORS))
elapsed_time = time.clock() - start_time
print 'Running time:', elapsed_time