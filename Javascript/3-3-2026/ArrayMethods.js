/**
 * Array Methods
 * 1. push() - adds one or more elements to the end of an array and returns the new length of the array.
 * 2. pop() - removes the last element from an array and returns that element.
 * 3. shift() - removes the first element from an array and returns that element.
 * 4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
 * 5. splice() - changes the contents of an array by removing or replacing existing elements
 *   and/or adding new elements in place. It returns an array containing the deleted elements.
 * 6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 * 7. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 8. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * 9. forEach() - executes a provided function once for each array element.
 * 10. map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
 * 11. filter() - creates a new array with all elements that pass the test implemented by the provided function.
 * 12. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * 13. find() - returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
 * 14. findIndex() - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
 * 15. sort() - sorts the elements of an array in place and returns the sorted array.
 * 16. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 * 17. concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 * 18. join() - joins all elements of an array into a string and returns this string.
 * 20. length - is a property of an array that represents the number of elements in the array. It is not a method, but it is commonly used to determine the size of an array.
 * 21. toString() - returns a string representing the specified array and its elements.
 * 22. valueOf() - returns the primitive value of the specified array.
 * 23. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * 24. flatMap() - first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
 * 25. from() - creates a new, shallow-copied Array instance from an array-like or iterable object.
 * 26. of() - creates a new Array instance with a variable number of arguments,
 *   regardless of number or type of the arguments.
 * 27. isArray() - determines whether the passed value is an Array.
 * 28. fill() - fills all the elements of an array from a start index to an end index with a static value.
 * 29. copyWithin() - shallow copies part of an array to another location in the same array and returns it without modifying its length.
 * 30. entries() - returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 * 31. keys() - returns a new Array Iterator that contains the keys for each index in the array.
 * 32. values() - returns a new Array Iterator that contains the values for each index in the array.
 * 33. every() - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 * 34. some() - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
 * 35. reduceRight() - applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
 * 36. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * 37. flatMap() - first maps each element using a mapping function, then fl
 * attens the result into a new array. It is identical to a map followed by a flat of depth 1.
 * 38. from() - creates a new, shallow-copied Array instance from an array-like or iterable object.
 * 39. of() - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
 */

// Task1: Create an array of your favorite fruits and perform the following operations:
// 1. even numbet should be add new array and odd number should be new array.
// 2. even numbers should be add beginning of the array and odd numbers should be add end of the array.
// Task2 : remove the all elments from the array which are greater than 5.
// Task3 : find the sum of all the elements in the array.
// Task4 : find the average of all the elements in the array.
// Task5 : find the maximum and minimum element in the array.
// Task6 : sort the array in ascending and descending order.
// Task7 : find the index of a specific element in the array.
// Task8 : check if a specific element exists in the array.
// Task9 : create a new array that contains only the unique elements from the original array.
// Task10 : create a new array that contains the squares of all the elements in the original array.
// Task11 : create a new array that contains the elements of the original array in reverse order.
// Task12 : create a new array that contains the elements of the original array multiplied by a specific number.
// Task13 : create a new array that contains the elements of the original array divided by a specific number.
// Task14 : create a new array that contains the elements of the original array raised to the power of a specific number.
// Task15 : create a new array that contains the elements of the original array filtered by a specific condition.
// Task16 : create a new array that contains the elements of the original array mapped to a specific function.
// Task17 : create a new array that contains the elements of the original array reduced to a single value by a specific function.
// Task18 : create a new array that contains the elements of the original array sorted by a specific criteria.
// Task19 : create a new array that contains the elements of the original array grouped by a specific criteria.
// Task20 : create a new array that contains the elements of the original array sliced by a specific range.
// Task21 : create a new array that contains the elements of the original array spliced by a specific range.
// Task22 : create a new array that contains the elements of the original array concatenated with another array.
// Task23 : create a new array that contains the elements of the original array joined by a specific separator.
//  Task24 : create a new array that contains the elements of the original array split by a specific separator.
// Task25 : create a new array that contains the elements of the original array reversed by a specific criteria.
// Task26 : create a new array that contains the elements of the original array sorted by a specific criteria.
// Task27 : create a new array that contains the elements of the original array filtered by a specific condition.
// Task28 : create a new array that contains the elements of the original array mapped to a specific function.
// Task29 : create a new array that contains the elements of the original array reduced to a single value by a specific function.
// Task30 : create a new array that contains the elements of the original array grouped by a specific criteria.
// Task31 : create a new array that contains the elements of the original array sliced by a specific range.
// Task32 : create a new array that contains the elements of the original array spliced by a specific range.
// Task33 : create a new array that contains the elements of the original array concatenated with another array.
// Task34 : create a new array that contains the elements of the original array joined by a specific separator.
// Task35 : create a new array that contains the elements of the original array split by a specific separator.
// Task36 : create a new array that contains the elements of the original array reversed by a specific criteria.
// Task37 : create a new array that contains the elements of the original array sorted by a specific criteria.
// Task38 : create a new array that contains the elements of the original array filtered by a specific condition.
// Task39 : create a new array that contains the elements of the original array mapped to a specific function.
// Task40 : create a new array that contains the elements of the original array reduced to a single value by a specific function.
