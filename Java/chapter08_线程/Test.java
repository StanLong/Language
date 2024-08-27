/*
    ��ʱ��
    ÿ��һ�ι̶���ʱ��ִ��һ�δ���
*/

import java.io.*;
import java.text.*;
import java.util.*;
public class Test{
    
    public static void main(String[] args) throws Exception{
        Timer t = new Timer();
        
        t.schedule(new LogTimerTask(){}, // ָ����ʱ����
                    new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").parse("2021-07-25 19:50:00 000"),  // ʱ��
                    10*1000 // ���ʱ��
                   );
        
    }
}

// ָ����ʱ����
class LogTimerTask extends TimerTask{
    public void run(){
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").format(new Date()));
    }
}