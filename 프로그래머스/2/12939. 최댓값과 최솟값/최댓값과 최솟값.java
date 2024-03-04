class Solution {
    public String solution(String s) {
        String[]  str = s.split(" ");
        int[] numbers = new int[str.length];
        int max = Integer.parseInt(str[0]);
        int min = Integer.parseInt(str[0]);
        for(int i = 0;i < str.length;i++){
            numbers[i] = Integer.parseInt(str[i]);
            if(numbers[i]>max){
                max = numbers[i];
            }
            if(numbers[i]<min){
                min = numbers[i];
            }
        }
        return Integer.toString(min)+" "+Integer.toString(max);
    }
}