import java.util.Arrays;

class SegregateOddEven {
  // Function to sort binary array in linear time
  public static void segregateEvenOdd(int[] A) {
    int left = 0;
    int right = A.length - 1;
    while (left < right) {
      int j = 0;
      while (A[left]%2 == 0 && left < right) {
        left++;
      }

      while (A[right]%2 == 1 && left < right) {
        right--;
      }

      if (left < right) {
        swap(A, left, right);
        left++;
        right--;
      }
    }
  }

  // fuction is rearrange the array in given way.
  static void rearrangeEvenAndOdd(int arr[], int n) {
    // variables
    int j = -1, temp;

    // quick sort method
    for (int i = 0; i < n; i++) {

      // if array of element
      // is odd then swap
      if (arr[i] % 2 == 0) {

        // increment j by one
        j++;

        // swap the element
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Utility function to swap elements at two indices in the given array
  private static void swap(int[] A, int left, int right) {
    int temp = A[left];
    A[left] = A[right];
    A[right] = temp;
  }

  // Sort binary array in linear time
  public static void main(String[] args) {
    int A[] = { 12, 34, 45, 9, 8, 90, 3 }, n = A.length;

    rearrangeEvenAndOdd(A, n);

    // print the rearranged array
    System.out.println(Arrays.toString(A));
  }
}