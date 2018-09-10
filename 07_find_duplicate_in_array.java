class FindDuplicate {

  // Solution 1
  // Function to find a duplicate element in a limited range array
  public static int findDuplicate1(int[] A) {
    // create an visited array of size n+1
    // we can also use map instead of visited array
    boolean visited[] = new boolean[A.length + 1];

    // for each element of the array mark it as visited and
    // return the element if it is seen before
    for (int i = 0; i < A.length; i++) {
      // if element is seen before
      if (visited[A[i]]) {
        return A[i];
      }

      // mark element as visited
      visited[A[i]] = true;
    }

    // no duplicate found
    return -1;
  }

  // Solution 2
  // Function to find  a duplicate element in a limited range
  public static int findDuplicate2(int[] A) {
    int duplicate = -1;

    // do for each element in the array
    for (int i = 0; i < A.length; i++) {
      int absVal = (A[i] < 0) ? -A[i] : A[i];

      // make element at index abs(arr[i]) - 1 negative
      // if it is possible
      if (A[absVal - 1] >= 0) {
        A[absVal - 1] = -A[absVal - 1];
      }
      else {
        // if element is already negative, it is repeated
        duplicate = absVal;
        break;
      }
    }

    // restore original array before returning
    for (int i = 0; i < A.length; i++) {
      // make negative element positive
      if (A[i] < 0) {
        A[i] = -A[i];
      }
    }

    return duplicate;
  }
  // main function
  public static void main(String[] args) {
    // input array contains n numbers between [1 to n - 1]
    // with one duplicate, where n = A.length
    int[] A = { 1, 2, 3, 4, 4 };

    System.out.println("Duplicate element is " + findDuplicate2(A));
  }
}