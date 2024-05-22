export const isEmpty = (str: string | undefined): boolean => 
  str ? str.trim().length === 0 : false;