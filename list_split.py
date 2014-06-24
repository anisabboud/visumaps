'''
Created on May 30, 2014

@author: Anis
'''

import math
import time
# from pprint import pprint

areas = [1, 21, 26, 458, 61, 2, 160, 261, 2166000, 181, 754, 468, 455, 443, 811, 344, 748, 389, 702, 1001, 616, 2944, 12200, 431, 300, 103000, 22966, 13940, 5770, 316, 2586, 4033, 163270, 28450, 2170, 28051, 47000, 214970, 9250, 665, 18270, 23000, 15007, 17363, 2040, 45226, 5128, 267667, 36120, 11437, 11300, 600370, 25333, 20273, 30355, 825418, 64589, 10991, 1565000, 212460, 17820, 28748, 29800, 78200, 65200, 1030700, 176200, 111370, 33843, 342000, 51129, 10400, 268680, 56542, 69700, 70280, 622984, 51100, 82880, 324220, 693, 488100, 121320, 337030, 48845, 43094, 198500, 129494, 71740, 21040, 236800, 406750, 92300, 1759540, 56785, 462840, 143100, 110910, 20770, 112090, 41290, 619745, 83858, 27830, 86600, 112620, 637657, 449964, 207600, 102350, 93030, 1098580, 27750, 48730, 26338, 245857, 163610, 78866, 92391, 30510, 110860, 1284000, 131940, 390580, 196190, 752614, 181040, 283560, 108890, 1240000, 118480, 1267000, 2717300, 274200, 41526, 756950, 1246700, 475440, 65610, 587040, 237500, 322460, 185180, 801590, 7686850, 120540, 527970, 239460, 1960582, 447400, 329750, 912050, 647500, 1285220, 140800, 437072, 446550, 1886068, 236040, 9976140, 2381740, 312685, 2766890, 582650, 945087, 1138910, 603700, 504782, 98480, 1219912, 678500, 301230, 244820, 514000, 547030, 2345410, 780580, 1648000, 1001450, 1127127, 357021, 329560, 300000, 1972550, 377835, 17075200, 144000, 923768, 803940, 8511965, 1919440, 9629091, 3287590, 9596960, ]
#areas = [11, 30, 84, 146, 252, 214, 256, 476, 1255, 930, 1192, 1149, 1338, 4307, 8994]
areas = [round(x, 2) for x in [0.24560014516464435,0.134178588668874,0.021398353717813734,0.31246903684950667,0.2307081218023086,35304.6822876761,0.12450625753263012,0.8139531104898197,0.771016509475885,0.22104614207637496,0.48570585010020295,0.6463260096024896,0.2569590413622791,0.4331823203183376,0.30177527458727127,0.4558064771699719,0.958622952181031,0.6131415329000447,2.968702875332383,11.880246400571195,0.4446166131456266,0.07358512913924642,566.9139456273047,24.85164008164429,15.218539416287967,5.6607137263636105,0.3005406349839177,6.25263759156951,4.036863661574898,146.4395311163753,26.579488526302157,1.5600769823940936,26.6943628473673,50.47413824044634,213.91352134358021,8.403504202986369,0.7097447869164171,19.893696889758722,22.854274413301027,15.271122595178895,21.27530853782082,2.1675264981458895,168.57948115938052,5.184221380157396,261.0018529929075,33.73953735017858,13.37291299275239,10.892712037602905,677.755807023379,45.37914794347307,42.025568277378625,39.6768233985058,965.8027279666858,214.99862638338527,12.121225046641484,3343.8542702516716,357.02644009504,22.85936736338772,49.78248393058311,50.72677619701426,75.79070820169,199.392003120538,1183.8421128533737,251.47585348966822,96.99212164190249,72.02351735519187,347.7575708970253,100.68356108761509,14.863457495768671,483.5943358020895,108.28024777030078,126.36399993980012,191.50323160866537,629.831687283935,53.0888690351494,85.25430327796494,3446.2330849191494,0.49874478444689885,782.0669417941899,132.85772805521265,1804.5127486909942,111.25378212417854,135.13075920541814,354.2260026730655,136.24845717509743,73.37498261053406,21.816223984467797,255.30697185602912,475.96221758091997,121.53977249459422,2057.958773094535,58.288968515669694,469.1805706403102,232.20171576830035,208.8269266178031,30.621554084093077,121.13554062660842,88.05656363640446,634.7034484915494,184.3707097739607,27.293705337739084,148.60621056509262,119.8898475610331,478.88277745913365,2156.148672003057,585.7008078638682,201.07869805778319,1192.3346956469904,30.005723684371333,54.2767401011879,25.421753627611906,253.25817022577394,228.9104126823513,187.53653467420372,152.56711408895353,76.48452015985094,126.51212133468653,1373.5501321972988,216.31771897591534,436.68093690360547,210.48245539781055,800.5338190188486,190.581776109786,255.78741862722381,116.71827387771918,1387.0814504469163,126.71863277864759,1305.257722126582,6136.206446075579,286.85962976403243,98.03742285447152,1254.9499012809392,1312.5245507922955,471.2761664252175,67.27857970879995,670.5254828071047,486.09389828768326,328.2025135417789,277.38580502642435,872.5826717872405,9637.657558144885,209.74291856429772,491.05101993899734,244.6197370646987,2323.150983309155,805.6348313024646,329.4579538908147,930.3437740094669,933.0221927614475,1338.232637572648,189.89668063251884,623.751745827627,777.9921804251426,2023.6337856440223,243.0106194163236,50808.09034978063,3010.2226198573844,830.8256264569864,4307.005863842278,595.7874648828583,959.9132130812504,1149.0512929807446,1389.5212400563541,871.2334866555539,149.69673251311178,1602.5953411348746,765.7250452211738,559.8313107034191,702.5245535704926,554.8267382389895,1163.7858249607598,2355.06968638087,1294.7183586969113,2296.7850056847965,1256.4099120842147,1161.034123812089,905.7701883623959,360.69620051188394,304.3519241918402,2367.255120585389,593.0681606052385,82680.8685007803,162.64803095161915,939.8543033568567,1168.943391542256,8993.90876667582,1884.08130088076,21649.012428843387,3759.9376627192833,14888.371845973132]]
print sum(areas), len(areas), areas

 
COLORS = 5  # E.g., white, yellow, orange, red, gray, black.
VERBOSE = True
optimal_chunk = sum(areas) / float(COLORS)

def FormatNumber(x):
    """Formats a long number to add thousand commas."""
    return '{0:10,d}'.format(int(round(x)))

def PrintChunks(chunks, avg_chunk):
    """Prints a list of chunks, along with the sum of their areas, and finally the length of the optimal/average chunk."""
    for i, chunk in enumerate(chunks):
        print 'Chunk %d sum = %s' % (i + 1, FormatNumber(sum(chunk)))#, chunk
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