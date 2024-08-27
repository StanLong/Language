/*
    
*/

import java.util.Random;

public class Test{
    
    public static void main(String[] args) throws Exception{
        Random r = new Random();
        int[] a = new int[5];
        int index = 0;
        while(index <5){
            int temp = r.nextInt(6);
            
            if(temp != 0 && !contains(a, temp)){
                a[index++] = temp;
            }
        }
        for(int i =0; i<a.length; i++){
            System.out.println(a[i]);
        }
    }
    
    // contains 方法判断 temp 在数组 a 中是否存在
    public static boolean contains(int a[], int temp){
        for(int i=0; i<a.length; i++){
            if(a[i] == temp){
                return true;
            }
        }
        return false;
    }
    
}
