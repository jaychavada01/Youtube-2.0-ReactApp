export const API_KEY = "AIzaSyAmf2AN-TVsCKUBLUJZWnlfKN4XwVssTC0";

// converting view into M and K
export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
