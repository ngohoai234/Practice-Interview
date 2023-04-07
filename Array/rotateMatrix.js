// 7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// row < row / 2
// col < col - currentRow - 1

//     col_top_right = row: col, col : length_row - current_row - 1
//     col_bottom_right row : row_length - current_row - 1 , col : length_row - col - 1
//     col_left_bottom : row : length_row - 1 - col, col : row

const rotateMatrix = (arr) => {
  const n = arr.length;
  for (let i = 0; i < Math.round(n / 2); i++) {
    const startRow = i;
    const last = n - 1 - i;
    for (let j = startRow; j < last; j++) {
      const tempTop = arr[i][j];
      const offset = n - 1 - j;

      arr[i][j] = arr[offset][i];
      arr[offset][i] = arr[last][offset];
      arr[last][offset] = arr[j][last];
      arr[j][last] = tempTop;
    }
  }
  return arr;
};

console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
